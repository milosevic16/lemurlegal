#!/usr/bin/env python3
"""
One-shot extractor: decode the 12 Lemur Legal "Standalone" HTML exports and
emit a Vite + Vue 3 source tree (views, scoped styles, effect modules, fonts).

Run from the v2 project root:  python3 tools/extract.py
Source HTML is read from ../projects/lemurlegal (SRC below).
"""
import re, json, base64, gzip, hashlib, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
PROJ = os.path.dirname(HERE)
SRC = os.environ.get("LL_SRC", "/Users/gasper/Documents/projects/lemurlegal")

# filename (in SRC) -> (route slug, PascalCase component name)
FILES = [
    ("Lemur Legal - HOME - Standalone.html",                       "",                              "Home"),
    ("Lemur Legal - MiCA White Paper - Standalone.html",           "mica_white_paper",              "MiCAWhitePaper"),
    ("Lemur Legal - Crypto Legal Opinion - Standalone (2).html",   "crypto_legal_opinion",          "CryptoLegalOpinion"),
    ("Lemur Legal - Regulatory Compliance - Standalone (1).html",  "regulatory_compliance",         "RegulatoryCompliance"),
    ("Lemur Legal - Incorporation - ESOP - Standalone (1).html",   "incorporation_esop",            "IncorporationESOP"),
    ("Lemur Legal - IP Protection - Standalone (1).html",          "ip_protection",                 "IPProtection"),
    ("Lemur Legal - Contracts - Commercial - Standalone.html",     "startups_contracts",            "ContractsCommercial"),
    ("Lemur Legal - Regulatory Qualification - Standalone.html",   "regulatory_qualification",      "RegulatoryQualification"),
    ("Lemur Legal - Investment Readiness Review - Standalone (1).html", "investment_readiness_review", "InvestmentReadiness"),
    ("Lemur Legal - Compliance Frameworks - Standalone (1).html",  "compliance_frameworks",         "ComplianceFrameworks"),
    ("Lemur Legal - Blog - Standalone (2).html",                   "blog",                          "Blog"),
    ("Lemur Legal - Contact - Standalone (1).html",                "contact",                       "Contact"),
]

SLUGS = [slug for _, slug, _ in FILES if slug]

AES_BY_PAPER = {"#D2DDD7": "Editorial", "#C0CEC8": "Live", "#F0EFEA": "Redacted"}
ACC_BY_BLUE = {"#7F59F5": "Baltic", "#9B2242": "Thermal", "#3A5F8A": "Nordic"}


def section(src, kind):
    m = re.search(r'type="__bundler/%s">(.*?)</script>' % kind, src, re.S)
    return json.loads(m.group(1)) if m else None


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


def sanitize_css(css):
    """Drop bare-identifier declarations (e.g. a stray `;e;`) that the source's
    lenient browser parser ignores but PostCSS rejects. A declaration bounded by
    `{`/`;` and `;`/`}` containing only an identifier (no colon) is invalid."""
    return re.sub(r"(?<=[;{])\s*[a-zA-Z][\w-]*\s*(?=[;}])", "", css)


def split_rules(css):
    """Split a stylesheet into top-level rules, honoring nested braces."""
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    rules, buf, depth = [], "", 0
    for c in css:
        buf += c
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                rules.append(buf.strip())
                buf = ""
    return [r for r in rules if r.strip()]


def selector_of(rule):
    return rule.split("{", 1)[0].strip()


def parse_decls(block):
    out = []
    for d in block.split(";"):
        d = d.strip()
        if not d or ":" not in d:
            continue
        k, v = d.split(":", 1)
        out.append((k.strip(), v.strip()))
    return out


# Selectors that belong to the shared chrome (masthead / wire / footer) or are
# genuinely-shared layout primitives used by the chrome. These go to the global
# base.css. Everything else is page content and gets scoped per view, so two
# pages defining the same content class (e.g. `.hero`) never bleed into each
# other.
CHROME_TOKENS = (
    ".masthead", ".nav-toggle", ".mobile-menu", ".mm-", ".nl-", ".head-right",
    ".brand", ".logo-placeholder", ".status", ".lang", ".wire", ".seam",
    ".foot", "#site-head", ".skip", ".container", ".dot", ".ringed", ".bn",
)


def is_chrome(selector):
    if any(tok in selector for tok in CHROME_TOKENS):
        return True
    return re.search(r"\.nav(?![\w-])", selector) is not None


def rewrite_links(html):
    # Internal absolute links -> relative SPA paths (a global click interceptor
    # turns same-origin <a href> into router navigations).
    html = re.sub(r'https?://lemur\.legal/en/([a-z_]+)', r'/\1', html)
    html = re.sub(r'https?://lemur\.legal/en#([a-z_]+)', r'/#\1', html)
    html = re.sub(r'https?://lemur\.legal/en(?=["#/])', r'/', html)
    html = html.replace('href="https://lemur.legal/en"', 'href="/"')
    return html


# ---- mechanical JS transforms so effect modules tear down cleanly ----
def transform_js(js):
    # el.addEventListener( -> __fx.on(el,   (skip member chains like e.target.)
    js = re.sub(r'(?<![.\w$])([A-Za-z_$][\w$]*)\.addEventListener\(', r'__fx.on(\1, ', js)
    # el.animate( -> __fx.anim(el,          (skip e.target.animate -> left native)
    js = re.sub(r'(?<![.\w$])([A-Za-z_$][\w$]*)\.animate\(', r'__fx.anim(\1, ', js)
    return js


EFFECTS_HEADER = """// @ts-nocheck
// AUTO-GENERATED from the original standalone page script by tools/extract.py.
// Timers / listeners / observers / animations are routed through a tracker so
// they tear down on route change. Edit the extractor, not this file.
import { createTracker } from '@/composables/tracker'

export function initEffects(): () => void {
  const __fx = createTracker()
  const requestAnimationFrame = __fx.raf
  const cancelAnimationFrame = __fx.caf
  const setTimeout = __fx.setTimeout
  const clearTimeout = __fx.clearTimeout
  const setInterval = __fx.setInterval
  const clearInterval = __fx.clearInterval
  const IntersectionObserver = __fx.IO
  try {
%s
  } catch (e) { console.error('[effects] init failed', e) }
  return __fx.dispose
}
"""


def main():
    fonts = {}          # sha8 -> bytes
    fontface_rules = {} # normalized -> pretty text (deduped, uuid->local)
    base_rules = {}     # normalized -> pretty text (chrome / reset / keyframes)
    page_scoped = {}    # component -> list[pretty] (page-unique content rules)
    root_vars = {}      # component -> dict(var -> value) from that page's :root
    pages_meta = []     # for generated pages.ts / router

    for fname, slug, comp in FILES:
        path = os.path.join(SRC, fname)
        src = open(path).read()
        template = section(src, "template")
        manifest = section(src, "manifest")

        # ---- title / meta description ----
        title = re.search(r"<title>(.*?)</title>", template, re.S)
        title = norm(title.group(1)) if title else "Lemur Legal"
        desc = re.search(r'<meta name="description" content="(.*?)">', template, re.S)
        desc = norm(desc.group(1)) if desc else ""

        # ---- styles: separate @font-face from page CSS ----
        page_css_parts = []
        for sm in re.finditer(r"<style>(.*?)</style>", template, re.S):
            css = sm.group(1)
            # pull @font-face blocks out
            for fm in re.finditer(r"@font-face\s*\{.*?\}", css, re.S):
                block = fm.group(0)
                # map every referenced uuid to a deduped local font file
                def repl(u):
                    uuid = u.group(1)
                    ent = manifest.get(uuid)
                    if not ent:
                        return u.group(0)
                    raw = base64.b64decode(ent["data"])
                    if ent.get("compressed"):
                        raw = gzip.decompress(raw)
                    sha = hashlib.sha256(raw).hexdigest()[:8]
                    fonts[sha] = raw
                    return 'url("/fonts/%s.woff2")' % sha
                local = re.sub(r'url\("([0-9a-f-]{36})"\)', repl, block)
                fontface_rules[norm(local)] = local
            css = re.sub(r"@font-face\s*\{.*?\}", "", css, flags=re.S)
            page_css_parts.append(css)
        page_css = sanitize_css("\n".join(page_css_parts))

        # ---- per-page :root custom properties (fonts/spacing/term differ per
        #      page; applied at runtime per view so they don't collide) ----
        rd = {}
        for rm in re.finditer(r":root\s*\{([^}]*)\}", page_css):
            for k, v in parse_decls(rm.group(1)):
                rd[k] = v
        root_vars[comp] = rd

        # ---- theme inference from baked :root ----
        paper = re.search(r"--paper:\s*(#[0-9A-Fa-f]{6})", page_css)
        blue = re.search(r"--blue:\s*(#[0-9A-Fa-f]{6})", page_css)
        aes = AES_BY_PAPER.get(paper.group(1).upper(), "Editorial") if paper else "Editorial"
        acc = ACC_BY_BLUE.get(blue.group(1).upper(), "Baltic") if blue else "Baltic"
        if comp == "Home":   # runtime applyTheme default overrides the baked :root
            aes, acc = "Live", "Baltic"

        # ---- classify CSS rules: chrome/reset/tokens/keyframes -> global base,
        #      everything else -> scoped to this page (deduped within page) ----
        scoped, seen = [], set()

        def is_global(sel, body=""):
            return (
                sel in (":root", "*", "html", "body")
                or sel.replace(" ", "") in ("*,*::before,*::after", "html,body", "*,::before,::after")
                or sel.startswith("@keyframes")
                or sel.startswith("@font-face")
                or is_chrome(sel)
            )

        def add_scoped(rule):
            k = norm(rule)
            if k not in seen:
                seen.add(k)
                scoped.append(rule)

        for r in split_rules(page_css):
            sel = selector_of(r)
            if sel == ":root":
                continue  # captured into root_vars, applied per view at runtime
            if sel.startswith("@media"):
                # split the responsive block: chrome inners -> base @media,
                # content inners -> scoped @media (keeps chrome global, content local)
                prelude = sel
                inner = r[r.index("{") + 1 : r.rindex("}")]
                base_inner, scoped_inner = [], []
                for ir in split_rules(inner):
                    (base_inner if is_global(selector_of(ir)) else scoped_inner).append(ir)
                if base_inner:
                    block = prelude + " {\n" + "\n".join(base_inner) + "\n}"
                    base_rules[norm(block)] = block
                if scoped_inner:
                    add_scoped(prelude + " {\n" + "\n".join(scoped_inner) + "\n}")
            elif is_global(sel):
                base_rules[norm(r)] = r
            else:
                add_scoped(r)
        page_scoped[comp] = scoped

        # ---- main content ----
        mm = re.search(r"<main\b[^>]*>.*?</main>", template, re.S)
        main_html = rewrite_links(mm.group(0)) if mm else "<main id=\"main\"></main>"

        # ---- scripts -> single effects body ----
        bodies = []
        for sm in re.finditer(r"<script(?![^>]*src=)([^>]*)>(.*?)</script>", template, re.S):
            attr, body = sm.group(1), sm.group(2)
            if "class Component extends DCLogic" in body:
                # HOME: lift componentDidMount() body, drop the applyTheme call
                cdm = re.search(r"componentDidMount\(\)\s*\{(.*)\}\s*\}\s*$", body, re.S)
                if cdm:
                    b = cdm.group(1)
                    b = re.sub(r"\bthis\.applyTheme\(\);", "", b)
                    bodies.append(b)
                continue
            if body.strip():
                bodies.append(body)
        effects = transform_js("\n".join(bodies))

        pages_meta.append((slug, comp, title, desc, aes, acc, main_html, effects))

    # ================= write outputs =================
    os.makedirs(os.path.join(PROJ, "public", "fonts"), exist_ok=True)
    os.makedirs(os.path.join(PROJ, "src", "styles"), exist_ok=True)
    os.makedirs(os.path.join(PROJ, "src", "views"), exist_ok=True)

    for sha, raw in fonts.items():
        with open(os.path.join(PROJ, "public", "fonts", sha + ".woff2"), "wb") as fh:
            fh.write(raw)

    with open(os.path.join(PROJ, "src", "styles", "fonts.css"), "w") as fh:
        fh.write("/* AUTO-GENERATED: deduped @font-face rules. */\n")
        fh.write("\n".join(fontface_rules.values()))
        fh.write("\n")

    with open(os.path.join(PROJ, "src", "styles", "base.css"), "w") as fh:
        fh.write("/* AUTO-GENERATED: shared rules (reset, chrome, primitives, keyframes). */\n")
        # A default :root so chrome has sane tokens before any view mounts; each
        # view re-applies its own :root vars at runtime (see useRootVars).
        default_root = ";\n  ".join(f"{k}:{v}" for k, v in root_vars["Home"].items())
        fh.write(":root{\n  " + default_root + ";\n}\n\n")
        roots = [r for r in base_rules.values() if selector_of(r) in ("*", "html", "body")]
        rest = [r for r in base_rules.values() if selector_of(r) not in ("*", "html", "body")]
        fh.write("\n".join(roots) + "\n\n" + "\n".join(rest) + "\n")

    pages_ts = ["// AUTO-GENERATED route table.", "export interface PageMeta { slug: string; name: string; title: string; description: string }", "export const PAGES: PageMeta[] = ["]
    for slug, comp, title, desc, aes, acc, main_html, effects in pages_meta:
        # write effects module
        body = "\n".join("    " + ln if ln.strip() else "" for ln in effects.splitlines())
        with open(os.path.join(PROJ, "src", "views", comp + ".effects.ts"), "w") as fh:
            fh.write(EFFECTS_HEADER % body)

        # scoped css = this page's content rules
        scoped_css = "\n".join(page_scoped[comp])

        title_js = json.dumps(title)
        root_js = "{\n" + "".join(
            f"  {json.dumps(k)}: {json.dumps(v)},\n" for k, v in root_vars[comp].items()
        ) + "}"
        vue = f"""<template>
{main_html}
</template>

<script setup lang=\"ts\">
import {{ onMounted, onUnmounted }} from 'vue'
import {{ initEffects }} from './{comp}.effects'
import {{ useTheme, useRootVars }} from '@/composables/useTheme'

// This page's :root custom properties (fonts / spacing / palette). Applied at
// runtime so pages with different design tokens don't clobber each other.
const ROOT_VARS: Record<string, string> = {root_js}

let dispose: (() => void) | undefined
onMounted(() => {{
  document.title = {title_js}
  useRootVars(ROOT_VARS)
  useTheme('{aes}', 50, '{acc}')
  dispose = initEffects()
}})
onUnmounted(() => dispose && dispose())
</script>

<style scoped>
{scoped_css}
</style>
"""
        with open(os.path.join(PROJ, "src", "views", comp + ".vue"), "w") as fh:
            fh.write(vue)

        pages_ts.append(f"  {{ slug: {json.dumps(slug)}, name: {json.dumps(comp)}, title: {json.dumps(title)}, description: {json.dumps(desc)} }},")

    pages_ts.append("]")
    with open(os.path.join(PROJ, "src", "pages.ts"), "w") as fh:
        fh.write("\n".join(pages_ts) + "\n")

    print(f"fonts: {len(fonts)}  fontface rules: {len(fontface_rules)}  base rules: {len(base_rules)}")
    for slug, comp, title, *_ in pages_meta:
        print(f"  {comp:24} /{slug:30} scoped={len(page_scoped[comp])}")


if __name__ == "__main__":
    main()

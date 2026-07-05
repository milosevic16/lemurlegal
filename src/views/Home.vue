<template>
<main id="main">
<a id="top"></a>

<section class="hero container" aria-labelledby="hero-h">
  <canvas id="mesh" aria-hidden="true"></canvas>
  <span class="regmark" style="top:1.2rem;left:.4rem" aria-hidden="true"></span>
  <span class="regmark tr" style="top:1.2rem;right:.4rem" aria-hidden="true"></span>
  <div class="hero__grid">
    <div class="hero__main">
      <p class="kicker">{{ t.hero.kicker }} <span class="caret" data-anim="blink" aria-hidden="true"></span></p>
      <div class="hexrow" aria-hidden="true" data-anim="hexrow">0x7F59F5  0xD2DDD7  4C454741 4C2E4C41  0x1FC49A  0xC4823A  4C4A4C20  0x131220  454F5552  0x7F59F5  4D694341</div>
      <h1 id="hero-h"><span class="hero-title-glitch" data-glitch-text="" :data-text="t.hero.titleGlitch" style="font-size:25px;font-weight:500;color:rgb(159,159,159)">{{ t.hero.titleGlitch }}</span><br>{{ t.hero.titleLead }} <span class="b">{{ t.hero.crypto }}</span>, <span class="g">{{ t.hero.deeptech }}</span> {{ t.hero.and }} <span class="o">{{ t.hero.defence }}</span>.</h1>

      <div class="hero__actions">
        <a class="action" href="/contact#brief">{{ t.hero.actionPrimary }} <span class="arrow">→</span></a>
        <a class="action action--muted" href="#practices">{{ t.hero.actionSecondary }} <span class="arrow">→</span></a>
      </div>
      <div class="node-row" aria-hidden="true">
        <span class="node-item"><span class="node-dot nd-ok" data-anim="nd" data-nd-color="#5FC27A"></span>{{ t.hero.nodes[0] }}</span>
        <span class="node-item"><span class="node-dot nd-blue" data-anim="nd" data-nd-color="#7F59F5"></span>{{ t.hero.nodes[1] }}</span>
        <span class="node-item"><span class="node-dot nd-ok" data-anim="nd" data-nd-color="#5FC27A"></span>{{ t.hero.nodes[2] }}</span>

      </div>
    </div>
    <div class="console" style="position:relative;margin-top:4.4rem;" aria-label="Lemur Legal — system terminal" data-anim="console">
      <span class="hud-tl" aria-hidden="true"></span><span class="hud-tr" aria-hidden="true"></span>
      <span class="hud-bl" aria-hidden="true"></span><span class="hud-br" aria-hidden="true"></span>
      <div class="console__bar" aria-hidden="true">
        <span class="d r"></span><span class="d y"></span><span class="d g"></span>
        <span class="console__title">counsel@lemur:~<span class="right">v2026.1</span></span>
      </div>
      <div class="console__body" aria-hidden="true">
        <div class="cl"><span class="pr">$</span> <span class="cm">{{ t.console.cmd1 }}</span></div>
        <div class="cl" v-for="(r, i) in t.console.rows" :key="i"><span class="mut">{{ r.key }}</span><span :class="r.cls">{{ r.val }}</span><span class="mut">{{ r.tail }}</span></div>
        <div class="cl"><span class="pr">$</span> <span class="cm">{{ t.console.cmd2 }}</span></div>
        <div class="cl"><span class="mut">{{ t.console.ready }}</span><span class="caret" data-anim="blink" aria-hidden="true"></span></div>
      </div>
    </div>
  </div>
</section>

<section class="section container" id="practices" aria-labelledby="practices-h">
  <div class="sec-head">
    <span class="mark">§ 01</span>
    <h2 id="practices-h">{{ t.practices.heading }}</h2>
    <span class="coord" aria-hidden="true">[ 46.05°N · 14.51°E ]</span>
    <p style="font-style:normal;">{{ t.practices.subtitle }}</p>
  </div>

  <article class="ledger ledger--b" id="crypto_fintech" data-anim="reveal">
    <div class="ledger__head">
      <span class="pno">{{ t.practices.items[0].pno }}</span>
      <h3>{{ t.practices.items[0].name }}</h3>
      <span class="pstate"><span class="led" data-anim="blink" aria-hidden="true"></span>{{ t.practices.items[0].state }}</span>
      <p class="desc">{{ t.practices.items[0].desc }}</p>
    </div>
    <div class="svc">
      <a href="/mica_white_paper"><span class="l">a.</span><span class="t">{{ t.practices.items[0].services[0].label }}</span><span class="ar">→</span></a>
      <a href="/crypto_legal_opinion"><span class="l">b.</span><span class="t">{{ t.practices.items[0].services[1].label }}</span><span class="ar">→</span></a>
      <a href="/regulatory_compliance"><span class="l">c.</span><span class="t">{{ t.practices.items[0].services[2].label }}</span><span class="ar">→</span></a>
    </div>
  </article>

  <article class="ledger ledger--g" id="startups_deeptech" data-anim="reveal">
    <div class="ledger__head">
      <span class="pno">{{ t.practices.items[1].pno }}</span>
      <h3>{{ t.practices.items[1].name }}</h3>
      <span class="pstate"><span class="led" data-anim="blink" aria-hidden="true"></span>{{ t.practices.items[1].state }}</span>
      <p class="desc">{{ t.practices.items[1].desc }}</p>
    </div>
    <div class="svc">
      <a href="/incorporation_esop"><span class="l">a.</span><span class="t">{{ t.practices.items[1].services[0].label }}</span><span class="ar">→</span></a>
      <a href="/ip_protection"><span class="l">b.</span><span class="t">{{ t.practices.items[1].services[1].label }}</span><span class="ar">→</span></a>
      <a href="/startups_contracts"><span class="l">c.</span><span class="t">{{ t.practices.items[1].services[2].label }}</span><span class="ar">→</span></a>
    </div>
  </article>

  <article class="ledger ledger--o" id="defence_dualuse" data-anim="reveal">
    <div class="ledger__head">
      <span class="pno">{{ t.practices.items[2].pno }}</span>
      <h3>{{ t.practices.items[2].name }}</h3>
      <span class="pstate"><span class="led" data-anim="blink" aria-hidden="true"></span>{{ t.practices.items[2].state }}</span>
      <p class="desc">{{ t.practices.items[2].desc }}</p>

    </div>
    <div class="svc">
      <a href="/investment_readiness_review"><span class="l">a.</span><span class="t">{{ t.practices.items[2].services[0].label }}</span><span class="ar">→</span></a>
      <a href="/compliance_frameworks"><span class="l">b.</span><span class="t">{{ t.practices.items[2].services[1].label }}</span><span class="ar">→</span></a>
      <a href="/regulatory_qualification"><span class="l">c.</span><span class="t">{{ t.practices.items[2].services[2].label }}</span><span class="ar">→</span></a>
    </div>
  </article>
</section>

<section class="section section--line container" id="founder" aria-labelledby="founder-h">
  <div class="sec-head">
    <span class="mark">§ 04</span>
    <h2 id="founder-h">{{ t.founder.heading }}</h2>
  </div>
  <div class="founder">
    <div class="founder__aside">
      <div class="founder-photo" data-anim="reveal">
      <!-- DEVELOPER: drop founder.jpg (square, ~1341×1356) next to this HTML file. The image will appear automatically. -->
      <img id="founder-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" :alt="t.founder.name" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;z-index:2;display:none;">
      <div class="photo-grid"></div>
      <div class="photo-scan"></div>
      <span class="photo-corner photo-corner--tl"></span>
      <span class="photo-corner photo-corner--tr"></span>
      <span class="photo-corner photo-corner--bl"></span>
      <span class="photo-corner photo-corner--br"></span>
      <div class="founder-photo__inner">
        <div class="founder-photo__icon" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
            <circle cx="20" cy="14" r="7"></circle>
            <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14"></path>
          </svg>
        </div>
        <p class="founder-photo__label">{{ t.founder.photoLabel }}<br>{{ t.founder.name }}</p>
      </div>
      <div class="photo-meta" aria-hidden="true">
        <span class="photo-meta__name">{{ t.founder.metaName }}</span>
        <span class="photo-meta__id">ID:PM·001</span>
      </div>
    </div>
      <a class="li-link" href="https://www.linkedin.com/in/petermerc/" target="_blank" rel="noopener noreferrer" :aria-label="t.founder.linkedinAria"><svg class="li-link__ic" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>LinkedIn</a>
    </div>
    <div data-anim="reveal">
      <p class="founder__name">{{ t.founder.name }}</p>
      <p class="founder__role">{{ t.founder.role }}</p>
      <p class="founder__bio" v-html="t.founder.bio"></p>
    </div>
    <ul class="creds" data-anim="reveal">
      <li v-for="(cr, i) in t.founder.creds" :key="i">{{ cr }}</li>
      <li style="border-top:1px solid var(--hairline-strong); padding-top:1.4rem; margin-top:.4rem; display:block; list-style:none;" class="sig-li">
        <div class="sigblock" data-anim="sigblock">
          <svg class="sig" viewBox="0 0 420 128" role="img" aria-label="Signature of Peter Merc">
            <path d="M26 94 C20 62 22 16 38 22 C56 30 56 68 38 78 C48 56 70 42 90 60 C98 72 84 84 82 70 C88 50 110 44 130 56 C140 66 128 80 126 68 C132 48 156 46 174 56 C182 62 172 74 174 64"></path>
            <path d="M188 58 C190 34 200 12 214 26 C220 40 224 10 238 6 C250 2 262 26 264 54 C268 68 256 80 254 66 C260 48 282 46 302 60 C314 70 308 86 322 70 C334 50 360 44 388 30 C402 22 412 12 418 4"></path>
            <path d="M22 110 C80 101 200 99 314 104 C348 106 380 100 416 91"></path>
          </svg>
          <div class="sig__rule"></div>
          <p class="sig__cap">{{ t.founder.sigName }} &nbsp;<span>{{ t.founder.sigRole }}</span></p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="section section--line container cta" id="contact" aria-labelledby="cta-h">
  <div class="sec-head">
    <span class="mark">§ 05</span>
    <h2 id="cta-h">{{ t.cta.heading }}</h2>
    <p class="cta__lead" style="font-style:normal;font-family:var(--sans);">{{ t.cta.lead }}</p>
  </div>

  <div class="matter-board" data-anim="reveal" aria-label="Matter intake: three steps from brief to engagement">
    <span class="hud-tl" aria-hidden="true"></span><span class="hud-tr" aria-hidden="true"></span>
    <span class="hud-bl" aria-hidden="true"></span><span class="hud-br" aria-hidden="true"></span>
    <div class="matter-board__header" aria-hidden="true">
      <span class="mb-type" :data-type="t.cta.matter.header"></span> <span class="blip" data-anim="blink"></span><span class="blip" data-anim="blink" style="margin-left:.4rem;opacity:.5;"></span>
    </div>
    <div class="matter-board__nodes">
      <div class="mnode mb-hide">
        <span class="mnode__step"><span class="blip" data-anim="blink" style="margin-right:.4rem;vertical-align:middle;"></span><span class="mb-type" :data-type="t.cta.matter.steps[0].num"></span></span>
        <p class="mnode__title"><span class="mb-type" :data-type="t.cta.matter.steps[0].title"></span></p>
        <span class="mnode__sub"><span class="mb-type" :data-type="t.cta.matter.steps[0].sub"></span></span>      </div>
      <div class="mnode-trace mb-hide" aria-hidden="true"><div class="mnode-pulse" data-anim="mpulse"></div></div>
      <div class="mnode mb-hide">
        <span class="mnode__step"><span class="blip" data-anim="blink" style="margin-right:.4rem;vertical-align:middle;"></span><span class="mb-type" :data-type="t.cta.matter.steps[1].num"></span></span>
        <p class="mnode__title"><span class="mb-type" :data-type="t.cta.matter.steps[1].title"></span></p>
        <span class="mnode__sub"><span class="mb-type" :data-type="t.cta.matter.steps[1].sub"></span></span>      </div>
      <div class="mnode-trace mb-hide" aria-hidden="true"><div class="mnode-pulse" data-anim="mpulse"></div></div>
      <div class="mnode mb-hide">
        <span class="mnode__step"><span class="blip" data-anim="blink" style="margin-right:.4rem;vertical-align:middle;"></span><span class="mb-type" :data-type="t.cta.matter.steps[2].num"></span></span>
        <p class="mnode__title"><span class="mb-type" :data-type="t.cta.matter.steps[2].title"></span></p>
        <span class="mnode__sub"><span class="mb-type" :data-type="t.cta.matter.steps[2].sub"></span></span>      </div>
    </div>
    <div class="matter-board__footer mb-hide">
      <span class="mb-type" data-type="$ open-matter --client=you  →" data-type-color="var(--term-cyan)" data-type-link="/contact#brief" data-type-speed="28"></span>
    </div>
  </div>


  <div class="cta__act">
    <a class="action" href="/contact#brief">{{ t.cta.action }} <span class="arrow">→</span></a>
  </div>
</section>
</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { initEffects } from './Home.effects'
import { useTheme, useRootVars } from '@/composables/useTheme'
import { usePageContent } from '@/i18n/useContent'
import { useHead } from '@/i18n/useHead'
import home from '@/content/home'

const t = usePageContent(home)
useHead(home)

// This page's :root custom properties (fonts / spacing / palette). Applied at
// runtime so pages with different design tokens don't clobber each other.
const ROOT_VARS: Record<string, string> = {
  "--paper": "#D2DDD7",
  "--paper-2": "#C6D4CE",
  "--ink": "#1A1826",
  "--ink-2": "#585672",
  "--hairline": "#B4C0BA",
  "--hairline-strong": "#A0AEA8",
  "--blue": "#7F59F5",
  "--blue-deep": "#6444CC",
  "--blue-tint": "rgba(127,89,245,0.10)",
  "--green": "#1fc49a",
  "--green-deep": "#17967a",
  "--green-tint": "rgba(31,196,154,0.12)",
  "--ochre": "#C4823A",
  "--ochre-deep": "#A4651E",
  "--ochre-tint": "rgba(196,130,58,0.13)",
  "--sig": "#7F59F5",
  "--sig-soft": "rgba(127,89,245,0.16)",
  "--sig-faint": "rgba(127,89,245,0.06)",
  "--term-bg": "#131220",
  "--term-bg-2": "#1C1B2E",
  "--term-dim": "#6E6890",
  "--term-fg": "#D2DDD7",
  "--term-cyan": "#A88BFF",
  "--term-ok": "#5FC27A",
  "--term-amber": "#D9AE5E",
  "--serif": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
  "--sans": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
  "--mono": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
  "--pad-x": "clamp(1.25rem, 5vw, 4rem)",
  "--section-y": "clamp(3.75rem, 8vw, 6.5rem)",
}

let dispose: (() => void) | undefined
onMounted(() => {
  useRootVars(ROOT_VARS)
  useTheme('Live', 50, 'Baltic')
  dispose = initEffects()
})
onUnmounted(() => dispose && dispose())
</script>

<style scoped>
::selection{ background:var(--blue); color:var(--paper); }
a{ color:inherit; }
h1,h2,h3,h4{ font-family:var(--serif); font-weight:400; margin:0; }
p{ margin:0; }
ul,ol{ margin:0; padding:0; list-style:none; }
:focus-visible{ outline:2px solid var(--sig); outline-offset:3px; }
.regmark{ position:absolute; width:18px; height:18px; pointer-events:none; opacity:.5; }
.regmark::before,.regmark::after{ content:""; position:absolute; background:var(--hairline-strong); }
.regmark::before{ width:1px; height:100%; left:0; top:0; }
.regmark::after{ width:100%; height:1px; left:0; top:0; }
.regmark.tr{ transform:scaleX(-1); }
.regmark.bl{ transform:scaleY(-1); }
.regmark.br{ transform:scale(-1,-1); }
.book{ text-decoration:none; font-size:.82rem; font-weight:500; border:1px solid var(--ink); padding:.45rem .85rem; color:var(--ink); transition:background .25s ease,color .25s ease; white-space:nowrap; }
.book:hover{ background:var(--ink); color:var(--paper); }
.hero{ padding-top:clamp(2.75rem,6vw,5rem); padding-bottom:clamp(1.5rem,3vw,2.5rem); position:relative; overflow:hidden; }
#mesh{ position:absolute; inset:0; z-index:0; pointer-events:none; }
.hero__grid{ position:relative; z-index:1; display:grid; grid-template-columns:minmax(0,1fr) minmax(0,400px); gap:clamp(1.5rem,5vw,4rem); align-items:start; }
.hero__main{ min-width:0; }
.kicker{ font-family:var(--mono); font-size:.76rem; color:var(--ink-2); letter-spacing:.04em; margin-bottom:1.3rem; display:inline-flex; align-items:center; gap:.6rem; }
.kicker .caret{ display:inline-block; width:7px; height:1.05em; background:var(--sig); vertical-align:-2px; }
.hero h1{ font-size:clamp(2.3rem,1.2rem + 4vw,4.1rem); line-height:1.04; letter-spacing:-0.02em; max-width:17ch; overflow-wrap:break-word; }
.hero h1 .b{ color:var(--blue); font-weight:500; }
.hero h1 .g{ color:var(--green); font-weight:500; }
.hero h1 .o{ color:var(--ochre); font-weight:500; }
.hero__lead{ margin-top:1.5rem; max-width:52ch; font-size:1.1rem; color:var(--ink-2); }
.hero__lead strong{ color:var(--ink); font-weight:500; }
.hero__actions{ margin-top:2rem; display:flex; gap:1.8rem; flex-wrap:wrap; }
.action{ text-decoration:none; font-weight:500; font-size:1rem; border-bottom:1px solid var(--blue); padding-bottom:3px; color:var(--blue-deep); }
.action .arrow{ display:inline-block; transition:transform .3s ease; }
.action:hover .arrow,.action:focus-visible .arrow{ transform:translateX(5px); }
.action--muted{ color:var(--ink); border-color:var(--hairline-strong); }
@media (max-width:820px) {
.hero__grid{ grid-template-columns:minmax(0,1fr); gap:2.4rem; }
}
.strip{ border-top:1px solid var(--ink); border-bottom:1px solid var(--hairline); overflow:hidden; }
.strip-grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,var(--blue) 1px,transparent 1px); background-size:28px 28px; opacity:.045; }
.strip__in{ padding-block:clamp(1.6rem,3vw,2.2rem); display:grid; grid-template-columns:auto 1fr; gap:1.5rem; align-items:center; position:relative; z-index:1; }
.strip__k{ font-family:var(--mono); font-size:.72rem; color:var(--blue-deep); letter-spacing:.04em; white-space:nowrap; }
.strip__v{ font-family:var(--serif); font-size:clamp(1.1rem,.9rem + 1vw,1.5rem); line-height:1.4; max-width:60ch; }
@media (max-width:680px) {
.strip__in{ grid-template-columns:1fr; gap:.7rem; }
}
.section{ padding-block:clamp(2rem,4vw,3.5rem); }
.section--line{ border-top:1px solid var(--hairline); }
.sec-head{ display:flex; align-items:baseline; gap:1rem; margin-bottom:2.4rem; flex-wrap:wrap; }
.sec-head .mark{ font-family:var(--mono); font-size:.78rem; color:var(--ink-2); letter-spacing:.04em; }
.sec-head h2{ font-size:clamp(1.7rem,1.3rem + 1.5vw,2.4rem); letter-spacing:-0.015em; }
.sec-head p{ font-family:var(--serif); font-style:italic; color:var(--ink-2); font-size:1.05rem; width:100%; max-width:60ch; }
.coord{ font-family:var(--mono); font-size:.66rem; letter-spacing:.02em; color:var(--ink-2); opacity:.72; margin-left:auto; align-self:center; white-space:nowrap; }
@media (max-width:680px) {
.coord{ display:none; }
}
.ledger{ scroll-margin-top:140px; display:grid; grid-template-columns:minmax(0,42%) minmax(0,1fr); gap:clamp(1.2rem,3vw,3rem); padding-block:2.2rem; border-top:1px solid var(--hairline); position:relative; overflow:hidden; }
.ledger:first-of-type{ border-top:1px solid var(--ink); }
.ledger::before{ content:""; position:absolute; left:0; top:-1px; width:46px; height:3px; z-index:1; }
.ledger--b{ color:var(--blue); }
.ledger--g{ color:var(--green); }
.ledger--o{ color:var(--ochre); }
.ledger--b::before{ background:var(--blue); }
.ledger--g::before{ background:var(--green); }
.ledger--o::before{ background:var(--ochre); }
.lrail{ position:absolute; left:46px; top:-1px; height:3px; width:0; opacity:.5; pointer-events:none; z-index:1; background:linear-gradient(90deg,currentColor,transparent); }
.lscan{ position:absolute; left:0; right:0; top:0; height:1px; opacity:0; pointer-events:none; z-index:1; background:linear-gradient(90deg,transparent,currentColor,transparent); }
.ledger__head .pno{ font-family:var(--mono); font-size:.76rem; letter-spacing:.04em; }
.ledger--b .pno{ color:var(--blue-deep); }
.ledger--g .pno{ color:var(--green-deep); }
.ledger--o .pno{ color:var(--ochre-deep); }
.ledger__head h3{ font-size:clamp(1.5rem,1.2rem + 1vw,2rem); letter-spacing:-0.015em; margin-top:.5rem; }
.pstate{ display:inline-flex; align-items:center; gap:.45rem; font-family:var(--mono); font-size:.64rem; letter-spacing:.06em; color:var(--ink-2); margin-top:.7rem; }
.pstate .led{ width:5px; height:5px; border-radius:50%; background:#00B300; box-shadow:0 0 3px #00B300; }
.badge{ position:relative; overflow:hidden; display:inline-block; font-family:var(--mono); font-size:.66rem; letter-spacing:.04em; border:1px solid var(--ochre); color:var(--ochre-deep); padding:.18rem .5rem; margin-top:.7rem; }
.ledger__head .desc{ margin-top:.9rem; color:var(--ink-2); max-width:40ch; }
.ledger__head .pnote{ margin-top:.8rem; font-family:var(--serif); font-style:italic; font-size:.85rem; color:var(--ink-2); }
.svc{ align-self:center; position:relative; z-index:2; }
.svc a{ display:flex; align-items:baseline; gap:.75rem; padding:.85rem 0; border-top:1px solid var(--hairline); text-decoration:none; font-size:1.02rem; transition:padding-left .25s ease; }
.svc a:first-child{ border-top:none; }
.svc a .l{ font-family:var(--mono); font-size:.78rem; color:var(--ink-2); width:1.5rem; flex-shrink:0; }
.svc a .t{ flex:1; }
.svc a .ar{ transition:transform .3s ease; margin-right:.5rem; }
.ledger--b .svc a .ar{ color:var(--blue); }
.ledger--g .svc a .ar{ color:var(--green); }
.ledger--o .svc a .ar{ color:var(--ochre); }
.svc a:hover{ padding-left:.5rem; }
.svc a:hover .ar{ transform:translateX(4px); }
@media (max-width:760px) {
.ledger{ grid-template-columns:1fr; gap:1.4rem; }
}
.redact{ position:relative; display:inline-block; }
.rbar{ position:absolute; top:-2px; bottom:-2px; left:-12%; width:13px; background:var(--ink); opacity:0; pointer-events:none; }
.charts{ display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(1.5rem,3vw,2.5rem); }
.chart{ display:flex; flex-direction:column; }
.chart__fig{ font-family:var(--serif); font-size:2.2rem; line-height:1; letter-spacing:-0.01em; transition:text-shadow .4s ease,color .4s ease; font-variant-numeric:tabular-nums; }
.chart:hover .chart__fig{ color:var(--blue-deep); text-shadow:0 0 18px var(--sig-soft); }
.chart__cap{ margin-top:.5rem; font-size:.9rem; color:var(--ink-2); max-width:30ch; }
.chart__plot{ margin-top:1.3rem; }
.chart__axis{ display:flex; justify-content:space-between; font-family:var(--mono); font-size:.68rem; color:var(--ink-2); margin-top:.4rem; }
.areachart{ width:100%; height:auto; display:block; overflow:visible; }
.areachart .grid{ stroke:var(--hairline); stroke-width:1; }
.areachart .area{ fill:var(--blue-tint); }
.areachart .line{ fill:none; stroke:var(--blue); stroke-width:2; stroke-linecap:round; stroke-linejoin:round; filter:drop-shadow(0 0 3px var(--sig-soft)); }
.areachart .scan{ fill:var(--sig); opacity:0; }
.jgrid{ display:grid; grid-template-columns:repeat(5,1fr); gap:11px; width:max-content; }
.jgrid .d{ width:11px; height:11px; border-radius:50%; background:var(--ink); }
.jgrid .d:nth-child(5n){ background:var(--green); }
.mixbar{ display:flex; height:30px; border:1px solid var(--hairline-strong); overflow:hidden; }
.seg{ height:100%; transform-origin:left; }
.seg-b{ flex:0 0 55%; background:var(--blue); }
.seg-g{ flex:0 0 33%; background:var(--green); }
.seg-o{ flex:0 0 12%; background:var(--ochre); }
.mixkey{ margin-top:.9rem; display:grid; gap:.45rem; }
.mixkey li{ display:flex; align-items:center; gap:.6rem; font-size:.84rem; color:var(--ink-2); }
.swatch{ display:inline-block; width:10px; height:10px; border-radius:2px; flex-shrink:0; }
.sw-b{ background:var(--blue); }
.sw-g{ background:var(--green); }
.sw-o{ background:var(--ochre); }
.mixkey .li-b{ color:var(--blue); }
.mixkey .li-g{ color:var(--green); }
.mixkey .li-o{ color:var(--ochre); }
@media (max-width:780px) {
.charts{ grid-template-columns:1fr; gap:2.6rem; }
.jgrid{ margin-inline:0; }
}
.timeline-wrap{ position:relative; margin-top:clamp(3rem,6vw,4.5rem); padding-top:2.6rem; }
.timeline-line{ position:absolute; top:.55rem; left:0; right:0; height:2px; background:var(--blue); transform-origin:left; }
.timeline-spark{ position:absolute; top:.05rem; left:0; width:9px; height:9px; border-radius:50%; background:var(--sig); box-shadow:0 0 10px var(--sig); opacity:0; }
.timeline{ display:grid; grid-template-columns:repeat(5,1fr); gap:0; }
.tnode{ position:relative; padding-right:1.2rem; }
.tnode::before{ content:""; position:absolute; top:-2.15rem; left:0; width:10px; height:10px; border-radius:50%; background:var(--paper); border:2px solid var(--blue); }
.tnode .yr{ font-family:var(--mono); font-size:.82rem; color:var(--blue-deep); }
.tnode .ev{ margin-top:.45rem; font-size:.96rem; max-width:22ch; }
.tnode .ev .sub{ display:block; color:var(--ink-2); font-size:.86rem; margin-top:.2rem; }
@media (max-width:760px) {
.timeline{ grid-template-columns:1fr; gap:1.7rem; padding-left:1.6rem; }
.timeline-wrap{ padding-top:0; }
.timeline-line{ top:0; bottom:0; left:4px; right:auto; width:2px; height:auto; transform-origin:top; }
.timeline-spark{ display:none; }
.tnode{ padding-right:0; }
.tnode::before{ top:.2rem; left:-1.6rem; }
}
.why-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:0; border-top:1px solid var(--ink); }
.why{ padding:1.8rem clamp(1.1rem,2vw,1.6rem) 1.4rem; border-left:1px solid var(--hairline); overflow:hidden; position:relative; }
.why-scan{ position:absolute; left:0; right:0; height:2px; top:0; background:linear-gradient(90deg,transparent,var(--sig),transparent); pointer-events:none; opacity:0; }
.why:first-child{ border-left:none; padding-left:0; }
.why .wn{ font-family:var(--mono); font-size:.74rem; color:var(--ink-2); }
.why h3{ font-size:1.22rem; letter-spacing:-0.01em; margin-top:.6rem; }
.why p{ margin-top:.7rem; color:var(--ink-2); font-size:.96rem; }
@media (max-width:760px) {
.why-grid{ grid-template-columns:1fr; }
.why{ border-left:none; padding-left:0; border-top:1px solid var(--hairline); padding-top:1.4rem; }
.why:first-child{ border-top:none; }
}
.founder{ display:grid; grid-template-columns:260px minmax(0,1fr) minmax(0,240px); gap:clamp(1.5rem,4vw,3rem); align-items:start; }
.founder-photo{ position:relative; width:100%; aspect-ratio:1/1; background:var(--term-bg); border:1px solid var(--hairline-strong); overflow:hidden; }
.founder-photo__inner{ position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:.8rem; }
.founder-photo__icon{ width:72px; height:72px; border-radius:50%; border:1px solid var(--hairline-strong); display:flex; align-items:center; justify-content:center; color:var(--ink-2); font-size:2rem; }
.founder-photo__label{ font-family:var(--mono); font-size:.68rem; letter-spacing:.12em; color:var(--ink-2); text-align:center; line-height:1.6; }
.photo-corner{ position:absolute; width:12px; height:12px; }
.photo-corner--tl{ top:8px; left:8px; border-top:1.5px solid var(--sig); border-left:1.5px solid var(--sig); }
.photo-corner--tr{ top:8px; right:8px; border-top:1.5px solid var(--sig); border-right:1.5px solid var(--sig); }
.photo-corner--bl{ bottom:8px; left:8px; border-bottom:1.5px solid var(--sig); border-left:1.5px solid var(--sig); }
.photo-corner--br{ bottom:8px; right:8px; border-bottom:1.5px solid var(--sig); border-right:1.5px solid var(--sig); }
.photo-scan{ position:absolute; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,var(--sig),transparent); opacity:.5; animation:photoscan 3s ease-in-out infinite; }
.photo-meta{ position:absolute; bottom:0; left:0; right:0; padding:.55rem .7rem; background:rgba(19,18,32,.72); backdrop-filter:blur(4px); border-top:1px solid var(--hairline); display:flex; align-items:center; justify-content:space-between; }
.photo-meta__name{ font-family:var(--mono); font-size:.64rem; color:var(--ink-2); letter-spacing:.04em; }
.photo-meta__id{ font-family:var(--mono); font-size:.6rem; color:var(--sig); opacity:.7; }
.photo-grid{ position:absolute; inset:0; background-image:linear-gradient(var(--hairline) 1px,transparent 1px),linear-gradient(90deg,var(--hairline) 1px,transparent 1px); background-size:24px 24px; opacity:.18; pointer-events:none; }
@media (max-width:860px) {
.founder{ grid-template-columns:1fr 1fr; }
.founder__aside{ grid-column:1/-1; }
.founder-photo{ grid-column:1/-1; aspect-ratio:16/7; }
}
@media (max-width:580px) {
.founder{ grid-template-columns:1fr; }
.founder-photo{ aspect-ratio:4/3; }
}
.founder__name{ font-size:clamp(2rem,1.5rem + 1.6vw,2.6rem); letter-spacing:-0.015em; }
.founder__role{ font-family:var(--mono); font-size:.82rem; color:var(--ink-2); margin-top:.5rem; }
.founder__bio{ margin-top:1.4rem; max-width:58ch; color:var(--ink-2); font-size:1.06rem; }
.founder__bio strong{ color:var(--ink); font-weight:500; }
.creds{ display:grid; gap:0; }
.creds li{ font-family:var(--mono); font-size:.8rem; padding-block:.6rem; border-top:1px solid var(--hairline); display:flex; gap:.55rem; }
.creds li:first-child{ border-top:none; }
.creds li::before{ content:"—"; color:var(--blue-deep); }
.sig-li::before{ content:none; }
.sigblock{ margin-top:2.2rem; }
.sig{ width:min(300px,80%); height:auto; display:block; overflow:visible; }
.sig path{ fill:none; stroke:var(--blue); stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; vector-effect:non-scaling-stroke; }
.sig__rule{ margin-top:.3rem; width:min(320px,84%); border-top:1px solid var(--hairline-strong); }
.sig__cap{ margin-top:.55rem; font-family:var(--mono); font-size:.8rem; }
.sig__cap span{ color:var(--ink-2); }
@media (max-width:760px) {
.founder{ grid-template-columns:1fr; }
}
.cta h2{ font-size:clamp(2rem,1.5rem + 1.8vw,2.9rem); letter-spacing:-0.02em; max-width:16ch; }
.cta__lead{ margin-top:1rem; max-width:50ch; color:var(--ink-2); font-size:1.08rem; }
.console{ position:relative; margin-top:10.5rem; background:var(--term-bg); color:var(--term-fg); border:1px solid #23272E; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); overflow:hidden; }
.console .regmark{ opacity:.6; }
.console .regmark::before,.console .regmark::after{ background:rgba(168,139,255,.45); }
.console .regmark.c-tl{ left:10px; top:10px; }
.console .regmark.c-tr{ right:10px; top:10px; }
.console .regmark.c-bl{ left:10px; bottom:10px; }
.console .regmark.c-br{ right:10px; bottom:10px; }
.console__bar{ display:flex; align-items:center; gap:.55rem; padding:.7rem 1rem; background:var(--term-bg-2); border-bottom:1px solid #23272E; }
.console__bar .d{ width:9px; height:9px; border-radius:50%; }
.console__bar .d.r{ background:#E0686A; }
.console__bar .d.y{ background:#D9AE5E; }
.console__bar .d.g{ background:#69CFA1; }
.console__title{ font-family:var(--mono); font-size:.72rem; color:var(--term-dim); margin-left:.4rem; letter-spacing:.02em; display:flex; gap:1rem; flex:1; }
.console__title .right{ margin-left:auto; }
.console__body{ padding:1.6rem clamp(1.1rem,3vw,2.2rem) 1.8rem; font-family:var(--mono); font-size:clamp(.62rem,2.5vw,.82rem); line-height:1.9; position:relative; z-index:1; }
.console__body::before{ content:""; position:absolute; inset:0; pointer-events:none; z-index:-1; background-image:repeating-linear-gradient(0deg,transparent 0 27px,rgba(168,139,255,.035) 27px 28px); }
.cl .pr{ color:var(--term-cyan); }
.cl .cm{ color:var(--term-fg); }
.cl .mut{ color:var(--term-dim); }
.cl .ok{ color:var(--term-ok); }
.cl .wn{ color:var(--term-amber); }
.cl .em{ color:var(--term-cyan); }
.caret{ display:inline-block; width:7px; height:1.05em; background:var(--term-cyan); vertical-align:-2px; margin-left:3px; }
.docket{ margin-top:2.4rem; display:grid; grid-template-columns:repeat(3,1fr); gap:0; border-top:1px solid var(--ink); }
.stop{ padding:1.5rem clamp(1rem,2vw,1.5rem) 1.4rem; border-left:1px solid var(--hairline); }
.stop:first-child{ border-left:none; padding-left:0; }
.stop .t{ font-family:var(--mono); font-size:.78rem; color:var(--blue-deep); }
.stop h4{ font-size:1.15rem; margin-top:.5rem; letter-spacing:-0.01em; }
.stop p{ margin-top:.4rem; color:var(--ink-2); font-size:.94rem; }
.cta__act{ margin-top:2.2rem; }
@media (max-width:680px) {
.docket{ grid-template-columns:1fr; }
.stop{ border-left:none; padding-left:0; border-top:1px solid var(--hairline); }
.stop:first-child{ border-top:none; }
}
.slogan-line{ font-family:var(--mono); font-size:.82rem; color:var(--sig); letter-spacing:.05em; margin-top:.5rem; margin-bottom:1.5rem; }
.hud-tl,.hud-tr,.hud-bl,.hud-br{ position:absolute; width:14px; height:14px; pointer-events:none; }
.hud-tl{ top:0; left:0; border-top:1.5px solid var(--sig); border-left:1.5px solid var(--sig); opacity:.3; }
.hud-tr{ top:0; right:0; border-top:1.5px solid var(--sig); border-right:1.5px solid var(--sig); opacity:.3; }
.hud-bl{ bottom:0; left:0; border-bottom:1.5px solid var(--sig); border-left:1.5px solid var(--sig); opacity:.3; }
.hud-br{ bottom:0; right:0; border-bottom:1.5px solid var(--sig); border-right:1.5px solid var(--sig); opacity:.3; }
.node-row{ display:flex; gap:1.6rem; margin-top:1.6rem; flex-wrap:wrap; }
.node-item{ font-family:var(--mono); font-size:.69rem; color:var(--ink-2); display:flex; align-items:center; gap:.42rem; letter-spacing:.02em; }
.node-dot{ width:5px; height:5px; border-radius:50%; flex-shrink:0; }
.nd-ok{ background:var(--term-ok); }
.nd-blue{ background:var(--sig); }
.nd-warn{ background:var(--term-amber); }
.hexrow{ font-family:var(--mono); font-size:.58rem; letter-spacing:.18em; color:var(--blue); opacity:.22; overflow:hidden; white-space:nowrap; margin-top:.55rem; pointer-events:none; user-select:none; max-width:100%;; }
.cyberline{ height:1px; width:100%; position:relative; overflow:hidden; }
.cyberline::before{ content:""; position:absolute; inset:0; background:linear-gradient(90deg,transparent,var(--sig) 30%,var(--sig) 70%,transparent); opacity:.14; }
.hero-title-glitch{ position:relative; display:inline-block; vertical-align:baseline; white-space:normal; }
.matter-board{ margin-top:2.4rem; background:var(--term-bg); border:1px solid #23272E; position:relative; padding:2rem clamp(1.1rem,3vw,2.2rem) 1.8rem; overflow:hidden; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); }
.matter-board::before{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(127,89,245,.07) 1px,transparent 1px); background-size:32px 32px; }
.matter-board__header{ font-family:var(--mono); font-size:.7rem; color:var(--term-dim); letter-spacing:.08em; display:flex; align-items:center; gap:.5rem; padding-bottom:1.4rem; border-bottom:1px solid #23272E; margin-bottom:1.8rem; position:relative; z-index:1; }
.matter-board__nodes{ display:flex; align-items:center; gap:0; position:relative; z-index:1; }
.mnode{ flex:1; display:flex; flex-direction:column; gap:.3rem; }
.mnode__step{ font-family:var(--mono); font-size:.68rem; color:var(--term-dim); letter-spacing:.06em; }
.mnode__title{ font-family:var(--serif); font-size:clamp(1.1rem,.9rem + .8vw,1.6rem); color:var(--term-fg); letter-spacing:-0.01em; }
.mnode__sub{ font-family:var(--mono); font-size:.7rem; color:var(--term-dim); margin-top:.1rem; }
.mnode__badge{ display:inline-flex; align-items:center; gap:.4rem; font-family:var(--mono); font-size:.64rem; color:var(--term-ok); letter-spacing:.06em; margin-top:.35rem; }
.mnode__badge .mnd{ width:5px; height:5px; border-radius:50%; background:currentColor; }
.mnode-trace{ flex:0 0 52px; position:relative; align-self:center; margin-inline:clamp(.6rem,2vw,1.4rem); }
.mnode-trace::before{ content:""; display:block; height:1px; background:linear-gradient(90deg,rgba(168,139,255,.3),rgba(168,139,255,.08)); }
.mnode-pulse{ position:absolute; top:-2px; left:0; width:18px; height:5px; background:linear-gradient(90deg,transparent,var(--sig),transparent); opacity:0; }
.matter-board__footer{ margin-top:1.8rem; padding-top:1.4rem; border-top:1px solid #23272E; position:relative; z-index:1; }
.matter-board__footer a{ font-family:var(--mono); font-size:.82rem; color:var(--term-cyan); text-decoration:none; letter-spacing:.02em; transition:color .25s ease; }
.matter-board__footer a:hover{ color:var(--term-fg); }
@media (max-width:580px) {
.matter-board__nodes{ flex-direction:column; align-items:flex-start; gap:1.4rem; }
.mnode-trace{ transform:rotate(90deg); margin-inline:0; }
}
@media (prefers-reduced-motion: reduce) {
#mesh{ display:none; }
}
</style>

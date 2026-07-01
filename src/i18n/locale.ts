import { ref } from 'vue'

export type Locale = 'en' | 'sl'

/** The active UI locale. Set from the route's `:lang` param by a router.afterEach
 *  hook (see src/router.ts) and read reactively by content objects + chrome. */
export const locale = ref<Locale>('en')

// The blog is Contentful-driven and English-only — its paths are never prefixed
// with `/sl` (see the plan: blog excluded from /sl).
const BLOG_RE = /^\/blog(?:\/|$)/

/**
 * Map a path to the given locale: prefix `/sl` for Slovenian, strip it for
 * English. Blog paths are always returned unprefixed (English-only).
 */
export function localePath(path: string, loc: Locale = locale.value): string {
  const clean = path.replace(/^\/sl(?=\/|$)/, '') || '/'
  if (BLOG_RE.test(clean)) return clean
  if (loc !== 'sl') return clean
  return clean === '/' ? '/sl' : '/sl' + clean
}

export function otherLocale(loc: Locale = locale.value): Locale {
  return loc === 'sl' ? 'en' : 'sl'
}

/**
 * Collapse the mobile menu instantly (transition suppressed). Called before a
 * locale switch: switching locale remounts the view, whose ported effects
 * re-measure the fixed header into `#site-head-spacer` on mount. If the menu is
 * still open at that moment, the open height gets baked into the spacer and
 * never corrected — leaving a gap after the menu closes. Collapsing first (and
 * forcing reflow) makes that measurement see the closed header.
 */
export function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu')
  if (!menu || !menu.classList.contains('open')) return
  const toggle = document.querySelector<HTMLElement>('.nav-toggle')
  const prev = menu.style.transition
  menu.style.transition = 'none'
  menu.classList.remove('open')
  toggle?.setAttribute('aria-expanded', 'false')
  toggle?.setAttribute('aria-label', 'Open menu')
  void menu.offsetHeight // force reflow so the collapsed height applies now
  menu.style.transition = prev
}

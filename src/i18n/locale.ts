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
 * Collapse the mobile menu instantly (transition suppressed). Called on every
 * navigation (router.beforeEach) and before a locale switch. Two reasons it must
 * be *instant* and *unconditional*:
 *  - Switching locale remounts the view, whose ported effects re-measure the
 *    fixed header into `#site-head-spacer` on mount. An open menu bakes its
 *    height into the spacer and leaves a gap after it closes.
 *  - Clicking a nav link on mobile leaves the menu mid-close (0.4s transition);
 *    while it animates, `#site-head` is taller, so an anchor scroll computed
 *    against the header height would land too low. Snapping it shut first makes
 *    the header its true (collapsed) height before the next page measures/scrolls.
 * Runs the snap even when already closed (a cheap reflow) so the mid-transition
 * case — where the `open` class is gone but the height is still animating down —
 * is forced to its final height immediately.
 */
export function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu')
  if (!menu) return
  const toggle = document.querySelector<HTMLElement>('.nav-toggle')
  const prev = menu.style.transition
  menu.style.transition = 'none'
  menu.classList.remove('open')
  toggle?.setAttribute('aria-expanded', 'false')
  toggle?.setAttribute('aria-label', 'Open menu')
  void menu.offsetHeight // force reflow so the collapsed height applies now
  menu.style.transition = prev
}

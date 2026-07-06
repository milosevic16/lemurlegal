import { ref } from 'vue'
import { resolveSlug, slugFor } from './slugs'

export type Locale = 'en' | 'sl'

/** The active UI locale. Set from the matched route's `meta.locale` by a
 *  router.beforeEach hook (see src/router.ts) and read reactively by content
 *  objects + chrome. */
export const locale = ref<Locale>('en')

/**
 * Translate a path into the given locale's URL. Page slugs differ per locale
 * (English uses dashes, Slovenian is translated — see src/i18n/slugs.ts), so
 * this does a slug lookup, not a blind `/sl` prefix. It is bidirectional: the
 * input path may already be in either locale's (or a legacy underscore) form,
 * which is why the language toggle and useHead can call it with `route.path`.
 *
 * Sub-paths are preserved, so a blog article `/blog/<slug>` maps to
 * `/sl/blog/<slug>` — the article slug itself is Contentful-managed and shared
 * across locales (its localized fields are fetched by the active locale).
 */
export function localePath(path: string, loc: Locale = locale.value): string {
  // Drop any leading `/sl` so we work from a locale-neutral path.
  const clean = path.replace(/^\/sl(?=\/|$)/, '') || '/'
  const [first, ...rest] = clean.replace(/^\//, '').split('/')
  const entry = first ? resolveSlug(first) : undefined
  const seg = entry ? slugFor(entry, loc) : first
  const base = loc === 'sl' ? '/sl' : ''
  if (!seg) return base || '/' // home
  return base + '/' + seg + (rest.length ? '/' + rest.join('/') : '')
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

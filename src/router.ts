import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { locale, closeMobileMenu } from './i18n/locale'

// Map route slugs to lazily-loaded view components. Keep in sync with
// tools/extract.py FILES / src/pages.ts.
const VIEWS: Array<[string, string]> = [
  ['', 'Home'],
  ['mica_white_paper', 'MiCAWhitePaper'],
  ['crypto_legal_opinion', 'CryptoLegalOpinion'],
  ['regulatory_compliance', 'RegulatoryCompliance'],
  ['incorporation_esop', 'IncorporationESOP'],
  ['ip_protection', 'IPProtection'],
  ['startups_contracts', 'ContractsCommercial'],
  ['regulatory_qualification', 'RegulatoryQualification'],
  ['investment_readiness_review', 'InvestmentReadiness'],
  ['compliance_frameworks', 'ComplianceFrameworks'],
  ['blog', 'Blog'],
  ['media', 'MediaCoverage'],
  ['contact', 'Contact'],
  ['terms_of_use', 'TermsOfUse'],
]

// Every view gets an optional `/sl` locale prefix and one shared component across
// locales (EN at `/…`, SL at `/sl/…`). The blog list is in VIEWS; its article
// detail route is added separately below (it carries a `:slug` param).
const routes: RouteRecordRaw[] = VIEWS.map(([slug, name]) => ({
  path: slug ? '/:lang(sl)?/' + slug : '/:lang(sl)?', // Home handles '/' and '/sl'
  name,
  component: () => import(`./views/${name}.vue`),
}))

// Blog article detail — localized alongside the list: EN `/blog/:slug`, SL
// `/sl/blog/:slug`. The slug is shared across locales (one entry, translated
// fields); the Contentful fetch requests the active locale and falls back to
// English where a Slovenian translation is missing.
routes.push({
  path: '/:lang(sl)?/blog/:slug',
  name: 'BlogPost',
  component: () => import('./views/BlogPost.vue'),
})

// `About` has no standalone page in the export — send it to the founder section,
// preserving locale.
routes.push({ path: '/about', redirect: { path: '/', hash: '#founder' } })
routes.push({ path: '/sl/about', redirect: { path: '/sl', hash: '#founder' } })
routes.push({ path: '/:pathMatch(.*)*', redirect: '/' })

// Resolve once the hash target exists, the fixed-header spacer has a height
// (a proxy for "the lazy view mounted and its effects ran") and web fonts have
// loaded — fonts are the biggest source of post-mount reflow. Polls on a timer
// (not rAF, which some embedded/background contexts throttle) and is bounded so
// it can never hang navigation.
function waitForAnchor(hash: string): Promise<void> {
  return new Promise((resolve) => {
    let tries = 0
    let done = false
    const finish = () => {
      if (done) return
      done = true
      resolve()
    }
    const tick = () => {
      if (done) return
      const el = document.querySelector(hash)
      const spacer = document.getElementById('site-head-spacer')
      const fontsReady = !document.fonts || document.fonts.status === 'loaded'
      if ((el && spacer && spacer.offsetHeight > 0 && fontsReady) || tries++ > 40) finish()
      else setTimeout(tick, 50)
    }
    tick()
  })
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
  async scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      // Anchor navigations — especially cross-page ones (a nav "sector" link on
      // a product page jumps back to a Home section) — must wait for the lazy
      // view to mount, fonts to load and the header spacer to be sized. Otherwise
      // the target is measured mid-layout and the scroll lands on the wrong
      // section. Then offset by the *actual* header height (varies by viewport).
      await waitForAnchor(to.hash)
      const head = document.getElementById('site-head')
      const top = (head ? head.offsetHeight : 78) + 12
      return { el: to.hash, top, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    // Jump to top instantly — overrides the global `html { scroll-behavior: smooth }`
    // in base.css so route changes don't play a smooth scroll-up.
    return { top: 0, behavior: 'instant' }
  },
})

// Keep the active locale in sync with the URL's `:lang` segment. Set in a
// beforeEach (not afterEach) so the locale is already correct when the view's
// setup/onMounted runs — the ported effects read locale-bound content at mount.
router.beforeEach((to) => {
  locale.value = to.params.lang === 'sl' ? 'sl' : 'en'
  // Snap the mobile menu shut before the next view renders so an open/animating
  // menu doesn't inflate the fixed-header height that anchor scrolls offset by.
  closeMobileMenu()
})

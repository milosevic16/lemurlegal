import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { locale } from './i18n/locale'

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
  ['contact', 'Contact'],
]

// Every param-less view except the blog gets an optional `/sl` locale prefix and
// one shared component across locales (EN at `/…`, SL at `/sl/…`). The blog is
// Contentful-driven and stays English-only (see src/i18n/locale.ts).
const LOCALIZED = VIEWS.filter(([slug]) => slug !== 'blog')

const routes: RouteRecordRaw[] = LOCALIZED.map(([slug, name]) => ({
  path: slug ? '/:lang(sl)?/' + slug : '/:lang(sl)?', // Home handles '/' and '/sl'
  name,
  component: () => import(`./views/${name}.vue`),
}))

// Blog — English only (Contentful). Registered without a locale prefix; `/sl/blog`
// paths redirect to the English blog.
routes.push({ path: '/blog', name: 'Blog', component: () => import('./views/Blog.vue') })
routes.push({ path: '/blog/:slug', name: 'BlogPost', component: () => import('./views/BlogPost.vue') })
routes.push({ path: '/sl/blog', redirect: '/blog' })
routes.push({ path: '/sl/blog/:slug', redirect: (to) => `/blog/${to.params.slug}` })

// `About` has no standalone page in the export — send it to the founder section,
// preserving locale.
routes.push({ path: '/about', redirect: { path: '/', hash: '#founder' } })
routes.push({ path: '/sl/about', redirect: { path: '/sl', hash: '#founder' } })
routes.push({ path: '/:pathMatch(.*)*', redirect: '/' })

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }
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
})

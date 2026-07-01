import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

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

const routes: RouteRecordRaw[] = VIEWS.map(([slug, name]) => ({
  path: '/' + slug,
  name,
  component: () => import(`./views/${name}.vue`),
}))

// Individual blog article, backed by Contentful (loaded by slug). Registered
// explicitly because the VIEWS table above only maps param-less slugs.
routes.push({
  path: '/blog/:slug',
  name: 'BlogPost',
  component: () => import('./views/BlogPost.vue'),
})

// `About` has no standalone page in the export — send it to the founder section.
routes.push({ path: '/about', redirect: { path: '/', hash: '#founder' } })
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

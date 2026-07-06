import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { locale, closeMobileMenu } from './i18n/locale'
import { SLUGS } from './i18n/slugs'

const routes: RouteRecordRaw[] = []

// Two routes per param-less view: English at `/<en>` and Slovenian at `/sl/<sl>`
// (Home is `/` and `/sl`). The slugs differ per locale — English uses dashes,
// Slovenian is translated (see src/i18n/slugs.ts). Both locales share one lazy
// component; `meta.locale` drives the active locale (read in beforeEach). SL
// routes take a distinct name so route names stay unique.
for (const s of SLUGS) {
  const component = () => import(`./views/${s.view}.vue`)
  routes.push({ path: s.en ? '/' + s.en : '/', name: s.view, component, meta: { locale: 'en' } })
  routes.push({ path: s.sl ? '/sl/' + s.sl : '/sl', name: s.view + '-sl', component, meta: { locale: 'sl' } })
}

// Blog article detail — localized alongside the list: EN `/blog/:slug`, SL
// `/sl/blog/:slug`. The slug is the Contentful slug, shared across locales (one
// entry, translated fields); the fetch requests the active locale and falls back
// to English where a Slovenian translation is missing.
routes.push({ path: '/blog/:slug', name: 'BlogPost', component: () => import('./views/BlogPost.vue'), meta: { locale: 'en' } })
routes.push({ path: '/sl/blog/:slug', name: 'BlogPost-sl', component: () => import('./views/BlogPost.vue'), meta: { locale: 'sl' } })

// `About` has no standalone page in the export — send it to the founder section,
// preserving locale.
routes.push({ path: '/about', redirect: { path: '/', hash: '#founder' } })
routes.push({ path: '/sl/about', redirect: { path: '/sl', hash: '#founder' } })

// Redirect legacy underscore URLs (and the old English-slug SL URLs) to the new
// dashed / translated ones, so existing links, bookmarks and the already-rendered
// Slovenian PDFs keep resolving instead of falling through to the catch-all.
for (const s of SLUGS) {
  if (s.old && s.old !== s.en) routes.push({ path: '/' + s.old, redirect: '/' + s.en })
  if (s.old && s.old !== s.sl) routes.push({ path: '/sl/' + s.old, redirect: s.sl ? '/sl/' + s.sl : '/sl' })
}

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

// Keep the active locale in sync with the matched route. Set in a beforeEach (not
// afterEach) so the locale is already correct when the view's setup/onMounted runs
// — the ported effects and the Contentful fetches (blog/media) read `locale.value`
// at mount. Prefer the route's meta.locale; fall back to a `/sl` path test so no
// route can ever load the wrong-locale content even if its meta were missing.
router.beforeEach((to) => {
  locale.value = to.meta.locale === 'sl' || /^\/sl(\/|$)/.test(to.path) ? 'sl' : 'en'
  // Snap the mobile menu shut before the next view renders so an open/animating
  // menu doesn't inflate the fixed-header height that anchor scrolls offset by.
  closeMobileMenu()
})

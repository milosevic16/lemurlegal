import { ViteSSG } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router'
import './index.css'
import './styles/fonts.css'
import './styles/base.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { locale, closeMobileMenu } from './i18n/locale'
import { fetchPosts } from './lib/contentful'

// Which routes vite-ssg prerenders. Exported from the *server entry* (not
// vite.config.ts) on purpose: this module is compiled through Vite's SSR
// pipeline, so `import.meta.env.VITE_CONTENTFUL_*` (read inside contentful.ts) is
// substituted here — letting the build enumerate blog slugs from Contentful with
// no separate credential plumbing. vite-ssg prefers a server-entry includedRoutes
// over the config one, and awaits it once before the render loop.
export async function includedRoutes(_paths: string[], routes: readonly RouteRecordRaw[]) {
  // The 28 static routes + /404: component-backed, non-param, non-redirect.
  const staticPaths = routes
    .filter((r) => r.component && typeof r.path === 'string' && !r.path.includes(':') && !r.redirect)
    .map((r) => r.path as string)

  try {
    // One fetch enumerates every published slug (slug is shared across locales).
    const posts = await fetchPosts('en')
    return [...staticPaths, ...posts.flatMap((p) => [`/blog/${p.slug}`, `/sl/blog/${p.slug}`])]
  } catch (e) {
    // GRACEFUL: never let a Contentful hiccup block the deploy. Ship the static
    // pages; blog articles fall back to client-rendered via _redirects. Loud so a
    // real regression is visible in the build log.
    console.warn(
      `[ssg] Contentful unreachable — skipping blog prerender; articles will be client-rendered. ${(e as Error).message}`,
    )
    return staticPaths
  }
}

// vite-ssg entry. `createApp` is imported both by the SSG build (Node,
// renderToString) and by the browser (hydration), so nothing here may touch the
// DOM at import time. vite-ssg creates the router (memory history on the server,
// web history in the browser) from the routes/scrollBehavior we pass in.
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ router }) => {
    // Keep the active locale in sync with the matched route. In a beforeEach (not
    // afterEach) so locale is correct before the view's setup/onMounted runs — the
    // ported effects and Contentful fetches read locale.value at mount, and the
    // server render needs it set before renderToString. Runs on server and client;
    // closeMobileMenu is a no-op under SSG (guarded — it reads document).
    router.beforeEach((to) => {
      locale.value = to.meta.locale === 'sl' || /^\/sl(\/|$)/.test(to.path) ? 'sl' : 'en'
      closeMobileMenu()
    })
  },
)

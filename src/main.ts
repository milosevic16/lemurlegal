import { ViteSSG } from 'vite-ssg'
import './index.css'
import './styles/fonts.css'
import './styles/base.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { locale, closeMobileMenu } from './i18n/locale'

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

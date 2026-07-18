/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    script: 'async',
    // Render pages one at a time. The active locale is a single module-level ref
    // (src/i18n/locale.ts) that the router's beforeEach sets per page; vite-ssg's
    // default concurrency (20) renders pages in parallel in one Node process, so
    // SL routes race and overwrite locale.value mid-render and every page comes
    // out Slovenian. Serial rendering keeps each page's locale correct. Required
    // for correctness, not speed — a post-build assertion (scripts/) guards it.
    concurrency: 1,
    // Prerender the static, component-backed routes (both locales + /404) and
    // nothing else. Filter the ROUTER'S constructed records (not raw SLUGS — the
    // router special-cases the empty home segment, so 'sl' → '/sl' not '/sl/'),
    // dropping param routes (/blog/:slug, the catch-all) and redirect records.
    includedRoutes(_paths, routes) {
      return routes
        .filter((r) => r.component && typeof r.path === 'string' && !r.path.includes(':') && !r.redirect)
        .map((r) => r.path)
    },
  },
})

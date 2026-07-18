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
    // `includedRoutes` lives in src/main.ts (the server entry), not here: it needs
    // Vite's SSR env substitution to read Contentful creds and enumerate blog
    // slugs at build time. vite-ssg prefers the server-entry export over a config
    // one, so defining it here too would be dead code / a second source of truth.
  },
})

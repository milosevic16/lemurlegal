import { useHead as unheadUseHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { locale, localePath } from './locale'
import type { Bilingual, PageMeta } from '@/content/types'

// Canonical/hreflang base. Update if the production origin ever changes.
const SITE = 'https://lemur.legal'

/**
 * Per-view head management: sets <title>, meta description, <html lang>,
 * canonical, and reciprocal en/sl/x-default hreflang links from the page's
 * bilingual `meta`. Reactive to locale, so toggling updates the head in place.
 * Call once at the top of a view's <script setup>.
 *
 * Backed by @unhead/vue (installed and wired up by vite-ssg): during the SSG
 * build these tags are serialized into the prerendered HTML — so crawlers and
 * LLMs get the correct per-page title/description/canonical/hreflang with no
 * JavaScript. On the client the same call keeps the head reactive to the
 * language toggle. The single-argument signature is unchanged, so every view
 * that calls `useHead(content)` is untouched.
 */
export function useHead(content: Bilingual<{ meta: PageMeta }>) {
  const route = useRoute()
  unheadUseHead(
    computed(() => {
      const loc = locale.value
      const meta = content[loc].meta
      const enUrl = SITE + localePath(route.path, 'en')
      const slUrl = SITE + localePath(route.path, 'sl')
      return {
        title: meta.title,
        htmlAttrs: { lang: loc },
        meta: [{ name: 'description', content: meta.description }],
        link: [
          { rel: 'canonical', href: loc === 'sl' ? slUrl : enUrl },
          { rel: 'alternate', hreflang: 'en', href: enUrl },
          { rel: 'alternate', hreflang: 'sl', href: slUrl },
          { rel: 'alternate', hreflang: 'x-default', href: enUrl },
        ],
      }
    }),
  )
}

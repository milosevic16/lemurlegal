import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { locale, localePath } from './locale'
import type { Bilingual, PageMeta } from '@/content/types'

// Canonical/hreflang base. Update if the production origin ever changes.
const SITE = 'https://lemur.legal'

function upsertMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const sel = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(sel)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-view head management: sets <title>, meta description, <html lang>,
 * canonical, and reciprocal en/sl/x-default hreflang links from the page's
 * bilingual `meta`. Reactive to locale, so toggling updates the head in place.
 * Call once at the top of a view's <script setup>.
 */
export function useHead(content: Bilingual<{ meta: PageMeta }>) {
  const route = useRoute()
  watchEffect(() => {
    const loc = locale.value
    const meta = content[loc].meta
    document.title = meta.title
    document.documentElement.lang = loc
    upsertMeta('description', meta.description)

    const enUrl = SITE + localePath(route.path, 'en')
    const slUrl = SITE + localePath(route.path, 'sl')
    upsertLink('canonical', loc === 'sl' ? slUrl : enUrl)
    upsertLink('alternate', enUrl, 'en')
    upsertLink('alternate', slUrl, 'sl')
    upsertLink('alternate', enUrl, 'x-default')
  })
}

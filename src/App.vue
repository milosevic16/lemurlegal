<template>
  <SiteChrome>
    <router-view />
  </SiteChrome>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import SiteChrome from './components/SiteChrome.vue'

const router = useRouter()

// The extracted markup keeps plain <a href="/..."> links. Intercept clicks on
// same-origin links and turn them into SPA navigations so we don't full-reload.
function onClick(e: MouseEvent) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  const a = (e.target as HTMLElement)?.closest('a')
  if (!a) return
  const target = a.getAttribute('target')
  if (target && target !== '_self') return
  const href = a.getAttribute('href') || ''
  // only internal absolute paths (not protocol-relative, mailto:, tel:, http…)
  if (!href.startsWith('/') || href.startsWith('//')) return
  e.preventDefault()
  const url = new URL(href, window.location.origin)
  router.push({ path: url.pathname, hash: url.hash || undefined })
}

onMounted(() => document.addEventListener('click', onClick))
onBeforeUnmount(() => document.removeEventListener('click', onClick))
</script>

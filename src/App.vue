<template>
  <SiteChrome>
    <!-- Each route is a distinct component, so router-view fully remounts the
         view's #main root on navigation — which replays the CSS entry animation
         below (signalling a new page) without a <transition>/key, both of which
         fight the ported per-view scripts that mutate the DOM directly. -->
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

<!-- Global (non-scoped): targets each routed view's #main root, which a scoped
     block here couldn't reach. -->
<style>
/* Page-entry animation: navigation remounts the view's #main, replaying this —
   a subtle fade + rise that signals you've landed on a different page. */
#main { animation: page-in .32s cubic-bezier(.22, .61, .36, 1) both; }
@keyframes page-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  #main { animation: none; }
}
</style>

<template>
  <main id="main" class="notfound container">
    <p class="nf-code" aria-hidden="true">404</p>
    <h1>{{ isSL ? 'Stran ne obstaja' : 'Page not found' }}</h1>
    <p class="nf-lead">
      {{ isSL
        ? 'Stran, ki jo iščete, ne obstaja ali je bila premaknjena.'
        : 'The page you’re looking for doesn’t exist or has moved.' }}
    </p>
    <a class="nf-home" :href="localePath('/')">
      {{ isSL ? '← Nazaj na domačo stran' : '← Back to home' }}
    </a>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { locale, localePath } from '@/i18n/locale'

const isSL = computed(() => locale.value === 'sl')

// 404 is noindex and intentionally carries NO canonical/hreflang (it is not a real
// page). This uses @unhead directly rather than the shared useHead() wrapper.
useHead({
  title: 'Page not found — Lemur Legal',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<style scoped>
.notfound {
  padding-block: clamp(4rem, 14vh, 9rem);
  text-align: center;
}
.nf-code {
  font-family: var(--mono);
  font-size: clamp(3rem, 2rem + 6vw, 5rem);
  color: var(--ink-2);
  opacity: 0.6;
  letter-spacing: 0.08em;
}
.notfound h1 {
  font-size: clamp(1.6rem, 1.2rem + 2vw, 2.4rem);
  letter-spacing: -0.015em;
  margin-top: 0.4rem;
}
.nf-lead {
  font-family: var(--serif);
  color: var(--ink-2);
  font-size: 1.05rem;
  margin: 1rem auto 2.2rem;
  max-width: 46ch;
}
.nf-home {
  font-family: var(--mono);
  font-size: 0.9rem;
  color: var(--blue);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
}
.nf-home:hover { color: var(--ink); }
</style>

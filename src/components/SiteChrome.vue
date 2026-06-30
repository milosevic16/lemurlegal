<template>
  <a class="skip" href="#main">Skip to content</a>

  <div id="site-head">
    <Masthead />
    <Wire />
  </div>
  <div id="site-head-spacer" aria-hidden="true"></div>

  <slot />

  <Footer />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import Masthead from './Masthead.vue'
import Wire from './Wire.vue'
import Footer from './Footer.vue'

// The "smart header" effect hides #site-head with an inline transform on scroll
// down. That element persists across routes (it lives here), but the effect
// closure managing it is per-view and torn down on navigation — leaving a stale
// `translateY(-100%)` behind that the next view's fresh closure never clears.
// Reset it on every navigation so the persistent header matches the new view.
const router = useRouter()
let stop: (() => void) | undefined
onMounted(() => {
  stop = router.afterEach(() => {
    const head = document.getElementById('site-head')
    if (head) head.style.transform = ''
  })
})
onBeforeUnmount(() => stop && stop())
</script>

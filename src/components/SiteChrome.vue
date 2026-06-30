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
import Masthead from './Masthead.vue'
import Wire from './Wire.vue'
import Footer from './Footer.vue'
</script>

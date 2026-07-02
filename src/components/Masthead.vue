<template>
  <header class="masthead">
    <div class="container masthead__inner">
      <a class="brand" :href="lp('/')" aria-label="Lemur Legal, home">
        <img class="brand__logo" src="/ll-logo.svg" alt="Lemur Legal" width="764" height="184" />
      </a>
      <nav class="nav" aria-label="Primary">
        <a :href="sec('crypto_fintech')" class="nl-b">{{ c.nav.crypto }}</a>
        <a :href="sec('startups_deeptech')" class="nl-g">{{ c.nav.startups }}</a>
        <a :href="sec('defence_dualuse')" class="nl-o">{{ c.nav.defence }}</a>
        <a :href="lp('/blog')" class="nl-m">{{ c.nav.blog }}</a>
        <a :href="lp('/media')" class="nl-m">{{ c.nav.media }}</a>
        <a :href="lp('/contact')" class="nl-m">{{ c.nav.contact }}</a>
      </nav>
      <div class="head-right">
        <span class="status" aria-hidden="true"
          ><span class="dot" data-anim="blink"></span> {{ c.status }}</span
        >
        <span class="lang">
          <button type="button" class="lang__btn" :class="{ 'is-active': locale === 'en' }" @click="setLocale('en')">EN</button
          ><span aria-hidden="true"> / </span
          ><button type="button" class="lang__btn" :class="{ 'is-active': locale === 'sl' }" @click="setLocale('sl')">SI</button>
        </span>
      </div>
      <button
        class="nav-toggle"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <span class="nav-toggle__bars" aria-hidden="true"
          ><span></span><span></span><span></span
        ></span>
      </button>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile">
      <a :href="sec('crypto_fintech')" class="mm-b">{{ c.nav.crypto }}</a>
      <a :href="sec('startups_deeptech')" class="mm-g">{{ c.nav.startups }}</a>
      <a :href="sec('defence_dualuse')" class="mm-o">{{ c.nav.defence }}</a>
      <a :href="lp('/blog')">{{ c.nav.blog }}</a>
      <a :href="lp('/media')">{{ c.nav.media }}</a>
      <a :href="lp('/contact')">{{ c.nav.contact }}</a>
      <span class="mobile-menu__meta">
        <span class="dot" data-anim="blink"></span> {{ c.status }} &nbsp;·&nbsp;
        <button type="button" class="lang__btn" :class="{ 'is-active': locale === 'en' }" @click="setLocale('en')">EN</button
        ><span aria-hidden="true"> / </span
        ><button type="button" class="lang__btn" :class="{ 'is-active': locale === 'sl' }" @click="setLocale('sl')">SI</button>
      </span>
    </nav>
    <span class="seam" aria-hidden="true" data-anim="seam"></span>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { locale, localePath, closeMobileMenu, type Locale } from '@/i18n/locale'
import { usePageContent } from '@/i18n/useContent'
import chrome from '@/content/chrome'

const route = useRoute()
const router = useRouter()
const c = usePageContent(chrome)

const lp = (p: string) => localePath(p)
// Home section anchor, locale-aware: "/#id" (EN) or "/sl#id" (SL).
const sec = (id: string) => `${localePath('/')}#${id}`

function setLocale(loc: Locale) {
  if (loc === locale.value) return
  closeMobileMenu()
  router.push({ path: localePath(route.path, loc), hash: route.hash || undefined })
}
</script>

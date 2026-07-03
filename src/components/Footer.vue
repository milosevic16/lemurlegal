<template>
  <footer class="foot">
    <div class="container">
      <div class="ringed ringed--thin" aria-hidden="true" style="margin-bottom:2rem;"></div>
      <div class="foot__top">
        <div class="foot__brand">
          <span class="bn">Lemur Legal</span>
          <p>{{ c.footer.blurb }} · <a href="mailto:info@lemur.legal" style="text-decoration:underline;">info@lemur.legal</a></p>
          <p class="foot__addr">{{ c.footer.org }}<br>{{ c.footer.street }}<br>{{ c.footer.city }}</p>
          <div class="foot__social">
            <a class="foot__social-link" href="https://www.linkedin.com/company/lemur-legal-ltd./?originalSubdomain=si" target="_blank" rel="noopener noreferrer" :aria-label="c.footer.socialAria"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg></a>
          </div>
        </div>
        <nav class="foot-col fc-b" :aria-label="c.footer.cols.crypto.heading">
          <h5>{{ c.footer.cols.crypto.heading }}</h5>
          <a :href="lp('/mica_white_paper')">{{ c.footer.cols.crypto.links[0] }}</a>
          <a :href="lp('/crypto_legal_opinion')">{{ c.footer.cols.crypto.links[1] }}</a>
          <a :href="lp('/regulatory_compliance')">{{ c.footer.cols.crypto.links[2] }}</a>
        </nav>
        <nav class="foot-col fc-g" :aria-label="c.footer.cols.startups.heading">
          <h5>{{ c.footer.cols.startups.heading }}</h5>
          <a :href="lp('/incorporation_esop')">{{ c.footer.cols.startups.links[0] }}</a>
          <a :href="lp('/ip_protection')">{{ c.footer.cols.startups.links[1] }}</a>
          <a :href="lp('/startups_contracts')">{{ c.footer.cols.startups.links[2] }}</a>
        </nav>
        <nav class="foot-col fc-o" :aria-label="c.footer.cols.defence.heading">
          <h5>{{ c.footer.cols.defence.heading }}</h5>
          <a :href="lp('/regulatory_qualification')">{{ c.footer.cols.defence.links[0] }}</a>
          <a :href="lp('/investment_readiness_review')">{{ c.footer.cols.defence.links[1] }}</a>
          <a :href="lp('/compliance_frameworks')">{{ c.footer.cols.defence.links[2] }}</a>
        </nav>
      </div>
      <nav class="foot__legal" aria-label="Legal">
        <a :href="lp('/terms_of_use')">{{ c.footer.legal.terms }}</a>
      </nav>
      <div class="foot__base">
        <span>{{ c.footer.copyright }}</span>
        <span v-if="route.name !== 'Home'">{{ c.footer.strap }}</span>
        <span class="lang">
          <button type="button" class="lang__btn" :class="{ 'is-active': locale === 'en' }" @click="setLocale('en')">EN</button
          ><span aria-hidden="true"> / </span
          ><button type="button" class="lang__btn" :class="{ 'is-active': locale === 'sl' }" @click="setLocale('sl')">SI</button>
        </span>
      </div>
    </div>
    <span class="seam" aria-hidden="true" data-anim="seam" style="bottom:auto;top:-1px;"></span>
  </footer>
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

function setLocale(loc: Locale) {
  if (loc === locale.value) return
  closeMobileMenu()
  router.push({ path: localePath(route.path, loc), hash: route.hash || undefined })
}
</script>

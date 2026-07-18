<template>
<main id="main">
<a id="top"></a>

<!-- ════════ HERO ════════ -->
<section class="hero container" aria-labelledby="hero-h">
  <canvas id="mesh" aria-hidden="true"></canvas>
  <span class="regmark" style="top:1.2rem;left:.4rem" aria-hidden="true"></span>
  <span class="regmark tr" style="top:1.2rem;right:.4rem" aria-hidden="true"></span>
  <div class="hero__in">
    <p class="kicker">{{ t.hero.kicker }} <span class="caret" data-anim="blink" aria-hidden="true"></span></p>
    <div class="hexrow" aria-hidden="true" data-anim="hexrow">{{ t.hero.hexrow }}</div>
    <h1 id="hero-h">{{ t.hero.titleLead }} <span class="b">{{ t.hero.titleAccent }}</span>{{ t.hero.titleTail }}</h1>
    <p class="slogan-line">{{ t.hero.slogan }}</p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="hero__lead" v-html="t.hero.lead"></p>
  </div>
</section>

<!-- ════════ CATEGORY NAV ════════ -->
<nav class="catnav" aria-label="Media categories">
  <div class="container catnav__in">
    <a v-for="s in t.sections" :key="s.id" :href="'#' + s.id">{{ s.nav }}</a>
  </div>
</nav>

<!-- ════════ SECTIONS — one per category; cards loaded from Contentful (SAMPLE_MEDIA until wired) ════════ -->
<section
  v-for="s in t.sections"
  :key="s.id"
  class="media-section"
  :class="'media-section--' + clsFor(s.id)"
  :id="s.id"
>
  <div class="cyberline" aria-hidden="true"><span data-anim="cpulse"></span></div>
  <div class="container">
    <div data-anim="reveal">
      <div class="sec-meta"><span class="mark">{{ s.mark }}</span><span class="coord">{{ s.coord }}</span></div>
      <div class="section-label">{{ s.label }}</div>
      <h2 class="section-title">{{ s.title }}</h2>
      <p class="section-subtitle">{{ s.subtitle }}</p>
    </div>
    <div class="media-grid">
      <MediaCard v-for="item in itemsBySection(s.id)" :key="item.id" :item="item" :cta="s.cta" />
    </div>
    <p v-if="loading" class="media-note">{{ t.states.loading }}</p>
    <p v-else-if="error" class="media-note media-note--err">{{ t.states.error }}</p>
    <p v-else-if="itemsBySection(s.id).length === 0" class="media-note">{{ t.states.empty }}</p>
  </div>
</section>

<!-- ════════ CTA BAND ════════ -->
<section class="cta-band" id="contact">
  <div class="strip-grid" aria-hidden="true"></div>
  <div class="container cta-band__in">
    <h2>{{ t.cta.title }}</h2>
    <p>{{ t.cta.text }}</p>
    <a class="action" :href="lp('/contact') + '#brief'">{{ t.cta.action }} <span class="arrow">→</span></a>
  </div>
</section>

</main>
</template>

<script setup lang="ts">
import { onMounted, onServerPrefetch, onUnmounted, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
// Reuse the blog's effects verbatim — they attach to generic hooks (#mesh,
// [data-anim="blink|hexrow|reveal|cpulse"]) plus the shared header/mobile-menu,
// all of which this page has.
import { initEffects } from './Blog.effects'
import { applyBlogTheme } from '@/composables/blogTheme'
import { useHead } from '@/i18n/useHead'
import { usePageContent } from '@/i18n/useContent'
import { locale, localePath } from '@/i18n/locale'
import MediaCard from '@/components/MediaCard.vue'
import media from '@/content/media'
import { fetchMediaItems, SAMPLE_MEDIA, mediaSectionMeta, type MediaItem, type MediaSectionId } from '@/lib/media'

const STATE_KEY = 'items'
const route = useRoute()
const t = usePageContent(media)
useHead(media)
const lp = (p: string) => localePath(p)

// Seed from the SSR-serialized state so a prerendered media page ships with its
// cards and hydrates without a refetch.
const stateBag = route.meta.state as Record<string, unknown> | undefined
const seeded = (stateBag?.[STATE_KEY] as MediaItem[] | undefined) ?? null

const items = ref<MediaItem[]>(seeded ?? [])
const loading = ref(!seeded)
const error = ref(false)

const clsFor = (id: MediaSectionId) => mediaSectionMeta(id).cls
const itemsBySection = (id: MediaSectionId) => items.value.filter((i) => i.section === id)

// SSR: prerender ONLY real Contentful items — never bake SAMPLE_MEDIA mockups
// into static HTML. On empty/error, ship the shell (the client re-fetches).
onServerPrefetch(async () => {
  try {
    items.value = await fetchMediaItems(locale.value)
  } catch (e) {
    console.error('[media] SSR items fetch failed', e)
    items.value = []
  }
  loading.value = false
  if (stateBag) stateBag[STATE_KEY] = items.value
})

let dispose: (() => void) | undefined
onMounted(async () => {
  applyBlogTheme()
  // Client fetch only when NOT prerendered/seeded (SPA fallback). Here the
  // SAMPLE_MEDIA placeholder is acceptable — it never reaches static HTML.
  if (!seeded) {
    try {
      const live = await fetchMediaItems(locale.value)
      items.value = live.length ? live : SAMPLE_MEDIA
    } catch (e) {
      console.warn('[media] Contentful not configured — showing sample mockups', e)
      items.value = SAMPLE_MEDIA
    } finally {
      loading.value = false
    }
  }
  // Cards must be in the DOM before the scroll-reveal IntersectionObserver inits
  // (from SSR when seeded, or after the client fetch above).
  await nextTick()
  dispose = initEffects()
})
onUnmounted(() => dispose && dispose())
</script>

<style scoped>
/* Same layout as Blog.vue — hero, category nav and stacked sections — but with
   three media categories, each in a distinct shade of the signature mint, and a
   wrapping card grid (no horizontal scroll). */
::-webkit-scrollbar{ width:12px; height:12px; }
::-webkit-scrollbar-track{ background:var(--paper-2); }
::-webkit-scrollbar-thumb{ background:var(--hairline-strong); border:3px solid var(--paper-2); border-radius:8px; }
::selection{ background:#1FC49A; color:var(--paper); }
a{ color:inherit; }
h1,h2,h3,h4{ font-family:var(--serif); font-weight:400; margin:0; }
p{ margin:0; }
ul,ol{ margin:0; padding:0; list-style:none; }
img{ max-width:100%; }
:focus-visible{ outline:2px solid #1FC49A; outline-offset:3px; }
.cyberline{ position:relative; height:1px; overflow:hidden; pointer-events:none; }
.cyberline::before{ content:""; position:absolute; inset:0; background:linear-gradient(90deg,transparent,currentColor 30%,currentColor 70%,transparent); opacity:.24; }
.regmark{ position:absolute; width:18px; height:18px; pointer-events:none; opacity:.5; }
.regmark::before,.regmark::after{ content:""; position:absolute; background:var(--hairline-strong); }
.regmark::before{ width:1px; height:100%; left:0; top:0; }
.regmark::after{ width:100%; height:1px; left:0; top:0; }
.regmark.tr{ transform:scaleX(-1); }
.hero{ padding-top:clamp(2.5rem,6vw,4.5rem); padding-bottom:var(--section-y); position:relative; overflow:hidden; }
#mesh{ position:absolute; inset:0; z-index:0; pointer-events:none; }
.hero__in{ position:relative; z-index:1; }
.kicker{ font-family:var(--mono); font-size:.76rem; color:var(--ink-2); letter-spacing:.04em; margin-bottom:1.1rem; display:inline-flex; align-items:center; gap:.6rem; }
.kicker .caret{ display:inline-block; width:7px; height:1.05em; background:#1FC49A; vertical-align:-2px; }
.hexrow{ font-family:var(--mono); font-size:.58rem; letter-spacing:.18em; color:#1FA080; opacity:.22; overflow:hidden; white-space:nowrap; margin-bottom:.9rem; pointer-events:none; user-select:none; }
.hero h1{ font-family:var(--serif); font-size:clamp(2.3rem,1.2rem + 4vw,4rem); line-height:1.05; letter-spacing:-0.02em; max-width:18ch; }
.hero h1 .b{ color:#1FA080; font-weight:500; }
.slogan-line{ font-family:var(--mono); font-size:.82rem; color:#1FA080; letter-spacing:.05em; margin-top:.9rem; }
.hero__lead{ margin-top:1.5rem; max-width:60ch; font-size:1.1rem; color:var(--ink-2); }
.hero__lead strong{ color:var(--ink); font-weight:500; }
/* Category nav */
.catnav{ border-top:1px solid var(--ink); border-bottom:1px solid var(--hairline); background:var(--paper-2); }
.catnav__in{ display:flex; gap:0; flex-wrap:wrap; }
.catnav a{ font-family:var(--mono); font-size:.7rem; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-2); padding:1rem clamp(.85rem,2vw,1.4rem); border-left:1px solid var(--hairline); text-decoration:none; position:relative; transition:color .2s ease; white-space:nowrap; }
.catnav a:first-child{ border-left:none; }
.catnav a::after{ content:""; position:absolute; left:0; right:0; bottom:-1px; height:2px; background:#1FC49A; transform:scaleX(0); transform-origin:left; transition:transform .3s ease; }
.catnav a:hover{ color:var(--ink); }
.catnav a:hover::after{ transform:scaleX(1); }
@media (max-width:640px) {
.catnav a{ padding:.8rem .9rem; font-size:.62rem; letter-spacing:.1em; }
}
/* Sections */
.media-section{ padding-block:var(--section-y); position:relative; border-top:1px solid var(--hairline); scroll-margin-top:92px; }
.media-section:first-of-type{ border-top:1px solid var(--ink); }
.media-section::before{ content:""; position:absolute; left:var(--pad-x); top:-1px; width:46px; height:3px; z-index:3; }
.media-section .cyberline{ position:absolute; top:0; left:0; right:0; z-index:2; }
.section-label{ font-family:var(--mono); font-size:.72rem; letter-spacing:.16em; text-transform:uppercase; display:flex; align-items:center; gap:.7rem; margin-bottom:1rem; }
.section-label::before{ content:""; width:28px; height:1px; background:currentColor; }
.section-title{ font-family:var(--serif); font-size:clamp(1.55rem,1.25rem + 1.4vw,2.3rem); letter-spacing:-0.015em; color:var(--ink); margin-bottom:.6rem; line-height:1.18; }
.section-subtitle{ font-family:var(--serif); font-style:italic; color:var(--ink-2); font-size:1.05rem; max-width:62ch; }
/* Three shades of the signature mint (light → deep). */
.media-section--m1{ background:#D3ECE1; }
.media-section--m1::before{ background:#3FD9B0; }
.media-section--m1 .cyberline{ color:#1FA080; }
.media-section--m1 .section-label{ color:#1FA080; }
.media-section--m2{ background:#B4DACA; }
.media-section--m2::before{ background:#1FC49A; }
.media-section--m2 .cyberline{ color:#17967A; }
.media-section--m2 .section-label{ color:#17967A; }
.media-section--m3{ background:#9AC7B0; }
.media-section--m3::before{ background:#2A8A66; }
.media-section--m3 .cyberline{ color:#1C6349; }
.media-section--m3 .section-label{ color:#1C6349; }
/* Responsive grid — cards wrap onto the page (no horizontal scroll), mobile + desktop. */
.media-grid{ display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:clamp(1rem,2vw,1.5rem); margin-top:2.4rem; }
.media-note{ font-family:var(--mono); font-size:.8rem; color:var(--ink-2); margin-top:1.6rem; letter-spacing:.02em; }
.media-note--err{ color:#9B0E00; }
.sec-meta{ display:flex; justify-content:space-between; align-items:center; gap:1rem; font-family:var(--mono); font-size:.7rem; color:var(--ink-2); letter-spacing:.04em; margin-bottom:1.4rem; }
.sec-meta .mark{ color:var(--ink); }
.sec-meta .coord{ opacity:.7; white-space:nowrap; }
@media (max-width:560px) {
.sec-meta .coord{ display:none; }
}
/* CTA band */
.cta-band{ border-top:1px solid var(--ink); text-align:center; position:relative; overflow:hidden; }
.cta-band .strip-grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,#1FC49A 1px,transparent 1px); background-size:28px 28px; opacity:.05; }
.cta-band__in{ position:relative; z-index:1; padding-block:clamp(3rem,6vw,4.5rem); }
.cta-band h2{ font-family:var(--serif); font-size:clamp(1.8rem,1.4rem + 1.6vw,2.7rem); letter-spacing:-0.02em; max-width:20ch; margin-inline:auto; }
.cta-band p{ margin:1.1rem auto 1.9rem; max-width:56ch; color:var(--ink-2); font-size:1.05rem; }
.action{ text-decoration:none; font-weight:500; font-size:1rem; border-bottom:1px solid #1FC49A; padding-bottom:3px; color:#17967A; display:inline-flex; align-items:center; gap:.5rem; }
.action .arrow{ display:inline-block; transition:transform .3s ease; }
.action:hover .arrow{ transform:translateX(5px); }
@media (prefers-reduced-motion: reduce) {
#mesh{ display:none; }
}
</style>

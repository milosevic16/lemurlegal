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
<nav class="catnav" aria-label="Blog categories">
  <div class="container catnav__in">
    <a v-for="s in t.sections" :key="s.id" :href="'#' + s.id">{{ s.nav }}</a>
  </div>
</nav>

<!-- ════════ SECTIONS — cards are loaded from Contentful ════════ -->
<section
  v-for="s in t.sections"
  :key="s.id"
  class="blog-section"
  :class="'blog-section--' + clsFor(s.id)"
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
    <div class="blog-scroller" data-blog-scroller>
      <div class="blog-grid">
        <BlogCard v-for="post in postsBySection(s.id)" :key="post.id" :post="post" />
      </div>
      <!-- Scroll affordance: shown by JS only when the track overflows and isn't
           at the end, so users know more posts exist to the right. Colour comes
           from the section (.blog-section--{b,g,o}). -->
      <button type="button" class="blog-more" data-blog-more hidden>
        <span class="blog-more__label">{{ t.states.more }}</span>
        <span class="blog-more__arrow" aria-hidden="true">→</span>
      </button>
    </div>
    <p v-if="loading" class="blog-note">{{ t.states.loading }}</p>
    <p v-else-if="error" class="blog-note blog-note--err">{{ t.states.error }}</p>
    <p v-else-if="postsBySection(s.id).length === 0" class="blog-note">{{ t.states.empty }}</p>
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
import { initEffects } from './Blog.effects'
import { applyBlogTheme } from '@/composables/blogTheme'
import { useHead } from '@/i18n/useHead'
import { usePageContent } from '@/i18n/useContent'
import { locale, localePath } from '@/i18n/locale'
import BlogCard from '@/components/BlogCard.vue'
import blog from '@/content/blog'
import { fetchPosts, sectionMeta, type BlogPost, type SectionId } from '@/lib/contentful'

const STATE_KEY = 'posts'
const route = useRoute()
const t = usePageContent(blog)
useHead(blog)
const lp = (p: string) => localePath(p)

// Seed from the SSR-serialized state (route.meta.state) so a prerendered blog
// index ships with its cards and hydrates without a refetch.
const stateBag = route.meta.state as Record<string, unknown> | undefined
const seeded = (stateBag?.[STATE_KEY] as BlogPost[] | undefined) ?? null

const posts = ref<BlogPost[]>(seeded ?? [])
const loading = ref(!seeded)
const error = ref(false)

const clsFor = (id: SectionId) => sectionMeta(id).cls
function postsBySection(id: SectionId): BlogPost[] {
  return posts.value.filter((p) => p.section === id)
}

// Fetch on the server so the post cards (and their /blog/<slug> links) are in the
// prerendered HTML; stash trimmed posts (drop the unused rich-text AST) for the client.
onServerPrefetch(async () => {
  try {
    posts.value = await fetchPosts(locale.value)
  } catch (e) {
    error.value = true
    console.error('[blog] SSR posts fetch failed', e)
  }
  loading.value = false
  if (stateBag) stateBag[STATE_KEY] = posts.value.map((p) => ({ ...p, body: null }))
})

// The scroll-reveal sets up a one-shot IntersectionObserver over
// [data-anim="reveal"] at init, so cards must already be in the DOM — either from
// SSR (seeded) or after the client fetch below. A locale switch remounts the view
// (router-view key), so onMounted re-runs in the new locale; no watcher needed.
// "More" scroll affordance per section. Each .blog-grid is a horizontal scroll
// track; without a hint users don't realise a section holds more posts than fit
// (3 on desktop, 1 on mobile). Show the button + right-edge fade only while the
// track overflows AND isn't scrolled to the end. Client-only; returns a disposer.
function initScrollHints(): () => void {
  const cleanups: Array<() => void> = []
  document.querySelectorAll<HTMLElement>('[data-blog-scroller]').forEach((wrap) => {
    const grid = wrap.querySelector<HTMLElement>('.blog-grid')
    const btn = wrap.querySelector<HTMLButtonElement>('[data-blog-more]')
    if (!grid || !btn) return
    const update = () => {
      const max = grid.scrollWidth - grid.clientWidth
      const show = max > 8 && grid.scrollLeft < max - 8
      btn.hidden = !show
      wrap.classList.toggle('has-overflow', show)
    }
    const onClick = () => {
      const card = grid.querySelector<HTMLElement>('.blog-card')
      const step = card ? card.getBoundingClientRect().width + 20 : grid.clientWidth * 0.85
      // Direct scrollLeft (not scrollBy/behavior:'smooth', which is a no-op in
      // no-paint contexts). scroll-snap on .blog-grid lands it on the next card;
      // CSS scroll-behavior on the grid provides the smooth animation.
      grid.scrollLeft = Math.min(grid.scrollLeft + step, grid.scrollWidth - grid.clientWidth)
    }
    grid.addEventListener('scroll', update, { passive: true })
    btn.addEventListener('click', onClick)
    window.addEventListener('resize', update, { passive: true })
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null
    ro?.observe(grid)
    update()
    cleanups.push(() => {
      grid.removeEventListener('scroll', update)
      btn.removeEventListener('click', onClick)
      window.removeEventListener('resize', update)
      ro?.disconnect()
    })
  })
  return () => cleanups.forEach((c) => c())
}

let dispose: (() => void) | undefined
let disposeHints: (() => void) | undefined
onMounted(async () => {
  applyBlogTheme()
  if (!seeded) {
    try {
      posts.value = await fetchPosts(locale.value)
    } catch (e) {
      error.value = true
      console.error('[blog] failed to load posts', e)
    } finally {
      loading.value = false
    }
  }
  await nextTick()
  dispose = initEffects()
  disposeHints = initScrollHints()
})
onUnmounted(() => {
  dispose && dispose()
  disposeHints && disposeHints()
})
</script>

<style scoped>
::-webkit-scrollbar{ width:12px; height:12px; }
::-webkit-scrollbar-track{ background:var(--paper-2); }
::-webkit-scrollbar-thumb{ background:var(--hairline-strong); border:3px solid var(--paper-2); border-radius:8px; }
::selection{ background:var(--blue); color:var(--paper); }
a{ color:inherit; }
h1,h2,h3,h4{ font-family:var(--serif); font-weight:400; margin:0; }
p{ margin:0; }
ul,ol{ margin:0; padding:0; list-style:none; }
img{ max-width:100%; }
:focus-visible{ outline:2px solid var(--sig); outline-offset:3px; }
.cyberline{ position:relative; height:1px; overflow:hidden; pointer-events:none; }
.cyberline::before{ content:""; position:absolute; inset:0; background:linear-gradient(90deg,transparent,currentColor 30%,currentColor 70%,transparent); opacity:.24; }
.regmark{ position:absolute; width:18px; height:18px; pointer-events:none; opacity:.5; }
.regmark::before,.regmark::after{ content:""; position:absolute; background:var(--hairline-strong); }
.regmark::before{ width:1px; height:100%; left:0; top:0; }
.regmark::after{ width:100%; height:1px; left:0; top:0; }
.regmark.tr{ transform:scaleX(-1); }
.hud-tl,.hud-tr,.hud-bl,.hud-br{ position:absolute; width:14px; height:14px; pointer-events:none; }
.hud-tl{ top:0; left:0; border-top:1.5px solid var(--sig); border-left:1.5px solid var(--sig); opacity:.3; }
.hud-tr{ top:0; right:0; border-top:1.5px solid var(--sig); border-right:1.5px solid var(--sig); opacity:.3; }
.hud-bl{ bottom:0; left:0; border-bottom:1.5px solid var(--sig); border-left:1.5px solid var(--sig); opacity:.3; }
.hud-br{ bottom:0; right:0; border-bottom:1.5px solid var(--sig); border-right:1.5px solid var(--sig); opacity:.3; }
.book{ text-decoration:none; font-size:.82rem; font-weight:500; border:1px solid var(--ink); padding:.45rem .85rem; color:var(--ink); transition:background .25s ease,color .25s ease; white-space:nowrap; }
.book:hover{ background:var(--ink); color:var(--paper); }
.hero{ padding-top:clamp(2.5rem,6vw,4.5rem); padding-bottom:var(--section-y); position:relative; overflow:hidden; }
#mesh{ position:absolute; inset:0; z-index:0; pointer-events:none; }
.hero__in{ position:relative; z-index:1; }
.kicker{ font-family:var(--mono); font-size:.76rem; color:var(--ink-2); letter-spacing:.04em; margin-bottom:1.1rem; display:inline-flex; align-items:center; gap:.6rem; }
.kicker .caret{ display:inline-block; width:7px; height:1.05em; background:var(--sig); vertical-align:-2px; }
.hexrow{ font-family:var(--mono); font-size:.58rem; letter-spacing:.18em; color:var(--blue); opacity:.22; overflow:hidden; white-space:nowrap; margin-bottom:.9rem; pointer-events:none; user-select:none; }
.hero h1{ font-family:var(--serif); font-size:clamp(2.3rem,1.2rem + 4vw,4rem); line-height:1.05; letter-spacing:-0.02em; max-width:18ch; }
.hero h1 .b{ color:var(--blue); font-weight:500; }
.hero h1 .g{ color:var(--green); font-weight:500; }
.hero h1 .o{ color:var(--ochre); font-weight:500; }
.slogan-line{ font-family:var(--mono); font-size:.82rem; color:var(--sig); letter-spacing:.05em; margin-top:.9rem; }
.hero__lead{ margin-top:1.5rem; max-width:60ch; font-size:1.1rem; color:var(--ink-2); }
.hero__lead strong{ color:var(--ink); font-weight:500; }
.catnav{ border-top:1px solid var(--ink); border-bottom:1px solid var(--hairline); background:var(--paper-2); }
.catnav__in{ display:flex; gap:0; flex-wrap:wrap; }
.catnav a{ font-family:var(--mono); font-size:.7rem; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-2); padding:1rem clamp(.85rem,2vw,1.4rem); border-left:1px solid var(--hairline); text-decoration:none; position:relative; transition:color .2s ease; white-space:nowrap; }
.catnav a:first-child{ border-left:none; }
.catnav a::after{ content:""; position:absolute; left:0; right:0; bottom:-1px; height:2px; background:var(--sig); transform:scaleX(0); transform-origin:left; transition:transform .3s ease; }
.catnav a:hover{ color:var(--ink); }
.catnav a:hover::after{ transform:scaleX(1); }
@media (max-width:640px) {
.catnav a{ padding:.8rem .9rem; font-size:.62rem; letter-spacing:.1em; }
}
.blog-section{ padding-block:var(--section-y); position:relative; }
.section-label{ font-family:var(--mono); font-size:.72rem; letter-spacing:.16em; text-transform:uppercase; color:var(--blue-deep); display:flex; align-items:center; gap:.7rem; margin-bottom:1rem; }
.section-label::before{ content:""; width:28px; height:1px; background:currentColor; }
.section-title{ font-family:var(--serif); font-size:clamp(1.55rem,1.25rem + 1.4vw,2.3rem); letter-spacing:-0.015em; color:var(--ink); margin-bottom:.6rem; line-height:1.18; }
.section-subtitle{ font-family:var(--serif); font-style:italic; color:var(--ink-2); font-size:1.05rem; max-width:62ch; }
/* Horizontal scroll track — cards line up left-to-right and scroll when the
   section has more than fit. Card sizing/scroll-snap lives in BlogCard.vue. */
.blog-grid{ display:flex; gap:clamp(1rem,2vw,1.5rem); margin-top:2.4rem; overflow-x:auto; overflow-y:hidden; scroll-snap-type:x proximity; scroll-behavior:smooth; padding-bottom:1rem; -webkit-overflow-scrolling:touch; scrollbar-width:thin; scrollbar-color:var(--hairline-strong) transparent; }
.blog-grid::-webkit-scrollbar{ height:8px; }
.blog-grid::-webkit-scrollbar-track{ background:transparent; }
.blog-grid::-webkit-scrollbar-thumb{ background:var(--hairline-strong); border-radius:8px; border:2px solid transparent; background-clip:padding-box; }
/* ── "More" scroll affordance ─────────────────────────────────────────── */
.blog-scroller{ position:relative; }
/* Right-edge fade — only while more cards exist to the right (JS toggles .has-overflow). */
.blog-scroller.has-overflow::after{ content:""; position:absolute; top:0; bottom:1rem; right:0; width:clamp(56px,12%,120px); pointer-events:none; z-index:2; }
.blog-more{ position:absolute; top:calc(50% - .5rem); right:.5rem; transform:translateY(-50%); z-index:3; display:inline-flex; align-items:center; gap:.45rem; padding:.62rem 1.05rem; border:none; border-radius:999px; font-family:var(--mono); font-size:.72rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:#fff; cursor:pointer; box-shadow:0 10px 26px -12px rgba(20,18,30,.7); transition:transform .2s ease, box-shadow .2s ease, background .2s ease; }
.blog-more[hidden]{ display:none; }
.blog-more:hover{ transform:translateY(-50%) scale(1.05); box-shadow:0 14px 30px -12px rgba(20,18,30,.85); }
.blog-more:active{ transform:translateY(-50%) scale(.98); }
.blog-more:focus-visible{ outline:2px solid #fff; outline-offset:2px; }
.blog-more__arrow{ font-size:.95rem; line-height:1; transition:transform .2s ease; }
.blog-more:hover .blog-more__arrow{ transform:translateX(3px); }
/* Per-section colour: button = deep accent + white text; fade = section background. */
.blog-section--b .blog-more{ background:#6444CC; }
.blog-section--b .blog-more:hover{ background:#573BB8; }
.blog-section--b .blog-scroller.has-overflow::after{ background:linear-gradient(90deg,rgba(203,196,220,0),#CBC4DC 72%); }
.blog-section--g .blog-more{ background:#137A5F; }
.blog-section--g .blog-more:hover{ background:#0E6E54; }
.blog-section--g .blog-scroller.has-overflow::after{ background:linear-gradient(90deg,rgba(186,210,196,0),#BAD2C4 72%); }
.blog-section--o .blog-more{ background:#9E5A1E; }
.blog-section--o .blog-more:hover{ background:#874C18; }
.blog-section--o .blog-scroller.has-overflow::after{ background:linear-gradient(90deg,rgba(217,210,180,0),#D9D2B4 72%); }
@media (prefers-reduced-motion: reduce){
  .blog-more, .blog-more__arrow{ transition:none; }
}
.blog-note{ font-family:var(--mono); font-size:.8rem; color:var(--ink-2); margin-top:1.6rem; letter-spacing:.02em; }
.blog-note--err{ color:#9B0E00; }
.blog-section{ border-top:1px solid var(--hairline); }
.blog-section:first-of-type{ border-top:1px solid var(--ink); }
.blog-section::before{ content:""; position:absolute; left:var(--pad-x); top:-1px; width:46px; height:3px; z-index:3; }
.blog-section--b::before{ background:var(--blue); }
.blog-section--g::before{ background:#1FC49A; }
.blog-section--o::before{ background:#C8772E; }
.blog-section--b{ background:#CBC4DC; }
.blog-section--g{ background:#BAD2C4; }
.blog-section--o{ background:#D9D2B4; }
.blog-section .cyberline{ position:absolute; top:0; left:0; right:0; z-index:2; }
.blog-section--b .cyberline{ color:#6444CC; }
.blog-section--g .cyberline{ color:#0E6E54; }
.blog-section--o .cyberline{ color:#9E5A1E; }
.sec-meta{ display:flex; justify-content:space-between; align-items:center; gap:1rem; font-family:var(--mono); font-size:.7rem; color:var(--ink-2); letter-spacing:.04em; margin-bottom:1.4rem; }
.sec-meta .mark{ color:var(--ink); }
.sec-meta .coord{ opacity:.7; white-space:nowrap; }
@media (max-width:560px) {
.sec-meta .coord{ display:none; }
}
.blog-section--b .section-label{ color:var(--blue-deep); }
.blog-section--g .section-label{ color:#137A5F; }
.blog-section--o .section-label{ color:#9E5A1E; }
.cta-band{ border-top:1px solid var(--ink); text-align:center; position:relative; overflow:hidden; }
.cta-band .strip-grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,var(--blue) 1px,transparent 1px); background-size:28px 28px; opacity:.045; }
.cta-band__in{ position:relative; z-index:1; padding-block:clamp(3rem,6vw,4.5rem); }
.cta-band h2{ font-family:var(--serif); font-size:clamp(1.8rem,1.4rem + 1.6vw,2.7rem); letter-spacing:-0.02em; max-width:20ch; margin-inline:auto; }
.cta-band p{ margin:1.1rem auto 1.9rem; max-width:56ch; color:var(--ink-2); font-size:1.05rem; }
.action{ text-decoration:none; font-weight:500; font-size:1rem; border-bottom:1px solid var(--blue); padding-bottom:3px; color:var(--blue-deep); display:inline-flex; align-items:center; gap:.5rem; }
.action .arrow{ display:inline-block; transition:transform .3s ease; }
.action:hover .arrow{ transform:translateX(5px); }
@media (prefers-reduced-motion: reduce) {
#mesh{ display:none; }
}
</style>

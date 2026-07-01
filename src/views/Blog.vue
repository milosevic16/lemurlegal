<template>
<main id="main">
<a id="top"></a>

<!-- ════════ HERO ════════ -->
<section class="hero container" aria-labelledby="hero-h">
  <canvas id="mesh" aria-hidden="true"></canvas>
  <span class="regmark" style="top:1.2rem;left:.4rem" aria-hidden="true"></span>
  <span class="regmark tr" style="top:1.2rem;right:.4rem" aria-hidden="true"></span>
  <div class="hero__in">
    <p class="kicker">Blog · Ljubljana <span class="caret" data-anim="blink" aria-hidden="true"></span></p>
    <div class="hexrow" aria-hidden="true" data-anim="hexrow">0x7F59F5  0xD2DDD7  4C454741 4C2E4C41  0x3D7A5E  0xC4823A  4C4A4C20  0x131220  424C4F47  0x7F59F5</div>
    <h1 id="hero-h">Plain answers to <span class="b">hard</span> tech-law questions.</h1>
    <p class="slogan-line">// field notes from the legal frontier.</p>
    <p class="hero__lead">Briefings, explainers and deep-dives across our three practices — from <strong>MiCA</strong> and token classification, through incorporation, equity and IP, to export controls and dual-use. Written by the people who sign the advice.</p>
  </div>
</section>

<!-- ════════ CATEGORY NAV ════════ -->
<nav class="catnav" aria-label="Blog categories">
  <div class="container catnav__in">
    <a href="#crypto">Crypto &amp; Fintech</a>
    <a href="#startups">Startups &amp; Deep Tech</a>
    <a href="#defence">Defence &amp; Dual-Use</a>
  </div>
</nav>

<!-- ════════ SECTIONS — cards are loaded from Contentful ════════ -->
<section
  v-for="s in SECTIONS"
  :key="s.id"
  class="blog-section"
  :class="'blog-section--' + s.cls"
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
    <div class="blog-grid">
      <BlogCard v-for="post in postsBySection(s.id)" :key="post.id" :post="post" />
    </div>
    <p v-if="loading" class="blog-note">Loading posts…</p>
    <p v-else-if="error" class="blog-note blog-note--err">Couldn't load posts right now — please try again shortly.</p>
    <p v-else-if="postsBySection(s.id).length === 0" class="blog-note">No posts in this section yet.</p>
  </div>
</section>

<!-- ════════ CTA BAND ════════ -->
<section class="cta-band" id="contact">
  <div class="strip-grid" aria-hidden="true"></div>
  <div class="container cta-band__in">
    <h2>Have a question we haven't answered?</h2>
    <p>Tell us what you're building and we'll map the legal path — with a fixed fee, in writing. One firm, three frontiers.</p>
    <a class="action" href="/contact">Book a consultation <span class="arrow">→</span></a>
  </div>
</section>

</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { initEffects } from './Blog.effects'
import { applyBlogTheme } from '@/composables/blogTheme'
import BlogCard from '@/components/BlogCard.vue'
import { fetchPosts, SECTIONS, type BlogPost, type SectionId } from '@/lib/contentful'

const posts = ref<BlogPost[]>([])
const loading = ref(true)
const error = ref(false)

function postsBySection(id: SectionId): BlogPost[] {
  return posts.value.filter((p) => p.section === id)
}

let dispose: (() => void) | undefined
onMounted(async () => {
  document.title = 'Blog — Lemur Legal'
  applyBlogTheme()
  // Load posts first, then start the effects: the scroll-reveal sets up a
  // one-shot IntersectionObserver over [data-anim="reveal"] at init time, so
  // the cards must already be in the DOM (hence the await + nextTick).
  try {
    posts.value = await fetchPosts()
  } catch (e) {
    error.value = true
    console.error('[blog] failed to load posts', e)
  } finally {
    loading.value = false
    await nextTick()
    dispose = initEffects()
  }
})
onUnmounted(() => dispose && dispose())
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
.blog-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(1rem,2vw,1.5rem); margin-top:2.4rem; }
@media (max-width:980px) {
.blog-grid{ grid-template-columns:repeat(2,1fr); }
}
@media (max-width:620px) {
.blog-grid{ grid-template-columns:1fr; }
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

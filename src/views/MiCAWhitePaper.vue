<template>
<main id="main">
<a id="top"></a>

<!-- ===== HERO ===== -->
<header class="hero" aria-labelledby="hero-h">
  <canvas class="hero__mesh" data-anim="mesh" aria-hidden="true"></canvas>
  <span class="regmark" style="top:1.2rem;left:.2rem" aria-hidden="true"></span>
  <span class="regmark" style="top:1.2rem;right:.2rem" aria-hidden="true"></span>
  <div class="hero__in">
    <div class="hero__main">
      <p class="kicker">{{ t.hero.kicker }} <span class="caret" data-anim="blink" aria-hidden="true"></span></p>
      <div class="hexrow" data-anim="hexrow" aria-hidden="true">0x7F59F5  4D694341  0x2023  4C454741  0x1114  454F5552  0xD2DDD7  4C4A4C20  0x6444CC</div>
      <h1 id="hero-h"><span class="hero__glitch" data-anim="glitch" :data-text="t.hero.h1Glitch">{{ t.hero.h1Glitch }}</span> <span class="em">{{ t.hero.h1Em }}</span></h1>
      <p class="slogan-line">{{ t.hero.slogan }}</p>
      <p class="hero__lead" v-html="t.hero.lead"></p>
      <div class="hero__actions">
        <a class="h-btn" href="#contact" data-ht-arrow="">{{ t.hero.btnPrimary }} <span class="arrow" data-ht-glyph="" aria-hidden="true">→</span></a>
        <a class="h-btn h-btn--ghost" href="#how">{{ t.hero.btnGhost }}</a>
      </div>
      <p class="hero__meta">{{ t.hero.meta }}</p>
    </div>

    <div class="seal-wrap" data-anim="reveal">
      <svg class="seal" data-anim="seal" viewBox="0 0 240 240" fill="none" role="img" aria-label="MiCA white-paper verification badge">
        <!-- soft pulsing halo -->
        <circle data-anim="seal-pulse" cx="120" cy="120" r="92" stroke="#7F59F5" stroke-width="1" opacity="0" fill="none"></circle>
        <!-- outer static ring -->
        <circle cx="120" cy="120" r="84" stroke="#6444CC" stroke-width="1.2" opacity="0.55" fill="none"></circle>
        <!-- rotating segmented arc + orbiting dots -->
        <g data-anim="seal-rotor">
          <circle cx="120" cy="120" r="72" stroke="#7F59F5" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-dasharray="78 35" opacity="0.9"></circle>
          <circle cx="120" cy="36" r="3.2" fill="#A88BFF"></circle>
          <circle cx="193" cy="162" r="3.2" fill="#A88BFF"></circle>
          <circle cx="47" cy="162" r="3.2" fill="#A88BFF"></circle>
        </g>
        <!-- counter-rotating dotted ring -->
        <g data-anim="seal-rotor2">
          <circle cx="120" cy="120" r="58" stroke="#A88BFF" stroke-width="1" fill="none" stroke-dasharray="1.5 9" opacity="0.55"></circle>
        </g>
        <!-- fixed crosshair ticks -->
        <g stroke="#7F59F5" stroke-width="1.4" opacity="0.6" stroke-linecap="round">
          <line x1="120" y1="10" x2="120" y2="22"></line><line x1="120" y1="218" x2="120" y2="230"></line>
          <line x1="10" y1="120" x2="22" y2="120"></line><line x1="218" y1="120" x2="230" y2="120"></line>
        </g>
        <!-- inner circle + check + label -->
        <circle cx="120" cy="120" r="46" stroke="#6444CC" stroke-width="1.2" opacity="0.9" fill="none"></circle>
        <path data-anim="seal-check" d="M104,120 l11,12 l22,-26" stroke="#7F59F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
        <text x="120" y="160" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="12" font-weight="600" letter-spacing="1.5" fill="#EAF0FF">MiCA-PROOF</text>
      </svg>
    </div>
  </div>
</header>

<!-- ===== STRIP: WHAT IS MiCA ===== -->
<section class="strip" aria-label="What is MiCA">
  <div class="strip__grid" aria-hidden="true"></div>
  <div class="cyberline" aria-hidden="true"><span class="cyberline__base"></span><span data-anim="cpulse"></span></div>
  <div class="container strip__in">
    <span class="strip__k">{{ t.strip.k }}</span>
    <p class="strip__v">{{ t.strip.v }}</p>
  </div>
</section>

<!-- ===== WHO NEEDS ONE ===== -->
<section class="section container" aria-labelledby="who-h">
  <div class="sec-head">
    <span class="mark">§ 01</span>
    <h2 id="who-h">{{ t.who.h2 }}</h2>
    <span class="coord" aria-hidden="true">[ WHO NEEDS ONE ]</span>
  </div>
  <div class="why-grid">
    <div class="why" data-anim="reveal">
      <span class="wn">{{ t.who.items[0].wn }}</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3.5 9h17M3.5 15h17M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"></path></svg></div>
      <h3>{{ t.who.items[0].h3 }}</h3>
      <p>{{ t.who.items[0].p }}</p>
    </div>
    <div class="why" data-anim="reveal">
      <span class="wn">{{ t.who.items[1].wn }}</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M12 3v18M5 6l14 12M19 6L5 18"></path></svg></div>
      <h3>{{ t.who.items[1].h3 }}</h3>
      <p>{{ t.who.items[1].p }}</p>
    </div>
    <div class="why" data-anim="reveal">
      <span class="wn">{{ t.who.items[2].wn }}</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5M9 13h6M9 17h6"></path></svg></div>
      <h3>{{ t.who.items[2].h3 }}</h3>
      <p>{{ t.who.items[2].p }}</p>
    </div>
  </div>
</section>

<!-- ===== HOW IT WORKS ===== -->
<section class="section section--line container" id="how" aria-labelledby="how-h">
  <div class="sec-head">
    <span class="mark">§ 02</span>
    <h2 id="how-h">{{ t.how.h2 }}</h2>
    <span class="coord" aria-hidden="true">[ HOW IT WORKS · 3 STEPS ]</span>
  </div>
  <div class="tl" data-anim="timeline" aria-label="From structure to filing, in three steps">
    <span class="hud-tl" aria-hidden="true"></span><span class="hud-tr" aria-hidden="true"></span>
    <span class="hud-bl" aria-hidden="true"></span><span class="hud-br" aria-hidden="true"></span>
    <div class="tl__grid" aria-hidden="true"></div>
    <div class="tl__head" aria-hidden="true">
      MiCA WHITE-PAPER PIPELINE &nbsp;·&nbsp; <span style="color:var(--term-cyan)">READY TO DRAFT</span> <span class="blip" data-anim="blink"></span>
    </div>
    <div class="tl__track">
      <div class="tl__rail" aria-hidden="true">
        <span class="tl__rail-fill" data-tl-fill=""></span>
        <span class="tl__pulse" data-tl-pulse=""></span>
      </div>
      <ol class="tl__steps">
        <li class="tl__step" data-tl-step="">
          <span class="tl__node" data-tl-node=""><span class="tl__node-num">01</span></span>
          <div class="tl__card" data-tl-card="">
            <p class="tl__step-k">{{ t.how.steps[0].stepK }}</p>
            <h3 class="tl__title">{{ t.how.steps[0].title }}</h3>
            <p class="tl__sub">{{ t.how.steps[0].sub }}</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#A88BFF"></span>{{ t.how.steps[0].tag }}</span>
          </div>
        </li>
        <li class="tl__step" data-tl-step="">
          <span class="tl__node" data-tl-node=""><span class="tl__node-num">02</span></span>
          <div class="tl__card" data-tl-card="">
            <p class="tl__step-k">{{ t.how.steps[1].stepK }}</p>
            <h3 class="tl__title">{{ t.how.steps[1].title }}</h3>
            <p class="tl__sub">{{ t.how.steps[1].sub }}</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#C4B5FF"></span>{{ t.how.steps[1].tag }}</span>
          </div>
        </li>
        <li class="tl__step" data-tl-step="">
          <span class="tl__node" data-tl-node=""><span class="tl__node-num">03</span></span>
          <div class="tl__card" data-tl-card="">
            <p class="tl__step-k">{{ t.how.steps[2].stepK }}</p>
            <h3 class="tl__title">{{ t.how.steps[2].title }}</h3>
            <p class="tl__sub">{{ t.how.steps[2].sub }}</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#A88BFF"></span>{{ t.how.steps[2].tag }}</span>
          </div>
        </li>
      </ol>
    </div>
    <div class="tl__foot">
      <a href="#contact" data-ht-arrow="">$ start-white-paper --client=you <span data-ht-glyph="" aria-hidden="true">→</span></a>
    </div>
  </div>
</section>

<!-- ===== FULL COVERAGE ===== -->
<section class="section section--line container" id="coverage" aria-labelledby="cov-h">
  <div class="sec-head">
    <span class="mark">§ 03</span>
    <h2 id="cov-h">{{ t.coverage.h2 }}</h2>
    <span class="coord" aria-hidden="true">[ FULL MiCA COVERAGE ]</span>
    <p>{{ t.coverage.intro }}</p>
  </div>
  <div class="cov-grid">
    <article class="cov" :class="'cov--' + ['b','g','o'][i % 3]" data-anim="reveal" data-ht-ledger="" v-for="(cov, i) in t.coverage.items" :key="i">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">P · {{ String(i + 1).padStart(2, '0') }}</span><h4>{{ cov.h4 }}</h4></div>
      <div class="cov__list">
        <div class="row" v-for="(row, j) in cov.rows" :key="j"><span class="l">{{ String(j + 1).padStart(2, '0') }}</span>{{ row }}</div>
      </div>
    </article>
  </div>

  <div class="callout" data-anim="reveal">
    <div class="ci"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h13M11 6l6 6-6 6M16 5h5v14h-5"></path></svg></div>
    <div>
      <h3>{{ t.coverage.travelH3 }}</h3>
      <p>{{ t.coverage.travelP }}</p>
    </div>
  </div>
</section>

<!-- ===== EXPERT ===== -->
<section class="section section--line container" id="expert" aria-labelledby="exp-h">
  <div class="sec-head">
    <span class="mark">§ 04</span>
    <h2 id="exp-h">{{ t.expert.h2 }}</h2>
    <span class="coord" aria-hidden="true">[ 46.05°N · 14.51°E ]</span>
  </div>
  <div class="founder" data-anim="reveal">
    <!-- Founder photo slot — replace the SVG below with a square portrait, e.g. <img src="peter-merc.jpg" alt="Peter Merc, Ph.D.">. It fills the box responsively via object-fit:cover. -->
    <div class="founder__aside">
      <div class="avatar" role="img" :aria-label="t.expert.name">
        <img src="/peter-merc.jpg" :alt="t.expert.name">
      </div>
      <a class="li-link" href="https://www.linkedin.com/in/petermerc/" target="_blank" rel="noopener noreferrer" :aria-label="t.expert.linkedinAria"><svg class="li-link__ic" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>LinkedIn</a>
    </div>
    <div>
      <span class="founder__eye">{{ t.expert.eyebrow }}</span>
      <h3 class="founder__name">{{ t.expert.name }}</h3>
      <p class="founder__role">{{ t.expert.role }}</p>
      <p class="founder__bio" v-html="t.expert.bio1"></p>
      <p class="founder__bio" v-html="t.expert.bio2"></p>
    </div>
  </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="section section--line container" aria-labelledby="tst-h">
  <div class="sec-head">
    <span class="mark">§ 05</span>
    <h2 id="tst-h">{{ t.testimonials.h2 }}</h2>
    <span class="coord" aria-hidden="true">[ WHAT CLIENTS SAY ]</span>
  </div>
  <div class="quotes">
    <div class="quote" data-anim="reveal" v-for="(q, i) in t.testimonials.quotes" :key="i">
      <div class="qm">“</div>
      <p>{{ q.p }}</p>
      <div class="by">{{ q.by }}</div>
    </div>
  </div>
</section>

<!-- ===== WHAT'S INCLUDED ===== -->
<section class="section section--line container" aria-labelledby="inc-h">
  <div class="sec-head">
    <span class="mark">§ 06</span>
    <h2 id="inc-h">{{ t.included.h2 }}</h2>
    <span class="coord" aria-hidden="true">[ WHAT'S INCLUDED ]</span>
  </div>
  <div class="inc-list">
    <div class="inc" data-anim="reveal" v-for="(item, i) in t.included.items" :key="i"><span class="ck"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span>{{ item }}</div>
  </div>
  <div class="priceband" data-anim="reveal">
    <div class="t" v-html="t.included.pricebandText"></div>
    <button class="btn" type="button" data-ht-hover-fill="" onclick="location.href='#contact'">{{ t.included.pricebandBtn }}</button>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="section section--line container" aria-labelledby="faq-h">
  <div class="sec-head">
    <span class="mark">§ 07</span>
    <h2 id="faq-h">{{ t.faq.h2 }}</h2>
    <span class="coord" aria-hidden="true">[ FAQ ]</span>
  </div>
  <div class="faq" data-anim="reveal">
    <div class="faq__item" v-for="(item, i) in t.faq.items" :key="i">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">{{ item.q }} <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>{{ item.a }}</p></div>
    </div>
  </div>
</section>

<!-- ===== FORM ===== -->
<section class="section section--line container" id="contact" aria-labelledby="frm-h">
  <div class="formwrap" data-anim="reveal">
    <span class="hud-tl" aria-hidden="true"></span><span class="hud-tr" aria-hidden="true"></span>
    <span class="hud-bl" aria-hidden="true"></span><span class="hud-br" aria-hidden="true"></span>
    <div class="formwrap__grid" aria-hidden="true"></div>
    <div class="formgrid">
      <div>
        <div class="eye">{{ t.form.eye }}</div>
        <h2 id="frm-h">{{ t.form.h }}</h2>
        <p class="fl">{{ t.form.lead }}</p>
        <p class="fl" style="font-size:.8rem;">{{ t.form.contactPrefix }}<span class="js-mail" data-u="info" data-d="fintechfactory.eu">info [at] fintechfactory.eu</span></p>
      </div>
      <div>
        <div class="field"><label for="f-name">{{ t.form.nameLabel }}</label><input type="text" id="f-name" name="name"></div>
        <div class="field"><label for="f-email">{{ t.form.emailLabel }}</label><input type="text" id="f-email" name="email"></div>
        <div class="field"><label for="f-proj">{{ t.form.projLabel }}</label><input type="text" id="f-proj" name="project"></div>
        <div class="field"><label for="f-link">{{ t.form.linkLabel }}</label><input type="text" id="f-link" name="link"></div>
        <label style="display:block;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(234,240,255,0.6);margin-bottom:.4rem;">{{ t.form.choiceLabel }}</label>
        <div class="choice" data-ht-choice="" role="group" aria-label="White paper type">
          <span class="chip" data-ht-chip="" data-on="true">{{ t.form.chips[0] }}</span>
          <span class="chip" data-ht-chip="" data-on="false">{{ t.form.chips[1] }}</span>
          <span class="chip" data-ht-chip="" data-on="false">{{ t.form.chips[2] }}</span>
        </div>
        <button class="btn" type="button" data-ht-hover-fill="">{{ t.form.submit }}</button>
      </div>
    </div>
  </div>
</section>

<!-- ===== CROSS-SELL ===== -->
<section class="section section--line container" aria-labelledby="xs-h">
  <div class="sec-head" style="margin-bottom:1.4rem;">
    <span class="mark">§ 08</span>
    <h2 id="xs-h">{{ t.cross.h2 }}</h2>
  </div>
  <div class="cross">
    <a class="xc" href="/crypto_legal_opinion" data-anim="reveal" data-ht-arrow="">
      <span class="xi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h18M3 12h18M3 17h12"></path></svg></span>
      <span><h4>{{ t.cross.items[0].h4 }}</h4><p>{{ t.cross.items[0].p }}</p></span>
      <span class="arr" data-ht-glyph="">→</span>
    </a>
    <a class="xc" href="/regulatory_compliance" data-anim="reveal" data-ht-arrow="">
      <span class="xi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"></path><path d="M9 12l2 2 4-4"></path></svg></span>
      <span><h4>{{ t.cross.items[1].h4 }}</h4><p>{{ t.cross.items[1].p }}</p></span>
      <span class="arr" data-ht-glyph="">→</span>
    </a>
  </div>
</section>
</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { initEffects } from './MiCAWhitePaper.effects'
import { useTheme, useRootVars } from '@/composables/useTheme'
import { usePageContent } from '@/i18n/useContent'
import { useHead } from '@/i18n/useHead'
import content from '@/content/products/micaWhitePaper'

const t = usePageContent(content)
useHead(content)

// This page's :root custom properties (fonts / spacing / palette). Applied at
// runtime so pages with different design tokens don't clobber each other.
const ROOT_VARS: Record<string, string> = {
  "--paper": "#D2DDD7",
  "--paper-2": "#C6D4CE",
  "--ink": "#1A1826",
  "--ink-2": "#585672",
  "--hairline": "#B4C0BA",
  "--hairline-strong": "#A0AEA8",
  "--blue": "#7F59F5",
  "--blue-deep": "#6444CC",
  "--blue-tint": "rgba(127,89,245,0.10)",
  "/* purple-monochrome": "the former green/ochre accents are now two further shades of purple */\n  --green:#A88BFF",
  "--green-deep": "#7F59F5",
  "--green-tint": "rgba(168,139,255,0.12)",
  "--ochre": "#6444CC",
  "--ochre-deep": "#4E33A8",
  "--ochre-tint": "rgba(100,68,204,0.13)",
  "--sig": "#7F59F5",
  "--sig-soft": "rgba(127,89,245,0.16)",
  "--term-bg": "#131220",
  "--term-bg-2": "#1C1B2E",
  "--term-dim": "#6E6890",
  "--term-fg": "#D2DDD7",
  "--term-cyan": "#A88BFF",
  "--term-ok": "#A88BFF",
  "--term-amber": "#C4B5FF",
  "--mono": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, Consolas, monospace",
  "--pad-x": "clamp(1.25rem, 5vw, 4rem)",
  "--section-y": "clamp(3.5rem, 8vw, 6rem)",
}

let dispose: (() => void) | undefined
onMounted(() => {
  useRootVars(ROOT_VARS)
  useTheme('Editorial', 50, 'Purple')
  dispose = initEffects()
})
onUnmounted(() => dispose && dispose())
</script>

<style scoped>
::selection{ background:var(--blue); color:var(--paper); }
h1,h2,h3,h4,h5{ font-family:var(--mono); font-weight:500; margin:0; letter-spacing:-0.01em; }
a{ color:inherit; text-decoration:none; }
img{ display:block; }
:focus-visible{ outline:2px solid var(--sig); outline-offset:3px; }
.regmark{ position:absolute; width:12px; height:12px; pointer-events:none; }
.regmark::before,.regmark::after{ content:""; position:absolute; background:var(--hairline-strong); }
.regmark::before{ left:0; top:5px; width:12px; height:1px; }
.regmark::after{ left:5px; top:0; width:1px; height:12px; }
.book{ text-decoration:none; font-size:.82rem; font-weight:500; border:1px solid var(--ink); padding:.45rem .85rem; color:var(--ink); transition:background .25s ease,color .25s ease; white-space:nowrap; }
.book:hover{ background:var(--ink); color:var(--paper); }
.crumb{ position:relative; z-index:1; background:var(--paper); border-bottom:1px solid var(--hairline); }
.crumb__in{ display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:.5rem .8rem; padding-block:.7rem; }
.crumb__path{ font-size:.72rem; letter-spacing:.02em; color:var(--ink-2); }
.crumb__path .cur{ color:var(--blue-deep); }
.crumb__path .sep{ color:var(--hairline-strong); padding-inline:.35rem; }
.crumb__sub{ font-size:.68rem; letter-spacing:.03em; color:var(--ink-2); }
.hero{ position:relative; overflow:hidden; background:var(--term-bg); color:#EAF0FF; border-bottom:1px solid #23272E; }
.hero__mesh{ position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; }
.hero__in{ position:relative; z-index:1; max-width:1180px; margin-inline:auto; padding-inline:var(--pad-x);
  padding-top:clamp(3rem,6vw,5.25rem); padding-bottom:clamp(3.5rem,7vw,6rem);
  display:grid; grid-template-columns:minmax(0,1fr) minmax(0,300px); gap:clamp(1.5rem,5vw,4rem); align-items:center; }
.hero__main{ min-width:0; }
.hero .kicker{ font-size:.76rem; color:var(--term-cyan); letter-spacing:.06em; display:inline-flex; align-items:center; gap:.55rem; margin-bottom:1.15rem; }
.caret{ display:inline-block; width:7px; height:1.05em; background:var(--term-cyan); vertical-align:-2px; }
.hexrow{ font-size:.58rem; letter-spacing:.18em; color:var(--blue); overflow:hidden; white-space:nowrap; max-width:100%; margin-bottom:.9rem; pointer-events:none; user-select:none; }
.hero h1{ font-size:clamp(2.1rem,1.1rem + 3.4vw,3.5rem); line-height:1.08; letter-spacing:-0.02em; font-weight:500; color:#EAF0FF; max-width:18ch; }
.hero h1 .em{ color:var(--blue); }
.hero__glitch{ position:relative; display:inline-block; }
.slogan-line{ font-size:.8rem; color:var(--term-cyan); letter-spacing:.05em; margin-top:.9rem; }
.hero__lead{ margin-top:1.3rem; max-width:54ch; font-size:1rem; line-height:1.7; color:rgba(234,240,255,0.72); }
.hero__lead strong{ color:#EAF0FF; font-weight:500; }
.hero__actions{ margin-top:2rem; display:flex; gap:1.6rem; row-gap:1rem; flex-wrap:wrap; align-items:center; }
.h-btn{ font-family:var(--mono); font-size:.82rem; font-weight:500; letter-spacing:.02em; cursor:pointer;
  display:inline-flex; align-items:center; gap:.5rem; border:1px solid var(--blue); background:var(--blue); color:#fff; padding:.7rem 1.1rem; }
.h-btn--ghost{ background:transparent; color:#EAF0FF; border-color:rgba(255,255,255,0.28); }
.h-btn .arrow{ display:inline-block; }
.hero__meta{ margin-top:1.6rem; font-size:.68rem; letter-spacing:.04em; color:var(--term-cyan); opacity:.85; }
.seal-wrap{ display:flex; align-items:center; justify-content:center; position:relative; }
.seal{ width:100%; max-width:240px; height:auto; display:block; overflow:visible; }
.hud-tl,.hud-tr,.hud-bl,.hud-br{ position:absolute; width:14px; height:14px; pointer-events:none; opacity:.32; }
.hud-tl{ top:0; left:0; border-top:1.5px solid var(--sig); border-left:1.5px solid var(--sig); }
.hud-tr{ top:0; right:0; border-top:1.5px solid var(--sig); border-right:1.5px solid var(--sig); }
.hud-bl{ bottom:0; left:0; border-bottom:1.5px solid var(--sig); border-left:1.5px solid var(--sig); }
.hud-br{ bottom:0; right:0; border-bottom:1.5px solid var(--sig); border-right:1.5px solid var(--sig); }
@media (max-width:860px) {
.hero__in{ grid-template-columns:minmax(0,1fr); gap:2.4rem; }
.seal-wrap{ max-width:240px; }
}
.strip{ border-top:1px solid var(--ink); border-bottom:1px solid var(--hairline); overflow:hidden; position:relative; }
.strip__grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,var(--blue) 1px,transparent 1px); background-size:28px 28px; opacity:.045; }
.cyberline{ height:1px; width:100%; position:relative; overflow:hidden; }
.cyberline__base{ position:absolute; inset:0; background:linear-gradient(90deg,transparent,var(--sig) 30%,var(--sig) 70%,transparent); opacity:.14; }
.strip__in{ padding-block:clamp(1.5rem,3vw,2.1rem); display:grid; grid-template-columns:auto 1fr; gap:1.5rem; align-items:center; position:relative; z-index:1; }
.strip__k{ font-size:.72rem; color:var(--blue-deep); letter-spacing:.04em; white-space:nowrap; }
.strip__v{ font-size:clamp(1rem,.85rem + .9vw,1.35rem); line-height:1.5; max-width:62ch; font-weight:400; }
@media (max-width:680px) {
.strip__in{ grid-template-columns:1fr; gap:.6rem; }
}
.section{ padding-block:var(--section-y); }
.section--line{ border-top:1px solid var(--hairline); }
.sec-head{ display:flex; align-items:baseline; gap:1rem; margin-bottom:2.2rem; flex-wrap:wrap; }
.sec-head .mark{ font-size:.78rem; color:var(--ink-2); letter-spacing:.04em; }
.sec-head h2{ font-size:clamp(1.45rem,1.1rem + 1.5vw,2.1rem); letter-spacing:-0.02em; }
.sec-head p{ color:var(--ink-2); font-size:.95rem; width:100%; max-width:64ch; }
.coord{ font-size:.66rem; letter-spacing:.02em; color:var(--ink-2); opacity:.72; margin-left:auto; align-self:center; white-space:nowrap; }
@media (max-width:680px) {
.coord{ display:none; }
}
.why-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:0; border-top:1px solid var(--ink); }
.why{ padding:1.7rem clamp(1.1rem,2vw,1.6rem) 1.4rem; border-left:1px solid var(--hairline); }
.why:first-child{ border-left:none; }
.why .wn{ font-size:.72rem; color:var(--ink-2); }
.why .ic{ width:38px; height:38px; border:1px solid var(--hairline-strong); display:flex; align-items:center; justify-content:center; color:var(--blue); margin-block:.9rem; }
.why h3{ font-size:1.1rem; letter-spacing:-0.01em; }
.why p{ margin-top:.6rem; color:var(--ink-2); font-size:.9rem; }
.why{ position:relative; overflow:hidden; transition:background .3s ease, box-shadow .35s ease; }
.why::after{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0; background:radial-gradient(circle at 50% 0%, var(--blue-tint), transparent 72%); opacity:0; transition:opacity .35s ease; }
.why:hover{ background:rgba(127,89,245,0.06); box-shadow:inset 0 0 0 1px rgba(127,89,245,.32), 0 16px 44px -28px rgba(127,89,245,.32); }
.why:hover::after{ opacity:1; }
.why__scan{ position:absolute; left:0; right:0; top:0; height:38%; pointer-events:none; z-index:0; opacity:0; background:linear-gradient(180deg, transparent, rgba(127,89,245,0.18), transparent); }
.why .wn,.why .ic,.why h3,.why p{ position:relative; z-index:1; }
@media (max-width:760px) {
.why-grid{ grid-template-columns:1fr; }
.why{ border-left:none; padding-left:0; border-top:1px solid var(--hairline); padding-top:1.3rem; }
.why:first-child{ border-top:none; }
}
.tl{ position:relative; background:var(--term-bg); border:1px solid #23272E; padding:clamp(1.9rem,4vw,2.6rem) clamp(1.2rem,3vw,2.4rem) clamp(1.7rem,3vw,2.2rem); overflow:hidden; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); }
.tl__grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(127,89,245,.07) 1px,transparent 1px); background-size:32px 32px; }
.tl__head{ font-size:.7rem; color:var(--term-dim); letter-spacing:.08em; display:flex; align-items:center; gap:.5rem; padding-bottom:1.4rem; border-bottom:1px solid #23272E; margin-bottom:2rem; position:relative; z-index:1; }
.blip{ display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--term-ok); }
.tl__track{ position:relative; z-index:1; }
.tl__rail{ position:absolute; top:23px; left:0; right:0; height:2px; background:rgba(168,139,255,.16); z-index:0; }
.tl__rail-fill{ position:absolute; inset:0; transform-origin:left center; background:linear-gradient(90deg,var(--blue),var(--term-cyan)); }
.tl__pulse{ position:absolute; top:-3px; left:0; width:16px; height:8px; pointer-events:none; background:linear-gradient(90deg,transparent,var(--term-cyan),transparent); }
.tl__steps{ list-style:none; display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(1.1rem,3vw,2.2rem); position:relative; z-index:1; }
.tl__step{ display:flex; flex-direction:column; align-items:center; text-align:center; }
.tl__node{ width:46px; height:46px; border-radius:50%; border:1px solid rgba(168,139,255,.45); background:var(--term-bg-2); color:var(--term-cyan); display:flex; align-items:center; justify-content:center; position:relative; z-index:2; box-shadow:0 0 0 5px var(--term-bg); }
.tl__node-num{ font-size:.92rem; font-weight:600; letter-spacing:.02em; }
.tl__card{ margin-top:1.2rem; }
.tl__step-k{ font-size:.66rem; color:var(--term-dim); letter-spacing:.08em; text-transform:uppercase; }
.tl__title{ font-size:clamp(1.05rem,.9rem + .7vw,1.4rem); color:var(--term-fg); letter-spacing:-0.01em; font-weight:500; margin-top:.35rem; }
.tl__sub{ font-size:.78rem; line-height:1.7; color:var(--term-dim); margin-top:.55rem; max-width:34ch; margin-inline:auto; }
.tl__tag{ display:inline-flex; align-items:center; gap:.4rem; font-size:.64rem; color:var(--term-cyan); letter-spacing:.06em; margin-top:.8rem; }
.tl__tag-dot{ width:5px; height:5px; border-radius:50%; background:currentColor; flex-shrink:0; }
.tl__foot{ margin-top:2rem; padding-top:1.4rem; border-top:1px solid #23272E; position:relative; z-index:1; }
.tl__foot a{ font-size:.8rem; color:var(--term-cyan); letter-spacing:.02em; display:inline-flex; gap:.4rem; }
.tl__foot a:hover{ color:var(--term-fg); }
@media (max-width:680px) {
.tl__steps{ grid-template-columns:1fr; gap:1.7rem; }
.tl__step{ flex-direction:row; align-items:flex-start; text-align:left; gap:1.1rem; }
.tl__card{ margin-top:.2rem; }
.tl__sub{ max-width:46ch; margin-inline:0; }
.tl__rail{ top:23px; bottom:23px; left:22px; right:auto; width:2px; height:auto; }
.tl__rail-fill{ transform-origin:center top; background:linear-gradient(180deg,var(--blue),var(--term-cyan)); }
.tl__pulse{ left:-3px; top:0; width:8px; height:16px; background:linear-gradient(180deg,transparent,var(--term-cyan),transparent); }
}
.cov-grid{ border-top:1px solid var(--ink); }
.cov{ display:grid; grid-template-columns:minmax(0,38%) minmax(0,1fr); gap:clamp(1rem,3vw,2.6rem); padding-block:1.9rem; border-top:1px solid var(--hairline); position:relative; overflow:hidden; }
.cov:first-child{ border-top:none; }
.cov__bar{ position:absolute; left:0; top:-1px; width:42px; height:3px; z-index:1; }
.cov--b{ color:var(--blue); }
.cov--g{ color:var(--green); }
.cov--o{ color:var(--ochre); }
.cov--b .cov__bar{ background:var(--blue); }
.cov--g .cov__bar{ background:var(--green); }
.cov--o .cov__bar{ background:var(--ochre); }
.cov__pno{ font-size:.74rem; letter-spacing:.04em; }
.cov--b .cov__pno{ color:var(--blue-deep); }
.cov--g .cov__pno{ color:var(--green-deep); }
.cov--o .cov__pno{ color:var(--ochre-deep); }
.cov h4{ font-size:clamp(1.15rem,1rem + .8vw,1.5rem); letter-spacing:-0.015em; margin-top:.5rem; color:var(--ink); }
.cov__list{ align-self:center; }
.cov__list .row{ display:flex; align-items:baseline; gap:.7rem; padding:.6rem 0; border-top:1px solid var(--hairline); font-size:.9rem; color:var(--ink-2); }
.cov__list .row:first-child{ border-top:none; }
.cov__list .row .l{ font-size:.72rem; width:1.4rem; flex-shrink:0; }
.cov--b .cov__list .row .l{ color:var(--blue); }
.cov--g .cov__list .row .l{ color:var(--green); }
.cov--o .cov__list .row .l{ color:var(--ochre); }
@media (max-width:760px) {
.cov{ grid-template-columns:1fr; gap:1.1rem; }
}
.callout{ margin-top:2.4rem; display:grid; grid-template-columns:auto 1fr; gap:1.2rem; align-items:flex-start; border:1px solid rgba(127,89,245,0.3); background:linear-gradient(100deg,rgba(127,89,245,0.08),rgba(127,89,245,0.015)); padding:1.5rem 1.6rem; }
.callout .ci{ width:42px; height:42px; background:var(--blue); color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.callout h3{ font-size:1.1rem; }
.callout p{ margin-top:.4rem; color:var(--ink-2); font-size:.9rem; max-width:74ch; }
.founder{ display:grid; grid-template-columns:auto minmax(0,1fr); gap:clamp(1.5rem,4vw,2.8rem); align-items:start; }
.avatar{ width:clamp(180px,34vw,300px); aspect-ratio:1/1; background:var(--term-bg); color:var(--term-cyan); display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.12); overflow:hidden; }
.avatar img{ width:100%; height:100%; object-fit:cover; object-position:center top; display:block; }
.avatar svg{ width:42%; height:42%; opacity:.6; }
@media (max-width:600px) {
.founder{ grid-template-columns:1fr; }
}
.founder__role{ font-size:.8rem; color:var(--ink-2); margin-top:.5rem; }
.founder__eye{ font-size:.72rem; color:var(--blue-deep); letter-spacing:.04em; }
.founder__name{ font-size:clamp(1.6rem,1.3rem + 1.3vw,2.2rem); letter-spacing:-0.02em; margin-top:.5rem; }
.founder__bio{ margin-top:1.2rem; max-width:60ch; color:var(--ink-2); font-size:.98rem; }
.founder__bio strong{ color:var(--ink); font-weight:500; }
.quotes{ display:grid; grid-template-columns:repeat(3,1fr); gap:0; border-top:1px solid var(--ink); }
.quote{ padding:1.7rem clamp(1.1rem,2vw,1.5rem); border-left:1px solid var(--hairline); }
.quote:first-child{ border-left:none; padding-left:0; }
.quote .qm{ font-size:2.4rem; line-height:.5; color:var(--blue); height:18px; }
.quote p{ font-size:.92rem; line-height:1.65; color:var(--ink); margin:.5rem 0 1rem; }
.quote .by{ font-size:.74rem; color:var(--ink-2); }
@media (max-width:760px) {
.quotes{ grid-template-columns:1fr; }
.quote{ border-left:none; padding-left:0; border-top:1px solid var(--hairline); }
.quote:first-child{ border-top:none; }
}
.inc-list{ max-width:760px; }
.inc{ display:flex; gap:.8rem; align-items:baseline; padding:.7rem 0; border-top:1px solid var(--hairline); font-size:.98rem; color:var(--ink); }
.inc:first-child{ border-top:none; }
.inc .ck{ color:var(--blue); flex-shrink:0; }
.priceband{ display:flex; align-items:center; justify-content:space-between; gap:1.4rem; flex-wrap:wrap; border:1px solid rgba(127,89,245,0.3); background:linear-gradient(100deg,rgba(127,89,245,0.08),rgba(127,89,245,0.015)); padding:1.4rem 1.6rem; margin-top:2rem; max-width:820px; }
.priceband .t{ font-size:.92rem; color:var(--ink-2); max-width:52ch; }
.priceband .t b{ color:var(--ink); font-weight:500; }
.btn{ font-size:.82rem; font-weight:500; border:1px solid var(--ink); background:var(--ink); color:var(--paper); padding:.6rem 1.2rem; cursor:pointer; font-family:var(--mono); }
.btn--out{ background:transparent; color:var(--ink); }
.faq{ max-width:880px; border-top:1px solid var(--ink); }
.faq__item{ border-bottom:1px solid var(--hairline); }
.faq__q{ width:100%; text-align:left; background:none; border:none; cursor:pointer; font-family:var(--mono); color:var(--ink); font-size:.98rem; font-weight:500; padding:1.05rem 0; display:flex; justify-content:space-between; gap:1rem; align-items:center; letter-spacing:-0.01em; }
.faq__q .pl{ color:var(--blue); font-weight:400; font-size:1.2rem; line-height:1; flex-shrink:0; }
.faq__a{ overflow:hidden; }
.faq__a p{ color:var(--ink-2); font-size:.92rem; line-height:1.65; padding:0 0 1.1rem; max-width:74ch; }
.formwrap{ position:relative; background:var(--term-bg); color:var(--term-fg); border:1px solid #23272E; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); overflow:hidden; }
.formwrap__grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(127,89,245,.06) 1px,transparent 1px); background-size:30px 30px; }
.formgrid{ position:relative; z-index:1; display:grid; grid-template-columns:1fr 1fr; gap:clamp(1.4rem,4vw,2.6rem); padding:clamp(1.6rem,4vw,2.4rem); }
.formgrid .eye{ font-size:.72rem; color:var(--term-cyan); letter-spacing:.04em; }
.formgrid h2{ color:#fff; font-size:1.5rem; margin-top:.5rem; letter-spacing:-0.02em; }
.formgrid .fl{ font-size:.9rem; color:rgba(234,240,255,0.62); margin-top:.8rem; line-height:1.6; max-width:42ch; }
.field{ margin-bottom:.8rem; }
.field label{ display:block; font-size:.66rem; letter-spacing:.08em; text-transform:uppercase; color:rgba(234,240,255,0.6); margin-bottom:.4rem; }
.field input{ width:100%; background:rgba(255,255,255,0.05); border:1px solid #2a2e3a; color:#fff; font-size:.85rem; padding:.65rem .75rem; font-family:var(--mono); }
.field input:focus{ outline:none; border-color:var(--term-cyan); }
.choice{ display:flex; gap:.5rem; margin:.4rem 0 1.1rem; flex-wrap:wrap; }
.chip{ font-size:.72rem; border:1px solid #2a2e3a; padding:.5rem .8rem; color:var(--term-fg); cursor:pointer; user-select:none; }
.chip[data-on="true"]{ background:var(--blue); color:#fff; border-color:var(--blue); }
.formgrid .btn{ width:100%; border-color:var(--term-cyan); background:var(--term-cyan); color:var(--term-bg); }
@media (max-width:720px) {
.formgrid{ grid-template-columns:1fr; }
}
.cross{ display:grid; grid-template-columns:1fr 1fr; gap:0; border-top:1px solid var(--ink); }
.xc{ display:flex; gap:1rem; align-items:center; padding:1.4rem clamp(1.1rem,2vw,1.5rem); border-left:1px solid var(--hairline); }
.xc:first-child{ border-left:none; padding-left:0; }
.xc .xi{ width:40px; height:40px; border:1px solid var(--hairline-strong); display:flex; align-items:center; justify-content:center; color:var(--blue); flex-shrink:0; }
.xc h4{ font-size:1rem; }
.xc p{ font-size:.84rem; color:var(--ink-2); margin-top:.2rem; }
.xc .arr{ margin-left:auto; color:var(--blue); }
@media (max-width:680px) {
.cross{ grid-template-columns:1fr; }
.xc{ border-left:none; padding-left:0; border-top:1px solid var(--hairline); }
.xc:first-child{ border-top:none; }
}
</style>

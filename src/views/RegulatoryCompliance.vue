<template>
<main id="main">
<a id="top"></a>

<div class="htflow__section-wrapper">
  <section class="mica" data-ht="mica" aria-label="Regulatory Compliance">

    <!-- hero -->
    <header class="mica__hero" data-ht="mica__hero">
      <canvas class="mica__mesh" data-ht="mica__mesh" data-ht-mesh="" aria-hidden="true"></canvas>
      <span class="mica__regmark mica__regmark--tl" data-ht="mica__regmark" aria-hidden="true"></span>
      <span class="mica__regmark mica__regmark--tr" data-ht="mica__regmark" aria-hidden="true"></span>
      <div class="mica__hero-in" data-ht="mica__hero-in">
        <div class="mica__hero-main" data-ht="mica__hero-main">
          <p class="mica__kicker" data-ht="mica__kicker">{{ t.hero.kicker }} <span class="mica__caret" data-ht="mica__caret" data-ht-blink="" aria-hidden="true"></span></p>
          <div class="mica__hexrow" data-ht="mica__hexrow" data-ht-hexrow="" aria-hidden="true">0x7F59F5  0xD2DDD7  434F4D50  4C49414E 4345  0x6444CC  4D694341  0x131220  5053 4432  4D694649 44 4949  0x7F59F5  414D4C</div>
          <h1 class="mica__h1" data-ht="mica__h1"><span class="mica__h1-prefix" data-ht="mica__h1-prefix" data-ht-glitch="" :data-ht-glitch-text="t.hero.h1Prefix">{{ t.hero.h1Prefix }}</span> <span class="mica__h1-em" data-ht="mica__h1-em">{{ t.hero.h1Em }}</span></h1>
          <p class="mica__lead" data-ht="mica__lead">{{ t.hero.lead }}</p>
          <div class="mica__actions" data-ht="mica__actions">
            <a class="mica__btn" data-ht="mica__btn" href="#mica-form">{{ t.hero.btnPrimary }} <span class="mica__btn-arrow" data-ht="mica__btn-arrow" aria-hidden="true">→</span></a>
            <a class="mica__btn mica__btn--ghost" data-ht="mica__btn" href="#mica-how">{{ t.hero.btnGhost }}</a>
          </div>
          <p class="mica__meta" data-ht="mica__meta">{{ t.hero.meta }}</p>
        </div>
        <div class="mica__seal-wrap" data-ht="mica__seal-wrap">
          <svg class="mica__seal" data-ht="mica__seal" data-ht-seal="" viewBox="0 0 240 240" fill="none" role="img" aria-label="Compliance seal">
            <defs><path id="micaRing" d="M120,120 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0"></path></defs>
            <g data-ht-seal-spin="">
              <circle cx="120" cy="120" r="108" stroke="#7F59F5" stroke-width="1.5" opacity="0.85"></circle>
              <circle cx="120" cy="120" r="100" stroke="#7F59F5" stroke-width="0.7" opacity="0.5"></circle>
              <text font-family="'IBM Plex Mono', monospace" font-size="8.6" font-weight="500" letter-spacing="3" fill="#A88BFF"><textPath href="#micaRing" startOffset="2%">· PSD2 · MiFID II · AML · MiCA · COMPLIANCE </textPath></text>
            </g>
            <g stroke="#7F59F5" stroke-width="1.4" opacity="0.7">
              <line x1="120" y1="14" x2="120" y2="24"></line><line x1="120" y1="216" x2="120" y2="226"></line>
              <line x1="14" y1="120" x2="24" y2="120"></line><line x1="216" y1="120" x2="226" y2="120"></line>
            </g>
            <circle cx="120" cy="120" r="62" stroke="#6444CC" stroke-width="1.2" opacity="0.85"></circle>
            <path data-ht-seal-check="" d="M104,120 l11,12 l22,-26" stroke="#7F59F5" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
            <text x="120" y="158" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="12" font-weight="600" letter-spacing="1.5" fill="#EAF0FF">COMPLIANT</text>
          </svg>
        </div>
      </div>
    </header>

    <!-- strip -->
    <div class="mica__strip" data-ht="mica__strip">
      <div class="mica__strip-grid" data-ht="mica__strip-grid" aria-hidden="true"></div>
      <div class="mica__strip-in" data-ht="mica__strip-in">
        <span class="mica__strip-k" data-ht="mica__strip-k">{{ t.strip.k }}</span>
        <p class="mica__strip-v" data-ht="mica__strip-v">{{ t.strip.v }}</p>
      </div>
    </div>

    <!-- why it matters -->
    <div class="mica__section mica__wrap" data-ht="mica__section">
      <div class="mica__sec-head" data-ht="mica__sec-head">
        <span class="mica__eyebrow" data-ht="mica__eyebrow">{{ t.why.eyebrow }}</span>
        <h2 class="mica__h2" data-ht="mica__h2">{{ t.why.h2 }}</h2>
        <span class="mica__coord" data-ht="mica__coord" aria-hidden="true">[ 46.05°N · 14.51°E ]</span>
      </div>
      <div class="mica__why-grid" data-ht="mica__why-grid">
        <div class="mica__why mica__why--first" data-ht="mica__why" data-ht-reveal="">
          <div class="mica__why-ic" data-ht="mica__why-ic" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"></path></svg></div>
          <div class="mica__why-n" data-ht="mica__why-n">{{ t.why.items[0].n }}</div>
          <h3 data-ht="mica__why-h3">{{ t.why.items[0].h3 }}</h3>
          <p data-ht="mica__why-p">{{ t.why.items[0].p }}</p>
        </div>
        <div class="mica__why" data-ht="mica__why" data-ht-reveal="">
          <div class="mica__why-ic" data-ht="mica__why-ic" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
          <div class="mica__why-n" data-ht="mica__why-n">{{ t.why.items[1].n }}</div>
          <h3 data-ht="mica__why-h3">{{ t.why.items[1].h3 }}</h3>
          <p data-ht="mica__why-p">{{ t.why.items[1].p }}</p>
        </div>
        <div class="mica__why" data-ht="mica__why" data-ht-reveal="">
          <div class="mica__why-ic" data-ht="mica__why-ic" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="9"></circle></svg></div>
          <div class="mica__why-n" data-ht="mica__why-n">{{ t.why.items[2].n }}</div>
          <h3 data-ht="mica__why-h3">{{ t.why.items[2].h3 }}</h3>
          <p data-ht="mica__why-p">{{ t.why.items[2].p }}</p>
        </div>
      </div>
    </div>

    <!-- how it works -->
    <div class="mica__section mica__section--mist" data-ht="mica__section" id="mica-how">
      <div class="mica__wrap" data-ht="mica__wrap">
        <div class="mica__sec-head" data-ht="mica__sec-head">
          <span class="mica__eyebrow" data-ht="mica__eyebrow">{{ t.how.eyebrow }}</span>
          <h2 class="mica__h2" data-ht="mica__h2">{{ t.how.h2 }}</h2>
        </div>
        <div class="mica__steps" data-ht="mica__steps">
          <div class="mica__step mica__step--first" data-ht="mica__step" data-ht-reveal="">
            <div class="mica__step-num" data-ht="mica__step-num">{{ t.how.steps[0].num }}</div>
            <h3 data-ht="mica__step-h3">{{ t.how.steps[0].h3 }}</h3>
            <p data-ht="mica__step-p">{{ t.how.steps[0].p }}</p>
          </div>
          <div class="mica__step" data-ht="mica__step" data-ht-reveal="">
            <div class="mica__step-num" data-ht="mica__step-num">{{ t.how.steps[1].num }}</div>
            <h3 data-ht="mica__step-h3">{{ t.how.steps[1].h3 }}</h3>
            <p data-ht="mica__step-p">{{ t.how.steps[1].p }}</p>
          </div>
          <div class="mica__step" data-ht="mica__step" data-ht-reveal="">
            <div class="mica__step-num" data-ht="mica__step-num">{{ t.how.steps[2].num }}</div>
            <h3 data-ht="mica__step-h3">{{ t.how.steps[2].h3 }}</h3>
            <p data-ht="mica__step-p">{{ t.how.steps[2].p }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- what the service includes -->
    <div class="mica__section mica__wrap" data-ht="mica__section">
      <div class="mica__sec-head" data-ht="mica__sec-head">
        <span class="mica__eyebrow" data-ht="mica__eyebrow">{{ t.includes.eyebrow }}</span>
        <h2 class="mica__h2" data-ht="mica__h2">{{ t.includes.h2 }}</h2>
      </div>
      <div class="mica__cov-grid" data-ht="mica__cov-grid">
        <div class="mica__cov" v-for="(cv, i) in t.includes.cov" :key="i" data-ht="mica__cov" data-ht-reveal="">
          <h4 data-ht="mica__cov-h4"><span class="mica__cov-tick" data-ht="mica__cov-tick" aria-hidden="true">§</span>{{ cv.title }}</h4>
          <div v-for="(ln, j) in cv.lines" :key="j" class="mica__cov-line" :class="{ 'mica__cov-line--first': j === 0 }" data-ht="mica__cov-line"><span class="mica__cov-dot" data-ht="mica__cov-dot" aria-hidden="true">•</span>{{ ln }}</div>
        </div>
      </div>
      <div class="mica__trav" data-ht="mica__trav" data-ht-reveal="">
        <span class="mica__regmark mica__regmark--tl" data-ht="mica__regmark" aria-hidden="true"></span>
        <span class="mica__regmark mica__regmark--tr" data-ht="mica__regmark" aria-hidden="true"></span>
        <div class="mica__trav-ic" data-ht="mica__trav-ic" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3.5 9h17M3.5 15h17M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"></path></svg></div>
        <div class="mica__trav-body" data-ht="mica__trav-body">
          <h3 data-ht="mica__trav-h3">{{ t.includes.travH3 }}</h3>
          <p data-ht="mica__trav-p">{{ t.includes.travP }}</p>
        </div>
      </div>
    </div>

    <!-- expert -->
    <div class="mica__section mica__section--mist" data-ht="mica__section">
      <div class="mica__wrap" data-ht="mica__wrap">
        <div class="mica__expert" data-ht="mica__expert" data-ht-reveal="">
          <!-- Founder photo slot — replace the SVG with a square portrait, e.g. <img src="peter-merc.jpg" alt="Peter Merc, Ph.D."> (fills via object-fit:cover) -->
          <div class="founder__aside">
            <div class="mica__avatar" data-ht="mica__avatar" role="img" :aria-label="t.expert.name"><img src="/peter-merc.jpg" :alt="t.expert.name"></div>
            <a class="li-link" href="https://www.linkedin.com/in/petermerc/" target="_blank" rel="noopener noreferrer" :aria-label="t.expert.linkedinAria"><svg class="li-link__ic" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>LinkedIn</a>
          </div>
          <div class="mica__expert-body" data-ht="mica__expert-body">
            <span class="mica__eyebrow" data-ht="mica__eyebrow">{{ t.expert.eyebrow }}</span>
            <p class="mica__expert-name" data-ht="mica__expert-name">{{ t.expert.name }}</p>
            <p class="mica__expert-role" data-ht="mica__expert-role">{{ t.expert.role }}</p>
            <p class="mica__expert-bio" data-ht="mica__expert-bio">{{ t.expert.bio }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- faq -->
    <div class="mica__section mica__wrap" data-ht="mica__section">
      <div class="mica__sec-head" data-ht="mica__sec-head">
        <span class="mica__eyebrow" data-ht="mica__eyebrow">{{ t.faq.eyebrow }}</span>
        <h2 class="mica__h2" data-ht="mica__h2">{{ t.faq.h2 }}</h2>
      </div>
      <div class="mica__faq-grid" data-ht="mica__faq-grid">
        <div class="mica__faq" v-for="(f, i) in t.faq.items" :key="i" data-ht="mica__faq">
          <button class="mica__faq-q" data-ht="mica__faq-q" data-ht-accordion-toggle="" aria-expanded="false" type="button"><span data-ht="mica__faq-qt">{{ f.q }}</span><span class="mica__faq-pl" data-ht="mica__faq-pl" aria-hidden="true">+</span></button>
          <div class="mica__faq-a" data-ht="mica__faq-a" data-ht-accordion-panel="" data-state="closed" aria-hidden="true">{{ f.a }}</div>
        </div>
      </div>
    </div>

    <!-- quote band -->
    <div class="mica__section mica__section--mist" data-ht="mica__section">
      <div class="mica__wrap" data-ht="mica__wrap">
        <div class="mica__quote" data-ht="mica__quote" data-ht-reveal="">
          <span class="mica__regmark mica__regmark--tl" data-ht="mica__regmark" aria-hidden="true"></span>
          <span class="mica__regmark mica__regmark--tr" data-ht="mica__regmark" aria-hidden="true"></span>
          <p class="mica__quote-t" data-ht="mica__quote-t" v-html="t.quote.text"></p>
          <a class="mica__btn" data-ht="mica__btn" href="#mica-form">{{ t.quote.btn }} <span class="mica__btn-arrow" data-ht="mica__btn-arrow" aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>

    <!-- form -->
    <div class="mica__section mica__wrap" data-ht="mica__section" id="mica-form">
      <div class="mica__form-card" data-ht="mica__form-card" data-ht-reveal="">
        <span class="mica__regmark mica__regmark--tl" data-ht="mica__regmark" aria-hidden="true"></span>
        <span class="mica__regmark mica__regmark--tr" data-ht="mica__regmark" aria-hidden="true"></span>
        <div class="mica__form-intro" data-ht="mica__form-intro">
          <span class="mica__form-eyebrow" data-ht="mica__form-eyebrow">{{ t.form.eyebrow }}</span>
          <h2 class="mica__form-h" data-ht="mica__form-h">{{ t.form.h }}</h2>
          <p class="mica__form-lead" data-ht="mica__form-lead">{{ t.form.lead }}</p>
          <p class="mica__form-contact" data-ht="mica__form-contact">{{ t.form.contactPrefix }}<span class="js-mail" data-u="info" data-d="lemur.legal">info [at] lemur.legal</span></p>
        </div>
        <form class="mica__form-fields" data-ht="mica__form-fields" name="mica-inquiry" id="mica-inquiry" method="post" data-ht-form="">
          <div class="mica__field" data-ht="mica__field">
            <label class="mica__label" data-ht="mica__label" for="mica-name">{{ t.form.nameLabel }}</label>
            <input class="mica__input" data-ht="mica__input" type="text" id="mica-name" name="name">
          </div>
          <div class="mica__field" data-ht="mica__field">
            <label class="mica__label" data-ht="mica__label" for="mica-email">{{ t.form.emailLabel }}</label>
            <input class="mica__input" data-ht="mica__input" type="email" id="mica-email" name="email">
          </div>
          <div class="mica__field" data-ht="mica__field">
            <label class="mica__label" data-ht="mica__label" for="mica-company">{{ t.form.companyLabel }}</label>
            <input class="mica__input" data-ht="mica__input" type="text" id="mica-company" name="company">
          </div>
          <div class="mica__field" data-ht="mica__field">
            <label class="mica__label" data-ht="mica__label" for="mica-need">{{ t.form.needLabel }}</label>
            <input class="mica__input" data-ht="mica__input" type="text" id="mica-need" name="need">
          </div>
          <label class="mica__label" data-ht="mica__label">{{ t.form.choiceLabel }}</label>
          <div class="mica__choice" data-ht="mica__choice">
            <button class="mica__chip" data-ht="mica__chip" data-ht-chip="" data-state="on" type="button">{{ t.form.chips[0] }}</button>
            <button class="mica__chip" data-ht="mica__chip" data-ht-chip="" data-state="off" type="button">{{ t.form.chips[1] }}</button>
            <button class="mica__chip" data-ht="mica__chip" data-ht-chip="" data-state="off" type="button">{{ t.form.chips[2] }}</button>
          </div>
          <button class="mica__btn mica__btn--full" data-ht="mica__btn" type="submit" :data-wait="t.form.submitWait">{{ t.form.submit }}</button>
        </form>
      </div>
    </div>

    <!-- cross links -->
    <div class="mica__section mica__section--mist" data-ht="mica__section">
      <div class="mica__wrap" data-ht="mica__wrap">
        <div class="mica__sec-head" data-ht="mica__sec-head">
          <span class="mica__eyebrow" data-ht="mica__eyebrow">{{ t.cross.eyebrow }}</span>
        </div>
        <div class="mica__cross" data-ht="mica__cross">
          <a class="mica__xc mica__xc--first" data-ht="mica__xc" data-ht-cross="" :href="lp('/crypto-legal-opinion')">
            <div class="mica__xi" data-ht="mica__xi" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"></path><path d="M9 12l2 2 4-4"></path></svg></div>
            <div class="mica__xc-body" data-ht="mica__xc-body">
              <h4 data-ht="mica__xc-h4">{{ t.cross.items[0].h4 }}</h4>
              <p data-ht="mica__xc-p">{{ t.cross.items[0].p }}</p>
            </div>
            <span class="mica__arr" data-ht="mica__arr" aria-hidden="true">→</span>
          </a>
          <a class="mica__xc" data-ht="mica__xc" data-ht-cross="" :href="lp('/mica-white-paper')">
            <div class="mica__xi" data-ht="mica__xi" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5M9 13h6M9 17h6"></path></svg></div>
            <div class="mica__xc-body" data-ht="mica__xc-body">
              <h4 data-ht="mica__xc-h4">{{ t.cross.items[1].h4 }}</h4>
              <p data-ht="mica__xc-p">{{ t.cross.items[1].p }}</p>
            </div>
            <span class="mica__arr" data-ht="mica__arr" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { initEffects } from './RegulatoryCompliance.effects'
import { useTheme, useRootVars } from '@/composables/useTheme'
import { usePageContent } from '@/i18n/useContent'
import { useHead } from '@/i18n/useHead'
import { localePath } from '@/i18n/locale'
import content from '@/content/products/regulatoryCompliance'

const t = usePageContent(content)
useHead(content)
const lp = (p: string) => localePath(p)

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
  "--green": "#A88BFF",
  "--green-deep": "#7F59F5",
  "--ochre": "#6444CC",
  "--ochre-deep": "#4E33A8",
  "--sig": "#7F59F5",
  "--mono": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, Consolas, monospace",
  "--pad-x": "clamp(1.25rem, 5vw, 4rem)",
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
img, svg, canvas { display: block; }
input, button, textarea, select { font: inherit; color: inherit; }
.mica {
  position: relative;
  background-color: #D2DDD7;
  color: #1A1826;
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 1rem;
  line-height: 1.62;
  font-weight: 400;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
}
.mica__wrap {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1.25rem, 5vw, 4rem);
  padding-right: clamp(1.25rem, 5vw, 4rem);
}
.mica__section {
  padding-top: clamp(3.5rem, 8vw, 6rem);
  padding-bottom: clamp(3.5rem, 8vw, 6rem);
}
.mica__section--line {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #B4C0BA;
}
.mica__section--mist {
  background-color: #C6D4CE;
}
.mica__regmark {
  position: absolute;
  width: 18px;
  height: 18px;
  pointer-events: none;
  opacity: 0.5;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #A0AEA8;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: #A0AEA8;
  z-index: 2;
}
.mica__regmark--tr {
  transform: scaleX(-1);
}
.mica__crumbbar {
  position: relative;
  z-index: 1;
  background-color: #D2DDD7;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #B4C0BA;
}
.mica__crumbbar-in {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: clamp(1.25rem, 5vw, 4rem);
  padding-right: clamp(1.25rem, 5vw, 4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  row-gap: 0.5rem;
}
.mica__crumb {
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  color: #585672;
}
.mica__crumb-cur {
  color: #6444CC;
}
.mica__crumb-sep {
  color: #A0AEA8;
  padding-left: 0.35rem;
  padding-right: 0.35rem;
}
.mica__subbrand {
  font-size: 0.68rem;
  letter-spacing: 0.03em;
  color: #585672;
}
.mica__hero {
  position: relative;
  overflow: hidden;
  background-color: #131220;
  color: #EAF0FF;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #23272E;
}
.mica__mesh {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
}
.mica__hero-in {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1.25rem, 5vw, 4rem);
  padding-right: clamp(1.25rem, 5vw, 4rem);
  padding-top: clamp(3rem, 6vw, 5.25rem);
  padding-bottom: clamp(3.5rem, 7vw, 6rem);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 300px);
  grid-template-rows: 1fr;
  column-gap: clamp(1.5rem, 5vw, 4rem);
  row-gap: clamp(1.5rem, 5vw, 4rem);
  align-items: center;
}
.mica__kicker {
  font-size: 0.76rem;
  color: #A88BFF;
  letter-spacing: 0.06em;
  margin-top: 0;
  margin-bottom: 1.15rem;
  display: inline-flex;
  align-items: center;
  column-gap: 0.55rem;
  row-gap: 0.55rem;
}
.mica__caret {
  display: inline-block;
  width: 7px;
  height: 1.05em;
  background-color: #A88BFF;
  vertical-align: -2px;
}
.mica__hexrow {
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  color: #7F59F5;
  opacity: 0.3;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 0.9rem;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}
.mica__h1 {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: clamp(2.1rem, 1.1rem + 3.4vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  max-width: 18ch;
  margin-top: 0;
  margin-bottom: 0;
  color: #EAF0FF;
}
.mica__h1-em {
  color: #7F59F5;
}
.mica__lead {
  margin-top: 1.4rem;
  margin-bottom: 0;
  max-width: 54ch;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(234, 240, 255, 0.72);
}
.mica__lead b {
  color: #EAF0FF;
  font-weight: 500;
}
.mica__actions {
  margin-top: 2rem;
  display: flex;
  column-gap: 1.6rem;
  row-gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
.mica__btn {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  text-decoration-line: none;
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: #7F59F5;
  border-right-color: #7F59F5;
  border-bottom-color: #7F59F5;
  border-left-color: #7F59F5;
  background-color: #7F59F5;
  color: #FFFFFF;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: 1.1rem;
  padding-right: 1.1rem;
}
.mica__btn--ghost {
  background-color: transparent;
  color: #EAF0FF;
  border-top-color: rgba(255, 255, 255, 0.28);
  border-right-color: rgba(255, 255, 255, 0.28);
  border-bottom-color: rgba(255, 255, 255, 0.28);
  border-left-color: rgba(255, 255, 255, 0.28);
}
.mica__btn-arrow {
  display: inline-block;
}
.mica__meta {
  margin-top: 1.6rem;
  margin-bottom: 0;
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  color: #A88BFF;
  opacity: 0.85;
}
.mica__seal-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.mica__seal {
  width: 100%;
  max-width: 240px;
  height: auto;
  display: block;
  overflow: visible;
}
.mica__strip {
  position: relative;
  overflow: hidden;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #1A1826;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #B4C0BA;
  background-color: #D2DDD7;
}
.mica__strip-grid {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(circle, #7F59F5 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.05;
}
.mica__strip-in {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  padding-top: clamp(1.6rem, 3vw, 2.2rem);
  padding-bottom: clamp(1.6rem, 3vw, 2.2rem);
  padding-left: clamp(1.25rem, 5vw, 4rem);
  padding-right: clamp(1.25rem, 5vw, 4rem);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  column-gap: 1.5rem;
  row-gap: 0.7rem;
  align-items: center;
}
.mica__strip-k {
  font-size: 0.72rem;
  color: #6444CC;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
.mica__strip-v {
  font-size: clamp(1rem, 0.9rem + 0.7vw, 1.3rem);
  line-height: 1.5;
  max-width: 64ch;
  margin-top: 0;
  margin-bottom: 0;
}
.mica__sec-head {
  display: flex;
  align-items: baseline;
  column-gap: 1rem;
  row-gap: 0.4rem;
  margin-bottom: 2.2rem;
  flex-wrap: wrap;
}
.mica__mark {
  font-size: 0.78rem;
  color: #585672;
  letter-spacing: 0.04em;
}
.mica__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6444CC;
}
.mica__h2 {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: clamp(1.5rem, 1.2rem + 1.4vw, 2.2rem);
  letter-spacing: -0.015em;
  line-height: 1.18;
  margin-top: 0.4rem;
  margin-bottom: 0;
  width: 100%;
  max-width: 30ch;
}
.mica__coord {
  font-size: 0.66rem;
  letter-spacing: 0.02em;
  color: #585672;
  opacity: 0.72;
  margin-left: auto;
  align-self: center;
  white-space: nowrap;
}
.mica__why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  column-gap: 0;
  row-gap: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #1A1826;
}
.mica__why {
  padding-top: 1.8rem;
  padding-bottom: 1.4rem;
  padding-left: clamp(1.1rem, 2vw, 1.6rem);
  padding-right: clamp(1.1rem, 2vw, 1.6rem);
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: #B4C0BA;
}
.mica__why--first {
  border-left-width: 0;
  padding-left: 0;
}
.mica__why{ position:relative; overflow:hidden; transition:background .3s ease, box-shadow .35s ease; }
.mica__why::after{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0; background:radial-gradient(circle at 50% 0%, rgba(127,89,245,0.10), transparent 72%); opacity:0; transition:opacity .35s ease; }
.mica__why:hover{ background:rgba(127,89,245,0.06); box-shadow:inset 0 0 0 1px rgba(127,89,245,.32), 0 16px 44px -28px rgba(127,89,245,.32); }
.mica__why:hover::after{ opacity:1; }
.mica__why .why__scan{ position:absolute; left:0; right:0; top:0; height:38%; pointer-events:none; z-index:0; opacity:0; background:linear-gradient(180deg, transparent, rgba(127,89,245,0.18), transparent); }
.mica__why-ic, .mica__why-n, .mica__why h3, .mica__why p{ position:relative; z-index:1; }
.mica__why-ic {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7F59F5;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: #A0AEA8;
  border-right-color: #A0AEA8;
  border-bottom-color: #A0AEA8;
  border-left-color: #A0AEA8;
}
.mica__why-n {
  font-size: 0.74rem;
  color: #585672;
  margin-top: 0.9rem;
}
.mica__why h3 {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: 1.18rem;
  letter-spacing: -0.01em;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.mica__why p {
  margin-top: 0.7rem;
  margin-bottom: 0;
  color: #585672;
  font-size: 0.92rem;
  line-height: 1.6;
}
.mica__steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  column-gap: 0;
  row-gap: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #1A1826;
}
.mica__step {
  padding-top: 1.6rem;
  padding-bottom: 1.4rem;
  padding-left: clamp(1.1rem, 2vw, 1.5rem);
  padding-right: clamp(1.1rem, 2vw, 1.5rem);
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: #B4C0BA;
}
.mica__step--first {
  border-left-width: 0;
  padding-left: 0;
}
.mica__step-num {
  font-size: 0.82rem;
  color: #6444CC;
  letter-spacing: 0.04em;
}
.mica__step h3 {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: 1.12rem;
  letter-spacing: -0.01em;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.mica__step p {
  margin-top: 0.45rem;
  margin-bottom: 0;
  color: #585672;
  font-size: 0.92rem;
  line-height: 1.6;
}
.mica__cov-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  column-gap: 0;
  row-gap: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #1A1826;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: #B4C0BA;
}
.mica__cov {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: clamp(1rem, 2vw, 1.4rem);
  padding-right: clamp(1rem, 2vw, 1.4rem);
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #B4C0BA;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #B4C0BA;
}
.mica__cov h4 {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: 0.98rem;
  letter-spacing: -0.005em;
  margin-top: 0;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}
.mica__cov h4 .mica__cov-tick {
  color: #7F59F5;
}
.mica__cov-line {
  font-size: 0.84rem;
  line-height: 1.5;
  color: #585672;
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #B4C0BA;
  display: flex;
  column-gap: 0.5rem;
}
.mica__cov-line--first {
  border-top-width: 0;
}
.mica__cov-line .mica__cov-dot {
  color: #7F59F5;
}
.mica__trav {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  column-gap: 1.2rem;
  row-gap: 0.8rem;
  align-items: center;
  background-color: #131220;
  color: #EAF0FF;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: clamp(1.2rem, 3vw, 2rem);
  padding-right: clamp(1.2rem, 3vw, 2rem);
  position: relative;
  overflow: hidden;
}
.mica__trav-ic {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A88BFF;
}
.mica__trav h3 {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: 1.05rem;
  margin-top: 0;
  margin-bottom: 0.3rem;
}
.mica__trav p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.88rem;
  line-height: 1.6;
  color: rgba(234, 240, 255, 0.7);
  max-width: 70ch;
}
.mica__expert {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  column-gap: clamp(1.2rem, 4vw, 2.4rem);
  row-gap: 1.2rem;
  align-items: start;
}
.mica__avatar {
  width: clamp(180px,34vw,300px);
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #7F59F5;
  background-color: #D2DDD7;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: #7F59F5;
  border-right-color: #7F59F5;
  border-bottom-color: #7F59F5;
  border-left-color: #7F59F5;
}
.mica__expert-name {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: clamp(1.4rem, 1.1rem + 1vw, 1.9rem);
  letter-spacing: -0.015em;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.mica__expert-role {
  font-size: 0.82rem;
  color: #585672;
  margin-top: 0.4rem;
  margin-bottom: 0;
}
.mica__expert-bio {
  margin-top: 1.1rem;
  margin-bottom: 0;
  max-width: 62ch;
  color: #585672;
  font-size: 0.95rem;
  line-height: 1.7;
}
.mica__faq-grid {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #1A1826;
}
.mica__faq {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #B4C0BA;
}
.mica__faq-q {
  width: 100%;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 0.98rem;
  font-weight: 500;
  color: #1A1826;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
}
.mica__faq-pl {
  color: #7F59F5;
  font-size: 1.2rem;
  flex-shrink: 0;
  display: inline-block;
}
.mica__faq-a {
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 1.1rem;
  max-width: 70ch;
  color: #585672;
  font-size: 0.92rem;
  line-height: 1.65;
}
.mica__quote {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  column-gap: 1.5rem;
  row-gap: 1.2rem;
  align-items: center;
  background-color: #131220;
  color: #EAF0FF;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: clamp(1.3rem, 3vw, 2.2rem);
  padding-right: clamp(1.3rem, 3vw, 2.2rem);
  position: relative;
  overflow: hidden;
}
.mica__quote-t {
  font-size: clamp(1rem, 0.9rem + 0.7vw, 1.3rem);
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 0;
  max-width: 60ch;
}
.mica__quote-t b {
  color: #A88BFF;
  font-weight: 500;
}
.mica__form-card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  grid-template-rows: 1fr;
  column-gap: clamp(1.5rem, 4vw, 3rem);
  row-gap: 2rem;
  background-color: #131220;
  color: #EAF0FF;
  padding-top: clamp(1.8rem, 4vw, 2.8rem);
  padding-bottom: clamp(1.8rem, 4vw, 2.8rem);
  padding-left: clamp(1.3rem, 3vw, 2.4rem);
  padding-right: clamp(1.3rem, 3vw, 2.4rem);
  position: relative;
  overflow: hidden;
}
.mica__form-h {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: clamp(1.4rem, 1.1rem + 1vw, 2rem);
  letter-spacing: -0.015em;
  margin-top: 0.6rem;
  margin-bottom: 0;
}
.mica__form-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #A88BFF;
}
.mica__form-lead {
  margin-top: 0.9rem;
  margin-bottom: 0;
  font-size: 0.92rem;
  line-height: 1.65;
  color: rgba(234, 240, 255, 0.7);
  max-width: 44ch;
}
.mica__form-contact {
  margin-top: 0.9rem;
  margin-bottom: 0;
  font-size: 0.78rem;
  color: #A88BFF;
}
.mica__field {
  margin-bottom: 0.9rem;
}
.mica__label {
  display: block;
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(234, 240, 255, 0.66);
  margin-bottom: 0.4rem;
}
.mica__input {
  width: 100%;
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 0.9rem;
  color: #EAF0FF;
  background-color: rgba(255, 255, 255, 0.04);
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgba(255, 255, 255, 0.13);
  border-right-color: rgba(255, 255, 255, 0.13);
  border-bottom-color: rgba(255, 255, 255, 0.13);
  border-left-color: rgba(255, 255, 255, 0.13);
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}
.mica__choice {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  margin-bottom: 1.1rem;
}
.mica__chip {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-size: 0.74rem;
  cursor: pointer;
  color: rgba(234, 240, 255, 0.7);
  background-color: transparent;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgba(255, 255, 255, 0.18);
  border-right-color: rgba(255, 255, 255, 0.18);
  border-bottom-color: rgba(255, 255, 255, 0.18);
  border-left-color: rgba(255, 255, 255, 0.18);
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}
.mica__btn--full {
  width: 100%;
  justify-content: center;
}
.mica__cross {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  column-gap: 0;
  row-gap: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #1A1826;
}
.mica__xc {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  column-gap: 1rem;
  row-gap: 0.5rem;
  align-items: center;
  text-decoration-line: none;
  color: #1A1826;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: clamp(1.1rem, 2vw, 1.6rem);
  padding-right: clamp(1.1rem, 2vw, 1.6rem);
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: #B4C0BA;
}
.mica__xc--first {
  border-left-width: 0;
  padding-left: 0;
}
.mica__xi {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7F59F5;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: #A0AEA8;
  border-right-color: #A0AEA8;
  border-bottom-color: #A0AEA8;
  border-left-color: #A0AEA8;
}
.mica__xc h4 {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.3rem;
}
.mica__xc p {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #585672;
}
.mica__arr {
  color: #7F59F5;
  font-size: 1.1rem;
}
.mica__foot {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #1A1826;
  padding-top: 2.6rem;
  padding-bottom: 2.4rem;
}
.mica__foot-in {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 1.8rem;
  row-gap: 1.4rem;
  align-items: start;
}
.mica__foot-brand {
  font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.01em;
  margin-top: 0;
  margin-bottom: 0.7rem;
}
.mica__foot-sub {
  font-size: 0.8rem;
  line-height: 1.7;
  color: #585672;
  max-width: 44ch;
  margin-top: 0;
  margin-bottom: 0;
}
.mica__foot-links {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.2rem;
  row-gap: 0.5rem;
  align-items: flex-start;
}
.mica__foot-link {
  font-size: 0.8rem;
  color: #1A1826;
  text-decoration-line: none;
  cursor: pointer;
}
.mica__foot-base {
  margin-top: 2rem;
  padding-top: 1.2rem;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #B4C0BA;
  font-size: 0.72rem;
  color: #585672;
}
.mica__hero-main { min-width: 0; }
.mica__hexrow { max-width: 100%; overflow: hidden; }
@media (max-width: 991px) {
.mica__hero-in {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: 2.4rem;
    row-gap: 2.4rem;
  }
.mica__seal-wrap {
    justify-content: flex-start;
  }
.mica__cov-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 767px) {
.mica__why-grid,
  .mica__steps,
  .mica__cross {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
.mica__why,
  .mica__step {
    border-left-width: 0;
    padding-left: 0;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #B4C0BA;
    padding-top: 1.4rem;
  }
.mica__why--first,
  .mica__step--first {
    border-top-width: 0;
    padding-top: 0;
  }
.mica__xc {
    border-left-width: 0;
    padding-left: 0;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #B4C0BA;
  }
.mica__xc--first {
    border-top-width: 0;
  }
.mica__strip-in {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap: 0.6rem;
  }
.mica__form-card {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
.mica__quote {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
.mica__foot-in {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
}
@media (max-width: 479px) {
.mica__cov-grid {
    grid-template-columns: 1fr;
  }
.mica__actions {
    flex-direction: column;
    align-items: stretch;
  }
.mica__btn {
    justify-content: center;
  }
}
.book{ text-decoration:none; font-size:.82rem; font-weight:500; border:1px solid var(--ink); padding:.45rem .85rem; color:var(--ink); transition:background .25s ease,color .25s ease; white-space:nowrap; }
.book:hover{ background:var(--ink); color:var(--paper); }
.mica__avatar img{ width:100%; height:100%; object-fit:cover; object-position:center top; display:block; }
.mica__avatar svg{ width:42%; height:42%; opacity:.6; }
@media (max-width:600px) {
.mica__expert{ grid-template-columns:1fr; }
}

/* htflow embed CSS (data-state toggles): drives FAQ accordion + active chips */
[data-ht="mica__faq-a"][data-state="closed"] { display: none; }
[data-ht="mica__faq-a"][data-state="open"] { display: block; }
[data-ht="mica__chip"][data-state="on"] { color: #FFFFFF; background-color: #7F59F5; border-top-color: #7F59F5; border-right-color: #7F59F5; border-bottom-color: #7F59F5; border-left-color: #7F59F5; }
</style>

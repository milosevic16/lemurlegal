<template>
<main id="main"></main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { initEffects } from './RegulatoryCompliance.effects'
import { useTheme, useRootVars } from '@/composables/useTheme'

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
  document.title = "Regulatory Compliance \u2014 Lemur Legal"
  useRootVars(ROOT_VARS)
  useTheme('Editorial', 50, 'Baltic')
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
    order: -1;
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
</style>

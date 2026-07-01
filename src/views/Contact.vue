<template>
  <main id="main">
    <a id="top"></a>

    <!-- ════════ HERO ════════ -->
    <section class="hero container" aria-labelledby="hero-h">
      <canvas id="mesh" aria-hidden="true"></canvas>
      <span
        class="regmark"
        style="top: 1.2rem; left: 0.4rem"
        aria-hidden="true"
      ></span>
      <span
        class="regmark tr"
        style="top: 1.2rem; right: 0.4rem"
        aria-hidden="true"
      ></span>
      <div class="hero__in">
        <p class="kicker">
          {{ t.hero.kicker }}
          <span class="caret" data-anim="blink" aria-hidden="true"></span>
        </p>
        <div class="hexrow" aria-hidden="true" data-anim="hexrow">
          0x7F59F5 0xD2DDD7 4C454741 4C2E4C41 0x3D7A5E 0xC4823A 434F4E54
          41435420 0x131220 0x7F59F5 4C4A4C20
        </div>
        <h1 id="hero-h">
          {{ t.hero.h1Main }}
          <span class="b">{{ t.hero.h1Em }}</span>
        </h1>
        <p class="slogan-line">{{ t.hero.slogan }}</p>
        <p class="hero__lead" v-html="t.hero.lead"></p>
      </div>
    </section>

    <!-- ════════ §01 — SEND A BRIEF (form + console) ════════ -->
    <section class="section container" id="brief">
      <div class="cyberline" aria-hidden="true">
        <span data-anim="cpulse"></span>
      </div>
      <div data-anim="reveal">
        <div class="sec-meta">
          <span class="mark">§ 01</span
          ><span class="coord">[ 46.05°N · 14.51°E · INTAKE ]</span>
        </div>
        <div class="section-label">{{ t.form.label }}</div>
        <h2 class="section-title">{{ t.form.title }}</h2>
        <p class="section-subtitle">{{ t.form.subtitle }}</p>
      </div>

      <div class="contact-grid">
        <!-- form -->
        <form class="cform" data-form="brief" data-anim="reveal" novalidate>
          <span class="hud-tl" aria-hidden="true"></span
          ><span class="hud-tr" aria-hidden="true"></span>
          <span class="hud-bl" aria-hidden="true"></span
          ><span class="hud-br" aria-hidden="true"></span>
          <div class="field-row">
            <div class="field">
              <label for="f-name">{{ t.form.nameLabel }} <span class="req">*</span></label>
              <input
                id="f-name"
                name="name"
                type="text"
                autocomplete="name"
                required
              />
            </div>
            <div class="field">
              <label for="f-email">{{ t.form.emailLabel }} <span class="req">*</span></label>
              <input
                id="f-email"
                name="email"
                type="email"
                autocomplete="email"
                required
              />
            </div>
          </div>
          <div class="field">
            <label for="f-company"
              >{{ t.form.companyLabel }} <span style="opacity: 0.6">{{ t.form.companyOpt }}</span></label
            >
            <input
              id="f-company"
              name="company"
              type="text"
              autocomplete="organization"
            />
          </div>
          <div class="field">
            <label id="f-practice-label">{{ t.form.frontierLabel }}</label>
            <div class="cselect" data-cselect="">
              <button
                type="button"
                class="cselect__btn"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-labelledby="f-practice-label"
              >
                <span class="cselect__val">{{ t.form.options[0] }}</span>
                <span class="cselect__arr" aria-hidden="true">▾</span>
              </button>
              <ul
                class="cselect__list"
                role="listbox"
                aria-labelledby="f-practice-label"
              >
                <li
                  class="cselect__opt"
                  role="option"
                  aria-selected="true"
                  data-val="Crypto &amp; Fintech"
                >
                  {{ t.form.options[0] }}
                </li>
                <li
                  class="cselect__opt"
                  role="option"
                  aria-selected="false"
                  data-val="Startups &amp; Deep Tech"
                >
                  {{ t.form.options[1] }}
                </li>
                <li
                  class="cselect__opt"
                  role="option"
                  aria-selected="false"
                  data-val="Defence &amp; Dual-Use"
                >
                  {{ t.form.options[2] }}
                </li>
                <li
                  class="cselect__opt"
                  role="option"
                  aria-selected="false"
                  data-val="Not sure yet"
                >
                  {{ t.form.options[3] }}
                </li>
              </ul>
              <input
                type="hidden"
                name="practice"
                value="Crypto &amp; Fintech"
              />
            </div>
          </div>
          <div class="field">
            <label for="f-message">{{ t.form.briefLabel }} <span class="req">*</span></label>
            <textarea
              id="f-message"
              name="message"
              :placeholder="t.form.briefPlaceholder"
              required
            ></textarea>
          </div>
          <button class="submit" type="submit">
            {{ t.form.submit }} <span class="arrow" aria-hidden="true">→</span>
          </button>
          <p class="form-note">
            {{ t.form.note }}
            <a
              class="js-mail"
              data-u="info"
              data-d="lemur.legal"
              data-subject="Brief"
              href="#"
              >info [at] lemur.legal</a
            >.
          </p>
        </form>

        <!-- console: contact status -->
        <div
          class="console"
          data-anim="console"
          aria-label="Lemur Legal — contact status"
        >
          <span
            class="regmark"
            style="left: 10px; top: 10px"
            aria-hidden="true"
          ></span>
          <span
            class="regmark tr"
            style="right: 10px; top: 10px"
            aria-hidden="true"
          ></span>
          <div class="console__bar" aria-hidden="true">
            <span class="d r"></span><span class="d y"></span
            ><span class="d g"></span>
            <span class="console__title"
              >counsel@lemur:~<span class="right">v2026.1</span></span
            >
          </div>
          <div class="console__body" aria-hidden="true">
            <div class="cl">
              <span class="pr">$</span>
              <span class="cm">{{ t.console.cmd }}</span>
            </div>
            <div class="cl">
              <span class="mut">{{ t.console.emailLabel }}</span
              ><span class="em js-mail" data-u="info" data-d="lemur.legal"
                >info [at] lemur.legal</span
              ><span class="mut">{{ t.console.emailTail }}</span>
            </div>
            <div class="cl">
              <span class="mut">{{ t.console.seatLabel }}</span
              ><span class="ok">{{ t.console.seatVal }}</span
              ><span class="mut">{{ t.console.seatTail }}</span>
            </div>
            <div class="cl">
              <span class="mut">{{ t.console.hoursLabel }}</span
              ><span class="cm">{{ t.console.hoursVal }}</span>
            </div>
            <div class="cl">
              <span class="mut">{{ t.console.langLabel }}</span
              ><span class="em">{{ t.console.langVal }}</span>
            </div>
            <div class="cl">
              <span class="mut">{{ t.console.feeLabel }}</span><span class="ok">{{ t.console.feeVal }}</span
              ><span class="mut">{{ t.console.feeTail }}</span>
            </div>
            <div class="cl">
              <span class="mut">{{ t.console.respLabel }}</span
              ><span class="wn">{{ t.console.respVal }}</span>
            </div>
            <div class="cl">
              <span class="pr">$</span>
              <span class="cm">{{ t.console.awaiting }}</span
              ><span class="caret" data-anim="blink" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════ §03 — DIRECT LINES ════════ -->
    <section class="section container" id="lines">
      <div class="cyberline" aria-hidden="true">
        <span data-anim="cpulse"></span>
      </div>
      <div data-anim="reveal">
        <div class="sec-meta">
          <span class="mark">§ 02</span
          ><span class="coord">[ 46.05°N · 14.51°E · ROUTING ]</span>
        </div>
        <div class="section-label">{{ t.lines.label }}</div>
        <h2 class="section-title">{{ t.lines.title }}</h2>
        <p class="section-subtitle">{{ t.lines.subtitle }}</p>
      </div>

      <div class="lines">
        <a
          class="line line--b"
          data-anim="reveal"
          data-mailto=""
          data-u="info"
          data-d="lemur.legal"
          data-subject="Crypto &amp; Fintech"
          href="#"
        >
          <span class="line__k">{{ t.lines.items[0].k }}</span>
          <span class="line__name">{{ t.lines.items[0].name }}</span>
          <span class="line__desc">{{ t.lines.items[0].desc }}</span>
          <span class="line__go"
            ><span class="js-mail" data-u="info" data-d="lemur.legal"
              >info [at] lemur.legal</span
            >
            →</span
          >
        </a>
        <a
          class="line line--g"
          data-anim="reveal"
          data-mailto=""
          data-u="info"
          data-d="lemur.legal"
          data-subject="Startups &amp; Deep Tech"
          href="#"
        >
          <span class="line__k">{{ t.lines.items[1].k }}</span>
          <span class="line__name">{{ t.lines.items[1].name }}</span>
          <span class="line__desc">{{ t.lines.items[1].desc }}</span>
          <span class="line__go"
            ><span class="js-mail" data-u="info" data-d="lemur.legal"
              >info [at] lemur.legal</span
            >
            →</span
          >
        </a>
        <a
          class="line line--o"
          data-anim="reveal"
          data-mailto=""
          data-u="info"
          data-d="lemur.legal"
          data-subject="Defence &amp; Dual-Use"
          href="#"
        >
          <span class="line__k">{{ t.lines.items[2].k }}</span>
          <span class="line__name">{{ t.lines.items[2].name }}</span>
          <span class="line__desc">{{ t.lines.items[2].desc }}</span>
          <span class="line__go"
            ><span class="js-mail" data-u="info" data-d="lemur.legal"
              >info [at] lemur.legal</span
            >
            →</span
          >
        </a>
      </div>

      <div class="details" data-anim="reveal">
        <div class="detail">
          <h5>{{ t.details.emailH }}</h5>
          <p>
            <a class="js-mail" data-u="info" data-d="lemur.legal" href="#"
              >info [at] lemur.legal</a
            >
          </p>
        </div>
        <div class="detail">
          <h5>{{ t.details.officeH }}</h5>
          <p v-html="t.details.officeVal"></p>
        </div>
        <div class="detail">
          <h5>{{ t.details.hoursH }}</h5>
          <p v-html="t.details.hoursVal"></p>
        </div>
        <div class="detail">
          <h5>{{ t.details.langH }}</h5>
          <p>{{ t.details.langVal }}</p>
        </div>
      </div>
    </section>

    <!-- ════════ CTA BAND ════════ -->
    <section class="cta-band" id="contact">
      <div class="strip-grid" aria-hidden="true"></div>
      <div class="container cta-band__in">
        <h2>{{ t.cta.heading }}</h2>
        <p>{{ t.cta.text }}</p>
        <a
          class="action"
          data-mailto=""
          data-u="info"
          data-d="lemur.legal"
          data-subject="Consultation"
          href="#"
          >{{ t.cta.action }}
          <span class="arrow" aria-hidden="true">→</span></a
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { initEffects } from "./Contact.effects";
import { useTheme, useRootVars } from "@/composables/useTheme";
import { usePageContent } from "@/i18n/useContent";
import { useHead } from "@/i18n/useHead";
import contact from "@/content/contact";

const t = usePageContent(contact);
useHead(contact);

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
  "--green": "#3D7A5E",
  "--green-deep": "#2D5E46",
  "--green-tint": "rgba(61,122,94,0.12)",
  "--ochre": "#C4823A",
  "--ochre-deep": "#A4651E",
  "--ochre-tint": "rgba(196,130,58,0.13)",
  "--sig": "#7F59F5",
  "--sig-soft": "rgba(127,89,245,0.16)",
  "--sig-faint": "rgba(127,89,245,0.06)",
  "--term-bg": "#131220",
  "--term-bg-2": "#1C1B2E",
  "--term-dim": "#6E6890",
  "--term-fg": "#D2DDD7",
  "--term-cyan": "#A88BFF",
  "--term-ok": "#5FC27A",
  "--term-amber": "#D9AE5E",
  "--serif": '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  "--sans": '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  "--mono": '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  "--pad-x": "clamp(1.25rem, 5vw, 4rem)",
  "--section-y": "clamp(3.5rem, 7vw, 6rem)",
};

let dispose: (() => void) | undefined;
onMounted(() => {
  useRootVars(ROOT_VARS);
  useTheme("Editorial", 50, "Baltic");
  dispose = initEffects();
});
onUnmounted(() => dispose && dispose());
</script>

<style scoped>
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-track {
  background: var(--paper-2);
}
::-webkit-scrollbar-thumb {
  background: var(--hairline-strong);
  border: 3px solid var(--paper-2);
  border-radius: 8px;
}
::selection {
  background: var(--blue);
  color: var(--paper);
}
a {
  color: inherit;
}
h1,
h2,
h3,
h4 {
  font-family: var(--serif);
  font-weight: 400;
  margin: 0;
}
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  max-width: 100%;
}
:focus-visible {
  outline: 2px solid var(--sig);
  outline-offset: 3px;
}
.regmark {
  position: absolute;
  width: 18px;
  height: 18px;
  pointer-events: none;
  opacity: 0.5;
}
.regmark::before,
.regmark::after {
  content: "";
  position: absolute;
  background: var(--hairline-strong);
}
.regmark::before {
  width: 1px;
  height: 100%;
  left: 0;
  top: 0;
}
.regmark::after {
  width: 100%;
  height: 1px;
  left: 0;
  top: 0;
}
.regmark.tr {
  transform: scaleX(-1);
}
.cyberline {
  position: relative;
  height: 1px;
  overflow: hidden;
  pointer-events: none;
}
.cyberline::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    currentColor 30%,
    currentColor 70%,
    transparent
  );
  opacity: 0.22;
}
.hud-tl,
.hud-tr,
.hud-bl,
.hud-br {
  position: absolute;
  width: 14px;
  height: 14px;
  pointer-events: none;
}
.hud-tl {
  top: 0;
  left: 0;
  border-top: 1.5px solid var(--sig);
  border-left: 1.5px solid var(--sig);
  opacity: 0.3;
}
.hud-tr {
  top: 0;
  right: 0;
  border-top: 1.5px solid var(--sig);
  border-right: 1.5px solid var(--sig);
  opacity: 0.3;
}
.hud-bl {
  bottom: 0;
  left: 0;
  border-bottom: 1.5px solid var(--sig);
  border-left: 1.5px solid var(--sig);
  opacity: 0.3;
}
.hud-br {
  bottom: 0;
  right: 0;
  border-bottom: 1.5px solid var(--sig);
  border-right: 1.5px solid var(--sig);
  opacity: 0.3;
}
.hero {
  padding-top: clamp(2.5rem, 6vw, 4.5rem);
  padding-bottom: var(--section-y);
  position: relative;
  overflow: hidden;
}
#mesh {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.hero__in {
  position: relative;
  z-index: 1;
}
.kicker {
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--ink-2);
  letter-spacing: 0.04em;
  margin-bottom: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}
.kicker .caret {
  display: inline-block;
  width: 7px;
  height: 1.05em;
  background: var(--sig);
  vertical-align: -2px;
}
.hexrow {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  color: var(--blue);
  opacity: 0.22;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 0.9rem;
  pointer-events: none;
  user-select: none;
}
.hero h1 {
  font-family: var(--serif);
  font-size: clamp(2.3rem, 1.2rem + 4vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  max-width: 17ch;
}
.hero h1 .b {
  color: var(--blue);
  font-weight: 500;
}
.hero h1 .g {
  color: var(--green);
  font-weight: 500;
}
.hero h1 .o {
  color: var(--ochre);
  font-weight: 500;
}
.slogan-line {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--sig);
  letter-spacing: 0.05em;
  margin-top: 0.9rem;
}
.hero__lead {
  margin-top: 1.5rem;
  max-width: 58ch;
  font-size: 1.1rem;
  color: var(--ink-2);
}
.hero__lead strong {
  color: var(--ink);
  font-weight: 500;
}
.section {
  padding-block: var(--section-y);
  position: relative;
  border-top: 1px solid var(--hairline);
}
.section:first-of-type {
  border-top: 1px solid var(--ink);
}
.section::before {
  content: "";
  position: absolute;
  left: var(--pad-x);
  top: -1px;
  width: 46px;
  height: 3px;
  background: var(--sig);
  z-index: 3;
}
.section .cyberline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  color: var(--blue-deep);
}
.sec-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-2);
  letter-spacing: 0.04em;
  margin-bottom: 1.4rem;
}
.sec-meta .mark {
  color: var(--ink);
}
.sec-meta .coord {
  opacity: 0.7;
  white-space: nowrap;
}
@media (max-width: 560px) {
  .sec-meta .coord {
    display: none;
  }
}
.section-label {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--blue-deep);
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
}
.section-label::before {
  content: "";
  width: 28px;
  height: 1px;
  background: currentColor;
}
.section-title {
  font-family: var(--serif);
  font-size: clamp(1.55rem, 1.25rem + 1.4vw, 2.3rem);
  letter-spacing: -0.015em;
  color: var(--ink);
  margin-bottom: 0.6rem;
  line-height: 1.18;
}
.section-subtitle {
  font-family: var(--serif);
  font-style: italic;
  color: var(--ink-2);
  font-size: 1.05rem;
  max-width: 62ch;
}
.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 430px);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;
  margin-top: 2.4rem;
}
@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
.cform {
  position: relative;
  border: 1px solid var(--hairline);
  background: var(--paper);
  padding: clamp(1.3rem, 3vw, 2rem);
}
.cform .hud-tl,
.cform .hud-tr,
.cform .hud-bl,
.cform .hud-br {
  opacity: 0.35;
}
.field {
  margin-bottom: 1.15rem;
}
.field:last-of-type {
  margin-bottom: 0;
}
.field label {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-2);
  display: block;
  margin-bottom: 0.45rem;
}
.field label .req {
  color: var(--blue-deep);
}
.field input,
.field select,
.field textarea {
  width: 100%;
  font-family: var(--sans);
  font-size: 1rem;
  color: var(--ink);
  background: var(--paper-2);
  border: 1px solid var(--hairline-strong);
  border-radius: 0;
  padding: 0.7rem 0.8rem;
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--sig);
  box-shadow: 0 0 0 3px var(--sig-faint);
  background: var(--paper);
}
.field textarea {
  min-height: 130px;
  resize: vertical;
  line-height: 1.6;
}
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 520px) {
  .field-row {
    grid-template-columns: 1fr;
  }
}
.submit {
  margin-top: 1.4rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--sans);
  font-weight: 500;
  font-size: 1rem;
  color: var(--paper);
  background: var(--ink);
  border: 1px solid var(--ink);
  padding: 0.75rem 1.3rem;
  cursor: pointer;
}
.submit .arrow {
  display: inline-block;
}
.form-note {
  margin-top: 1rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--ink-2);
}
.form-note a {
  color: var(--blue-deep);
  text-decoration: underline;
}
.console {
  position: relative;
  background: var(--term-bg);
  color: var(--term-fg);
  border: 1px solid #23272e;
  box-shadow: 0 18px 50px -28px rgba(0, 0, 0, 0.7);
  overflow: hidden;
}
.console .regmark {
  opacity: 0.6;
}
.console .regmark::before,
.console .regmark::after {
  background: rgba(168, 139, 255, 0.45);
}
.console__bar {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 1rem;
  background: var(--term-bg-2);
  border-bottom: 1px solid #23272e;
}
.console__bar .d {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}
.console__bar .d.r {
  background: #e0686a;
}
.console__bar .d.y {
  background: #d9ae5e;
}
.console__bar .d.g {
  background: #69cfa1;
}
.console__title {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--term-dim);
  margin-left: 0.4rem;
  letter-spacing: 0.02em;
  display: flex;
  gap: 1rem;
  flex: 1;
}
.console__title .right {
  margin-left: auto;
}
.console__body {
  padding: 1.5rem clamp(1.1rem, 3vw, 1.8rem) 1.7rem;
  font-family: var(--mono);
  font-size: 0.8rem;
  line-height: 1.95;
  position: relative;
  z-index: 1;
}
.console__body::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background-image: repeating-linear-gradient(
    0deg,
    transparent 0 27px,
    rgba(168, 139, 255, 0.035) 27px 28px
  );
}
.cl .pr {
  color: var(--term-cyan);
}
.cl .cm {
  color: var(--term-fg);
}
.cl .mut {
  color: var(--term-dim);
}
.cl .ok {
  color: var(--term-ok);
}
.cl .wn {
  color: var(--term-amber);
}
.cl .em {
  color: var(--term-cyan);
}
.caret {
  display: inline-block;
  width: 7px;
  height: 1.05em;
  background: var(--term-cyan);
  vertical-align: -2px;
  margin-left: 3px;
}
.matter-board {
  margin-top: 2.4rem;
  background: var(--term-bg);
  border: 1px solid #23272e;
  position: relative;
  padding: 2rem clamp(1.1rem, 3vw, 2.2rem) 1.8rem;
  overflow: hidden;
  box-shadow: 0 18px 50px -28px rgba(0, 0, 0, 0.7);
}
.matter-board::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(
    circle,
    rgba(127, 89, 245, 0.07) 1px,
    transparent 1px
  );
  background-size: 32px 32px;
}
.matter-board__header {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--term-dim);
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid #23272e;
  margin-bottom: 1.8rem;
  position: relative;
  z-index: 1;
}
.matter-board__nodes {
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
  z-index: 1;
}
.mnode {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.mnode__step {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--term-dim);
  letter-spacing: 0.06em;
}
.mnode__title {
  font-family: var(--serif);
  font-size: clamp(1.1rem, 0.9rem + 0.8vw, 1.6rem);
  color: var(--term-fg);
  letter-spacing: -0.01em;
}
.mnode__sub {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--term-dim);
  margin-top: 0.1rem;
}
.mnode__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.64rem;
  color: var(--term-ok);
  letter-spacing: 0.06em;
  margin-top: 0.35rem;
}
.mnode__badge .mnd {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}
.mnode-trace {
  flex: 0 0 52px;
  position: relative;
  align-self: center;
  margin-inline: clamp(0.6rem, 2vw, 1.4rem);
}
.mnode-trace::before {
  content: "";
  display: block;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(168, 139, 255, 0.3),
    rgba(168, 139, 255, 0.08)
  );
}
.mnode-pulse {
  position: absolute;
  top: -2px;
  left: 0;
  width: 18px;
  height: 5px;
  background: linear-gradient(90deg, transparent, var(--sig), transparent);
  opacity: 0;
}
.matter-board__footer {
  margin-top: 1.8rem;
  padding-top: 1.4rem;
  border-top: 1px solid #23272e;
  position: relative;
  z-index: 1;
}
.matter-board__footer a {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--term-cyan);
  text-decoration: none;
  letter-spacing: 0.02em;
}
@media (max-width: 580px) {
  .matter-board__nodes {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
  }
  .mnode-trace {
    transform: rotate(90deg);
    margin-inline: 0;
  }
}
.lines {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: 2.4rem;
}
@media (max-width: 760px) {
  .lines {
    grid-template-columns: 1fr;
  }
}
.line {
  position: relative;
  border: 1px solid var(--hairline);
  background: var(--paper);
  padding: 1.6rem 1.6rem 1.4rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  overflow: hidden;
}
.line::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 42px;
  height: 3px;
}
.line__k {
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.7rem;
}
.line__name {
  font-family: var(--serif);
  font-size: 1.3rem;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.line__desc {
  font-size: 0.92rem;
  color: var(--ink-2);
  line-height: 1.6;
  flex: 1;
}
.line__go {
  font-family: var(--mono);
  font-size: 0.8rem;
  margin-top: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.line--b::before {
  background: var(--blue);
}
.line--b .line__k,
.line--b .line__go {
  color: var(--blue-deep);
}
.line--g::before {
  background: #1fc49a;
}
.line--g .line__k,
.line--g .line__go {
  color: #137a5f;
}
.line--o::before {
  background: #c8772e;
}
.line--o .line__k,
.line--o .line__go {
  color: #9e5a1e;
}
.details {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--ink);
  margin-top: 2.6rem;
}
@media (max-width: 680px) {
  .details {
    grid-template-columns: 1fr 1fr;
  }
}
.detail {
  padding: 1.4rem clamp(1rem, 2vw, 1.4rem) 1.2rem;
  border-left: 1px solid var(--hairline);
}
.detail:first-child {
  border-left: none;
  padding-left: 0;
}
.detail h5 {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-2);
  margin-bottom: 0.5rem;
}
.detail p {
  font-size: 0.92rem;
  color: var(--ink);
  line-height: 1.55;
}
.detail a {
  color: var(--blue-deep);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.detail a:hover {
  border-color: var(--sig);
}
.cta-band {
  border-top: 1px solid var(--ink);
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-band .strip-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(circle, var(--blue) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.045;
}
.cta-band__in {
  position: relative;
  z-index: 1;
  padding-block: clamp(3rem, 6vw, 4.5rem);
}
.cta-band h2 {
  font-family: var(--serif);
  font-size: clamp(1.8rem, 1.4rem + 1.6vw, 2.7rem);
  letter-spacing: -0.02em;
  max-width: 20ch;
  margin-inline: auto;
}
.cta-band p {
  margin: 1.1rem auto 1.9rem;
  max-width: 54ch;
  color: var(--ink-2);
  font-size: 1.05rem;
}
.action {
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  border-bottom: 1px solid var(--blue);
  padding-bottom: 3px;
  color: var(--blue-deep);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.action .arrow {
  display: inline-block;
}
.book {
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  border: 1px solid var(--ink);
  padding: 0.45rem 0.85rem;
  color: var(--ink);
  transition:
    background 0.25s ease,
    color 0.25s ease;
  white-space: nowrap;
}
.book:hover {
  background: var(--ink);
  color: var(--paper);
}
.cselect {
  position: relative;
}
.cselect__btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  font-family: var(--sans);
  font-size: 1rem;
  color: var(--ink);
  background: var(--paper-2);
  border: 1px solid var(--hairline-strong);
  border-radius: 0;
  padding: 0.7rem 0.8rem;
  cursor: pointer;
  text-align: left;
  line-height: 1.4;
}
.cselect__btn:focus-visible {
  outline: none;
  border-color: var(--sig);
  box-shadow: 0 0 0 3px var(--sig-faint);
}
.cselect[data-open] .cselect__btn {
  border-color: var(--sig);
  box-shadow: 0 0 0 3px var(--sig-faint);
  background: var(--paper);
}
.cselect__arr {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-2);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}
.cselect[data-open] .cselect__arr {
  transform: rotate(180deg);
  color: var(--sig);
}
.cselect__list {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 5px);
  z-index: 30;
  margin: 0;
  padding: 0;
  list-style: none;
  background: var(--paper);
  border: 1px solid var(--sig);
  box-shadow: 0 18px 44px -22px rgba(26, 24, 38, 0.55);
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.16s ease;
}
.cselect[data-open] .cselect__list {
  max-height: 340px;
  opacity: 1;
  pointer-events: auto;
}
.cselect__opt {
  font-family: var(--sans);
  font-size: 1rem;
  color: var(--ink);
  padding: 0.62rem 0.8rem;
  cursor: pointer;
  border-top: 1px solid var(--hairline);
  display: flex;
  align-items: center;
  gap: 0.55rem;
}
.cselect__opt:first-child {
  border-top: none;
}
.cselect__opt:hover,
.cselect__opt[data-active] {
  background: var(--sig-faint);
  color: var(--blue-deep);
}
.cselect__opt[aria-selected="true"] {
  background: var(--blue);
  color: var(--paper);
}
.cselect__opt[aria-selected="true"]::before {
  content: "›";
  font-family: var(--mono);
  margin-right: 0.1rem;
}
</style>

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

<!-- ════════ SECTION 1 — CRYPTO & FINTECH (light · blue) ════════ -->
<section class="blog-section blog-section--b" id="crypto">
  <div class="cyberline" aria-hidden="true"><span data-anim="cpulse"></span></div>
  <div class="container">
    <div data-anim="reveal">
      <div class="sec-meta"><span class="mark">§ 01</span><span class="coord">[ 46.05°N · 14.51°E · MiCA ]</span></div>
      <div class="section-label">P·1 — Crypto &amp; Fintech</div>
      <h2 class="section-title">MiCA, tokens and the rulebook.</h2>
      <p class="section-subtitle">How EU crypto regulation actually applies — white papers, classification, licensing and the legal opinions exchanges ask for.</p>
    </div>
    <div class="blog-grid">

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="MiCA white paper article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%23131220'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%23A88BFF'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%23A88BFF'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%23A88BFF'%3EMiCA%20White%20Paper%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>MiCA</span>
          <h3 class="blog-card__title">MiCA white papers: what actually has to be in them</h3>
          <p class="blog-card__sum">A section-by-section look at the disclosures Reg (EU) 2023/1114 requires — and the parts founders most often get wrong before filing.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">PM</span>
            <span class="blog-card__author">Peter Merc</span>
            <time class="blog-card__date" datetime="2026-05-12">12 May 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="Token classification article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%231A1826'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%237F59F5'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%237F59F5'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%237F59F5'%3EToken%20Classes%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>Classification</span>
          <h3 class="blog-card__title">Utility, asset-referenced or e-money? Classifying your token</h3>
          <p class="blog-card__sum">The classification decides which regime you fall under. We walk through the tests, the grey zones and why getting it right comes first.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">LL</span>
            <span class="blog-card__author">Lemur Legal</span>
            <time class="blog-card__date" datetime="2026-04-29">29 Apr 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="Crypto legal opinion article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%23131220'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%23A88BFF'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%23A88BFF'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%23A88BFF'%3ELegal%20Opinion%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>Listing</span>
          <h3 class="blog-card__title">Listing on a CEX: the legal opinion exchanges ask for</h3>
          <p class="blog-card__sum">Before a token is listed, exchanges want a reasoned opinion on its legal nature. Here's what goes into one and how long it takes.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">PM</span>
            <span class="blog-card__author">Peter Merc</span>
            <time class="blog-card__date" datetime="2026-04-08">8 Apr 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

    </div>
  </div>
</section>

<!-- ════════ SECTION 2 — STARTUPS & DEEP TECH (dark · green) ════════ -->
<section class="blog-section blog-section--g" id="startups">
  <div class="cyberline" aria-hidden="true"><span data-anim="cpulse"></span></div>
  <div class="container">
    <div data-anim="reveal">
      <div class="sec-meta"><span class="mark">§ 02</span><span class="coord">[ 46.05°N · 14.51°E · BUILD ]</span></div>
      <div class="section-label">P·2 — Startups &amp; Deep Tech</div>
      <h2 class="section-title">Building the company, not just the product.</h2>
      <p class="section-subtitle">Incorporation, equity, IP and the contracts founders actually sign — the legal scaffolding behind a growing technology company.</p>
    </div>
    <div class="blog-grid">

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="ESOP article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%230E1A13'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%231FC49A'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%231FC49A'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%231FC49A'%3EESOP%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>Equity</span>
          <h3 class="blog-card__title">Incorporation and ESOP: an option pool that actually works</h3>
          <p class="blog-card__sum">Setting up the company and a share-option pool that motivates the team and survives a funding round — without nasty surprises at exit.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">LL</span>
            <span class="blog-card__author">Lemur Legal</span>
            <time class="blog-card__date" datetime="2026-05-02">2 May 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="IP for deep tech article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%230E1A13'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%231FC49A'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%231FC49A'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%231FC49A'%3EIP%20Strategy%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>IP</span>
          <h3 class="blog-card__title">IP for deep tech: what to protect, and when</h3>
          <p class="blog-card__sum">Patents, trade secrets, trademarks and copyright — choosing the right protection for the right asset at the right stage, as registered IP representatives.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">PM</span>
            <span class="blog-card__author">Peter Merc</span>
            <time class="blog-card__date" datetime="2026-04-17">17 Apr 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="Founder contracts article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%230E1A13'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%231FC49A'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%231FC49A'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%231FC49A'%3EContracts%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>Contracts</span>
          <h3 class="blog-card__title">The contracts founders actually sign</h3>
          <p class="blog-card__sum">From software licences and SLAs to manufacturing and partnership deals — the everyday agreements that quietly carry the most risk.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">LL</span>
            <span class="blog-card__author">Lemur Legal</span>
            <time class="blog-card__date" datetime="2026-03-25">25 Mar 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

    </div>
  </div>
</section>

<!-- ════════ SECTION 3 — DEFENCE & DUAL-USE (light · ochre) ════════ -->
<section class="blog-section blog-section--o" id="defence">
  <div class="cyberline" aria-hidden="true"><span data-anim="cpulse"></span></div>
  <div class="container">
    <div data-anim="reveal">
      <div class="sec-meta"><span class="mark">§ 03</span><span class="coord">[ 46.05°N · 14.51°E · DUAL-USE ]</span></div>
      <div class="section-label">P·3 — Defence &amp; Dual-Use</div>
      <h2 class="section-title">The new frontier: export controls.</h2>
      <p class="section-subtitle">When advanced technology becomes dual-use — classification, licensing, sanctions screening and foreign-investment review, explained from first principles.</p>
    </div>
    <div class="blog-grid">

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="Dual-use guide article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%23131220'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%23E8A33D'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%23E8A33D'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%23E8A33D'%3EDual-Use%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>Dual-use</span>
          <h3 class="blog-card__title">Is your technology dual-use? A first-principles guide</h3>
          <p class="blog-card__sum">Much advanced tech is caught by export controls whether or not you intended it. How to tell, and why software and know-how count too.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">PM</span>
            <span class="blog-card__author">Peter Merc</span>
            <time class="blog-card__date" datetime="2026-05-06">6 May 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="Export controls 101 article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%231A1826'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%23C8772E'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%23C8772E'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%23C8772E'%3EEU%202021%2F821%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>Export controls</span>
          <h3 class="blog-card__title">Export controls 101 for software companies (EU 2021/821)</h3>
          <p class="blog-card__sum">The central EU instrument, the control lists and the licensing routes — a plain-language primer for teams shipping software across borders.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">LL</span>
            <span class="blog-card__author">Lemur Legal</span>
            <time class="blog-card__date" datetime="2026-04-12">12 Apr 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

      <a class="blog-card" data-anim="reveal" href="#">
        <img class="blog-card__img" alt="FDI screening article cover" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20600%20375'%3E%3Crect%20width%3D'600'%20height%3D'375'%20fill%3D'%23131220'%2F%3E%3Cg%20fill%3D'none'%20stroke%3D'%23E8A33D'%20opacity%3D'0.32'%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'56'%2F%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'84'%20stroke-dasharray%3D'3%207'%2F%3E%3C%2Fg%3E%3Ccircle%20cx%3D'300'%20cy%3D'158'%20r%3D'5'%20fill%3D'%23E8A33D'%2F%3E%3Ctext%20x%3D'300'%20y%3D'300'%20text-anchor%3D'middle'%20font-family%3D'monospace'%20font-size%3D'27'%20font-weight%3D'500'%20letter-spacing%3D'1'%20fill%3D'%23E8A33D'%3EFDI%20Screening%3C%2Ftext%3E%3C%2Fsvg%3E">
        <div class="blog-card__body">
          <span class="blog-card__cat"><span class="l"></span>FDI</span>
          <h3 class="blog-card__title">FDI screening: what founders and investors should know</h3>
          <p class="blog-card__sum">Foreign-investment screening can shape a raise or an exit. When Reg (EU) 2019/452 bites, and how to plan around it early.</p>
          <div class="blog-card__meta">
            <span class="blog-card__av">PM</span>
            <span class="blog-card__author">Peter Merc</span>
            <time class="blog-card__date" datetime="2026-03-20">20 Mar 2026</time>
          </div>
        </div>
        <span class="blog-card__go" aria-hidden="true">→</span>
      </a>

    </div>
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
import { onMounted, onUnmounted } from 'vue'
import { initEffects } from './Blog.effects'
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
  "--serif": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
  "--sans": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
  "--mono": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
  "--pad-x": "clamp(1.25rem, 5vw, 4rem)",
  "--section-y": "clamp(3.5rem, 7vw, 6rem)",
}

let dispose: (() => void) | undefined
onMounted(() => {
  document.title = "Blog \u2014 Lemur Legal"
  useRootVars(ROOT_VARS)
  useTheme('Editorial', 50, 'Baltic')
  dispose = initEffects()
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
.blog-card{ position:relative; background:#E7ECE8; border:1px solid var(--hairline); display:flex; flex-direction:column; text-decoration:none; color:inherit; overflow:hidden; transition:transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
.blog-card:hover{ transform:translateY(-4px); box-shadow:0 16px 44px -24px rgba(26,24,38,.55); border-color:var(--blue); }
.blog-card__img{ width:100%; aspect-ratio:16/10; object-fit:cover; display:block; border-bottom:1px solid var(--hairline); background:var(--term-bg); }
.blog-card__body{ padding:1.35rem 1.5rem 1.45rem; display:flex; flex-direction:column; flex:1; }
.blog-card__cat{ font-family:var(--mono); font-size:.62rem; letter-spacing:.14em; text-transform:uppercase; color:var(--blue-deep); margin-bottom:.7rem; display:flex; align-items:center; gap:.45rem; }
.blog-card__cat .l{ width:5px; height:5px; border-radius:50%; background:currentColor; }
.blog-card__title{ font-family:var(--serif); font-size:1.16rem; line-height:1.26; letter-spacing:-0.01em; color:var(--ink); margin-bottom:.65rem; }
.blog-card__sum{ font-size:.89rem; color:var(--ink-2); line-height:1.62; margin-bottom:1.25rem; flex:1; }
.blog-card__meta{ display:flex; align-items:center; gap:.6rem; margin-top:auto; padding-top:.9rem; border-top:1px solid var(--hairline); }
.blog-card__av{ width:30px; height:30px; border-radius:50%; background:var(--ink); color:var(--term-cyan); display:flex; align-items:center; justify-content:center; font-family:var(--mono); font-size:.58rem; font-weight:500; flex-shrink:0; letter-spacing:.02em; }
.blog-card__author{ font-family:var(--mono); font-size:.74rem; color:var(--ink); }
.blog-card__date{ font-family:var(--mono); font-size:.68rem; color:var(--ink-2); margin-left:auto; letter-spacing:.03em; }
.blog-card__go{ position:absolute; top:.85rem; right:.9rem; font-family:var(--mono); color:var(--sig); opacity:0; transform:translate(-4px,4px); transition:opacity .25s ease, transform .25s ease; }
.blog-card:hover .blog-card__go{ opacity:1; transform:none; }
@media (max-width:980px) {
.blog-grid{ grid-template-columns:repeat(2,1fr); }
}
@media (max-width:620px) {
.blog-grid{ grid-template-columns:1fr; }
}
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
.blog-section--b .section-label,.blog-section--b .blog-card__cat{ color:var(--blue-deep); }
.blog-section--b .blog-card:hover{ border-color:var(--blue); }
.blog-section--g .section-label,.blog-section--g .blog-card__cat{ color:#137A5F; }
.blog-section--g .blog-card:hover{ border-color:#1FC49A; }
.blog-section--o .section-label,.blog-section--o .blog-card__cat{ color:#9E5A1E; }
.blog-section--o .blog-card:hover{ border-color:#C8772E; }
.blog-section--g .blog-card__go{ color:#1FC49A; }
.blog-section--o .blog-card__go{ color:#C8772E; }
.blog-section--g .blog-card__av{ color:#1FC49A; }
.blog-section--o .blog-card__av{ color:#E8A33D; }
.blog-section.dark{ overflow:hidden; }
.blog-section.dark::before{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(31,196,154,.05) 1px,transparent 1px); background-size:34px 34px; }
.blog-section.dark .section-title{ color:var(--term-fg); }
.blog-section.dark .section-subtitle{ color:var(--term-dim); }
.blog-section.dark .blog-card{ background:rgba(255,255,255,.03); border-color:#23272E; }
.blog-section.dark .blog-card:hover{ background:rgba(31,196,154,.07); border-color:#1FC49A; box-shadow:0 16px 44px -24px rgba(0,0,0,.6); }
.blog-section.dark .blog-card__img{ border-color:#23272E; }
.blog-section.dark .blog-card__title{ color:#EAF0FF; }
.blog-section.dark .blog-card__sum{ color:var(--term-dim); }
.blog-section.dark .blog-card__meta{ border-color:#23272E; }
.blog-section.dark .blog-card__av{ background:rgba(255,255,255,.08); color:#1FC49A; }
.blog-section.dark .blog-card__author{ color:var(--term-fg); }
.blog-section.dark .blog-card__date{ color:var(--term-dim); }
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

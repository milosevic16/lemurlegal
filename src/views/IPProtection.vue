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
      <p class="kicker">IP Protection · Ljubljana <span class="caret" data-anim="blink" aria-hidden="true"></span></p>
      <div class="hexrow" data-anim="hexrow" aria-hidden="true">0x1FC49A  49502052  0x2026  4F544543  0x1114  4C4547414C  0xD2DDD7  4C4A4C20  0x5FC27A</div>
      <h1 id="hero-h"><span class="hero__glitch" data-anim="glitch" data-text="Your IP is an asset worth">Your IP is an asset worth</span> <span class="em">defending.</span></h1>
      <p class="slogan-line">// identify · protect · manage.</p>
      <p class="hero__lead">Intellectual property is more than trademarks and designs — it is one of your <strong>most valuable assets</strong>. We help you identify your IP, decide what to protect and how, and put the strategy, registrations and contracts in place to manage and defend it.</p>
      <div class="hero__actions">
        <a class="h-btn" href="#contact" data-ht-arrow="">Send your inquiry <span class="arrow" data-ht-glyph="" aria-hidden="true">→</span></a>
        <a class="h-btn h-btn--ghost" href="#how">How it works</a>
      </div>
      <p class="hero__meta">IPR strategy · Identification · Protection · Contracts &amp; licensing</p>
    </div>

    <div class="seal-wrap" data-anim="reveal">
      <svg class="seal" data-anim="seal" viewBox="0 0 240 240" fill="none" role="img" aria-label="IP protection badge">
        <circle data-anim="seal-pulse" cx="120" cy="120" r="92" stroke="#137A5F" stroke-width="1" opacity="0" fill="none"></circle>
        <circle cx="120" cy="120" r="84" stroke="#0E5C48" stroke-width="1.2" opacity="0.55" fill="none"></circle>
        <g data-anim="seal-rotor">
          <circle cx="120" cy="120" r="72" stroke="#137A5F" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-dasharray="78 35" opacity="0.9"></circle>
          <circle cx="120" cy="36" r="3.2" fill="#1FC49A"></circle>
          <circle cx="193" cy="162" r="3.2" fill="#1FC49A"></circle>
          <circle cx="47" cy="162" r="3.2" fill="#1FC49A"></circle>
        </g>
        <g data-anim="seal-rotor2">
          <circle cx="120" cy="120" r="58" stroke="#1FC49A" stroke-width="1" fill="none" stroke-dasharray="1.5 9" opacity="0.55"></circle>
        </g>
        <g stroke="#137A5F" stroke-width="1.4" opacity="0.6" stroke-linecap="round">
          <line x1="120" y1="10" x2="120" y2="22"></line><line x1="120" y1="218" x2="120" y2="230"></line>
          <line x1="10" y1="120" x2="22" y2="120"></line><line x1="218" y1="120" x2="230" y2="120"></line>
        </g>
        <circle cx="120" cy="120" r="46" stroke="#0E5C48" stroke-width="1.2" opacity="0.9" fill="none"></circle>
        <g transform="translate(98,96)" stroke="#137A5F" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22,4 l16,7 v9 c0,11 -7,16 -16,19 c-9,-3 -16,-8 -16,-19 v-9 z"></path>
          <path d="M15,22 l5,5 l9,-11"></path>
        </g>
        <text x="120" y="163" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="12" font-weight="600" letter-spacing="1.5" fill="#E6F5EF">PROTECTED</text>
      </svg>
    </div>
  </div>
</header>

<!-- ===== STRIP ===== -->
<section class="strip" aria-label="Why it matters">
  <div class="strip__grid" aria-hidden="true"></div>
  <div class="cyberline" aria-hidden="true"><span class="cyberline__base"></span><span data-anim="cpulse"></span></div>
  <div class="container strip__in">
    <span class="strip__k">Why it matters</span>
    <p class="strip__v">As an IP rights holder you are constantly exposed to legal and business risks that need to be addressed. Protecting intellectual property means more than registration — it starts with identifying what you hold and choosing the right way to secure it.</p>
  </div>
</section>

<!-- ===== WHY IT MATTERS ===== -->
<section class="section container" aria-labelledby="who-h">
  <div class="sec-head">
    <span class="mark">§ 01</span>
    <h2 id="who-h">Protection that goes beyond registration.</h2>
    <span class="coord" aria-hidden="true">[ WHY IT MATTERS ]</span>
  </div>
  <div class="why-grid">
    <div class="why" data-anim="reveal">
      <span class="wn">01</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></div>
      <h3>Strategy first</h3>
      <p>Protection starts with identifying what IP you hold and deciding what to secure, and how — by registration, by contract, or both.</p>
    </div>
    <div class="why" data-anim="reveal">
      <span class="wn">02</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg></div>
      <h3>Registered representatives</h3>
      <p>We are on the official list of trademark and design representatives at the EUIPO (the European Union Intellectual Property Office), and file across the EU, nationally and worldwide.</p>
    </div>
    <div class="why" data-anim="reveal">
      <span class="wn">03</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"></path></svg></div>
      <h3>Owned &amp; licensed on your terms</h3>
      <p>Contracts and licences keep your IP owned by the right entity and used by others only under the terms you set.</p>
    </div>
  </div>
</section>

<!-- ===== HOW IT WORKS ===== -->
<section class="section section--line container" id="how" aria-labelledby="how-h">
  <div class="sec-head">
    <span class="mark">§ 02</span>
    <h2 id="how-h">From identifying your IP to managing it as an asset.</h2>
    <span class="coord" aria-hidden="true">[ HOW IT WORKS · 3 STEPS ]</span>
  </div>
  <div class="tl" data-anim="timeline" aria-label="From identifying your IP to managing it as an asset, in three steps">
    <span class="hud-tl" aria-hidden="true"></span><span class="hud-tr" aria-hidden="true"></span>
    <span class="hud-bl" aria-hidden="true"></span><span class="hud-br" aria-hidden="true"></span>
    <div class="tl__grid" aria-hidden="true"></div>
    <div class="tl__head" aria-hidden="true">
      IP PIPELINE &nbsp;·&nbsp; <span style="color:var(--term-cyan)">READY TO MAP</span> <span class="blip" data-anim="blink"></span>
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
            <p class="tl__step-k">Step 01</p>
            <h3 class="tl__title">Identify</h3>
            <p class="tl__sub">We map your intellectual property — what it is, what can be protected and how — and where the risks and opportunities lie.</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#1FC49A"></span>IP mapping</span>
          </div>
        </li>
        <li class="tl__step" data-tl-step="">
          <span class="tl__node" data-tl-node=""><span class="tl__node-num">02</span></span>
          <div class="tl__card" data-tl-card="">
            <p class="tl__step-k">Step 02</p>
            <h3 class="tl__title">Protect</h3>
            <p class="tl__sub">We secure it through the right mix of registration (trademarks, designs) and contractual protection.</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#84E3C4"></span>registration · contracts</span>
          </div>
        </li>
        <li class="tl__step" data-tl-step="">
          <span class="tl__node" data-tl-node=""><span class="tl__node-num">03</span></span>
          <div class="tl__card" data-tl-card="">
            <p class="tl__step-k">Step 03</p>
            <h3 class="tl__title">Manage</h3>
            <p class="tl__sub">We put the agreements and licences in place to manage, license and defend your IP as the business grows.</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#1FC49A"></span>licensing · defence</span>
          </div>
        </li>
      </ol>
    </div>
    <div class="tl__foot">
      <a href="#contact" data-ht-arrow="">$ protect-ip --client=you <span data-ht-glyph="" aria-hidden="true">→</span></a>
    </div>
  </div>
</section>

<!-- ===== WHAT WE COVER ===== -->
<section class="section section--line container" id="coverage" aria-labelledby="cov-h">
  <div class="sec-head">
    <span class="mark">§ 03</span>
    <h2 id="cov-h">From IP strategy to registration, contracts and licensing.</h2>
    <span class="coord" aria-hidden="true">[ WHAT WE COVER ]</span>
  </div>
  <div class="cov-grid">
    <article class="cov cov--b" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 01</span><h4>IPR strategy &amp; identification</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Mapping your IP assets</div>
        <div class="row"><span class="l">02</span>What can be protected — and how</div>
        <div class="row"><span class="l">03</span>Ownership structuring</div>
        <div class="row"><span class="l">04</span>Portfolio strategy &amp; management</div>
      </div>
    </article>
    <article class="cov cov--g" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 02</span><h4>Trademarks</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Prepare &amp; file applications (national, EU, worldwide)</div>
        <div class="row"><span class="l">02</span>Opposition proceedings</div>
        <div class="row"><span class="l">03</span>Deadline &amp; use monitoring</div>
        <div class="row"><span class="l">04</span>Renewals &amp; portfolio management</div>
      </div>
    </article>
    <article class="cov cov--o" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 03</span><h4>Designs</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Prepare &amp; file applications (national, EU, worldwide)</div>
        <div class="row"><span class="l">02</span>Assignment agreements</div>
        <div class="row"><span class="l">03</span>Deadline monitoring</div>
        <div class="row"><span class="l">04</span>Renewals</div>
      </div>
    </article>
    <article class="cov cov--b" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 04</span><h4>Copyright &amp; know-how</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Authorship &amp; ownership</div>
        <div class="row"><span class="l">02</span>Assignment agreements</div>
        <div class="row"><span class="l">03</span>Trade-secret &amp; know-how protection</div>
        <div class="row"><span class="l">04</span>Infringement notices &amp; cease-and-desist</div>
      </div>
    </article>
    <article class="cov cov--g" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 05</span><h4>IPR contracts</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>IP assignment agreements</div>
        <div class="row"><span class="l">02</span>Employee &amp; contractor IP clauses</div>
        <div class="row"><span class="l">03</span>NDAs</div>
        <div class="row"><span class="l">04</span>R&amp;D &amp; collaboration IP terms</div>
        <div class="row"><span class="l">05</span>IP in financing &amp; M&amp;A</div>
      </div>
    </article>
    <article class="cov cov--o" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 06</span><h4>Licensing</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Licence agreements — use without transferring ownership</div>
        <div class="row"><span class="l">02</span>Scope, territory &amp; field of use</div>
        <div class="row"><span class="l">03</span>Royalties &amp; reporting</div>
        <div class="row"><span class="l">04</span>Term, termination &amp; enforcement</div>
      </div>
    </article>
  </div>

  <div class="callout" data-anim="reveal">
    <div class="ci"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.3 2.3 7.3L12 16.7 5.7 21l2.3-7.3-6-4.3h7.6z"></path></svg></div>
    <div>
      <h3>Registered IP representative</h3>
      <p>Lemur Legal is listed as a representative for trademarks and designs at the EUIPO — so we can prepare and file your rights directly, as part of a wider IP strategy.</p>
    </div>
  </div>
</section>

<!-- ===== EXPERT ===== -->
<section class="section section--line container" id="expert" aria-labelledby="exp-h">
  <div class="sec-head">
    <span class="mark">§ 04</span>
    <h2 id="exp-h">Who you'll work with</h2>
    <span class="coord" aria-hidden="true">[ 46.05°N · 14.51°E ]</span>
  </div>
  <div class="founder" data-anim="reveal">
    <!-- Founder photo slot — replace the SVG below with a square portrait, e.g. <img src="peter-merc.jpg" alt="Peter Merc, Ph.D.">. It fills the box responsively via object-fit:cover. -->
    <div class="avatar" role="img" aria-label="Peter Merc, Ph.D.">
      <img src="/peter-merc.jpg" alt="Peter Merc, Ph.D.">
    </div>
    <div>
      <span class="founder__eye">Founder · EUIPO trademark &amp; design representative · Lemur Legal</span>
      <h3 class="founder__name">Peter Merc, Ph.D.</h3>
      <p class="founder__role">// strategy · registration · licensing</p>
      <p class="founder__bio">Peter and the Lemur Legal team help technology companies build and defend their IP — from identifying and structuring rights, through registration, to the contracts and licences that turn intellectual property into a <strong>managed, revenue-generating asset</strong>.</p>
    </div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="section section--line container" aria-labelledby="faq-h">
  <div class="sec-head">
    <span class="mark">§ 05</span>
    <h2 id="faq-h">Frequently asked questions</h2>
    <span class="coord" aria-hidden="true">[ FAQ ]</span>
  </div>
  <div class="faq" data-anim="reveal">
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">What exactly counts as intellectual property? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>More than trademarks and designs: it includes your brand, product designs, copyright works, software, databases, know-how and trade secrets, and the inventions behind your technology. The first step is identifying what you hold.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">How do I decide what to protect — and how? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>We assess each asset and recommend the right route: registration (trademarks, designs), contractual protection, or a combination. Not everything is best protected by registration.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">Can you protect IP through contracts, not just registration? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>Yes — through IP assignment clauses, employee and contractor terms, NDAs, and R&amp;D and collaboration agreements. Contracts are often where ownership is won or lost.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">What is the difference between assigning and licensing IP? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>An assignment transfers ownership; a licence grants only the right to use your solution, on terms you define, while you keep ownership. We prepare both.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">What if someone opposes my trademark — or infringes it? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>We handle opposition proceedings — both defending your application and challenging conflicting marks — and we monitor databases so conflicts are caught early.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">Are you authorised to file? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>Yes — Lemur Legal is on the official list of trademark and design representatives at the EUIPO.</p></div>
    </div>
  </div>
</section>

<!-- ===== CTA BAND ===== -->
<section class="section section--line container">
  <div class="priceband" data-anim="reveal" style="max-width:none;">
    <div class="t"><b>Have intellectual property worth protecting?</b> Tell us what you're building and we'll map your IP strategy and the next steps.</div>
    <button class="btn" type="button" data-ht-hover-fill="" onclick="location.href='#contact'">Book a consultation</button>
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
        <div class="eye">// send your inquiry</div>
        <h2 id="frm-h">Send your inquiry.</h2>
        <p class="fl">Tell us about your company and what you need. We'll review it and come back with next steps — usually the same day.</p>
        <p class="fl" style="font-size:.8rem;">Ljubljana, Slovenia · <span class="js-mail" data-u="info" data-d="lemur.legal">info [at] lemur.legal</span></p>
      </div>
      <div>
        <div class="field"><label for="f-name">Name and surname</label><input type="text" id="f-name" name="name"></div>
        <div class="field"><label for="f-email">Email</label><input type="text" id="f-email" name="email"></div>
        <div class="field"><label for="f-proj">Company &amp; website</label><input type="text" id="f-proj" name="company"></div>
        <div class="field"><label for="f-link">What do you need?</label><input type="text" id="f-link" name="need"></div>
        <label style="display:block;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(230,245,239,0.6);margin-bottom:.4rem;">I need help with</label>
        <div class="choice" data-ht-choice="" role="group" aria-label="What you need">
          <span class="chip" data-ht-chip="" data-on="true">Trademark</span>
          <span class="chip" data-ht-chip="" data-on="false">Design</span>
          <span class="chip" data-ht-chip="" data-on="false">Copyright</span>
        </div>
        <button class="btn" type="button" data-ht-hover-fill="">Submit inquiry</button>
      </div>
    </div>
  </div>
</section>

<!-- ===== CROSS-SELL ===== -->
<section class="section section--line container" aria-labelledby="xs-h">
  <div class="sec-head" style="margin-bottom:1.4rem;">
    <span class="mark">§ 06</span>
    <h2 id="xs-h">Also from Lemur Legal</h2>
  </div>
  <div class="cross">
    <a class="xc" href="/incorporation_esop" data-anim="reveal" data-ht-arrow="">
      <span class="xi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"></path></svg></span>
      <span><h4>Incorporation &amp; ESOP</h4><p>Set up your company and incentivise your team.</p></span>
      <span class="arr" data-ht-glyph="">→</span>
    </a>
    <a class="xc" href="/startups_contracts" data-anim="reveal" data-ht-arrow="">
      <span class="xi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5M9 13h6M9 17h6"></path></svg></span>
      <span><h4>Contracts &amp; Commercial</h4><p>The contracts that protect your business.</p></span>
      <span class="arr" data-ht-glyph="">→</span>
    </a>
  </div>
</section>
</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { initEffects } from './IPProtection.effects'
import { useTheme, useRootVars } from '@/composables/useTheme'

// This page's :root custom properties (fonts / spacing / palette). Applied at
// runtime so pages with different design tokens don't clobber each other.
const ROOT_VARS: Record<string, string> = {
  "--paper": "#CDE2DB",
  "--paper-2": "#C2DCD4",
  "--ink": "#142621",
  "--ink-2": "#4E7267",
  "--hairline": "#ADC6BD",
  "--hairline-strong": "#98B4AA",
  "--blue": "#137A5F",
  "--blue-deep": "#0E5C48",
  "--blue-tint": "rgba(19,122,95,0.10)",
  "/* emerald-monochrome (startups)": "entire palette re-anchored to #1FC49A and its shades */\n  --green:#1FC49A",
  "--green-deep": "#137A5F",
  "--green-tint": "rgba(31,196,154,0.12)",
  "--ochre": "#0E5C48",
  "--ochre-deep": "#094736",
  "--ochre-tint": "rgba(14,92,72,0.13)",
  "--sig": "#137A5F",
  "--sig-soft": "rgba(19,122,95,0.16)",
  "--term-bg": "#051813",
  "--term-bg-2": "#0C271E",
  "--term-dim": "#5E9684",
  "--term-fg": "#CDE2DB",
  "--term-cyan": "#1FC49A",
  "--term-ok": "#1FC49A",
  "--term-amber": "#84E3C4",
  "--mono": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, Consolas, monospace",
  "--pad-x": "clamp(1.25rem, 5vw, 4rem)",
  "--section-y": "clamp(3.5rem, 8vw, 6rem)",
}

let dispose: (() => void) | undefined
onMounted(() => {
  document.title = "IP Protection \u2014 Lemur Legal"
  useRootVars(ROOT_VARS)
  useTheme('Editorial', 50, 'Green')
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
.hero{ position:relative; overflow:hidden; background:var(--term-bg); color:#E6F5EF; border-bottom:1px solid #16332A; }
.hero__mesh{ position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; }
.hero__in{ position:relative; z-index:1; max-width:1180px; margin-inline:auto; padding-inline:var(--pad-x);
  padding-top:clamp(3rem,6vw,5.25rem); padding-bottom:clamp(3.5rem,7vw,6rem);
  display:grid; grid-template-columns:minmax(0,1fr) minmax(0,300px); gap:clamp(1.5rem,5vw,4rem); align-items:center; }
.hero__main{ min-width:0; }
.hero .kicker{ font-size:.76rem; color:var(--term-cyan); letter-spacing:.06em; display:inline-flex; align-items:center; gap:.55rem; margin-bottom:1.15rem; }
.caret{ display:inline-block; width:7px; height:1.05em; background:var(--term-cyan); vertical-align:-2px; }
.hexrow{ font-size:.58rem; letter-spacing:.18em; color:var(--blue); overflow:hidden; white-space:nowrap; max-width:100%; margin-bottom:.9rem; pointer-events:none; user-select:none; }
.hero h1{ font-size:clamp(2.1rem,1.1rem + 3.4vw,3.5rem); line-height:1.08; letter-spacing:-0.02em; font-weight:500; color:#E6F5EF; max-width:18ch; }
.hero h1 .em{ color:#1FC49A; }
.hero__glitch{ position:relative; display:inline-block; }
.slogan-line{ font-size:.8rem; color:var(--term-cyan); letter-spacing:.05em; margin-top:.9rem; }
.hero__lead{ margin-top:1.3rem; max-width:54ch; font-size:1rem; line-height:1.7; color:rgba(230,245,239,0.72); }
.hero__lead strong{ color:#E6F5EF; font-weight:500; }
.hero__actions{ margin-top:2rem; display:flex; gap:1.6rem; row-gap:1rem; flex-wrap:wrap; align-items:center; }
.h-btn{ font-family:var(--mono); font-size:.82rem; font-weight:500; letter-spacing:.02em; cursor:pointer;
  display:inline-flex; align-items:center; gap:.5rem; border:1px solid #1FC49A; background:#1FC49A; color:var(--term-bg); padding:.7rem 1.1rem; }
.h-btn--ghost{ background:transparent; color:#E6F5EF; border-color:rgba(255,255,255,0.28); }
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
.why::after{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0; background:radial-gradient(circle at 50% 0%, var(--green-tint), transparent 72%); opacity:0; transition:opacity .35s ease; }
.why:hover{ background:rgba(31,196,154,0.06); box-shadow:inset 0 0 0 1px rgba(31,196,154,.32), 0 16px 44px -28px rgba(31,196,154,.32); }
.why:hover::after{ opacity:1; }
.why__scan{ position:absolute; left:0; right:0; top:0; height:38%; pointer-events:none; z-index:0; opacity:0; background:linear-gradient(180deg, transparent, rgba(31,196,154,0.18), transparent); }
.why .wn,.why .ic,.why h3,.why p{ position:relative; z-index:1; }
@media (max-width:760px) {
.why-grid{ grid-template-columns:1fr; }
.why{ border-left:none; padding-left:0; border-top:1px solid var(--hairline); padding-top:1.3rem; }
.why:first-child{ border-top:none; }
}
.tl{ position:relative; background:var(--term-bg); border:1px solid #16332A; padding:clamp(1.9rem,4vw,2.6rem) clamp(1.2rem,3vw,2.4rem) clamp(1.7rem,3vw,2.2rem); overflow:hidden; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); }
.tl__grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(19,122,95,.07) 1px,transparent 1px); background-size:32px 32px; }
.tl__head{ font-size:.7rem; color:var(--term-dim); letter-spacing:.08em; display:flex; align-items:center; gap:.5rem; padding-bottom:1.4rem; border-bottom:1px solid #16332A; margin-bottom:2rem; position:relative; z-index:1; }
.blip{ display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--term-ok); }
.tl__track{ position:relative; z-index:1; }
.tl__rail{ position:absolute; top:23px; left:0; right:0; height:2px; background:rgba(31,196,154,.16); z-index:0; }
.tl__rail-fill{ position:absolute; inset:0; transform-origin:left center; background:linear-gradient(90deg,var(--blue),var(--term-cyan)); }
.tl__pulse{ position:absolute; top:-3px; left:0; width:16px; height:8px; pointer-events:none; background:linear-gradient(90deg,transparent,var(--term-cyan),transparent); }
.tl__steps{ list-style:none; display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(1.1rem,3vw,2.2rem); position:relative; z-index:1; }
.tl__step{ display:flex; flex-direction:column; align-items:center; text-align:center; }
.tl__node{ width:46px; height:46px; border-radius:50%; border:1px solid rgba(31,196,154,.45); background:var(--term-bg-2); color:var(--term-cyan); display:flex; align-items:center; justify-content:center; position:relative; z-index:2; box-shadow:0 0 0 5px var(--term-bg); }
.tl__node-num{ font-size:.92rem; font-weight:600; letter-spacing:.02em; }
.tl__card{ margin-top:1.2rem; }
.tl__step-k{ font-size:.66rem; color:var(--term-dim); letter-spacing:.08em; text-transform:uppercase; }
.tl__title{ font-size:clamp(1.05rem,.9rem + .7vw,1.4rem); color:var(--term-fg); letter-spacing:-0.01em; font-weight:500; margin-top:.35rem; }
.tl__sub{ font-size:.78rem; line-height:1.7; color:var(--term-dim); margin-top:.55rem; max-width:34ch; margin-inline:auto; }
.tl__tag{ display:inline-flex; align-items:center; gap:.4rem; font-size:.64rem; color:var(--term-cyan); letter-spacing:.06em; margin-top:.8rem; }
.tl__tag-dot{ width:5px; height:5px; border-radius:50%; background:currentColor; flex-shrink:0; }
.tl__foot{ margin-top:2rem; padding-top:1.4rem; border-top:1px solid #16332A; position:relative; z-index:1; }
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
.callout{ margin-top:2.4rem; display:grid; grid-template-columns:auto 1fr; gap:1.2rem; align-items:flex-start; border:1px solid rgba(19,122,95,0.3); background:linear-gradient(100deg,rgba(19,122,95,0.08),rgba(19,122,95,0.015)); padding:1.5rem 1.6rem; }
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
.priceband{ display:flex; align-items:center; justify-content:space-between; gap:1.4rem; flex-wrap:wrap; border:1px solid rgba(19,122,95,0.3); background:linear-gradient(100deg,rgba(19,122,95,0.08),rgba(19,122,95,0.015)); padding:1.4rem 1.6rem; margin-top:2rem; max-width:820px; }
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
.formwrap{ position:relative; background:var(--term-bg); color:var(--term-fg); border:1px solid #16332A; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); overflow:hidden; }
.formwrap__grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(19,122,95,.06) 1px,transparent 1px); background-size:30px 30px; }
.formgrid{ position:relative; z-index:1; display:grid; grid-template-columns:1fr 1fr; gap:clamp(1.4rem,4vw,2.6rem); padding:clamp(1.6rem,4vw,2.4rem); }
.formgrid .eye{ font-size:.72rem; color:var(--term-cyan); letter-spacing:.04em; }
.formgrid h2{ color:#fff; font-size:1.5rem; margin-top:.5rem; letter-spacing:-0.02em; }
.formgrid .fl{ font-size:.9rem; color:rgba(230,245,239,0.62); margin-top:.8rem; line-height:1.6; max-width:42ch; }
.field{ margin-bottom:.8rem; }
.field label{ display:block; font-size:.66rem; letter-spacing:.08em; text-transform:uppercase; color:rgba(230,245,239,0.6); margin-bottom:.4rem; }
.field input{ width:100%; background:rgba(255,255,255,0.05); border:1px solid #1E382F; color:#fff; font-size:.85rem; padding:.65rem .75rem; font-family:var(--mono); }
.field input:focus{ outline:none; border-color:var(--term-cyan); }
.choice{ display:flex; gap:.5rem; margin:.4rem 0 1.1rem; flex-wrap:wrap; }
.chip{ font-size:.72rem; border:1px solid #1E382F; padding:.5rem .8rem; color:var(--term-fg); cursor:pointer; user-select:none; }
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

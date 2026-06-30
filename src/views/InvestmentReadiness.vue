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
      <p class="kicker">Investment Readiness Review · Ljubljana <span class="caret" data-anim="blink" aria-hidden="true"></span></p>
      <div class="hexrow" data-anim="hexrow" aria-hidden="true">0xE8A33D  494E5645  0x2026  53544D54  0x1114  4C4547414C  0xD2DDD7  4C4A4C20  0xC8772E</div>
      <h1 id="hero-h"><span class="hero__glitch" data-anim="glitch" data-text="Prove you're investment-ready —">Prove you're investment-ready —</span> <span class="em">and de-risk the deal.</span></h1>
      <p class="slogan-line">// exposure · scoring · gaps · diligence-ready.</p>
      <p class="hero__lead">An investor-oriented assessment of your regulatory exposure, compliance maturity and operational readiness — so you can <strong>demonstrate preparedness</strong>, reduce perceived risk and back it with a clear readiness score and targeted recommendations.</p>
      <div class="hero__actions">
        <a class="h-btn" href="#contact" data-ht-arrow="">Send your inquiry <span class="arrow" data-ht-glyph="" aria-hidden="true">→</span></a>
        <a class="h-btn h-btn--ghost" href="#how">How it works</a>
      </div>
      <p class="hero__meta">A scored readiness picture · Built for the diligence room</p>
    </div>

    <div class="seal-wrap" data-anim="reveal">
      <svg class="seal" data-anim="gauge" data-score="87" viewBox="0 0 240 240" fill="none" role="img" aria-label="Investment readiness score gauge — sample output, 87 of 100">
        <!-- soft pulsing halo -->
        <circle data-anim="seal-pulse" cx="120" cy="120" r="104" stroke="#C8772E" stroke-width="1" opacity="0" fill="none"></circle>
        <!-- rotating outer dotted ring -->
        <g data-anim="seal-rotor">
          <circle cx="120" cy="120" r="100" stroke="#9E5A1E" stroke-width="1" fill="none" stroke-dasharray="2 11" opacity="0.5"></circle>
        </g>
        <!-- static tick ring -->
        <circle cx="120" cy="120" r="72" stroke="#9E5A1E" stroke-width="1" fill="none" stroke-dasharray="1.5 18" opacity="0.5"></circle>
        <!-- crosshair ticks -->
        <g stroke="#C8772E" stroke-width="1.4" opacity="0.5" stroke-linecap="round">
          <line x1="120" y1="6" x2="120" y2="16"></line><line x1="120" y1="224" x2="120" y2="234"></line>
          <line x1="6" y1="120" x2="16" y2="120"></line><line x1="224" y1="120" x2="234" y2="120"></line>
        </g>
        <!-- gauge track + progress (static markup encodes final 87% for reduced-motion) -->
        <circle cx="120" cy="120" r="84" stroke="#9E5A1E" stroke-width="6" opacity="0.22" fill="none"></circle>
        <circle data-anim="gauge-arc" cx="120" cy="120" r="84" stroke="#E8A33D" stroke-width="6" fill="none" stroke-linecap="round" transform="rotate(-90 120 120)" stroke-dasharray="527.79" stroke-dashoffset="68.61"></circle>
        <!-- center readout -->
        <text data-anim="gauge-num" x="120" y="128" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="56" font-weight="600" fill="#F2EDE3">87</text>
        <text x="120" y="150" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="11" letter-spacing="2" fill="#9C8A6E">/ 100</text>
        <text x="120" y="176" text-anchor="middle" font-family="'IBM Plex Mono',monospace" font-size="11" font-weight="600" letter-spacing="3" fill="#E8A33D">READINESS</text>
      </svg>
    </div>
  </div>
</header>

<!-- ===== STRIP: DEFENCE & DUAL USE ===== -->
<section class="strip" aria-label="Defence and dual use">
  <div class="strip__grid" aria-hidden="true"></div>
  <div class="cyberline" aria-hidden="true"><span class="cyberline__base"></span><span data-anim="cpulse"></span></div>
  <div class="container strip__in">
    <span class="strip__k">Defence &amp; dual use</span>
    <p class="strip__v">Investors and acquirers price in regulatory risk. A clear, scored readiness picture turns an unknown into a managed, demonstrable strength — and protects your valuation in diligence.</p>
  </div>
</section>

<!-- ===== THE CHALLENGE ===== -->
<section class="section container" aria-labelledby="who-h">
  <div class="sec-head">
    <span class="mark">§ 01</span>
    <h2 id="who-h">Regulatory readiness is part of your valuation.</h2>
    <span class="coord" aria-hidden="true">[ THE CHALLENGE ]</span>
  </div>
  <div class="why-grid">
    <div class="why" data-anim="reveal">
      <span class="wn">01</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3.5 9h17M3.5 15h17M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"></path></svg></div>
      <h3>Risk is priced in</h3>
      <p>Unmapped regulatory exposure reads as risk to investors — and discounts your valuation.</p>
    </div>
    <div class="why" data-anim="reveal">
      <span class="wn">02</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M12 3v18M5 6l14 12M19 6L5 18"></path></svg></div>
      <h3>A score they trust</h3>
      <p>We translate readiness into a clear maturity score that supports investor-facing diligence.</p>
    </div>
    <div class="why" data-anim="reveal">
      <span class="wn">03</span>
      <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5M9 13h6M9 17h6"></path></svg></div>
      <h3>Find the gaps first</h3>
      <p>Get ahead of potential regulatory gaps and support a smoother transaction with the client.</p>
    </div>
  </div>
</section>

<!-- ===== READINESS SCAN (animated sample dashboard) ===== -->
<section class="section section--line container" aria-labelledby="scan-h">
  <div class="sec-head">
    <span class="mark">§ 02</span>
    <h2 id="scan-h">A score you can put in front of investors.</h2>
    <span class="coord" aria-hidden="true">[ READINESS SCAN ]</span>
    <p>We translate regulatory preparedness into a clear maturity score across the dimensions diligence cares about.</p>
  </div>
  <div class="scan" data-anim="scan" aria-label="Sample readiness score breakdown">
    <span class="hud-tl" aria-hidden="true"></span><span class="hud-tr" aria-hidden="true"></span>
    <span class="hud-bl" aria-hidden="true"></span><span class="hud-br" aria-hidden="true"></span>
    <div class="scan__grid" aria-hidden="true"></div>
    <span class="scan__line" data-scan-line="" aria-hidden="true"></span>
    <div class="scan__head" aria-hidden="true">READINESS SCAN &nbsp;·&nbsp; <span style="color:var(--term-cyan)">SAMPLE OUTPUT</span> <span class="blip" data-anim="blink"></span></div>
    <div class="scan__rows">
      <div class="scan__row" data-scan-row="82">
        <span class="scan__label">Regulatory exposure mapped</span>
        <span class="scan__val"><span data-scan-val="">82</span><span class="u"> /100</span></span>
        <span class="scan__bar"><span class="scan__fill" data-scan-fill="" style="width:82%"></span></span>
      </div>
      <div class="scan__row" data-scan-row="74">
        <span class="scan__label">Compliance maturity</span>
        <span class="scan__val"><span data-scan-val="">74</span><span class="u"> /100</span></span>
        <span class="scan__bar"><span class="scan__fill" data-scan-fill="" style="width:74%"></span></span>
      </div>
      <div class="scan__row" data-scan-row="68">
        <span class="scan__label">FDI &amp; market access</span>
        <span class="scan__val"><span data-scan-val="">68</span><span class="u"> /100</span></span>
        <span class="scan__bar"><span class="scan__fill" data-scan-fill="" style="width:68%"></span></span>
      </div>
      <div class="scan__row" data-scan-row="79">
        <span class="scan__label">Tender &amp; procurement readiness</span>
        <span class="scan__val"><span data-scan-val="">79</span><span class="u"> /100</span></span>
        <span class="scan__bar"><span class="scan__fill" data-scan-fill="" style="width:79%"></span></span>
      </div>
      <div class="scan__row" data-scan-row="88">
        <span class="scan__label">Documentation &amp; controls</span>
        <span class="scan__val"><span data-scan-val="">88</span><span class="u"> /100</span></span>
        <span class="scan__bar"><span class="scan__fill" data-scan-fill="" style="width:88%"></span></span>
      </div>
    </div>
    <div class="scan__foot">
      <span class="scan__agg">OVERALL READINESS &nbsp; <b>78</b> <span style="color:var(--term-dim)">/ 100</span></span>
      <span class="scan__note">Illustrative · scored to your business in the review</span>
    </div>
  </div>
</section>

<!-- ===== HOW IT WORKS ===== -->
<section class="section section--line container" id="how" aria-labelledby="how-h">
  <div class="sec-head">
    <span class="mark">§ 03</span>
    <h2 id="how-h">From exposure to a score you can defend.</h2>
    <span class="coord" aria-hidden="true">[ HOW IT WORKS · 3 STEPS ]</span>
  </div>
  <div class="tl" data-anim="timeline" aria-label="From exposure assessment to a defensible score, in three steps">
    <span class="hud-tl" aria-hidden="true"></span><span class="hud-tr" aria-hidden="true"></span>
    <span class="hud-bl" aria-hidden="true"></span><span class="hud-br" aria-hidden="true"></span>
    <div class="tl__grid" aria-hidden="true"></div>
    <div class="tl__head" aria-hidden="true">
      READINESS REVIEW &nbsp;·&nbsp; <span style="color:var(--term-cyan)">READY TO SCORE</span> <span class="blip" data-anim="blink"></span>
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
            <h3 class="tl__title">Assess</h3>
            <p class="tl__sub">We identify the principal regulatory risks across your business model, product, markets and counterparties.</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#E8A33D"></span>exposure mapped</span>
          </div>
        </li>
        <li class="tl__step" data-tl-step="">
          <span class="tl__node" data-tl-node=""><span class="tl__node-num">02</span></span>
          <div class="tl__card" data-tl-card="">
            <p class="tl__step-k">Step 02</p>
            <h3 class="tl__title">Score</h3>
            <p class="tl__sub">We translate regulatory preparedness into a clear maturity score for investor-facing discussions.</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#F2C879"></span>maturity scored</span>
          </div>
        </li>
        <li class="tl__step" data-tl-step="">
          <span class="tl__node" data-tl-node=""><span class="tl__node-num">03</span></span>
          <div class="tl__card" data-tl-card="">
            <p class="tl__step-k">Step 03</p>
            <h3 class="tl__title">Remediate</h3>
            <p class="tl__sub">We highlight key weaknesses and the priority actions required to strengthen readiness before diligence.</p>
            <span class="tl__tag"><span class="tl__tag-dot" data-anim="nd" data-nd-color="#E8A33D"></span>gaps · priorities</span>
          </div>
        </li>
      </ol>
    </div>
    <div class="tl__foot">
      <a href="#contact" data-ht-arrow="">$ run-readiness-review --client=you <span data-ht-glyph="" aria-hidden="true">→</span></a>
    </div>
  </div>
</section>

<!-- ===== WHAT THE SERVICE INCLUDES ===== -->
<section class="section section--line container" id="coverage" aria-labelledby="cov-h">
  <div class="sec-head">
    <span class="mark">§ 04</span>
    <h2 id="cov-h">A complete, investor-ready regulatory picture.</h2>
    <span class="coord" aria-hidden="true">[ WHAT THE SERVICE INCLUDES ]</span>
    <p>Six lenses, one readiness picture — scored, gapped and ready for the diligence room.</p>
  </div>
  <div class="cov-grid">
    <article class="cov cov--b" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 01</span><h4>Regulatory exposure assessment</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Business model &amp; product</div>
        <div class="row"><span class="l">02</span>Markets &amp; jurisdictions</div>
        <div class="row"><span class="l">03</span>Counterparties</div>
        <div class="row"><span class="l">04</span>Principal regulatory risks</div>
      </div>
    </article>
    <article class="cov cov--g" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 02</span><h4>Investment-readiness scoring</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Clear maturity score</div>
        <div class="row"><span class="l">02</span>Investor-facing discussions</div>
        <div class="row"><span class="l">03</span>Diligence support</div>
      </div>
    </article>
    <article class="cov cov--o" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 03</span><h4>Compliance maturity review</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Internal compliance structures</div>
        <div class="row"><span class="l">02</span>Controls in practice</div>
        <div class="row"><span class="l">03</span>Decision-making processes</div>
      </div>
    </article>
    <article class="cov cov--b" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 04</span><h4>Gap &amp; remediation analysis</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Key weaknesses</div>
        <div class="row"><span class="l">02</span>Unresolved issues</div>
        <div class="row"><span class="l">03</span>Priority actions</div>
      </div>
    </article>
    <article class="cov cov--g" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 05</span><h4>FDI &amp; market-access review</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Foreign-investment screening</div>
        <div class="row"><span class="l">02</span>Market-entry restrictions</div>
        <div class="row"><span class="l">03</span>Barriers to growth plans</div>
      </div>
    </article>
    <article class="cov cov--o" data-anim="reveal" data-ht-ledger="">
      <span class="cov__bar" aria-hidden="true"></span>
      <div class="cov__head"><span class="cov__pno">C · 06</span><h4>Tender &amp; procurement readiness</h4></div>
      <div class="cov__list">
        <div class="row"><span class="l">01</span>Regulated procurement</div>
        <div class="row"><span class="l">02</span>Tenders</div>
        <div class="row"><span class="l">03</span>Public-sector engagement</div>
      </div>
    </article>
  </div>

  <div class="callout" data-anim="reveal">
    <div class="ci"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h13M11 6l6 6-6 6M16 5h5v14h-5"></path></svg></div>
    <div>
      <h3>Built for the diligence room</h3>
      <p>A readiness picture that investors and acquirers recognise — backed by a maturity score and a prioritised set of recommendations that hold up under scrutiny.</p>
    </div>
  </div>
</section>

<!-- ===== EXPERT ===== -->
<section class="section section--line container" id="expert" aria-labelledby="exp-h">
  <div class="sec-head">
    <span class="mark">§ 05</span>
    <h2 id="exp-h">Who you'll work with</h2>
    <span class="coord" aria-hidden="true">[ 46.05°N · 14.51°E ]</span>
  </div>
  <div class="founder" data-anim="reveal">
    <!-- Founder photo slot — replace the SVG below with a square portrait, e.g. <img src="peter-merc.jpg" alt="Peter Merc, Ph.D.">. It fills the box responsively via object-fit:cover. -->
    <div class="avatar" role="img" aria-label="Peter Merc, Ph.D.">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="12" cy="8.5" r="4"></circle><path d="M4.5 20c0-3.7 3.2-6.2 7.5-6.2s7.5 2.5 7.5 6.2"></path></svg>
    </div>
    <div>
      <span class="founder__eye">Founder · technology &amp; regulatory lawyer · Lemur Legal</span>
      <h3 class="founder__name">Peter Merc, Ph.D.</h3>
      <p class="founder__role">// investor-facing regulatory readiness for defence &amp; dual-use</p>
      <p class="founder__bio">Peter is a <strong>technology and financial lawyer</strong> with a focus on cryptocurrency regulation, fintech, and startup ecosystems. He advises crypto companies, fintech ventures, and technology startups on regulatory compliance, contract law, and intellectual property matters, providing practical legal solutions at the intersection of law and emerging technology.</p>
      <p class="founder__bio">Beyond private practice, Peter serves as an external evaluator for <strong>Horizon Europe</strong> and <strong>NATO Diana</strong>, assessing deep-tech and innovation-driven ventures for programme funding. He is also a partner at venture capital firms, <strong>Suricate Ventures</strong> and <strong>IBEX Equity Partners</strong>, bringing a dual perspective as both legal counsel and investor to the companies he works with.</p>
    </div>
  </div>
</section>

<!-- ===== TESTIMONIALS ===== -->


<!-- ===== WHAT'S INCLUDED ===== -->
<section class="section section--line container" aria-labelledby="inc-h">
  <div class="sec-head">
    <span class="mark">§ 07</span>
    <h2 id="inc-h">Everything an investor will look for, in one review.</h2>
    <span class="coord" aria-hidden="true">[ WHAT'S INCLUDED ]</span>
  </div>
  <div class="inc-list">
    <div class="inc" data-anim="reveal"><span class="ck"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span>A mapped picture of your regulatory exposure</div>
    <div class="inc" data-anim="reveal"><span class="ck"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span>A clear readiness score for the diligence room</div>
    <div class="inc" data-anim="reveal"><span class="ck"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span>Compliance maturity and gaps identified</div>
    <div class="inc" data-anim="reveal"><span class="ck"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span>A prioritised set of remediation actions</div>
  </div>
  <div class="priceband" data-anim="reveal">
    <div class="t"><b>Scope is set to your stage and where you're raising or selling.</b> Tell us about your business and we'll scope a readiness review with a fixed proposal.</div>
    <button class="btn" type="button" data-ht-hover-fill="" onclick="location.href='#contact'">Request a proposal</button>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="section section--line container" aria-labelledby="faq-h">
  <div class="sec-head">
    <span class="mark">§ 08</span>
    <h2 id="faq-h">Frequently asked questions</h2>
    <span class="coord" aria-hidden="true">[ FAQ ]</span>
  </div>
  <div class="faq" data-anim="reveal">
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">Who is this readiness review for? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>Startups and scaling companies preparing to raise, sell or enter regulated markets, who need to demonstrate regulatory preparedness.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">What is the readiness score? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>A clear maturity score that translates your regulatory preparedness into something investors and acquirers can assess during diligence.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">What does the review cover? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>Regulatory exposure, compliance maturity, gaps and remediation, FDI and market access, and tender and procurement readiness.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">What is FDI screening? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>Foreign direct investment screening — government review of certain foreign investments; we assess whether it, or other market-entry barriers, may affect your plans.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">What do I get at the end? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>A readiness score plus a prioritised, targeted set of recommendations to strengthen your position.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">Where does dual-use risk show up in fundraising or M&amp;A? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>It frequently arises during fundraising, M&amp;A and commercial due diligence — investors and acquirers increasingly scrutinise whether sensitive software, technology or know-how crosses borders, with whom and for what purpose. Identifying exposure early prevents avoidable difficulties later in the deal.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">Why assess dual-use exposure early? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>Early assessment is part of mature governance. Identifying exposure early helps prevent problems in fundraising, contracting, deployment, procurement and international expansion — and lets you respond to investor, customer and partner scrutiny with credibility and resilience.</p></div>
    </div>
    <div class="faq__item">
      <button class="faq__q" type="button" data-ht-accordion-toggle="" aria-expanded="false">Do I need step 1 first? <span class="pl" data-ht-accordion-sign="" aria-hidden="true">+</span></button>
      <div class="faq__a" data-ht-accordion-panel="" aria-hidden="true"><p>Most clients begin with regulatory qualification, but we can start here and fold qualification in where needed.</p></div>
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
        <div class="eye">// get started</div>
        <h2 id="frm-h">Send your inquiry.</h2>
        <p class="fl">Tell us about your company and what you need — a readiness review, a score ahead of a raise, or a diligence health-check. We'll review it and come back with next steps, usually the same day.</p>
        <p class="fl" style="font-size:.8rem;">Ljubljana, Slovenia · <span class="js-mail" data-u="info" data-d="lemur.legal">info [at] lemur.legal</span></p>
      </div>
      <div>
        <div class="field"><label for="f-name">Name and surname</label><input type="text" id="f-name" name="name"></div>
        <div class="field"><label for="f-email">Email</label><input type="text" id="f-email" name="email"></div>
        <div class="field"><label for="f-proj">Company name &amp; website</label><input type="text" id="f-proj" name="project"></div>
        <div class="field"><label for="f-link">Stage — raising, selling or entering a market (or a short brief)</label><input type="text" id="f-link" name="link"></div>
        <label style="display:block;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(242,237,227,0.6);margin-bottom:.4rem;">I need help with</label>
        <div class="choice" data-ht-choice="" role="group" aria-label="What you need">
          <span class="chip" data-ht-chip="" data-on="true">Readiness review</span>
          <span class="chip" data-ht-chip="" data-on="false">Investor diligence</span>
          <span class="chip" data-ht-chip="" data-on="false">FDI review</span>
        </div>
        <button class="btn" type="button" data-ht-hover-fill="">Submit inquiry</button>
      </div>
    </div>
  </div>
</section>

<!-- ===== CROSS-SELL ===== -->
<section class="section section--line container" aria-labelledby="xs-h">
  <div class="sec-head" style="margin-bottom:1.4rem;">
    <span class="mark">§ 09</span>
    <h2 id="xs-h">Before and after this step</h2>
  </div>
  <div class="cross">
    <a class="xc" href="/regulatory_qualification" data-anim="reveal" data-ht-arrow="">
      <span class="xi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"></path></svg></span>
      <span><h4>Regulatory Qualification</h4><p>Step 1 · Export controls, customs &amp; sanctions qualification.</p></span>
      <span class="arr" data-ht-glyph="">→</span>
    </a>
    <a class="xc" href="/compliance_frameworks" data-anim="reveal" data-ht-arrow="">
      <span class="xi"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z"></path><path d="M9 12l2 2 4-4"></path></svg></span>
      <span><h4>Compliance Frameworks</h4><p>Step 3 · Internal programmes, governance &amp; controls.</p></span>
      <span class="arr" data-ht-glyph="">→</span>
    </a>
  </div>
</section>
</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { initEffects } from './InvestmentReadiness.effects'
import { useTheme, useRootVars } from '@/composables/useTheme'

// This page's :root custom properties (fonts / spacing / palette). Applied at
// runtime so pages with different design tokens don't clobber each other.
const ROOT_VARS: Record<string, string> = {
  "--paper": "#D2DDD7",
  "--paper-2": "#C6D4CE",
  "--ink": "#19211B",
  "--ink-2": "#566B5E",
  "--hairline": "#B4C0BA",
  "--hairline-strong": "#A0AEA8",
  "--blue": "#C8772E",
  "--blue-deep": "#9E5A1E",
  "--blue-tint": "rgba(200,119,46,0.10)",
  "/* tactical-amber (defence & dual use)": "blue/green/ochre tokens are now amber/orange shades",
  "investment readiness (defence)": "hero/dark sections amber-themed",
  "light signature background Lemur green */\n  --green": "#E8A33D",
  "--green-deep": "#C8772E",
  "--green-tint": "rgba(232,163,61,0.12)",
  "--ochre": "#9E5A1E",
  "--ochre-deep": "#6E3D12",
  "--ochre-tint": "rgba(158,90,30,0.13)",
  "--sig": "#C8772E",
  "--sig-soft": "rgba(200,119,46,0.16)",
  "--term-bg": "#171206",
  "--term-bg-2": "#241C0E",
  "--term-dim": "#9C8A6E",
  "--term-fg": "#EFEAE0",
  "--term-cyan": "#E8A33D",
  "--term-ok": "#E8A33D",
  "--term-amber": "#F2C879",
  "--mono": "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, Consolas, monospace",
  "--pad-x": "clamp(1.25rem, 5vw, 4rem)",
  "--section-y": "clamp(3.5rem, 8vw, 6rem)",
}

let dispose: (() => void) | undefined
onMounted(() => {
  document.title = "Investment Readiness Review \u2014 Lemur Legal"
  useRootVars(ROOT_VARS)
  useTheme('Editorial', 50, 'Baltic')
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
.hero{ position:relative; overflow:hidden; background:var(--term-bg); color:#F2EDE3; border-bottom:1px solid #2C2415; }
.hero__mesh{ position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; }
.hero__in{ position:relative; z-index:1; max-width:1180px; margin-inline:auto; padding-inline:var(--pad-x);
  padding-top:clamp(3rem,6vw,5.25rem); padding-bottom:clamp(3.5rem,7vw,6rem);
  display:grid; grid-template-columns:minmax(0,1fr) minmax(0,300px); gap:clamp(1.5rem,5vw,4rem); align-items:center; }
.hero__main{ min-width:0; }
.hero .kicker{ font-size:.76rem; color:var(--term-cyan); letter-spacing:.06em; display:inline-flex; align-items:center; gap:.55rem; margin-bottom:1.15rem; }
.caret{ display:inline-block; width:7px; height:1.05em; background:var(--term-cyan); vertical-align:-2px; }
.hexrow{ font-size:.58rem; letter-spacing:.18em; color:var(--blue); overflow:hidden; white-space:nowrap; max-width:100%; margin-bottom:.9rem; pointer-events:none; user-select:none; }
.hero h1{ font-size:clamp(2.1rem,1.1rem + 3.4vw,3.5rem); line-height:1.08; letter-spacing:-0.02em; font-weight:500; color:#F2EDE3; max-width:18ch; }
.hero h1 .em{ color:var(--blue); }
.hero__glitch{ position:relative; display:inline-block; }
.slogan-line{ font-size:.8rem; color:var(--term-cyan); letter-spacing:.05em; margin-top:.9rem; }
.hero__lead{ margin-top:1.3rem; max-width:54ch; font-size:1rem; line-height:1.7; color:rgba(242,237,227,0.72); }
.hero__lead strong{ color:#F2EDE3; font-weight:500; }
.hero__actions{ margin-top:2rem; display:flex; gap:1.6rem; row-gap:1rem; flex-wrap:wrap; align-items:center; }
.h-btn{ font-family:var(--mono); font-size:.82rem; font-weight:500; letter-spacing:.02em; cursor:pointer;
  display:inline-flex; align-items:center; gap:.5rem; border:1px solid var(--blue); background:var(--blue); color:#fff; padding:.7rem 1.1rem; }
.h-btn--ghost{ background:transparent; color:#F2EDE3; border-color:rgba(255,255,255,0.28); }
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
.why:first-child{ border-left:none; padding-left:0; }
.why .wn{ font-size:.72rem; color:var(--ink-2); }
.why .ic{ width:38px; height:38px; border:1px solid var(--hairline-strong); display:flex; align-items:center; justify-content:center; color:var(--blue); margin-block:.9rem; }
.why h3{ font-size:1.1rem; letter-spacing:-0.01em; }
.why p{ margin-top:.6rem; color:var(--ink-2); font-size:.9rem; }
.why{ position:relative; overflow:hidden; transition:background .3s ease, box-shadow .35s ease; }
.why::after{ content:""; position:absolute; inset:0; pointer-events:none; z-index:0; background:radial-gradient(circle at 50% 0%, var(--blue-tint), transparent 72%); opacity:0; transition:opacity .35s ease; }
.why:hover{ background:rgba(200,119,46,0.07); box-shadow:inset 0 0 0 1px rgba(200,119,46,.30), 0 16px 44px -28px rgba(200,119,46,.30); }
.why:hover::after{ opacity:1; }
.why__scan{ position:absolute; left:0; right:0; top:0; height:38%; pointer-events:none; z-index:0; opacity:0; background:linear-gradient(180deg, transparent, rgba(200,119,46,0.18), transparent); }
.why .wn,.why .ic,.why h3,.why p{ position:relative; z-index:1; }
@media (max-width:760px) {
.why-grid{ grid-template-columns:1fr; }
.why{ border-left:none; padding-left:0; border-top:1px solid var(--hairline); padding-top:1.3rem; }
.why:first-child{ border-top:none; }
}
.tl{ position:relative; background:var(--term-bg); border:1px solid #2C2415; padding:clamp(1.9rem,4vw,2.6rem) clamp(1.2rem,3vw,2.4rem) clamp(1.7rem,3vw,2.2rem); overflow:hidden; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); }
.tl__grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(200,119,46,.07) 1px,transparent 1px); background-size:32px 32px; }
.tl__head{ font-size:.7rem; color:var(--term-dim); letter-spacing:.08em; display:flex; align-items:center; gap:.5rem; padding-bottom:1.4rem; border-bottom:1px solid #2C2415; margin-bottom:2rem; position:relative; z-index:1; }
.blip{ display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--term-ok); }
.tl__track{ position:relative; z-index:1; }
.tl__rail{ position:absolute; top:23px; left:0; right:0; height:2px; background:rgba(232,163,61,.16); z-index:0; }
.tl__rail-fill{ position:absolute; inset:0; transform-origin:left center; background:linear-gradient(90deg,var(--blue),var(--term-cyan)); }
.tl__pulse{ position:absolute; top:-3px; left:0; width:16px; height:8px; pointer-events:none; background:linear-gradient(90deg,transparent,var(--term-cyan),transparent); }
.tl__steps{ list-style:none; display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(1.1rem,3vw,2.2rem); position:relative; z-index:1; }
.tl__step{ display:flex; flex-direction:column; align-items:center; text-align:center; }
.tl__node{ width:46px; height:46px; border-radius:50%; border:1px solid rgba(232,163,61,.45); background:var(--term-bg-2); color:var(--term-cyan); display:flex; align-items:center; justify-content:center; position:relative; z-index:2; box-shadow:0 0 0 5px var(--term-bg); }
.tl__node-num{ font-size:.92rem; font-weight:600; letter-spacing:.02em; }
.tl__card{ margin-top:1.2rem; }
.tl__step-k{ font-size:.66rem; color:var(--term-dim); letter-spacing:.08em; text-transform:uppercase; }
.tl__title{ font-size:clamp(1.05rem,.9rem + .7vw,1.4rem); color:var(--term-fg); letter-spacing:-0.01em; font-weight:500; margin-top:.35rem; }
.tl__sub{ font-size:.78rem; line-height:1.7; color:var(--term-dim); margin-top:.55rem; max-width:34ch; margin-inline:auto; }
.tl__tag{ display:inline-flex; align-items:center; gap:.4rem; font-size:.64rem; color:var(--term-cyan); letter-spacing:.06em; margin-top:.8rem; }
.tl__tag-dot{ width:5px; height:5px; border-radius:50%; background:currentColor; flex-shrink:0; }
.tl__foot{ margin-top:2rem; padding-top:1.4rem; border-top:1px solid #2C2415; position:relative; z-index:1; }
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
.callout{ margin-top:2.4rem; display:grid; grid-template-columns:auto 1fr; gap:1.2rem; align-items:flex-start; border:1px solid rgba(200,119,46,0.3); background:linear-gradient(100deg,rgba(200,119,46,0.08),rgba(200,119,46,0.015)); padding:1.5rem 1.6rem; }
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
.priceband{ display:flex; align-items:center; justify-content:space-between; gap:1.4rem; flex-wrap:wrap; border:1px solid rgba(200,119,46,0.3); background:linear-gradient(100deg,rgba(200,119,46,0.08),rgba(200,119,46,0.015)); padding:1.4rem 1.6rem; margin-top:2rem; max-width:820px; }
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
.scan{ position:relative; background:var(--term-bg); color:var(--term-fg); border:1px solid #2C2415; padding:clamp(1.6rem,4vw,2.2rem); overflow:hidden; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); }
.scan__grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(200,119,46,.06) 1px,transparent 1px); background-size:30px 30px; }
.scan__line{ position:absolute; left:0; right:0; top:-8%; height:42px; pointer-events:none; z-index:2; background:linear-gradient(180deg,rgba(232,163,61,0.16),transparent); }
.scan__head{ position:relative; z-index:1; display:flex; align-items:center; gap:.5rem; font-size:.7rem; color:var(--term-dim); letter-spacing:.08em; padding-bottom:1.2rem; margin-bottom:1.5rem; border-bottom:1px solid #2C2415; }
.scan__rows{ position:relative; z-index:1; display:grid; gap:1.15rem; }
.scan__row{ display:grid; grid-template-columns:minmax(0,1fr) auto; gap:.55rem 1rem; align-items:baseline; }
.scan__label{ font-size:.84rem; color:var(--term-fg); letter-spacing:.005em; }
.scan__val{ font-family:'IBM Plex Mono',monospace; font-size:1rem; font-weight:600; color:var(--term-cyan); text-align:right; min-width:2.6ch; }
.scan__val .u{ color:var(--term-dim); font-size:.7rem; font-weight:400; }
.scan__bar{ grid-column:1 / -1; position:relative; height:7px; background:rgba(242,237,227,0.08); overflow:hidden; }
.scan__fill{ position:absolute; left:0; top:0; bottom:0; transform-origin:left center; background:linear-gradient(90deg,var(--blue),var(--term-cyan)); }
.scan__foot{ position:relative; z-index:1; margin-top:1.6rem; padding-top:1.2rem; border-top:1px solid #2C2415; display:flex; align-items:baseline; justify-content:space-between; gap:1rem; flex-wrap:wrap; }
.scan__agg{ font-size:.72rem; color:var(--term-dim); letter-spacing:.05em; }
.scan__agg b{ color:var(--term-cyan); font-size:1.15rem; font-weight:600; }
.scan__note{ font-size:.66rem; color:var(--term-dim); letter-spacing:.06em; text-transform:uppercase; opacity:.8; }
.formwrap{ position:relative; background:var(--term-bg); color:var(--term-fg); border:1px solid #2C2415; box-shadow:0 18px 50px -28px rgba(0,0,0,.7); overflow:hidden; }
.formwrap__grid{ position:absolute; inset:0; pointer-events:none; z-index:0; background-image:radial-gradient(circle,rgba(200,119,46,.06) 1px,transparent 1px); background-size:30px 30px; }
.formgrid{ position:relative; z-index:1; display:grid; grid-template-columns:1fr 1fr; gap:clamp(1.4rem,4vw,2.6rem); padding:clamp(1.6rem,4vw,2.4rem); }
.formgrid .eye{ font-size:.72rem; color:var(--term-cyan); letter-spacing:.04em; }
.formgrid h2{ color:#fff; font-size:1.5rem; margin-top:.5rem; letter-spacing:-0.02em; }
.formgrid .fl{ font-size:.9rem; color:rgba(242,237,227,0.62); margin-top:.8rem; line-height:1.6; max-width:42ch; }
.field{ margin-bottom:.8rem; }
.field label{ display:block; font-size:.66rem; letter-spacing:.08em; text-transform:uppercase; color:rgba(242,237,227,0.6); margin-bottom:.4rem; }
.field input{ width:100%; background:rgba(255,255,255,0.05); border:1px solid #322A1B; color:#fff; font-size:.85rem; padding:.65rem .75rem; font-family:var(--mono); }
.field input:focus{ outline:none; border-color:var(--term-cyan); }
.choice{ display:flex; gap:.5rem; margin:.4rem 0 1.1rem; flex-wrap:wrap; }
.chip{ font-size:.72rem; border:1px solid #322A1B; padding:.5rem .8rem; color:var(--term-fg); cursor:pointer; user-select:none; }
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

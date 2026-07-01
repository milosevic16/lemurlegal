<template>
  <header class="masthead">
    <div class="container masthead__inner">
      <a class="brand" href="/" aria-label="Lemur Legal, home">
        <div
          class="logo-placeholder"
          aria-hidden="true"
          title="Replace with your SVG logo"
        >
          <span>YOUR LOGO</span>
        </div>
      </a>
      <nav class="nav" aria-label="Primary">
        <a href="/#crypto_fintech" class="nl-b">Crypto &amp; Fintech</a>
        <a href="/#startups_deeptech" class="nl-g">Startups &amp; Deep Tech</a>
        <a href="/#defence_dualuse" class="nl-o">Defence &amp; Dual Use</a>
        <a href="/about" class="nl-m">About</a>
        <a href="/blog" class="nl-m">Blog</a>
        <a href="/contact" class="nl-m">Contact</a>
      </nav>
      <div class="head-right">
        <span class="status" aria-hidden="true"
          ><span class="dot" data-anim="blink"></span> EU · OPEN FOR
          MATTERS</span
        >
        <span class="lang"><b>EN</b> / SI</span>
      </div>
      <button
        class="nav-toggle"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <span class="nav-toggle__bars" aria-hidden="true"
          ><span></span><span></span><span></span
        ></span>
      </button>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile">
      <a href="/#crypto_fintech" class="mm-b">Crypto &amp; Fintech</a>
      <a href="/#startups_deeptech" class="mm-g">Startups &amp; Deep Tech</a>
      <a href="/#defence_dualuse" class="mm-o">Defence &amp; Dual Use</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
      <span class="mobile-menu__meta"
        ><span class="dot" data-anim="blink"></span> EU · OPEN FOR MATTERS
        &nbsp;·&nbsp; <b>EN</b> / SI</span
      >
    </nav>
    <span class="seam" aria-hidden="true" data-anim="seam"></span>
  </header>
</template>

<script setup lang="ts"></script>

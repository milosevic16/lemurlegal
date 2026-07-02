<template>
<main id="main">
  <a id="top"></a>

  <article class="legal">
    <!-- ===== HEADER ===== -->
    <header class="legal__head">
      <p class="legal__eye">// legal <span class="caret" data-anim="blink" aria-hidden="true"></span></p>
      <h1 class="legal__title">{{ t.title }}</h1>
      <p class="legal__org">{{ t.org }}</p>
      <p class="legal__date">{{ t.updated }}</p>
      <div class="legal__intro">
        <p v-for="(p, i) in t.intro" :key="i">{{ p }}</p>
      </div>
      <nav class="legal__toc" aria-label="Contents">
        <a v-for="part in t.parts" :key="part.anchor" :href="'#' + part.anchor">
          <span class="ar" aria-hidden="true">→</span>{{ part.title }}
        </a>
      </nav>
    </header>

    <!-- ===== PARTS ===== -->
    <section v-for="part in t.parts" :key="part.anchor" :id="part.anchor" class="legal__part">
      <h2 class="legal__part-title">{{ part.title }}</h2>
      <div v-if="part.intro" class="legal__part-intro">
        <p v-for="(p, i) in part.intro" :key="i">{{ p }}</p>
      </div>

      <section v-for="(art, ai) in part.articles" :key="ai" class="legal__article">
        <h3 class="legal__article-title">{{ art.heading }}</h3>
        <template v-for="(block, bi) in art.blocks" :key="bi">
          <p v-if="block.p" class="legal__p">{{ block.p }}</p>
          <ul v-else-if="block.list" class="legal__list">
            <li v-for="(li, mi) in block.list" :key="mi">{{ li }}</li>
          </ul>
        </template>
      </section>
    </section>

    <p class="legal__closing">{{ t.closing }}</p>
  </article>
</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { initEffects } from './TermsOfUse.effects'
import { useTheme, useRootVars } from '@/composables/useTheme'
import { usePageContent } from '@/i18n/useContent'
import { useHead } from '@/i18n/useHead'
import content from '@/content/terms'

const t = usePageContent(content)
useHead(content)

// Light editorial palette (matches Contact) — IBM Plex Mono throughout. Applied
// at runtime so pages with different tokens don't clobber each other.
const ROOT_VARS: Record<string, string> = {
  '--paper': '#D2DDD7',
  '--paper-2': '#C6D4CE',
  '--ink': '#1A1826',
  '--ink-2': '#585672',
  '--hairline': '#B4C0BA',
  '--hairline-strong': '#A0AEA8',
  '--blue': '#7F59F5',
  '--blue-deep': '#6444CC',
  '--blue-tint': 'rgba(127,89,245,0.10)',
  '--sig': '#7F59F5',
  '--sig-soft': 'rgba(127,89,245,0.16)',
  '--sans': '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  '--mono': '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  '--pad-x': 'clamp(1.25rem, 5vw, 4rem)',
  '--section-y': 'clamp(3.5rem, 7vw, 6rem)',
}

let dispose: (() => void) | undefined
onMounted(() => {
  useRootVars(ROOT_VARS)
  useTheme('Editorial', 50, 'Baltic')
  dispose = initEffects()
})
onUnmounted(() => dispose && dispose())
</script>

<style scoped>
::selection { background: var(--blue); color: var(--paper); }
a { color: inherit; text-decoration: none; }
:focus-visible { outline: 2px solid var(--sig); outline-offset: 3px; }

.legal {
  max-width: 820px;
  margin-inline: auto;
  padding-inline: var(--pad-x);
  padding-block: clamp(2.4rem, 6vw, 4.5rem) clamp(3rem, 8vw, 6rem);
  color: var(--ink);
}

/* ── header ── */
.legal__eye { font-family: var(--mono); font-size: .74rem; letter-spacing: .06em; color: var(--blue-deep); display: inline-flex; align-items: center; gap: .5rem; margin: 0 0 1.1rem; }
.caret { display: inline-block; width: 7px; height: 1em; background: var(--blue-deep); vertical-align: -2px; }
.legal__title { font-family: var(--mono); font-weight: 500; letter-spacing: -0.02em; line-height: 1.12; font-size: clamp(1.7rem, 1.2rem + 2.2vw, 2.7rem); margin: 0; max-width: 22ch; color: var(--ink); }
.legal__org { font-size: .92rem; color: var(--ink-2); margin: 1.1rem 0 .2rem; }
.legal__date { font-size: .8rem; letter-spacing: .03em; color: var(--ink-2); opacity: .8; margin: 0; }
.legal__intro { margin-top: 1.8rem; }
.legal__intro p { font-size: .98rem; line-height: 1.7; color: var(--ink); margin: 0 0 1rem; }
.legal__intro p:last-child { margin-bottom: 0; }

/* ── table of contents ── */
.legal__toc { margin-top: 2rem; display: flex; flex-direction: column; gap: .2rem; border: 1px solid var(--hairline); border-left: 2px solid var(--blue); padding: 1rem 1.2rem; background: var(--blue-tint); }
.legal__toc a { display: flex; align-items: baseline; gap: .6rem; font-family: var(--mono); font-size: .88rem; color: var(--ink); padding: .4rem 0; }
.legal__toc a .ar { color: var(--blue-deep); transition: transform .25s ease; }
.legal__toc a:hover { color: var(--blue-deep); }
.legal__toc a:hover .ar { transform: translateX(4px); }

/* ── parts / articles ── */
.legal__part { scroll-margin-top: 120px; margin-top: clamp(2.8rem, 6vw, 4.5rem); }
.legal__part-title { font-family: var(--mono); font-weight: 500; letter-spacing: -0.01em; font-size: clamp(1.2rem, 1rem + 1vw, 1.6rem); color: var(--ink); margin: 0; padding-bottom: .9rem; border-bottom: 1px solid var(--ink); }
.legal__part-intro { margin-top: 1.4rem; }
.legal__part-intro p { font-size: .95rem; line-height: 1.7; color: var(--ink-2); margin: 0 0 1rem; }

.legal__article { margin-top: 2rem; }
.legal__article-title { font-family: var(--mono); font-weight: 500; font-size: 1.02rem; letter-spacing: -0.01em; color: var(--blue-deep); margin: 0 0 .7rem; }
.legal__p { font-size: .95rem; line-height: 1.72; color: var(--ink); margin: 0 0 .95rem; }
.legal__p:last-child { margin-bottom: 0; }

.legal__list { margin: 0 0 .95rem; padding: 0; list-style: none; }
.legal__list li { position: relative; padding-left: 1.4rem; font-size: .95rem; line-height: 1.72; color: var(--ink); margin-bottom: .55rem; }
.legal__list li::before { content: "—"; position: absolute; left: 0; top: 0; color: var(--blue); }
.legal__list li:last-child { margin-bottom: 0; }

/* ── closing ── */
.legal__closing { margin-top: clamp(2.8rem, 6vw, 4.5rem); padding-top: 1.6rem; border-top: 1px solid var(--hairline); font-size: .86rem; line-height: 1.7; color: var(--ink-2); }

@media (max-width: 680px) {
  .legal__title { max-width: none; }
}
</style>

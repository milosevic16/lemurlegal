<template>
<main id="main" class="article" :class="post ? 'article--' + meta.cls : ''">
  <div class="container article__wrap">
    <a class="article__back" href="/blog"><span aria-hidden="true">←</span> All briefings</a>

    <!-- Loaded article -->
    <template v-if="post">
      <header class="article__head">
        <div class="sec-meta">
          <span class="mark">{{ meta.label }}</span>
          <span class="coord">{{ meta.coord }}</span>
        </div>
        <span class="article__cat"><span class="l"></span>{{ post.category }}</span>
        <h1 class="article__title">{{ post.title }}</h1>
        <p class="article__lead">{{ post.summary }}</p>
        <div class="article__meta">
          <span class="article__av">{{ post.authorInitials }}</span>
          <span class="article__author">{{ post.author }}</span>
          <time class="article__date" :datetime="post.publishDate">{{ dateLabel }}</time>
        </div>
      </header>

      <img
        v-if="post.coverImageUrl"
        class="article__cover"
        :src="post.coverImageUrl"
        :alt="post.coverImageAlt"
      />

      <!-- eslint-disable-next-line vue/no-v-html -->
      <article class="article__body" v-html="post.bodyHtml"></article>

      <div class="article__cta">
        <a class="action" href="/contact">Have a question like this? Book a consultation <span class="arrow">→</span></a>
      </div>
    </template>

    <!-- Loading -->
    <div v-else-if="loading" class="article__state">
      <p class="article__state-line">Loading…</p>
    </div>

    <!-- Not found -->
    <div v-else class="article__state">
      <h1 class="article__title">Post not found</h1>
      <p class="article__lead">We couldn't find that article. It may have been moved or unpublished.</p>
      <a class="action" href="/blog">Back to the blog <span class="arrow">→</span></a>
    </div>
  </div>
</main>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { applyBlogTheme } from '@/composables/blogTheme'
import { fetchPostBySlug, sectionMeta, formatDate, type BlogPost } from '@/lib/contentful'

const route = useRoute()
const post = ref<BlogPost | null>(null)
const loading = ref(true)

const meta = computed(() => sectionMeta(post.value?.section ?? 'crypto'))
const dateLabel = computed(() => (post.value ? formatDate(post.value.publishDate) : ''))

async function load(slug: string): Promise<void> {
  loading.value = true
  post.value = null
  try {
    post.value = await fetchPostBySlug(slug)
  } catch (e) {
    console.error('[blog] failed to load post', e)
    post.value = null
  } finally {
    loading.value = false
    document.title = post.value
      ? `${post.value.title} — Lemur Legal`
      : 'Article not found — Lemur Legal'
  }
}

onMounted(() => {
  applyBlogTheme()
  load(String(route.params.slug))
})

// The router reuses this component when navigating between two articles, so
// onMounted won't fire again — refetch on slug change.
watch(
  () => route.params.slug,
  (slug) => {
    if (slug) load(String(slug))
  },
)
</script>

<style scoped>
a{ color:inherit; }
:focus-visible{ outline:2px solid var(--sig); outline-offset:3px; }

.article{ background:var(--paper); }
/* Per-section accent, mirrors the card colours. */
.article--b{ --accent:var(--blue); --accent-deep:var(--blue-deep); }
.article--g{ --accent:#1FC49A; --accent-deep:#137A5F; }
.article--o{ --accent:#C8772E; --accent-deep:#9E5A1E; }

.article__wrap{ padding-top:clamp(2rem,5vw,3.5rem); padding-bottom:var(--section-y); }

.article__back{ display:inline-flex; align-items:center; gap:.5rem; font-family:var(--mono); font-size:.72rem; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-2); text-decoration:none; transition:color .2s ease; }
.article__back:hover{ color:var(--ink); }

.article__head{ max-width:72ch; margin-top:2.2rem; padding-bottom:1.8rem; border-bottom:1px solid var(--hairline); }
.sec-meta{ display:flex; justify-content:space-between; align-items:center; gap:1rem; font-family:var(--mono); font-size:.7rem; color:var(--ink-2); letter-spacing:.04em; margin-bottom:1.4rem; }
.sec-meta .mark{ color:var(--ink); }
.sec-meta .coord{ opacity:.7; white-space:nowrap; }
@media (max-width:560px){ .sec-meta .coord{ display:none; } }

.article__cat{ font-family:var(--mono); font-size:.64rem; letter-spacing:.14em; text-transform:uppercase; color:var(--accent-deep,var(--blue-deep)); display:inline-flex; align-items:center; gap:.45rem; margin-bottom:1rem; }
.article__cat .l{ width:5px; height:5px; border-radius:50%; background:currentColor; }
.article__title{ font-family:var(--serif); font-weight:400; font-size:clamp(1.9rem,1.3rem + 2.4vw,3rem); line-height:1.1; letter-spacing:-0.02em; color:var(--ink); margin:0 0 1rem; }
.article__lead{ font-family:var(--serif); font-style:italic; font-size:1.15rem; line-height:1.6; color:var(--ink-2); margin:0; max-width:60ch; }
.article__meta{ display:flex; align-items:center; gap:.6rem; margin-top:1.6rem; }
.article__av{ width:32px; height:32px; border-radius:50%; background:var(--ink); color:var(--term-cyan); display:flex; align-items:center; justify-content:center; font-family:var(--mono); font-size:.6rem; font-weight:500; flex-shrink:0; letter-spacing:.02em; }
.article__author{ font-family:var(--mono); font-size:.78rem; color:var(--ink); }
.article__date{ font-family:var(--mono); font-size:.72rem; color:var(--ink-2); margin-left:auto; letter-spacing:.03em; }

.article__cover{ display:block; width:100%; max-width:72ch; aspect-ratio:16/9; object-fit:cover; margin:2.2rem 0 0; border:1px solid var(--hairline); background:var(--term-bg); }

.article__body{ max-width:72ch; margin-top:2.2rem; font-family:var(--serif); color:var(--ink); font-size:1.06rem; line-height:1.75; }
.article__body :deep(p){ margin:0 0 1.2rem; }
.article__body :deep(h2){ font-family:var(--serif); font-weight:500; font-size:1.5rem; letter-spacing:-.01em; line-height:1.25; margin:2.4rem 0 1rem; color:var(--ink); }
.article__body :deep(h3){ font-family:var(--serif); font-weight:500; font-size:1.22rem; margin:2rem 0 .8rem; color:var(--ink); }
.article__body :deep(ul),.article__body :deep(ol){ margin:0 0 1.2rem; padding-left:1.3rem; }
.article__body :deep(ul){ list-style:disc; }
.article__body :deep(ol){ list-style:decimal; }
.article__body :deep(li){ margin:.35rem 0; }
.article__body :deep(li p){ margin:0; }
.article__body :deep(a){ color:var(--accent-deep,var(--blue-deep)); border-bottom:1px solid var(--accent,var(--blue)); text-decoration:none; }
.article__body :deep(strong),.article__body :deep(b){ font-weight:600; color:var(--ink); }
.article__body :deep(em),.article__body :deep(i){ font-style:italic; }
.article__body :deep(blockquote){ margin:1.6rem 0; padding-left:1.1rem; border-left:2px solid var(--accent,var(--blue)); color:var(--ink-2); font-style:italic; }
.article__body :deep(hr){ border:0; border-top:1px solid var(--hairline); margin:2rem 0; }
.article__body :deep(img){ display:block; max-width:100%; height:auto; margin:1.8rem 0; border:1px solid var(--hairline); }

.article__cta{ max-width:72ch; margin-top:2.6rem; padding-top:1.8rem; border-top:1px solid var(--hairline); }

.article__state{ max-width:72ch; margin-top:2.6rem; }
.article__state-line{ font-family:var(--mono); font-size:.85rem; color:var(--ink-2); }

.action{ text-decoration:none; font-weight:500; font-size:1rem; border-bottom:1px solid var(--accent,var(--blue)); padding-bottom:3px; color:var(--accent-deep,var(--blue-deep)); display:inline-flex; align-items:center; gap:.5rem; }
.action .arrow{ display:inline-block; transition:transform .3s ease; }
.action:hover .arrow{ transform:translateX(5px); }
</style>

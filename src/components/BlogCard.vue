<template>
  <a
    class="blog-card"
    :class="'blog-card--' + meta.cls"
    data-anim="reveal"
    :href="'/blog/' + post.slug"
  >
    <img class="blog-card__img" :alt="post.coverImageAlt" :src="coverSrc" />
    <div class="blog-card__body">
      <span class="blog-card__cat"><span class="l"></span>{{ post.category }}</span>
      <h3 class="blog-card__title">{{ post.title }}</h3>
      <p class="blog-card__sum">{{ post.summary }}</p>
      <div class="blog-card__meta">
        <span class="blog-card__av">{{ post.authorInitials }}</span>
        <span class="blog-card__author">{{ post.author }}</span>
        <time class="blog-card__date" :datetime="post.publishDate">{{ dateLabel }}</time>
      </div>
    </div>
    <span class="blog-card__go" aria-hidden="true">→</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type BlogPost, sectionMeta, placeholderCover, formatDate } from '@/lib/contentful'
import { locale } from '@/i18n/locale'

const props = defineProps<{ post: BlogPost }>()

const meta = computed(() => sectionMeta(props.post.section))
const coverSrc = computed(
  () => props.post.coverImageUrl || placeholderCover(props.post.section, props.post.category),
)
const dateLabel = computed(() => formatDate(props.post.publishDate, locale.value))
</script>

<style scoped>
/* Self-contained card styling (base + per-section variants), moved out of
   Blog.vue so it applies inside this component regardless of scope boundaries.
   Colours read from the global :root vars set by the blog theme. */
.blog-card {
  position: relative;
  /* Fixed-width item in the horizontal scroll track (Blog.vue .blog-grid). */
  flex: 0 0 auto;
  width: clamp(280px, 80vw, 340px);
  scroll-snap-align: start;
  background: #e7ece8;
  border: 1px solid var(--hairline);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}
.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 44px -24px rgba(26, 24, 38, 0.55);
  border-color: var(--blue);
}
.blog-card__img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid var(--hairline);
  background: var(--term-bg);
}
.blog-card__body {
  padding: 1.35rem 1.5rem 1.45rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.blog-card__cat {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue-deep);
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.45rem;
}
.blog-card__cat .l {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}
.blog-card__title {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 1.16rem;
  line-height: 1.26;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0 0 0.65rem;
}
.blog-card__sum {
  font-size: 0.89rem;
  color: var(--ink-2);
  line-height: 1.62;
  margin: 0 0 1.25rem;
  flex: 1;
}
.blog-card__meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--hairline);
}
.blog-card__av {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--term-cyan);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 0.58rem;
  font-weight: 500;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}
.blog-card__author {
  font-family: var(--mono);
  font-size: 0.74rem;
  color: var(--ink);
}
.blog-card__date {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-2);
  margin-left: auto;
  letter-spacing: 0.03em;
}
.blog-card__go {
  position: absolute;
  top: 0.85rem;
  right: 0.9rem;
  font-family: var(--mono);
  color: var(--sig);
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.blog-card:hover .blog-card__go {
  opacity: 1;
  transform: none;
}

/* Per-section accents (mirror the original .blog-section--{b,g,o} rules). */
.blog-card--b .blog-card__cat {
  color: var(--blue-deep);
}
.blog-card--b:hover {
  border-color: var(--blue);
}

.blog-card--g .blog-card__cat {
  color: #137a5f;
}
.blog-card--g:hover {
  border-color: #1fc49a;
}
.blog-card--g .blog-card__go {
  color: #1fc49a;
}
.blog-card--g .blog-card__av {
  color: #1fc49a;
}

.blog-card--o .blog-card__cat {
  color: #9e5a1e;
}
.blog-card--o:hover {
  border-color: #c8772e;
}
.blog-card--o .blog-card__go {
  color: #c8772e;
}
.blog-card--o .blog-card__av {
  color: #e8a33d;
}
</style>

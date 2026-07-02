<template>
  <a
    class="media-card"
    data-anim="reveal"
    :href="item.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img class="media-card__img" :alt="item.coverImageAlt" :src="coverSrc" />
    <div class="media-card__body">
      <span class="media-card__cat"><span class="l"></span>{{ item.outlet }}</span>
      <h3 class="media-card__title">{{ item.title }}</h3>
      <p class="media-card__sum">{{ item.summary }}</p>
      <div class="media-card__meta">
        <span v-if="item.authorInitials" class="media-card__av">{{ item.authorInitials }}</span>
        <span v-if="item.author" class="media-card__author">{{ item.author }}</span>
        <time class="media-card__date" :datetime="item.publishDate">{{ dateLabel }}</time>
      </div>
    </div>
    <span class="media-card__go" aria-hidden="true">↗</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type MediaItem, mediaCover, formatDate } from '@/lib/media'

const props = defineProps<{ item: MediaItem }>()

const coverSrc = computed(() => mediaCover(props.item))
const dateLabel = computed(() => formatDate(props.item.publishDate))
</script>

<style scoped>
/* Ported from BlogCard.vue — the media card is visually identical to the blog
   card, but always uses the blue (Baltic) accent (single-section page) and the
   whole card is an external link (↗). Colours read from the blog theme :root. */
.media-card {
  position: relative;
  /* Fills its grid track — MediaCoverage.vue .media-grid wraps cards (no scroll). */
  width: 100%;
  background: #e7ece8;
  border: 1px solid var(--hairline);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}
.media-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 44px -24px rgba(26, 24, 38, 0.55);
  border-color: var(--blue);
}
.media-card__img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid var(--hairline);
  background: var(--term-bg);
}
.media-card__body {
  padding: 1.35rem 1.5rem 1.45rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.media-card__cat {
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
.media-card__cat .l {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}
.media-card__title {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 1.16rem;
  line-height: 1.26;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 0 0 0.65rem;
}
.media-card__sum {
  font-size: 0.89rem;
  color: var(--ink-2);
  line-height: 1.62;
  margin: 0 0 1.25rem;
  flex: 1;
}
.media-card__meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--hairline);
}
.media-card__av {
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
.media-card__author {
  font-family: var(--mono);
  font-size: 0.74rem;
  color: var(--ink);
}
.media-card__date {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-2);
  margin-left: auto;
  letter-spacing: 0.03em;
}
.media-card__go {
  position: absolute;
  top: 0.85rem;
  right: 0.9rem;
  font-family: var(--mono);
  color: var(--sig);
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.media-card:hover .media-card__go {
  opacity: 1;
  transform: none;
}
</style>

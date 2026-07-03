<template>
  <a
    class="media-card"
    :class="'media-card--' + cls"
    data-anim="reveal"
    :href="item.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img class="media-card__img" :alt="item.coverImageAlt" :src="coverSrc" />
    <div class="media-card__body">
      <div class="media-card__top">
        <span class="media-card__cat"><span class="l"></span>{{ item.outlet }}</span>
        <time class="media-card__date" :datetime="item.publishDate">{{ dateLabel }}</time>
      </div>
      <h3 class="media-card__title">{{ item.title }}</h3>
      <p class="media-card__sum">{{ item.summary }}</p>
      <div class="media-card__foot">
        <span v-if="item.author" class="media-card__author">
          <span v-if="item.authorInitials" class="media-card__av">{{ item.authorInitials }}</span>{{ item.author }}
        </span>
        <span class="media-card__more">{{ cta }} <span class="media-card__go" aria-hidden="true">↗</span></span>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type MediaItem, mediaCover, mediaSectionMeta, formatDate } from '@/lib/media'
import { locale } from '@/i18n/locale'

const props = defineProps<{ item: MediaItem; cta?: string }>()

const cls = computed(() => mediaSectionMeta(props.item.section).cls)
const coverSrc = computed(() => mediaCover(props.item))
const dateLabel = computed(() => formatDate(props.item.publishDate, locale.value))
</script>

<style scoped>
/* Ported from BlogCard.vue — the media card is an external link (↗) whose accent
   is one of three shades of the signature mint, keyed to the item's category.
   Unlike the blog card, the outlet and date sit together on one line above the
   title, and each card carries a visible read-more CTA (its label depends on the
   category: Listen / Watch / Read more). Colours read from the blog theme :root. */
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
/* Outlet + date on one line (e.g. "Oddaja KODA, RTV" · "11. februar 2020"). */
.media-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  margin-bottom: 0.7rem;
}
.media-card__cat {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-width: 0;
}
.media-card__cat .l {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}
.media-card__date {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-2);
  letter-spacing: 0.03em;
  white-space: nowrap;
  flex-shrink: 0;
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
.media-card__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--hairline);
}
.media-card__author {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--ink);
  min-width: 0;
}
.media-card__av {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 0.58rem;
  font-weight: 500;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}
/* Visible read-more CTA — always shown, accent-coloured per category. */
.media-card__more {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  margin-left: auto;
}
.media-card__go {
  display: inline-block;
  transition: transform 0.25s ease;
}
.media-card:hover .media-card__go {
  transform: translate(3px, -3px);
}

/* Per-category mint shades (light → deep). */
.media-card--m1 .media-card__cat,
.media-card--m1 .media-card__more { color: #1FA080; }
.media-card--m1:hover { border-color: #3FD9B0; }
.media-card--m1 .media-card__av { color: #3FD9B0; }

.media-card--m2 .media-card__cat,
.media-card--m2 .media-card__more { color: #17967A; }
.media-card--m2:hover { border-color: #1FC49A; }
.media-card--m2 .media-card__av { color: #1FC49A; }

.media-card--m3 .media-card__cat,
.media-card--m3 .media-card__more { color: #1C6349; }
.media-card--m3:hover { border-color: #2A8A66; }
.media-card--m3 .media-card__av { color: #7FD6B6; }
</style>

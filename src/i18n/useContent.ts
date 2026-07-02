import { computed, type ComputedRef } from 'vue'
import { locale } from './locale'
import type { Bilingual } from '@/content/types'

/**
 * Returns a computed slice of a bilingual `{ en, sl }` content object for the
 * active locale. In a template the returned ref auto-unwraps, so you can write
 * `t.hero.kicker`; in `<script>` use `t.value`.
 */
export function usePageContent<T>(content: Bilingual<T>): ComputedRef<T> {
  return computed(() => content[locale.value])
}

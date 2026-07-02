// @ts-nocheck
// Chrome-only effects for the Terms of Use / Privacy Policy page. The site's
// fixed-header spacer sizing and mobile-menu toggle live in each view's effects,
// so this hand-written page needs them too (a legal page has no other scripts).
// Listeners route through the tracker so they tear down on route change.
import { createTracker } from '@/composables/tracker'

export function initEffects(): () => void {
  const __fx = createTracker()
  const setTimeout = __fx.setTimeout
  try {
    /* smart header — fixed position, hide on scroll down, show on scroll up */
    (function () {
      var head = document.getElementById('site-head'); if (!head) return
      var spacer = document.getElementById('site-head-spacer')

      /* size spacer to header so content isn't covered by the fixed bar */
      function sizeSpacer() { if (spacer) spacer.style.height = head.offsetHeight + 'px' }
      sizeSpacer()
      __fx.on(window, 'resize', sizeSpacer, { passive: true })
      setTimeout(sizeSpacer, 300) /* after fonts settle */

      var lastY = window.scrollY || 0, upAcc = 0, hidden = false
      __fx.on(window, 'scroll', function () {
        var y = window.scrollY || document.documentElement.scrollTop || 0
        var dy = y - lastY
        lastY = y
        if (dy > 0) {
          upAcc = 0
          if (!hidden && y > 80) { hidden = true; head.style.transform = 'translateY(-100%)' }
        } else if (dy < 0) {
          upAcc += -dy
          if (hidden && upAcc >= 40) { hidden = false; upAcc = 0; head.style.transform = 'translateY(0)' }
        }
      }, { passive: true })
    })();

    /* mobile menu toggle */
    (function () {
      var btn = document.querySelector('.nav-toggle')
      var menu = document.getElementById('mobile-menu')
      if (!btn || !menu) return
      function setOpen(open) {
        btn.setAttribute('aria-expanded', open ? 'true' : 'false')
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
        menu.classList.toggle('open', open)
      }
      __fx.on(btn, 'click', function () {
        setOpen(btn.getAttribute('aria-expanded') !== 'true')
      })
      __fx.on(menu, 'click', function (e) { if (e.target.tagName === 'A') setOpen(false) })
      __fx.on(window, 'resize', function () { if (window.innerWidth > 860) setOpen(false) }, { passive: true })
    })();
  } catch (e) { console.error('[effects] init failed', e) }
  return __fx.dispose
}

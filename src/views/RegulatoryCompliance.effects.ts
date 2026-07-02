// @ts-nocheck
// AUTO-GENERATED from the original standalone page script by tools/extract.py.
// Timers / listeners / observers / animations are routed through a tracker so
// they tear down on route change. Edit the extractor, not this file.
import { createTracker } from '@/composables/tracker'

export function initEffects(): () => void {
  const __fx = createTracker()
  const requestAnimationFrame = __fx.raf
  const cancelAnimationFrame = __fx.caf
  const setTimeout = __fx.setTimeout
  const clearTimeout = __fx.clearTimeout
  const setInterval = __fx.setInterval
  const clearInterval = __fx.clearInterval
  const IntersectionObserver = __fx.IO
  try {

        (() => {
          const root = document.querySelector('[data-ht="mica"]');
          if (!root) return;
          const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          const WAAPI = !!(window.Element && Element.prototype.animate);
          const TAU = Math.PI * 2;
          const q = (sel, ctx) => Array.prototype.slice.call((ctx || root).querySelectorAll(sel));

          /* 1. HERO MESH — guilloché engraving + drifting data motes */
          (() => {
            const cv = root.querySelector('[data-ht-mesh]');
            if (!cv || !cv.getContext || reduce) return;
            const host = cv.parentElement, ctx = cv.getContext('2d');
            let W = 0, H = 0, phase = 0, motes = [], wires = [];
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const R = (a, b) => a + Math.random() * (b - a);
            const seed = () => {
              motes = []; wires = [];
              const n = Math.round(Math.min(34, W / 30));
              for (let i = 0; i < n; i++) motes.push({ x: R(0, W), y: R(0, H), r: R(0.4, 1.3), vy: R(0.05, 0.2), a: R(0.05, 0.18) });
              for (let j = 0; j < 3; j++) wires.push({ y: R(0.15, 0.85) * H, amp: R(6, 18), k: R(0.006, 0.014), sp: R(0.0008, 0.0018) * (Math.random() > 0.5 ? 1 : -1), ph: R(0, 6.28), a: R(0.03, 0.07) });
            };
            const rosette = (cx, cy, s, Rr, rr, d, turns, ph, a, col) => {
              ctx.beginPath();
              const steps = 520, k = (Rr - rr) / rr;
              for (let i = 0; i <= steps; i++) {
                const t = i / steps * TAU * turns;
                const x = cx + s * ((Rr - rr) * Math.cos(t) + d * Math.cos(k * t + ph));
                const y = cy + s * ((Rr - rr) * Math.sin(t) - d * Math.sin(k * t + ph));
                if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
              }
              ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = 0.6; ctx.stroke(); ctx.globalAlpha = 1;
            };
            const size = () => {
              const r = host.getBoundingClientRect(); W = r.width; H = r.height;
              cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
              ctx.setTransform(dpr, 0, 0, dpr, 0, 0); seed();
            };
            const frame = () => {
              ctx.clearRect(0, 0, W, H);
              const base = Math.min(W, H);
              rosette(W * 0.72, H * 0.42, base / 16, 5, 3, 2.6, 3, phase, 0.06, 'rgba(127,89,245,1)');
              rosette(W * 0.80, H * 0.66, base / 30, 8, 5, 3.0, 5, -phase * 1.4, 0.05, 'rgba(168,139,255,1)');
              rosette(W * 0.22, H * 0.74, base / 40, 7, 4, 3.2, 4, phase * 0.8, 0.035, 'rgba(45,91,255,1)');
              phase += 0.0011;
              for (const L of wires) {
                L.ph += L.sp; ctx.beginPath();
                for (let x = 0; x <= W; x += 8) { const y = L.y + Math.sin(x * L.k + L.ph) * L.amp; if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
                ctx.globalAlpha = L.a; ctx.strokeStyle = 'rgba(127,89,245,1)'; ctx.lineWidth = 0.7; ctx.stroke(); ctx.globalAlpha = 1;
              }
              for (const mo of motes) {
                mo.y -= mo.vy; if (mo.y < -3) { mo.y = H + 3; mo.x = R(0, W); }
                ctx.globalAlpha = mo.a; ctx.fillStyle = 'rgba(127,89,245,1)';
                ctx.beginPath(); ctx.arc(mo.x, mo.y, mo.r, 0, TAU); ctx.fill(); ctx.globalAlpha = 1;
              }
              requestAnimationFrame(frame);
            };
            size(); __fx.on(window, 'resize', size); frame();
          })();

          /* 2. BLINKING CARETS — data-ht-blink */
          (() => {
            const els = q('[data-ht-blink]');
            if (!els.length || reduce) return;
            const t0 = performance.now();
            const tick = (now) => {
              const e = now - t0;
              for (const el of els) el.style.opacity = (e % 1060) < 530 ? '1' : '0.12';
              requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          })();

          /* 3. HEX ROW DRIFT — data-ht-hexrow */
          (() => {
            if (!WAAPI || reduce) return;
            q('[data-ht-hexrow]').forEach((el) => {
              const orig = el.textContent;
              el.textContent = orig + '   ' + orig + '   ' + orig;
              __fx.anim(el, [{ transform: 'translateX(0)' }, { transform: 'translateX(-33.33%)' }], { duration: 22000, iterations: Infinity, easing: 'linear' });
            });
          })();

          /* 4. SEAL — slow ring spin + check draw-in */
          (() => {
            if (!WAAPI || reduce) return;
            q('[data-ht-seal-spin]').forEach((g) => {
              try { g.style.transformOrigin = '120px 120px'; g.style.transformBox = 'fill-box'; } catch (e) {}
              __fx.anim(g, [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 60000, iterations: Infinity, easing: 'linear' });
            });
            q('[data-ht-seal-check]').forEach((p) => {
              try {
                const len = p.getTotalLength();
                p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
                __fx.anim(p, [{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: 1100, delay: 600, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' });
              } catch (e) {}
            });
          })();

          /* 5. SCROLL REVEALS — data-ht-reveal (initial hidden state set by JS, never CSS) */
          (() => {
            const targets = q('[data-ht-reveal]');
            if (!targets.length) return;
            if (reduce || !WAAPI || !('IntersectionObserver' in window)) {
              targets.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
              return;
            }
            targets.forEach((el) => { el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; });
            const io = new IntersectionObserver((entries) => {
              entries.forEach((en) => {
                if (!en.isIntersecting) return;
                const el = en.target;
                __fx.anim(el, [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 680, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' });
                io.unobserve(el);
              });
            }, { rootMargin: '0px 0px -8% 0px', threshold: 0.16 });
            targets.forEach((el) => io.observe(el));
          })();

          /* 6. HERO TITLE GLITCH — data-ht-glitch, WAAPI overlays */
          (() => {
            if (!WAAPI || reduce) return;
            q('[data-ht-glitch]').forEach((el) => {
              el.style.position = 'relative';
              el.style.display = 'inline-block';
              const mk = (col) => {
                const ov = document.createElement('span');
                ov.setAttribute('aria-hidden', 'true');
                ov.textContent = el.getAttribute('data-ht-glitch-text') || el.textContent;
                ov.style.cssText = 'position:absolute;top:0;left:0;width:100%;pointer-events:none;opacity:0;font:inherit;letter-spacing:inherit;line-height:inherit;color:' + col + ';';
                el.appendChild(ov);
                return ov;
              };
              const ov1 = mk('#7F59F5'), ov2 = mk('#A88BFF');
              const cycle = () => {
                const period = 3600;
                setTimeout(() => {
                  __fx.anim(ov1, [
                    { opacity: 0, transform: 'none', clipPath: 'none' },
                    { opacity: 0.8, transform: 'translateX(-3px)', clipPath: 'polygon(0 22%,100% 22%,100% 44%,0 44%)' },
                    { opacity: 0, offset: 0.3 },
                    { opacity: 0.6, transform: 'translateX(2px)', clipPath: 'polygon(0 60%,100% 60%,100% 78%,0 78%)', offset: 0.55 },
                    { opacity: 0, offset: 0.75 },
                    { opacity: 0.5, transform: 'translateX(-2px)', clipPath: 'polygon(0 10%,100% 10%,100% 28%,0 28%)', offset: 0.88 },
                    { opacity: 0, transform: 'none', clipPath: 'none' }
                  ], { duration: 360, easing: 'steps(3,end)' });
                  setTimeout(() => {
                    __fx.anim(ov2, [
                      { opacity: 0, transform: 'none', clipPath: 'none' },
                      { opacity: 0.7, transform: 'translateX(3px)', clipPath: 'polygon(0 48%,100% 48%,100% 68%,0 68%)' },
                      { opacity: 0, offset: 0.3 },
                      { opacity: 0.5, transform: 'translateX(-2px)', clipPath: 'polygon(0 12%,100% 12%,100% 32%,0 32%)', offset: 0.6 },
                      { opacity: 0, transform: 'none', clipPath: 'none' }
                    ], { duration: 360, easing: 'steps(3,end)' });
                  }, 120);
                  setTimeout(cycle, period + Math.random() * period * 0.5);
                }, period * 0.7);
              };
              cycle();
            });
          })();

          /* 7. FAQ ACCORDION — data-ht-accordion-toggle, WAAPI height/opacity */
          (() => {
            q('[data-ht-accordion-toggle]').forEach((btn) => {
              const panel = btn.nextElementSibling;
              if (!panel) return;
              const plus = btn.querySelector('[data-ht="mica__faq-pl"]');
              __fx.on(btn, 'click', () => {
                const open = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', String(!open));
                if (open) {
                  if (WAAPI && !reduce) {
                    const h = panel.scrollHeight;
                    const anim = __fx.anim(panel, [{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 280, easing: 'ease' });
                    anim.onfinish = () => { panel.setAttribute('data-state', 'closed'); panel.setAttribute('aria-hidden', 'true'); panel.style.height = ''; panel.style.opacity = ''; panel.style.overflow = ''; };
                  } else { panel.setAttribute('data-state', 'closed'); panel.setAttribute('aria-hidden', 'true'); }
                  if (plus) plus.textContent = '+';
                } else {
                  panel.setAttribute('data-state', 'open');
                  panel.setAttribute('aria-hidden', 'false');
                  if (WAAPI && !reduce) {
                    panel.style.overflow = 'hidden';
                    const h = panel.scrollHeight;
                    const anim = __fx.anim(panel, [{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' });
                    anim.onfinish = () => { panel.style.height = ''; panel.style.opacity = ''; panel.style.overflow = ''; };
                  }
                  if (plus) plus.textContent = '\u2212';
                }
              });
            });
          })();

          /* 8. FORM CHIPS — data-ht-chip toggle via data-state */
          (() => {
            q('[data-ht-chip]').forEach((chip) => {
              __fx.on(chip, 'click', () => {
                chip.setAttribute('data-state', chip.getAttribute('data-state') === 'on' ? 'off' : 'on');
              });
            });
          })();

          /* 9. CROSS-CARD HOVER RAIL — data-ht-cross, WAAPI scanline */
          (() => {
            if (!WAAPI || reduce) return;
            q('[data-ht-cross]').forEach((card) => {
              const rail = document.createElement('span');
              rail.setAttribute('aria-hidden', 'true');
              rail.style.cssText = 'position:absolute;left:0;top:0;height:2px;width:0;background-image:linear-gradient(90deg,#7F59F5,transparent);opacity:0;pointer-events:none;z-index:2;';
              card.appendChild(rail);
              const arr = card.querySelector('[data-ht="mica__arr"]');
              __fx.on(card, 'mouseenter', () => {
                __fx.anim(rail, [{ width: '0px', opacity: 0.6 }, { width: '120px', opacity: 0.5 }], { duration: 480, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' });
                if (arr) __fx.anim(arr, [{ transform: 'translateX(0)' }, { transform: 'translateX(5px)' }], { duration: 300, easing: 'ease', fill: 'forwards' });
              });
              __fx.on(card, 'mouseleave', () => {
                __fx.anim(rail, [{ width: '120px' }, { width: '0px' }], { duration: 320, easing: 'ease', fill: 'forwards' });
                if (arr) __fx.anim(arr, [{ transform: 'translateX(5px)' }, { transform: 'translateX(0)' }], { duration: 300, easing: 'ease', fill: 'forwards' });
              });
            });
          })();

          /* 10. BUTTON ARROW NUDGE — data-ht="mica__btn" */
          (() => {
            if (!WAAPI || reduce) return;
            q('[data-ht="mica__btn"]').forEach((btn) => {
              const arr = btn.querySelector('[data-ht="mica__btn-arrow"]');
              if (!arr) return;
              __fx.on(btn, 'mouseenter', () => __fx.anim(arr, [{ transform: 'translateX(0)' }, { transform: 'translateX(4px)' }], { duration: 260, easing: 'ease', fill: 'forwards' }));
              __fx.on(btn, 'mouseleave', () => __fx.anim(arr, [{ transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 260, easing: 'ease', fill: 'forwards' }));
            });
          })();

        })();


    (function(){
      "use strict";
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      (function(){
        var head=document.getElementById('site-head'); if(!head) return;
        var spacer=document.getElementById('site-head-spacer');
        function sizeSpacer(){ if(spacer) spacer.style.height=head.offsetHeight+'px'; }
        sizeSpacer(); __fx.on(window, 'resize',sizeSpacer,{passive:true}); setTimeout(sizeSpacer,300);
        var lastY=window.scrollY||0, upAcc=0, hidden=false;
        __fx.on(window, 'scroll',function(){
          var y=window.scrollY||document.documentElement.scrollTop||0; var dy=y-lastY; lastY=y;
          if(dy>0){ upAcc=0; if(!hidden&&y>80){ hidden=true; head.style.transform='translateY(-100%)'; } }
          else if(dy<0){ upAcc+=-dy; if(hidden&&upAcc>=40){ hidden=false; upAcc=0; head.style.transform='translateY(0)'; } }
        },{passive:true});
      })();
      (function(){
        var btn=document.querySelector('.nav-toggle'); var menu=document.getElementById('mobile-menu'); if(!btn||!menu) return;
        function setOpen(open){ btn.setAttribute('aria-expanded',open?'true':'false'); btn.setAttribute('aria-label',open?'Close menu':'Open menu'); menu.classList.toggle('open',open); }
        __fx.on(btn, 'click',function(){ setOpen(btn.getAttribute('aria-expanded')!=='true'); });
        __fx.on(menu, 'click',function(e){ if(e.target.tagName==='A') setOpen(false); });
        __fx.on(window, 'resize',function(){ if(window.innerWidth>1200) setOpen(false); },{passive:true});
      })();
      (function(){
        var els=document.querySelectorAll('.js-mail');
        for(var i=0;i<els.length;i++){ var el=els[i], u=el.getAttribute('data-u'), d=el.getAttribute('data-d'); if(!u||!d) continue; var addr=u+'@'+d; el.textContent=addr; if(el.tagName==='A') el.setAttribute('href','mailto:'+addr); }
      })();
      if(reduce) return; if(!(window.Element&&Element.prototype.animate)) return;
      [].slice.call(document.querySelectorAll('#site-head [data-anim="blink"]')).forEach(function(el){
        __fx.anim(el, [{opacity:1,offset:0},{opacity:1,offset:.49},{opacity:.14,offset:.5},{opacity:.14,offset:1}],{duration:1400,iterations:Infinity});
      });
      [].slice.call(document.querySelectorAll('#site-head [data-anim="marquee"]')).forEach(function(tr){
        __fx.anim(tr, [{transform:'translateX(0)'},{transform:'translateX(-50%)'}],{duration:46000,iterations:Infinity,easing:'linear'});
      });
      [].slice.call(document.querySelectorAll('[data-anim="seam"]')).forEach(function(s,i){
        __fx.anim(s, [{left:'-26%',opacity:0,offset:0},{opacity:0,offset:0.72},{opacity:0.7,offset:0.8},{left:'112%',opacity:0,offset:1}],{duration:9000,iterations:Infinity,easing:'cubic-bezier(.4,0,.2,1)',delay:i*3000});
      });
    })();


    (function(){
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!(window.Element && Element.prototype.animate)) return;
      [].slice.call(document.querySelectorAll('.mica__why-grid .mica__why')).forEach(function(card,i){
        card.style.position='relative'; card.style.overflow='hidden';
        var scan=document.createElement('span'); scan.className='why__scan'; card.appendChild(scan);
        __fx.anim(scan, [{transform:'translateY(-120%)',opacity:0},{opacity:1,offset:0.5},{transform:'translateY(320%)',opacity:0}],{duration:3600,delay:i*900,iterations:Infinity,easing:'ease-in-out'});
      });
    })();
  } catch (e) { console.error('[effects] init failed', e) }
  return __fx.dispose
}

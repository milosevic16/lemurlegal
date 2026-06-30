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

    (function(){
      "use strict";
      var $ = function(sel, root){ return [].slice.call((root||document).querySelectorAll(sel)); };
      var WAAPI = !!(window.Element && Element.prototype.animate);
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      /* ---- 1. BLINK (carets, status dots) — rAF, opacity set inline ---- */
      (function(){
        var els = $('[data-anim="blink"]'); if(!els.length) return;
        els.forEach(function(el,i){ el.setAttribute('data-ph', (i*173)%700); });
        if (reduce){ els.forEach(function(el){ el.style.opacity='1'; }); return; }
        var t0 = performance.now();
        (function tick(now){
          var e = now - t0;
          for (var i=0;i<els.length;i++){
            var el = els[i];
            var period = el.classList.contains('caret') ? 1060 : 700;
            var ph = +el.getAttribute('data-ph') || 0;
            el.style.opacity = ((e+ph)%period) < period*0.5 ? '1' : '0.14';
          }
          requestAnimationFrame(tick);
        })(t0);
      })();

      if (reduce) return; /* honour reduced-motion: stop after static state */
      if (!WAAPI) return;

      /* ---- 2. MARQUEE wire ---- */
      $('[data-anim="marquee"]').forEach(function(tr){
        __fx.anim(tr, [{transform:'translateX(0)'},{transform:'translateX(-50%)'}],
          {duration:46000, iterations:Infinity, easing:'linear'});
      });

      /* ---- 3. HEXROW scroll ---- */
      $('[data-anim="hexrow"]').forEach(function(el){
        var orig = el.textContent;
        el.textContent = orig + '   ' + orig + '   ' + orig;
        el.style.opacity = '0.3';
        __fx.anim(el, [{transform:'translateX(0)'},{transform:'translateX(-33.33%)'}],
          {duration:22000, iterations:Infinity, easing:'linear'});
      });

      /* ---- 4. SEAM sweep ---- */
      $('[data-anim="seam"]').forEach(function(s,i){
        __fx.anim(s, [
          {left:'-26%', opacity:0, offset:0},
          {opacity:0, offset:0.72},
          {opacity:0.7, offset:0.8},
          {left:'112%', opacity:0, offset:1}
        ], {duration:9000, iterations:Infinity, easing:'cubic-bezier(.4,0,.2,1)', delay:i*3000});
      });

      /* ---- 5. NODE DOT pulse (glow) ---- */
      $('[data-anim="nd"]').forEach(function(el,i){
        var c = el.getAttribute('data-nd-color') || '#C8772E';
        __fx.anim(el, [
          {boxShadow:'0 0 2px '+c},{boxShadow:'0 0 9px '+c},{boxShadow:'0 0 2px '+c}
        ], {duration:2000, delay:i*300, iterations:Infinity, easing:'ease'});
      });

      /* ---- 6. CYBERLINE pulse (element fully built + animated in JS) ---- */
      $('[data-anim="cpulse"]').forEach(function(el){
        el.style.cssText = 'position:absolute;top:0;left:-40%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(200,119,46,.8),transparent);pointer-events:none;';
        __fx.anim(el, [
          {left:'-40%', opacity:0},{opacity:1, offset:.2},
          {opacity:1, offset:.8},{left:'140%', opacity:0}
        ], {duration:4000, iterations:Infinity, easing:'ease'});
      });

      /* ---- 7. MATTER-NODE pulse (travels along the trace) ---- */
      $('[data-anim="mpulse"]').forEach(function(el,i){
        el.style.opacity = '0';
        __fx.anim(el, [
          {left:'0', opacity:0},
          {left:'0', opacity:1, offset:.1},
          {left:'calc(100% - 18px)', opacity:.9, offset:.9},
          {left:'calc(100% - 18px)', opacity:0}
        ], {duration:2800, delay:i*1400, iterations:Infinity, easing:'ease'});
      });

      /* ---- 8. HERO SEAL — circular badge: rotor + counter-rotor + drawn check + pulse halo ---- */
      $('[data-anim="seal-rotor"]').forEach(function(g){
        g.style.transformOrigin = '120px 120px';
        __fx.anim(g, [{transform:'rotate(0deg)'},{transform:'rotate(360deg)'}],
          {duration:18000, iterations:Infinity, easing:'linear'});
      });
      $('[data-anim="seal-rotor2"]').forEach(function(g){
        g.style.transformOrigin = '120px 120px';
        __fx.anim(g, [{transform:'rotate(360deg)'},{transform:'rotate(0deg)'}],
          {duration:26000, iterations:Infinity, easing:'linear'});
      });
      $('[data-anim="seal-pulse"]').forEach(function(c){
        __fx.anim(c, [
          {opacity:0},{opacity:0.3, offset:.45},{opacity:0}
        ], {duration:3400, iterations:Infinity, easing:'ease-in-out'});
      });
      $('[data-anim="seal-check"]').forEach(function(p){
        try{
          var len = p.getTotalLength();
          p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
          var draw = __fx.anim(p, [{strokeDashoffset:len},{strokeDashoffset:0}],
            {duration:900, delay:700, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'});
          draw.onfinish = function(){
            __fx.anim(p, [{opacity:1},{opacity:.5},{opacity:1}],{duration:2800, iterations:Infinity, easing:'ease-in-out'});
          };
        }catch(e){}
      });

      /* ---- 8b. HOW-IT-WORKS TIMELINE — rail fill + sequential nodes + travelling pulse ---- */
      $('[data-anim="timeline"]').forEach(function(tl){
        var vertical = window.matchMedia('(max-width:680px)').matches;
        var fill  = tl.querySelector('[data-tl-fill]');
        var pulse = tl.querySelector('[data-tl-pulse]');
        var steps = $('[data-tl-step]', tl);

        /* initial hidden states set HERE in JS (never in CSS) */
        if (fill){ fill.style.transformOrigin = vertical ? 'center top' : 'left center';
                   fill.style.transform = vertical ? 'scaleY(0)' : 'scaleX(0)'; }
        if (pulse){ pulse.style.opacity = '0'; }
        steps.forEach(function(s){
          var n = s.querySelector('[data-tl-node]');
          var c = s.querySelector('[data-tl-card]');
          if (n){ n.style.transform = 'scale(0)'; n.style.opacity = '0'; }
          if (c){ c.style.opacity = '0'; c.style.transform = 'translateY(12px)'; }
        });

        function run(){
          if (fill){
            __fx.anim(fill, 
              [{transform: vertical?'scaleY(0)':'scaleX(0)'},{transform:'none'}],
              {duration:1150, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'});
          }
          steps.forEach(function(s,i){
            var n = s.querySelector('[data-tl-node]');
            var c = s.querySelector('[data-tl-card]');
            var delay = 260 + i*280;
            if (n){ __fx.anim(n, [
              {transform:'scale(0)',  opacity:0},
              {transform:'scale(1.14)',opacity:1, offset:.7},
              {transform:'scale(1)',  opacity:1}
            ], {duration:540, delay:delay, easing:'cubic-bezier(.2,.8,.2,1)', fill:'forwards'}); }
            if (c){ __fx.anim(c, [
              {opacity:0, transform:'translateY(12px)'},
              {opacity:1, transform:'none'}
            ], {duration:560, delay:delay+140, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'}); }
          });
          setTimeout(function(){
            if (!pulse) return;
            pulse.style.opacity = '';
            var from = vertical ? {top:'0%'}   : {left:'0%'};
            var to   = vertical ? {top:'100%'} : {left:'100%'};
            var mk = function(o, extra){ var k={}; for(var p in o) k[p]=o[p]; for(var q in extra) k[q]=extra[q]; return k; };
            __fx.anim(pulse, [
              mk(from,{opacity:0}),
              mk(from,{opacity:1, offset:.12}),
              mk(to,  {opacity:1, offset:.88}),
              mk(to,  {opacity:0})
            ], {duration:2600, iterations:Infinity, easing:'ease-in-out'});
          }, 1150);
        }

        if (!('IntersectionObserver' in window)){ run(); return; }
        var io = new IntersectionObserver(function(es){
          es.forEach(function(e){ if(e.isIntersecting){ run(); io.unobserve(e.target); } });
        }, {threshold:0.22, rootMargin:'0px 0px -6% 0px'});
        io.observe(tl);
      });

      /* ---- 9. HERO TITLE GLITCH — chromatic overlays built in JS ---- */
      $('[data-anim="glitch"]').forEach(function(el){
        el.style.position = 'relative';
        function makeOv(col){
          var ov = document.createElement('span');
          ov.setAttribute('aria-hidden','true');
          ov.textContent = el.getAttribute('data-text') || el.textContent;
          ov.style.cssText = 'position:absolute;top:0;left:0;width:100%;pointer-events:none;opacity:0;font:inherit;letter-spacing:inherit;line-height:inherit;color:'+col+';';
          el.appendChild(ov); return ov;
        }
        var ov1 = makeOv('#C8772E'), ov2 = makeOv('#E8A33D');
        function cycle(){
          var period = 3200;
          setTimeout(function(){
            __fx.anim(ov1, [
              {opacity:0,transform:'none',clipPath:'none'},
              {opacity:.8,transform:'translateX(-3px)',clipPath:'polygon(0 22%,100% 22%,100% 44%,0 44%)'},
              {opacity:0,offset:.3},
              {opacity:.6,transform:'translateX(2px)',clipPath:'polygon(0 60%,100% 60%,100% 78%,0 78%)',offset:.55},
              {opacity:0,offset:.75},
              {opacity:.5,transform:'translateX(-2px)',clipPath:'polygon(0 10%,100% 10%,100% 28%,0 28%)',offset:.88},
              {opacity:0,transform:'none',clipPath:'none'}
            ],{duration:360,easing:'steps(3,end)'});
            setTimeout(function(){
              __fx.anim(ov2, [
                {opacity:0,transform:'none',clipPath:'none'},
                {opacity:.7,transform:'translateX(3px)',clipPath:'polygon(0 48%,100% 48%,100% 68%,0 68%)'},
                {opacity:0,offset:.3},
                {opacity:.5,transform:'translateX(-2px)',clipPath:'polygon(0 12%,100% 12%,100% 32%,0 32%)',offset:.6},
                {opacity:0,offset:.82},
                {opacity:.4,transform:'translateX(1px)',clipPath:'polygon(0 74%,100% 74%,100% 88%,0 88%)',offset:.92},
                {opacity:0,transform:'none',clipPath:'none'}
              ],{duration:360,easing:'steps(3,end)'});
            },120);
            setTimeout(cycle, period + Math.random()*period*0.5);
          }, period*0.78);
        }
        cycle();
      });

      /* ---- 10. HERO MESH — guilloché engraving on canvas (rAF) ---- */
      $('[data-anim="mesh"]').forEach(function(cv){
        if (!cv.getContext) return;
        var host = cv.parentElement, ctx = cv.getContext('2d');
        var W=0,H=0,dpr=Math.min(window.devicePixelRatio||1,2), TAU=Math.PI*2;
        var motes=[], wires=[], phase=0;
        function R(a,b){ return a+Math.random()*(b-a); }
        function seed(){
          motes=[]; wires=[];
          var n=Math.round(Math.min(30,W/32));
          for(var i=0;i<n;i++) motes.push({x:R(0,W),y:R(0,H),r:R(0.4,1.3),vy:R(0.05,0.2),a:R(0.05,0.18)});
          for(var j=0;j<3;j++) wires.push({y:R(0.15,0.85)*H,amp:R(6,18),k:R(0.006,0.014),sp:R(0.0008,0.0018)*(Math.random()>0.5?1:-1),ph:R(0,6.28),a:R(0.03,0.07)});
        }
        function rosette(cx,cy,s,Rr,rr,d,turns,ph,a){
          ctx.beginPath();
          var steps=520, k=(Rr-rr)/rr;
          for(var i=0;i<=steps;i++){
            var t=i/steps*TAU*turns;
            var x=cx+s*((Rr-rr)*Math.cos(t)+d*Math.cos(k*t+ph));
            var y=cy+s*((Rr-rr)*Math.sin(t)-d*Math.sin(k*t+ph));
            if(i) ctx.lineTo(x,y); else ctx.moveTo(x,y);
          }
          ctx.globalAlpha=a; ctx.strokeStyle='rgba(200,119,46,1)'; ctx.lineWidth=0.6; ctx.stroke(); ctx.globalAlpha=1;
        }
        function size(){
          var r=host.getBoundingClientRect(); W=r.width; H=r.height;
          cv.width=W*dpr; cv.height=H*dpr; cv.style.width=W+'px'; cv.style.height=H+'px';
          ctx.setTransform(dpr,0,0,dpr,0,0); seed();
        }
        function frame(){
          ctx.clearRect(0,0,W,H);
          var base=Math.min(W,H);
          rosette(W*0.30,H*0.42,base/16,5,3,2.6,3, phase,    0.05);
          rosette(W*0.30,H*0.42,base/30,8,5,3.0,5,-phase*1.4,0.04);
          rosette(W*0.78,H*0.66,base/40,7,4,3.2,4, phase*0.8,0.03);
          phase+=0.0011;
          for(var w=0;w<wires.length;w++){
            var L=wires[w]; L.ph+=L.sp; ctx.beginPath();
            for(var x=0;x<=W;x+=8){ var y=L.y+Math.sin(x*L.k+L.ph)*L.amp; if(x) ctx.lineTo(x,y); else ctx.moveTo(x,y); }
            ctx.globalAlpha=L.a; ctx.strokeStyle='rgba(200,119,46,1)'; ctx.lineWidth=0.7; ctx.stroke(); ctx.globalAlpha=1;
          }
          for(var i=0;i<motes.length;i++){
            var mo=motes[i]; mo.y-=mo.vy; if(mo.y<-3){ mo.y=H+3; mo.x=R(0,W); }
            ctx.globalAlpha=mo.a; ctx.fillStyle='rgba(200,119,46,1)';
            ctx.beginPath(); ctx.arc(mo.x,mo.y,mo.r,0,TAU); ctx.fill(); ctx.globalAlpha=1;
          }
          requestAnimationFrame(frame);
        }
        size(); __fx.on(window, 'resize', size); frame();
      });

      /* ---- 11. CONSOLE line-in reveal ---- */
      function consoleIn(c){
        $('[data-ht-cl]', c).forEach(function(l,i){
          l.style.opacity='0';
          __fx.anim(l, [{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'none'}],
            {duration:400, delay:i*220, easing:'ease', fill:'forwards'});
        });
      }

      /* ---- 12. SCROLL REVEALS (initial hidden state set HERE, not in CSS) ---- */
      (function(){
        var targets = $('[data-anim="reveal"]').concat($('[data-anim="console"]'));
        targets.forEach(function(el){
          if (el.getAttribute('data-anim') === 'reveal'){ el.style.opacity='0'; el.style.transform='translateY(16px)'; }
        });
        function doReveal(el){
          var a = el.getAttribute('data-anim');
          if (a === 'reveal') __fx.anim(el, [{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'none'}],{duration:700,easing:'ease',fill:'forwards'});
          if (a === 'console') consoleIn(el);
        }
        if (!('IntersectionObserver' in window)){
          targets.forEach(function(el){ el.style.opacity='1'; el.style.transform='none'; if(el.getAttribute('data-anim')==='console') consoleIn(el); });
          return;
        }
        var io = new IntersectionObserver(function(es){
          es.forEach(function(e){ if(e.isIntersecting){ doReveal(e.target); io.unobserve(e.target); } });
        }, {rootMargin:'0px 0px -8% 0px', threshold:0.16});
        targets.forEach(function(el){ io.observe(el); });
      })();

      /* ---- 13. NAV underline on hover (WAAPI, no CSS transition) ---- */
      $('[data-ht-navlink]').forEach(function(a){
        var rule = a.querySelector('[data-anim="navrule"]'); if(!rule) return;
        rule.style.transform = 'scaleX(0)'; rule.style.transformOrigin = 'left';
        __fx.on(a, 'mouseenter', function(){
          __fx.anim(rule, [{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:300,easing:'ease',fill:'forwards'});
        });
        __fx.on(a, 'mouseleave', function(){
          rule.style.transformOrigin='right';
          __fx.anim(rule, [{transform:'scaleX(1)'},{transform:'scaleX(0)'}],{duration:260,easing:'ease',fill:'forwards'});
        });
      });

      /* ---- 14. ARROW nudge on hover (WAAPI) ---- */
      $('[data-ht-arrow]').forEach(function(a){
        var ar = a.querySelector('[data-ht-glyph]'); if(!ar) return;
        __fx.on(a, 'mouseenter', function(){ __fx.anim(ar, [{transform:'translateX(0)'},{transform:'translateX(5px)'}],{duration:300,easing:'ease',fill:'forwards'}); });
        __fx.on(a, 'mouseleave', function(){ __fx.anim(ar, [{transform:'translateX(5px)'},{transform:'translateX(0)'}],{duration:260,easing:'ease',fill:'forwards'}); });
      });

      /* ---- 15. BUTTON fill on hover (WAAPI background tween via inline style) ---- */
      $('[data-ht-hover-fill]').forEach(function(b){
        var base = getComputedStyle(b).backgroundColor;
        var isOutline = base === 'rgba(0, 0, 0, 0)' || base === 'transparent';
        __fx.on(b, 'mouseenter', function(){
          __fx.anim(b, [{filter:'brightness(1)'},{filter:'brightness(1.18)'}],{duration:240,easing:'ease',fill:'forwards'});
          if (isOutline){ b.style.backgroundColor = '#19211B'; b.style.color = '#D2DDD7'; }
        });
        __fx.on(b, 'mouseleave', function(){
          __fx.anim(b, [{filter:'brightness(1.18)'},{filter:'brightness(1)'}],{duration:220,easing:'ease',fill:'forwards'});
          if (isOutline){ b.style.backgroundColor = 'transparent'; b.style.color = '#19211B'; }
        });
      });

      /* ---- 16. FAQ ACCORDION — aria + data-state, JS-animated height ---- */
      $('[data-ht-accordion-toggle]').forEach(function(btn){
        var panel = btn.nextElementSibling;
        var sign = btn.querySelector('[data-ht-accordion-sign]');
        if (panel){ panel.style.height = '0px'; panel.style.overflow = 'hidden'; }
        __fx.on(btn, 'click', function(){
          var open = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!open));
          if (!panel) return;
          panel.setAttribute('aria-hidden', String(open));
          if (!open){
            panel.style.height = 'auto';
            var target = panel.scrollHeight;
            panel.style.height = '0px';
            __fx.anim(panel, [{height:'0px',opacity:0},{height:target+'px',opacity:1}],{duration:340,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'})
              .onfinish = function(){ panel.style.height = 'auto'; };
            if (sign){ __fx.anim(sign, [{transform:'rotate(0deg)'},{transform:'rotate(135deg)'}],{duration:300,easing:'ease',fill:'forwards'}); }
          } else {
            var cur = panel.scrollHeight;
            panel.style.height = cur+'px';
            __fx.anim(panel, [{height:cur+'px',opacity:1},{height:'0px',opacity:0}],{duration:300,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'})
              .onfinish = function(){ panel.style.height = '0px'; };
            if (sign){ __fx.anim(sign, [{transform:'rotate(135deg)'},{transform:'rotate(0deg)'}],{duration:260,easing:'ease',fill:'forwards'}); }
          }
        });
      });

      /* ---- 17. FORM CHIPS — single-select via data-on (no classList) ---- */
      $('[data-ht-choice]').forEach(function(group){
        var chips = $('[data-ht-chip]', group);
        chips.forEach(function(chip){
          __fx.on(chip, 'click', function(){
            chips.forEach(function(c){ c.setAttribute('data-on','false'); });
            chip.setAttribute('data-on','true');
            __fx.anim(chip, [{transform:'scale(0.94)'},{transform:'scale(1)'}],{duration:220,easing:'cubic-bezier(.2,.8,.2,1)'});
          });
        });
      });

      /* ---- 18. COVERAGE LEDGER hover: rail + scan, built & animated in JS ---- */
      $('[data-ht-ledger]').forEach(function(led){
        var color = getComputedStyle(led).color;
        var rail = document.createElement('span');
        rail.style.cssText = 'position:absolute;left:42px;right:50%;top:-1px;height:3px;opacity:.5;pointer-events:none;z-index:1;transform:scaleX(0);transform-origin:left;background:linear-gradient(90deg,'+color+',transparent);';
        led.appendChild(rail);
        __fx.on(led, 'mouseenter', function(){
          __fx.anim(rail, [{transform:'scaleX(0)',opacity:0.6},{transform:'scaleX(1)',opacity:0.5}],{duration:600,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});
        });
        __fx.on(led, 'mouseleave', function(){
          __fx.anim(rail, [{transform:'scaleX(1)'},{transform:'scaleX(0)'}],{duration:380,easing:'ease',fill:'forwards'});
        });
      });
    })();


    (function(){
      "use strict";
      /* smart header — fixed position, hide on scroll down, show on scroll up */
      (function(){
        var head = document.getElementById('site-head'); if (!head) return;
        var spacer = document.getElementById('site-head-spacer');
        function sizeSpacer(){ if (spacer) spacer.style.height = head.offsetHeight + 'px'; }
        sizeSpacer();
        __fx.on(window, 'resize', sizeSpacer, {passive:true});
        setTimeout(sizeSpacer, 300);
        var lastY = window.scrollY || 0, upAcc = 0, hidden = false;
        __fx.on(window, 'scroll', function(){
          var y = window.scrollY || document.documentElement.scrollTop || 0;
          var dy = y - lastY;
          lastY = y;
          if (dy > 0){
            upAcc = 0;
            if (!hidden && y > 80){ hidden = true; head.style.transform = 'translateY(-100%)'; }
          } else if (dy < 0){
            upAcc += -dy;
            if (hidden && upAcc >= 40){ hidden = false; upAcc = 0; head.style.transform = 'translateY(0)'; }
          }
        }, {passive:true});
      })();
      /* mobile menu toggle */
      (function(){
        var btn = document.querySelector('.nav-toggle');
        var menu = document.getElementById('mobile-menu');
        if (!btn || !menu) return;
        function setOpen(open){
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
          menu.classList.toggle('open', open);
        }
        __fx.on(btn, 'click', function(){
          setOpen(btn.getAttribute('aria-expanded') !== 'true');
        });
        __fx.on(menu, 'click', function(e){ if (e.target.tagName === 'A') setOpen(false); });
        __fx.on(window, 'resize', function(){ if (window.innerWidth > 860) setOpen(false); }, {passive:true});
      })();

      /* email assembly — keeps the literal address out of the static HTML so it survives Cloudflare email obfuscation on export */
      (function(){
        var els = document.querySelectorAll('.js-mail');
        for (var i=0;i<els.length;i++){
          var el = els[i], u = el.getAttribute('data-u'), d = el.getAttribute('data-d');
          if (!u || !d) continue;
          var addr = u + '@' + d;
          el.textContent = addr;
          if (el.tagName === 'A') el.setAttribute('href', 'mailto:' + addr);
        }
      })();
    })();


    (function(){
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!(window.Element && Element.prototype.animate)) return;
      [].slice.call(document.querySelectorAll('.why-grid .why')).forEach(function(card,i){
        card.style.position='relative'; card.style.overflow='hidden';
        var scan=document.createElement('span'); scan.className='why__scan'; card.appendChild(scan);
        __fx.anim(scan, [{transform:'translateY(-120%)',opacity:0},{opacity:1,offset:0.5},{transform:'translateY(320%)',opacity:0}],{duration:3600,delay:i*900,iterations:Infinity,easing:'ease-in-out'});
      });
    })();
  } catch (e) { console.error('[effects] init failed', e) }
  return __fx.dispose
}

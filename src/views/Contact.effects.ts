// @ts-nocheck
// AUTO-GENERATED from the original standalone page script by tools/extract.py.
// Timers / listeners / observers / animations are routed through a tracker so
// they tear down on route change. Edit the extractor, not this file.
import { createTracker } from '@/composables/tracker'
import { wireWeb3Form } from '@/composables/web3forms'

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
      /* FORM → Web3Forms: wired via the shared wireWeb3Form() helper at the end of init. */

      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;
      var WAAPI = !!(window.Element && Element.prototype.animate);
      var TAU = Math.PI * 2;

      /* 1. HERO MESH — guilloché engraving + drifting data */
      (function(){
        var cv = document.getElementById('mesh');
        if (!cv || !cv.getContext) return;
        var host = cv.parentElement, ctx = cv.getContext('2d');
        var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
        var motes = [], wires = [], phase = 0;
        function R(a,b){ return a + Math.random()*(b-a); }
        function seed(){
          motes = []; wires = [];
          var n = Math.round(Math.min(34, W/30));
          for (var i=0;i<n;i++) motes.push({ x:R(0,W), y:R(0,H), r:R(0.4,1.3), vy:R(0.05,0.2), a:R(0.05,0.18) });
          for (var j=0;j<3;j++) wires.push({ y:R(0.15,0.85)*H, amp:R(6,18), k:R(0.006,0.014), sp:R(0.0008,0.0018)*(Math.random()>0.5?1:-1), ph:R(0,6.28), a:R(0.03,0.07) });
        }
        function rosette(cx,cy,s,Rr,rr,d,turns,ph,a,col){
          ctx.beginPath();
          var steps = 560, k = (Rr-rr)/rr;
          for (var i=0;i<=steps;i++){
            var t = i/steps * TAU * turns;
            var x = cx + s*((Rr-rr)*Math.cos(t) + d*Math.cos(k*t+ph));
            var y = cy + s*((Rr-rr)*Math.sin(t) - d*Math.sin(k*t+ph));
            if (i) ctx.lineTo(x,y); else ctx.moveTo(x,y);
          }
          ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = 0.6; ctx.stroke(); ctx.globalAlpha = 1;
        }
        function size(){
          var r = host.getBoundingClientRect(); W = r.width; H = r.height;
          cv.width = W*dpr; cv.height = H*dpr; cv.style.width = W+'px'; cv.style.height = H+'px';
          ctx.setTransform(dpr,0,0,dpr,0,0); seed();
        }
        function frame(){
          ctx.clearRect(0,0,W,H);
          var base = Math.min(W,H);
          rosette(W*0.30, H*0.42, base/16, 5,3,2.6, 3,  phase,     0.055, 'rgba(127,89,245,1)');
          rosette(W*0.30, H*0.42, base/30, 8,5,3.0, 5, -phase*1.4, 0.045, 'rgba(127,89,245,1)');
          rosette(W*0.78, H*0.60, base/40, 7,4,3.2, 4,  phase*0.8, 0.035, 'rgba(196,130,58,1)');
          phase += 0.0011;
          for (var w=0; w<wires.length; w++){
            var L = wires[w]; L.ph += L.sp;
            ctx.beginPath();
            for (var x=0; x<=W; x+=8){ var y = L.y + Math.sin(x*L.k + L.ph)*L.amp; if (x) ctx.lineTo(x,y); else ctx.moveTo(x,y); }
            ctx.globalAlpha = L.a; ctx.strokeStyle = 'rgba(127,89,245,1)'; ctx.lineWidth = 0.7; ctx.stroke(); ctx.globalAlpha = 1;
          }
          for (var i=0;i<motes.length;i++){
            var mo = motes[i]; mo.y -= mo.vy; if (mo.y < -3){ mo.y = H+3; mo.x = R(0,W); }
            ctx.globalAlpha = mo.a; ctx.fillStyle = 'rgba(127,89,245,1)';
            ctx.beginPath(); ctx.arc(mo.x, mo.y, mo.r, 0, TAU); ctx.fill(); ctx.globalAlpha = 1;
          }
          requestAnimationFrame(frame);
        }
        size(); __fx.on(window, 'resize', size); frame();
      })();

      /* 2. BLINK — data-anim="blink" */
      (function(){
        var els = [].slice.call(document.querySelectorAll('[data-anim="blink"]'));
        if (!els.length) return;
        els.forEach(function(el,i){ el.dataset.ph = (i*173) % 700; });
        var t0 = performance.now();
        function tick(now){
          var e = now - t0;
          for (var i=0;i<els.length;i++){
            var el = els[i];
            var period = el.classList.contains('caret') ? 1060 : 700;
            var ph = +el.dataset.ph || 0;
            var on = ((e + ph) % period) < period*0.5;
            el.style.opacity = on ? '1' : '0.12';
          }
          requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      })();

      if (!WAAPI) return;

      /* 3. HEX ROW SCROLL — data-anim="hexrow" */
      (function(){
        [].slice.call(document.querySelectorAll('[data-anim="hexrow"]')).forEach(function(el){
          var orig = el.textContent;
          el.textContent = orig + '   ' + orig + '   ' + orig;
          __fx.anim(el, [{transform:'translateX(0)'},{transform:'translateX(-33.33%)'}],
            {duration:22000, iterations:Infinity, easing:'linear'});
        });
      })();

      /* 4. CYBERLINE SWEEP — data-anim="cpulse", themed per section */
      (function(){
        [].slice.call(document.querySelectorAll('[data-anim="cpulse"]')).forEach(function(el,i){
          var col = getComputedStyle(el.parentElement).color || 'rgba(127,89,245,.8)';
          el.style.cssText = 'position:absolute;top:0;left:-40%;width:40%;height:100%;background:linear-gradient(90deg,transparent,'+col+',transparent);opacity:0;pointer-events:none;';
          __fx.anim(el, [
            {left:'-40%', opacity:0},
            {opacity:1, offset:.2},
            {opacity:1, offset:.8},
            {left:'140%', opacity:0}
          ], {duration:4200, delay:i*1500, iterations:Infinity, easing:'ease'});
        });
      })();

      /* 5. NODE DOT PULSE — data-anim="nd" */
      (function(){
        [].slice.call(document.querySelectorAll('[data-anim="nd"]')).forEach(function(el,i){
          var c = el.getAttribute('data-nd-color') || '#7F59F5';
          __fx.anim(el, [
            {boxShadow:'0 0 2px '+c},
            {boxShadow:'0 0 9px '+c},
            {boxShadow:'0 0 2px '+c}
          ], {duration:2000, delay:i*400, iterations:Infinity, easing:'ease'});
        });
      })();

      /* 6. MATTER NODE PULSE — data-anim="mpulse" */
      (function(){
        [].slice.call(document.querySelectorAll('[data-anim="mpulse"]')).forEach(function(el,i){
          __fx.anim(el, [
            {left:'0', opacity:0},
            {left:'0', opacity:1, offset:.1},
            {left:'calc(100% - 18px)', opacity:.9, offset:.9},
            {left:'calc(100% - 18px)', opacity:0}
          ], {duration:2800, delay:i*1400, iterations:Infinity, easing:'ease'});
        });
      })();

      /* 7. CONSOLE line-in — data-anim="console" */
      function consoleIn(c){
        [].slice.call(c.querySelectorAll('.cl')).forEach(function(l,i){
          l.style.opacity='0';
          __fx.anim(l, [{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'none'}],
            {duration:400, delay:i*250, easing:'ease', fill:'forwards'});
        });
      }

      /* 8. SCROLL REVEALS — data-anim="reveal" + console ── */
      (function(){
        if (!('IntersectionObserver' in window)){
          [].slice.call(document.querySelectorAll('[data-anim="reveal"]')).forEach(function(el){ el.style.opacity='1'; el.style.transform='none'; });
          return;
        }
        var targets = [].slice.call(document.querySelectorAll('[data-anim="reveal"],[data-anim="console"]'));
        targets.forEach(function(el){ if (el.getAttribute('data-anim') === 'reveal'){ el.style.opacity='0'; el.style.transform='translateY(16px)'; } });
        var io = new IntersectionObserver(function(es){
          es.forEach(function(e){
            if (e.isIntersecting){
              var a = e.target.getAttribute('data-anim');
              if (a === 'reveal') e.target.animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'none'}],{duration:680, easing:'ease', fill:'forwards'});
              if (a === 'console') consoleIn(e.target);
              io.unobserve(e.target);
            }
          });
        }, {rootMargin:'0px 0px -8% 0px', threshold:0.16});
        targets.forEach(function(el){ io.observe(el); });
      })();
    })();


    (function(){
      "use strict";
      /* email assembly — keeps the literal address out of static HTML (survives Cloudflare obfuscation) */
      function addr(el){ var u=el.getAttribute('data-u'), d=el.getAttribute('data-d'); return (u&&d)?u+'@'+d:''; }
      [].slice.call(document.querySelectorAll('.js-mail')).forEach(function(el){
        var a=addr(el); if(!a) return; el.textContent=a;
        if(el.tagName==='A'){ var s=el.getAttribute('data-subject'); el.setAttribute('href','mailto:'+a+(s?'?subject='+encodeURIComponent(s):'')); }
      });
      [].slice.call(document.querySelectorAll('[data-mailto]')).forEach(function(el){
        var a=addr(el); if(!a) return; var s=el.getAttribute('data-subject');
        el.setAttribute('href','mailto:'+a+(s?'?subject='+encodeURIComponent(s):''));
      });
      /* smart header show/hide + spacer */
      (function(){
        var head=document.getElementById('site-head'); if(!head) return;
        var spacer=document.getElementById('site-head-spacer');
        function sizeSpacer(){ if(spacer) spacer.style.height=head.offsetHeight+'px'; }
        sizeSpacer(); __fx.on(window, 'resize',sizeSpacer,{passive:true}); setTimeout(sizeSpacer,300);
        var lastY=window.scrollY||0, upAcc=0, hidden=false;
        __fx.on(window, 'scroll',function(){
          var y=window.scrollY||document.documentElement.scrollTop||0, dy=y-lastY; lastY=y;
          if(dy>0){ upAcc=0; if(!hidden&&y>80){ hidden=true; head.style.transform='translateY(-100%)'; } }
          else if(dy<0){ upAcc+=-dy; if(hidden&&upAcc>=40){ hidden=false; upAcc=0; head.style.transform='translateY(0)'; } }
        },{passive:true});
      })();
      /* mobile menu */
      (function(){
        var btn=document.querySelector('.nav-toggle'), menu=document.getElementById('mobile-menu'); if(!btn||!menu) return;
        function setOpen(o){ btn.setAttribute('aria-expanded',o?'true':'false'); btn.setAttribute('aria-label',o?'Close menu':'Open menu'); menu.classList.toggle('open',o); }
        __fx.on(btn, 'click',function(){ setOpen(btn.getAttribute('aria-expanded')!=='true'); });
        __fx.on(menu, 'click',function(e){ if(e.target.tagName==='A') setOpen(false); });
        __fx.on(window, 'resize',function(){ if(window.innerWidth>1200) setOpen(false); },{passive:true});
      })();
      /* custom select */
      [].slice.call(document.querySelectorAll('[data-cselect]')).forEach(function(cs){
        var btn=cs.querySelector('.cselect__btn'), val=cs.querySelector('.cselect__val'),
            input=cs.querySelector('input[type=hidden]'),
            opts=[].slice.call(cs.querySelectorAll('.cselect__opt'));
        function open(o){ if(o) cs.setAttribute('data-open',''); else cs.removeAttribute('data-open'); btn.setAttribute('aria-expanded', o?'true':'false'); }
        __fx.on(btn, 'click', function(e){ e.stopPropagation(); open(!cs.hasAttribute('data-open')); });
        opts.forEach(function(op){
          __fx.on(op, 'click', function(){
            opts.forEach(function(o){ o.setAttribute('aria-selected','false'); });
            op.setAttribute('aria-selected','true');
            val.textContent=op.textContent; input.value=op.getAttribute('data-val')||op.textContent;
            open(false); btn.focus();
          });
        });
        __fx.on(document, 'click', function(e){ if(!cs.contains(e.target)) open(false); });
        __fx.on(btn, 'keydown', function(e){ if(e.key==='Escape'){ open(false); } });
      });
      var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(reduce) return; if(!(window.Element&&Element.prototype.animate)) return;
      [].slice.call(document.querySelectorAll('#site-head [data-anim="marquee"]')).forEach(function(tr){
        __fx.anim(tr, [{transform:'translateX(0)'},{transform:'translateX(-50%)'}],{duration:46000,iterations:Infinity,easing:'linear'});
      });
      [].slice.call(document.querySelectorAll('[data-anim="seam"]')).forEach(function(s,i){
        __fx.anim(s, [{left:'-26%',opacity:0,offset:0},{opacity:0,offset:0.72},{opacity:0.7,offset:0.8},{left:'112%',opacity:0,offset:1}],{duration:9000,iterations:Infinity,easing:'cubic-bezier(.4,0,.2,1)',delay:i*3000});
      });
    })();
    wireWeb3Form(__fx, {
      root: '[data-form="brief"]',
      subject: (d) => 'New brief' + (d.practice ? ' — ' + d.practice : ''),
      page: 'Contact',
      success: 'Brief sent — we’ll reply within 24 hours.',
    })
  } catch (e) { console.error('[effects] init failed', e) }
  return __fx.dispose
}

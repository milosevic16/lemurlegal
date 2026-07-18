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


        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        /* smart header — fixed position, hide on scroll down, show on scroll up */
        (function(){
          var head = document.getElementById('site-head'); if (!head) return;
          var spacer = document.getElementById('site-head-spacer');

          /* size spacer to header so content isn't covered by the fixed bar */
          function sizeSpacer(){ if (spacer) spacer.style.height = head.offsetHeight + 'px'; }
          sizeSpacer();
          __fx.on(window, 'resize', sizeSpacer, {passive:true});
          setTimeout(sizeSpacer, 300); /* after fonts settle */

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
          __fx.on(window, 'resize', function(){ if (window.innerWidth > 1200) setOpen(false); }, {passive:true});
        })();

        /* founder photo — load it, then "pixelate into existence" (low-res blocks
           -> sharp) on a throwaway canvas overlay, then reveal the real <img> and
           drop the canvas. Honors reduced-motion; rAF is tracked so it tears down
           on navigation. */
        (function(){
          var SRC = '/founder.jpg';
          var el = document.getElementById('founder-img'); if (!el) return;
          var box = el.parentElement; /* .founder-photo (position:relative) */
          var imgReady = false, inView = false, started = false, done = false, cv = null;

          function finish(){ if (done) return; done = true; el.src = SRC; el.style.display = 'block'; el.style.opacity = '1'; if (cv && cv.parentNode) cv.parentNode.removeChild(cv); }

          function animate(){
            var w = box ? box.clientWidth : 0, h = box ? box.clientHeight : 0;
            if (reduce || !box || !w || !h) { finish(); return; }
            /* The <img> is now in the prerendered HTML and visible by default; hide it
               while the pixelate canvas plays so there's no sharp -> blocky -> sharp flash. */
            el.style.opacity = '0';
            var SZ = 480; /* square internal res; CSS object-fit crops to the box like the <img> */
            cv = document.createElement('canvas'); cv.width = SZ; cv.height = SZ;
            cv.setAttribute('aria-hidden', 'true');
            cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;z-index:3;';
            var tmp = document.createElement('canvas'); tmp.width = SZ; tmp.height = SZ;
            var ctx = cv.getContext('2d'), tctx = tmp.getContext('2d');
            box.appendChild(cv);
            var DUR = 1300, t0 = null;
            function frame(ts){
              if (done) return;
              if (t0 == null) t0 = ts;
              var p = (ts - t0) < DUR ? (ts - t0) / DUR : 1;
              var s = Math.max(2, Math.round(2 + Math.pow(p, 1.6) * (SZ - 2))); /* blocks: coarse -> full */
              tctx.imageSmoothingEnabled = false; tctx.clearRect(0, 0, SZ, SZ);
              tctx.drawImage(probe, 0, 0, s, s);               /* downscale into corner */
              ctx.imageSmoothingEnabled = false; ctx.clearRect(0, 0, SZ, SZ);
              ctx.drawImage(tmp, 0, 0, s, s, 0, 0, SZ, SZ);    /* upscale, no smoothing -> blocky */
              if (p < 1) { requestAnimationFrame(frame); } else { finish(); }
            }
            requestAnimationFrame(frame);
            /* safety net: if rAF is paused (e.g. background tab), still reveal the photo */
            setTimeout(finish, DUR + 800);
          }

          /* Only run the pixelate-in once the photo is BOTH loaded AND scrolled into
             view — otherwise it plays unseen on mount (the section is below the fold). */
          function maybeStart(){ if (started || !imgReady || !inView) return; started = true; animate(); }

          var probe = new window.Image();
          probe.onload = function(){ imgReady = true; maybeStart(); };
          probe.src = SRC;

          if (box) {
            var io = new IntersectionObserver(function(entries){
              for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) { inView = true; io.disconnect(); maybeStart(); break; }
              }
            }, { threshold: 0.35 });
            io.observe(box);
          } else { inView = true; maybeStart(); }
        })();

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
            var cx = W*0.32, cy = H*0.40, base = Math.min(W,H);
            rosette(cx, cy, base/16, 5,3,2.6, 3,  phase,       0.055, 'rgba(127,89,245,1)');
            rosette(cx, cy, base/30, 8,5,3.0, 5, -phase*1.4,   0.045, 'rgba(127,89,245,1)');
            rosette(W*0.74, H*0.66, base/40, 7,4,3.2, 4, phase*0.8, 0.035, 'rgba(196,130,58,1)');
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

        /* 2. BLINKING INDICATORS — data-anim="blink" */
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

        /* 3. MARQUEE — data-anim="marquee" */
        (function(){
          var tr = document.querySelector('[data-anim="marquee"]');
          if (tr) __fx.anim(tr, [{transform:'translateX(0)'},{transform:'translateX(-50%)'}],
            {duration:46000, iterations:Infinity, easing:'linear'});
        })();

        /* 4. SEAM pulses — data-anim="seam" */
        (function(){
          [].slice.call(document.querySelectorAll('[data-anim="seam"]')).forEach(function(s,i){
            __fx.anim(s, [
              {left:'-26%', opacity:0, offset:0},
              {opacity:0, offset:0.72},
              {opacity:0.7, offset:0.8},
              {left:'112%', opacity:0, offset:1}
            ], {duration:9000, iterations:Infinity, easing:'cubic-bezier(.4,0,.2,1)', delay:i*3000});
          });
        })();

        /* 5. NODE DOT PULSE — data-anim="nd", WAAPI replaces CSS keyframes */
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

        /* 6. CYBERLINE PULSE — data-anim="cpulse", WAAPI replaces CSS ::after keyframes */
        (function(){
          [].slice.call(document.querySelectorAll('[data-anim="cpulse"]')).forEach(function(el){
            el.style.cssText = 'position:absolute;top:0;left:-40%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(127,89,245,.8),transparent);opacity:0;pointer-events:none;';
            __fx.anim(el, [
              {left:'-40%', opacity:0},
              {opacity:1, offset:.2},
              {opacity:1, offset:.8},
              {left:'140%', opacity:0}
            ], {duration:4000, iterations:Infinity, easing:'ease'});
          });
        })();

        /* 7. MATTER BOARD — typewriter reveal on scroll + board-wide FX */
        (function(){
          /* pulse packets along traces */
          [].slice.call(document.querySelectorAll('[data-anim="mpulse"]')).forEach(function(el,i){
            __fx.anim(el, [
              {left:'0', opacity:0, width:'18px'},
              {left:'0', opacity:1, width:'28px', offset:.08},
              {left:'calc(100% - 28px)', opacity:.9, width:'18px', offset:.88},
              {left:'calc(100% - 18px)', opacity:0, width:'10px'}
            ], {duration:2200, delay:i*1100, iterations:Infinity, easing:'cubic-bezier(.4,0,.6,1)'});
          });

          var board = document.querySelector('.matter-board');
          if (!board) return;

          /* typewriter helper — types into a .mb-type span */
          function typeInto(span, done){
            /* Source text now lives as the span's real content (prerendered into the
               HTML for crawlers/no-JS); fall back to the legacy data-type attribute. */
            var text  = span.getAttribute('data-type') || span.textContent || '';
            var col   = span.getAttribute('data-type-color') || '';
            var link  = span.getAttribute('data-type-link') || '';
            var speed = parseInt(span.getAttribute('data-type-speed') || '10', 10);
            span.textContent = '';
            /* if linked, create anchor first so no DOM restructure at end */
            var target = span;
            if (link){
              var a = document.createElement('a');
              a.href = link;
              a.style.cssText = 'font-family:var(--mono);font-size:.82rem;color:var(--term-cyan);text-decoration:none;letter-spacing:.02em;display:inline;';
              span.appendChild(a);
              target = a;
            } else if (col){
              span.style.color = col;
            }
            /* blinking cursor lives inside target */
            var cur = document.createElement('span');
            cur.textContent = '█';
            cur.style.cssText = 'opacity:1;font-size:.8em;animation:mbcursor .5s steps(1,end) infinite;';
            target.appendChild(cur);
            var i = 0, chars = text.split('');
            function tick(){
              if (i < chars.length){
                target.insertBefore(document.createTextNode(chars[i++]), cur);
                setTimeout(tick, speed + Math.random()*speed*.5);
              } else {
                /* fade cursor out instead of hard-removing — no flash */
                cur.style.transition = 'opacity .3s';
                cur.style.opacity = '0';
                setTimeout(function(){ if (cur.parentNode) cur.parentNode.removeChild(cur); }, 320);
                if (done) setTimeout(done, 60);
              }
            }
            tick();
          }

          /* sequence: array of fns each calling next() when done */
          function seq(fns){ var i=0; function next(){ if(i<fns.length) fns[i++](next); } next(); }

          /* show a .mb-hide element */
          function show(el, done){
            el.style.opacity='0'; el.style.display='';
            __fx.anim(el, [{opacity:0},{opacity:1}],{duration:120,fill:'forwards'});
            setTimeout(done||function(){},80);
          }

          /* init: hide everything */
          var hides = [].slice.call(board.querySelectorAll('.mb-hide'));
          hides.forEach(function(el){ el.style.opacity='0'; });

          /* full-board scan sweep */
          var sweep = document.createElement('div');
          sweep.setAttribute('aria-hidden','true');
          sweep.style.cssText='position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(127,89,245,.5),transparent);pointer-events:none;z-index:4;opacity:0;';
          board.appendChild(sweep);
          function runSweep(){
            __fx.anim(sweep, [{top:'0%',opacity:0},{top:'2%',opacity:.8,offset:.03},{top:'96%',opacity:.7,offset:.92},{top:'100%',opacity:0}],{duration:900,easing:'ease-in-out'});
            setTimeout(runSweep, 4500 + Math.random()*3000);
          }
          setTimeout(runSweep, 1200);

          /* HUD corner flicker */
          var huds = [].slice.call(board.querySelectorAll('.hud-tl,.hud-tr,.hud-bl,.hud-br'));
          function flickerHuds(){
            huds.forEach(function(h,i){
              setTimeout(function(){
                __fx.anim(h, [{opacity:.3},{opacity:1,offset:.1},{opacity:.3,offset:.3},{opacity:.9,offset:.5},{opacity:.3}],{duration:300,easing:'steps(4,end)'});
              },i*60);
            });
            setTimeout(flickerHuds, 5000 + Math.random()*4000);
          }
          setTimeout(flickerHuds, 800);

          /* live timestamp */
          var hdr = board.querySelector('.matter-board__header');
          if (hdr){
            var ts = document.createElement('span');
            ts.style.cssText='margin-left:auto;font-family:var(--mono);font-size:.68rem;color:var(--term-dim);letter-spacing:.04em;';
            hdr.appendChild(ts);
            function tick(){ ts.textContent = new Date().toISOString().replace('T',' ').slice(0,19)+'Z'; }
            tick(); setInterval(tick,1000);
          }

          /* scroll trigger: typewriter sequence */
          var fired = false;
          var io = new IntersectionObserver(function(es){
            es.forEach(function(e){
              if (e.isIntersecting && !fired){
                fired = true; io.disconnect();
                /* collect all .mb-type spans and .mb-hide parents in DOM order */
                var types  = [].slice.call(board.querySelectorAll('.mb-type'));
                var hidden = [].slice.call(board.querySelectorAll('.mb-hide'));
                var fns = [];
                /* header types first */
                var hdrTypes = types.filter(function(t){ return board.querySelector('.matter-board__header').contains(t); });
                hdrTypes.forEach(function(t){ fns.push(function(next){ typeInto(t,next); }); });
                /* then each node group */
                [].slice.call(board.querySelectorAll('.mnode,.mnode-trace,.matter-board__footer')).forEach(function(group){
                  fns.push(function(next){ show(group, next); });
                  [].slice.call(group.querySelectorAll('.mb-type')).forEach(function(t){
                    fns.push(function(next){ typeInto(t,next); });
                  });
                });
                seq(fns);
              }
            });
          },{threshold:0.25});
          io.observe(board);
        })();

        /* 8. HERO TITLE GLITCH — heavy multi-layer WAAPI glitch */
        (function(){
          var el = document.querySelector('[data-glitch-text]');
          if (!el) return;
          var txt = el.getAttribute('data-text') || el.textContent;

          function makeOv(col, mix){
            var ov = document.createElement('span');
            ov.setAttribute('aria-hidden','true');
            ov.setAttribute('data-glitch-overlay','');
            ov.textContent = txt;
            ov.style.cssText = 'position:absolute;top:0;left:0;width:100%;pointer-events:none;opacity:0;font:inherit;letter-spacing:inherit;line-height:inherit;color:'+col+';mix-blend-mode:'+(mix||'normal')+';';
            el.appendChild(ov);
            return ov;
          }

          var ov1 = makeOv('#7F59F5','screen');
          var ov2 = makeOv('#C4823A','screen');
          var ov3 = makeOv('#5FC27A','screen');

          var bar = document.createElement('span');
          bar.setAttribute('aria-hidden','true');
          bar.style.cssText = 'position:absolute;left:0;width:100%;height:6px;background:rgba(127,89,245,.6);pointer-events:none;opacity:0;mix-blend-mode:screen;';
          el.appendChild(bar);

          function rnd(a,b){ return a + Math.random()*(b-a); }
          function pct(){ return (Math.random()*80+5|0)+'%'; }
          function slice(s,e){ return 'polygon(0 '+s+',100% '+s+',100% '+e+',0 '+e+')'; }

          function bigBurst(){
            __fx.anim(el, [
              {transform:'none'},
              {transform:'translateX('+rnd(-9,9)+'px) skewX('+rnd(-5,5)+'deg)',offset:.08},
              {transform:'translateX('+rnd(-6,6)+'px)',offset:.18},
              {transform:'translateX('+rnd(-12,12)+'px) skewX('+rnd(-7,7)+'deg)',offset:.28},
              {transform:'translateX('+rnd(-4,4)+'px)',offset:.42},
              {transform:'translateX('+rnd(-9,9)+'px) skewX('+rnd(-4,4)+'deg)',offset:.56},
              {transform:'translateX('+rnd(-3,3)+'px)',offset:.72},
              {transform:'none'}
            ],{duration:450,easing:'steps(7,end)'});

            var p1a=pct(),p1b=pct(),p1c=pct(),p1d=pct();
            __fx.anim(ov1, [
              {opacity:0,transform:'none',clipPath:'none'},
              {opacity:1,  transform:'translateX(-12px)',clipPath:slice(Math.min(p1a,p1b),Math.max(p1a,p1b)),offset:.05},
              {opacity:.9, transform:'translateX(9px)', clipPath:slice(Math.min(p1c,p1d),Math.max(p1c,p1d)),offset:.18},
              {opacity:0,offset:.3},
              {opacity:.95,transform:'translateX(-8px)',clipPath:slice('5%','42%'),offset:.4},
              {opacity:0,offset:.52},
              {opacity:.85,transform:'translateX(11px)',clipPath:slice('55%','87%'),offset:.64},
              {opacity:0,offset:.77},
              {opacity:.75,transform:'translateX(-6px)',clipPath:slice('18%','62%'),offset:.87},
              {opacity:0,transform:'none',clipPath:'none'}
            ],{duration:450,easing:'steps(6,end)'});

            setTimeout(function(){
              var p2a=pct(),p2b=pct();
              __fx.anim(ov2, [
                {opacity:0,transform:'none',clipPath:'none'},
                {opacity:.95,transform:'translateX(14px)', clipPath:slice(Math.min(p2a,p2b),Math.max(p2a,p2b)),offset:.07},
                {opacity:0,offset:.24},
                {opacity:.9, transform:'translateX(-10px)',clipPath:slice('10%','48%'),offset:.38},
                {opacity:0,offset:.52},
                {opacity:.8, transform:'translateX(8px)', clipPath:slice('62%','92%'),offset:.66},
                {opacity:0,offset:.83},
                {opacity:.65,transform:'translateX(-5px)',clipPath:slice('28%','58%'),offset:.92},
                {opacity:0,transform:'none',clipPath:'none'}
              ],{duration:420,easing:'steps(6,end)'});
            },55);

            setTimeout(function(){
              __fx.anim(ov3, [
                {opacity:0,transform:'none',clipPath:'none'},
                {opacity:.8, transform:'translateX(-13px)',clipPath:slice('35%','72%'),offset:.1},
                {opacity:0,offset:.32},
                {opacity:.7, transform:'translateX(10px)', clipPath:slice('5%','32%'), offset:.52},
                {opacity:0,offset:.7},
                {opacity:.6, transform:'translateX(-7px)', clipPath:slice('70%','96%'),offset:.84},
                {opacity:0,transform:'none',clipPath:'none'}
              ],{duration:430,easing:'steps(5,end)'});
            },110);

            setTimeout(function(){
              bar.style.top = (Math.random()*80|0)+'%';
              __fx.anim(bar, [
                {opacity:0,height:'2px'},{opacity:1,height:'12px',offset:.1},
                {opacity:.85,height:'4px',offset:.55},{opacity:0,height:'2px'}
              ],{duration:220,easing:'ease'});
            },75);
          }

          function microGlitch(){
            var mv = rnd(-6,6);
            __fx.anim(ov1, [
              {opacity:0,transform:'none',clipPath:'none'},
              {opacity:.9,transform:'translateX('+mv+'px)',clipPath:slice('20%','58%'),offset:.15},
              {opacity:0,offset:.5},
              {opacity:.75,transform:'translateX('+(-mv)+'px)',clipPath:slice('62%','82%'),offset:.76},
              {opacity:0,transform:'none',clipPath:'none'}
            ],{duration:200,easing:'steps(4,end)'});
            __fx.anim(el, [
              {transform:'none'},
              {transform:'translateX('+rnd(-5,5)+'px) skewX('+rnd(-3,3)+'deg)',offset:.3},
              {transform:'none'}
            ],{duration:200,easing:'steps(4,end)'});
          }

          function schedule(){
            setTimeout(function(){
              if (Math.random() < 0.6) bigBurst(); else microGlitch();
              if (Math.random() < 0.5) setTimeout(microGlitch, rnd(110,300));
              schedule();
            }, rnd(900, 2400));
          }

          setTimeout(bigBurst, 500);
          setTimeout(function(){ microGlitch(); }, 900);
          schedule();
        })();

        /* helpers */
        function decode(el){
          if (!el) return;
          var final = el.textContent, glyphs = '0123456789', dur = 640, start = performance.now();
          function step(now){
            var p = Math.min((now-start)/dur, 1), reveal = Math.floor(p*final.length), out = '';
            for (var i=0;i<final.length;i++){
              var ch = final[i];
              if (i < reveal || ch === '+' || ch === ' ') out += ch;
              else if (ch >= '0' && ch <= '9') out += glyphs[(Math.random()*10)|0];
              else out += ch;
            }
            el.textContent = out;
            if (p < 1) requestAnimationFrame(step); else el.textContent = final;
          }
          requestAnimationFrame(step);
        }
        function chartIn(fig){
          var line = fig.querySelector('.areachart .line');
          if (line){ line.style.strokeDasharray='1'; __fx.anim(line, [{strokeDashoffset:1},{strokeDashoffset:0}],{duration:1600,easing:'ease',fill:'forwards'}); }
          var area = fig.querySelector('.areachart .area');
          if (area){ area.style.opacity='0'; __fx.anim(area, [{opacity:0},{opacity:1}],{duration:900,delay:700,easing:'ease',fill:'forwards'}); }
          var dot = fig.querySelector('.areachart .dot');
          if (dot){ dot.style.opacity='0'; __fx.anim(dot, [{opacity:0},{opacity:1}],{duration:400,delay:1500,easing:'ease',fill:'forwards'}); }
          var scan = fig.querySelector('.areachart .scan');
          if (scan){ try{ __fx.anim(scan, [{offsetDistance:'0%',opacity:0},{offsetDistance:'6%',opacity:0.9},{offsetDistance:'92%',opacity:0.9},{offsetDistance:'100%',opacity:0}],{duration:1600,easing:'ease'}); }catch(e){} }
          [].slice.call(fig.querySelectorAll('.jgrid .d')).forEach(function(d,i){
            d.style.transform='scale(0.001)';
            __fx.anim(d, [{transform:'scale(0.001)'},{transform:'scale(1)'}],{duration:450,delay:i*28,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});
          });
          [].slice.call(fig.querySelectorAll('.seg')).forEach(function(s,i){
            s.style.transform='scaleX(0)';
            __fx.anim(s, [{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:900,delay:i*180,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});
          });
          decode(fig.querySelector('.chart__fig'));
        }
        function timelineIn(w){
          var horiz = window.innerWidth > 760;
          var line = w.querySelector('.timeline-line'), spark = w.querySelector('.timeline-spark');
          if (line){
            var from = horiz ? 'scaleX(0)' : 'scaleY(0)', to = horiz ? 'scaleX(1)' : 'scaleY(1)';
            line.style.transform = from;
            __fx.anim(line, [{transform:from},{transform:to}],{duration:1300,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});
          }
          if (spark && horiz){
            __fx.anim(spark, [{left:'0%',opacity:0},{left:'4%',opacity:1},{left:'96%',opacity:1},{left:'100%',opacity:0}],{duration:1500,delay:300,easing:'ease'});
          }
        }
        function sigIn(b){
          [].slice.call(b.querySelectorAll('.sig path')).forEach(function(p,i){
            p.style.strokeDasharray='1'; p.style.strokeDashoffset='1';
            __fx.anim(p, [{strokeDashoffset:1},{strokeDashoffset:0}],{duration:1900,delay:i*1300,easing:'ease',fill:'forwards'});
          });
        }
        function consoleIn(c){
          [].slice.call(c.querySelectorAll('.cl')).forEach(function(l,i){
            l.style.opacity='0';
            __fx.anim(l, [{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:400,delay:i*250,easing:'ease',fill:'forwards'});
          });
        }

        /* 9. SCROLL REVEALS — data-anim selectors throughout */
        (function(){
          if (!('IntersectionObserver' in window)) return;
          var targets = [].slice.call(document.querySelectorAll('[data-anim="reveal"],[data-anim="chart"],[data-anim="timeline"],[data-anim="sigblock"],[data-anim="console"]'));
          targets.forEach(function(el){
            if (el.getAttribute('data-anim') === 'reveal'){ el.style.opacity='0'; el.style.transform='translateY(16px)'; }
          });
          function doReveal(el){
            var a = el.getAttribute('data-anim');
            if (a === 'reveal') __fx.anim(el, [{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'none'}],{duration:700,easing:'ease',fill:'forwards'});
            if (a === 'chart') chartIn(el);
            if (a === 'timeline') timelineIn(el);
            if (a === 'sigblock') sigIn(el);
            if (a === 'console') consoleIn(el);
          }
          var io = new IntersectionObserver(function(es){
            es.forEach(function(e){ if (e.isIntersecting){ doReveal(e.target); io.unobserve(e.target); } });
          }, {rootMargin:'0px 0px -8% 0px', threshold:0.18});
          targets.forEach(function(el){ io.observe(el); });
        })();

        /* 9b. WHY-CARD STAGGER SCAN */
        (function(){
          if (!('IntersectionObserver' in window)) return;
          var cards = [].slice.call(document.querySelectorAll('[data-anim="why-card"]'));
          if (!cards.length) return;
          cards.forEach(function(c){ c.style.opacity='0'; c.style.clipPath='inset(0 0 100% 0)'; });

          function animCard(card, delay){
            /* scan bar */
            var scan = document.createElement('span'); scan.className='why-scan'; card.appendChild(scan);
            setTimeout(function(){
              /* 1. scan sweeps down */
              __fx.anim(scan, [
                {top:'0%',opacity:0},{top:'2%',opacity:.9,offset:.04},
                {top:'96%',opacity:.9,offset:.88},{top:'100%',opacity:0}
              ],{duration:480,easing:'ease-in-out',fill:'forwards'});
              /* 2. clip-path reveals card */
              __fx.anim(card, [
                {opacity:0,clipPath:'inset(0 0 100% 0)'},
                {opacity:1,clipPath:'inset(0 0 0% 0)'}
              ],{duration:480,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});
              /* 3. numeral glitch */
              var wn = card.querySelector('.wn');
              if (wn){
                setTimeout(function(){
                  __fx.anim(wn, [
                    {color:'var(--sig)',textShadow:'-2px 0 var(--ochre)',opacity:1},
                    {color:'var(--ink)',textShadow:'2px 0 var(--sig)',opacity:.7,offset:.3},
                    {color:'var(--sig)',textShadow:'-1px 0 var(--green)',opacity:1,offset:.6},
                    {color:'var(--ink-2)',textShadow:'none',opacity:1}
                  ],{duration:340,easing:'steps(4,end)',fill:'forwards'});
                },120);
              }
              /* 4. h3 slides up */
              var h = card.querySelector('h3');
              if (h){ h.style.opacity='0'; h.style.transform='translateY(10px)';
                setTimeout(function(){
                  __fx.anim(h, [{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:380,easing:'ease',fill:'forwards'});
                },180);
              }
              /* 5. p fades in */
              var p = card.querySelector('p');
              if (p){ p.style.opacity='0';
                setTimeout(function(){
                  __fx.anim(p, [{opacity:0},{opacity:1}],{duration:400,easing:'ease',fill:'forwards'});
                },300);
              }
            }, delay);
          }

          var fired = false;
          var io = new IntersectionObserver(function(es){
            es.forEach(function(e){
              if (e.isIntersecting && !fired){
                fired = true;
                cards.forEach(function(c,i){ animCard(c, i*160); });
                io.disconnect();
              }
            });
          },{rootMargin:'0px 0px -10% 0px',threshold:0.15});
          io.observe(cards[0].parentElement || cards[0]);
        })();

        /* 11. CLASSIFIED REDACTION */
        (function(){
          var el = document.querySelector('.redact'); if (!el) return;
          var badge = el.closest('.badge') || el;
          var bar = document.createElement('span'); bar.className = 'rbar'; badge.appendChild(bar);
          function fire(){
            __fx.anim(el, [
              {textShadow:'none'},
              {textShadow:'-1px 0 rgba(127,89,245,.7), 1px 0 rgba(168,64,76,.6)', offset:.3},
              {textShadow:'1px 0 rgba(127,89,245,.6), -1px 0 rgba(168,64,76,.5)', offset:.6},
              {textShadow:'none'}
            ], {duration:300, easing:'steps(2,end)'});
            __fx.anim(bar, [
              {left:'-12%',opacity:0},{left:'0%',opacity:1,offset:.2},
              {left:'100%',opacity:1,offset:.82},{left:'112%',opacity:0}
            ], {duration:380, easing:'ease'});
            schedule();
          }
          function schedule(){ setTimeout(fire, 7000 + Math.random()*5000); }
          schedule();
        })();

        /* 12. HEX ROW SCROLL — data-anim="hexrow" */
        (function(){
          [].slice.call(document.querySelectorAll('[data-anim="hexrow"]')).forEach(function(el){
            var orig = el.textContent;
            el.textContent = orig + '   ' + orig + '   ' + orig;
            __fx.anim(el, [{transform:'translateX(0)'},{transform:'translateX(-33.33%)'}],
              {duration:22000, iterations:Infinity, easing:'linear'});
          });
        })();

        /* 13. LEDGER hover */
        (function(){
          [].slice.call(document.querySelectorAll('.ledger')).forEach(function(led){
            var rail = document.createElement('span'); rail.className = 'lrail'; led.appendChild(rail);
            var scan = document.createElement('span'); scan.className = 'lscan'; led.appendChild(scan);
            __fx.on(led, 'mouseenter', function(){
              __fx.anim(rail, [{width:'0px',opacity:0.6},{width:'calc(100% - 46px)',opacity:0.5}],{duration:600,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});
              __fx.anim(scan, [{top:'0%',opacity:0},{top:'8%',opacity:0.8,offset:.15},{top:'92%',opacity:0.8,offset:.85},{top:'100%',opacity:0}],{duration:700,easing:'ease'});
            });
            __fx.on(led, 'mouseleave', function(){
              __fx.anim(rail, [{width:'calc(100% - 46px)'},{width:'0px'}],{duration:350,easing:'ease',fill:'forwards'});
            });
          });
        })();

  } catch (e) { console.error('[effects] init failed', e) }
  return __fx.dispose
}

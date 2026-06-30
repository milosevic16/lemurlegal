// A small lifecycle tracker for the ported legacy effect scripts.
//
// The original standalone pages attach requestAnimationFrame loops, timers,
// IntersectionObservers, event listeners and Web Animations directly to the
// DOM with no teardown — fine for a one-page document, but in a Vue Router SPA
// those would leak and stack every time a route mounts/unmounts.
//
// Each effect module shadows the relevant globals with the tracked versions
// below (and the extractor rewrites `el.addEventListener(` → `__fx.on(el,` and
// `el.animate(` → `__fx.anim(el,`). Calling the returned `dispose()` on unmount
// cancels everything the script created, so navigating between routes is clean.

export interface Tracker {
  raf: (cb: FrameRequestCallback) => number
  caf: (id: number) => void
  setTimeout: (cb: (...a: any[]) => void, ms?: number, ...args: any[]) => number
  clearTimeout: (id?: number) => void
  setInterval: (cb: (...a: any[]) => void, ms?: number, ...args: any[]) => number
  clearInterval: (id?: number) => void
  IO: typeof IntersectionObserver
  on: (target: EventTarget, type: string, handler: any, opts?: any) => void
  anim: (el: Element, keyframes: any, opts?: any) => Animation
  dispose: () => void
}

export function createTracker(): Tracker {
  const rafs = new Set<number>()
  const timeouts = new Set<number>()
  const intervals = new Set<number>()
  const observers = new Set<IntersectionObserver>()
  const listeners: Array<[EventTarget, string, any, any]> = []
  const anims = new Set<Animation>()
  let disposed = false

  const t: Tracker = {
    raf(cb) {
      if (disposed) return 0
      const id = window.requestAnimationFrame((time) => {
        rafs.delete(id)
        if (!disposed) cb(time)
      })
      rafs.add(id)
      return id
    },
    caf(id) {
      rafs.delete(id)
      window.cancelAnimationFrame(id)
    },
    setTimeout(cb, ms, ...args) {
      if (disposed) return 0
      const id = window.setTimeout(() => {
        timeouts.delete(id)
        if (!disposed) cb(...args)
      }, ms)
      timeouts.add(id)
      return id
    },
    clearTimeout(id) {
      if (id != null) {
        timeouts.delete(id)
        window.clearTimeout(id)
      }
    },
    setInterval(cb, ms, ...args) {
      if (disposed) return 0
      const id = window.setInterval(() => {
        if (!disposed) cb(...args)
      }, ms)
      intervals.add(id)
      return id
    },
    clearInterval(id) {
      if (id != null) {
        intervals.delete(id)
        window.clearInterval(id)
      }
    },
    IO: class TrackedIO extends IntersectionObserver {
      constructor(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
        super(cb, opts)
        observers.add(this)
      }
    },
    on(target, type, handler, opts) {
      target.addEventListener(type, handler, opts)
      listeners.push([target, type, handler, opts])
    },
    anim(el, keyframes, opts) {
      const a = el.animate(keyframes, opts)
      anims.add(a)
      return a
    },
    dispose() {
      if (disposed) return
      disposed = true
      rafs.forEach((id) => window.cancelAnimationFrame(id))
      timeouts.forEach((id) => window.clearTimeout(id))
      intervals.forEach((id) => window.clearInterval(id))
      observers.forEach((o) => o.disconnect())
      listeners.forEach(([target, type, handler, opts]) =>
        target.removeEventListener(type, handler, opts),
      )
      anims.forEach((a) => {
        try {
          a.cancel()
        } catch {
          /* already finished */
        }
      })
      rafs.clear()
      timeouts.clear()
      intervals.clear()
      observers.clear()
      listeners.length = 0
      anims.clear()
    },
  }
  return t
}

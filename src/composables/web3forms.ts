// Shared Web3Forms submit wiring for the subproduct "contact inquiry" blocks.
//
// The standalone Contact page (Contact.effects.ts) submits its brief to
// Web3Forms directly from the browser (fetch POST, no backend). The 9
// subproduct pages each have an inquiry block but no submit behavior. This
// helper generalizes the Contact logic so one call per effects file wires a
// page's block, handling both markup patterns:
//   - `.formwrap` sections with NO <form> and a `.btn[type="button"]` (8 pages)
//   - the `.mica` section with a real <form> + submit button (RegulatoryCompliance)
//
// All listeners route through the effect tracker so they tear down on route
// change — never call addEventListener here.

import type { Tracker } from './tracker'

/** Default Web3Forms access key — routes to the inbox the key is registered to. */
export const WEB3FORMS_KEY = '365cfa55-34d0-4017-9dd0-142559fc2e04'

export interface Web3FormOpts {
  /** CSS selector for the inquiry section, e.g. '#contact' | '#mica-form'. */
  root: string
  /** Per-page email subject — a string, or a function of the collected fields. */
  subject: string | ((data: Record<string, string>) => string)
  /** Product name, echoed into the payload as `page` (defaults to document.title). */
  page?: string
  /** Optional per-page access key override; defaults to WEB3FORMS_KEY. */
  key?: string
  sending?: string
  success?: string
  error?: string
}

export function wireWeb3Form(fx: Tracker, opts: Web3FormOpts): void {
  const root = document.querySelector<HTMLElement>(opts.root)
  if (!root) return

  const form: HTMLFormElement | null =
    root instanceof HTMLFormElement ? root : root.querySelector('form')

  // Pattern B has a real submit button inside the form; Pattern A has a single
  // `.btn` inside the section (a second `.btn` lives in the CTA band *above*
  // the section, so scoping the lookup to `root` avoids grabbing it).
  const btn = (
    form ? form.querySelector('button[type="submit"]') : root.querySelector('.btn')
  ) as HTMLButtonElement | null
  if (!form && !btn) return

  const scope: ParentNode = form ?? root

  // Status line — reuse an existing note if present (Contact has `.form-note`),
  // else create one after the button. These 9 pages have neither.
  let noteEl = root.querySelector<HTMLElement>('.form-note, .form-status')
  if (!noteEl) {
    noteEl = document.createElement('p')
    noteEl.className = 'form-status'
    noteEl.style.margin = '.8rem 0 0'
    noteEl.style.fontSize = '.8rem'
    noteEl.style.lineHeight = '1.5'
    if (btn) btn.insertAdjacentElement('afterend', noteEl)
    else scope.appendChild(noteEl)
  }
  const note = noteEl
  const status = (text: string, ok?: boolean) => {
    note.textContent = text
    note.style.color = ok
      ? 'var(--green-deep, #1c7d52)'
      : ok === false
        ? '#9B0E00'
        : 'var(--ink-2, #6b7280)'
  }

  const namedInputs = () =>
    Array.from(scope.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[name]'))

  const collect = (): Record<string, string> => {
    const data: Record<string, string> = {}
    namedInputs().forEach((el) => {
      data[el.name] = (el.value || '').trim()
    })
    // Chips are single-select on Pattern A (`data-on`) and multi-select on the
    // mica page (`data-state`); collect all that are "on".
    const chips = Array.from(scope.querySelectorAll('[data-on="true"], [data-state="on"]'))
      .map((c) => (c.textContent || '').trim())
      .filter(Boolean)
    if (chips.length) data.choice = chips.join(', ')
    return data
  }

  const clearInputs = () => {
    if (form) form.reset()
    else namedInputs().forEach((el) => { el.value = '' })
  }

  const handler = (e: Event) => {
    e.preventDefault()
    const data = collect()
    const subject = typeof opts.subject === 'function' ? opts.subject(data) : opts.subject
    const label = (btn && btn.getAttribute('data-wait')) || opts.sending || 'Sending…'
    const btnHtml = btn ? btn.innerHTML : ''
    if (btn) { btn.disabled = true; btn.innerHTML = label }
    status('Sending your inquiry…')

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: opts.key || WEB3FORMS_KEY,
        subject,
        from_name: data.name || 'Website visitor',
        replyto: data.email || '',
        page: opts.page || document.title,
        ...data,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d && d.success) {
          clearInputs()
          status(opts.success || 'Inquiry sent — we’ll reply within 24 hours.', true)
        } else {
          status((d && d.message) || opts.error || 'Something went wrong. Email us directly at info [at] lemur.legal.', false)
        }
      })
      .catch(() => {
        status(opts.error || 'Network error. Email us directly at info [at] lemur.legal.', false)
      })
      .finally(() => {
        if (btn) { btn.disabled = false; btn.innerHTML = btnHtml }
      })
  }

  if (form) fx.on(form, 'submit', handler)
  else if (btn) fx.on(btn, 'click', handler)
}

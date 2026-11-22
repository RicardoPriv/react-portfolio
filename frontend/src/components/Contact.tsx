import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../config/profile'
import '../styles/contact.css'

const emptyForm = { name: '', email: '', message: '' }
type FormValues = typeof emptyForm

function validate({ name, email, message }: FormValues): Partial<FormValues> {
  const errors: Partial<FormValues> = {}

  if (!name.trim()) errors.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!message.trim()) errors.message = 'Enter a message.'

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [draftUrl, setDraftUrl] = useState('')
  const form = useRef<HTMLFormElement>(null)
  const errors = submitted ? validate(values) : {}

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setDraftUrl('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    const firstError = Object.keys(validate(values))[0]

    if (firstError) {
      form.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus()
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name.trim()}`)
    const body = encodeURIComponent(`${values.message.trim()}\r\n\r\n${values.name.trim()}\r\n${values.email.trim()}`)
    const url = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setDraftUrl(url)
    window.location.assign(url)
  }

  return (
    <section className="container page" aria-labelledby="contact-title">
      <div className="contact-grid">
        <div className="page-heading">
          <h1 id="contact-title">Get in touch</h1>
          <p>Fill out the form to open a draft in your email app, or find me on GitHub.</p>
          <a className="contact-link" href={profile.githubUrl}>GitHub profile</a>
        </div>
        <form className="contact-form" ref={form} onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" autoComplete="name" required maxLength={100}
              value={values.name} onChange={(event) => update('name', event.target.value)}
              aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254}
              value={values.email} onChange={(event) => update('email', event.target.value)}
              aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
            {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" required maxLength={800} rows={5}
              value={values.message} onChange={(event) => update('message', event.target.value)}
              aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
          </div>
          <button className="button primary" type="submit">Open email draft</button>
          <div role="status">
            {draftUrl && <p>If your email app didn’t open, <a href={draftUrl}>open the draft again</a>.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

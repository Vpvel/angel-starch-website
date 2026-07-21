import { useState } from 'react'
import { useContactViewModel } from '../../viewmodels/useContactViewModel'
import './ContactPage.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  country: '',
  message: '',
}

export default function ContactPage() {
  const page = useContactViewModel()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Website inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry: ${form.country}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `${page.emailHref}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <article className="contact-page">
      <header className="contact-page__hero">
        <div className="container contact-page__hero-inner">
          <h1>{page.heroTitle}</h1>
          <div className="contact-page__hero-art" aria-hidden="true">
            <svg viewBox="0 0 64 64" className="contact-page__hero-icon">
              <rect x="8" y="16" width="48" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M10 18l22 16L54 18" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            <svg viewBox="0 0 64 64" className="contact-page__hero-icon">
              <path
                d="M12 18h30a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H28l-10 8v-8h-6a6 6 0 0 1-6-6V24a6 6 0 0 1 6-6z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>
      </header>

      <section className="contact-page__map-wrap">
        <iframe
          className="contact-page__map"
          title="Angel Starch & Food Pvt Ltd location map"
          src={page.mapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </section>

      <section className="contact-page__main">
        <div className="container contact-page__layout">
          <aside className="contact-page__card">
            <h2>{page.companyName}</h2>

            <div className="contact-page__detail">
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
                  />
                </svg>
              </span>
              <p>{page.address}</p>
            </div>

            <div className="contact-page__detail">
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                  />
                </svg>
              </span>
              <a href={page.emailHref}>{page.email}</a>
            </div>

            <div className="contact-page__detail">
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                  />
                </svg>
              </span>
              <a href={page.phoneHref}>{page.phone}</a>
            </div>

            <figure className="contact-page__plant">
              <img src={page.plantImage} alt={page.plantImageAlt} />
            </figure>
          </aside>

          <div className="contact-page__form-wrap">
            <p className="contact-page__form-intro">{page.formIntro}</p>

            <form className="contact-page__form" onSubmit={onSubmit}>
              <label>
                <span className="sr-only">Your Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name*"
                  value={form.name}
                  onChange={onChange}
                />
              </label>
              <label>
                <span className="sr-only">Your Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email*"
                  value={form.email}
                  onChange={onChange}
                />
              </label>
              <label>
                <span className="sr-only">Your Phone Number</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Your Phone Number*"
                  value={form.phone}
                  onChange={onChange}
                />
              </label>
              <label>
                <span className="sr-only">Your Country</span>
                <input
                  name="country"
                  type="text"
                  required
                  placeholder="Your Country*"
                  value={form.country}
                  onChange={onChange}
                />
              </label>
              <label>
                <span className="sr-only">Your Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message*"
                  value={form.message}
                  onChange={onChange}
                />
              </label>

              <button type="submit">Submit</button>

              {submitted ? (
                <p className="contact-page__success" role="status">
                  Opening your email app to send the inquiry…
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section className="contact-page__offices">
        <div className="container contact-page__offices-grid">
          {page.offices.map((office) => (
            <article key={office.title} className="contact-page__office-card">
              <h3>{office.title}</h3>
              {office.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </article>
  )
}

import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { COMPANY } from '../../../domain/models/company'
import './EnquiryDialog.css'

const PRODUCT_OPTIONS = [
  'Modified Starch',
  'Native Starch',
  'Tapioca Starch',
  'Maize / Corn Starch',
  'Clean Label Starch',
  'Liquid Glucose',
  'Maltodextrin',
  'Functional Food Ingredients',
  'Other',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  product: '',
  location: '',
}

export default function EnquiryDialog({ open, onClose }) {
  const titleId = useId()
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct: ${form.product}\nLocation: ${form.location}`,
    )
    window.location.href = `${COMPANY.emailHref}?subject=${subject}&body=${body}`
    setForm(initialForm)
    onClose()
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="enquiry-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onClick={onClose}
        >
          <motion.div
            className="enquiry-dialog__panel"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="enquiry-dialog__close"
              aria-label="Close enquiry form"
              onClick={onClose}
            >
              ×
            </button>

            <h2 id={titleId}>Enquiry Form</h2>

            <form className="enquiry-dialog__form" onSubmit={onSubmit}>
              <label>
                <span className="sr-only">Your name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                />
              </label>

              <label>
                <span className="sr-only">Your e-mail</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your e-mail"
                  value={form.email}
                  onChange={onChange}
                />
              </label>

              <label>
                <span className="sr-only">Your phone number</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={onChange}
                />
              </label>

              <label className="enquiry-dialog__select-wrap">
                <span className="sr-only">Select Product</span>
                <select
                  name="product"
                  required
                  value={form.product}
                  onChange={onChange}
                >
                  <option value="" disabled>
                    Select Product
                  </option>
                  {PRODUCT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="sr-only">Your location</span>
                <input
                  name="location"
                  type="text"
                  required
                  placeholder="Your location"
                  value={form.location}
                  onChange={onChange}
                />
              </label>

              <button type="submit">Submit</button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

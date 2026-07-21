import { Link } from 'react-router-dom'
import { useLayoutViewModel } from '../../viewmodels/useLayoutViewModel'
import { useEnquiry } from '../shared/EnquiryContext'
import './Footer.css'

const exploreLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/categories', label: 'Categories' },
  { path: '/blogs', label: 'Blogs' },
]

const companyLinks = [
  { path: '/news', label: 'News & Events' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact Us' },
  { action: 'enquiry', label: 'Enquiry' },
]

function SocialIcon({ id }) {
  switch (id) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"
          />
        </svg>
      )
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M23 12.2s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18.5 5.2 12 5.2 12 5.2s-6.5 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8 2.3.5 8.8.5 8.8.5s6.5 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM9.8 15.5v-6.6l6.3 3.3-6.3 3.3z"
          />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 2.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8zm0 2A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
          />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.3 9.3H3.5V20h2.8V9.3zM4.9 4A1.6 1.6 0 1 0 4.9 7.2 1.6 1.6 0 0 0 4.9 4zM20.5 20h-2.8v-5.6c0-1.5-.5-2.5-1.8-2.5a1.9 1.9 0 0 0-1.8 1.3c-.1.3-.1.6-.1.9V20h-2.8s0-9.4 0-10.7h2.8v1.7c.5-.8 1.5-1.9 3.5-1.9 2.5 0 4.4 1.6 4.4 5.2V20z"
          />
        </svg>
      )
    case 'x':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 4h4.1l4.1 5.8L17.2 4H20l-6.2 7.1L20.5 20h-4.1l-4.5-6.3L6.5 20H4l6.6-7.5L4 4z"
          />
        </svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  const { company } = useLayoutViewModel()
  const { openEnquiry } = useEnquiry()

  return (
    <footer className="footer" id="contact">
      <div className="footer__main container">
        <div className="footer__col footer__col--brand">
          <img className="footer__logo" src={company.logo} alt={company.name} />
          <h2 className="footer__brand-title">{company.name}</h2>
          <p className="footer__blurb">{company.blurb}</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Explore</h3>
          <ul className="footer__list">
            {exploreLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Company</h3>
          <ul className="footer__list">
            {companyLinks.map((link) => (
              <li key={link.path || link.action}>
                {link.action === 'enquiry' ? (
                  <button
                    type="button"
                    className="footer__link-btn"
                    onClick={openEnquiry}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link to={link.path}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Contact</h3>

          <div className="footer__detail">
            <span className="footer__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
                />
              </svg>
            </span>
            <div>
              <p className="footer__label">Address</p>
              <p className="footer__value">{company.address}</p>
            </div>
          </div>

          <div className="footer__detail">
            <span className="footer__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                />
              </svg>
            </span>
            <div>
              <p className="footer__label">Email</p>
              <a className="footer__value" href={company.emailHref}>
                {company.email}
              </a>
            </div>
          </div>

          <div className="footer__detail">
            <span className="footer__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                />
              </svg>
            </span>
            <div>
              <p className="footer__label">Phone</p>
              <a className="footer__value" href={company.phoneHref}>
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="footer__bar-inner container">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <ul className="footer__social" aria-label="Social media">
            {company.social.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <SocialIcon id={item.id} />
                </a>
              </li>
            ))}
          </ul>

          <p>Erode, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  )
}

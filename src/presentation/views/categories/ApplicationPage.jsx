import { useState } from 'react'
import { Link } from 'react-router-dom'

function FeatureIcon({ type }) {
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (type) {
    case 'label':
      return (
        <svg {...common}>
          <rect x="10" y="14" width="28" height="20" rx="3" />
          <path d="M16 20h16M16 26h10M16 32h12" />
        </svg>
      )
    case 'nutrition':
      return (
        <svg {...common}>
          <path d="M24 8c-6 8-12 12-12 20a12 12 0 0 0 24 0c0-8-6-12-12-20z" />
          <path d="M24 28v8" />
        </svg>
      )
    case 'sugar':
      return (
        <svg {...common}>
          <path d="M14 18h20l-2 18H16L14 18z" />
          <path d="M18 18c0-4 2.5-8 6-8s6 4 6 8" />
        </svg>
      )
    case 'gluten':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="14" />
          <path d="M16 24h16M24 16v16" />
          <path d="M18 18l12 12M30 18L18 30" />
        </svg>
      )
    case 'candy':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="8" />
          <path d="M16 16l-6-6M32 16l6-6M16 32l-6 6M32 32l6 6" />
        </svg>
      )
    default:
      return null
  }
}

export default function ApplicationPage({ category, subcategory }) {
  const page = subcategory.page
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <article className="application-page">
      <header className="application-page__hero">
        <div className="container">
          <p className="application-page__crumb">
            <Link to="/categories">Categories</Link>
            <span>/</span>
            <Link to={category.path}>{category.name}</Link>
            <span>/</span>
            <span>{subcategory.name}</span>
          </p>
          <h1>{page.heroTitle}</h1>
        </div>
      </header>

      <section className="application-page__intro">
        <div className="container">
          <h2>{page.introHeading}</h2>
          {page.introParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}

          {page.features?.length ? (
            <ul className="application-page__features">
              {page.features.map((feature) => (
                <li key={feature.title}>
                  <span className="application-page__icon">
                    <FeatureIcon type={feature.icon} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {page.productFeaturesHeading ? (
        <section className="application-page__product-features">
          <div className="container">
            <h2>{page.productFeaturesHeading}</h2>
            <ul>
              {page.productFeatures.map((feature) => (
                <li key={feature.title}>
                  <strong>{feature.title}</strong> {feature.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {page.galleryImages?.length ? (
        <section className="application-page__gallery">
          <div className="container">
            <ul className="application-page__gallery-grid">
              {page.galleryImages.map((image) => (
                <li key={image.src}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {page.growthHeading ? (
        <section className="application-page__growth">
          <div className="container application-page__growth-row">
            <div className="application-page__growth-copy">
              <h2>{page.growthHeading}</h2>
              <ul>
                {page.growthPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <figure className="application-page__growth-media">
              <img src={page.growthImage} alt={page.growthImageAlt} />
            </figure>
          </div>
        </section>
      ) : null}

      {page.innovationsHeading ? (
        <section className="application-page__innovations">
          <div className="container">
            <h2>{page.innovationsHeading}</h2>
            <ul className="application-page__products">
              {page.products.map((product, index) => {
                const row = Math.floor(index / 4)
                const col = index % 4
                const isMagenta = (row + col) % 2 === 0

                return (
                  <li
                    key={product.name}
                    className={`application-page__product ${
                      isMagenta ? 'is-magenta' : 'is-light'
                    }`}
                  >
                    <p>{product.name}</p>
                    <Link to={product.tdsUrl}>View TDS</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ) : null}

      {page.whyHeading ? (
        <section className="application-page__why">
          <div className="container">
            <h2>{page.whyHeading}</h2>
            <ul className={page.whyNumbered ? 'is-numbered' : ''}>
              {page.whyPoints.map((point, index) => (
                <li key={point.title}>
                  {page.whyNumbered ? (
                    <span className="application-page__why-num">{index + 1}.</span>
                  ) : null}
                  <span>
                    <strong>{point.title}</strong> {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {page.video ? (
        <section className="application-page__video">
          <div className="container">
            <div className="application-page__video-frame">
              <iframe
                src={page.video.embedUrl}
                title={page.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      ) : null}

      {page.profitsHeading ? (
        <section className="application-page__profits">
          <div className="container application-page__profits-row">
            <div className="application-page__profits-copy">
              <h2>{page.profitsHeading}</h2>
              <p>{page.profitsBody}</p>
            </div>
            <figure className="application-page__profits-media">
              <img src={page.profitsImage} alt={page.profitsImageAlt} />
            </figure>
          </div>
        </section>
      ) : null}

      {page.faqs ? (
        <section className="application-page__faqs">
          <div className="container">
            <h2>
              {page.faqsHeading}
              <span />
            </h2>
            <ul>
              {page.faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <li key={faq.question} className={isOpen ? 'is-open' : ''}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="application-page__faq-bullet" />
                      {faq.question}
                    </button>
                    {isOpen ? <p>{faq.answer}</p> : null}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  )
}

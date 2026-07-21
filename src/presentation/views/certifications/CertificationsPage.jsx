import { useCertificationsViewModel } from '../../viewmodels/useCertificationsViewModel'
import PageHero from '../shared/PageHero'
import './CertificationsPage.css'

export default function CertificationsPage() {
  const page = useCertificationsViewModel()

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        image={page.banner.src}
        imageAlt={page.banner.alt}
      />
      <section className="certs section">
        <div className="container">
          <ul className="certs__grid">
            {page.items.map((item) => (
              <li key={item.src} className="certs__item">
                <img src={item.src} alt={item.name} loading="lazy" />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

import { useCareersViewModel } from '../../viewmodels/useCareersViewModel'
import PageHero from '../shared/PageHero'
import ScrollReveal from '../shared/ScrollReveal'
import './CareersPage.css'

export default function CareersPage() {
  const page = useCareersViewModel()

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        image={page.banner.src}
        imageAlt={page.banner.alt}
      />
      <section className="careers-page section">
        <div className="container">
          <ScrollReveal>
            <p className="careers-page__intro body-text">{page.intro}</p>
          </ScrollReveal>

          <ul className="careers-page__posts">
            {page.posts.map((post) => (
              <li key={post.id}>
                <ScrollReveal className="careers-page__card">
                  <img src={post.image} alt={post.alt} />
                  <div className="careers-page__meta">
                    <h2>{post.title}</h2>
                    <p>{post.location}</p>
                    <div className="careers-page__actions">
                      <a href={`mailto:${page.applyEmail}?subject=Application - ${post.title}`}>
                        Apply Now
                      </a>
                      <a href={`tel:${page.applyPhone}`}>{page.applyPhone}</a>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

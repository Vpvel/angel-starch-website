import { Link } from 'react-router-dom'
import { useCategoriesViewModel } from '../../viewmodels/useCategoriesViewModel'
import PageHero from '../shared/PageHero'
import ScrollReveal from '../shared/ScrollReveal'
import './CategoriesPage.css'

export default function CategoriesPage() {
  const page = useCategoriesViewModel()

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />
      <section className="categories-page section">
        <div className="container">
          <ScrollReveal className="categories-page__panel">
            <div className="categories-page__head">
              <h2>Categories</h2>
            </div>
            <ul className="categories-page__list">
              {page.items.map((item) => (
                <li key={item.slug}>
                  <Link to={item.path}>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <span aria-hidden="true">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

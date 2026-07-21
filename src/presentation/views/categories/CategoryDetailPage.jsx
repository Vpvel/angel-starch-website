import { Link, Navigate, useParams } from 'react-router-dom'
import {
  useCategoryDetailViewModel,
  useSubcategoryViewModel,
} from '../../viewmodels/useCategoriesViewModel'
import PageHero from '../shared/PageHero'
import ScrollReveal from '../shared/ScrollReveal'
import ApplicationPage from './ApplicationPage'
import './CategoriesPage.css'
import './ApplicationPage.css'

export function CategoryDetailPage() {
  const { categorySlug } = useParams()
  const category = useCategoryDetailViewModel(categorySlug)

  if (!category) {
    return <Navigate to="/categories" replace />
  }

  return (
    <>
      <PageHero title={category.name} subtitle={category.desc} />
      <section className="categories-page section">
        <div className="container">
          <ScrollReveal className="categories-detail">
            <div className="categories-detail__crumb">
              <Link to="/categories">Categories</Link>
              <span>/</span>
              <span>{category.name}</span>
            </div>

            {category.children.length > 0 ? (
              <ul className="categories-detail__grid">
                {category.children.map((child) => (
                  <li key={child.slug}>
                    <Link to={child.path}>
                      <h3>{child.name}</h3>
                      <p>{child.desc}</p>
                      <span>View application ›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="categories-detail__empty body-text">
                {category.desc}
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export function SubcategoryPage() {
  const { categorySlug, subSlug } = useParams()
  const data = useSubcategoryViewModel(categorySlug, subSlug)

  if (!data) {
    return <Navigate to="/categories" replace />
  }

  const { category, subcategory } = data

  if (subcategory.page) {
    return <ApplicationPage category={category} subcategory={subcategory} />
  }

  return (
    <>
      <PageHero title={subcategory.title} subtitle={subcategory.subtitle} />
      <section className="categories-page section">
        <div className="container">
          <ScrollReveal className="categories-detail categories-detail--sub">
            <div className="categories-detail__crumb">
              <Link to="/categories">Categories</Link>
              <span>/</span>
              <Link to={category.path}>{category.name}</Link>
              <span>/</span>
              <span>{subcategory.name}</span>
            </div>

            <p className="body-text">{subcategory.body}</p>

            <Link to={category.path} className="categories-detail__back">
              ← Back to {category.name}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

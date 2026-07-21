import { useNewsViewModel } from '../../viewmodels/useNewsViewModel'
import PageHero from '../shared/PageHero'
import '../about/ContentPage.css'

export default function NewsPage() {
  const page = useNewsViewModel()

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />
      <section className="content-page section">
        <div className="container content-page__stack">
          {page.items.map((item) => (
            <article key={item.title}>
              <p className="eyebrow">{item.date}</p>
              <h2 className="section-heading">{item.title}</h2>
              <p className="body-text">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

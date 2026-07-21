import { useBlogsViewModel } from '../../viewmodels/useBlogsViewModel'
import PageHero from '../shared/PageHero'
import '../about/ContentPage.css'

export default function BlogsPage() {
  const page = useBlogsViewModel()

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />
      <section className="content-page section">
        <div className="container">
          <ul className="content-page__grid">
            {page.posts.map((post) => (
              <li key={post.title} className="content-page__card">
                <p className="eyebrow">{post.meta}</p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

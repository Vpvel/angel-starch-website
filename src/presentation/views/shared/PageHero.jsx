import './PageHero.css'

export default function PageHero({ title, subtitle, image, imageAlt = '' }) {
  return (
    <section className={`page-hero${image ? ' page-hero--image' : ''}`}>
      {image ? (
        <img className="page-hero__bg" src={image} alt={imageAlt} />
      ) : null}
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__content">
        <h1>{title}</h1>
        {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
      </div>
    </section>
  )
}

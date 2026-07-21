import './ProductsSection.css'

export default function ProductsSection({ products }) {
  return (
    <section className="products section">
      <div className="products__row container">
        <div className="products__copy">
          <p className="products__eyebrow">{products.eyebrow}</p>
          <h2 className="products__heading">{products.heading}</h2>
          {products.paragraphs.map((paragraph) => (
            <p className="products__text" key={paragraph.slice(0, 32)}>
              {paragraph}
            </p>
          ))}
        </div>

        <figure className="products__media">
          <img src={products.image} alt={products.imageAlt} />
        </figure>
      </div>
    </section>
  )
}

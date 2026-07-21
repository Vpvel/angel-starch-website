import './WelcomeSection.css'

export default function WelcomeSection({ welcome }) {
  const [lead, ...rest] = welcome.paragraphs

  return (
    <section className="welcome section">
      <div className="welcome__row container">
        <figure className="welcome__media">
          <img src={welcome.image} alt={welcome.imageAlt} />
        </figure>

        <div className="welcome__copy">
          <p className="welcome__eyebrow">{welcome.eyebrow}</p>
          <h2 className="welcome__heading">{welcome.heading}</h2>
          <p className="welcome__lead">{lead}</p>
        </div>
      </div>

      {rest.length > 0 ? (
        <div className="welcome__more container">
          {rest.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </section>
  )
}

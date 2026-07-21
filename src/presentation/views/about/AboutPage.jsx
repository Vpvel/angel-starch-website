import { useAboutViewModel } from '../../viewmodels/useAboutViewModel'
import PageHero from '../shared/PageHero'
import ScrollReveal from '../shared/ScrollReveal'
import './AboutPage.css'

function highlightPartners(text) {
  const names = [
    'US and Europe',
    'Ferrara Candy Company',
    'Con Agra',
    'Danone International',
    'Nestle International',
    'Nepra Foods',
    'Global Nutritional Corp',
    'INNO Foods',
    'Tyson Foods',
    'INDO – NISSIN Foods',
    'INDO - NISSIN Foods',
    'ANGEL STARCH',
  ]

  const pattern = new RegExp(
    `(${names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g',
  )
  const parts = text.split(pattern)

  return parts.map((part, index) =>
    names.includes(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  )
}

export default function AboutPage() {
  const page = useAboutViewModel()

  return (
    <>
      <PageHero title={page.title} subtitle={page.subtitle} />

      <section className="about-page">
        <div className="about-page__welcome container">
          <ScrollReveal className="about-page__welcome-copy" x={-28} delay={0.05}>
            <p className="about-page__eyebrow">{page.welcome.eyebrow}</p>
            <h2 className="about-page__heading">{page.welcome.heading}</h2>
            <p className="about-page__lead">{page.welcome.paragraphs[0]}</p>
            <p>{page.welcome.paragraphs[1]}</p>
          </ScrollReveal>
          <ScrollReveal as="figure" className="about-page__welcome-media" x={28} delay={0.15}>
            <img src={page.welcome.image} alt={page.welcome.imageAlt} />
          </ScrollReveal>
        </div>

        <ScrollReveal as="section" className="about-page__md" delay={0.05}>
          <div className="about-page__md-inner container">
            <ScrollReveal className="about-page__md-copy" x={-24} delay={0.1}>
              <p>{page.leadership.message}</p>
              <p className="about-page__md-sign">
                <strong>{page.leadership.name}</strong>
                <span>{page.leadership.role}</span>
              </p>
            </ScrollReveal>
            <ScrollReveal as="figure" className="about-page__md-photo" x={24} delay={0.2}>
              <img
                src={page.leadership.image}
                alt={page.leadership.imageAlt}
              />
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal className="about-page__video container" delay={0.05}>
          <h2 className="about-page__heading">{page.video.title}</h2>
          <div className="about-page__video-frame">
            <iframe
              src={page.video.embedUrl}
              title={page.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="about-page__collaborate container" delay={0.05}>
          <h2>
            {page.collaborate[0]}
            <br />
            {page.collaborate[1]}
          </h2>
        </ScrollReveal>

        <ScrollReveal className="about-page__foodix container" delay={0.08}>
          <div className="about-page__foodix-card">
            <p>
              {page.foodix.lines[0]}
              <br />
              {page.foodix.lines[1]}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="about-page__columns container" delay={0.05}>
          {page.global.columns.map((text, index) => (
            <ScrollReveal key={text.slice(0, 40)} delay={0.08 * index} y={28}>
              <p>{highlightPartners(text)}</p>
            </ScrollReveal>
          ))}
        </ScrollReveal>

        <ScrollReveal as="section" className="about-page__plant" delay={0.05}>
          <div className="about-page__plant-inner container">
            <ScrollReveal x={-24} delay={0.1}>
              <h2 className="about-page__heading">{page.plantBased.heading}</h2>
              <p>{page.plantBased.body}</p>
            </ScrollReveal>
            <ScrollReveal as="figure" x={24} delay={0.18}>
              <img src={page.plantBased.image} alt={page.plantBased.imageAlt} />
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <div className="about-page__bottom container">
          <ScrollReveal as="article" delay={0.05} y={30}>
            <h2 className="about-page__heading">{page.vision.heading}</h2>
            <p>{page.vision.body}</p>
          </ScrollReveal>
          <ScrollReveal as="article" delay={0.12} y={30}>
            <h2 className="about-page__heading">{page.mission.heading}</h2>
            <ul>
              {page.mission.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal as="article" className="about-page__expertise" delay={0.08} y={30}>
            <h2 className="about-page__heading">{page.expertise.heading}</h2>
            <p>{page.expertise.body}</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

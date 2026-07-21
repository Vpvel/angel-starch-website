import { useEffect, useMemo, useState } from 'react'
import './OurBuyersSection.css'

const ITEM_WIDTH = 110

export default function OurBuyersSection({ buyers }) {
  const logos = buyers.logos
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const track = useMemo(() => [...logos, ...logos], [logos])

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % logos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [paused, logos.length])

  const prev = () =>
    setIndex((i) => (i - 1 + logos.length) % logos.length)
  const next = () => setIndex((i) => (i + 1) % logos.length)

  return (
    <section
      className="buyers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <h2 className="buyers__heading">{buyers.heading}</h2>

        <div className="buyers__slider">
          <button
            type="button"
            className="buyers__arrow buyers__arrow--left"
            aria-label="Previous buyers"
            onClick={prev}
          >
            ‹
          </button>

          <div className="buyers__viewport">
            <ul
              className="buyers__track"
              style={{
                transform: `translateX(-${index * ITEM_WIDTH}px)`,
              }}
            >
              {track.map((logo, i) => (
                <li key={`${logo.src}-${i}`} className="buyers__item">
                  <img src={logo.src} alt={logo.name} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="buyers__arrow buyers__arrow--right"
            aria-label="Next buyers"
            onClick={next}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

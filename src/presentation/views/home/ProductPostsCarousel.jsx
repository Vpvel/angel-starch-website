import { useEffect, useId, useState } from 'react'
import './ProductPostsCarousel.css'

export default function ProductPostsCarousel({ productPosts, onEnquire }) {
  const items = productPosts.items
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [zoomItem, setZoomItem] = useState(null)
  const titleId = useId()
  const total = items.length

  useEffect(() => {
    if (paused || zoomItem || total < 2) return undefined
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % total)
    }, 3500)
    return () => clearInterval(timer)
  }, [paused, zoomItem, total])

  useEffect(() => {
    if (!zoomItem) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setZoomItem(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [zoomItem])

  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  const getOffset = (index) => {
    let offset = index - active
    const half = Math.floor(total / 2)
    if (offset > half) offset -= total
    if (offset < -half) offset += total
    return offset
  }

  const openZoom = (item, index) => {
    setActive(index)
    setZoomItem(item)
  }

  const closeZoom = () => setZoomItem(null)

  return (
    <section
      className="product-posts"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container product-posts__inner">
        <h2 className="product-posts__heading">{productPosts.heading}</h2>
        {productPosts.subtitle ? (
          <p className="product-posts__subtitle">{productPosts.subtitle}</p>
        ) : null}

        <div className="product-posts__stage-wrap">
          <button
            type="button"
            className="product-posts__arrow product-posts__arrow--left"
            aria-label="Previous product post"
            onClick={prev}
          >
            ‹
          </button>

          <div className="product-posts__stage" aria-live="polite">
            {items.map((item, index) => {
              const offset = getOffset(index)
              const abs = Math.abs(offset)
              if (abs > 2) return null

              const scale = 1 - abs * 0.16
              const translateX = offset * 52
              const zIndex = 20 - abs

              return (
                <button
                  type="button"
                  key={item.id}
                  className={`product-posts__card ${abs === 0 ? 'is-active' : ''}`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale})`,
                    zIndex,
                    opacity: abs === 2 ? 0.5 : 1,
                  }}
                  onClick={() => {
                    if (abs === 0) {
                      openZoom(item, index)
                      return
                    }
                    setActive(index)
                  }}
                  aria-label={`Open ${item.title}`}
                  aria-current={abs === 0 ? 'true' : undefined}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                </button>
              )
            })}
          </div>

          <button
            type="button"
            className="product-posts__arrow product-posts__arrow--right"
            aria-label="Next product post"
            onClick={next}
          >
            ›
          </button>
        </div>

        <div className="product-posts__dots" role="tablist" aria-label="Product posts">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`product-posts__dot ${index === active ? 'is-active' : ''}`}
              aria-label={`Show ${item.title}`}
              aria-selected={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      {zoomItem ? (
        <div
          className="product-posts__zoom"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={closeZoom}
        >
          <div
            className="product-posts__zoom-dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="product-posts__zoom-close"
              aria-label="Close zoom view"
              onClick={closeZoom}
            >
              ×
            </button>

            <h3 id={titleId} className="product-posts__zoom-title">
              {zoomItem.title}
            </h3>

            <div className="product-posts__zoom-media">
              <img src={zoomItem.image} alt={zoomItem.title} />
            </div>

            <div className="product-posts__zoom-actions">
              <button
                type="button"
                className="product-posts__zoom-cta"
                onClick={() => {
                  closeZoom()
                  onEnquire?.()
                }}
              >
                Check It Now
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

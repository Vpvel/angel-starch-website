import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './BannerSlider.css'

const copyVariants = {
  enter: { opacity: 0, y: 22 },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.28 },
  },
}

const itemVariants = {
  enter: { opacity: 0, y: 14 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const lineVariants = {
  enter: { scaleX: 0, opacity: 0 },
  center: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function BannerSlider({ slides }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = slides[active]

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [paused, slides.length])

  return (
    <section
      className="banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, index) => (
        <div
          key={item.id}
          className={`banner__slide ${index === active ? 'is-active' : ''}`}
          aria-hidden={index !== active}
        >
          <div
            className="banner__image"
            style={{ backgroundImage: `url(${item.image})` }}
          />
        </div>
      ))}

      <div className="banner__shade" />

      <div className="banner__content container">
        <AnimatePresence mode="wait">
          <motion.div
            className="banner__copy"
            key={slide.id}
            variants={copyVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.h1 className="banner__title" variants={itemVariants}>
              {slide.title.replace(/\.$/, '')}
            </motion.h1>

            <motion.span
              className="banner__line"
              variants={lineVariants}
              style={{ originX: 0 }}
            />

            <motion.p className="banner__text" variants={itemVariants}>
              {slide.text}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="banner__progress" aria-hidden="true">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`banner__dot ${index === active ? 'is-active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActive(index)}
          >
            {index === active ? (
              <motion.span
                className="banner__dot-fill"
                key={`${item.id}-fill-${paused}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused ? 0 : 1 }}
                transition={{ duration: paused ? 0 : 3, ease: 'linear' }}
                style={{ originX: 0 }}
              />
            ) : null}
          </button>
        ))}
      </div>
    </section>
  )
}

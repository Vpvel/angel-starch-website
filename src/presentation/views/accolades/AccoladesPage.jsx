import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAccoladesViewModel } from '../../viewmodels/useAccoladesViewModel'
import PageHero from '../shared/PageHero'
import './AccoladesPage.css'

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AccoladesPage() {
  const page = useAccoladesViewModel()
  const titleId = useId()
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActive(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active])

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        image={page.banner.src}
        imageAlt={page.banner.alt}
      />
      <section className="accolades section">
        <motion.div
          className="container accolades__grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          {page.items.map((item) => (
            <motion.article
              key={item.image || item.title}
              className="accolades__card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <button
                type="button"
                className="accolades__hit"
                onClick={() => setActive(item)}
                aria-label={`View ${item.title}`}
              >
                {item.image ? (
                  <div className="accolades__media">
                    <img
                      src={item.image}
                      alt=""
                      width={512}
                      height={512}
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="accolades__copy">
                  {item.year ? <p className="eyebrow">{item.year}</p> : null}
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <span className="accolades__view">View</span>
                </div>
              </button>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="accolades-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="accolades-dialog__panel"
              initial={{ opacity: 0, y: 32, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="accolades-dialog__close"
                aria-label="Close"
                onClick={() => setActive(null)}
              >
                ×
              </button>

              {active.image ? (
                <motion.div
                  className="accolades-dialog__media"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.08, duration: 0.35 }}
                >
                  <img
                    src={active.image}
                    alt={active.title}
                    width={512}
                    height={512}
                  />
                </motion.div>
              ) : null}

              <motion.div
                className="accolades-dialog__copy"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.35 }}
              >
                {active.year ? <p className="eyebrow">{active.year}</p> : null}
                <h2 id={titleId}>{active.title}</h2>
                <p>{active.body}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

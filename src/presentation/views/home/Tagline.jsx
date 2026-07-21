import { motion } from 'framer-motion'
import AnimatedText from '../shared/AnimatedText'
import './Tagline.css'

const TAGLINE_LINES = [
  'Starch Manufacturers, Exporters &',
  'Suppliers in India',
]

export default function Tagline({ text }) {
  const lines = Array.isArray(text) ? text : TAGLINE_LINES

  return (
    <section className="tagline" aria-label="Company focus">
      <div className="container">
        <motion.h2
          className="tagline__highlight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {lines.map((line) => (
            <span key={line} className="tagline__line">
              <AnimatedText text={line} as="span" />
            </span>
          ))}
        </motion.h2>
      </div>
    </section>
  )
}

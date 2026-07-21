import { motion } from 'framer-motion'
import AnimatedText from '../shared/AnimatedText'
import './Tagline.css'

export default function Tagline({ text }) {
  return (
    <section className="tagline" aria-label="Company focus">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedText
            as="h2"
            text={text}
            className="tagline__highlight"
          />
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  figure: motion.figure,
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  x = 0,
  y = 36,
  as = 'div',
}) {
  const MotionTag = tags[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

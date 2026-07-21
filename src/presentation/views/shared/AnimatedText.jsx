import { motion } from 'framer-motion'
import './AnimatedText.css'

const wordVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.045,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function AnimatedText({
  text,
  as: Tag = 'span',
  className = '',
  split = 'words',
}) {
  const parts =
    split === 'chars'
      ? Array.from(text)
      : text.split(' ').map((word, index, arr) =>
          index === arr.length - 1 ? word : `${word} `,
        )

  return (
    <Tag className={`animated-text ${className}`.trim()}>
      {parts.map((part, index) => (
        <motion.span
          key={`${part}-${index}`}
          className="animated-text__unit"
          custom={index}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
        >
          {part === ' ' ? '\u00A0' : part}
        </motion.span>
      ))}
    </Tag>
  )
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './ScrollTextAnimator.css'

const SELECTOR = [
  'h1',
  'h2',
  'h3',
  'h4',
  'p',
  'li',
  '.eyebrow',
  'figcaption',
  'label',
  '.section-heading',
  '.body-text',
].join(', ')

const SKIP = [
  '[data-reveal]',
  '.banner',
  '.enquiry-dialog',
  '.animated-text',
  '.product-posts__zoom',
  '.accolades-dialog',
  '.accolades__card',
  '.accolades__grid',
  '.header',
  'button',
  'nav',
].join(', ')

export default function ScrollTextAnimator() {
  const { pathname } = useLocation()

  useEffect(() => {
    const roots = [document.querySelector('main'), document.querySelector('.footer')].filter(
      Boolean,
    )
    if (!roots.length) return undefined

    const targets = roots.flatMap((root) =>
      [...root.querySelectorAll(SELECTOR)].filter((el) => {
        if (el.closest(SKIP)) return false
        if (el.dataset.scrollText === 'ready') return false
        return el.textContent?.trim().length > 0
      }),
    )

    targets.forEach((el, index) => {
      el.classList.add('scroll-text')
      el.dataset.scrollText = 'ready'
      el.style.setProperty('--scroll-delay', `${Math.min(index % 6, 5) * 55}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('scroll-text--in')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => observer.observe(el))

    // Reveal anything already in view on route change
    requestAnimationFrame(() => {
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          el.classList.add('scroll-text--in')
          observer.unobserve(el)
        }
      })
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}

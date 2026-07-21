import { useEffect, useState } from 'react'
import { useHomeViewModel } from '../../viewmodels/useHomeViewModel'
import ScrollReveal from '../shared/ScrollReveal'
import BannerSlider from './BannerSlider'
import Tagline from './Tagline'
import WelcomeSection from './WelcomeSection'
import ProductsSection from './ProductsSection'
import OurBuyersSection from './OurBuyersSection'
import ProductPostsCarousel from './ProductPostsCarousel'
import EnquiryDialog from './EnquiryDialog'

export default function HomePage() {
  const { slides, tagline, welcome, products, buyers, productPosts } =
    useHomeViewModel()
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setEnquiryOpen(true), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <BannerSlider slides={slides} />
      <ScrollReveal delay={0.05}>
        <Tagline text={tagline} />
      </ScrollReveal>
      <ScrollReveal delay={0.08} y={40}>
        <WelcomeSection welcome={welcome} />
      </ScrollReveal>
      <ScrollReveal delay={0.08} y={40}>
        <ProductsSection products={products} />
      </ScrollReveal>
      <ScrollReveal delay={0.08} y={40}>
        <OurBuyersSection buyers={buyers} />
      </ScrollReveal>
      <ScrollReveal delay={0.08} y={40}>
        <ProductPostsCarousel
          productPosts={productPosts}
          onEnquire={() => setEnquiryOpen(true)}
        />
      </ScrollReveal>

      <EnquiryDialog open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  )
}

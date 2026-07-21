import { useEffect } from 'react'
import { useHomeViewModel } from '../../viewmodels/useHomeViewModel'
import { useEnquiry } from '../shared/EnquiryContext'
import ScrollReveal from '../shared/ScrollReveal'
import BannerSlider from './BannerSlider'
import Tagline from './Tagline'
import WelcomeSection from './WelcomeSection'
import ProductsSection from './ProductsSection'
import OurBuyersSection from './OurBuyersSection'
import ProductPostsCarousel from './ProductPostsCarousel'

export default function HomePage() {
  const { slides, tagline, welcome, products, buyers, productPosts } =
    useHomeViewModel()
  const { openEnquiry, tryOpenEnquiryOnce } = useEnquiry()

  useEffect(() => {
    const timer = setTimeout(() => tryOpenEnquiryOnce(), 1400)
    return () => clearTimeout(timer)
  }, [tryOpenEnquiryOnce])

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
        <ProductPostsCarousel productPosts={productPosts} onEnquire={openEnquiry} />
      </ScrollReveal>
    </>
  )
}

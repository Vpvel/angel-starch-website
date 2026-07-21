import { useMemo } from 'react'
import { homeRepository } from '../../data/repositories/homeRepository.js'

export function useHomeViewModel() {
  return useMemo(
    () => ({
      company: homeRepository.getCompany(),
      slides: homeRepository.getSlides(),
      tagline: homeRepository.getTagline(),
      welcome: homeRepository.getWelcome(),
      products: homeRepository.getProducts(),
      buyers: homeRepository.getBuyers(),
      productPosts: homeRepository.getProductPosts(),
    }),
    [],
  )
}

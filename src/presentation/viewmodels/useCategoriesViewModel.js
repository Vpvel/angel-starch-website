import { useMemo } from 'react'
import { categoriesRepository } from '../../data/repositories/categoriesRepository.js'

export function useCategoriesViewModel() {
  return useMemo(() => categoriesRepository.getPage(), [])
}

export function useCategoryDetailViewModel(slug) {
  return useMemo(() => categoriesRepository.getBySlug(slug), [slug])
}

export function useSubcategoryViewModel(categorySlug, subSlug) {
  return useMemo(
    () => categoriesRepository.getSubcategory(categorySlug, subSlug),
    [categorySlug, subSlug],
  )
}

import { useMemo } from 'react'
import { newsRepository } from '../../data/repositories/newsRepository.js'

export function useNewsViewModel() {
  return useMemo(() => newsRepository.getPage(), [])
}

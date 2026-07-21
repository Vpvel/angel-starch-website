import { useMemo } from 'react'
import { blogsRepository } from '../../data/repositories/blogsRepository.js'

export function useBlogsViewModel() {
  return useMemo(() => blogsRepository.getPage(), [])
}

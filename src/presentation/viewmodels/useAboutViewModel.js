import { useMemo } from 'react'
import { aboutRepository } from '../../data/repositories/aboutRepository.js'

export function useAboutViewModel() {
  return useMemo(() => aboutRepository.getPage(), [])
}

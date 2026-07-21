import { useMemo } from 'react'
import { careersRepository } from '../../data/repositories/careersRepository.js'

export function useCareersViewModel() {
  return useMemo(() => careersRepository.getPage(), [])
}

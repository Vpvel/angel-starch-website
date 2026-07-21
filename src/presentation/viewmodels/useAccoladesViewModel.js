import { useMemo } from 'react'
import { accoladesRepository } from '../../data/repositories/accoladesRepository.js'

export function useAccoladesViewModel() {
  return useMemo(() => accoladesRepository.getPage(), [])
}

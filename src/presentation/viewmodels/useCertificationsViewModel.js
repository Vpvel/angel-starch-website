import { useMemo } from 'react'
import { certificationsRepository } from '../../data/repositories/certificationsRepository.js'

export function useCertificationsViewModel() {
  return useMemo(() => certificationsRepository.getPage(), [])
}

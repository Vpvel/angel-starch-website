import { useMemo } from 'react'
import { contactRepository } from '../../data/repositories/contactRepository.js'

export function useContactViewModel() {
  return useMemo(() => contactRepository.getPage(), [])
}

import { useMemo } from 'react'
import { COMPANY } from '../../domain/models/company.js'
import { NAV_LINKS } from '../../domain/models/navigation.js'

export function useLayoutViewModel() {
  return useMemo(
    () => ({
      company: COMPANY,
      navLinks: NAV_LINKS,
    }),
    [],
  )
}

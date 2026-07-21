import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const STORAGE_KEY = 'angel-enquiry-auto-shown'

const EnquiryContext = createContext({
  openEnquiry: () => {},
  tryOpenEnquiryOnce: () => {},
  closeEnquiry: () => {},
})

export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openEnquiry = useCallback(() => setOpen(true), [])

  const tryOpenEnquiryOnce = useCallback(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // If storage is blocked, still allow a single open this session only.
    }
    setOpen(true)
  }, [])

  const closeEnquiry = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({
      enquiryOpen: open,
      openEnquiry,
      tryOpenEnquiryOnce,
      closeEnquiry,
    }),
    [open, openEnquiry, tryOpenEnquiryOnce, closeEnquiry],
  )

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  return useContext(EnquiryContext)
}

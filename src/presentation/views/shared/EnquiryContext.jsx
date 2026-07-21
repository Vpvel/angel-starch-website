import { createContext, useContext, useMemo, useState } from 'react'

const EnquiryContext = createContext({
  openEnquiry: () => {},
})

export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false)

  const value = useMemo(
    () => ({
      enquiryOpen: open,
      openEnquiry: () => setOpen(true),
      closeEnquiry: () => setOpen(false),
    }),
    [open],
  )

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  )
}

export function useEnquiry() {
  return useContext(EnquiryContext)
}

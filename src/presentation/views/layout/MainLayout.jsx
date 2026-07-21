import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsApp from './WhatsApp'
import BackToTop from './BackToTop'
import EnquiryDialog from '../home/EnquiryDialog'
import ScrollTextAnimator from '../shared/ScrollTextAnimator'
import { EnquiryProvider, useEnquiry } from '../shared/EnquiryContext'

function LayoutShell() {
  const { enquiryOpen, closeEnquiry } = useEnquiry()

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTextAnimator />
      <WhatsApp />
      <BackToTop />
      <EnquiryDialog open={enquiryOpen} onClose={closeEnquiry} />
    </>
  )
}

export default function MainLayout() {
  return (
    <EnquiryProvider>
      <LayoutShell />
    </EnquiryProvider>
  )
}

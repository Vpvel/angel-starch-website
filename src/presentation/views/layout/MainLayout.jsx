import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsApp from './WhatsApp'
import BackToTop from './BackToTop'

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
      <BackToTop />
    </>
  )
}

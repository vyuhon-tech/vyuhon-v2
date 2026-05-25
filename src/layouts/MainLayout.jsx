import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SmoothScroll from '../components/layout/SmoothScroll'

export default function MainLayout({ children, isDark }) {
  return (
    <SmoothScroll>
      <Navbar isDark={isDark} />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  )
}

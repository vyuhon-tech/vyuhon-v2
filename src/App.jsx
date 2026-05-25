import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import AIPlatform from './pages/AIPlatform'
import About from './pages/About'
import Insights from './pages/Insights'
import BlogPost from './pages/BlogPost'
// import Academy from './pages/Academy'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

const DARK_ROUTES = ['/', '/services', '/ai-platform', '/about', '/insights', '/careers', '/contact']

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  // Blog post pages also have a dark hero
  const isDark = DARK_ROUTES.includes(location.pathname) || location.pathname.startsWith('/insights/')

  return (
    <>
      <ScrollToTop />
      <MainLayout isDark={isDark}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-platform" element={<AIPlatform />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          {/* <Route path="/academy" element={<Academy />} /> */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </>
  )
}

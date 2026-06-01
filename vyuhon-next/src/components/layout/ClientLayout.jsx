'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SmoothScroll from './SmoothScroll'

const DARK_ROUTES = ['/', '/services', '/ai-platform', '/about', '/insights', '/careers', '/contact']

export default function ClientLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const isDark = DARK_ROUTES.includes(pathname) || pathname.startsWith('/insights/')

  return (
    <SmoothScroll>
      <Navbar isDark={isDark} />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  )
}

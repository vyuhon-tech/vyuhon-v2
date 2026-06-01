'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import VyuhonLogo from '../ui/VyuhonLogo'
import Button from '../ui/Button'

const NAV = [
  { label:'Services',    to:'/services' },
  { label:'AI Platform', to:'/ai-platform' },
  { label:'About',       to:'/about' },
  { label:'Insights',    to:'/insights' },
  // { label:'Academy',     to:'/academy' },
  { label:'Careers',     to:'/careers' },
]

export default function Navbar({ isDark }) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 44)
    window.addEventListener('scroll', h, { passive:true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  const dark = isDark && !scrolled

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[68px]"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.94)' : isDark ? 'rgba(10,10,15,0.82)' : 'rgba(250,250,255,0.88)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: scrolled ? '1px solid var(--border)' : isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(139,92,246,0.08)',
          boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease',
        }}>
        <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5 h-full flex items-center">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-auto">
            <VyuhonLogo light={!dark} width={100}/>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV.map(link => {
              const active = pathname === link.to
              return (
                <Link key={link.to} href={link.to}
                  className="relative px-3.5 py-2 rounded-[var(--r-sm)] text-[0.84rem] font-medium transition-all duration-200"
                  style={{ color: dark ? (active ? '#fff' : 'rgba(255,255,255,0.6)') : (active ? 'var(--ink)' : 'var(--ink-mid)') }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.07)' : 'var(--surface)'
                    e.currentTarget.style.color = dark ? '#fff' : 'var(--ink)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = dark ? (active ? '#fff' : 'rgba(255,255,255,0.6)') : (active ? 'var(--ink)' : 'var(--ink-mid)')
                  }}>
                  {link.label}
                  {active && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-purple"/>}
                </Link>
              )
            })}

            <div className="w-px h-5 mx-2 flex-shrink-0" style={{ background: dark ? 'rgba(255,255,255,0.12)' : 'var(--border)' }} />

            <Link href="/contact">
              <Button variant={dark ? 'outline-white' : 'outline'} size="sm">Get in Touch</Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-lg transition-colors ml-auto" onClick={() => setMobileOpen(true)}
            style={{ color: dark ? '#fff' : 'var(--ink)' }}>
            <Menu size={21}/>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-[999] flex flex-col items-center justify-center transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background:'rgba(8,8,12,0.97)', backdropFilter:'blur(20px)' }}>
        <button className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{ color:'rgba(255,255,255,0.6)', background:'rgba(255,255,255,0.06)' }}
          onClick={() => setMobileOpen(false)}>
          <X size={18}/>
        </button>
        {[...NAV, { label:'Contact', to:'/contact' }].map(link => (
          <Link key={link.to} href={link.to}
            className="font-heading text-[1.5rem] font-bold py-2.5 px-6 transition-colors"
            style={{ color: pathname===link.to ? '#fff' : 'rgba(255,255,255,0.45)' }}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}

'use client'

import Link from 'next/link'
import VyuhonLogo from '../ui/VyuhonLogo'
import Container from '../ui/Container'

const COLS = [
  { title: 'Company', links: [{ l: 'About Us', to: '/about' }, { l: 'Careers', to: '/careers' }, { l: 'Insights', to: '/insights' }] },
  { title: 'Services', links: [{ l: 'AI Strategy', to: '/services' }, { l: 'LLM Engineering', to: '/services' }, { l: 'MLOps', to: '/services' }, { l: 'VIP Platform', to: '/ai-platform' }] },
]

const SOCIALS = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/vyuhon/',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/vyuhon',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.173.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z'
  },
  {
    label: 'X',
    url: 'https://x.com/vyuhon',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  }
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-8" style={{ background: '#050509' }}>
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full blur-[140px] pointer-events-none -translate-y-1/2 opacity-60" style={{ background: 'rgba(139,92,246,0.07)' }} />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none -translate-y-1/2 opacity-60" style={{ background: 'rgba(16,185,129,0.06)' }} />
      <div className="absolute top-0 inset-x-0 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(139,92,246,0.25), rgba(16,185,129,0.25), rgba(255,255,255,0))' }} />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-20 mb-16 relative z-10">

          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <VyuhonLogo light={false} width={125} />
            </div>
            <p className="text-[0.95rem] leading-[1.8] max-w-[340px] mb-8 font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Engineering the AI-native enterprise — from strategy to production. We build systems that perform when it matters.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="group relative w-[42px] h-[42px] rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(16,185,129,0.25))' }} />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                    className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)' }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <h5 className="text-[0.78rem] font-bold tracking-[0.15em] uppercase mb-7" style={{ color: '#fff' }}>
                {col.title}
              </h5>
              <div className="flex flex-col gap-4">
                {col.links.map(link => (
                  <Link key={link.l} href={link.to}
                    className="group inline-flex items-center text-[0.92rem] transition-all duration-300 w-fit font-medium"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                    {link.l}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 relative z-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>

          <div className="flex flex-wrap items-center gap-6 text-[0.85rem]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <span>© {new Date().getFullYear()} Vyuhon. All rights reserved.</span>
            <div className="hidden md:block w-[3px] h-[3px] rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
            <span>MSME Registered • Government of India</span>
            <div className="hidden md:block w-[3px] h-[3px] rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
            <Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>

          <a href="mailto:hello@vyuhon.com" className="group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.18)' }}>
            <div className="relative flex items-center justify-center w-2 h-2">
              <div className="absolute inset-0 rounded-full ping-dot opacity-80" style={{ background: 'var(--purple)' }} />
              <div className="w-1.5 h-1.5 rounded-full relative z-10" style={{ background: 'var(--purple)' }} />
            </div>
            <span className="text-[0.8rem] font-bold tracking-wide transition-colors duration-200 group-hover:text-white" style={{ color: 'rgba(139,92,246,0.9)' }}>
              hello@vyuhon.com
            </span>
          </a>
        </div>
      </Container>
    </footer>
  )
}

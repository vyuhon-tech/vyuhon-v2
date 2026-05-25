import { Link } from 'react-router-dom'
import VyuhonLogo from '../ui/VyuhonLogo'

const COLS = [
  { title:'Company', links:[{l:'About Us',to:'/about'},{l:'Careers',to:'/careers'},{l:'Insights',to:'/insights'}] },
  { title:'Services', links:[{l:'AI Strategy',to:'/services'},{l:'LLM Engineering',to:'/services'},{l:'MLOps',to:'/services'},{l:'VIP Platform',to:'/ai-platform'}] },
  { title:'Academy', links:[{l:'All Programs',to:'/academy'},{l:'AI Tech Skills',to:'/academy'},{l:'Design with AI',to:'/academy'},{l:'Team Training',to:'/academy'}] },
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
    <footer style={{ background:'var(--dark2)', borderTop:'1px solid rgba(255,255,255,0.06)' }} className="pt-14 pb-7">
      <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <VyuhonLogo light={false}/>
            <p className="mt-4 text-[0.84rem] leading-relaxed max-w-[240px]" style={{ color:'rgba(255,255,255,0.3)' }}>
              Engineering the AI-native enterprise — from strategy to production.
            </p>
            <div className="flex gap-2 mt-5">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[var(--r-sm)] flex items-center justify-center cursor-pointer transition-all duration-200"
                  style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)', color:'rgba(255,255,255,0.3)', display:'flex' }}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(139,92,246,0.14)';e.currentTarget.style.borderColor='rgba(139,92,246,0.28)';e.currentTarget.style.color='var(--purple)';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.05)';e.currentTarget.style.borderColor='rgba(255,255,255,0.07)';e.currentTarget.style.color='rgba(255,255,255,0.3)';}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>
          {COLS.map(col => (
            <div key={col.title}>
              <h5 className="text-[10.5px] font-bold tracking-[0.09em] uppercase mb-4" style={{ color:'rgba(255,255,255,0.28)' }}>{col.title}</h5>
              {col.links.map(link => (
                <Link key={link.l} to={link.to} className="block text-[0.83rem] mb-2.5 transition-colors duration-200"
                  style={{ color:'rgba(255,255,255,0.38)' }}
                  onMouseEnter={e=>e.currentTarget.style.color='rgba(255,255,255,0.82)'}
                  onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.38)'}>
                  {link.l}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }} className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[0.75rem]" style={{ color:'rgba(255,255,255,0.2)' }}>© 2025 Vyuhon. All rights reserved.</p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background:'rgba(16,185,129,0.07)', border:'1px solid rgba(16,185,129,0.13)' }}>
            <div className="w-1.5 h-1.5 rounded-full ping-dot" style={{ background:'var(--teal)' }}/>
            <span className="text-[11px]" style={{ color:'rgba(16,185,129,0.6)' }}>hello@vyuhon.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

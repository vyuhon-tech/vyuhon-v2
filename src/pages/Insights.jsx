import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useHeroAnimation, useScrollReveal } from '../hooks/useScrollReveal'
import Container from '../components/ui/Container'
import { POSTS } from '../data/blogPosts'
import SEO from '../components/SEO'

function FeatCard({ p }) {
  return (
    <Link to={`/insights/${p.slug}`}
      className="group flex flex-col md:flex-row bg-white border rounded-[var(--r-xl)] overflow-hidden transition-all duration-300"
      style={{ borderColor:'var(--border)', textDecoration:'none' }}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow='var(--shadow-xl)';e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.borderColor='rgba(139,92,246,0.18)';}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='';e.currentTarget.style.borderColor='var(--border)';}}>
      <div className="w-full md:w-1.5 h-1.5 md:h-auto flex-shrink-0" style={{ background:`linear-gradient(180deg,${p.color},${p.color}60)` }}/>
      <div className="hidden md:flex items-center justify-center w-20 flex-shrink-0" style={{ borderRight:'1px solid var(--border)' }}>
        <span className="font-heading font-black" style={{ fontSize:'2.5rem', color:`${p.color}10` }}>01</span>
      </div>
      <div className="p-7 md:p-9 flex-1">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full" style={{ color:p.color, background:p.bg }}>{p.cat}</span>
          <span className="text-[0.73rem]" style={{ color:'var(--ink-soft)' }}>{p.date} · {p.rt} read</span>
          <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color:p.color, background:p.bg }}>Featured</span>
        </div>
        <h3 className="font-heading font-bold tracking-[-0.015em] leading-[1.3] mb-3 transition-colors duration-200 group-hover:text-brand-purple"
          style={{ fontSize:'1.28rem', color:'var(--ink)' }}>
          {p.title}
        </h3>
        <p className="body-md max-w-[540px]">{p.exc}</p>
        <div className="mt-5 flex items-center gap-1.5 text-[0.82rem] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color:p.color }}>
          Read article <ArrowUpRight size={14}/>
        </div>
      </div>
    </Link>
  )
}

function PostCard({ p, idx }) {
  return (
    <Link to={`/insights/${p.slug}`}
      className="group bg-white border rounded-[var(--r-xl)] overflow-hidden transition-all duration-300 flex flex-col h-full"
      style={{ borderColor:'var(--border)', textDecoration:'none' }}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow='var(--shadow-lg)';e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.borderColor='rgba(139,92,246,0.18)';}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='';e.currentTarget.style.borderColor='var(--border)';}}>
      <div className="h-[3px]" style={{ background:`linear-gradient(90deg,${p.color},${p.color}50)` }}/>
      <div className="px-6 pt-5 flex items-center justify-between">
        <span className="font-heading font-black" style={{ fontSize:'2rem', color:`${p.color}10` }}>0{idx}</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full" style={{ color:p.color, background:p.bg }}>{p.cat}</span>
      </div>
      <div className="px-6 pb-6 pt-2 flex-1 flex flex-col">
        <div className="text-[0.71rem] mb-3" style={{ color:'var(--ink-soft)' }}>{p.date} · {p.rt} read</div>
        <h4 className="font-heading font-bold tracking-[-0.01em] leading-[1.35] mb-2 flex-1 line-clamp-3 transition-colors duration-200 group-hover:text-brand-purple"
          style={{ fontSize:'0.96rem', color:'var(--ink)' }}>{p.title}</h4>
        <p className="body-sm line-clamp-2 mb-4">{p.exc}</p>
        <div className="flex items-center justify-between border-t pt-4" style={{ borderColor:'var(--border)' }}>
          <span className="text-[0.71rem]" style={{ color:'var(--ink-muted)' }}>{p.rt} read</span>
          <span className="flex items-center gap-1 text-[0.79rem] font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color:p.color }}>
            Read <ArrowUpRight size={12}/>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function Insights() {
  const heroRef = useHeroAnimation()
  const g = useScrollReveal({ selector: '.iw', stagger: 0.07, y: 18 })

  return (
    <div style={{ paddingTop:'68px' }}>
      <SEO 
        title="Insights | Vyuhon" 
        description="Research, engineering deep-dives, and strategic frameworks from the Vyuhon team."
        url="/insights" 
      />
      {/* Dark hero header */}
      <section ref={heroRef} className="relative py-20 overflow-hidden"
        style={{ background:'linear-gradient(160deg, #09090F 0%, #0A0C18 55%, #08100F 100%)', minHeight:380 }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse 65% 55% at 70% 30%, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)' }} />
        <div className="absolute pointer-events-none rounded-full blur-[90px]"
          style={{ width:400, height:320, bottom:'-8%', left:'-3%', background:'rgba(16,185,129,0.1)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="eyebrow-dark mb-4" style={{ color:'rgba(59,130,246,0.85)' }}>Insights</div>
              <h1 data-hero-word className="font-heading font-extrabold tracking-[-0.033em] text-white leading-[1.04]"
                style={{ fontSize:'clamp(2.2rem, 4.5vw, 4rem)' }}>
                Thinking at the frontier
              </h1>
            </div>
            <p data-hero-sub className="max-w-[360px] text-[1rem] leading-[1.82] md:pb-2"
              style={{ color:'rgba(255,255,255,0.46)' }}>
              Research, engineering deep-dives, and strategic frameworks from the Vyuhon team.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="section-sm pb-20 bg-white" ref={g}>
        <Container>
          <div className="iw mb-5"><FeatCard p={POSTS[0]}/></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {POSTS.slice(1).map((p, i) => (
              <div key={i} className="iw"><PostCard p={p} idx={i+2}/></div>
            ))}
          </div>
          {/* Newsletter */}
          <div className="mt-10 p-6 rounded-[var(--r-xl)] border flex flex-col sm:flex-row items-start sm:items-center gap-5"
            style={{ background:'var(--surface)', borderColor:'var(--border)' }}>
            <div className="flex-1">
              <h3 className="font-heading text-[0.93rem] font-bold text-ink mb-0.5">Get new insights by email</h3>
              <p className="body-sm">Thoughtful articles, no spam. Unsubscribe any time.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input className="flex-1 sm:w-52 bg-white border rounded-xl px-4 py-2.5 text-[0.875rem] outline-none transition-all"
                style={{ borderColor:'var(--border)' }}
                onFocus={e=>{e.target.style.borderColor='rgba(139,92,246,0.4)';}}
                onBlur={e=>{e.target.style.borderColor='var(--border)';}}
                type="email" placeholder="your@email.com"/>
              <button className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap"
                style={{ background:'linear-gradient(135deg,#8B5CF6,#7C3AED)', boxShadow:'var(--shadow-p)' }}>
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

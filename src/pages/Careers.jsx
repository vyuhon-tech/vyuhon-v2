import { MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { useHeroAnimation, useScrollReveal } from '../hooks/useScrollReveal'
import Container from '../components/ui/Container'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import CTABanner from '../components/sections/CTABanner'
import { FloatingDots, GridAccent } from '../components/illustrations/DecorativeElements'

const OPENINGS = [
  { title:'Senior ML Engineer — LLM Systems', location:'Remote / Global', type:'Full-time', note:'Founding hire', dept:'Engineering', color:'#8B5CF6', bg:'rgba(139,92,246,0.08)' },
  { title:'Staff MLOps Engineer', location:'Remote / Global', type:'Full-time', note:'Founding hire', dept:'Engineering', color:'#8B5CF6', bg:'rgba(139,92,246,0.08)' },
  { title:'AI Research Scientist — NLP', location:'Remote / Hybrid', type:'Full-time', note:'Founding hire', dept:'Research', color:'#10B981', bg:'rgba(16,185,129,0.08)' },
  { title:'AI Product Designer', location:'Remote / Global', type:'Full-time', note:'Founding hire', dept:'Design', color:'#3B82F6', bg:'rgba(59,130,246,0.08)' },
  { title:'Enterprise Account Executive', location:'Remote / Hybrid', type:'Full-time', note:'Commission + equity', dept:'Sales', color:'#F59E0B', bg:'rgba(245,158,11,0.08)' },
]

const PERKS = [
  { emoji:'🌍', label:'Remote-first', sub:'Work from anywhere globally' },
  { emoji:'⚡', label:'Equity for all', sub:'Every team member is an owner' },
  { emoji:'📚', label:'$5K learning', sub:'Annual learning & conference budget' },
  { emoji:'🛠️', label:'Build from day 1', sub:'Ship real things immediately' },
]

export default function Careers() {
  const heroRef = useHeroAnimation()
  const openRef = useScrollReveal({ selector: '.orow', stagger: 0.07, x: -12, y: 0 })

  return (
    <>
      <div style={{ paddingTop: '68px' }}>
        {/* HERO - dark */}
        <section ref={heroRef} className="relative py-24 overflow-hidden" style={{ background: '#0A0A0F', minHeight: 420 }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 70% at 25% 50%, rgba(16,185,129,0.1) 0%, transparent 65%)' }} />
          <GridAccent className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] pointer-events-none" />
          <FloatingDots className="absolute bottom-10 right-10 w-28 h-28 opacity-[0.1] pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="mb-4">
                  <span className="eyebrow-dark" style={{ color: 'rgba(16,185,129,0.75)' }}>Careers</span>
                </div>
                <h1 data-hero-word className="font-heading font-extrabold tracking-[-0.033em] text-white leading-[1.04] mb-5"
                  style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
                  Work on AI problems that matter
                </h1>
                <p data-hero-sub className="text-[1rem] text-white/45 leading-[1.85] max-w-[460px]">
                  We're building a team of people who believe AI engineering is the defining technical craft of our era. If that resonates — let's talk.
                </p>
              </div>

              {/* Perks grid */}
              <div data-hero-ctas className="grid grid-cols-2 gap-3">
                {PERKS.map((p, i) => (
                  <div key={i} className="p-5 rounded-2xl flex flex-col gap-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="text-xl">{p.emoji}</span>
                    <div>
                      <div className="font-heading text-[0.9rem] font-bold text-white/80">{p.label}</div>
                      <div className="text-[0.75rem] text-white/35 mt-0.5">{p.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* OPENINGS */}
        <section className="py-20 bg-white" ref={openRef}>
          <Container>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <div className="mb-2"><SectionLabel>Open Roles</SectionLabel></div>
                <h2 className="font-heading font-bold tracking-[-0.025em] text-ink" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
                  Current openings
                </h2>
              </div>
              <span className="text-[0.85rem] text-ink-soft">{OPENINGS.length} positions</span>
            </div>

            <div className="space-y-3">
              {OPENINGS.map((o, i) => (
                <div key={i} className="orow group flex items-center justify-between p-5 rounded-2xl border border-light-3 bg-white transition-all duration-250 hover:border-transparent hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:bg-light/60 cursor-pointer gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" style={{ background: o.color }} />
                    <div>
                      <div className="font-heading text-[0.95rem] font-bold text-ink mb-1.5 group-hover:text-brand-purple transition-colors">{o.title}</div>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1.5 text-[0.78rem] text-ink-soft"><MapPin size={11} />{o.location}</span>
                        <span className="flex items-center gap-1.5 text-[0.78rem] text-ink-soft"><Clock size={11} />{o.type}</span>
                        <span className="text-[0.78rem] text-ink-soft">· {o.note}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full" style={{ color: o.color, background: o.bg }}>{o.dept}</span>
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-250 -translate-x-1 group-hover:translate-x-0"
                      style={{ borderColor: o.color + '40', color: o.color }}>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-8 p-7 bg-light border border-light-3 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <h4 className="font-heading text-base font-bold text-ink mb-1">Don't see your role?</h4>
                <p className="text-[0.84rem] text-ink-soft">We're always interested in exceptional people. Send us your background and tell us how you'd contribute.</p>
              </div>
              <Button variant="primary" to="/contact" className="flex-shrink-0">Get in Touch →</Button>
            </div>
          </Container>
        </section>
      </div>

      <CTABanner title="Build with us from day one" subtitle="We're a small team doing big things. Every hire shapes the culture and the product." primaryLabel="View Open Roles" primaryTo="/careers" />
    </>
  )
}

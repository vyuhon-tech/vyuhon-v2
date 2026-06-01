'use client'

import { Sparkles } from 'lucide-react'
import { useHeroAnimation, useScrollReveal } from '@/hooks/useScrollReveal'
import Container from '@/components/ui/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import CTABanner from '@/components/sections/CTABanner'
import { FloatingDots, GridAccent } from '@/components/illustrations/DecorativeElements'

const PERKS = [
  { emoji:'🌍', label:'Remote-first', sub:'Work from anywhere globally' },
  { emoji:'⚡', label:'Equity for all', sub:'Every team member is an owner' },
  { emoji:'📚', label:'$5K learning', sub:'Annual learning & conference budget' },
  { emoji:'🛠️', label:'Build from day 1', sub:'Ship real things immediately' },
]

export default function CareersPage() {
  const heroRef = useHeroAnimation()
  const openRef = useScrollReveal({ selector: '.reveal-card', y: 20 })

  return (
    <>
      <div style={{ paddingTop: '68px' }}>
        <section ref={heroRef} className="relative py-24 overflow-hidden" style={{ background: '#0A0A0F', minHeight: 420 }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 25% 50%, rgba(16,185,129,0.1) 0%, transparent 65%)' }} />
          <GridAccent className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] pointer-events-none" />
          <FloatingDots className="absolute bottom-10 right-10 w-28 h-28 opacity-[0.1] pointer-events-none" />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="mb-4"><span className="eyebrow-dark" style={{ color: 'rgba(16,185,129,0.75)' }}>Careers</span></div>
                <h1 data-hero-word className="font-heading font-extrabold tracking-[-0.033em] text-white leading-[1.04] mb-5" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
                  Work on AI problems that matter
                </h1>
                <p data-hero-sub className="text-[1rem] text-white/45 leading-[1.85] max-w-[460px]">
                  We're building a team of people who believe AI engineering is the defining technical craft of our era. If that resonates — let's talk.
                </p>
              </div>
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

        <section className="py-24 bg-white" ref={openRef}>
          <Container>
            <div className="text-center mb-6">
              <div className="mb-2 justify-center flex"><SectionLabel>Opportunities</SectionLabel></div>
              <h2 className="font-heading font-bold tracking-[-0.025em] text-ink" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>Join the team</h2>
            </div>
            <div className="reveal-card max-w-[720px] mx-auto text-center mt-10 p-10 md:p-14 rounded-3xl relative overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={{ background: 'radial-gradient(120% 120% at 50% 0%, #ffffff 60%, rgba(139,92,246,0.02) 100%)', border: '1px solid rgba(139, 92, 246, 0.12)', boxShadow: '0 10px 40px -15px rgba(139, 92, 246, 0.08), 0 2px 12px -4px rgba(0,0,0,0.02)' }}>
              <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, var(--purple), var(--teal), transparent)' }} />
              <div className="w-14 h-14 rounded-2xl mx-auto mb-8 flex items-center justify-center relative float-2" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)', border: '1px solid rgba(139, 92, 246, 0.15)' }}>
                <div className="absolute inset-0 rounded-2xl blur-md opacity-20" style={{ background: 'linear-gradient(135deg, var(--purple), var(--teal))' }} />
                <Sparkles className="relative z-10 w-6 h-6" style={{ color: 'var(--purple)' }} />
              </div>
              <h3 className="font-heading font-extrabold text-[1.45rem] tracking-[-0.02em] text-ink mb-4 leading-tight">We're not hiring at the moment.</h3>
              <p className="text-[0.93rem] text-ink-soft leading-relaxed max-w-[520px] mx-auto mb-7">
                Thank you for your interest. While we don't have any open positions currently, we're always excited to connect with talented people passionate about building great products.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-[0.8rem] font-medium" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }}>
                <div className="w-1.5 h-1.5 rounded-full ping-dot" style={{ background: 'var(--teal)' }} />
                <span>Please check back later for future opportunities.</span>
              </div>
              <div className="deco-line mb-8" />
              <div>
                <p className="text-[0.82rem] text-ink-muted mb-4">Want to share your background for future considerations?</p>
                <Button variant="primary" to="/contact" className="px-6 py-2.5 text-[0.88rem]">Let's Connect →</Button>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <CTABanner title="Stay in touch" subtitle="We're always excited to meet exceptional engineers, researchers, and builders. Drop us a message anytime." primaryLabel="Get in Touch" primaryTo="/contact" />
    </>
  )
}

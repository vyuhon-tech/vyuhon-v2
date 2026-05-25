import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function CTABanner({ label, title, subtitle, primaryLabel, primaryTo, secondaryLabel, secondaryTo, accentColor = 'purple' }) {
  const ref = useScrollReveal({ y: 20, scale: 0.98, opacity: 0, duration: 0.8 })
  const isPurple = accentColor !== 'teal'

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--dark)' }}>
      {/* Glows */}
      <div className="absolute pointer-events-none rounded-full blur-[120px]"
        style={{ width:500, height:400, top:'-20%', left:'-5%',
          background: isPurple ? 'rgba(139,92,246,0.15)' : 'rgba(16,185,129,0.12)' }} />
      <div className="absolute pointer-events-none rounded-full blur-[100px]"
        style={{ width:400, height:350, bottom:'-15%', right:'-4%',
          background: isPurple ? 'rgba(16,185,129,0.08)' : 'rgba(59,130,246,0.08)' }} />

      <Container>
        <div ref={ref} className="relative rounded-[var(--r-2xl)] overflow-hidden text-center"
          style={{ background: 'linear-gradient(165deg, #18172A 0%, #111118 100%)', border:'1px solid rgba(255,255,255,0.07)', padding:'72px 40px' }}>
          {/* Subtle inner grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'48px 48px' }} />

          <div className="relative z-10">
            {label && <div className={`eyebrow-dark mb-4 ${!isPurple ? 'eyebrow-teal' : ''}`}>{label}</div>}
            <h2 className="display-lg text-white mb-4">{title}</h2>
            {subtitle && <p className="body-md max-w-[460px] mx-auto mb-10" style={{ color:'rgba(255,255,255,0.4)' }}>{subtitle}</p>}
            <div className="flex justify-center gap-3 flex-wrap">
              {primaryTo && (
                <Button variant={isPurple ? 'primary' : 'teal'} size="lg" to={primaryTo}>
                  {primaryLabel} <ArrowRight size={15} />
                </Button>
              )}
              {secondaryTo && <Button variant="outline-white" size="lg" to={secondaryTo}>{secondaryLabel}</Button>}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

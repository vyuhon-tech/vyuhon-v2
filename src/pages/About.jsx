import { useHeroAnimation, useScrollReveal } from '../hooks/useScrollReveal'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import CTABanner from '../components/sections/CTABanner'

const TEAM = [
  {
    initials: 'DD',
    name: 'Dinesh Doddaga',
    role: 'Co-Founder & CEO',
    bio: 'Designer and Product Manager with a sharp eye for user experience. Leads the product vision at Vyuhon, translating complex AI capabilities into intuitive, human-centred interfaces.',

    gradA: '#8B5CF6', gradB: '#7C3AED',
  },
  {
    initials: 'SD',
    name: 'Subhash Doddaga',
    role: 'Co-Founder & CTO',
    bio: 'Engineer at heart with a strong technical foundation spanning AI, full-stack development, and engineering leadership. Architects the decisions that make Vyuhon systems reliable.',

    gradA: '#10B981', gradB: '#059669',
  },
  {
    initials: 'LK',
    name: 'Lavanya Konda',
    role: 'CFO',
    bio: 'Lavanya brings deep expertise in technology and finance, helping drive the company to the next level. With a strong understanding of the tech industry and strategic financial management, she plays a key role in shaping growth, innovation, and long-term vision.',

    gradA: '#F43F5E', gradB: '#E11D48',
  },
  {
    initials: 'JG',
    name: 'Jagadeesh',
    role: 'CPPO',
    bio: 'Chief Product & People Officer. Bridges product management, project execution, and people operations, ensuring Vyuhon teams are aligned and building toward the right outcomes.',

    gradA: '#3B82F6', gradB: '#2563EB',
  },
]

const VALUES = [
  { icon: '🎯', color: '#8B5CF6', title: 'Production-First Mindset', body: 'We never build demos without a clear path to production. Every technical decision is made with operational reality in mind.' },
  { icon: '🤝', color: '#10B981', title: 'Embedded Partnership', body: "We work inside your teams, not alongside them. Our engineers align to your goals, culture, and cadence." },
  { icon: '⭐', color: '#3B82F6', title: 'Intellectual Honesty', body: "We tell you when AI isn't the right solution, when your data isn't ready, or when a simpler approach wins." },
  { icon: '🛡️', color: '#F59E0B', title: 'Responsible by Default', body: 'AI ethics, fairness, and safety are embedded in every system design review and deployment decision.' },
  { icon: '📈', color: '#EF4444', title: 'Outcomes Over Optics', body: 'Revenue generated, costs reduced, decisions improved — we measure success by business impact.' },
  { icon: '🎨', color: '#8B5CF6', title: 'Design + Engineering Unity', body: 'The best AI products emerge when design thinking and engineering precision work as one discipline.' },
]

export default function About() {
  const heroRef = useHeroAnimation()
  const s1 = useScrollReveal({ selector: '.s1', stagger: 0.09, y: 18 })
  const s2 = useScrollReveal({ selector: '.s2', stagger: 0.07, y: 18 })
  const s3 = useScrollReveal({ selector: '.s3', stagger: 0.09, y: 18 })

  return (
    <>
      <div style={{ paddingTop: '68px' }}>

        {/* HERO */}
        <section ref={heroRef} className="relative section overflow-hidden"
          style={{ background: 'linear-gradient(165deg, #0D0C18 0%, #0A0A0F 55%, #0B1018 100%)', minHeight: 380 }}>
          <div className="absolute pointer-events-none rounded-full blur-[160px]"
            style={{ width: 600, height: 500, top: '-10%', left: '-5%', background: 'rgba(139,92,246,0.13)' }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '72px 72px' }} />
          <Container className="relative z-10">
            <div className="max-w-[700px]">
              <div className="eyebrow-dark mb-5">About Vyuhon</div>
              <h1 data-hero-word className="display-lg text-white mb-6">
                Built by engineers.<br />Designed to ship.
              </h1>
              <blockquote data-hero-sub
                className="pl-5 font-heading font-light italic leading-[1.78] max-w-[580px]"
                style={{ color: 'rgba(255,255,255,0.48)', borderLeft: '2px solid rgba(139,92,246,0.45)', fontSize: '1.05rem' }}>
                "Most enterprises fail at AI not because they lack data or budget — but because they lack
                the right engineering DNA. We built Vyuhon to change that."
              </blockquote>
            </div>
          </Container>
        </section>

        {/* STORY */}
        <section className="section bg-white overflow-hidden" ref={s1}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
              <div>
                <div className="s1 eyebrow mb-4">Our Story</div>
                <h2 className="s1 display-md text-ink mb-5">A startup with a production mindset</h2>
                <p className="s1 body-lg mb-4">Vyuhon was founded by a team who spent years in the gap between AI research and real deployment — seeing incredible models fail in production for preventable reasons. We started the company to be the partner we wished had existed.</p>
                <p className="s1 body-md mb-4">We are an AI-first engineering studio: small enough to be decisive, deep enough to tackle the hardest problems. We believe the best AI systems are designed with a product mindset — user-centric, outcome-oriented, and built to last.</p>
                <p className="s1 body-md">This is day one. We are building in public, learning fast, and looking for ambitious clients who want a partner that treats their problems like their own.</p>
              </div>
              <div className="s1 grid grid-cols-2 gap-3 mt-8 lg:mt-10">
                {[
                  { val: 'AI-First', label: 'Engineering culture', grad: 'linear-gradient(135deg,#8B5CF6,#7C3AED)' },
                  { val: 'Ship', label: "Don't just plan", grad: 'linear-gradient(135deg,#10B981,#059669)' },
                  { val: 'Honest', label: 'By design', grad: null },
                  { val: 'Deep', label: 'Domain expertise', grad: 'linear-gradient(135deg,#3B82F6,#2563EB)' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-[var(--r-xl)] border transition-all duration-250 hover:-translate-y-1 relative overflow-hidden cursor-default"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.background = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'var(--surface)'; }}>
                    {item.grad && <div className="absolute top-0 right-0 w-14 h-14 rounded-bl-full opacity-[0.06]" style={{ background: item.grad }} />}
                    <div className="font-heading text-[1.5rem] font-extrabold mb-1"
                      style={item.grad ? { background: item.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } : { color: 'var(--ink)' }}>
                      {item.val}
                    </div>
                    <div className="text-[0.74rem] font-medium" style={{ color: 'var(--ink-soft)' }}>{item.label}</div>
                  </div>
                ))}
                <div className="col-span-2 p-5 rounded-[var(--r-xl)] border flex items-center gap-3"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <span className="text-xl flex-shrink-0">🇮🇳</span>
                  <div>
                    <div className="font-heading text-[0.88rem] font-bold text-ink">Bengaluru, India</div>
                    <div className="text-[0.74rem]" style={{ color: 'var(--ink-soft)' }}>Headquartered · Remote-first globally</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* VALUES */}
        <section className="section overflow-hidden" style={{ background: 'var(--surface)' }} ref={s2}>
          <Container>
            <div className="text-center max-w-[480px] mx-auto mb-12">
              <div className="eyebrow mb-4">Principles</div>
              <h2 className="display-md text-ink">What we stand for</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VALUES.map((v, i) => (
                <div key={i}
                  className="s2 group p-7 bg-white border rounded-[var(--r-xl)] transition-all duration-250 cursor-default relative overflow-hidden"
                  style={{ borderColor: 'var(--border)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <div className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                    style={{ background: v.color }} />
                  <div className="text-xl mb-4 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${v.color}10` }}>{v.icon}</div>
                  <h4 className="font-heading text-[0.92rem] font-bold text-ink mb-2">{v.title}</h4>
                  <p className="body-sm">{v.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* TEAM */}
        <section className="section bg-white" ref={s3}>
          <Container>
            <div className="text-center max-w-[460px] mx-auto mb-12">
              <div className="eyebrow mb-4">Founding Team</div>
              <h2 className="display-md text-ink">The people behind Vyuhon</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TEAM.map((t, i) => (
                <div key={i}
                  className="s3 group relative p-7 text-center rounded-[var(--r-xl)] border cursor-default transition-all duration-300 overflow-hidden"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.22)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${t.gradA}08, transparent 65%)` }} />
                  <div className="w-[64px] h-[64px] rounded-full mx-auto mb-4 flex items-center justify-center font-heading text-lg font-extrabold text-white relative"
                    style={{ background: `linear-gradient(135deg,${t.gradA},${t.gradB})`, boxShadow: `0 6px 20px ${t.gradA}28` }}>
                    {t.initials}
                  </div>
                  <div className="font-heading text-[0.97rem] font-bold text-ink mb-0.5">{t.name}</div>
                  <div className="text-[0.69rem] font-bold uppercase tracking-[0.07em] mb-3" style={{ color: t.gradA }}>{t.role}</div>
                  <p className="body-sm text-[0.77rem] leading-relaxed">{t.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>

      <CTABanner
        title="Stay in touch"
        subtitle="We're always excited to connect with talented engineers, researchers, and builders who want to shape the future of AI."
        primaryLabel="Get in Touch →"
        primaryTo="/contact"
      />
    </>
  )
}

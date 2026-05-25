import { useState, useRef, useEffect } from 'react'
import { ArrowRight, Briefcase, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useHeroAnimation, useScrollReveal } from '../hooks/useScrollReveal'
import Container from '../components/ui/Container'

const PATHS = [
  { Icon:Briefcase, color:'#8B5CF6', bg:'rgba(139,92,246,0.08)', title:'Start a Project',      body:"Share what you're building and we'll put together a proposal within 48 hours.", cta:'Send brief →' },
  { Icon:Phone,     color:'#10B981', bg:'rgba(16,185,129,0.08)', title:'Book a Discovery Call', body:'Free 60-minute conversation to explore your AI opportunities — no obligation.', cta:'Schedule call →' },
  { Icon:Mail,      color:'#3B82F6', bg:'rgba(59,130,246,0.08)', title:'Email Us',              body:'hello@vyuhon.com — we respond to every message personally within 2 hours.',     cta:'Open email →' },
]

const INP_BASE = "w-full rounded-xl px-4 py-3 text-[0.875rem] outline-none transition-all duration-200"
const INP_STYLE = { background:'var(--surface)', border:'1px solid var(--border)', color:'var(--ink)' }
const onF = e => { e.target.style.borderColor='rgba(139,92,246,0.38)'; e.target.style.background='#fff'; e.target.style.boxShadow='0 0 0 3px rgba(139,92,246,0.07)' }
const onB = e => { e.target.style.borderColor='var(--border)'; e.target.style.background='var(--surface)'; e.target.style.boxShadow='none' }

export default function Contact() {
  const [form, setForm] = useState({ first:'', last:'', email:'', company:'', service:'', message:'' })
  const [sent, setSent]  = useState(false)
  const heroRef = useHeroAnimation()
  const ref = useScrollReveal({ selector: '.cf', stagger: 0.08, y: 16 })

  return (
    <div style={{ paddingTop:'68px', minHeight:'100vh' }} className="bg-white">

      {/* ── DARK HERO HEADER ── */}
      <section ref={heroRef} className="relative overflow-hidden py-20"
        style={{ background:'linear-gradient(165deg, #09090F 0%, #0A0A14 55%, #07100D 100%)', minHeight:380 }}>
        {/* Teal bloom — upper right, warmth for contact */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:'radial-gradient(ellipse 55% 60% at 75% 35%, rgba(16,185,129,0.18) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)' }} />
        {/* Purple accent — lower left */}
        <div className="absolute pointer-events-none rounded-full blur-[100px]"
          style={{ width:480, height:380, bottom:'-6%', left:'-4%', background:'rgba(139,92,246,0.1)' }} />
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)', backgroundSize:'64px 64px' }} />

        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="eyebrow-dark mb-4" style={{ color:'rgba(16,185,129,0.85)' }}>Contact</div>
              <h1 data-hero-word className="font-heading font-extrabold tracking-[-0.033em] text-white leading-[1.04]"
                style={{ fontSize:'clamp(2.2rem, 4.5vw, 4rem)' }}>
                Let's build something<br/>important together
              </h1>
            </div>
            <div data-hero-sub className="flex flex-col gap-3 md:items-end md:pb-1">
              <div className="flex items-center gap-3 text-[0.82rem]" style={{ color:'rgba(255,255,255,0.45)' }}>
                <div className="flex items-center gap-2">
                  <MapPin size={13} /> Bengaluru, India
                </div>
                <span style={{ color:'rgba(255,255,255,0.2)' }}>·</span>
                <div className="flex items-center gap-2">
                  <Clock size={13} /> Responds within 24h
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-14 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 xl:gap-16 items-start">

          {/* LEFT — contact paths + info */}
          <div>
            <p className="cf body-lg mb-8" style={{ maxWidth:440 }}>
              Whether you're exploring your first AI initiative or scaling an existing platform —
              we're ready to listen, advise, and partner.
            </p>

            {/* Contact path cards */}
            <div className="space-y-3 mb-8">
              {PATHS.map(({ Icon, color, bg, title, body, cta }, i) => (
                <div key={i}
                  className="cf flex items-start gap-4 p-5 bg-white rounded-[var(--r-xl)] border cursor-pointer transition-all duration-250"
                  style={{ borderColor:'var(--border)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=`${color}30`; e.currentTarget.style.boxShadow='var(--shadow-md)'; e.currentTarget.style.transform='translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform=''; }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background:bg }}>
                    <Icon size={18} color={color} />
                  </div>
                  <div className="flex-1">
                    <div className="font-heading text-[0.9rem] font-bold text-ink mb-1">{title}</div>
                    <p className="body-sm">{body}</p>
                  </div>
                  <span className="text-[0.75rem] font-semibold flex-shrink-0 self-center" style={{ color }}>{cta}</span>
                </div>
              ))}
            </div>

            {/* Location badge */}
            <div className="cf flex items-center gap-3 p-4 rounded-[var(--r-lg)] border"
              style={{ background:'#fff', borderColor:'var(--border)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                style={{ background:'rgba(139,92,246,0.07)' }}>🇮🇳</div>
              <div>
                <div className="font-heading text-[0.85rem] font-bold text-ink">Bengaluru, India</div>
                <div className="text-[0.74rem]" style={{ color:'var(--ink-soft)' }}>Headquartered · Remote-first globally</div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="cf bg-white border rounded-[var(--r-2xl)] overflow-hidden"
            style={{ borderColor:'var(--border)', boxShadow:'var(--shadow-lg)' }}>

            {/* Form header accent */}
            <div className="h-1" style={{ background:'linear-gradient(90deg,#8B5CF6,#3B82F6,#10B981)' }} />

            <div className="p-8 md:p-10">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl"
                    style={{ background:'rgba(16,185,129,0.1)' }}>✓</div>
                  <h3 className="display-sm text-ink mb-2">Message sent!</h3>
                  <p className="body-sm">We'll get back to you within one business day.</p>
                </div>
              ) : (
                <>
                  <h3 className="display-sm text-ink mb-1.5">Send us a message</h3>
                  <p className="body-sm mb-7">Every message is read and responded to personally.</p>

                  <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[0.76rem] font-semibold mb-1.5" style={{ color:'var(--ink-mid)' }}>First name</label>
                        <input required value={form.first} onChange={e=>setForm({...form,first:e.target.value})}
                          className={INP_BASE} style={INP_STYLE} onFocus={onF} onBlur={onB} placeholder="Alex" />
                      </div>
                      <div>
                        <label className="block text-[0.76rem] font-semibold mb-1.5" style={{ color:'var(--ink-mid)' }}>Last name</label>
                        <input required value={form.last} onChange={e=>setForm({...form,last:e.target.value})}
                          className={INP_BASE} style={INP_STYLE} onFocus={onF} onBlur={onB} placeholder="Chen" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.76rem] font-semibold mb-1.5" style={{ color:'var(--ink-mid)' }}>Work email</label>
                      <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                        className={INP_BASE} style={INP_STYLE} onFocus={onF} onBlur={onB} placeholder="alex@company.com" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[0.76rem] font-semibold mb-1.5" style={{ color:'var(--ink-mid)' }}>Company</label>
                        <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})}
                          className={INP_BASE} style={INP_STYLE} onFocus={onF} onBlur={onB} placeholder="Acme Corp" />
                      </div>
                      <div>
                        <label className="block text-[0.76rem] font-semibold mb-1.5" style={{ color:'var(--ink-mid)' }}>Service interest</label>
                        <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}
                          className={INP_BASE} style={{ ...INP_STYLE, cursor:'pointer' }} onFocus={onF} onBlur={onB}>
                          <option value="">Select one…</option>
                          <option>AI Strategy & Advisory</option>
                          <option>LLM Engineering</option>
                          <option>MLOps & Infrastructure</option>
                          <option>Data Platform</option>
                          <option>AI Product Engineering</option>
                          <option>Responsible AI</option>
                          <option>Academy / Training</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.76rem] font-semibold mb-1.5" style={{ color:'var(--ink-mid)' }}>How can we help?</label>
                      <textarea required rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                        className={`${INP_BASE} resize-y`} style={{ ...INP_STYLE, minHeight:96 }}
                        onFocus={onF} onBlur={onB} placeholder="Tell us about your project or challenge…" />
                    </div>

                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-[0.9rem] text-white transition-all duration-200 hover:-translate-y-px"
                      style={{ background:'linear-gradient(135deg,#8B5CF6,#7C3AED)', boxShadow:'var(--shadow-p)' }}>
                      Send Message <ArrowRight size={15} />
                    </button>
                    <p className="text-center text-[0.71rem]" style={{ color:'var(--ink-muted)' }}>
                      Your privacy is respected. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

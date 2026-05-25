import { useEffect, useRef } from 'react'
import { ArrowRight, ArrowUpRight, Zap, Shield, TrendingUp, Layers, GitMerge, Database, Bot, BarChart3, Workflow } from 'lucide-react'
import { useHeroAnimation, useScrollReveal } from '../hooks/useScrollReveal'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import CTABanner from '../components/sections/CTABanner'

// ─── STAR FIELD canvas ────────────────────────────────────────────────────
function StarField() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width  = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight
    let animId

    const stars = Array.from({ length: 130 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      opacity: Math.random() * 0.55 + 0.1,
      speed: Math.random() * 0.012 + 0.004,
      phase: Math.random() * Math.PI * 2,
    }))

    // Scatter a few teal accent dots matching reference
    const accents = Array.from({ length: 18 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.2 + 1,
      color: Math.random() > 0.5 ? 'rgba(52,211,153,' : 'rgba(167,139,250,',
      opacity: Math.random() * 0.5 + 0.15,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.003,
    }))

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.016

      // White stars
      for (const s of stars) {
        const pulse = s.opacity * (0.7 + 0.3 * Math.sin(t * s.speed * 60 + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${pulse})`
        ctx.fill()
      }

      // Coloured accent dots
      for (const a of accents) {
        const pulse = a.opacity * (0.6 + 0.4 * Math.sin(t * a.speed * 60 + a.phase))
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = a.color + pulse + ')'
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  )
}

// ─── DATA ─────────────────────────────────────────────────────────────────
const CAPS = [
  { icon: Zap,        color:'#8B5CF6', bg:'rgba(139,92,246,0.1)',  border:'rgba(139,92,246,0.22)', title:'AI Strategy & Advisory',            body:'Pragmatic AI roadmaps aligned to your business model and data maturity — without the hype.' },
  { icon: GitMerge,   color:'#10B981', bg:'rgba(16,185,129,0.1)',  border:'rgba(16,185,129,0.22)', title:'LLM & Foundation Model Engineering', body:'RAG, fine-tuning, agentic systems — production LLM engineering that delivers measurable outcomes.' },
  { icon: Layers,     color:'#3B82F6', bg:'rgba(59,130,246,0.1)',  border:'rgba(59,130,246,0.22)', title:'MLOps & AI Infrastructure',          body:'The operational backbone that turns promising models into reliable, scalable production systems.' },
  { icon: Database,   color:'#F59E0B', bg:'rgba(245,158,11,0.1)',  border:'rgba(245,158,11,0.22)', title:'Data Platform Architecture',          body:'Unified data foundations powering real-time AI decision-making at any scale.' },
  { icon: Shield,     color:'#EF4444', bg:'rgba(239,68,68,0.1)',   border:'rgba(239,68,68,0.22)',  title:'Responsible AI & Governance',         body:'Model risk management, bias auditing, explainability, and compliance for regulated industries.' },
  { icon: TrendingUp, color:'#8B5CF6', bg:'rgba(139,92,246,0.1)',  border:'rgba(139,92,246,0.22)', title:'AI Product Engineering',              body:'End-to-end AI-powered product development from UX design through deployment and monitoring.' },
]

const VISION_BLOCKS = [
  { icon: Bot,       color:'#8B5CF6', bg:'rgba(139,92,246,0.08)', title:'AI-Native Engineering',    body:"We don't bolt AI onto existing systems. We design from first principles for AI-native architectures that perform at scale." },
  { icon: Workflow,  color:'#10B981', bg:'rgba(16,185,129,0.08)', title:'Production-First Mindset', body:'No demos without deployment paths. Every decision made with operational reality, performance, and maintainability in mind.' },
  { icon: BarChart3, color:'#3B82F6', bg:'rgba(59,130,246,0.08)', title:'Outcome-Driven Impact',    body:'We measure success by business impact — revenue generated, costs reduced, decisions improved — not model accuracy alone.' },
]

const STEPS = [
  { n:'01', color:'#8B5CF6', title:'Discover & Frame',      body:'Deep stakeholder alignment, data audits, and opportunity mapping to define the right problems before any code is written.' },
  { n:'02', color:'#10B981', title:'Architect & Prototype', body:'Rapid experimentation with a production-grade mindset. Proof-of-concepts designed to evolve into full systems.' },
  { n:'03', color:'#3B82F6', title:'Build & Validate',      body:'Rigorous engineering, security reviews, and performance benchmarking throughout the entire development lifecycle.' },
  { n:'04', color:'#F59E0B', title:'Deploy & Scale',        body:'Production deployment, ongoing monitoring, and continuous improvement loops that drive lasting ROI.' },
]

const WHY_POINTS = [
  { label:'Outcomes over optics',  sub:'We measure success by business impact — revenue, costs, and decisions — not model accuracy metrics.',   color:'#8B5CF6' },
  { label:'Honest by design',      sub:"We give you our real assessment, even when it's not what you hoped to hear. Trust is built on candor.", color:'#10B981' },
  { label:'Deep domain expertise', sub:'Engineers from top AI labs and industry experts — all on your project, not sitting in a shared pool.',  color:'#3B82F6' },
  { label:"Ship, don't just plan", sub:'We build production code from day one. Every architecture decision is designed to ship and last.',      color:'#F59E0B' },
]

// ─── HERO — dark, cinematic, left-aligned (reference-inspired) ───────────
function HeroSection() {
  const heroRef = useHeroAnimation()
  return (
    <section ref={heroRef}
      className="relative overflow-hidden pt-[68px]"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(165deg, #07060F 0%, #09091A 45%, #070B14 100%)',
      }}>

      {/* Canvas star field */}
      <StarField />

      {/* Deep purple bloom — upper right, wide, matches reference */}
      <div className="absolute pointer-events-none"
        style={{ width:1000, height:720, top:'-12%', right:'-18%',
          background:'radial-gradient(ellipse, rgba(88,46,200,0.38) 0%, rgba(60,20,150,0.16) 32%, transparent 62%)',
          filter:'blur(2px)' }} />
      {/* Teal accent — lower left */}
      <div className="absolute pointer-events-none float-3"
        style={{ width:520, height:420, bottom:'-6%', left:'-6%',
          background:'radial-gradient(ellipse, rgba(16,185,129,0.13) 0%, transparent 65%)',
          filter:'blur(60px)' }} />
      {/* Blue mid — centre */}
      <div className="absolute pointer-events-none float-2"
        style={{ width:600, height:500, top:'35%', right:'20%',
          background:'radial-gradient(ellipse, rgba(59,80,246,0.09) 0%, transparent 65%)',
          filter:'blur(80px)' }} />
      {/* Subtle top fade so nav blends in */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background:'linear-gradient(to bottom, rgba(7,6,15,0.5), transparent)' }} />

      {/* ── Content layout ── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-10 max-sm:px-5">

        {/* Eyebrow + headline — single connected content block */}
        <div className="flex-1 flex flex-col justify-center py-10">
          {/* Eyebrow sits immediately above the headline */}
          <div data-hero-badge className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-6 h-[2px] rounded-full" style={{ background:'#10B981' }} />
            <span className="text-[10.5px] font-bold tracking-[0.16em] uppercase"
              style={{ color:'rgba(16,185,129,0.85)' }}>
              AI-First Engineering Studio
            </span>
          </div>
          <h1
            className="font-heading font-extrabold text-white leading-[0.96] tracking-[-0.045em]"
            style={{ fontSize:'clamp(3.6rem, 9vw, 8.8rem)', maxWidth:'82vw' }}>
            <span className="block overflow-hidden">
              <span data-hero-word className="inline-block">Engineering</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-word className="inline-block">the&nbsp;</span><span
                data-hero-word
                className="inline-block"
                style={{
                  fontStyle:'italic',
                  background:'linear-gradient(88deg, #A78BFA 0%, #818CF8 45%, #60A5FA 100%)',
                  WebkitBackgroundClip:'text',
                  WebkitTextFillColor:'transparent',
                  backgroundClip:'text',
                }}>AI-Native</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-word className="inline-block">Enterprise.</span>
            </span>
          </h1>
        </div>

        {/* Bottom row: sub-copy left | CTAs right — split layout */}
        <div data-hero-sub className="pb-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="max-w-[400px]">
            <p className="text-[0.95rem] leading-[1.82]"
              style={{ color:'rgba(255,255,255,0.46)' }}>
              We partner with forward-thinking organisations to architect and build
              production-grade AI systems —&nbsp;
              <strong className="font-semibold" style={{ color:'rgba(255,255,255,0.7)' }}>from first principles</strong>
              {' '}to{' '}
              <strong className="font-semibold" style={{ color:'rgba(255,255,255,0.7)' }}>full-scale deployment.</strong>
            </p>
          </div>
          <div data-hero-ctas className="flex items-center gap-3 flex-wrap lg:pb-1">
            <Button variant="primary" size="lg" to="/contact">
              Start a Conversation <ArrowRight size={14} />
            </Button>
            <Button variant="outline-white" size="lg" to="/services">
              Explore Services
            </Button>
          </div>
        </div>

      </div>


    </section>
  )
}

// ─── VISION ───────────────────────────────────────────────────────────────
function VisionSection() {
  const ref = useScrollReveal({ selector: '.v-anim', stagger: 0.09, y: 18 })
  return (
    <section ref={ref} className="pt-28 pb-20 relative overflow-hidden" style={{ background:'#fff' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 xl:gap-14 mb-10 items-start">
          <div>
            <div className="v-anim eyebrow mb-3">Our Vision</div>
            <h2 className="v-anim display-md text-ink leading-[1.06]">
              Close the gap between AI research<br/>and production reality
            </h2>
          </div>
          <div>
            <p className="v-anim body-lg mb-3">
              Most enterprises fail at AI not because they lack ambition or data — but because they lack
              the right engineering DNA. Vyuhon was built to change that.
            </p>
            <p className="v-anim body-md mb-6">
              We bring together researchers who've worked at the frontier of ML and engineers who've shipped
              systems at scale — unified by a single purpose: making AI work in the real world.
            </p>
            <div className="v-anim">
              <Button variant="primary" to="/about">Meet the Team <ArrowRight size={14} /></Button>
            </div>
          </div>
        </div>
        <div className="v-anim s-divider mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VISION_BLOCKS.map((b, i) => (
            <div key={i}
              className="v-anim group p-7 rounded-[var(--r-xl)] border transition-all duration-300 cursor-default"
              style={{ background:'var(--surface)', borderColor:'var(--border)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow='var(--shadow-lg)'; e.currentTarget.style.borderColor='rgba(139,92,246,0.2)'; e.currentTarget.style.background='#fff'; e.currentTarget.style.transform='translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--surface)'; e.currentTarget.style.transform=''; }}>
              <div className="w-11 h-11 rounded-[var(--r-md)] flex items-center justify-center mb-5 transition-transform duration-250 group-hover:scale-105" style={{ background:b.bg }}>
                <b.icon size={20} color={b.color} />
              </div>
              <div className="w-8 h-[2px] rounded-full mb-4" style={{ background:b.color }} />
              <h3 className="font-heading font-bold text-ink mb-2.5" style={{ fontSize:'1.02rem', letterSpacing:'-0.01em' }}>{b.title}</h3>
              <p className="body-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ─── CAPABILITIES — strategic redesign ───────────────────────────────────
function CapabilitiesSection() {
  const headerRef = useScrollReveal({ y: 20, opacity: 0, duration: 0.8 })
  const gridRef   = useScrollReveal({ selector: '.cap-item', stagger: 0.07, y: 28 })

  return (
    <section className="relative overflow-hidden"
      style={{ background:'linear-gradient(175deg, #070610 0%, #09090F 40%, #0A0F1A 100%)', paddingTop:96, paddingBottom:104 }}>

      {/* Atmospheric lighting */}
      <div className="absolute pointer-events-none"
        style={{ width:900, height:600, top:'-12%', left:'50%', transform:'translateX(-50%)',
          background:'radial-gradient(ellipse, rgba(139,92,246,0.28) 0%, rgba(109,40,217,0.12) 30%, transparent 65%)',
          filter:'blur(2px)' }} />
      <div className="absolute pointer-events-none"
        style={{ width:520, height:420, bottom:'-5%', left:'-4%',
          background:'radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, transparent 65%)',
          filter:'blur(60px)' }} />
      <div className="absolute pointer-events-none"
        style={{ width:420, height:360, bottom:'0%', right:'-3%',
          background:'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 65%)',
          filter:'blur(50px)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background:'linear-gradient(to bottom, rgba(7,6,16,0.6), transparent)' }} />

      <Container>
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full"
                style={{ background:'rgba(139,92,246,0.12)', border:'1px solid rgba(139,92,246,0.28)' }}>
                <span className="w-1.5 h-1.5 rounded-full ping-dot" style={{ background:'#8B5CF6' }} />
                <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase" style={{ color:'rgba(139,92,246,0.9)' }}>
                  Core Capabilities
                </span>
              </div>
              <h2 className="font-heading font-extrabold tracking-[-0.038em] text-white leading-[1.02]"
                style={{ fontSize:'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
                The engineering depth<br/>
                <span style={{ background:'linear-gradient(90deg,#A78BFA,#60A5FA,#34D399)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  behind every AI system
                </span>
              </h2>
            </div>
            <div className="lg:max-w-[300px] lg:pb-2">
              <p className="text-[0.88rem] leading-[1.75] mb-5" style={{ color:'rgba(255,255,255,0.45)' }}>
                Six interconnected practices — each designed to take AI from concept to production-grade reality.
              </p>
              <Button variant="outline-white" to="/services">All Services →</Button>
            </div>
          </div>
          <div className="mt-10 h-px"
            style={{ background:'linear-gradient(90deg,rgba(139,92,246,0.6),rgba(96,165,250,0.4),rgba(52,211,153,0.3),transparent)' }} />
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPS.map((c, i) => (
            <div key={i}
              className="cap-item group relative overflow-hidden cursor-default transition-all duration-350"
              style={{ padding:'28px', borderRadius:'var(--r-xl)', background:'rgba(255,255,255,0.035)',
                border:'1px solid rgba(255,255,255,0.07)',
                backdropFilter:'blur(20px) saturate(180%)', WebkitBackdropFilter:'blur(20px) saturate(180%)' }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background='rgba(255,255,255,0.07)'; el.style.borderColor=c.border
                el.style.transform='translateY(-5px)'
                el.style.boxShadow=`0 20px 48px rgba(0,0,0,0.35),0 0 0 1px ${c.border},inset 0 1px 0 rgba(255,255,255,0.09)`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background='rgba(255,255,255,0.035)'; el.style.borderColor='rgba(255,255,255,0.07)'
                el.style.transform=''; el.style.boxShadow='none'
              }}>
              <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full"
                style={{ background:`linear-gradient(180deg,${c.color},${c.color}60)`, opacity:0.7 }} />
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background:`radial-gradient(ellipse 60% 55% at 20% 0%,${c.color}10,transparent 70%)` }} />
              <div className="flex items-start justify-between mb-6 pl-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ background:c.bg }}>
                  <c.icon size={21} color={c.color} />
                </div>
                <span className="font-mono text-[10px] font-bold tracking-[0.12em] mt-1" style={{ color:'rgba(255,255,255,0.18)' }}>0{i+1}</span>
              </div>
              <div className="pl-3">
                <h3 className="font-heading font-bold leading-snug mb-3" style={{ fontSize:'1.01rem', letterSpacing:'-0.012em', color:'rgba(255,255,255,0.92)' }}>
                  {c.title}
                </h3>
                <p className="text-[0.82rem] leading-[1.76]" style={{ color:'rgba(255,255,255,0.52)' }}>
                  {c.body}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[var(--r-xl)]"
                style={{ background:`linear-gradient(90deg,${c.color}90,${c.color}20,transparent)` }} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ─── HOW WE WORK — horizontal timeline with connected steps ────────────────
function ProcessSection() {
  const headRef = useScrollReveal({ y: 20, opacity: 0, duration: 0.7 })
  const stepsRef = useScrollReveal({ selector: '.step-block', stagger: 0.12, y: 24 })

  return (
    <section className="relative overflow-hidden" style={{ background: '#fff' }}>

      {/* Subtle top / bottom borders to frame section */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--border)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'var(--border)' }} />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] hidden lg:block"
        style={{ background: 'linear-gradient(180deg, transparent, #8B5CF6 20%, #10B981 50%, #3B82F6 80%, transparent)' }} />

      <Container>
        {/* Header */}
        <div ref={headRef} className="pt-20 pb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="eyebrow mb-3">How We Work</div>
              <h2 className="display-md text-ink leading-[1.06]">
                A disciplined approach<br/>to AI delivery
              </h2>
            </div>
            <p className="body-md max-w-[340px] lg:pb-1" style={{ color: 'var(--ink-mid)' }}>
              Every engagement follows the same rigorous, iterative process — minimising wasted effort,
              maximising production impact.
            </p>
          </div>
        </div>

        {/* Connected step blocks */}
        <div ref={stepsRef} className="pb-20">

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block relative">
            {/* Progress track */}
            <div className="absolute top-[28px] left-0 right-0 h-px"
              style={{ background: 'var(--border)' }} />
            {/* Animated fill overlay */}
            <div className="absolute top-[28px] left-0 h-px w-[75%]"
              style={{ background: 'linear-gradient(90deg, #8B5CF6, #10B981, #3B82F6, #F59E0B)', opacity: 0.6 }} />

            {/* Step nodes + content */}
            <div className="grid grid-cols-4 gap-6">
              {STEPS.map((s, i) => (
                <div key={i} className="step-block group cursor-default">
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}bb)`,
                      boxShadow: `0 4px 16px ${s.color}25` }}>
                    <span className="font-heading text-white font-extrabold text-[13px] tracking-[0.04em]">{s.n}</span>
                  </div>

                  {/* Content card */}
                  <div className="rounded-[var(--r-xl)] p-5 transition-all duration-300 group-hover:shadow-[var(--shadow-md)] group-hover:-translate-y-0.5"
                    style={{ background: 'var(--surface)', border: `1px solid var(--border)` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}35`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>

                    {/* Top accent line */}
                    <div className="h-[2px] w-8 rounded-full mb-4"
                      style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}60)` }} />

                    <h3 className="font-heading font-bold text-ink mb-2 leading-snug"
                      style={{ fontSize: '0.97rem', letterSpacing: '-0.01em' }}>
                      {s.title}
                    </h3>
                    <p className="body-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical list */}
          <div className="lg:hidden space-y-0">
            {STEPS.map((s, i) => (
              <div key={i} className="step-block flex gap-4 pb-8 relative">
                {/* Vertical connector */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-[19px] top-[40px] bottom-0 w-px"
                    style={{ background: 'linear-gradient(to bottom, ' + s.color + '50, transparent)' }} />
                )}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}bb)` }}>
                  <span className="font-heading text-white font-extrabold text-[11px]">{s.n}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-heading font-bold text-ink mb-1.5" style={{ fontSize: '0.95rem' }}>{s.title}</h3>
                  <p className="body-sm">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// ─── WHY VYUHON — dark section, asymmetric statement + tile grid ────────────
function WhySection() {
  const headRef = useScrollReveal({ y: 22, opacity: 0, duration: 0.75 })
  const tilesRef = useScrollReveal({ selector: '.why-tile', stagger: 0.1, y: 20 })

  return (
    <section className="relative overflow-hidden"
      style={{ background: '#fff', paddingTop: 96, paddingBottom: 96 }}>


      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-16 items-start">

          {/* LEFT — statement block */}
          <div ref={headRef}>
            <div className="eyebrow mb-4">Why Vyuhon</div>
            <h2 className="font-heading font-extrabold tracking-[-0.035em] text-ink leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
              A different kind<br/>of AI partner
            </h2>
            <p className="mb-4" style={{ fontSize: '1.01rem', lineHeight: '1.85', color: 'var(--ink-mid)' }}>
              The AI services market is full of consultancies that deliver strategy decks and
              proof-of-concepts. We are built differently — our measure of success is production
              impact, not presentation quality.
            </p>
            <p className="mb-10" style={{ fontSize: '0.93rem', lineHeight: '1.82', color: 'var(--ink-soft)' }}>
              We tell you when AI is not the right solution, when your data is not ready,
              or when a simpler approach will outperform an elaborate model.
            </p>

            {/* CTA pair */}
            <div className="flex items-center gap-3 flex-wrap">
              <Button variant="primary" to="/contact">Let's Talk →</Button>
              <Button variant="outline" to="/about">About Us</Button>
            </div>
          </div>

          {/* RIGHT — 2×2 asymmetric tile grid */}
          <div ref={tilesRef} className="grid grid-cols-2 gap-3">
            {WHY_POINTS.map((p, i) => (
              <div key={i}
                className="why-tile group relative overflow-hidden rounded-[var(--r-xl)] p-6 cursor-default transition-all duration-300"
                style={{
                  background: 'var(--surface)',
                  border: `1px solid var(--border)`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.borderColor = p.color + '30'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = 'none'
                }}>

                <div className="relative z-10">
                  {/* Colour tag */}
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: p.color + '18' }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
                  </div>

                  <h4 className="font-heading font-bold leading-snug mb-2"
                    style={{ fontSize: '0.92rem', color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                    {p.label}
                  </h4>
                  <p style={{ fontSize: '0.82rem', lineHeight: '1.72', color: 'var(--ink-soft)' }}>
                    {p.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}


export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <CapabilitiesSection />
      <ProcessSection />
      <WhySection />
      <CTABanner
        label="Ready to build?"
        title="Start your AI transformation today"
        subtitle="Talk to our engineering team about your next initiative. No sales pitch — just an honest conversation about what's possible."
        primaryLabel="Schedule a Discovery Call"
        primaryTo="/contact"
        secondaryLabel="View Services"
        secondaryTo="/services"
      />
    </>
  )
}

import { ArrowUpRight, Zap, GitMerge, Layers, Database, Shield, TrendingUp } from 'lucide-react'
import { useHeroAnimation, useScrollReveal } from '../hooks/useScrollReveal'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'
import CTABanner from '../components/sections/CTABanner'

const SERVICES = [
  {
    num:'01', cat:'Strategy', Icon: Zap,
    color:'#8B5CF6', bg:'rgba(139,92,246,0.07)', border:'rgba(139,92,246,0.18)',
    title:'AI Strategy & Advisory',
    desc:'Navigate the complexity of AI adoption with confidence. We help leadership teams build pragmatic roadmaps — opportunity assessments, data maturity audits, governance frameworks, and Board-ready AI narratives — all grounded in technical reality.',
    chips:['Opportunity Assessment','Roadmap Design','AI Governance','Responsible AI'], cv:'purple',
  },
  {
    num:'02', cat:'Engineering', Icon: GitMerge,
    color:'#10B981', bg:'rgba(16,185,129,0.07)', border:'rgba(16,185,129,0.18)',
    title:'LLM & Foundation Model Engineering',
    desc:'Production-grade LLM systems built for reliability and scale. RAG architectures, fine-tuning and RLHF, agentic AI orchestration, prompt engineering at scale, and multi-modal system design — all designed to ship, not just demo.',
    chips:['RAG Architecture','Fine-tuning','Agentic AI','RLHF / DPO'], cv:'teal',
  },
  {
    num:'03', cat:'Infrastructure', Icon: Layers,
    color:'#3B82F6', bg:'rgba(59,130,246,0.07)', border:'rgba(59,130,246,0.18)',
    title:'MLOps & AI Infrastructure',
    desc:'The operational backbone that turns promising models into reliable production systems. ML platform engineering, model monitoring and drift detection, high-performance inference serving, and automated retraining pipelines on AWS, GCP, or Azure.',
    chips:['ML Platforms','Model Monitoring','Inference Serving','CI/CD for AI'], cv:'blue',
  },
  {
    num:'04', cat:'Data', Icon: Database,
    color:'#F59E0B', bg:'rgba(245,158,11,0.07)', border:'rgba(245,158,11,0.18)',
    title:'Data Platform Architecture',
    desc:'Unified data platforms that power real-time AI decision-making. Feature stores, data lakes, real-time streaming pipelines, and data quality frameworks — we build the foundations that AI systems depend on.',
    chips:['Feature Stores','Data Lakes','Real-time Pipelines','Data Quality'], cv:'amber',
  },
  {
    num:'05', cat:'Product', Icon: TrendingUp,
    color:'#8B5CF6', bg:'rgba(139,92,246,0.07)', border:'rgba(139,92,246,0.18)',
    title:'AI Product Engineering',
    desc:'End-to-end AI-powered product development. UX design, API engineering, frontend development, and production deployment for AI-native applications and internal AI tools that your teams will actually use.',
    chips:['AI Product Design','API Engineering','Frontend Development','DevOps'], cv:'purple',
  },
  {
    num:'06', cat:'Governance', Icon: Shield,
    color:'#EF4444', bg:'rgba(239,68,68,0.07)', border:'rgba(239,68,68,0.18)',
    title:'Responsible AI & Governance',
    desc:'Model risk management, bias auditing, explainability standards, and compliance frameworks for regulated industries. We ensure your AI systems meet legal, ethical, and operational standards at every stage.',
    chips:['Model Risk','Bias Auditing','Explainability','Compliance'], cv:'purple',
  },
]

function ServiceCard({ s }) {
  return (
    <div
      className="group relative flex flex-col h-full p-8 rounded-[var(--r-xl)] bg-white border overflow-hidden cursor-default transition-all duration-300"
      style={{ borderColor:'var(--border)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = s.border
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.querySelector('.sc-icon').style.transform = 'scale(1.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = ''
        e.currentTarget.querySelector('.sc-icon').style.transform = ''
      }}>

      {/* Top colour accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background:`linear-gradient(90deg,${s.color},transparent)` }} />

      {/* Header row: icon + num */}
      <div className="flex items-start justify-between mb-5">
        <div className="sc-icon w-11 h-11 rounded-[var(--r-md)] flex items-center justify-center transition-transform duration-250"
          style={{ background:s.bg }}>
          <s.Icon size={20} color={s.color} />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="font-mono text-[10px] font-bold tracking-[0.1em]" style={{ color:'var(--ink-muted)' }}>{s.num}</span>
          <span className="text-[9.5px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full"
            style={{ color:s.color, background:s.bg }}>{s.cat}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold tracking-[-0.012em] leading-snug mb-3 transition-colors duration-200 group-hover:text-brand-purple"
        style={{ fontSize:'1.12rem', color:'var(--ink)' }}>
        {s.title}
      </h3>

      {/* Description */}
      <p className="body-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

      {/* Chips */}
      <div className="flex gap-2 flex-wrap mt-auto">
        {s.chips.map(c => <Chip key={c} variant={s.cv}>{c}</Chip>)}
      </div>

      {/* Bottom-right arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-250"
        style={{ color:s.color }}>
        <ArrowUpRight size={16} />
      </div>
    </div>
  )
}

export default function Services() {
  const heroRef = useHeroAnimation()
  const grid = useScrollReveal({ selector: '.sc-wrap', stagger: 0.07, y: 18 })

  return (
    <>
      <div style={{ paddingTop:'68px' }}>

        {/* PAGE HEADER — dark, consistent with AI Platform / Academy */}
        <section ref={heroRef} className="relative py-24 overflow-hidden" style={{ background:'linear-gradient(165deg, #09090F 0%, #0A0A0F 55%, #0B0916 100%)', minHeight:420 }}>
          {/* Purple bloom — upper left */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background:'radial-gradient(ellipse 60% 65% at 25% 40%, rgba(139,92,246,0.18) 0%, rgba(109,40,217,0.08) 40%, transparent 70%)' }} />
          {/* Teal accent — lower right */}
          <div className="absolute pointer-events-none rounded-full blur-[100px]"
            style={{ width:460, height:360, bottom:'-5%', right:'-4%', background:'rgba(16,185,129,0.09)' }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)', backgroundSize:'64px 64px' }} />

          <Container className="relative z-10">
            <div className="max-w-[720px]">
              <div className="eyebrow-dark mb-4" style={{ color:'rgba(139,92,246,0.85)' }}>Services</div>
              <h1 data-hero-word className="font-heading font-extrabold tracking-[-0.033em] text-white leading-[1.04] mb-5"
                style={{ fontSize:'clamp(2.2rem, 4.5vw, 4rem)' }}>
                Full-spectrum AI<br/>engineering capabilities
              </h1>
              <p data-hero-sub className="text-[1.05rem] leading-[1.85] max-w-[540px] mb-10"
                style={{ color:'rgba(255,255,255,0.48)' }}>
                From initial AI strategy through ongoing model operations — we operate as an embedded
                engineering partner at every stage of your AI journey.
              </p>
              <div data-hero-ctas className="flex gap-3.5 flex-wrap">
                <Button variant="primary" to="/contact">Start a Project <ArrowUpRight size={15}/></Button>
                <Button variant="outline-white" to="/about">Meet the Team</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 2-per-row SERVICE CARD GRID */}
        <section className="py-14 bg-white" ref={grid}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ gridAutoRows:"1fr" }}>
              {SERVICES.map((s, i) => (
                <div key={i} className="sc-wrap" style={{ display:"flex", flexDirection:"column" }}>
                  <ServiceCard s={s} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>

      <CTABanner
        label="Let's build together"
        title="Tell us what you're working on"
        subtitle="Every engagement starts with a free discovery call. No obligations, just an honest conversation."
        primaryLabel="Book a Discovery Call →"
        primaryTo="/contact"
      />
    </>
  )
}

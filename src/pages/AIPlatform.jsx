import { useHeroAnimation, useScrollReveal } from '../hooks/useScrollReveal'
import Container from '../components/ui/Container'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'
import CTABanner from '../components/sections/CTABanner'
import { GridAccent, FloatingDots, CornerAccent } from '../components/illustrations/DecorativeElements'
import { Zap, Shield, Database, Activity, BarChart3, GitBranch } from 'lucide-react'
import SEO from '../components/SEO'

const FEATURES = [
  { span: 2, chipLabel: 'Core Engine', chipVariant: 'teal', Icon: GitBranch, iconColor: '#10B981', iconBg: 'rgba(16,185,129,0.1)',
    title: 'Unified Model Registry & Lifecycle Management',
    body: 'Track every model version across training runs, manage A/B experiments, and promote models through staging, canary, and production with a single command.',
    tags: ['PyTorch','TensorFlow','Hugging Face','ONNX'], tagVariant: 'teal' },
  { span: 1, chipLabel: 'Observability', chipVariant: 'purple', Icon: Activity, iconColor: '#8B5CF6', iconBg: 'rgba(139,92,246,0.1)',
    title: 'Real-time Model Monitoring',
    body: 'Track data drift, prediction quality, latency percentiles, and business KPIs with automated alerting.', code: true },
  { span: 1, chipLabel: 'Data', chipVariant: 'blue', Icon: Database, iconColor: '#3B82F6', iconBg: 'rgba(59,130,246,0.1)',
    title: 'Feature Store',
    body: 'Consistent feature computation across training and serving, with point-in-time correct historical retrieval.' },
  { span: 1, chipLabel: 'Evaluation', chipVariant: 'purple', Icon: BarChart3, iconColor: '#8B5CF6', iconBg: 'rgba(139,92,246,0.1)',
    title: 'LLM Evaluation Suite',
    body: 'Automated benchmarking for RAG pipelines, factual accuracy, safety, and domain-specific quality metrics at scale.' },
  { span: 1, chipLabel: 'Deployment', chipVariant: 'teal', Icon: Zap, iconColor: '#10B981', iconBg: 'rgba(16,185,129,0.1)',
    title: 'One-Click Inference Serving',
    body: 'Optimized inference containers with auto-scaling, model caching, and request batching for optimal throughput.' },
]

export default function AIPlatform() {
  const heroRef = useHeroAnimation()
  const featRef = useScrollReveal({ selector: '.feat-card', stagger: 0.07, y: 24 })

  return (
    <>
      <SEO 
        title="Vyuhon Intelligence Platform | Enterprise AI" 
        description="The infrastructure layer for enterprise AI. VIP unifies model management, data pipelines, evaluation frameworks, and deployment tooling."
        url="/ai-platform" 
      />
      <div style={{ paddingTop: '68px' }}>
        {/* HERO */}
        <section ref={heroRef} className="relative py-24 overflow-hidden" style={{ background: '#0A0A0F', minHeight: 440 }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 65% 60% at 65% 40%, rgba(16,185,129,0.12) 0%, rgba(59,130,246,0.07) 50%, transparent 75%)' }} />
          <GridAccent className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-[0.06]" />
          <FloatingDots className="absolute bottom-8 left-8 w-28 h-28 pointer-events-none opacity-[0.1]" />

          <Container className="relative z-10">
            <div className="max-w-[700px]">
              <div className="mb-4">
                <span className="eyebrow-dark" style={{ color: 'rgba(16,185,129,0.8)' }}>Vyuhon Intelligence Platform</span>
              </div>
              <h1 data-hero-word className="font-heading font-extrabold tracking-[-0.033em] text-white leading-[1.04] mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
                The infrastructure layer for <span className="text-grad-teal">enterprise AI</span>
              </h1>
              <p data-hero-sub className="text-[1.05rem] text-white/45 leading-[1.85] max-w-[540px] mb-10">
                VIP unifies model management, data pipelines, evaluation frameworks, and deployment tooling into a single, opinionated stack built for production.
              </p>
              <div data-hero-ctas className="flex gap-3.5 flex-wrap">
                <Button variant="teal" size="lg" to="/contact">Request Early Access</Button>
                <Button variant="outline-white" size="lg">View Documentation</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* FEATURES BENTO */}
        <section className="relative py-24 bg-white overflow-hidden" ref={featRef}>
          <CornerAccent color="#10B981" size={80} className="absolute bottom-6 right-6 pointer-events-none" />
          <Container>
            <div className="text-center max-w-[560px] mx-auto mb-14">
              <div className="mb-3"><SectionLabel>Platform Features</SectionLabel></div>
              <h2 className="font-heading font-bold tracking-[-0.025em] text-ink"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.6rem)' }}>
                Everything AI needs to scale
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FEATURES.map((f, i) => (
                <div key={i}
                  className={`feat-card bg-light border border-light-3 rounded-[var(--r-xl)] p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-brand-purple/20 group ${f.span === 2 ? 'md:col-span-2' : ''}`}>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                    style={{ background: f.iconBg }}>
                    <f.Icon size={20} color={f.iconColor} />
                  </div>
                  <div className="mb-3"><Chip variant={f.chipVariant}>{f.chipLabel}</Chip></div>
                  <h3 className="font-heading font-bold text-ink mb-2.5 leading-snug"
                    style={{ fontSize: f.span === 2 ? '1.35rem' : '1.05rem' }}>
                    {f.title}
                  </h3>
                  <p className="text-[0.87rem] text-ink-mid leading-[1.8]">{f.body}</p>
                  {f.tags && (
                    <div className="flex gap-2 mt-5 flex-wrap">
                      {f.tags.map(t => <Chip key={t} variant={f.tagVariant}>{t}</Chip>)}
                    </div>
                  )}
                  {f.code && (
                    <div className="mt-5 p-4 bg-white rounded-xl border border-light-3 font-mono text-[0.75rem] text-ink-soft leading-[1.8]">
                      <span>p50: 12ms · p95: 38ms · p99: 67ms</span><br/>
                      <span style={{ color: '#059669' }}>✓ Drift score: 0.023 — Healthy</span>
                    </div>
                  )}
                </div>
              ))}

              {/* Wide integration card */}
              <div className="feat-card md:col-span-3 bg-light border border-light-3 rounded-[var(--r-xl)] p-8 grid md:grid-cols-2 gap-10 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-brand-purple/10">
                    <GitBranch size={20} color="#8B5CF6" />
                  </div>
                  <Chip variant="purple">Integrations</Chip>
                  <h3 className="font-heading text-[1.1rem] font-bold text-ink mt-4 mb-2">50+ Native Integrations</h3>
                  <p className="text-[0.88rem] text-ink-soft leading-[1.75]">Connects natively with Snowflake, Databricks, dbt, Airflow, Kafka, and all major cloud data warehouses — no custom connectors required.</p>
                </div>
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-brand-blue/10">
                    <Shield size={20} color="#3B82F6" />
                  </div>
                  <Chip variant="blue">Security</Chip>
                  <h3 className="font-heading text-[1.1rem] font-bold text-ink mt-4 mb-2">Enterprise Security & Compliance</h3>
                  <p className="text-[0.88rem] text-ink-soft leading-[1.75]">RBAC, SSO integration, complete audit logging, and configurable data residency controls for regulated industries including financial services and healthcare.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <CTABanner
        accentColor="teal"
        label="Early Access"
        title="Join the companies building on VIP"
        subtitle="Work directly with our engineering team to shape the product as an early design partner."
        primaryLabel="Apply for Early Access →"
        primaryTo="/contact"
      />
    </>
  )
}

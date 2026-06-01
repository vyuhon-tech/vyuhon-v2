import { useHeroAnimation, useScrollReveal } from '../hooks/useScrollReveal'
import Container from '../components/ui/Container'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import TrackCard from '../components/sections/TrackCard'
import CTABanner from '../components/sections/CTABanner'
import SEO from '../components/SEO'

const TRACKS = [
  { accentGrad:'linear-gradient(135deg,#8B5CF6,#7C3AED)', iconBg:'rgba(139,92,246,0.1)', iconColor:'#8B5CF6', chipVariant:'purple', chipLabel:'Design', title:'Product Design with AI Bootcamp', description:'Master the intersection of design thinking and AI capabilities. Learn to design AI-native products, intelligent interfaces, and human-centered automation.', modules:['AI-first UX principles','Designing for AI outputs & uncertainty','Prompt engineering for designers','AI prototyping workflows'], duration:'8 weeks', format:'Live cohort' },
  { accentGrad:'linear-gradient(135deg,#10B981,#059669)', iconBg:'rgba(16,185,129,0.1)', iconColor:'#10B981', chipVariant:'teal', chipLabel:'Engineering', title:'Full Stack Development Bootcamp', description:'Modern full-stack development with AI integration at every layer. Build production-ready AI-powered web applications from frontend to deployment.', modules:['React + Next.js fundamentals','AI API integration patterns','Backend engineering with Python','Deployment & DevOps basics'], duration:'12 weeks', format:'Live + async' },
  { accentGrad:'linear-gradient(135deg,#3B82F6,#2563EB)', iconBg:'rgba(59,130,246,0.1)', iconColor:'#3B82F6', chipVariant:'blue', chipLabel:'AI Skills', title:'AI Tools & Workflow Training', description:'Become an AI power user. Master the tools, prompting techniques, and automation workflows that make you dramatically more productive.', modules:['Advanced prompting & chain-of-thought','AI automation with n8n & Zapier','Building custom GPTs & agents','AI for content & research workflows'], duration:'4 weeks', format:'Self-paced' },
  { accentGrad:'linear-gradient(135deg,#F59E0B,#EF4444)', iconBg:'rgba(245,158,11,0.1)', iconColor:'#F59E0B', chipVariant:'amber', chipLabel:'Leadership', title:'Leadership & Communication Skills', description:'Develop the leadership presence, communication clarity, and strategic thinking required to lead teams in the AI era.', modules:['Executive communication & storytelling','Managing technical teams','AI strategy for non-technical leaders','Negotiation & stakeholder management'], duration:'6 weeks', format:'Live workshops' },
  { accentGrad:'linear-gradient(135deg,#8B5CF6,#3B82F6)', iconBg:'rgba(139,92,246,0.1)', iconColor:'#8B5CF6', chipVariant:'purple', chipLabel:'Business', title:'Business & Startup Learning', description:'Build and validate AI-powered businesses. From ideation and market validation to fundraising and go-to-market.', modules:['Startup ideation & validation frameworks','AI business model design','GTM strategy for AI products','Fundraising in the AI era'], duration:'8 weeks', format:'Live cohort' },
  { accentGrad:'linear-gradient(135deg,#10B981,#059669)', iconBg:'rgba(16,185,129,0.1)', iconColor:'#10B981', chipVariant:'teal', chipLabel:'Technical', title:'AI Tech Skills', description:'Deep-dive technical training for engineers. LLMs, machine learning fundamentals, vector databases, and building production AI systems.', modules:['ML fundamentals & deep learning','LLM engineering & fine-tuning','Vector databases & embeddings','Production AI architecture patterns'], duration:'10 weeks', format:'Live + async' },
  { accentGrad:'linear-gradient(135deg,#3B82F6,#2563EB)', iconBg:'rgba(59,130,246,0.1)', iconColor:'#3B82F6', chipVariant:'blue', chipLabel:'Design Systems', title:'Design Systems Training', description:'Build scalable design systems that power AI products. Component architecture, design tokens, documentation, and governance at scale.', modules:['Design token architecture','Component libraries in Figma & code','Documentation & governance','AI-assisted design system tooling'], duration:'6 weeks', format:'Self-paced' },
  { accentGrad:'linear-gradient(135deg,#F59E0B,#10B981)', iconBg:'rgba(245,158,11,0.1)', iconColor:'#F59E0B', chipVariant:'amber', chipLabel:'Career', title:'Career Acceleration Programs', description:'Transition into AI roles, level up your career, or position yourself for leadership. Job search strategy, portfolio building, and interview prep.', modules:['AI role landscape & positioning','Portfolio & personal brand building','Technical interview preparation','Networking & job search strategy'], duration:'4 weeks', format:'Mentored' },
  { accentGrad:'linear-gradient(135deg,#10B981,#059669)', iconBg:'rgba(16,185,129,0.1)', iconColor:'#10B981', chipVariant:'teal', chipLabel:'Enterprise', title:'Team Enablement Workshops', description:'Custom AI upskilling programs for entire teams and organizations. Designed around your stack, goals, and team capability level.', modules:['Customized curriculum design','Live workshops & capstone projects','Post-program mentorship support','Progress tracking & reporting'], duration:'Custom', format:'On-site or remote' },
]

const FORMATS = [
  { icon:'👥', bg:'rgba(139,92,246,0.1)', title:'Live Cohort Programs', body:'Learn alongside peers in structured live sessions. Weekly workshops, office hours, and peer accountability for those who thrive in community.' },
  { icon:'⏰', bg:'rgba(16,185,129,0.1)', title:'Self-Paced Learning', body:'Access curriculum on your schedule. Pre-recorded sessions, interactive exercises, and on-demand support for independent learners.' },
  { icon:'📍', bg:'rgba(59,130,246,0.1)', title:'On-site Team Workshops', body:'We come to you. Intensive 1–3 day workshops designed for entire teams, delivered at your location with hands-on project work.' },
]

export default function Academy() {
  const heroRef = useHeroAnimation()
  const tracksRef = useScrollReveal({ selector: '.track-wrap', stagger: 0.06, y: 28 })
  const fmtRef = useScrollReveal({ selector: '.fmt-card', stagger: 0.1, y: 20 })

  return (
    <>
      <SEO 
        title="Vyuhon Academy | Learn AI by Building With It" 
        description="Structured learning programs designed for working professionals and teams. Taught by practitioners who've built AI in production."
        url="/academy" 
      />
      <div style={{ paddingTop: '68px' }}>
        {/* HERO - DARK */}
        <section ref={heroRef} className="py-20 relative overflow-hidden" style={{ background: '#0A0A0F' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 55% at 70% 30%, rgba(59,130,246,0.12) 0%, transparent 60%)' }} />
          <Container className="relative z-10">
            <div className="max-w-[760px]">
              <div className="mb-4"><span className="eyebrow-dark" style={{ color: 'rgba(59,130,246,0.8)' }}>Vyuhon Academy</span></div>
              <h1 data-hero-word className="font-heading font-extrabold tracking-[-0.03em] text-white mb-5" style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)' }}>Learn AI by building with it</h1>
              <p data-hero-sub className="text-[1.1rem] text-white/50 leading-[1.8] max-w-[560px] mb-10">Structured learning programs designed for working professionals and teams — taught by practitioners who've built AI in production. Practical, hands-on, and career-focused.</p>
              <div data-hero-ctas className="flex gap-3.5 flex-wrap">
                <Button variant="teal" size="lg" to="/contact">Apply Now →</Button>
                <Button variant="outline-white" size="lg">Download Syllabus</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* TRACKS - WHITE */}
        <section className="py-24 bg-white" ref={tracksRef}>
          <Container>
            <div className="text-center max-w-[680px] mx-auto mb-16">
              <div className="mb-4"><SectionLabel>Learning Tracks</SectionLabel></div>
              <h2 className="font-heading text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold tracking-[-0.03em] text-ink mb-4">9 programs. One mission.</h2>
              <p className="text-base text-ink-mid leading-[1.75]">From product designers to engineering leads, developers to startup founders — Vyuhon Academy has a dedicated learning track for where you are and where you want to go.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TRACKS.map((t, i) => <div key={i} className="track-wrap"><TrackCard {...t} /></div>)}
            </div>
          </Container>
        </section>

        {/* FORMATS */}
        <section className="py-20" style={{ background: '#F8F8FC' }} ref={fmtRef}>
          <Container>
            <div className="text-center max-w-[520px] mx-auto mb-12">
              <div className="mb-4"><SectionLabel>Learning Formats</SectionLabel></div>
              <h2 className="font-heading text-[clamp(1.7rem,3vw,2.75rem)] font-bold tracking-[-0.025em] text-ink">How learning happens</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FORMATS.map((f, i) => (
                <div key={i} className="fmt-card p-7 bg-white border border-light-3 rounded-[14px] transition-all duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.07)] hover:-translate-y-[3px]">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-lg" style={{ background: f.bg }}>{f.icon}</div>
                  <h4 className="font-heading text-base font-bold text-ink mb-2">{f.title}</h4>
                  <p className="text-[0.83rem] leading-[1.65] text-ink-soft">{f.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
      <CTABanner accentColor="teal" label="Ready to learn?" title="Find your track and start building" subtitle="Cohorts are small by design. Apply early to secure your spot." primaryLabel="Apply for a Program →" primaryTo="/contact" />
    </>
  )
}

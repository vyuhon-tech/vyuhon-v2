'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getPost, POSTS } from '@/data/blogPosts'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { gsap } from 'gsap'

function PostBanner({ color, bg, cat }) {
  const colors = {
    '#8B5CF6': { a:'rgba(139,92,246,0.35)', b:'rgba(109,40,217,0.15)', c:'rgba(59,130,246,0.1)' },
    '#10B981': { a:'rgba(16,185,129,0.3)',  b:'rgba(5,150,105,0.12)',  c:'rgba(139,92,246,0.08)' },
    '#3B82F6': { a:'rgba(59,130,246,0.35)', b:'rgba(37,99,235,0.15)',  c:'rgba(16,185,129,0.1)' },
  }
  const c = colors[color] || colors['#8B5CF6']
  return (
    <div className="relative w-full overflow-hidden rounded-[var(--r-2xl)]" style={{ height: 320, background: 'linear-gradient(160deg, #070610 0%, #09091A 60%, #0A0F18 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'48px 48px' }} />
      <div className="absolute pointer-events-none" style={{ width:560, height:420, top:'-20%', left:'50%', transform:'translateX(-50%)', background:`radial-gradient(ellipse, ${c.a} 0%, ${c.b} 35%, transparent 65%)`, filter:'blur(2px)' }} />
      <div className="absolute pointer-events-none rounded-full blur-[80px]" style={{ width:320, height:260, bottom:'-10%', right:'5%', background:c.c }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]" style={{ background: bg, color, border:`1px solid ${color}25` }}>{cat}</div>
        <svg width="240" height="60" viewBox="0 0 240 60" fill="none" opacity="0.18">
          <line x1="0" y1="30" x2="240" y2="30" stroke={color} strokeWidth="1" strokeDasharray="4 6"/>
          <circle cx="30" cy="30" r="5" fill={color}/><circle cx="80" cy="30" r="3" fill={color}/>
          <circle cx="120" cy="30" r="7" fill={color} opacity="0.6"/><circle cx="160" cy="30" r="3" fill={color}/><circle cx="210" cy="30" r="5" fill={color}/>
        </svg>
      </div>
    </div>
  )
}

function Prose({ text }) {
  return (
    <div className="space-y-4">
      {text.split('\n\n').map((para, i) => (
        <p key={i} className="text-[1rem] leading-[1.88]" style={{ color:'var(--ink-mid)' }}>{para}</p>
      ))}
    </div>
  )
}

function RelatedPosts({ current }) {
  const others = POSTS.filter(p => p.slug !== current.slug).slice(0, 2)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
      {others.map(p => (
        <Link key={p.slug} href={`/insights/${p.slug}`}
          className="group flex gap-4 p-5 bg-white border rounded-[var(--r-xl)] transition-all duration-250"
          style={{ borderColor:'var(--border)' }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=p.color+'30';e.currentTarget.style.boxShadow='var(--shadow-md)';e.currentTarget.style.transform='translateY(-2px)';}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='';}}>
          <div className="w-1 flex-shrink-0 rounded-full" style={{ background:`linear-gradient(180deg,${p.color},${p.color}50)` }} />
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color:p.color }}>{p.cat}</div>
            <h4 className="font-heading text-[0.9rem] font-bold text-ink leading-snug mb-1.5 line-clamp-2 group-hover:text-brand-purple transition-colors">{p.title}</h4>
            <span className="text-[0.75rem]" style={{ color:'var(--ink-soft)' }}>{p.rt} read</span>
          </div>
          <ArrowRight size={16} className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-250" style={{ color:p.color }} />
        </Link>
      ))}
    </div>
  )
}

export default function BlogPostPage({ slug }) {
  const post = getPost(slug)
  const bodyRef = useScrollReveal({ selector: '.section-block', stagger: 0.1, y: 20 })

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo('.post-hero-tag',  { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.1)
    tl.fromTo('.post-hero-h1',   { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.25)
    tl.fromTo('.post-hero-meta', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.5)
    tl.fromTo('.post-banner',    { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.6)
  }, [slug])

  if (!post) {
    return (
      <div style={{ paddingTop: '68px' }}>
        <div className="section">
          <Container>
            <div className="text-center py-20">
              <h2 className="display-md text-ink mb-4">Post not found</h2>
              <Button variant="primary" to="/insights">← Back to Insights</Button>
            </div>
          </Container>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '68px', background: '#fff' }}>
      <section className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(160deg, #09090F 0%, #0A0C18 55%, #080E16 100%)', minHeight: 320 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background:`radial-gradient(ellipse 60% 65% at 65% 40%, ${post.color}1A 0%, ${post.color}08 40%, transparent 70%)` }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <Container className="relative z-10">
          <Link href="/insights" className="post-hero-tag inline-flex items-center gap-2 mb-6 text-[0.82rem] font-semibold transition-all duration-200 hover:gap-3"
            style={{ color:'rgba(255,255,255,0.45)' }}
            onMouseEnter={e=>e.currentTarget.style.color='rgba(255,255,255,0.75)'}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.45)'}>
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          <div className="post-hero-tag flex items-center gap-3 mb-5">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full" style={{ color: post.color, background: post.bg.replace('0.06', '0.12'), border:`1px solid ${post.color}25` }}>{post.cat}</span>
          </div>
          <h1 className="post-hero-h1 font-heading font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-6" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.8rem)', maxWidth: 800 }}>{post.title}</h1>
          <div className="post-hero-meta flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-1.5 text-[0.82rem]" style={{ color:'rgba(255,255,255,0.4)' }}><Calendar size={13} /> {post.date}</div>
            <div className="flex items-center gap-1.5 text-[0.82rem]" style={{ color:'rgba(255,255,255,0.4)' }}><Clock size={13} /> {post.rt} read</div>
            <div className="flex items-center gap-2 ml-auto"><span className="text-[0.78rem]" style={{ color:'rgba(255,255,255,0.28)' }}>by Vyuhon Team</span></div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="max-w-[760px] mx-auto py-14">
          <div className="post-banner mb-12"><PostBanner color={post.color} bg={post.bg} cat={post.cat} /></div>
          <p className="text-[1.08rem] leading-[1.9] font-medium mb-10 pb-10 border-b" style={{ color:'var(--ink)', borderColor:'var(--border)' }}>{post.intro}</p>
          <div ref={bodyRef} className="space-y-12">
            {post.sections.map((sec, i) => (
              <div key={i} className="section-block">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-1 flex-shrink-0 rounded-full mt-1" style={{ height:28, background:`linear-gradient(180deg,${post.color},${post.color}50)` }} />
                  <h2 className="font-heading font-bold text-ink tracking-[-0.02em]" style={{ fontSize:'1.22rem' }}>{sec.heading}</h2>
                </div>
                <div className="pl-4"><Prose text={sec.body} /></div>
              </div>
            ))}
          </div>
          <div className="mt-16 p-7 rounded-[var(--r-xl)] relative overflow-hidden" style={{ background:'linear-gradient(135deg, #0A0A14, #0D0920)', border:`1px solid ${post.color}20` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background:`radial-gradient(ellipse 70% 70% at 100% 0%, ${post.color}12, transparent 65%)` }} />
            <div className="relative z-10">
              <p className="text-[0.85rem] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: post.color }}>Interested in applying this at your organisation?</p>
              <h3 className="font-heading text-xl font-bold text-white mb-4 tracking-[-0.02em]">Talk to the Vyuhon engineering team</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="primary" size="md" to="/contact">Start a Conversation <ArrowRight size={14}/></Button>
                <Button variant="outline-white" size="md" to="/services">View Services</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t" style={{ borderColor:'var(--border)', background:'var(--surface)' }}>
        <Container>
          <div className="py-12">
            <div className="eyebrow mb-5">More from Vyuhon Insights</div>
            <RelatedPosts current={post} />
          </div>
        </Container>
      </div>
    </div>
  )
}

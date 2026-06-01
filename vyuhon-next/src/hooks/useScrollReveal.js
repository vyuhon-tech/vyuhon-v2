import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal({ y = 28, x = 0, scale = 1, opacity = 0, duration = 0.75, delay = 0, stagger = 0, start = 'top 88%', selector = null } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const target = selector ? ref.current.querySelectorAll(selector) : [ref.current]
    const ctx = gsap.context(() => {
      gsap.fromTo(target, { y, x, scale, opacity }, {
        y: 0, x: 0, scale: 1, opacity: 1, duration, delay, stagger,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start, toggleActions: 'play none none none' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}

export function useHeroAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      const badge = ref.current.querySelector('[data-hero-badge]')
      const words = ref.current.querySelectorAll('[data-hero-word]')
      const sub = ref.current.querySelector('[data-hero-sub]')
      const ctas = ref.current.querySelector('[data-hero-ctas]')
      const strips = ref.current.querySelectorAll('[data-hero-strip]')
      if (badge) gsap.fromTo(badge, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.1, ease: 'power3.out' })
      if (words.length) gsap.fromTo(words, { y: '110%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.9, stagger: 0.08, delay: 0.2, ease: 'power4.out' })
      if (sub) gsap.fromTo(sub, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.65, ease: 'power3.out' })
      if (ctas) gsap.fromTo(ctas, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.85, ease: 'power3.out' })
      if (strips.length) gsap.fromTo(strips, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, delay: 1.1, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}

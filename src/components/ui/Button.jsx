import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const V = {
  primary:        'text-white transition-all duration-200 hover:-translate-y-px active:translate-y-0',
  teal:           'text-white transition-all duration-200 hover:-translate-y-px active:translate-y-0',
  dark:           'text-white transition-all duration-200 hover:-translate-y-px active:translate-y-0',
  outline:        'bg-transparent transition-all duration-200',
  'outline-white':'bg-transparent text-white transition-all duration-200',
}
const VS = {
  primary:        { background:'linear-gradient(135deg,#8B5CF6,#7C3AED)', boxShadow:'0 4px 18px rgba(139,92,246,0.28)' },
  teal:           { background:'linear-gradient(135deg,#10B981,#059669)', boxShadow:'0 4px 18px rgba(16,185,129,0.25)' },
  dark:           { background:'var(--ink)' },
  outline:        { border:'1.5px solid var(--border)', color:'var(--ink-mid)' },
  'outline-white':{ border:'1.5px solid rgba(255,255,255,0.22)', color:'#fff' },
}
const SZ = {
  sm: { padding:'9px 18px', fontSize:'0.81rem' },
  md: { padding:'11px 22px', fontSize:'0.875rem' },
  lg: { padding:'13px 30px', fontSize:'0.94rem' },
}

const Button = forwardRef(function Button({ variant='primary', size='md', to, href, children, className='', onClick, type='button', ...rest }, ref) {
  const base = `inline-flex items-center gap-2 rounded-full font-body font-semibold cursor-pointer select-none whitespace-nowrap ${V[variant]} ${className}`
  const style = { ...VS[variant], ...SZ[size] }

  // Hover inline styles are best handled outside so we keep it CSS-only via Tailwind
  const mEnter = (e) => {
    if (variant === 'primary') { e.currentTarget.style.boxShadow = '0 8px 28px rgba(139,92,246,0.4)'; }
    if (variant === 'teal') { e.currentTarget.style.boxShadow = '0 8px 28px rgba(16,185,129,0.38)'; }
    if (variant === 'outline') { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.25)'; }
    if (variant === 'outline-white') { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }
  }
  const mLeave = (e) => {
    if (variant === 'primary') { e.currentTarget.style.boxShadow = VS.primary.boxShadow; }
    if (variant === 'teal') { e.currentTarget.style.boxShadow = VS.teal.boxShadow; }
    if (variant === 'outline') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)'; }
    if (variant === 'outline-white') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; }
  }

  const shared = { ref, className: base, style, onMouseEnter: mEnter, onMouseLeave: mLeave, ...rest }
  if (to) return <Link to={to} {...shared}>{children}</Link>
  if (href) return <a href={href} {...shared}>{children}</a>
  return <button type={type} onClick={onClick} {...shared}>{children}</button>
})
export default Button

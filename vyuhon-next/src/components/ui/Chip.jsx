// Unified Chip component — all variants use rounded-full pill style
const BASE = 'inline-flex items-center gap-1 rounded-full font-semibold leading-none'

const VARIANTS = {
  purple: `${BASE} bg-[rgba(139,92,246,0.08)] text-[#7C3AED] border border-[rgba(139,92,246,0.18)] text-[0.69rem] tracking-[0.04em] px-3 py-[5px]`,
  teal:   `${BASE} bg-[rgba(16,185,129,0.08)]  text-[#059669] border border-[rgba(16,185,129,0.18)]  text-[0.69rem] tracking-[0.04em] px-3 py-[5px]`,
  blue:   `${BASE} bg-[rgba(59,130,246,0.08)]  text-[#2563EB] border border-[rgba(59,130,246,0.18)]  text-[0.69rem] tracking-[0.04em] px-3 py-[5px]`,
  amber:  `${BASE} bg-[rgba(245,158,11,0.08)]  text-[#B45309] border border-[rgba(245,158,11,0.18)]  text-[0.69rem] tracking-[0.04em] px-3 py-[5px]`,
  red:    `${BASE} bg-[rgba(239,68,68,0.08)]   text-[#DC2626] border border-[rgba(239,68,68,0.18)]   text-[0.69rem] tracking-[0.04em] px-3 py-[5px]`,
  dark:   `${BASE} bg-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.62)] border border-[rgba(255,255,255,0.1)] text-[0.69rem] tracking-[0.04em] px-3 py-[5px]`,
}

export default function Chip({ variant = 'purple', children }) {
  return <span className={VARIANTS[variant] ?? VARIANTS.purple}>{children}</span>
}

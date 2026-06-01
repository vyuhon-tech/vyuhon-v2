import { ArrowRight } from 'lucide-react'

export default function InsightCard({ category, date, title, excerpt, readTime, accentColor = '#8B5CF6', iconBg }) {
  return (
    <div className="bg-white border border-light-3 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_16px_44px_rgba(0,0,0,0.09)] hover:-translate-y-1 group flex flex-col">
      <div className="h-[190px] flex items-center justify-center" style={{ background: iconBg || 'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(59,130,246,0.08))' }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      </div>
      <div className="p-6 flex-1">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-[0.7rem] font-bold tracking-[0.06em] uppercase" style={{ color: accentColor }}>{category}</span>
          <span className="text-[0.72rem] text-ink-soft">{date}</span>
        </div>
        <h4 className="font-heading text-base font-bold text-ink leading-[1.35] mb-2 tracking-[-0.01em]">{title}</h4>
        <p className="text-[0.83rem] text-ink-soft leading-[1.65]">{excerpt}</p>
      </div>
      <div className="px-6 py-4 border-t border-light-3 flex items-center justify-between">
        <span className="text-[0.72rem] text-ink-soft">{readTime}</span>
        <span className="text-[0.8rem] font-semibold flex items-center gap-1.5 transition-all duration-200 group-hover:gap-2.5" style={{ color: accentColor }}>
          Read <ArrowRight size={13} />
        </span>
      </div>
    </div>
  )
}

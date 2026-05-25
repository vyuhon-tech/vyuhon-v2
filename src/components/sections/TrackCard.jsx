import Button from '../ui/Button'
import Chip from '../ui/Chip'
import { Clock } from 'lucide-react'

export default function TrackCard({ accentGrad, iconBg, iconColor, chipVariant, chipLabel, title, description, modules, duration, format }) {
  return (
    <div className="bg-white border border-light-3 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_52px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] flex flex-col">
      <div className="px-7 pt-7">
        <div className="h-[3px] rounded-[3px] mb-6" style={{ background: accentGrad }} />
        <div className="w-[52px] h-[52px] rounded-[15px] flex items-center justify-center mb-5" style={{ background: iconBg }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <div className="mb-3"><Chip variant={chipVariant}>{chipLabel}</Chip></div>
        <h3 className="font-heading text-[1.1rem] font-bold text-ink tracking-[-0.01em] mb-2">{title}</h3>
        <p className="text-[0.85rem] leading-[1.7] text-ink-soft">{description}</p>
      </div>
      <div className="px-7 flex-1">
        <div className="mt-5 flex flex-col gap-2">
          {modules.map(m => (
            <div key={m} className="flex items-center gap-2.5 text-[0.8rem] text-ink-mid py-1.5 border-b border-light-3 last:border-b-0">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: iconColor }} />
              {m}
            </div>
          ))}
        </div>
      </div>
      <div className="px-7 py-5 bg-light border-t border-light-3 flex items-center justify-between mt-4">
        <span className="flex items-center gap-1.5 text-[0.78rem] text-ink-soft">
          <Clock size={12} /> {duration} · {format}
        </span>
        <Button variant="primary" size="sm" to="/contact">Enroll →</Button>
      </div>
    </div>
  )
}

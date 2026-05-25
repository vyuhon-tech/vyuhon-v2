import Chip from '../ui/Chip'

export default function ServiceCard({ number, title, description, chips, chipVariant = 'purple' }) {
  return (
    <div className="grid grid-cols-[220px_1fr] gap-0 border-t border-light-3 py-12 hover:bg-light hover:rounded-2xl hover:px-4 hover:-mx-4 hover:border-transparent transition-all duration-200 cursor-default max-md:grid-cols-1 max-md:gap-3">
      <div className="font-body text-xs font-bold tracking-[0.1em] uppercase text-ink-soft pt-1">{number}</div>
      <div>
        <h3 className="font-heading text-[1.4rem] font-bold text-ink tracking-[-0.015em] mb-3">{title}</h3>
        <p className="text-[0.9rem] leading-[1.8] text-ink-mid mb-5">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {chips?.map(c => <Chip key={c} variant={chipVariant}>{c}</Chip>)}
        </div>
      </div>
    </div>
  )
}

// Horizontal process flow illustration  
export default function ProcessIllustration({ steps }) {
  const colors = ['#8B5CF6','#10B981','#3B82F6','#F59E0B']
  const lights = ['rgba(139,92,246,0.15)','rgba(16,185,129,0.12)','rgba(59,130,246,0.12)','rgba(245,158,11,0.12)']

  return (
    <div className="relative py-6 overflow-hidden">
      {/* Connecting line */}
      <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px" style={{ background:'linear-gradient(90deg, #8B5CF6, #10B981, #3B82F6, #F59E0B)' }} />

      <div className="grid grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            {/* Node */}
            <div className="relative mb-5 z-10">
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-heading text-sm font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${colors[i]}, ${colors[i]}cc)`, boxShadow: `0 0 0 6px ${lights[i]}` }}>
                {s.n}
              </div>
            </div>
            <h4 className="font-heading text-sm font-bold text-ink mb-1.5 group-hover:text-brand-purple transition-colors">{s.title}</h4>
            <p className="text-[0.78rem] leading-[1.6] text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

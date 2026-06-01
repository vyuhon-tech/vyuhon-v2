// Reusable decorative SVG elements for section accents

export function FloatingDots({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`opacity-20 ${className}`}>
      {[0,24,48,72,96].map(x =>
        [0,24,48,72,96].map(y => (
          <circle key={`${x}-${y}`} cx={x+8} cy={y+8} r="2" fill="rgba(139,92,246,0.6)" />
        ))
      )}
    </svg>
  )
}

export function CornerAccent({ color = '#8B5CF6', size = 80, className = '' }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" width={size} height={size} className={className}>
      <path d="M0 80 L0 0 L80 0" stroke={color} strokeWidth="1.5" opacity="0.25" fill="none" />
      <path d="M0 60 L0 0 L60 0" stroke={color} strokeWidth="1" opacity="0.15" fill="none" />
    </svg>
  )
}

export function WaveDivider({ light = true }) {
  const fill = light ? '#F8F8FC' : '#0A0A0F'
  return (
    <div className="w-full overflow-hidden" style={{ height: 60, marginBottom: -1 }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
        <path d={`M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z`} fill={fill} />
      </svg>
    </div>
  )
}

export function GridAccent({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={`opacity-[0.06] ${className}`}>
      {Array.from({length:9}).map((_,i) => (
        <line key={`h${i}`} x1="0" y1={i*25} x2="200" y2={i*25} stroke="white" strokeWidth="0.5"/>
      ))}
      {Array.from({length:9}).map((_,i) => (
        <line key={`v${i}`} x1={i*25} y1="0" x2={i*25} y2="200" stroke="white" strokeWidth="0.5"/>
      ))}
    </svg>
  )
}

export function CircleMark({ color = '#8B5CF6', size = 200, className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" width={size} height={size} className={className}>
      <circle cx="100" cy="100" r="96" stroke={color} strokeWidth="1" opacity="0.15" strokeDasharray="6 8"/>
      <circle cx="100" cy="100" r="72" stroke={color} strokeWidth="0.5" opacity="0.1"/>
    </svg>
  )
}

export function ArrowDecor({ className = '', color = '#8B5CF6' }) {
  return (
    <svg viewBox="0 0 40 20" fill="none" className={className}>
      <path d="M0 10 L32 10 M24 4 L32 10 L24 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  )
}

export function PulseRing({ color = '#8B5CF6', size = 80, className = '' }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: color }} />
      <div className="absolute inset-2 rounded-full opacity-30" style={{ background: color }} />
      <div className="absolute inset-4 rounded-full" style={{ background: color }} />
    </div>
  )
}

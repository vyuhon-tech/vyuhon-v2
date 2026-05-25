// Vision section abstract graphic — concentric rings with orbiting dots
export default function VisionGraphic() {
  return (
    <div className="relative flex items-center justify-center" style={{ height: 420 }}>
      {/* Background glow */}
      <div className="absolute rounded-full blur-[80px]" style={{ width:300, height:300, background:'rgba(139,92,246,0.12)' }} />

      <svg viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] relative z-10">
        {/* Rings */}
        <circle cx="190" cy="190" r="160" stroke="rgba(139,92,246,0.06)" strokeWidth="1" strokeDasharray="8 8" className="rotate-slow" style={{ transformOrigin:'190px 190px' }}/>
        <circle cx="190" cy="190" r="128" stroke="rgba(139,92,246,0.1)" strokeWidth="1" strokeDasharray="5 10" className="rotate-slow-rev" style={{ transformOrigin:'190px 190px' }}/>
        <circle cx="190" cy="190" r="96" stroke="rgba(16,185,129,0.1)" strokeWidth="1.5" />
        <circle cx="190" cy="190" r="64" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5" />

        {/* Central hexagon-ish shape */}
        <circle cx="190" cy="190" r="44" fill="rgba(139,92,246,0.07)" />
        <circle cx="190" cy="190" r="30" fill="rgba(139,92,246,0.12)" />
        <circle cx="190" cy="190" r="18" fill="url(#vg1)" />
        {/* Center spark */}
        <path d="M184 184 L190 174 L196 184 L206 190 L196 196 L190 206 L184 196 L174 190Z" fill="white" opacity="0.9" />

        {/* Orbit dots */}
        <g className="rotate-slow" style={{ transformOrigin:'190px 190px' }}>
          <circle cx="350" cy="190" r="6" fill="rgba(139,92,246,0.8)" />
          <circle cx="190" cy="30" r="5" fill="rgba(16,185,129,0.7)" />
          <circle cx="62" cy="284" r="4" fill="rgba(59,130,246,0.7)" />
        </g>
        <g className="rotate-slow-rev" style={{ transformOrigin:'190px 190px' }}>
          <circle cx="190" cy="62" r="5" fill="rgba(245,158,11,0.6)" />
          <circle cx="318" cy="284" r="4" fill="rgba(139,92,246,0.5)" />
        </g>

        {/* Connection lines from center to orbit */}
        <line x1="190" y1="172" x2="190" y2="126" stroke="rgba(139,92,246,0.15)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="206" y1="196" x2="239" y2="232" stroke="rgba(16,185,129,0.12)" strokeWidth="1" strokeDasharray="3 4" />
        <line x1="174" y1="196" x2="141" y2="232" stroke="rgba(59,130,246,0.12)" strokeWidth="1" strokeDasharray="3 4" />

        {/* Labels at key points */}
        <rect x="154" y="90" width="72" height="20" rx="10" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
        <text x="190" y="104" textAnchor="middle" fill="rgba(139,92,246,0.9)" fontSize="8" fontWeight="700" letterSpacing="0.5" fontFamily="Manrope">RESEARCH</text>

        <rect x="219" y="240" width="72" height="20" rx="10" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
        <text x="255" y="254" textAnchor="middle" fill="rgba(16,185,129,0.9)" fontSize="8" fontWeight="700" letterSpacing="0.5" fontFamily="Manrope">PRODUCTION</text>

        <rect x="88" y="240" width="72" height="20" rx="10" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <text x="124" y="254" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="8" fontWeight="700" letterSpacing="0.5" fontFamily="Manrope">SCALE</text>

        <defs>
          <radialGradient id="vg1" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#A78BFA"/>
            <stop offset="100%" stopColor="#6D28D9"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

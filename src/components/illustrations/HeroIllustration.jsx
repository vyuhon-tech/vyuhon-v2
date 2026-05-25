import { useEffect, useRef } from 'react'

// Animated AI engineering dashboard illustration
export default function HeroIllustration() {
  const svgRef = useRef(null)

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" style={{ minHeight: 480 }}>

      {/* Background glow blobs */}
      <div className="absolute rounded-full blur-[90px] pointer-events-none"
        style={{ width:320, height:320, top:'5%', right:'5%', background:'rgba(139,92,246,0.18)', animation:'floatY 12s ease-in-out infinite' }} />
      <div className="absolute rounded-full blur-[70px] pointer-events-none"
        style={{ width:220, height:220, bottom:'10%', left:'8%', background:'rgba(16,185,129,0.13)', animation:'floatY2 16s ease-in-out infinite' }} />
      <div className="absolute rounded-full blur-[60px] pointer-events-none"
        style={{ width:160, height:160, top:'40%', left:'30%', background:'rgba(59,130,246,0.1)', animation:'floatY3 10s ease-in-out infinite' }} />

      {/* Main illustration SVG */}
      <svg ref={svgRef} viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full max-w-[520px]">

        {/* === CENTRAL NODE === */}
        <g className="float-1" style={{ transformOrigin:'260px 240px' }}>
          {/* Outer ring - rotating */}
          <circle cx="260" cy="240" r="90" stroke="rgba(139,92,246,0.12)" strokeWidth="1" strokeDasharray="6 6" className="rotate-slow" style={{ transformOrigin:'260px 240px' }} />
          {/* Middle ring */}
          <circle cx="260" cy="240" r="68" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          {/* Core glow */}
          <circle cx="260" cy="240" r="50" fill="rgba(139,92,246,0.08)" />
          <circle cx="260" cy="240" r="36" fill="rgba(139,92,246,0.12)" />
          <circle cx="260" cy="240" r="24" fill="rgba(139,92,246,0.2)" />
          {/* Center icon bg */}
          <circle cx="260" cy="240" r="20" fill="url(#heroGrad1)" />
          {/* VY logo mark simplified */}
          <path d="M254 233 L258 244 L262 233" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="260" cy="247" r="2" fill="white" />
        </g>

        {/* === ORBIT NODES === */}
        {/* Node 1 - top right: LLM */}
        <g className="float-2" style={{ transformOrigin:'370px 150px' }}>
          <circle cx="370" cy="150" r="38" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
          <circle cx="370" cy="150" r="26" fill="rgba(16,185,129,0.1)" />
          <circle cx="370" cy="150" r="16" fill="url(#heroGrad2)" />
          {/* Code brackets icon */}
          <path d="M363 144 L358 150 L363 156" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M377 144 L382 150 L377 156" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Label */}
          <rect x="348" y="177" width="44" height="14" rx="7" fill="rgba(16,185,129,0.15)" />
          <text x="370" y="188" textAnchor="middle" fill="rgba(16,185,129,0.9)" fontSize="7.5" fontWeight="700" letterSpacing="0.5">LLM</text>
        </g>

        {/* Connector line LLM → center */}
        <line x1="350" y1="163" x2="295" y2="215" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="350" cy="163" r="2.5" fill="rgba(16,185,129,0.5)" />

        {/* Node 2 - right: MLOps */}
        <g className="float-3" style={{ transformOrigin:'415px 260px' }}>
          <circle cx="415" cy="260" r="34" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
          <circle cx="415" cy="260" r="22" fill="rgba(59,130,246,0.1)" />
          <circle cx="415" cy="260" r="13" fill="url(#heroGrad3)" />
          {/* Server icon */}
          <rect x="409" y="254" width="12" height="4" rx="1.5" fill="white" opacity="0.9"/>
          <rect x="409" y="260" width="12" height="4" rx="1.5" fill="white" opacity="0.6"/>
          <circle cx="419" cy="256" r="1.2" fill="rgba(16,185,129,1)"/>
          {/* Label */}
          <rect x="393" y="288" width="44" height="14" rx="7" fill="rgba(59,130,246,0.15)" />
          <text x="415" y="299" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="7.5" fontWeight="700" letterSpacing="0.5">MLOps</text>
        </g>

        {/* Connector line MLOps → center */}
        <line x1="382" y1="257" x2="320" y2="248" stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Node 3 - bottom right: Data */}
        <g className="float-1" style={{ transformOrigin:'370px 340px', animationDelay:'2s' }}>
          <circle cx="370" cy="340" r="32" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
          <circle cx="370" cy="340" r="20" fill="rgba(139,92,246,0.1)" />
          <circle cx="370" cy="340" r="12" fill="url(#heroGrad1)" />
          {/* Database icon */}
          <ellipse cx="370" cy="336" rx="6" ry="2.5" fill="white" opacity="0.9"/>
          <path d="M364 336 L364 344 C364 345.4 366.7 346.5 370 346.5 C373.3 346.5 376 345.4 376 344 L376 336" stroke="white" strokeWidth="1.2" fill="none" opacity="0.7"/>
          {/* Label */}
          <rect x="348" y="366" width="44" height="14" rx="7" fill="rgba(139,92,246,0.15)" />
          <text x="370" y="377" textAnchor="middle" fill="rgba(139,92,246,0.9)" fontSize="7.5" fontWeight="700" letterSpacing="0.5">Data</text>
        </g>

        {/* Connector line Data → center */}
        <line x1="350" y1="330" x2="294" y2="272" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Node 4 - left: Strategy */}
        <g className="float-2" style={{ transformOrigin:'108px 240px', animationDelay:'1s' }}>
          <circle cx="108" cy="240" r="36" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
          <circle cx="108" cy="240" r="24" fill="rgba(245,158,11,0.1)" />
          <circle cx="108" cy="240" r="14" fill="url(#heroGrad4)" />
          {/* Star/compass icon */}
          <path d="M108 231 L109.5 237 L116 237 L110.5 241 L112.5 248 L108 244 L103.5 248 L105.5 241 L100 237 L106.5 237Z" fill="white" opacity="0.9" />
          {/* Label */}
          <rect x="83" y="268" width="50" height="14" rx="7" fill="rgba(245,158,11,0.15)" />
          <text x="108" y="279" textAnchor="middle" fill="rgba(245,158,11,0.9)" fontSize="7.5" fontWeight="700" letterSpacing="0.5">Strategy</text>
        </g>

        {/* Connector line Strategy → center */}
        <line x1="143" y1="238" x2="205" y2="238" stroke="rgba(245,158,11,0.2)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Node 5 - top left: AI Product */}
        <g className="float-3" style={{ transformOrigin:'148px 148px', animationDelay:'3s' }}>
          <circle cx="148" cy="148" r="30" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.15)" strokeWidth="1" />
          <circle cx="148" cy="148" r="19" fill="rgba(239,68,68,0.08)" />
          <circle cx="148" cy="148" r="11" fill="url(#heroGrad5)" />
          {/* Layers icon */}
          <path d="M142 144 L148 141 L154 144 L148 147Z" fill="white" opacity="0.9"/>
          <path d="M142 148 L148 145 L154 148 L148 151Z" fill="white" opacity="0.6"/>
          <path d="M142 152 L148 149 L154 152 L148 155Z" fill="white" opacity="0.35"/>
          {/* Label */}
          <rect x="120" y="172" width="56" height="14" rx="7" fill="rgba(239,68,68,0.12)" />
          <text x="148" y="183" textAnchor="middle" fill="rgba(239,68,68,0.85)" fontSize="7" fontWeight="700" letterSpacing="0.5">AI Product</text>
        </g>

        {/* Connector line AI Product → center */}
        <line x1="170" y1="165" x2="222" y2="210" stroke="rgba(239,68,68,0.15)" strokeWidth="1" strokeDasharray="4 4" />

        {/* === FLOATING MINI CARDS === */}
        {/* Card 1: model accuracy */}
        <g className="float-2" style={{ transformOrigin:'68px 340px', animationDelay:'0.5s' }}>
          <rect x="22" y="316" width="92" height="48" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <text x="35" y="334" fill="rgba(255,255,255,0.35)" fontSize="7" fontWeight="600" letterSpacing="0.5">MODEL ACCURACY</text>
          <text x="35" y="352" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="800" fontFamily="Plus Jakarta Sans">98.4%</text>
          <rect x="68" y="344" width="6" height="10" rx="2" fill="rgba(16,185,129,0.7)"/>
          <rect x="76" y="340" width="6" height="14" rx="2" fill="rgba(16,185,129,0.5)"/>
          <rect x="84" y="336" width="6" height="18" rx="2" fill="rgba(16,185,129,0.35)"/>
          <rect x="92" y="334" width="6" height="20" rx="2" fill="rgba(16,185,129,0.2)"/>
        </g>

        {/* Card 2: latency stat */}
        <g className="float-1" style={{ transformOrigin:'437px 168px', animationDelay:'1.5s' }}>
          <rect x="411" y="144" width="84" height="48" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <text x="423" y="162" fill="rgba(255,255,255,0.35)" fontSize="7" fontWeight="600" letterSpacing="0.5">P99 LATENCY</text>
          <text x="423" y="180" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="800" fontFamily="Plus Jakarta Sans">38ms</text>
          {/* Sparkline */}
          <polyline points="422,186 429,183 436,185 443,180 450,181 457,177 464,179 471,175 478,172 485,170" stroke="rgba(59,130,246,0.7)" strokeWidth="1.5" fill="none"/>
        </g>

        {/* Card 3: status */}
        <g className="float-3" style={{ transformOrigin:'68px 140px', animationDelay:'2.5s' }}>
          <rect x="22" y="116" width="92" height="48" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <text x="35" y="134" fill="rgba(255,255,255,0.35)" fontSize="7" fontWeight="600" letterSpacing="0.5">DRIFT SCORE</text>
          <text x="35" y="152" fill="rgba(255,255,255,0.9)" fontSize="16" fontWeight="800" fontFamily="Plus Jakarta Sans">0.023</text>
          <rect x="70" y="143" width="34" height="12" rx="6" fill="rgba(16,185,129,0.2)"/>
          <circle cx="80" cy="149" r="3" fill="rgba(16,185,129,0.9)" className="ping-dot"/>
          <text x="88" y="153" fill="rgba(16,185,129,0.85)" fontSize="7.5" fontWeight="700">OK</text>
        </g>

        {/* === GRADIENT DEFS === */}
        <defs>
          <radialGradient id="heroGrad1" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#A78BFA"/>
            <stop offset="100%" stopColor="#7C3AED"/>
          </radialGradient>
          <radialGradient id="heroGrad2" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#34D399"/>
            <stop offset="100%" stopColor="#059669"/>
          </radialGradient>
          <radialGradient id="heroGrad3" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#60A5FA"/>
            <stop offset="100%" stopColor="#2563EB"/>
          </radialGradient>
          <radialGradient id="heroGrad4" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FCD34D"/>
            <stop offset="100%" stopColor="#D97706"/>
          </radialGradient>
          <radialGradient id="heroGrad5" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F87171"/>
            <stop offset="100%" stopColor="#DC2626"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

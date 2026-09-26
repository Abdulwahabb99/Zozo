// A sad little popcorn bucket with puppy eyes, drawn in inline SVG.
export default function PopcornBuddy() {
  return (
    <svg className="buddy" viewBox="0 0 160 170" role="img" aria-label="A sad cartoon popcorn bucket with teary puppy eyes">
      {/* popcorn */}
      <g fill="#fff4d6" stroke="#f1d08f" strokeWidth="2">
        <circle cx="44" cy="62" r="15" />
        <circle cx="66" cy="50" r="17" />
        <circle cx="92" cy="48" r="17" />
        <circle cx="116" cy="60" r="15" />
        <circle cx="80" cy="34" r="14" />
        <circle cx="56" cy="36" r="11" />
        <circle cx="106" cy="34" r="11" />
      </g>

      {/* bucket */}
      <path d="M28 68 H132 L116 160 Q80 166 44 160 Z" fill="#fffaf5" stroke="#e7a6b6" strokeWidth="2.5" strokeLinejoin="round" />
      <g fill="#ef6f8f">
        <path d="M28 68 H44 L53 161 Q48 160.6 44 160 Z" />
        <path d="M72 68 H88 L86 164 Q80 164.4 74 164 Z" />
        <path d="M116 68 H132 L116 160 Q111.5 160.6 107 161 Z" />
      </g>
      <rect x="24" y="64" width="112" height="12" rx="6" fill="#ef6f8f" />

      {/* face label */}
      <ellipse cx="80" cy="114" rx="36" ry="30" fill="#fffaf5" />

      {/* sad eyebrows */}
      <g stroke="#4a2c3a" strokeWidth="3" strokeLinecap="round">
        <path d="M58 94 L70 90" />
        <path d="M102 94 L90 90" />
      </g>

      {/* big eyes */}
      <circle cx="66" cy="108" r="10" fill="#4a2c3a" />
      <circle cx="94" cy="108" r="10" fill="#4a2c3a" />
      <circle cx="69" cy="104" r="3.6" fill="#fff" />
      <circle cx="97" cy="104" r="3.6" fill="#fff" />
      <circle cx="63" cy="111" r="1.8" fill="#fff" />
      <circle cx="91" cy="111" r="1.8" fill="#fff" />

      {/* blush */}
      <ellipse cx="54" cy="124" rx="7" ry="4" fill="#ffb3c3" />
      <ellipse cx="106" cy="124" rx="7" ry="4" fill="#ffb3c3" />

      {/* wobbly frown */}
      <path d="M71 133 Q75 127 80 130 Q85 127 89 133" fill="none" stroke="#4a2c3a" strokeWidth="3" strokeLinecap="round" />

      {/* tear */}
      <path className="buddy-tear" d="M58 118 Q54 126 58 129 Q62 126 58 118 Z" fill="#8fd0f5" />
    </svg>
  )
}

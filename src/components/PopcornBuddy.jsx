// A grumpy little popcorn bucket, drawn in inline SVG.
export default function PopcornBuddy() {
  return (
    <svg className="buddy" viewBox="0 0 160 170" role="img" aria-label="An angry cartoon popcorn bucket with a grumpy frown">
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

      {/* angry eyebrows, slanting down toward the middle */}
      <g stroke="#4a2c3a" strokeWidth="4" strokeLinecap="round">
        <path d="M54 92 L74 101" />
        <path d="M106 92 L86 101" />
      </g>

      {/* narrowed eyes */}
      <path d="M56 103 L76 108 A10 10 0 0 1 56 108 Z" fill="#4a2c3a" />
      <path d="M104 103 L84 108 A10 10 0 0 0 104 108 Z" fill="#4a2c3a" />
      <circle cx="69" cy="112" r="2.2" fill="#fff" />
      <circle cx="97" cy="112" r="2.2" fill="#fff" />

      {/* flushed cheeks */}
      <ellipse cx="54" cy="124" rx="7" ry="4" fill="#ff8a8a" />
      <ellipse cx="106" cy="124" rx="7" ry="4" fill="#ff8a8a" />

      {/* grumpy frown */}
      <path d="M68 137 Q80 126 92 137" fill="none" stroke="#4a2c3a" strokeWidth="3.5" strokeLinecap="round" />

      {/* anger mark */}
      <g className="buddy-vein" stroke="#e0364f" strokeWidth="3.5" fill="none" strokeLinecap="round">
        <path d="M124 18 Q130 20 130 14" />
        <path d="M138 14 Q138 20 144 18" />
        <path d="M124 30 Q130 28 130 34" />
        <path d="M138 34 Q138 28 144 30" />
      </g>
    </svg>
  )
}

// Soft hearts drifting in the background. Purely decorative.
const HEARTS = [
  { left: '6%', size: 18, delay: 0, duration: 16 },
  { left: '22%', size: 12, delay: 5, duration: 19 },
  { left: '41%', size: 16, delay: 9, duration: 17 },
  { left: '63%', size: 11, delay: 2, duration: 21 },
  { left: '78%', size: 20, delay: 7, duration: 18 },
  { left: '92%', size: 13, delay: 12, duration: 20 },
]

export default function FloatingHearts() {
  return (
    <div className="bg-hearts" aria-hidden="true">
      {HEARTS.map((h) => (
        <span
          key={h.left}
          style={{
            left: h.left,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}

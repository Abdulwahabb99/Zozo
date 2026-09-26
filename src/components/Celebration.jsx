// Balloons + confetti, pure CSS animation. Positions are computed once
// with a tiny deterministic generator so every render is the same.
const BALLOON_COLORS = ['var(--rose)', 'var(--peach)', 'var(--butter)', 'var(--lilac)', 'var(--mint)']
const CONFETTI_COLORS = ['var(--rose)', 'var(--peach)', 'var(--butter)', 'var(--lilac)', 'var(--mint)', 'var(--sky)']

function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const rand = seeded(14)

const BALLOONS = Array.from({ length: 12 }, (_, i) => ({
  left: 2 + i * 8 + rand() * 4,
  size: 42 + rand() * 22,
  delay: rand() * 1.6,
  duration: 5.5 + rand() * 2.5,
  sway: (rand() > 0.5 ? 1 : -1) * (10 + rand() * 18),
  color: BALLOON_COLORS[i % BALLOON_COLORS.length],
}))

const CONFETTI = Array.from({ length: 44 }, (_, i) => ({
  left: rand() * 100,
  delay: rand() * 1.2,
  duration: 2.6 + rand() * 2,
  drift: (rand() - 0.5) * 120,
  spin: 360 + rand() * 540,
  round: i % 3 === 0,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
}))

export default function Celebration() {
  return (
    <div className="celebration" aria-hidden="true">
      {CONFETTI.map((c, i) => (
        <span
          key={`c${i}`}
          className={c.round ? 'confetti is-round' : 'confetti'}
          style={{
            left: `${c.left}%`,
            background: c.color,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            '--drift': `${c.drift}px`,
            '--spin': `${c.spin}deg`,
          }}
        />
      ))}
      {BALLOONS.map((b, i) => (
        <span
          key={`b${i}`}
          className="balloon"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size * 1.22}px`,
            '--balloon': b.color,
            '--sway': `${b.sway}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

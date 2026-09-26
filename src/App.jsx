import { useRef, useState } from 'react'
import { copy } from './content.js'
import Screen from './components/Screen.jsx'
import NoModal from './components/NoModal.jsx'
import Celebration from './components/Celebration.jsx'
import DatePlan from './components/DatePlan.jsx'
import FloatingHearts from './components/FloatingHearts.jsx'

const STEPS = ['love', 'precious', 'invite', 'accepted']
const EXIT_MS = 320

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

export default function App() {
  const [step, setStep] = useState('love')
  const [leaving, setLeaving] = useState(false)
  const [noOpen, setNoOpen] = useState(false)
  const [partyKey, setPartyKey] = useState(0)
  const timer = useRef(null)

  const stepIndex = STEPS.indexOf(step)

  // Play the exit animation, then swap to the next screen.
  function goTo(next) {
    if (timer.current) return
    if (prefersReducedMotion()) {
      setStep(next)
      return
    }
    setLeaving(true)
    timer.current = setTimeout(() => {
      timer.current = null
      setLeaving(false)
      setStep(next)
    }, EXIT_MS)
  }

  function accept() {
    setNoOpen(false)
    goTo('accepted')
  }

  return (
    <main className="app">
      <FloatingHearts />

      <div className="progress" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span key={s} className={i <= stepIndex ? 'dot is-on' : 'dot'} />
        ))}
      </div>

      {step === 'love' && (
        <Screen key="love" badge={copy.love.badge} title={copy.love.title} leaving={leaving}>
          <p className="message">{copy.love.message}</p>
          <div className="actions">
            <button className="btn btn-primary" onClick={() => goTo('precious')}>
              {copy.love.button}
            </button>
          </div>
        </Screen>
      )}

      {step === 'precious' && (
        <Screen key="precious" badge={copy.precious.badge} title={copy.precious.title} leaving={leaving} autoFocus>
          <div className="actions">
            <button className="btn btn-primary" onClick={() => goTo('invite')}>
              {copy.precious.button}
            </button>
          </div>
        </Screen>
      )}

      {step === 'invite' && (
        <Screen key="invite" badge={copy.invite.badge} title={copy.invite.title} leaving={leaving} autoFocus>
          <div className="actions actions-pair">
            <button className="btn btn-primary btn-heartbeat" onClick={accept}>
              {copy.invite.yes}
            </button>
            <button className="btn btn-secondary" onClick={() => setNoOpen(true)}>
              {copy.invite.no}
            </button>
          </div>
        </Screen>
      )}

      {step === 'accepted' && (
        <>
          <Celebration key={partyKey} />
          <Screen key="accepted" badge={copy.accepted.badge} title={copy.accepted.title} autoFocus celebrate>
            <p className="when">{copy.accepted.when}</p>
            <DatePlan title={copy.accepted.planTitle} items={copy.accepted.plan} />
            <p className="signoff">{copy.accepted.signoff} 💛</p>
            <button className="btn-link" onClick={() => setPartyKey((k) => k + 1)}>
              {copy.accepted.replay}
            </button>
          </Screen>
        </>
      )}

      <NoModal open={noOpen} onClose={() => setNoOpen(false)} onAccept={accept} />
    </main>
  )
}

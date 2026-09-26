import { useEffect, useId, useRef } from 'react'

// A rounded card for one step. Moves keyboard/screen-reader focus to the
// heading when it appears, so each new step is announced.
export default function Screen({ badge, title, leaving = false, autoFocus = false, celebrate = false, children }) {
  const headingRef = useRef(null)
  const headingId = useId()

  useEffect(() => {
    if (autoFocus) headingRef.current?.focus({ preventScroll: true })
  }, [autoFocus])

  const classes = ['card', 'screen']
  if (leaving) classes.push('is-leaving')
  if (celebrate) classes.push('is-celebrating')

  return (
    <section className={classes.join(' ')} aria-labelledby={headingId}>
      <div className="badge" aria-hidden="true">
        {badge}
      </div>
      <h1 id={headingId} ref={headingRef} tabIndex={-1} className="title">
        {title}
      </h1>
      {children}
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { copy } from '../content.js'
import PopcornBuddy from './PopcornBuddy.jsx'

// Native <dialog>: traps focus, closes on Escape, and restores focus for free.
export default function NoModal({ open, onClose, onAccept }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // Clicks on the backdrop land on the <dialog> itself, not the inner panel.
  function handleClick(event) {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="no-modal-message"
      onClose={onClose}
      onClick={handleClick}
    >
      <div className="modal-panel">
        <button type="button" className="modal-close" aria-label={copy.noModal.closeLabel} onClick={onClose}>
          ×
        </button>
        <PopcornBuddy />
        <p id="no-modal-message" className="modal-message">
          {copy.noModal.message}
        </p>
        <div className="actions">
          <button type="button" className="btn btn-primary" onClick={onAccept} autoFocus>
            {copy.noModal.yes}
          </button>
          <button type="button" className="btn-link" onClick={onClose}>
            {copy.noModal.back}
          </button>
        </div>
      </div>
    </dialog>
  )
}

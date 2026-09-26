// The "Date plan" card, styled like a little movie ticket.
export default function DatePlan({ title, items }) {
  return (
    <div className="ticket">
      <h2 className="ticket-title">
        <span aria-hidden="true">🎟️ </span>
        {title}
      </h2>
      <ul className="ticket-list">
        {items.map((item) => (
          <li key={item.text}>
            <span className="ticket-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>
              {item.label && <strong>{item.label} </strong>}
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

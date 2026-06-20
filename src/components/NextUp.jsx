import { nextUp } from '../lib/insights.js'
import { problemUrl } from '../lib/problems.js'

export default function NextUp({ slots, state, onGoToPlan }) {
  const items = nextUp(slots, state, 5)
  return (
    <div className="panel">
      <div className="cardhead">
        <h3>Up next</h3>
        <button className="tag" style={{ cursor: 'pointer' }} onClick={onGoToPlan}>open plan →</button>
      </div>
      {items.length === 0 ? (
        <div className="empty">Everything's solved. 🏔 Summit reached.</div>
      ) : (
        <div className="nextup">
          {items.map((it, i) => (
            <a key={i} className="nextup-row" href={problemUrl(it.source, it.slug, it.title)} target="_blank" rel="noopener noreferrer">
              <span className={'diff ' + it.diff}>{it.diff}</span>
              <span className="nextup-title">{it.title}</span>
              <span className={'src ' + it.source}>{it.source}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

import { weakestPhases } from '../lib/insights.js'

// Two stacked insight cards: difficulty mastery bars + weakest-topic focus list.
export default function FocusAndDifficulty({ metrics, onGoToPlan }) {
  const diffs = [
    { k: 'E', label: 'Easy', color: 'var(--mint)', v: metrics.byDiff.E[0], t: metrics.byDiff.E[1] },
    { k: 'M', label: 'Medium', color: 'var(--amber)', v: metrics.byDiff.M[0], t: metrics.byDiff.M[1] },
    { k: 'H', label: 'Hard', color: 'var(--rose)', v: metrics.byDiff.H[0], t: metrics.byDiff.H[1] },
  ]
  const weak = weakestPhases(metrics.phase, 4)

  return (
    <div className="panel">
      <div className="cardhead"><h3>Difficulty mastery</h3><span className="tag">solved / total</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {diffs.map((d) => {
          const frac = d.t ? d.v / d.t : 0
          return (
            <div key={d.k}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 6 }}>
                <span style={{ color: 'var(--txt-dim)' }}>{d.label}</span>
                <span className="mono" style={{ color: 'var(--txt-faint)' }}>{d.v} / {d.t} · {Math.round(frac * 100)}%</span>
              </div>
              <div style={{ height: 9, background: 'var(--ink-3)', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${Math.round(frac * 100)}%`, background: d.color, borderRadius: 6, transition: 'width .5s' }} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="cardhead" style={{ marginTop: 22 }}>
        <h3 style={{ fontSize: 14 }}>Focus next — weakest topics</h3>
      </div>
      {weak.length === 0 ? (
        <div className="empty">No weak spots — every started topic is complete. 💪</div>
      ) : (
        <div className="weaklist">
          {weak.map((p) => (
            <button key={p.idx} className="weak-row" onClick={onGoToPlan} title="Open the plan">
              <span className="weak-name">{p.ext ? '' : p.idx + 1 + '. '}{p.name}</span>
              <span className="weak-bar"><i style={{ width: `${Math.round(p.frac * 100)}%`, background: p.ext ? 'var(--peri)' : 'var(--mint)' }} /></span>
              <span className="mono weak-pct">{Math.round(p.frac * 100)}%</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

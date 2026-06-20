export default function SourceBars({ metrics }) {
  const rows = [
    { label: 'LeetCode', color: 'var(--amber)', v: metrics.bySrc.LC[0], t: metrics.bySrc.LC[1] },
    { label: 'GeeksforGeeks', color: 'var(--mint)', v: metrics.bySrc.GFG[0], t: metrics.bySrc.GFG[1] },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 6 }}>
      {rows.map((r, i) => {
        const frac = r.t ? r.v / r.t : 0
        return (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 6 }}>
              <span style={{ color: 'var(--txt-dim)' }}>{r.label}</span>
              <span className="mono" style={{ color: 'var(--txt-faint)' }}>{r.v} / {r.t}</span>
            </div>
            <div style={{ height: 10, background: 'var(--ink-3)', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${Math.round(frac * 100)}%`, background: r.color, borderRadius: 6, transition: 'width .5s' }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

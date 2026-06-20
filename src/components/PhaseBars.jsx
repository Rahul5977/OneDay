export default function PhaseBars({ metrics }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
      {metrics.phase.map((p, i) => {
        const frac = p.total ? p.solved / p.total : 0
        const color = p.ext ? 'var(--peri)' : 'var(--mint)'
        return (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 54px', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 12, color: 'var(--txt-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {p.ext ? '' : `${i + 1}. `}{p.name}
            </div>
            <div style={{ height: 8, background: 'var(--ink-3)', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${Math.round(frac * 100)}%`, background: color, borderRadius: 6, transition: 'width .5s' }} />
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--txt-faint)', textAlign: 'right' }}>{p.solved}/{p.total}</div>
          </div>
        )
      })}
    </div>
  )
}

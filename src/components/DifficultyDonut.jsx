export default function DifficultyDonut({ metrics }) {
  const data = [
    { label: 'Easy', color: 'var(--mint)', v: metrics.byDiff.E[0], t: metrics.byDiff.E[1] },
    { label: 'Medium', color: 'var(--amber)', v: metrics.byDiff.M[0], t: metrics.byDiff.M[1] },
    { label: 'Hard', color: 'var(--rose)', v: metrics.byDiff.H[0], t: metrics.byDiff.H[1] },
  ]
  const totalSolved = data.reduce((a, d) => a + d.v, 0)
  const R = 52, sw = 18, C = 2 * Math.PI * R, cx = 70, cy = 70
  const denom = totalSolved || 1
  let off = 0
  const segs = data.map((d, i) => {
    const len = (d.v / denom) * C
    const node = d.v > 0 ? (
      <circle
        key={i} cx={cx} cy={cy} r={R} fill="none" stroke={d.color} strokeWidth={sw}
        strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-off}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    ) : null
    off += len
    return node
  })

  return (
    <>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <svg viewBox="0 0 140 140" width="150" height="150">
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="var(--ink-3)" strokeWidth={sw} />
          {segs}
          <text x="70" y="66" textAnchor="middle" fontSize="26" fontWeight="700" fill="var(--txt)" fontFamily="Space Grotesk,sans-serif">{totalSolved}</text>
          <text x="70" y="84" textAnchor="middle" fontSize="10" fill="var(--txt-faint)">solved</text>
        </svg>
      </div>
      <div className="legend">
        {data.map((d, i) => (
          <span key={i}>
            <span className="dot" style={{ background: d.color }} />
            {d.label} <b style={{ color: 'var(--txt)', marginLeft: 3 }}>{d.v}</b>
            <span style={{ color: 'var(--txt-faint)' }}>/{d.t}</span>
          </span>
        ))}
      </div>
    </>
  )
}

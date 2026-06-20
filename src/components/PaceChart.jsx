import { daysBetween } from '../lib/dates.js'

// Cumulative solved vs. a linear target line across the whole campaign.
export default function PaceChart({ metrics, startDate }) {
  const W = 560, H = 200, padL = 36, padR = 12, padT = 14, padB = 24
  const n = metrics.totalDays || 1
  const perDay = new Array(n).fill(0)
  for (const d in metrics.byDate) {
    const off = daysBetween(startDate, d)
    if (off >= 0 && off < n) perDay[off] += metrics.byDate[d]
    else if (off < 0) perDay[0] += metrics.byDate[d]
  }
  const cum = []
  let run = 0
  for (let i = 0; i < n; i++) { run += perDay[i]; cum.push(run) }
  const maxY = metrics.total || 1
  const X = (i) => padL + (W - padL - padR) * (n === 1 ? 0 : i / (n - 1))
  const Y = (v) => padT + (H - padT - padB) * (1 - v / maxY)

  const tgt = `M${X(0)},${Y(0)} L${X(n - 1)},${Y(maxY)}`
  const upto = Math.min(metrics.todayIdx, n - 1)
  let path = `M${X(0)},${Y(cum[0])}`
  for (let j = 1; j <= upto; j++) path += ` L${X(j)},${Y(cum[j])}`
  const area = `${path} L${X(upto)},${Y(0)} L${X(0)},${Y(0)} Z`
  const gx = X(upto)

  const grid = []
  for (let gy = 0; gy <= 4; gy++) {
    const yy = padT + (H - padT - padB) * gy / 4
    const val = Math.round(maxY * (1 - gy / 4))
    grid.push(<line key={'l' + gy} x1={padL} y1={yy} x2={W - padR} y2={yy} stroke="var(--line)" strokeWidth="1" />)
    grid.push(
      <text key={'t' + gy} x={padL - 6} y={yy + 3} textAnchor="end" fontSize="9" fill="var(--txt-faint)" fontFamily="JetBrains Mono,monospace">
        {val}
      </text>
    )
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      {grid}
      <path d={area} fill="rgba(66,226,160,.10)" stroke="none" />
      <path d={tgt} fill="none" stroke="var(--peri)" strokeWidth="2" strokeDasharray="5 5" opacity=".8" />
      <path d={path} fill="none" stroke="var(--mint)" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1={gx} y1={padT} x2={gx} y2={H - padB} stroke="var(--amber)" strokeWidth="1.5" strokeDasharray="3 3" opacity=".8" />
      <circle cx={gx} cy={Y(cum[upto])} r="3.5" fill="var(--amber)" />
    </svg>
  )
}

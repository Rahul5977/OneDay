import { activeDays, bestDay, longestStreak, paceStats, recentCount } from '../lib/insights.js'

function Tile({ value, label, color, sub }) {
  return (
    <div className="stat-tile">
      <b className="disp" style={{ color: color || 'var(--txt)' }}>{value}</b>
      <span>{label}</span>
      {sub && <small>{sub}</small>}
    </div>
  )
}

export default function StatStrip({ metrics, startDate }) {
  const pace = paceStats(metrics, startDate)
  const onTrack = pace.current >= pace.required
  return (
    <div className="statstrip">
      <Tile value={recentCount(metrics.byDate, 7)} label="solved this week" color="var(--mint)" sub="last 7 days" />
      <Tile value={longestStreak(metrics.byDate)} label="longest streak" color="var(--amber)" sub="consecutive days" />
      <Tile value={activeDays(metrics.byDate)} label="active days" color="var(--peri)" sub="with ≥1 solve" />
      <Tile value={bestDay(metrics.byDate)} label="best day" color="var(--mint-soft)" sub="most in one day" />
      <Tile
        value={pace.current.toFixed(1)}
        label="problems / day"
        color={onTrack ? 'var(--mint)' : 'var(--rose)'}
        sub={`need ${pace.required.toFixed(1)}/day to finish`}
      />
    </div>
  )
}

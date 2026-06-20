import { addDays, fmt, isSunday, todayStr } from '../lib/dates.js'

export default function Heatmap({ metrics, startDate }) {
  const today = todayStr()
  const cells = []
  for (let i = 0; i < metrics.totalDays; i++) {
    const date = addDays(startDate, i)
    const c = metrics.byDate[date] || 0
    const lvl = c === 0 ? '' : c <= 1 ? ' l1' : c <= 2 ? ' l2' : c <= 4 ? ' l3' : ' l4'
    let cls = 'cell' + lvl
    if (isSunday(date)) cls += ' contest'
    if (date === today) cls += ' today'
    cells.push(
      <span
        key={i}
        className={cls}
        title={`${fmt(date)} — ${c} solved${isSunday(date) ? ' · contest day' : ''}`}
      />
    )
  }
  return <div className="heat">{cells}</div>
}

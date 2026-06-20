import { useState } from 'react'
import { fmt, todayStr } from '../lib/dates.js'

function RatingChart({ contests }) {
  const pts = contests
    .slice()
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .map((c) => parseFloat((c.rating || '').toString().replace('+', '')) || 0)

  if (pts.length < 1) {
    return (
      <div style={{ color: 'var(--txt-faint)', fontSize: 13, textAlign: 'center', padding: '40px 0' }}>
        Log contests with a rating Δ to see your trajectory.
      </div>
    )
  }
  const cum = []
  let run = 0
  pts.forEach((p) => { run += p; cum.push(run) })
  const W = 560, H = 200, padL = 40, padR = 12, padT = 16, padB = 24
  const lo = Math.min(0, ...cum)
  let hi = Math.max(0, ...cum)
  if (hi === lo) hi = lo + 1
  const n = cum.length
  const X = (i) => padL + (W - padL - padR) * (n === 1 ? 0.5 : i / (n - 1))
  const Y = (v) => padT + (H - padT - padB) * (1 - (v - lo) / (hi - lo))
  let path = `M${X(0)},${Y(cum[0])}`
  for (let i = 1; i < n; i++) path += ` L${X(i)},${Y(cum[i])}`
  const zeroY = Y(0)

  return (
    <>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
        <line x1={padL} y1={zeroY} x2={W - padR} y2={zeroY} stroke="var(--line-2)" strokeWidth="1" strokeDasharray="4 4" />
        <text x={padL - 6} y={zeroY + 3} textAnchor="end" fontSize="9" fill="var(--txt-faint)" fontFamily="JetBrains Mono,monospace">0</text>
        <path d={path} fill="none" stroke="var(--peri)" strokeWidth="2.5" strokeLinejoin="round" />
        {cum.map((v, d) => <circle key={d} cx={X(d)} cy={Y(v)} r="3.5" fill="var(--peri)" />)}
      </svg>
      <div style={{ textAlign: 'center', fontSize: 11.5, color: 'var(--txt-faint)', marginTop: 6 }}>
        cumulative rating Δ over {n} contest(s)
      </div>
    </>
  )
}

const EMPTY = { name: '', date: '', solved: '', rank: '', rating: '', note: '' }

export default function Contests({ contests, actions, toast }) {
  const [form, setForm] = useState({ ...EMPTY, date: todayStr() })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const save = () => {
    if (!form.name.trim()) { toast('Give the contest a name first.'); return }
    actions.addContest({ ...form, name: form.name.trim(), date: form.date || todayStr() })
    setForm({ ...EMPTY, date: todayStr() })
    toast('Contest logged. Now upsolve the misses 💪')
  }

  const sorted = contests.slice().sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <section className="view">
      <div className="eyebrow">Live Fire</div>
      <h2 className="section">Weekly contests &amp; upsolve log.</h2>
      <p className="lede">Contests are your timed reps. Log every weekly so you can see your rating trajectory and spot which patterns keep costing you. Every Sunday in the plan is marked as a contest day.</p>

      <div className="contest-grid">
        <div className="panel">
          <div className="cardhead"><h3>Log a contest</h3></div>
          <div className="cform">
            <label>Contest<input value={form.name} onChange={set('name')} placeholder="LeetCode Weekly 452" /></label>
            <div className="grid">
              <label>Date<input type="date" value={form.date} onChange={set('date')} /></label>
              <label>Solved<input type="number" min="0" max="4" value={form.solved} onChange={set('solved')} placeholder="0–4" /></label>
            </div>
            <div className="grid">
              <label>Rank<input type="number" value={form.rank} onChange={set('rank')} placeholder="e.g. 3120" /></label>
              <label>Rating Δ<input value={form.rating} onChange={set('rating')} placeholder="+24 / -11" /></label>
            </div>
            <label>Weak pattern to upsolve<input value={form.note} onChange={set('note')} placeholder="e.g. monotonic stack, DP on subsequences" /></label>
            <button className="primary" onClick={save}>Save contest</button>
          </div>
          <div style={{ marginTop: 20 }}>
            <div className="cardhead"><h3 style={{ fontSize: 14 }}>Cadence</h3></div>
            <div className="cadence">
              <div className="ci"><b>SUN&nbsp;08:00</b><span>LeetCode Weekly Contest — 4 problems, 90 min. Treat it like an OA.</span></div>
              <div className="ci"><b>SAT&nbsp;20:00</b><span>LeetCode Biweekly (alternate Saturdays) — bonus reps when you have energy.</span></div>
              <div className="ci"><b>POST</b><span>Upsolve every unsolved problem the same day. That's where the rating comes from.</span></div>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="cardhead"><h3>History</h3><span className="tag">{contests.length} logged</span></div>
          <div style={{ marginBottom: 14 }}><RatingChart contests={contests} /></div>
          <div className="clog">
            {!contests.length ? (
              <div className="note-banner">No contests logged yet. After each LeetCode Weekly, add it here — your rating curve builds itself.</div>
            ) : (
              sorted.map((c) => {
                const rd = (c.rating || '').toString()
                const ratingColor = rd === '' ? 'var(--txt-faint)' : (rd[0] === '-' ? 'var(--rose)' : 'var(--mint)')
                const realIdx = contests.indexOf(c)
                return (
                  <div className="clog-item" key={realIdx + ':' + c.name + ':' + c.date}>
                    <div className="top">
                      <span className="nm">{c.name || 'Contest'}</span>
                      <span className="dt">
                        {c.date ? fmt(c.date) : ''}
                        <span className="del" title="Delete" onClick={() => actions.removeContest(realIdx)}>✕</span>
                      </span>
                    </div>
                    <div className="stats">
                      <span>Solved <b>{c.solved !== '' && c.solved != null ? c.solved + '/4' : '—'}</b></span>
                      {c.rank && <span>Rank <b style={{ color: 'var(--txt)' }}>{c.rank}</b></span>}
                      <span>Rating Δ <b style={{ color: ratingColor }}>{rd || '—'}</b></span>
                    </div>
                    {c.note && <div className="stats" style={{ marginTop: 6, color: 'var(--amber-soft)' }}>↻ upsolve: {c.note}</div>}
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

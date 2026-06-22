import { useState } from 'react'
import { PLAN } from '../data/plan.js'
import { addDays, fmtShort } from '../lib/dates.js'
import { dayKey, probId } from '../lib/model.js'
import { HARD_BY_KEY } from '../data/hard/index.js'
import DayCard from './DayCard.jsx'

const FILTERS = [
  ['all', 'All'],
  ['core', 'Core'],
  ['ext', 'DP Extension'],
  ['todo', 'Unsolved only'],
]

export default function PlanView({ slots, state, actions, toast }) {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const totalDays = slots.length
  const coreDays = slots.filter((s) => !s.ext).length

  const dateOf = {}
  slots.forEach((s) => { dateOf[s.g] = addDays(state.startDate, s.g) })

  const phaseEls = []
  for (let pi = 0; pi < PLAN.length; pi++) {
    const phase = PLAN[pi]
    if (filter === 'core' && phase.ext) continue
    if (filter === 'ext' && !phase.ext) continue

    const pSlots = slots.filter((s) => s.phaseIdx === pi)
    let ptot = 0, psol = 0
    pSlots.forEach((s) => s.items.forEach((_it, k) => {
      ptot++
      const r = state.done[probId(s, k)]
      if (r && r.done) psol++
    }))
    if (filter === 'todo' && ptot > 0 && psol === ptot) continue

    // which day-slots to render given todo/search filters
    const visibleSlots = pSlots.filter((s) => {
      if (filter === 'todo') {
        const allDone = s.items.length > 0 && s.items.every((_it, k) => {
          const r = state.done[probId(s, k)]
          return r && r.done
        })
        if (allDone) return false
      }
      if (q) {
        const hit = s.focus.toLowerCase().includes(q) || s.items.some((it) => it[0].toLowerCase().includes(q))
        if (!hit) return false
      }
      return true
    })
    if (q && visibleSlots.length === 0) continue

    const firstDay = pSlots.length ? dateOf[pSlots[0].g] : state.startDate
    const lastDay = pSlots.length ? dateOf[pSlots[pSlots.length - 1].g] : state.startDate

    phaseEls.push(
      <div className="phase" key={pi}>
        <div className="phase-head">
          <div className="phase-num">{phase.ext ? 'DP' : pi + 1}</div>
          <div className="meta">
            <h3>{phase.name}{phase.ext && <span className="ext-badge">Extension</span>}</h3>
            <div className="sub">{phase.tag} · {fmtShort(firstDay)} → {fmtShort(lastDay)}</div>
          </div>
          <div className="phase-prog">{psol} / {ptot}<br />{ptot ? Math.round((psol / ptot) * 100) : 0}%</div>
        </div>

        {visibleSlots.map((s) => (
          <DayCard
            key={dayKey(s)}
            slot={s}
            date={dateOf[s.g]}
            gIndex={s.g}
            state={state}
            isOpen={!!state.open[dayKey(s)] || (!!q)}
            actions={actions}
            toast={toast}
            hard={s.kind === 'plan' ? (HARD_BY_KEY[phase.name + '||' + s.focus] || []) : []}
          />
        ))}

        <button
          className="addbuffer"
          onClick={() => { actions.addBuffer(pi); toast('Catch-up day added — every later date shifted forward.') }}
        >
          ＋ Add a catch-up day to {phase.name}
        </button>
      </div>
    )
  }

  return (
    <section className="view">
      <div className="eyebrow">The Route</div>
      <h2 className="section">{totalDays} days, mapped problem by problem.</h2>
      <p className="lede">
        Days 1–{coreDays} are the core placement campaign. Days {coreDays + 1}–{totalDays} are the Dynamic Programming + Strings extension.
        Tap a day to open it; check off problems as you solve them. Had an off day? Use{' '}
        <b style={{ color: 'var(--amber)' }}>Add a catch-up day</b> at the end of any phase — it slots in a flex day and pushes every later date automatically.
      </p>

      <div className="planctrl">
        <div className="seg">
          {FILTERS.map(([f, label]) => (
            <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{label}</button>
          ))}
        </div>
        <div className="seg">
          <button onClick={() => actions.setAllOpen(false)}>Collapse all</button>
          <button onClick={() => actions.setAllOpen(true)}>Expand all</button>
        </div>
        <div className="searchfield">
          <input type="search" placeholder="Search problems…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="startfield">
          Start date <input type="date" value={state.startDate} onChange={(e) => e.target.value && actions.setStartDate(e.target.value)} />
        </div>
      </div>

      {phaseEls.length ? phaseEls : (
        <div className="note-banner">Nothing matches this filter — every problem here is already solved, or your search came up empty. 🎉</div>
      )}
    </section>
  )
}

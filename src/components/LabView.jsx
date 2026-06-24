import { useState } from 'react'
import { labSectionKey } from '../lib/labsModel.js'
import { LABS_BY_KEY } from '../data/labs/index.js'
import ChallengeCard from './ChallengeCard.jsx'

const FILTERS = [
  ['all', 'All'],
  ['todo', 'Unsolved only'],
]

export default function LabView({ labKey, slots, state, labMetrics, actions }) {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const lab = LABS_BY_KEY[labKey]
  const lang = lab ? lab.lang : ''
  const labSlots = slots.filter((s) => s.labKey === labKey)
  const meta = labMetrics && labMetrics.byLab ? labMetrics.byLab[labKey] : null
  const solved = meta ? meta.solved : 0
  const total = meta ? meta.total : 0
  const pct = total ? Math.round((solved / total) * 100) : 0

  const done = state.labs.done
  const isSolved = (c) => !!(done[c.id] && done[c.id].done)

  const visibleSlots = labSlots.filter((s) => {
    const challenges = s.challenges || []
    if (filter === 'todo') {
      const allDone = challenges.length > 0 && challenges.every(isSolved)
      if (allDone) return false
    }
    if (q) {
      const hit = s.focus.toLowerCase().includes(q) ||
        challenges.some((c) =>
          (c.title || '').toLowerCase().includes(q) ||
          (c.tags || []).some((t) => t.toLowerCase().includes(q)))
      if (!hit) return false
    }
    return true
  })

  return (
    <section className="view">
      <div className="eyebrow">{lab ? lab.tag : ''}</div>
      <h2 className="section">{lab ? lab.name : labKey}</h2>
      <p className="lede">
        {lab ? lab.blurb : ''} {total} challenges across {labSlots.length} sections — work them top to bottom.
        Tap a section to open it, click a challenge for the full problem, reveal hints one at a time, then check your
        approach against the reference. Tick each off as you nail it.
      </p>

      <div className="planctrl">
        <div className="seg">
          {FILTERS.map(([f, label]) => (
            <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{label}</button>
          ))}
        </div>
        <div className="seg">
          <button onClick={() => actions.setAllLabOpen(labKey, false)}>Collapse all</button>
          <button onClick={() => actions.setAllLabOpen(labKey, true)}>Expand all</button>
        </div>
        <div className="searchfield">
          <input type="search" placeholder="Search challenges…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="phase-prog" style={{ marginLeft: 'auto' }}>{solved} / {total}<br />{pct}%</div>
      </div>

      {visibleSlots.length ? visibleSlots.map((s) => (
        <ChallengeCard
          key={labSectionKey(s)}
          slot={s}
          gIndex={s.sectionIdx}
          lang={lang}
          state={state}
          isOpen={!!state.labs.open[labSectionKey(s)] || !!q}
          actions={actions}
        />
      )) : (
        <div className="note-banner">Nothing matches — every challenge here is done, or your search came up empty. 🎉</div>
      )}
    </section>
  )
}

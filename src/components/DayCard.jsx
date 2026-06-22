import { useState } from 'react'
import { fmt, isSunday, todayStr } from '../lib/dates.js'
import { dayKey, probId } from '../lib/model.js'
import Problem from './Problem.jsx'

export default function DayCard({ slot, date, gIndex, state, isOpen, actions, toast, hard = [] }) {
  const key = dayKey(slot)
  const [showNote, setShowNote] = useState(!!state.notes[key])
  const [showAdd, setShowAdd] = useState(false)
  const [draft, setDraft] = useState('')

  const items = slot.items
  const solved = items.reduce((n, _it, k) => {
    const r = state.done[probId(slot, k)]
    return n + (r && r.done ? 1 : 0)
  }, 0)
  const doneDay = items.length > 0 && solved === items.length
  const sunday = isSunday(date)
  const isToday = date === todayStr()
  const note = state.notes[key] || ''

  const commitAdd = () => {
    if (!draft.trim()) return
    actions.addCustomProblem(slot, draft)
    toast(`Added “${draft.trim()}”`)
    setDraft('')
  }

  const doCarry = () => {
    const n = actions.carryOver(slot)
    toast(n ? `Carried ${n} problem(s) to a catch-up day.` : 'Nothing unsolved to carry over here.')
  }

  return (
    <div className={'day' + (doneDay ? ' done-day' : '') + (slot.kind === 'buffer' ? ' buffer' : '') + (isOpen ? ' open' : '')}>
      <div className="day-head" onClick={() => actions.toggleDayOpen(slot)}>
        <div className="daynum">{gIndex + 1}</div>
        <div className="info">
          <div className="focus">{slot.kind === 'buffer' ? '🛟 ' : ''}{slot.focus}</div>
          <div className="date">
            {fmt(date)}
            {sunday && <span className="contest-pill">contest</span>}
            {isToday && <span className="contest-pill pill-today">today</span>}
          </div>
        </div>
        <div className="daymini">
          <span className="minibar"><i style={{ width: `${items.length ? (solved / items.length) * 100 : 0}%` }} /></span>
          <span className="daycount">{solved}/{items.length}</span>
          <span className="chev">⌄</span>
        </div>
      </div>

      {isOpen && (
        <div className="day-body">
          {items.map((it, k) => (
            <Problem
              key={k}
              item={it}
              isDone={!!(state.done[probId(slot, k)] && state.done[probId(slot, k)].done)}
              onToggle={() => actions.toggleProblem(slot, k)}
            />
          ))}

          {hard.length > 0 && (
            <div className="hardx">
              <div className="hardx-title">🔥 Hard extras <span>· optional · {hard.filter((p) => state.hardDone && state.hardDone[p.url]).length}/{hard.length} · not counted in your plan</span></div>
              {hard.map((p) => {
                const done = !!(state.hardDone && state.hardDone[p.url])
                return (
                  <div className={'hardx-row' + (done ? ' done' : '')} key={p.url}>
                    <span
                      className={'cb' + (done ? ' ck' : '')}
                      role="checkbox"
                      aria-checked={done}
                      tabIndex={0}
                      onClick={() => actions.toggleHard(p.url)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); actions.toggleHard(p.url) } }}
                    />
                    <span className={'hardx-plat plat-' + p.platform.toLowerCase()}>{p.platform}</span>
                    <a className="hardx-link" href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
                    {p.tag && <span className="hardx-tag">{p.tag}</span>}
                  </div>
                )
              })}
            </div>
          )}

          <div className="day-tools">
            <button className="tbtn" onClick={() => setShowNote((v) => !v)}>✎ Note</button>
            <button className="tbtn" onClick={() => setShowAdd((v) => !v)}>＋ Problem</button>
            <button className="tbtn" onClick={doCarry} title="Adds a flex day to this phase with the problems you haven't solved here">↪ Carry unsolved to a catch-up day</button>
          </div>

          {showNote && (
            <textarea
              className="notefield"
              placeholder="What went well / what to revisit…"
              value={note}
              onChange={(e) => actions.setNote(slot, e.target.value)}
              autoFocus
            />
          )}

          {showAdd && (
            <div className="addprob">
              <input
                type="text"
                placeholder="Problem title (e.g. Trapping Rain Water)"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') commitAdd() }}
                autoFocus
              />
              <button className="tbtn" onClick={commitAdd}>Add</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

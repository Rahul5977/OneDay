import { useState } from 'react'
import { fmt, isSunday, todayStr } from '../lib/dates.js'
import { theoryDayKey } from '../lib/theoryModel.js'
import ConceptModal from './ConceptModal.jsx'

function Concept({ concept, isDone, onToggle, onOpen }) {
  return (
    <div className={'concept' + (isDone ? ' solved' : '')}>
      <div className="concept-head">
        <span
          className={'cb' + (isDone ? ' ck' : '')}
          role="checkbox"
          aria-checked={isDone}
          tabIndex={0}
          onClick={onToggle}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle() } }}
        />
        <div
          className="concept-info"
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen() } }}
        >
          <div className="concept-topic">{concept.topic}</div>
          {concept.summary && <div className="concept-summary">{concept.summary}</div>}
        </div>
        <span className="chev open-chev" onClick={onOpen} aria-hidden="true">›</span>
      </div>
    </div>
  )
}

export default function ConceptCard({ slot, date, gIndex, state, isOpen, actions, toast }) {
  const key = theoryDayKey(slot)
  const [showNote, setShowNote] = useState(!!(state.theory.notes && state.theory.notes[key]))
  const [activeId, setActiveId] = useState(null)

  const concepts = slot.concepts || []
  const isStub = concepts.length === 0
  const solved = concepts.reduce((n, c) => {
    const r = state.theory.done[c.id]
    return n + (r && r.done ? 1 : 0)
  }, 0)
  const doneDay = concepts.length > 0 && solved === concepts.length
  const sunday = isSunday(date)
  const isToday = date === todayStr()
  const note = (state.theory.notes && state.theory.notes[key]) || ''

  return (
    <div className={'day concept-day' + (doneDay ? ' done-day' : '') + (isStub ? ' stub' : '') + (isOpen ? ' open' : '')}>
      <div className="day-head" onClick={() => actions.toggleTheoryDayOpen(slot)}>
        <div className="daynum">{gIndex + 1}</div>
        <div className="info">
          <div className="focus">
            <span className="subj-badge">{slot.subjectName}</span>
            {slot.focus}
          </div>
          <div className="date">
            {fmt(date)}
            {sunday && <span className="contest-pill">contest</span>}
            {isToday && <span className="contest-pill pill-today">today</span>}
            {isStub && <span className="soon-pill">coming soon</span>}
          </div>
        </div>
        <div className="daymini">
          {!isStub && <span className="minibar"><i style={{ width: `${concepts.length ? (solved / concepts.length) * 100 : 0}%` }} /></span>}
          {!isStub && <span className="daycount">{solved}/{concepts.length}</span>}
          <span className="chev">⌄</span>
        </div>
      </div>

      {isStub && (
        <div className="day-body">
          <div className="soon-line">📚 Content coming soon — focus planned: <b>{slot.focus}</b></div>
        </div>
      )}

      {!isStub && isOpen && (
        <div className="day-body">
          {concepts.map((c) => (
            <Concept
              key={c.id}
              concept={c}
              isDone={!!(state.theory.done[c.id] && state.theory.done[c.id].done)}
              onToggle={() => actions.toggleConcept(c.id)}
              onOpen={() => setActiveId(c.id)}
            />
          ))}

          <div className="day-tools">
            <button className="tbtn" onClick={() => setShowNote((v) => !v)}>✎ Note</button>
          </div>

          {showNote && (
            <textarea
              className="notefield"
              placeholder="Key takeaways / what to revisit…"
              value={note}
              onChange={(e) => actions.setTheoryNote(slot, e.target.value)}
              autoFocus
            />
          )}
        </div>
      )}

      {activeId && (() => {
        const c = concepts.find((x) => x.id === activeId)
        if (!c) return null
        return (
          <ConceptModal
            concept={c}
            isDone={!!(state.theory.done[c.id] && state.theory.done[c.id].done)}
            onToggle={() => actions.toggleConcept(c.id)}
            onClose={() => setActiveId(null)}
          />
        )
      })()}
    </div>
  )
}

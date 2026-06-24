import { useState } from 'react'
import { labSectionKey } from '../lib/labsModel.js'
import ChallengeModal from './ChallengeModal.jsx'

function ChallengeRow({ challenge, isDone, onToggle, onOpen }) {
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
          <div className="concept-topic">
            <span className={'diff d-' + challenge.diff}>{challenge.diff}</span>
            {challenge.title}
          </div>
          {challenge.summary && <div className="concept-summary">{challenge.summary}</div>}
        </div>
        <span className="chev open-chev" onClick={onOpen} aria-hidden="true">›</span>
      </div>
    </div>
  )
}

export default function ChallengeCard({ slot, gIndex, lang, state, isOpen, actions }) {
  const key = labSectionKey(slot)
  const [showNote, setShowNote] = useState(!!(state.labs.notes && state.labs.notes[key]))
  const [activeId, setActiveId] = useState(null)

  const challenges = slot.challenges || []
  const done = state.labs.done
  const isSolved = (c) => !!(done[c.id] && done[c.id].done)
  const solved = challenges.reduce((n, c) => n + (isSolved(c) ? 1 : 0), 0)
  const doneSection = challenges.length > 0 && solved === challenges.length
  const note = (state.labs.notes && state.labs.notes[key]) || ''

  return (
    <div className={'day concept-day' + (doneSection ? ' done-day' : '') + (isOpen ? ' open' : '')}>
      <div className="day-head" onClick={() => actions.toggleLabSectionOpen(slot)}>
        <div className="daynum">{String(gIndex + 1).padStart(2, '0')}</div>
        <div className="info">
          <div className="focus">{slot.focus}</div>
          {slot.intro && <div className="date">{slot.intro}</div>}
        </div>
        <div className="daymini">
          <span className="minibar"><i style={{ width: `${challenges.length ? (solved / challenges.length) * 100 : 0}%` }} /></span>
          <span className="daycount">{solved}/{challenges.length}</span>
          <span className="chev">⌄</span>
        </div>
      </div>

      {isOpen && (
        <div className="day-body">
          {challenges.map((c) => (
            <ChallengeRow
              key={c.id}
              challenge={c}
              isDone={isSolved(c)}
              onToggle={() => actions.toggleChallenge(c.id)}
              onOpen={() => setActiveId(c.id)}
            />
          ))}

          <div className="day-tools">
            <button className="tbtn" onClick={() => setShowNote((v) => !v)}>✎ Note</button>
          </div>

          {showNote && (
            <textarea
              className="notefield"
              placeholder="Your approach / what to revisit / gotchas…"
              value={note}
              onChange={(e) => actions.setLabNote(slot, e.target.value)}
              autoFocus
            />
          )}
        </div>
      )}

      {activeId && (() => {
        const c = challenges.find((x) => x.id === activeId)
        if (!c) return null
        return (
          <ChallengeModal
            challenge={c}
            lang={lang}
            isDone={isSolved(c)}
            onToggle={() => actions.toggleChallenge(c.id)}
            onClose={() => setActiveId(null)}
          />
        )
      })()}
    </div>
  )
}

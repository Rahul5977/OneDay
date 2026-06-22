import { addDays, fmt, todayStr } from '../lib/dates.js'
import { probId } from '../lib/model.js'

// Compact, fixed-height tiles that NEVER expand inline — so the two-column grid
// stays perfectly aligned with no reflow/whitespace. Clicking a tile jumps to that
// subject's dedicated (single-column) tab, where opening a day works without any
// alignment constraint.

function dsaProgress(slot, state) {
  let t = 0, s = 0
  slot.items.forEach((_it, k) => { t++; const r = state.done[probId(slot, k)]; if (r && r.done) s++ })
  return [s, t]
}

function theoryProgress(slot, state) {
  let t = 0, s = 0
  ;(slot.concepts || []).forEach((c) => { t++; const r = state.theory.done[c.id]; if (r && r.done) s++ })
  return [s, t]
}

function Tile({ kind, slot, date, gIndex, solved, total, isStub, onOpen }) {
  const pct = total ? (solved / total) * 100 : 0
  const done = total > 0 && solved === total
  const isToday = date === todayStr()
  return (
    <button
      type="button"
      className={'ctile' + (done ? ' done' : '') + (isStub ? ' stub' : '') + (kind === 'rest' ? ' rest' : '')}
      onClick={onOpen}
      disabled={kind === 'rest'}
    >
      {kind === 'rest' ? (
        <span className="ctile-rest">🌙 {slot}</span>
      ) : (
        <>
          <span className="daynum">{gIndex + 1}</span>
          <span className="ctile-info">
            <span className="ctile-focus">
              {kind === 'theory' && <span className="subj-badge">{slot.subjectName}</span>}
              {slot.focus}
            </span>
            <span className="ctile-date">
              {fmt(date)}
              {isToday && <span className="contest-pill pill-today">today</span>}
              {isStub && <span className="soon-pill">soon</span>}
            </span>
          </span>
          <span className="ctile-mini">
            {!isStub && <span className="minibar"><i style={{ width: `${pct}%` }} /></span>}
            {!isStub && <span className="daycount">{solved}/{total}</span>}
            <span className="chev open-chev">›</span>
          </span>
        </>
      )}
    </button>
  )
}

export default function CombinedView({ dsaSlots, theorySlots, state, setView }) {
  const max = Math.max(dsaSlots.length, theorySlots.length)
  const rows = []
  for (let i = 0; i < max; i++) rows.push({ i, dsa: dsaSlots[i] || null, theory: theorySlots[i] || null })

  return (
    <section className="view">
      <div className="eyebrow">Two Tracks, One Calendar</div>
      <h2 className="section">The combined plan.</h2>
      <p className="lede">
        Each row is one calendar day — DSA on the left, CS theory on the right. The theory column moves through OS → DBMS → CN → OOP → LLD as the days advance.
        Tap any day to jump into its full track and work through it there.
      </p>

      <div className="combined-head">
        <div className="combined-col-label">⚙️ DSA</div>
        <div className="combined-col-label">📚 CS Theory</div>
      </div>

      <div className="combined">
        {rows.map(({ i, dsa, theory }) => {
          const date = addDays(state.startDate, i)
          const dprog = dsa ? dsaProgress(dsa, state) : [0, 0]
          const tprog = theory ? theoryProgress(theory, state) : [0, 0]
          return (
            <div className="combined-row" key={i}>
              <div className="combined-daylabel">Day {i + 1} · {fmt(date)}</div>
              <div className="combined-pair">
                {dsa ? (
                  <Tile kind="dsa" slot={dsa} date={addDays(state.startDate, dsa.g)} gIndex={dsa.g}
                    solved={dprog[0]} total={dprog[1]} isStub={false} onOpen={() => setView('dsa')} />
                ) : (
                  <Tile kind="rest" slot="Rest day — no DSA scheduled." />
                )}
                {theory ? (
                  <Tile kind="theory" slot={theory} date={addDays(state.startDate, theory.g)} gIndex={theory.g}
                    solved={tprog[0]} total={tprog[1]} isStub={(theory.concepts || []).length === 0} onOpen={() => setView(theory.subjectKey)} />
                ) : (
                  <Tile kind="rest" slot="No theory today." />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

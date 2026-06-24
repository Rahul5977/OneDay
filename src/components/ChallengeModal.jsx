import { useEffect, useState } from 'react'

const DIFF_LABEL = { E: 'Easy', M: 'Medium', H: 'Hard', X: 'Expert' }

export default function ChallengeModal({ challenge, lang, isDone, onToggle, onClose }) {
  const [revealed, setRevealed] = useState(0)   // how many hints are shown
  const [showSolution, setShowSolution] = useState(false)

  const c = challenge
  const promptParas = (c.prompt || '').split('\n\n').filter((p) => p.trim())
  const examples = c.examples || []
  const hints = c.hints || []
  const keyPoints = c.keyPoints || []
  const pitfalls = c.pitfalls || []
  const tags = c.tags || []
  const explanation = (c.explanation || '').split('\n\n').filter((p) => p.trim())

  const setupLabel = lang === 'sql' ? '◫ Schema & sample data' : '◫ Given'
  const solveLabel = lang === 'sql' ? 'Reference query' : 'Reference solution'

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="cm-overlay" onClick={onClose}>
      <div className="cm-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={c.title}>
        <div className="cm-head">
          <span
            className={'cb' + (isDone ? ' ck' : '')}
            role="checkbox"
            aria-checked={isDone}
            tabIndex={0}
            onClick={onToggle}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle() } }}
          />
          <div className="cm-title-wrap">
            <div className="lab-modal-meta">
              <span className={'lab-diff d-' + c.diff}>{DIFF_LABEL[c.diff] || c.diff}</span>
              {tags.map((t) => <span key={t} className="lab-tag">{t}</span>)}
            </div>
            <div className={'cm-topic' + (isDone ? ' solved' : '')}>{c.title}</div>
            {c.summary && <div className="cm-summary">{c.summary}</div>}
          </div>
          <button className="cm-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="cm-body">
          <div className="lab-sec-label">▸ Problem</div>
          {promptParas.map((p, i) => (
            <p key={i} className="concept-para">{p}</p>
          ))}

          {c.setup && (
            <div className="concept-diagram-wrap">
              <div className="concept-diagram-label">{setupLabel}</div>
              <pre className="lab-code">{c.setup}</pre>
            </div>
          )}

          {examples.length > 0 && (
            <div className="lab-examples">
              <div className="concept-diagram-label">≡ Examples</div>
              {examples.map((ex, i) => (
                <div key={i} className="lab-example">
                  {ex.in != null && <div><span className="lab-ex-k">in </span><code>{ex.in}</code></div>}
                  {ex.out != null && <div><span className="lab-ex-k">out</span><code>{ex.out}</code></div>}
                  {ex.note && <div className="lab-ex-note">{ex.note}</div>}
                </div>
              ))}
            </div>
          )}

          {hints.length > 0 && (
            <div className="lab-hints">
              <div className="concept-diagram-label">💡 Hints (revealed one at a time)</div>
              {hints.slice(0, revealed).map((h, i) => (
                <div key={i} className="lab-hint"><b>Hint {i + 1}.</b> {h}</div>
              ))}
              {revealed < hints.length && (
                <button className="tbtn" onClick={() => setRevealed((v) => v + 1)}>
                  ↓ Reveal {revealed === 0 ? 'a hint' : 'next hint'} ({revealed}/{hints.length})
                </button>
              )}
            </div>
          )}

          {(c.solution || explanation.length > 0) && (
            <div className="lab-solution-block">
              {!showSolution ? (
                <button className="reveal-btn" onClick={() => setShowSolution(true)}>
                  ✦ Reveal {solveLabel.toLowerCase()} &amp; explanation
                </button>
              ) : (
                <>
                  {c.solution && (
                    <div className="concept-diagram-wrap">
                      <div className="concept-diagram-label">✅ {solveLabel}</div>
                      <pre className="lab-code sol">{c.solution}</pre>
                    </div>
                  )}
                  {explanation.length > 0 && (
                    <>
                      <div className="lab-sec-label">▸ Why it works</div>
                      {explanation.map((p, i) => <p key={i} className="concept-para">{p}</p>)}
                    </>
                  )}
                  {keyPoints.length > 0 && (
                    <ul className="concept-keys">
                      {keyPoints.map((kp, i) => <li key={i}>{kp}</li>)}
                    </ul>
                  )}
                  {pitfalls.length > 0 && (
                    <div className="lab-pitfalls">
                      <div className="concept-diagram-label">⚠ Watch out</div>
                      <ul className="concept-keys danger">
                        {pitfalls.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

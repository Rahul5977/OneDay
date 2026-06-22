import { useEffect, useState } from 'react'

export default function ConceptModal({ concept, isDone, onToggle, onClose }) {
  const [openQ, setOpenQ] = useState(-1)
  const paras = (concept.explanation || '').split('\n\n').filter((p) => p.trim())
  const keyPoints = concept.keyPoints || []
  const links = concept.links || []
  const videos = concept.videos || []
  const diagram = concept.diagram || ''
  const interview = concept.interview || []

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
      <div className="cm-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={concept.topic}>
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
            <div className={'cm-topic' + (isDone ? ' solved' : '')}>{concept.topic}</div>
            {concept.summary && <div className="cm-summary">{concept.summary}</div>}
          </div>
          <button className="cm-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="cm-body">
          {paras.map((p, i) => (
            <p key={i} className="concept-para">{p}</p>
          ))}

          {diagram && (
            <div className="concept-diagram-wrap">
              <div className="concept-diagram-label">▦ Diagram</div>
              <pre className="concept-diagram">{diagram}</pre>
            </div>
          )}

          {keyPoints.length > 0 && (
            <ul className="concept-keys">
              {keyPoints.map((kp, i) => (
                <li key={i}>{kp}</li>
              ))}
            </ul>
          )}

          {videos.length > 0 && (
            <div className="concept-media">
              <div className="concept-media-label">📺 Watch</div>
              <div className="concept-links">
                {videos.map((v, i) => (
                  <a key={i} href={v.url} target="_blank" rel="noreferrer" className="concept-link vid">▶ {v.label}</a>
                ))}
              </div>
            </div>
          )}

          {links.length > 0 && (
            <div className="concept-media">
              <div className="concept-media-label">📖 Read</div>
              <div className="concept-links">
                {links.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noreferrer" className="concept-link">↗ {l.label}</a>
                ))}
              </div>
            </div>
          )}

          {interview.length > 0 && (
            <div className="qa">
              <div className="qa-title">Interview Q&amp;A</div>
              {interview.map((qa, i) => (
                <div key={i} className={'qa-item' + (openQ === i ? ' open' : '')}>
                  <button className="qa-q" onClick={() => setOpenQ((v) => (v === i ? -1 : i))}>
                    <span className="chev">⌄</span>
                    <span>{qa.q}</span>
                  </button>
                  {openQ === i && <div className="qa-a">{qa.a}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

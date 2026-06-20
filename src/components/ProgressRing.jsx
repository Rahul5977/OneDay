const C = 389.6 // 2π·62

export default function ProgressRing({ pct }) {
  const offset = (C * (1 - pct)).toFixed(1)
  return (
    <div className="ring" style={{ position: 'relative', width: 148, height: 148, flexShrink: 0 }}>
      <svg width="148" height="148" viewBox="0 0 148 148" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="74" cy="74" r="62" fill="none" stroke="var(--ink-3)" strokeWidth="13" />
        <circle
          cx="74" cy="74" r="62" fill="none" stroke="url(#rg)" strokeWidth="13"
          strokeLinecap="round" strokeDasharray={C} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)' }}
        />
        <defs>
          <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff9d3c" />
            <stop offset="1" stopColor="#42e2a0" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div>
          <b className="disp" style={{ fontSize: 34, fontWeight: 700, lineHeight: 1, display: 'block' }}>
            {Math.round(pct * 100)}%
          </b>
          <small style={{ fontSize: 10.5, color: 'var(--txt-dim)', letterSpacing: '.12em', textTransform: 'uppercase' }}>
            Complete
          </small>
        </div>
      </div>
    </div>
  )
}

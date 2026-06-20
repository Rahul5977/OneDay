import { isPseudo, problemUrl } from '../lib/problems.js'

export default function Problem({ item, isDone, onToggle }) {
  const [title, source, diff, slug] = item
  const pseudo = isPseudo(title)
  const linkable = slug && !pseudo

  return (
    <div className={'prob' + (isDone ? ' solved' : '')}>
      <span
        className={'cb' + (isDone ? ' ck' : '')}
        role="checkbox"
        aria-checked={isDone}
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle() } }}
      />
      <div className="ttl">
        {linkable ? (
          <a href={problemUrl(source, slug, title)} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            {title}
          </a>
        ) : (
          title
        )}
      </div>
      {!pseudo && <span className={'src ' + source}>{source}</span>}
      {!pseudo && <span className={'diff ' + diff}>{diff}</span>}
    </div>
  )
}

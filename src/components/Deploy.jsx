import { useRef } from 'react'
import { todayStr } from '../lib/dates.js'

export default function Deploy({ state, actions, toast }) {
  const fileRef = useRef(null)

  const exportBackup = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ascent-backup-' + todayStr() + '.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    toast('Backup downloaded.')
  }

  const onImport = (e) => {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        actions.importState(JSON.parse(ev.target.result))
        toast('Backup restored.')
      } catch {
        toast("That file couldn't be read as an Ascent backup.")
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const reset = () => {
    if (!window.confirm('Reset ALL progress, notes, catch-up days and contests? This can\'t be undone (export a backup first).')) return
    actions.resetAll()
    toast('Everything reset.')
  }

  return (
    <section className="view">
      <div className="eyebrow">Ship It</div>
      <h2 className="section">Make it yours, online, forever.</h2>
      <p className="lede">This is a React app — build it once and deploy the static output anywhere. Your progress lives in your browser's local storage, so it sticks around between visits. Pick the easiest path below.</p>

      <div className="note-banner">
        <span>💾</span>
        <span><b>Heads up on saving:</b> progress is stored per-browser via localStorage. Run <code>npm run build</code> and deploy the <code>dist/</code> folder. Use <b>Export backup</b> before switching machines.</span>
      </div>

      <div className="grid2">
        <div className="panel">
          <div className="cardhead"><h3>Run &amp; build locally</h3></div>
          <div className="codeblock">
            <span className="c"># install once</span><br />
            npm install<br /><br />
            <span className="c"># dev server with hot reload</span><br />
            npm run dev<br /><br />
            <span className="c"># production build → dist/</span><br />
            npm run build &amp;&amp; npm run preview
          </div>
        </div>
        <div className="panel">
          <div className="cardhead"><h3>Deploy the build</h3></div>
          <div className="steps">
            <div className="step"><span className="n" /><div className="bd"><h4>GitHub Pages</h4><p>Push the repo, run <code>npm run build</code>, publish the <code>dist/</code> folder (the Vite base is already <code>./</code>).</p></div></div>
            <div className="step"><span className="n" /><div className="bd"><h4>Netlify / Vercel</h4><p>Build command <code>npm run build</code>, publish directory <code>dist</code>. Or drag the built <code>dist/</code> onto <code>app.netlify.com/drop</code>.</p></div></div>
            <div className="step"><span className="n" /><div className="bd"><h4>Done</h4><p>You get a permanent URL. Bookmark it and check off problems daily.</p></div></div>
          </div>
        </div>
      </div>

      <div className="panel" style={{ marginTop: 22 }}>
        <div className="cardhead"><h3>Backup &amp; restore your progress</h3><span className="tag">JSON</span></div>
        <p style={{ fontSize: 13, color: 'var(--txt-dim)', marginBottom: 14 }}>Export saves everything — checkmarks, dates, notes, catch-up days, contest log — to a file. Import on any device to continue exactly where you left off.</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="tbtn" onClick={exportBackup}>⬇ Export backup</button>
          <button className="tbtn" onClick={() => fileRef.current?.click()}>⬆ Import backup</button>
          <input ref={fileRef} type="file" accept="application/json" style={{ display: 'none' }} onChange={onImport} />
          <button className="tbtn warn" onClick={reset}>↺ Reset all progress</button>
        </div>
      </div>
    </section>
  )
}

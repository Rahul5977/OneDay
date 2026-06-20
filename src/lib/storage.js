// localStorage with a graceful in-memory fallback (sandboxed previews block it).

const KEY = 'ascent.v2'
let mem = null

function canStore() {
  try {
    const k = '__ascent_probe__'
    window.localStorage.setItem(k, '1')
    window.localStorage.removeItem(k)
    return true
  } catch {
    return false
  }
}

export const HAS_LS = canStore()

export function loadState() {
  let raw = null
  if (HAS_LS) {
    try {
      raw = window.localStorage.getItem(KEY)
    } catch {
      raw = null
    }
  } else {
    raw = mem
  }
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function saveState(state) {
  const str = JSON.stringify(state)
  if (HAS_LS) {
    try {
      window.localStorage.setItem(KEY, str)
      return
    } catch {
      /* fall through to memory */
    }
  }
  mem = str
}

// Tiny date helpers — all dates are "YYYY-MM-DD" strings in local time.

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const pad = (n) => (n < 10 ? '0' + n : '' + n)

export function todayStr() {
  const d = new Date()
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate())
}

export function parseDate(s) {
  const p = s.split('-')
  return new Date(+p[0], +p[1] - 1, +p[2])
}

export function addDays(s, n) {
  const d = parseDate(s)
  d.setDate(d.getDate() + n)
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate())
}

export function daysBetween(a, b) {
  return Math.round((parseDate(b) - parseDate(a)) / 86400000)
}

export function fmt(s) {
  const d = parseDate(s)
  return WD[d.getDay()] + ' ' + pad(d.getDate()) + ' ' + MON[d.getMonth()]
}

export function fmtShort(s) {
  const d = parseDate(s)
  return pad(d.getDate()) + ' ' + MON[d.getMonth()]
}

export function isSunday(s) {
  return parseDate(s).getDay() === 0
}

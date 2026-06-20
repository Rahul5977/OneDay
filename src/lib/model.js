// Pure model helpers: turn PLAN + saved state into an ordered list of day "slots"
// and aggregate metrics. No React, no side effects.

import { addDays, daysBetween, todayStr } from './dates.js'

// Every plan day + any inserted catch-up (buffer) day, in calendar order.
export function buildSlots(PLAN, state) {
  const slots = []
  let g = 0
  for (let pi = 0; pi < PLAN.length; pi++) {
    const phase = PLAN[pi]
    for (let di = 0; di < phase.days.length; di++) {
      const key = pi + ':p' + di
      const custom = state.custom?.[key] || []
      slots.push({
        phaseIdx: pi,
        kind: 'plan',
        dayIdx: di,
        ext: phase.ext,
        focus: phase.days[di].focus,
        items: phase.days[di].items.concat(custom),
        g: g++,
      })
    }
    const bufs = state.buffers?.[pi] || []
    for (let bi = 0; bi < bufs.length; bi++) {
      slots.push({
        phaseIdx: pi,
        kind: 'buffer',
        bufIdx: bi,
        ext: phase.ext,
        focus: bufs[bi].focus,
        items: bufs[bi].items,
        g: g++,
      })
    }
  }
  return slots
}

export function probId(slot, k) {
  return slot.kind === 'plan'
    ? slot.phaseIdx + ':p' + slot.dayIdx + ':' + k
    : slot.phaseIdx + ':b' + slot.bufIdx + ':' + k
}

export function dayKey(slot) {
  return slot.kind === 'plan'
    ? slot.phaseIdx + ':p' + slot.dayIdx
    : slot.phaseIdx + ':b' + slot.bufIdx
}

export function computeMetrics(PLAN, state, slots) {
  const today = todayStr()
  const m = {
    total: 0, solved: 0,
    coreTotal: 0, coreSolved: 0,
    extTotal: 0, extSolved: 0,
    byDiff: { E: [0, 0], M: [0, 0], H: [0, 0] },
    bySrc: { LC: [0, 0], GFG: [0, 0] },
    byDate: {},
    solvedToday: 0,
    phase: [],
    totalDays: slots.length,
  }
  const phaseAgg = {}
  for (const slot of slots) {
    if (!phaseAgg[slot.phaseIdx]) phaseAgg[slot.phaseIdx] = { solved: 0, total: 0 }
    slot.items.forEach((it, k) => {
      const src = it[1], diff = it[2]
      const rec = state.done[probId(slot, k)]
      const isDone = !!(rec && rec.done)
      m.total++
      if (slot.ext) { m.extTotal++; if (isDone) m.extSolved++ }
      else { m.coreTotal++; if (isDone) m.coreSolved++ }
      if (m.byDiff[diff]) { m.byDiff[diff][1]++; if (isDone) m.byDiff[diff][0]++ }
      if (m.bySrc[src]) { m.bySrc[src][1]++; if (isDone) m.bySrc[src][0]++ }
      phaseAgg[slot.phaseIdx].total++
      if (isDone) {
        m.solved++
        phaseAgg[slot.phaseIdx].solved++
        const d = rec.doneDate || today
        m.byDate[d] = (m.byDate[d] || 0) + 1
        if (d === today) m.solvedToday++
      }
    })
  }
  for (let pi = 0; pi < PLAN.length; pi++) {
    const a = phaseAgg[pi] || { solved: 0, total: 0 }
    m.phase.push({ name: PLAN[pi].name, ext: PLAN[pi].ext, solved: a.solved, total: a.total })
  }
  const off = daysBetween(state.startDate, today)
  m.todayIdx = Math.max(0, Math.min(off, m.totalDays - 1))
  m.dayNumber = Math.max(1, Math.min(off + 1, m.totalDays))
  return m
}

// Consecutive days (ending today or yesterday) with at least one solve.
export function streak(byDate) {
  const today = todayStr()
  let n = 0
  let cur = today
  if (!byDate[cur]) cur = addDays(cur, -1)
  while (byDate[cur]) { n++; cur = addDays(cur, -1) }
  return n
}

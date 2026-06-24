// Pure model helpers for the practice "Labs" (JavaScript Lab + SQL Lab):
// turn LABS data into an ordered list of section "slots" and aggregate metrics.
// Mirrors src/lib/theoryModel.js — no React, no side effects.
//
// A lab = { key, name, tag, lang, blurb } + sections.
// A section = { focus, challenges: [...] }.
// A challenge = { id, title, diff, ... } (rendered by ChallengeModal).

import { daysBetween, todayStr } from './dates.js'
import { streak } from './model.js'

// Every lab section, in authoring order (JS Lab sections, then SQL Lab).
export function buildLabSlots(LABS) {
  const slots = []
  let g = 0
  for (const lab of LABS) {
    lab.sections.forEach((section, sectionIdx) => {
      slots.push({
        g: g++,
        labKey: lab.key,
        labName: lab.name,
        labTag: lab.tag,
        lang: lab.lang,
        sectionIdx,
        focus: section.focus,
        intro: section.intro || '',
        challenges: section.challenges || [],
      })
    })
  }
  return slots
}

export function labSectionKey(slot) {
  return `${slot.labKey}:${slot.sectionIdx}`
}

export function challengeId(ch) {
  return ch.id
}

export function computeLabMetrics(LABS, labsState, slots, startDate) {
  const today = todayStr()
  const done = (labsState && labsState.done) || {}
  const m = {
    total: 0, solved: 0,
    byDate: {},
    byLab: {},
    byDiff: { E: { t: 0, s: 0 }, M: { t: 0, s: 0 }, H: { t: 0, s: 0 }, X: { t: 0, s: 0 } },
    totalSections: slots.length,
  }
  const labAgg = {}
  for (const lab of LABS) {
    labAgg[lab.key] = { key: lab.key, name: lab.name, solved: 0, total: 0 }
  }
  for (const slot of slots) {
    const agg = labAgg[slot.labKey]
    slot.challenges.forEach((ch) => {
      const rec = done[challengeId(ch)]
      const isDone = !!(rec && rec.done)
      m.total++
      agg.total++
      const d = m.byDiff[ch.diff] || (m.byDiff[ch.diff] = { t: 0, s: 0 })
      d.t++
      if (isDone) {
        m.solved++
        agg.solved++
        d.s++
        const date = rec.doneDate || today
        m.byDate[date] = (m.byDate[date] || 0) + 1
      }
    })
  }
  m.byLab = labAgg
  const off = daysBetween(startDate, today)
  m.dayNumber = Math.max(1, off + 1)
  return m
}

// Consecutive days (ending today or yesterday) with at least one challenge solved.
export function labStreak(byDate) {
  return streak(byDate)
}

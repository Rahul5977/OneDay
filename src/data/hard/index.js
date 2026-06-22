// Optional HARD "extra challenge" problems per DSA topic (phase + day-focus).
// Sourced from LeetCode Hard, CSES, Codeforces, TLE Eliminators. These are EXTRA —
// tracked via state.hardDone and intentionally excluded from all planner metrics.
//
// Entry = { phase, focus, problems: [{ title, platform:'LC'|'CSES'|'CF'|'TLE', url, tag }] }

import { HARD as g1 } from './g1.js'
import { HARD as g2 } from './g2.js'
import { HARD as g3 } from './g3.js'
import { HARD as g4 } from './g4.js'
import { HARD as g5 } from './g5.js'

export const HARD = [...g1, ...g2, ...g3, ...g4, ...g5]

// Lookup by "<phase>||<focus>" → problems[]
export const HARD_BY_KEY = HARD.reduce((m, e) => {
  m[e.phase + '||' + e.focus] = e.problems
  return m
}, {})

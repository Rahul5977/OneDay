// Aggregated curriculum. Phases are authored in topic-group files under ./phases/
// and concatenated here in campaign order (core phases first, DP extension last).
//
// Each problem = [title, source ("LC" | "GFG"), difficulty ("E" | "M" | "H"), slug]
//   LC  -> leetcode.com/problems/<slug>/
//   GFG -> GeeksforGeeks search by title
// Phase = { name, tag, ext, days: [ { focus, items: [...] }, ... ] }

import { PHASES as g1 } from './phases/g1-arrays-twopointers.js'
import { PHASES as g2 } from './phases/g2-search-stack-list.js'
import { PHASES as g3 } from './phases/g3-trees-heaps.js'
import { PHASES as g4 } from './phases/g4-recursion-greedy-graphs.js'
import { PHASES as g5 } from './phases/g5-dp-strings.js'

export const PLAN = [...g1, ...g2, ...g3, ...g4, ...g5]

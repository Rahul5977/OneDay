// Practice "Labs" — independent challenge trackers, separate from the DSA plan
// and the CS-theory tracker. Each lab is authored in its own file and exports
// LAB ({ key, name, tag, lang, blurb }) and SECTIONS ([ { focus, intro,
// challenges: [...] }, ... ]).

import * as jslab from './js.js'
import * as sqllab from './sql.js'

const MODULES = [jslab, sqllab]

export const LABS = MODULES.map((m) => ({ ...m.LAB, sections: m.SECTIONS }))

export const LABS_BY_KEY = LABS.reduce((acc, l) => {
  acc[l.key] = l
  return acc
}, {})

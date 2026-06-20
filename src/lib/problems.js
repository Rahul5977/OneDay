// Build an external URL for a problem and classify pseudo-items.

// Titles that begin with these glyphs are revision prompts, not real problems.
const PSEUDO = /^[↻🏔🛟]/

export function isPseudo(title) {
  return PSEUDO.test(title)
}

export function problemUrl(source, slug, title) {
  if (source === 'LC') return 'https://leetcode.com/problems/' + slug + '/'
  // GFG: link to a GeeksforGeeks search for the title (robust regardless of slug).
  return 'https://www.geeksforgeeks.org/?s=' + encodeURIComponent(title)
}

export const SOURCE_LABEL = { LC: 'LeetCode', GFG: 'GeeksforGeeks' }
export const DIFF_LABEL = { E: 'Easy', M: 'Medium', H: 'Hard' }

// HARD "extra challenge" problems for Recursion & Backtracking, Greedy, Graphs,
// and Tries & Strings. Optional extras shown outside the main planner.
// Each entry = { phase, focus, problems: [ { title, platform, url, tag } ] }
//   platform: 'LC' | 'CSES' | 'CF' | 'TLE'
//   tag: LC -> 'Hard', CF -> rating, CSES -> ''

export const HARD = [
  // ---------- Recursion & Backtracking ----------
  {
    phase: 'Recursion & Backtracking',
    focus: 'Recursion foundations & subsets',
    problems: [
      { title: 'Special Binary String', platform: 'LC', url: 'https://leetcode.com/problems/special-binary-string/', tag: 'Hard' },
      { title: 'Strobogrammatic Number III', platform: 'LC', url: 'https://leetcode.com/problems/strobogrammatic-number-iii/', tag: 'Hard' },
      { title: 'Maximum Score Words Formed by Letters', platform: 'LC', url: 'https://leetcode.com/problems/maximum-score-words-formed-by-letters/', tag: 'Hard' },
      { title: 'Partition to K Equal Sum Subsets', platform: 'LC', url: 'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Recursion & Backtracking',
    focus: 'Combinations & sum problems',
    problems: [
      { title: 'Number of Squareful Arrays', platform: 'LC', url: 'https://leetcode.com/problems/number-of-squareful-arrays/', tag: 'Hard' },
      { title: 'Minimum Number of Work Sessions to Finish the Tasks', platform: 'LC', url: 'https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/', tag: 'Medium' },
      { title: 'Matchsticks to Square', platform: 'LC', url: 'https://leetcode.com/problems/matchsticks-to-square/', tag: 'Medium' },
      { title: 'Verbal Arithmetic Puzzle', platform: 'LC', url: 'https://leetcode.com/problems/verbal-arithmetic-puzzle/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Recursion & Backtracking',
    focus: 'Permutations & string partitions',
    problems: [
      { title: 'Palindrome Partitioning II', platform: 'LC', url: 'https://leetcode.com/problems/palindrome-partitioning-ii/', tag: 'Hard' },
      { title: 'Palindrome Partitioning IV', platform: 'LC', url: 'https://leetcode.com/problems/palindrome-partitioning-iv/', tag: 'Hard' },
      { title: 'Find the Closest Palindrome', platform: 'LC', url: 'https://leetcode.com/problems/find-the-closest-palindrome/', tag: 'Hard' },
      { title: 'Permutation Sequence', platform: 'LC', url: 'https://leetcode.com/problems/permutation-sequence/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Recursion & Backtracking',
    focus: 'Grid backtracking',
    problems: [
      { title: 'Sudoku Solver', platform: 'LC', url: 'https://leetcode.com/problems/sudoku-solver/', tag: 'Hard' },
      { title: 'N-Queens II', platform: 'LC', url: 'https://leetcode.com/problems/n-queens-ii/', tag: 'Hard' },
      { title: 'Word Search II', platform: 'LC', url: 'https://leetcode.com/problems/word-search-ii/', tag: 'Hard' },
      { title: 'Robot Room Cleaner', platform: 'LC', url: 'https://leetcode.com/problems/robot-room-cleaner/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Recursion & Backtracking',
    focus: 'Hard backtracking & pruning',
    problems: [
      { title: 'Remove Invalid Parentheses', platform: 'LC', url: 'https://leetcode.com/problems/remove-invalid-parentheses/', tag: 'Hard' },
      { title: 'Expression Add Operators', platform: 'LC', url: 'https://leetcode.com/problems/expression-add-operators/', tag: 'Hard' },
      { title: 'Stickers to Spell Word', platform: 'LC', url: 'https://leetcode.com/problems/stickers-to-spell-word/', tag: 'Hard' },
      { title: 'Optimal Account Balancing', platform: 'LC', url: 'https://leetcode.com/problems/optimal-account-balancing/', tag: 'Hard' },
    ],
  },

  // ---------- Greedy ----------
  {
    phase: 'Greedy',
    focus: 'Jump & reach problems',
    problems: [
      { title: 'Jump Game II', platform: 'LC', url: 'https://leetcode.com/problems/jump-game-ii/', tag: 'Medium' },
      { title: 'Jump Game V', platform: 'LC', url: 'https://leetcode.com/problems/jump-game-v/', tag: 'Hard' },
      { title: 'Minimum Number of Taps to Open to Water a Garden', platform: 'LC', url: 'https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/', tag: 'Hard' },
      { title: 'Frog Jump', platform: 'LC', url: 'https://leetcode.com/problems/frog-jump/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Greedy',
    focus: 'Intervals',
    problems: [
      { title: 'Employee Free Time', platform: 'LC', url: 'https://leetcode.com/problems/employee-free-time/', tag: 'Hard' },
      { title: 'Minimum Interval to Include Each Query', platform: 'LC', url: 'https://leetcode.com/problems/minimum-interval-to-include-each-query/', tag: 'Hard' },
      { title: 'Data Stream as Disjoint Intervals', platform: 'LC', url: 'https://leetcode.com/problems/data-stream-as-disjoint-intervals/', tag: 'Hard' },
      { title: 'Maximum Number of Events That Can Be Attended II', platform: 'LC', url: 'https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Greedy',
    focus: 'Classic greedy & scheduling',
    problems: [
      { title: 'Course Schedule III', platform: 'LC', url: 'https://leetcode.com/problems/course-schedule-iii/', tag: 'Hard' },
      { title: 'Task Scheduler II', platform: 'LC', url: 'https://leetcode.com/problems/task-scheduler-ii/', tag: 'Medium' },
      { title: 'IPO', platform: 'LC', url: 'https://leetcode.com/problems/ipo/', tag: 'Hard' },
      { title: 'Maximum Performance of a Team', platform: 'LC', url: 'https://leetcode.com/problems/maximum-performance-of-a-team/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Greedy',
    focus: 'Harder greedy',
    problems: [
      { title: 'Create Maximum Number', platform: 'LC', url: 'https://leetcode.com/problems/create-maximum-number/', tag: 'Hard' },
      { title: 'Candy', platform: 'LC', url: 'https://leetcode.com/problems/candy/', tag: 'Hard' },
      { title: 'Patching Array', platform: 'LC', url: 'https://leetcode.com/problems/patching-array/', tag: 'Hard' },
      { title: 'Minimum Number of Refueling Stops', platform: 'LC', url: 'https://leetcode.com/problems/minimum-number-of-refueling-stops/', tag: 'Hard' },
    ],
  },

  // ---------- Graphs ----------
  {
    phase: 'Graphs',
    focus: 'Grid BFS/DFS',
    problems: [
      { title: 'Swim in Rising Water', platform: 'LC', url: 'https://leetcode.com/problems/swim-in-rising-water/', tag: 'Hard' },
      { title: 'Shortest Path in a Grid with Obstacles Elimination', platform: 'LC', url: 'https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/', tag: 'Hard' },
      { title: 'Bricks Falling When Hit', platform: 'LC', url: 'https://leetcode.com/problems/bricks-falling-when-hit/', tag: 'Hard' },
      { title: 'Cut Off Trees for Golf Event', platform: 'LC', url: 'https://leetcode.com/problems/cut-off-trees-for-golf-event/', tag: 'Hard' },
      { title: 'Monsters', platform: 'CSES', url: 'https://cses.fi/problemset/task/1194', tag: '' },
    ],
  },
  {
    phase: 'Graphs',
    focus: 'Graph traversal & clone',
    problems: [
      { title: 'Building Roads', platform: 'CSES', url: 'https://cses.fi/problemset/task/1666', tag: '' },
      { title: 'Round Trip', platform: 'CSES', url: 'https://cses.fi/problemset/task/1669', tag: '' },
      { title: 'Critical Connections in a Network', platform: 'LC', url: 'https://leetcode.com/problems/critical-connections-in-a-network/', tag: 'Hard' },
      { title: 'Number of Ways to Reroot a Tree', platform: 'LC', url: 'https://leetcode.com/problems/number-of-ways-to-reroot-a-tree/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Graphs',
    focus: 'Topological sort',
    problems: [
      { title: 'Course Schedule', platform: 'CSES', url: 'https://cses.fi/problemset/task/1679', tag: '' },
      { title: 'Longest Flight Route', platform: 'CSES', url: 'https://cses.fi/problemset/task/1680', tag: '' },
      { title: 'Game Routes', platform: 'CSES', url: 'https://cses.fi/problemset/task/1681', tag: '' },
      { title: 'Alien Dictionary', platform: 'LC', url: 'https://leetcode.com/problems/alien-dictionary/', tag: 'Hard' },
      { title: 'Parallel Courses III', platform: 'LC', url: 'https://leetcode.com/problems/parallel-courses-iii/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Graphs',
    focus: 'Shortest paths',
    problems: [
      { title: 'Shortest Routes I', platform: 'CSES', url: 'https://cses.fi/problemset/task/1671', tag: '' },
      { title: 'Flight Discount', platform: 'CSES', url: 'https://cses.fi/problemset/task/1195', tag: '' },
      { title: 'Cycle Finding', platform: 'CSES', url: 'https://cses.fi/problemset/task/1197', tag: '' },
      { title: 'High Score', platform: 'CSES', url: 'https://cses.fi/problemset/task/1673', tag: '' },
      { title: 'Flight Routes', platform: 'CSES', url: 'https://cses.fi/problemset/task/1196', tag: '' },
    ],
  },
  {
    phase: 'Graphs',
    focus: 'MST & union-find',
    problems: [
      { title: 'Road Reparation', platform: 'CSES', url: 'https://cses.fi/problemset/task/1675', tag: '' },
      { title: 'Road Construction', platform: 'CSES', url: 'https://cses.fi/problemset/task/1676', tag: '' },
      { title: 'Min Cost to Connect All Points', platform: 'LC', url: 'https://leetcode.com/problems/min-cost-to-connect-all-points/', tag: 'Medium' },
      { title: 'Number of Good Paths', platform: 'LC', url: 'https://leetcode.com/problems/number-of-good-paths/', tag: 'Hard' },
      { title: 'Checking Existence of Edge Length Limited Paths', platform: 'LC', url: 'https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Graphs',
    focus: 'Advanced graphs',
    problems: [
      { title: 'Download Speed', platform: 'CSES', url: 'https://cses.fi/problemset/task/1694', tag: '' },
      { title: 'Police Chase', platform: 'CSES', url: 'https://cses.fi/problemset/task/1695', tag: '' },
      { title: 'School Dance', platform: 'CSES', url: 'https://cses.fi/problemset/task/1696', tag: '' },
      { title: 'Planets Queries II', platform: 'CSES', url: 'https://cses.fi/problemset/task/1160', tag: '' },
      { title: 'Coin Collector', platform: 'CSES', url: 'https://cses.fi/problemset/task/1686', tag: '' },
    ],
  },

  // ---------- Tries & Strings ----------
  {
    phase: 'Tries & Strings',
    focus: 'Trie fundamentals',
    problems: [
      { title: 'Word Combinations', platform: 'CSES', url: 'https://cses.fi/problemset/task/1731', tag: '' },
      { title: 'Design Add and Search Words Data Structure', platform: 'LC', url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', tag: 'Medium' },
      { title: 'Concatenated Words', platform: 'LC', url: 'https://leetcode.com/problems/concatenated-words/', tag: 'Hard' },
      { title: 'Word Squares', platform: 'LC', url: 'https://leetcode.com/problems/word-squares/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Tries & Strings',
    focus: 'Trie applications',
    problems: [
      { title: 'Stream of Characters', platform: 'LC', url: 'https://leetcode.com/problems/stream-of-characters/', tag: 'Hard' },
      { title: 'Palindrome Pairs', platform: 'LC', url: 'https://leetcode.com/problems/palindrome-pairs/', tag: 'Hard' },
      { title: 'Maximum Genetic Difference Query', platform: 'LC', url: 'https://leetcode.com/problems/maximum-genetic-difference-query/', tag: 'Hard' },
      { title: 'Number of Valid Words for Each Puzzle', platform: 'LC', url: 'https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Tries & Strings',
    focus: 'Bit tries & XOR',
    problems: [
      { title: 'Maximum XOR With an Element From Array', platform: 'LC', url: 'https://leetcode.com/problems/maximum-xor-with-an-element-from-array/', tag: 'Hard' },
      { title: 'Count Pairs With XOR in a Range', platform: 'LC', url: 'https://leetcode.com/problems/count-pairs-with-xor-in-a-range/', tag: 'Hard' },
      { title: 'Maximum Strong Pair XOR II', platform: 'LC', url: 'https://leetcode.com/problems/maximum-strong-pair-xor-ii/', tag: 'Hard' },
      { title: 'Find the Maximum Length of a Good Subsequence II', platform: 'LC', url: 'https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Tries & Strings',
    focus: 'String pattern matching',
    problems: [
      { title: 'String Matching', platform: 'CSES', url: 'https://cses.fi/problemset/task/1753', tag: '' },
      { title: 'Finding Patterns', platform: 'CSES', url: 'https://cses.fi/problemset/task/2102', tag: '' },
      { title: 'Counting Patterns', platform: 'CSES', url: 'https://cses.fi/problemset/task/2103', tag: '' },
      { title: 'Shortest Palindrome', platform: 'LC', url: 'https://leetcode.com/problems/shortest-palindrome/', tag: 'Hard' },
      { title: 'Find Beautiful Indices in the Given Array II', platform: 'LC', url: 'https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/', tag: 'Hard' },
    ],
  },
]

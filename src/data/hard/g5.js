// HARD "extra challenge" problems for Dynamic Programming phases.
// Optional extras shown alongside the main planner — not part of the core day plan.
// Each entry: { phase, focus, problems: [ { title, platform, url, tag } ] }
//   LC   -> leetcode.com/problems/<slug>/        tag: 'Hard'
//   CSES -> cses.fi/problemset/task/<id>          tag: '' (DP section)
//   CF   -> codeforces.com/problemset/problem/... tag: rating

export const HARD = [
  {
    phase: 'DP I — 1D & Decision',
    focus: 'Linear states & memoization',
    problems: [
      { title: 'Frog Jump', platform: 'LC', url: 'https://leetcode.com/problems/frog-jump/', tag: 'Hard' },
      { title: 'Student Attendance Record II', platform: 'LC', url: 'https://leetcode.com/problems/student-attendance-record-ii/', tag: 'Hard' },
      { title: 'Removing Digits', platform: 'CSES', url: 'https://cses.fi/problemset/task/1637', tag: '' },
      { title: 'Dice Combinations', platform: 'CSES', url: 'https://cses.fi/problemset/task/1633', tag: '' },
    ],
  },
  {
    phase: 'DP I — 1D & Decision',
    focus: 'Robbery & decision DP',
    problems: [
      { title: 'Paint House III', platform: 'LC', url: 'https://leetcode.com/problems/paint-house-iii/', tag: 'Hard' },
      { title: 'Maximum Number of Points with Cost', platform: 'LC', url: 'https://leetcode.com/problems/maximum-number-of-points-with-cost/', tag: 'Hard' },
      { title: 'Delete and Earn', platform: 'LC', url: 'https://leetcode.com/problems/delete-and-earn/', tag: 'Medium' },
      { title: 'Array Description', platform: 'CSES', url: 'https://cses.fi/problemset/task/1746', tag: '' },
    ],
  },
  {
    phase: 'DP I — 1D & Decision',
    focus: 'Harder 1D / counting',
    problems: [
      { title: 'Number of Music Playlists', platform: 'LC', url: 'https://leetcode.com/problems/number-of-music-playlists/', tag: 'Hard' },
      { title: 'Count All Valid Pickup and Delivery Options', platform: 'LC', url: 'https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/', tag: 'Hard' },
      { title: 'Counting Towers', platform: 'CSES', url: 'https://cses.fi/problemset/task/2413', tag: '' },
      { title: 'Counting Numbers', platform: 'CSES', url: 'https://cses.fi/problemset/task/2220', tag: '' },
    ],
  },
  {
    phase: 'DP II — Grids',
    focus: 'Path counting & min-cost grids',
    problems: [
      { title: 'Dungeon Game', platform: 'LC', url: 'https://leetcode.com/problems/dungeon-game/', tag: 'Hard' },
      { title: 'Minimum Falling Path Sum II', platform: 'LC', url: 'https://leetcode.com/problems/minimum-falling-path-sum-ii/', tag: 'Hard' },
      { title: 'Number of Paths with Max Score', platform: 'LC', url: 'https://leetcode.com/problems/number-of-paths-with-max-score/', tag: 'Hard' },
      { title: 'Grid Paths', platform: 'CSES', url: 'https://cses.fi/problemset/task/1638', tag: '' },
    ],
  },
  {
    phase: 'DP II — Grids',
    focus: 'Multi-agent & harder grids',
    problems: [
      { title: 'Cherry Pickup', platform: 'LC', url: 'https://leetcode.com/problems/cherry-pickup/', tag: 'Hard' },
      { title: 'Cherry Pickup II', platform: 'LC', url: 'https://leetcode.com/problems/cherry-pickup-ii/', tag: 'Hard' },
      { title: 'Maximum Value of K Coins From Piles', platform: 'LC', url: 'https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/', tag: 'Hard' },
      { title: 'Number of Ways to Build House of Cards', platform: 'LC', url: 'https://leetcode.com/problems/building-boxes/', tag: 'Hard' },
    ],
  },
  {
    phase: 'DP II — Grids',
    focus: 'Obstacles & wrap',
    problems: [
      { title: 'Unique Paths III', platform: 'LC', url: 'https://leetcode.com/problems/unique-paths-iii/', tag: 'Hard' },
      { title: 'Out of Boundary Paths', platform: 'LC', url: 'https://leetcode.com/problems/out-of-boundary-paths/', tag: 'Medium' },
      { title: 'Minimum Cost to Make at Least One Valid Path in a Grid', platform: 'LC', url: 'https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/', tag: 'Hard' },
      { title: 'Counting Tilings', platform: 'CSES', url: 'https://cses.fi/problemset/task/2181', tag: '' },
    ],
  },
  {
    phase: 'DP III — Subsequences & Knapsack',
    focus: '0/1 knapsack & subset sums',
    problems: [
      { title: 'Partition Equal Subset Sum', platform: 'LC', url: 'https://leetcode.com/problems/partition-equal-subset-sum/', tag: 'Medium' },
      { title: 'Last Stone Weight II', platform: 'LC', url: 'https://leetcode.com/problems/last-stone-weight-ii/', tag: 'Medium' },
      { title: 'Profitable Schemes', platform: 'LC', url: 'https://leetcode.com/problems/profitable-schemes/', tag: 'Hard' },
      { title: 'Money Sums', platform: 'CSES', url: 'https://cses.fi/problemset/task/1745', tag: '' },
      { title: 'Two Sets II', platform: 'CSES', url: 'https://cses.fi/problemset/task/1093', tag: '' },
    ],
  },
  {
    phase: 'DP III — Subsequences & Knapsack',
    focus: 'Unbounded & coin variants',
    problems: [
      { title: 'Coin Change II', platform: 'LC', url: 'https://leetcode.com/problems/coin-change-ii/', tag: 'Medium' },
      { title: 'Number of Ways to Earn Points', platform: 'LC', url: 'https://leetcode.com/problems/number-of-ways-to-earn-points/', tag: 'Hard' },
      { title: 'Coin Combinations I', platform: 'CSES', url: 'https://cses.fi/problemset/task/1635', tag: '' },
      { title: 'Coin Combinations II', platform: 'CSES', url: 'https://cses.fi/problemset/task/1636', tag: '' },
    ],
  },
  {
    phase: 'DP III — Subsequences & Knapsack',
    focus: 'Harder knapsack-style',
    problems: [
      { title: 'Tallest Billboard', platform: 'LC', url: 'https://leetcode.com/problems/tallest-billboard/', tag: 'Hard' },
      { title: 'Number of Great Partitions', platform: 'LC', url: 'https://leetcode.com/problems/number-of-great-partitions/', tag: 'Hard' },
      { title: 'Closest Subsequence Sum', platform: 'LC', url: 'https://leetcode.com/problems/closest-subsequence-sum/', tag: 'Hard' },
      { title: 'Elevator Rides', platform: 'CSES', url: 'https://cses.fi/problemset/task/1653', tag: '' },
    ],
  },
  {
    phase: 'DP IV — Strings',
    focus: 'LCS core',
    problems: [
      { title: 'Shortest Common Supersequence', platform: 'LC', url: 'https://leetcode.com/problems/shortest-common-supersequence/', tag: 'Hard' },
      { title: 'Longest Common Subsequence', platform: 'LC', url: 'https://leetcode.com/problems/longest-common-subsequence/', tag: 'Medium' },
      { title: 'Minimum Insertion Steps to Make a String Palindrome', platform: 'LC', url: 'https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/', tag: 'Hard' },
      { title: 'Longest Palindromic Subsequence', platform: 'LC', url: 'https://leetcode.com/problems/longest-palindromic-subsequence/', tag: 'Medium' },
    ],
  },
  {
    phase: 'DP IV — Strings',
    focus: 'Edit distance & counting',
    problems: [
      { title: 'Edit Distance', platform: 'LC', url: 'https://leetcode.com/problems/edit-distance/', tag: 'Medium' },
      { title: 'Distinct Subsequences', platform: 'LC', url: 'https://leetcode.com/problems/distinct-subsequences/', tag: 'Hard' },
      { title: 'Number of Ways to Form a Target String Given a Dictionary', platform: 'LC', url: 'https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/', tag: 'Hard' },
      { title: 'Edit Distance', platform: 'CSES', url: 'https://cses.fi/problemset/task/1639', tag: '' },
    ],
  },
  {
    phase: 'DP IV — Strings',
    focus: 'Pattern matching DP',
    problems: [
      { title: 'Regular Expression Matching', platform: 'LC', url: 'https://leetcode.com/problems/regular-expression-matching/', tag: 'Hard' },
      { title: 'Wildcard Matching', platform: 'LC', url: 'https://leetcode.com/problems/wildcard-matching/', tag: 'Hard' },
      { title: 'Interleaving String', platform: 'LC', url: 'https://leetcode.com/problems/interleaving-string/', tag: 'Medium' },
      { title: 'Scramble String', platform: 'LC', url: 'https://leetcode.com/problems/scramble-string/', tag: 'Hard' },
    ],
  },
  {
    phase: 'DP V — Stocks & LIS',
    focus: 'Stock state machines',
    problems: [
      { title: 'Best Time to Buy and Sell Stock III', platform: 'LC', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/', tag: 'Hard' },
      { title: 'Best Time to Buy and Sell Stock IV', platform: 'LC', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/', tag: 'Hard' },
      { title: 'Maximum Profit From Trading Stocks', platform: 'LC', url: 'https://leetcode.com/problems/maximum-profit-from-trading-stocks/', tag: 'Medium' },
    ],
  },
  {
    phase: 'DP V — Stocks & LIS',
    focus: 'Stock cooldown/fee & LIS',
    problems: [
      { title: 'Best Time to Buy and Sell Stock with Cooldown', platform: 'LC', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/', tag: 'Medium' },
      { title: 'Best Time to Buy and Sell Stock with Transaction Fee', platform: 'LC', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/', tag: 'Medium' },
      { title: 'Russian Doll Envelopes', platform: 'LC', url: 'https://leetcode.com/problems/russian-doll-envelopes/', tag: 'Hard' },
      { title: 'Increasing Subsequence', platform: 'CSES', url: 'https://cses.fi/problemset/task/1145', tag: '' },
    ],
  },
  {
    phase: 'DP V — Stocks & LIS',
    focus: 'LIS extensions',
    problems: [
      { title: 'Number of Longest Increasing Subsequence', platform: 'LC', url: 'https://leetcode.com/problems/number-of-longest-increasing-subsequence/', tag: 'Medium' },
      { title: 'Maximum Height by Stacking Cuboids', platform: 'LC', url: 'https://leetcode.com/problems/maximum-height-by-stacking-cuboids/', tag: 'Hard' },
      { title: 'Longest Increasing Subsequence II', platform: 'LC', url: 'https://leetcode.com/problems/longest-increasing-subsequence-ii/', tag: 'Hard' },
      { title: 'Increasing Subsequence II', platform: 'CSES', url: 'https://cses.fi/problemset/task/1748', tag: '' },
    ],
  },
  {
    phase: 'DP VI — Partition / MCM',
    focus: 'Interval DP core',
    problems: [
      { title: 'Burst Balloons', platform: 'LC', url: 'https://leetcode.com/problems/burst-balloons/', tag: 'Hard' },
      { title: 'Minimum Cost to Cut a Stick', platform: 'LC', url: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/', tag: 'Hard' },
      { title: 'Remove Boxes', platform: 'LC', url: 'https://leetcode.com/problems/remove-boxes/', tag: 'Hard' },
      { title: 'Rectangle Cutting', platform: 'CSES', url: 'https://cses.fi/problemset/task/1744', tag: '' },
    ],
  },
  {
    phase: 'DP VI — Partition / MCM',
    focus: 'Partition & scoring intervals',
    problems: [
      { title: 'Partition Array for Maximum Sum', platform: 'LC', url: 'https://leetcode.com/problems/partition-array-for-maximum-sum/', tag: 'Medium' },
      { title: 'Allocate Mailboxes', platform: 'LC', url: 'https://leetcode.com/problems/allocate-mailboxes/', tag: 'Hard' },
      { title: 'Minimum Difficulty of a Job Schedule', platform: 'LC', url: 'https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/', tag: 'Hard' },
      { title: 'Strange Printer', platform: 'LC', url: 'https://leetcode.com/problems/strange-printer/', tag: 'Hard' },
    ],
  },
  {
    phase: 'DP VI — Partition / MCM',
    focus: 'Boolean & range wrap',
    problems: [
      { title: 'Predict the Winner', platform: 'LC', url: 'https://leetcode.com/problems/predict-the-winner/', tag: 'Medium' },
      { title: 'Stone Game III', platform: 'LC', url: 'https://leetcode.com/problems/stone-game-iii/', tag: 'Hard' },
      { title: 'Palindrome Partitioning III', platform: 'LC', url: 'https://leetcode.com/problems/palindrome-partitioning-iii/', tag: 'Hard' },
      { title: 'Removal Game', platform: 'CSES', url: 'https://cses.fi/problemset/task/1097', tag: '' },
    ],
  },
  {
    phase: 'DP VII — Trees, Squares & Wrap-up',
    focus: 'Squares & rectangles DP',
    problems: [
      { title: 'Maximal Rectangle', platform: 'LC', url: 'https://leetcode.com/problems/maximal-rectangle/', tag: 'Hard' },
      { title: 'Maximal Square', platform: 'LC', url: 'https://leetcode.com/problems/maximal-square/', tag: 'Medium' },
      { title: 'Count Square Submatrices with All Ones', platform: 'LC', url: 'https://leetcode.com/problems/count-square-submatrices-with-all-ones/', tag: 'Medium' },
      { title: 'Largest Plus Sign', platform: 'LC', url: 'https://leetcode.com/problems/largest-plus-sign/', tag: 'Medium' },
    ],
  },
  {
    phase: 'DP VII — Trees, Squares & Wrap-up',
    focus: 'Tree DP & misc',
    problems: [
      { title: 'Binary Tree Cameras', platform: 'LC', url: 'https://leetcode.com/problems/binary-tree-cameras/', tag: 'Hard' },
      { title: 'House Robber III', platform: 'LC', url: 'https://leetcode.com/problems/house-robber-iii/', tag: 'Medium' },
      { title: 'Number of Ways to Reorder Array to Get Same BST', platform: 'LC', url: 'https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/', tag: 'Hard' },
      { title: 'Sum of Distances in Tree', platform: 'LC', url: 'https://leetcode.com/problems/sum-of-distances-in-tree/', tag: 'Hard' },
    ],
  },
  {
    phase: 'DP VII — Trees, Squares & Wrap-up',
    focus: 'Capstone mix & summit',
    problems: [
      { title: 'Maximum Students Taking Exam', platform: 'LC', url: 'https://leetcode.com/problems/maximum-students-taking-exam/', tag: 'Hard' },
      { title: 'Minimum Number of Days to Eat N Oranges', platform: 'LC', url: 'https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/', tag: 'Hard' },
      { title: 'Constrained Subsequence Sum', platform: 'LC', url: 'https://leetcode.com/problems/constrained-subsequence-sum/', tag: 'Hard' },
      { title: 'Projects', platform: 'CSES', url: 'https://cses.fi/problemset/task/1140', tag: '' },
    ],
  },
]

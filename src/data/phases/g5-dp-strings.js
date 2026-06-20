// PHASES for this topic group. Each problem = [title, source("LC"|"GFG"), difficulty("E"|"M"|"H"), slug]
// Phase = { name, tag, ext:boolean, days:[ { focus, items:[...] }, ... ] }
export const PHASES = [
  {
    name: "DP I — 1D & Decision", tag: "extension · take/not-take", ext: true, days: [
      { focus: "Linear states & memoization", items: [
          ["Climbing Stairs", "LC", "E", "climbing-stairs"],
          ["Min Cost Climbing Stairs", "LC", "E", "min-cost-climbing-stairs"],
          ["Fibonacci Number", "LC", "E", "fibonacci-number"],
          ["N-th Tribonacci Number", "LC", "E", "n-th-tribonacci-number"],
      ]},
      { focus: "Robbery & decision DP", items: [
          ["House Robber", "LC", "M", "house-robber"],
          ["House Robber II", "LC", "M", "house-robber-ii"],
          ["Delete and Earn", "LC", "M", "delete-and-earn"],
          ["House Robber III", "LC", "M", "house-robber-iii"],
      ]},
      { focus: "Harder 1D / counting", items: [
          ["Decode Ways", "LC", "M", "decode-ways"],
          ["Decode Ways II", "LC", "H", "decode-ways-ii"],
          ["Number of Ways to Stay in the Same Place After Some Steps", "LC", "H", "number-of-ways-to-stay-in-the-same-place-after-some-steps"],
          ["↻ Re-derive recurrences for all 1D states", "LC", "E", "climbing-stairs"],
      ]},
    ]
  },
  {
    name: "DP II — Grids", tag: "extension · path counting", ext: true, days: [
      { focus: "Path counting & min-cost grids", items: [
          ["Unique Paths", "LC", "M", "unique-paths"],
          ["Unique Paths II", "LC", "M", "unique-paths-ii"],
          ["Minimum Path Sum", "LC", "M", "minimum-path-sum"],
          ["Triangle", "LC", "M", "triangle"],
      ]},
      { focus: "Multi-agent & harder grids", items: [
          ["Cherry Pickup II", "LC", "H", "cherry-pickup-ii"],
          ["Cherry Pickup", "LC", "H", "cherry-pickup"],
          ["Dungeon Game", "LC", "H", "dungeon-game"],
          ["Minimum Falling Path Sum", "LC", "M", "minimum-falling-path-sum"],
      ]},
      { focus: "Obstacles & wrap", items: [
          ["Minimum Falling Path Sum II", "LC", "H", "minimum-falling-path-sum-ii"],
          ["Where Will the Ball Fall", "LC", "M", "where-will-the-ball-fall"],
          ["↻ Revise grid traversal directions & base cases", "LC", "M", "unique-paths"],
      ]},
    ]
  },
  {
    name: "DP III — Subsequences & Knapsack", tag: "extension · 0/1 & unbounded", ext: true, days: [
      { focus: "0/1 knapsack & subset sums", items: [
          ["0 - 1 Knapsack Problem", "GFG", "M", "0-1-knapsack-problem"],
          ["Partition Equal Subset Sum", "LC", "M", "partition-equal-subset-sum"],
          ["Target Sum", "LC", "M", "target-sum"],
          ["Last Stone Weight II", "LC", "M", "last-stone-weight-ii"],
      ]},
      { focus: "Unbounded & coin variants", items: [
          ["Coin Change", "LC", "M", "coin-change"],
          ["Coin Change II", "LC", "M", "coin-change-ii"],
          ["Combination Sum IV", "LC", "M", "combination-sum-iv"],
          ["Perfect Squares", "LC", "M", "perfect-squares"],
      ]},
      { focus: "Harder knapsack-style", items: [
          ["Ones and Zeroes", "LC", "M", "ones-and-zeroes"],
          ["Profitable Schemes", "LC", "H", "profitable-schemes"],
          ["Number of Dice Rolls With Target Sum", "LC", "M", "number-of-dice-rolls-with-target-sum"],
          ["Partition to K Equal Sum Subsets", "LC", "H", "partition-to-k-equal-sum-subsets"],
      ]},
    ]
  },
  {
    name: "DP IV — Strings", tag: "extension · LCS family", ext: true, days: [
      { focus: "LCS core", items: [
          ["Longest Common Subsequence", "LC", "M", "longest-common-subsequence"],
          ["Longest Palindromic Subsequence", "LC", "M", "longest-palindromic-subsequence"],
          ["Shortest Common Supersequence", "LC", "H", "shortest-common-supersequence"],
          ["Delete Operation for Two Strings", "LC", "M", "delete-operation-for-two-strings"],
      ]},
      { focus: "Edit distance & counting", items: [
          ["Edit Distance", "LC", "M", "edit-distance"],
          ["Distinct Subsequences", "LC", "H", "distinct-subsequences"],
          ["Minimum ASCII Delete Sum for Two Strings", "LC", "M", "minimum-ascii-delete-sum-for-two-strings"],
          ["Longest Palindromic Substring", "LC", "M", "longest-palindromic-substring"],
      ]},
      { focus: "Pattern matching DP", items: [
          ["Wildcard Matching", "LC", "H", "wildcard-matching"],
          ["Regular Expression Matching", "LC", "H", "regular-expression-matching"],
          ["Interleaving String", "LC", "M", "interleaving-string"],
          ["↻ Revise LCS/edit-distance grid fills", "LC", "M", "longest-common-subsequence"],
      ]},
    ]
  },
  {
    name: "DP V — Stocks & LIS", tag: "extension · state machines", ext: true, days: [
      { focus: "Stock state machines", items: [
          ["Best Time to Buy and Sell Stock", "LC", "E", "best-time-to-buy-and-sell-stock"],
          ["Best Time to Buy and Sell Stock II", "LC", "M", "best-time-to-buy-and-sell-stock-ii"],
          ["Best Time to Buy and Sell Stock III", "LC", "H", "best-time-to-buy-and-sell-stock-iii"],
          ["Best Time to Buy and Sell Stock IV", "LC", "H", "best-time-to-buy-and-sell-stock-iv"],
      ]},
      { focus: "Stock cooldown/fee & LIS", items: [
          ["Best Time to Buy and Sell Stock with Cooldown", "LC", "M", "best-time-to-buy-and-sell-stock-with-cooldown"],
          ["Best Time to Buy and Sell Stock with Transaction Fee", "LC", "M", "best-time-to-buy-and-sell-stock-with-transaction-fee"],
          ["Longest Increasing Subsequence", "LC", "M", "longest-increasing-subsequence"],
          ["Number of Longest Increasing Subsequence", "LC", "M", "number-of-longest-increasing-subsequence"],
      ]},
      { focus: "LIS extensions", items: [
          ["Russian Doll Envelopes", "LC", "H", "russian-doll-envelopes"],
          ["Largest Divisible Subset", "LC", "M", "largest-divisible-subset"],
          ["Maximum Length of Pair Chain", "LC", "M", "maximum-length-of-pair-chain"],
          ["↻ Revise stock state transitions & LIS patience trick", "LC", "M", "longest-increasing-subsequence"],
      ]},
    ]
  },
  {
    name: "DP VI — Partition / MCM", tag: "extension · interval DP", ext: true, days: [
      { focus: "Interval DP core", items: [
          ["Matrix Chain Multiplication", "GFG", "H", "matrix-chain-multiplication"],
          ["Burst Balloons", "LC", "H", "burst-balloons"],
          ["Minimum Cost to Cut a Stick", "LC", "H", "minimum-cost-to-cut-a-stick"],
          ["Palindrome Partitioning II", "LC", "H", "palindrome-partitioning-ii"],
      ]},
      { focus: "Partition & scoring intervals", items: [
          ["Partition Array for Maximum Sum", "LC", "M", "partition-array-for-maximum-sum"],
          ["Remove Boxes", "LC", "H", "remove-boxes"],
          ["Stone Game", "LC", "M", "stone-game"],
          ["Predict the Winner", "LC", "M", "predict-the-winner"],
      ]},
      { focus: "Boolean & range wrap", items: [
          ["Minimum Score Triangulation of Polygon", "LC", "M", "minimum-score-triangulation-of-polygon"],
          ["Boolean Parenthesization", "GFG", "H", "boolean-parenthesization"],
          ["↻ Revise interval-DP loop ordering (length-first)", "LC", "H", "burst-balloons"],
      ]},
    ]
  },
  {
    name: "DP VII — Trees, Squares & Wrap-up", tag: "extension · finish line", ext: true, days: [
      { focus: "Squares & rectangles DP", items: [
          ["Maximal Square", "LC", "M", "maximal-square"],
          ["Count Square Submatrices with All Ones", "LC", "M", "count-square-submatrices-with-all-ones"],
          ["Maximal Rectangle", "LC", "H", "maximal-rectangle"],
          ["Minimum Falling Path Sum", "GFG", "M", "minimum-sum-path-in-a-matrix"],
      ]},
      { focus: "Tree DP & misc", items: [
          ["Binary Tree Maximum Path Sum", "LC", "H", "binary-tree-maximum-path-sum"],
          ["Unique Binary Search Trees", "LC", "M", "unique-binary-search-trees"],
          ["Longest Valid Parentheses", "LC", "H", "longest-valid-parentheses"],
          ["Maximum Product of Splitted Binary Tree", "LC", "M", "maximum-product-of-splitted-binary-tree"],
      ]},
      { focus: "Capstone mix & summit", items: [
          ["Word Break", "LC", "M", "word-break"],
          ["Word Break II", "LC", "H", "word-break-ii"],
          ["Frog Jump", "LC", "H", "frog-jump"],
          ["↻ Full DP pattern-recognition sweep", "LC", "M", "word-break"],
          ["🏔 Summit: solve a fresh Hard DP cold, no hints", "LC", "H", "frog-jump"],
      ]},
    ]
  },
];

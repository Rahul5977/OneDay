// PHASES for this topic group. Each problem = [title, source("LC"|"GFG"), difficulty("E"|"M"|"H"), slug]
// Phase = { name, tag, ext:boolean, days:[ { focus, items:[...] }, ... ] }
export const PHASES = [
  {
    name: "Recursion & Backtracking",
    tag: "subsets · permutations · grids",
    ext: false,
    days: [
      {
        focus: "Recursion foundations & subsets",
        items: [
          ["Subsets", "LC", "M", "subsets"],
          ["Subsets II", "LC", "M", "subsets-ii"],
          ["Power Set", "GFG", "M", "power-set"],
          ["Letter Combinations of a Phone Number", "LC", "M", "letter-combinations-of-a-phone-number"],
          ["Generate Parentheses", "LC", "M", "generate-parentheses"],
        ],
      },
      {
        focus: "Combinations & sum problems",
        items: [
          ["Combinations", "LC", "M", "combinations"],
          ["Combination Sum", "LC", "M", "combination-sum"],
          ["Combination Sum II", "LC", "M", "combination-sum-ii"],
          ["Combination Sum III", "LC", "M", "combination-sum-iii"],
          ["Rat in a Maze Problem", "GFG", "M", "rat-in-a-maze-problem"],
        ],
      },
      {
        focus: "Permutations & string partitions",
        items: [
          ["Permutations", "LC", "M", "permutations"],
          ["Permutations II", "LC", "M", "permutations-ii"],
          ["Palindrome Partitioning", "LC", "M", "palindrome-partitioning"],
          ["Restore IP Addresses", "LC", "M", "restore-ip-addresses"],
          ["Permutation Sequence", "LC", "H", "permutation-sequence"],
        ],
      },
      {
        focus: "Grid backtracking",
        items: [
          ["Word Search", "LC", "M", "word-search"],
          ["N-Queens", "LC", "H", "n-queens"],
          ["N-Queens II", "LC", "H", "n-queens-ii"],
          ["Sudoku Solver", "LC", "H", "sudoku-solver"],
          ["Number of Islands", "LC", "M", "number-of-islands"],
        ],
      },
      {
        focus: "Hard backtracking & pruning",
        items: [
          ["Expression Add Operators", "LC", "H", "expression-add-operators"],
          ["Remove Invalid Parentheses", "LC", "H", "remove-invalid-parentheses"],
          ["Partition to K Equal Sum Subsets", "LC", "M", "partition-to-k-equal-sum-subsets"],
          ["Matchsticks to Square", "LC", "M", "matchsticks-to-square"],
        ],
      },
    ],
  },
  {
    name: "Greedy",
    tag: "intervals · scheduling",
    ext: false,
    days: [
      {
        focus: "Jump & reach problems",
        items: [
          ["Jump Game", "LC", "M", "jump-game"],
          ["Jump Game II", "LC", "M", "jump-game-ii"],
          ["Gas Station", "LC", "M", "gas-station"],
          ["Candy", "LC", "H", "candy"],
        ],
      },
      {
        focus: "Intervals",
        items: [
          ["Merge Intervals", "LC", "M", "merge-intervals"],
          ["Insert Interval", "LC", "M", "insert-interval"],
          ["Non-overlapping Intervals", "LC", "M", "non-overlapping-intervals"],
          ["Minimum Number of Arrows to Burst Balloons", "LC", "M", "minimum-number-of-arrows-to-burst-balloons"],
          ["Attend All Appointments", "GFG", "M", "attend-all-appointments-possible"],
        ],
      },
      {
        focus: "Classic greedy & scheduling",
        items: [
          ["Task Scheduler", "LC", "M", "task-scheduler"],
          ["Job Sequencing Problem", "GFG", "M", "job-sequencing-problem"],
          ["Fractional Knapsack", "GFG", "M", "fractional-knapsack-1"],
          ["Minimum Platforms", "GFG", "M", "minimum-platforms"],
          ["Hand of Straights", "LC", "M", "hand-of-straights"],
        ],
      },
      {
        focus: "Harder greedy",
        items: [
          ["Partition Labels", "LC", "M", "partition-labels"],
          ["Create Maximum Number", "LC", "H", "create-maximum-number"],
          ["IPO", "LC", "H", "ipo"],
          ["Minimum Cost to Cut a Stick", "LC", "H", "minimum-cost-to-cut-a-stick"],
          ["Maximum Performance of a Team", "LC", "H", "maximum-performance-of-a-team"],
        ],
      },
    ],
  },
  {
    name: "Graphs",
    tag: "BFS/DFS · topo · shortest paths · MST · union-find",
    ext: false,
    days: [
      {
        focus: "Grid BFS/DFS",
        items: [
          ["Number of Islands", "LC", "M", "number-of-islands"],
          ["Surrounded Regions", "LC", "M", "surrounded-regions"],
          ["Rotting Oranges", "LC", "M", "rotting-oranges"],
          ["Flood Fill", "LC", "E", "flood-fill"],
          ["01 Matrix", "LC", "M", "01-matrix"],
        ],
      },
      {
        focus: "Graph traversal & clone",
        items: [
          ["Clone Graph", "LC", "M", "clone-graph"],
          ["Number of Provinces", "LC", "M", "number-of-provinces"],
          ["Pacific Atlantic Water Flow", "LC", "M", "pacific-atlantic-water-flow"],
          ["Snakes and Ladders", "LC", "M", "snakes-and-ladders"],
          ["Is Graph Bipartite?", "LC", "M", "is-graph-bipartite"],
        ],
      },
      {
        focus: "Topological sort",
        items: [
          ["Course Schedule", "LC", "M", "course-schedule"],
          ["Course Schedule II", "LC", "M", "course-schedule-ii"],
          ["Topological Sort", "GFG", "M", "topological-sort"],
          ["Alien Dictionary", "GFG", "H", "alien-dictionary"],
          ["Parallel Courses III", "LC", "H", "parallel-courses-iii"],
        ],
      },
      {
        focus: "Shortest paths",
        items: [
          ["Word Ladder", "LC", "H", "word-ladder"],
          ["Network Delay Time", "LC", "M", "network-delay-time"],
          ["Cheapest Flights Within K Stops", "LC", "M", "cheapest-flights-within-k-stops"],
          ["Path with Minimum Effort", "LC", "M", "path-with-minimum-effort"],
          ["Swim in Rising Water", "LC", "H", "swim-in-rising-water"],
        ],
      },
      {
        focus: "MST & union-find",
        items: [
          ["Min Cost to Connect All Points", "LC", "M", "min-cost-to-connect-all-points"],
          ["Graph and Vertices (Spanning Trees)", "GFG", "M", "graph-and-vertices"],
          ["Redundant Connection", "LC", "M", "redundant-connection"],
          ["Accounts Merge", "LC", "M", "accounts-merge"],
          ["Number of Operations to Make Network Connected", "LC", "M", "number-of-operations-to-make-network-connected"],
        ],
      },
      {
        focus: "Advanced graphs",
        items: [
          ["Critical Connections in a Network", "LC", "H", "critical-connections-in-a-network"],
          ["Word Ladder II", "LC", "H", "word-ladder-ii"],
          ["Minimum Cost to Make at Least One Valid Path in a Grid", "LC", "H", "minimum-cost-to-make-at-least-one-valid-path-in-a-grid"],
          ["Reconstruct Itinerary", "LC", "H", "reconstruct-itinerary"],
          ["Find Eventual Safe States", "LC", "M", "find-eventual-safe-states"],
        ],
      },
    ],
  },
  {
    name: "Tries & Strings",
    tag: "prefix trees · pattern matching",
    ext: false,
    days: [
      {
        focus: "Trie fundamentals",
        items: [
          ["Implement Trie (Prefix Tree)", "LC", "M", "implement-trie-prefix-tree"],
          ["Design Add and Search Words Data Structure", "LC", "M", "design-add-and-search-words-data-structure"],
          ["Implement Trie II (Prefix Tree)", "LC", "M", "implement-trie-ii-prefix-tree"],
          ["Map Sum Pairs", "LC", "M", "map-sum-pairs"],
        ],
      },
      {
        focus: "Trie applications",
        items: [
          ["Word Search II", "LC", "H", "word-search-ii"],
          ["Replace Words", "LC", "M", "replace-words"],
          ["Search Suggestions System", "LC", "M", "search-suggestions-system"],
          ["Longest Word in Dictionary", "LC", "M", "longest-word-in-dictionary"],
        ],
      },
      {
        focus: "Bit tries & XOR",
        items: [
          ["Maximum XOR of Two Numbers in an Array", "LC", "M", "maximum-xor-of-two-numbers-in-an-array"],
          ["Maximum XOR With an Element From Array", "LC", "H", "maximum-xor-with-an-element-from-array"],
          ["Count Pairs With XOR in a Range", "LC", "H", "count-pairs-with-xor-in-a-range"],
          ["Concatenated Words", "LC", "H", "concatenated-words"],
        ],
      },
      {
        focus: "String pattern matching",
        items: [
          ["Find the Index of the First Occurrence in a String", "LC", "E", "find-the-index-of-the-first-occurrence-in-a-string"],
          ["Search Pattern (KMP Algorithm)", "GFG", "M", "search-pattern-kmp-algorithm"],
          ["Repeated String Match", "LC", "M", "repeated-string-match"],
          ["Shortest Palindrome", "LC", "H", "shortest-palindrome"],
          ["Longest Happy Prefix", "LC", "H", "longest-happy-prefix"],
        ],
      },
    ],
  },
];

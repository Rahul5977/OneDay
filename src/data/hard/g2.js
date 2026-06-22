// HARD 'extra challenge' problems. Optional extras shown outside the main planner.
// Each entry = { phase, focus, problems: [ { title, platform, url, tag } ] }
//   LC   -> leetcode.com/problems/<slug>/        (tag: 'Hard')
//   CSES -> cses.fi/problemset/task/<id>          (tag: '')
//   CF   -> codeforces.com/problemset/problem/... (tag: rating)
//   TLE  -> TLE Eliminators CP-31 (Codeforces URL)

export const HARD = [
  {
    phase: 'Binary Search',
    focus: 'Core search & boundaries',
    problems: [
      { title: 'Find First and Last Position of Element in Sorted Array', platform: 'LC', url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/', tag: 'Medium' },
      { title: 'Split Array Largest Sum', platform: 'LC', url: 'https://leetcode.com/problems/split-array-largest-sum/', tag: 'Hard' },
      { title: 'Maximum Number of Removable Characters', platform: 'LC', url: 'https://leetcode.com/problems/maximum-number-of-removable-characters/', tag: 'Medium' },
      { title: 'Array Division', platform: 'CSES', url: 'https://cses.fi/problemset/task/1085', tag: '' },
    ],
  },
  {
    phase: 'Binary Search',
    focus: 'Rotated & search-space',
    problems: [
      { title: 'Search in Rotated Sorted Array II', platform: 'LC', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/', tag: 'Medium' },
      { title: 'Find Minimum in Rotated Sorted Array II', platform: 'LC', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/', tag: 'Hard' },
      { title: 'Kth Smallest Element in a Sorted Matrix', platform: 'LC', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/', tag: 'Medium' },
      { title: 'Find K-th Smallest Pair Distance', platform: 'LC', url: 'https://leetcode.com/problems/find-k-th-smallest-pair-distance/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Binary Search',
    focus: 'Binary search on answer',
    problems: [
      { title: 'Minimize Max Distance to Gas Station', platform: 'LC', url: 'https://leetcode.com/problems/minimize-max-distance-to-gas-station/', tag: 'Hard' },
      { title: 'Maximum Running Time of N Computers', platform: 'LC', url: 'https://leetcode.com/problems/maximum-running-time-of-n-computers/', tag: 'Hard' },
      { title: 'Minimum Number of Days to Make m Bouquets', platform: 'LC', url: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/', tag: 'Medium' },
      { title: 'Factory Machines', platform: 'CSES', url: 'https://cses.fi/problemset/task/1620', tag: '' },
    ],
  },
  {
    phase: 'Binary Search',
    focus: 'Hard merge & 2D',
    problems: [
      { title: 'Median of Two Sorted Arrays', platform: 'LC', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', tag: 'Hard' },
      { title: 'Find a Peak Element II', platform: 'LC', url: 'https://leetcode.com/problems/find-a-peak-element-ii/', tag: 'Medium' },
      { title: 'Kth Smallest Number in Multiplication Table', platform: 'LC', url: 'https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/', tag: 'Hard' },
      { title: 'Maximum Value at a Given Index in a Bounded Array', platform: 'LC', url: 'https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Stack & Queue',
    focus: 'Stack fundamentals & parsing',
    problems: [
      { title: 'Longest Valid Parentheses', platform: 'LC', url: 'https://leetcode.com/problems/longest-valid-parentheses/', tag: 'Hard' },
      { title: 'Number of Atoms', platform: 'LC', url: 'https://leetcode.com/problems/number-of-atoms/', tag: 'Hard' },
      { title: 'Parsing A Boolean Expression', platform: 'LC', url: 'https://leetcode.com/problems/parsing-a-boolean-expression/', tag: 'Hard' },
      { title: 'Brace Expansion II', platform: 'LC', url: 'https://leetcode.com/problems/brace-expansion-ii/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Stack & Queue',
    focus: 'Monotonic stack',
    problems: [
      { title: 'Largest Rectangle in Histogram', platform: 'LC', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', tag: 'Hard' },
      { title: 'Maximal Rectangle', platform: 'LC', url: 'https://leetcode.com/problems/maximal-rectangle/', tag: 'Hard' },
      { title: 'Sum of Subarray Minimums', platform: 'LC', url: 'https://leetcode.com/problems/sum-of-subarray-minimums/', tag: 'Medium' },
      { title: 'Maximum Score of a Good Subarray', platform: 'LC', url: 'https://leetcode.com/problems/maximum-score-of-a-good-subarray/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Stack & Queue',
    focus: 'Monotonic deque & windows',
    problems: [
      { title: 'Sliding Window Maximum', platform: 'LC', url: 'https://leetcode.com/problems/sliding-window-maximum/', tag: 'Hard' },
      { title: 'Shortest Subarray with Sum at Least K', platform: 'LC', url: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/', tag: 'Hard' },
      { title: 'Constrained Subsequence Sum', platform: 'LC', url: 'https://leetcode.com/problems/constrained-subsequence-sum/', tag: 'Hard' },
      { title: 'Jump Game VI', platform: 'LC', url: 'https://leetcode.com/problems/jump-game-vi/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Stack & Queue',
    focus: 'Design & calculators',
    problems: [
      { title: 'Basic Calculator', platform: 'LC', url: 'https://leetcode.com/problems/basic-calculator/', tag: 'Hard' },
      { title: 'Basic Calculator III', platform: 'LC', url: 'https://leetcode.com/problems/basic-calculator-iii/', tag: 'Hard' },
      { title: 'Max Stack', platform: 'LC', url: 'https://leetcode.com/problems/max-stack/', tag: 'Hard' },
      { title: 'Design Circular Deque', platform: 'LC', url: 'https://leetcode.com/problems/design-circular-deque/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Linked List',
    focus: 'Traversal & reversal',
    problems: [
      { title: 'Reverse Nodes in k-Group', platform: 'LC', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', tag: 'Hard' },
      { title: 'Reverse Linked List II', platform: 'LC', url: 'https://leetcode.com/problems/reverse-linked-list-ii/', tag: 'Medium' },
      { title: 'Swap Nodes in Pairs', platform: 'LC', url: 'https://leetcode.com/problems/swap-nodes-in-pairs/', tag: 'Medium' },
      { title: 'Rotate List', platform: 'LC', url: 'https://leetcode.com/problems/rotate-list/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Linked List',
    focus: 'Cycles & intersection',
    problems: [
      { title: 'Linked List Cycle II', platform: 'LC', url: 'https://leetcode.com/problems/linked-list-cycle-ii/', tag: 'Medium' },
      { title: 'Find the Duplicate Number', platform: 'LC', url: 'https://leetcode.com/problems/find-the-duplicate-number/', tag: 'Medium' },
      { title: 'Intersection of Two Linked Lists', platform: 'LC', url: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', tag: 'Easy' },
      { title: 'Linked List in Binary Tree', platform: 'LC', url: 'https://leetcode.com/problems/linked-list-in-binary-tree/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Linked List',
    focus: 'Merge & sort',
    problems: [
      { title: 'Merge k Sorted Lists', platform: 'LC', url: 'https://leetcode.com/problems/merge-k-sorted-lists/', tag: 'Hard' },
      { title: 'Sort List', platform: 'LC', url: 'https://leetcode.com/problems/sort-list/', tag: 'Medium' },
      { title: 'Merge In Between Linked Lists', platform: 'LC', url: 'https://leetcode.com/problems/merge-in-between-linked-lists/', tag: 'Medium' },
      { title: 'Add Two Numbers II', platform: 'LC', url: 'https://leetcode.com/problems/add-two-numbers-ii/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Linked List',
    focus: 'Hard restructuring & design',
    problems: [
      { title: 'Copy List with Random Pointer', platform: 'LC', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/', tag: 'Medium' },
      { title: 'LFU Cache', platform: 'LC', url: 'https://leetcode.com/problems/lfu-cache/', tag: 'Hard' },
      { title: 'All O`one Data Structure', platform: 'LC', url: 'https://leetcode.com/problems/all-oone-data-structure/', tag: 'Hard' },
      { title: 'Flatten a Multilevel Doubly Linked List', platform: 'LC', url: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Cyclic Sort',
    focus: 'Index-placement core (numbers in 1..n)',
    problems: [
      { title: 'First Missing Positive', platform: 'LC', url: 'https://leetcode.com/problems/first-missing-positive/', tag: 'Hard' },
      { title: 'Find All Duplicates in an Array', platform: 'LC', url: 'https://leetcode.com/problems/find-all-duplicates-in-an-array/', tag: 'Medium' },
      { title: 'Set Mismatch', platform: 'LC', url: 'https://leetcode.com/problems/set-mismatch/', tag: 'Easy' },
      { title: 'Couples Holding Hands', platform: 'LC', url: 'https://leetcode.com/problems/couples-holding-hands/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Cyclic Sort',
    focus: 'Hard cyclic placement',
    problems: [
      { title: 'Find the Duplicate Number', platform: 'LC', url: 'https://leetcode.com/problems/find-the-duplicate-number/', tag: 'Medium' },
      { title: 'Missing Number', platform: 'LC', url: 'https://leetcode.com/problems/missing-number/', tag: 'Easy' },
      { title: 'Josephus Problem II', platform: 'CSES', url: 'https://cses.fi/problemset/task/2163', tag: '' },
      { title: 'Minimum Number of Swaps to Make the String Balanced', platform: 'LC', url: 'https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Bit Manipulation',
    focus: 'Bit basics & counting',
    problems: [
      { title: 'Counting Bits', platform: 'CSES', url: 'https://cses.fi/problemset/task/1146', tag: '' },
      { title: 'Concatenation of Consecutive Binary Numbers', platform: 'LC', url: 'https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/', tag: 'Medium' },
      { title: 'Number of Steps to Reduce a Number in Binary Representation to One', platform: 'LC', url: 'https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/', tag: 'Medium' },
      { title: 'Minimum One Bit Operations to Make Integers Zero', platform: 'LC', url: 'https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Bit Manipulation',
    focus: 'XOR family',
    problems: [
      { title: 'Maximum XOR of Two Numbers in an Array', platform: 'LC', url: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/', tag: 'Medium' },
      { title: 'Maximum XOR With an Element From Array', platform: 'LC', url: 'https://leetcode.com/problems/maximum-xor-with-an-element-from-array/', tag: 'Hard' },
      { title: 'Count Pairs With XOR in a Range', platform: 'LC', url: 'https://leetcode.com/problems/count-pairs-with-xor-in-a-range/', tag: 'Hard' },
      { title: 'Find the Original Array of Prefix Xor', platform: 'LC', url: 'https://leetcode.com/problems/find-the-original-array-of-prefix-xor/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Bit Manipulation',
    focus: 'Masks & bit arithmetic',
    problems: [
      { title: 'Sum of Two Integers', platform: 'LC', url: 'https://leetcode.com/problems/sum-of-two-integers/', tag: 'Medium' },
      { title: 'Divide Two Integers', platform: 'LC', url: 'https://leetcode.com/problems/divide-two-integers/', tag: 'Medium' },
      { title: 'Bitwise AND of Numbers Range', platform: 'LC', url: 'https://leetcode.com/problems/bitwise-and-of-numbers-range/', tag: 'Medium' },
      { title: 'Minimum Array End', platform: 'LC', url: 'https://leetcode.com/problems/minimum-array-end/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Bit Manipulation',
    focus: 'Bitmask techniques',
    problems: [
      { title: 'Smallest Sufficient Team', platform: 'LC', url: 'https://leetcode.com/problems/smallest-sufficient-team/', tag: 'Hard' },
      { title: 'Maximum Students Taking Exam', platform: 'LC', url: 'https://leetcode.com/problems/maximum-students-taking-exam/', tag: 'Hard' },
      { title: 'Number of Ways to Wear Different Hats to Each Other', platform: 'LC', url: 'https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/', tag: 'Hard' },
      { title: 'Find the Shortest Superstring', platform: 'LC', url: 'https://leetcode.com/problems/find-the-shortest-superstring/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Math & Number Theory',
    focus: 'Number theory',
    problems: [
      { title: 'Counting Divisors', platform: 'CSES', url: 'https://cses.fi/problemset/task/1713', tag: '' },
      { title: 'Exponentiation II', platform: 'CSES', url: 'https://cses.fi/problemset/task/1712', tag: '' },
      { title: 'Count Different Palindromic Subsequences', platform: 'LC', url: 'https://leetcode.com/problems/count-different-palindromic-subsequences/', tag: 'Hard' },
      { title: 'Nth Magical Number', platform: 'LC', url: 'https://leetcode.com/problems/nth-magical-number/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Math & Number Theory',
    focus: 'Big-number arithmetic',
    problems: [
      { title: 'Multiply Strings', platform: 'LC', url: 'https://leetcode.com/problems/multiply-strings/', tag: 'Medium' },
      { title: 'Add Strings', platform: 'LC', url: 'https://leetcode.com/problems/add-strings/', tag: 'Easy' },
      { title: 'Super Pow', platform: 'LC', url: 'https://leetcode.com/problems/super-pow/', tag: 'Medium' },
      { title: 'Number of Digit One', platform: 'LC', url: 'https://leetcode.com/problems/number-of-digit-one/', tag: 'Hard' },
    ],
  },
  {
    phase: 'Math & Number Theory',
    focus: 'Conversions & geometry',
    problems: [
      { title: 'Point Location Test', platform: 'CSES', url: 'https://cses.fi/problemset/task/2189', tag: '' },
      { title: 'Polygon Area', platform: 'CSES', url: 'https://cses.fi/problemset/task/2191', tag: '' },
      { title: 'Max Points on a Line', platform: 'LC', url: 'https://leetcode.com/problems/max-points-on-a-line/', tag: 'Hard' },
      { title: 'Erect the Fence', platform: 'LC', url: 'https://leetcode.com/problems/erect-the-fence/', tag: 'Hard' },
    ],
  },
]

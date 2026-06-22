// HARD 'extra challenge' problems — optional extras, one entry per (phase, focus).
// Schema: { phase, focus, problems:[ { title, platform('LC'|'CSES'|'CF'), url, tag } ] }
export const HARD = [
  {
    phase: 'Arrays & Hashing',
    focus: 'Array fundamentals & in-place edits',
    problems: [
      { title: 'First Missing Positive', platform: 'LC', url: 'https://leetcode.com/problems/first-missing-positive/', tag: 'Hard' },
      { title: 'Wiggle Sort II', platform: 'LC', url: 'https://leetcode.com/problems/wiggle-sort-ii/', tag: 'Medium' },
      { title: 'Next Permutation', platform: 'LC', url: 'https://leetcode.com/problems/next-permutation/', tag: 'Medium' },
      { title: 'Permutations (CSES)', platform: 'CSES', url: 'https://cses.fi/problemset/task/1070', tag: 'Introductory' },
      { title: 'Increasing Array', platform: 'CSES', url: 'https://cses.fi/problemset/task/1094', tag: 'Introductory' },
    ],
  },
  {
    phase: 'Arrays & Hashing',
    focus: 'Hashing: lookups & frequency',
    problems: [
      { title: 'Substring with Concatenation of All Words', platform: 'LC', url: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/', tag: 'Hard' },
      { title: 'Number of Submatrices That Sum to Target', platform: 'LC', url: 'https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/', tag: 'Hard' },
      { title: 'Count Anagrams', platform: 'LC', url: 'https://leetcode.com/problems/count-anagrams/', tag: 'Hard' },
      { title: 'Distinct Numbers', platform: 'CSES', url: 'https://cses.fi/problemset/task/1621', tag: 'Sorting' },
      { title: 'Sum of Two Values', platform: 'CSES', url: 'https://cses.fi/problemset/task/1640', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Arrays & Hashing',
    focus: 'Hash-set sequences & design',
    problems: [
      { title: 'LFU Cache', platform: 'LC', url: 'https://leetcode.com/problems/lfu-cache/', tag: 'Hard' },
      { title: 'Insert Delete GetRandom O(1) - Duplicates allowed', platform: 'LC', url: 'https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/', tag: 'Hard' },
      { title: 'All O`one Data Structure', platform: 'LC', url: 'https://leetcode.com/problems/all-oone-data-structure/', tag: 'Hard' },
      { title: 'Distinct Values Subarrays', platform: 'CSES', url: 'https://cses.fi/problemset/task/2428', tag: 'Sliding Window' },
      { title: 'Playlist', platform: 'CSES', url: 'https://cses.fi/problemset/task/1141', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Arrays & Hashing',
    focus: 'Prefix sums & range structure',
    problems: [
      { title: 'Count of Range Sum', platform: 'LC', url: 'https://leetcode.com/problems/count-of-range-sum/', tag: 'Hard' },
      { title: 'Maximum Sum of 3 Non-Overlapping Subarrays', platform: 'LC', url: 'https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/', tag: 'Hard' },
      { title: 'Static Range Sum Queries', platform: 'CSES', url: 'https://cses.fi/problemset/task/1646', tag: 'Range Queries' },
      { title: 'Forest Queries', platform: 'CSES', url: 'https://cses.fi/problemset/task/1652', tag: 'Range Queries' },
      { title: 'Subarray Sums II', platform: 'CSES', url: 'https://cses.fi/problemset/task/1661', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Arrays & Hashing',
    focus: 'Hard hashing & subarray counting',
    problems: [
      { title: 'Subarrays with K Different Integers', platform: 'LC', url: 'https://leetcode.com/problems/subarrays-with-k-different-integers/', tag: 'Hard' },
      { title: 'Count Subarrays With Fixed Bounds', platform: 'LC', url: 'https://leetcode.com/problems/count-subarrays-with-fixed-bounds/', tag: 'Hard' },
      { title: 'Subarray Divisibility', platform: 'CSES', url: 'https://cses.fi/problemset/task/1662', tag: 'Sorting' },
      { title: 'Subarray Sums I', platform: 'CSES', url: 'https://cses.fi/problemset/task/1660', tag: 'Sorting' },
      { title: 'Maximum Subarray Sum', platform: 'CSES', url: 'https://cses.fi/problemset/task/1643', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Sorting & Matrix',
    focus: 'Custom sorting & arrangement',
    problems: [
      { title: 'Create Maximum Number', platform: 'LC', url: 'https://leetcode.com/problems/create-maximum-number/', tag: 'Hard' },
      { title: 'Maximum Gap', platform: 'LC', url: 'https://leetcode.com/problems/maximum-gap/', tag: 'Hard' },
      { title: 'Tasks and Deadlines', platform: 'CSES', url: 'https://cses.fi/problemset/task/1630', tag: 'Sorting' },
      { title: 'Stick Lengths', platform: 'CSES', url: 'https://cses.fi/problemset/task/1074', tag: 'Sorting' },
      { title: 'Towers', platform: 'CSES', url: 'https://cses.fi/problemset/task/1073', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Sorting & Matrix',
    focus: 'Intervals',
    problems: [
      { title: 'Employee Free Time', platform: 'LC', url: 'https://leetcode.com/problems/employee-free-time/', tag: 'Hard' },
      { title: 'Data Stream as Disjoint Intervals', platform: 'LC', url: 'https://leetcode.com/problems/data-stream-as-disjoint-intervals/', tag: 'Hard' },
      { title: 'The Skyline Problem', platform: 'LC', url: 'https://leetcode.com/problems/the-skyline-problem/', tag: 'Hard' },
      { title: 'Restaurant Customers', platform: 'CSES', url: 'https://cses.fi/problemset/task/1619', tag: 'Sorting' },
      { title: 'Movie Festival', platform: 'CSES', url: 'https://cses.fi/problemset/task/1629', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Sorting & Matrix',
    focus: 'Matrix traversal & transforms',
    problems: [
      { title: 'Spiral Matrix III', platform: 'LC', url: 'https://leetcode.com/problems/spiral-matrix-iii/', tag: 'Medium' },
      { title: 'Pacific Atlantic Water Flow', platform: 'LC', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', tag: 'Medium' },
      { title: 'Trapping Rain Water II', platform: 'LC', url: 'https://leetcode.com/problems/trapping-rain-water-ii/', tag: 'Hard' },
      { title: 'Rotate Image', platform: 'LC', url: 'https://leetcode.com/problems/rotate-image/', tag: 'Medium' },
      { title: 'Spiral Matrix', platform: 'LC', url: 'https://leetcode.com/problems/spiral-matrix/', tag: 'Medium' },
    ],
  },
  {
    phase: 'Sorting & Matrix',
    focus: 'Matrix search & 2D structure',
    problems: [
      { title: 'Kth Smallest Element in a Sorted Matrix', platform: 'LC', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/', tag: 'Medium' },
      { title: 'Maximal Rectangle', platform: 'LC', url: 'https://leetcode.com/problems/maximal-rectangle/', tag: 'Hard' },
      { title: 'Max Sum of Rectangle No Larger Than K', platform: 'LC', url: 'https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/', tag: 'Hard' },
      { title: 'Forest Queries', platform: 'CSES', url: 'https://cses.fi/problemset/task/1652', tag: 'Range Queries' },
      { title: 'Forest Queries II', platform: 'CSES', url: 'https://cses.fi/problemset/task/1739', tag: 'Range Queries' },
    ],
  },
  {
    phase: 'Sorting & Matrix',
    focus: 'Hard sorting & counting',
    problems: [
      { title: 'Count of Smaller Numbers After Self', platform: 'LC', url: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/', tag: 'Hard' },
      { title: 'Reverse Pairs', platform: 'LC', url: 'https://leetcode.com/problems/reverse-pairs/', tag: 'Hard' },
      { title: 'Maximum Number of Tasks You Can Assign', platform: 'LC', url: 'https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/', tag: 'Hard' },
      { title: 'Nearest Smaller Values', platform: 'CSES', url: 'https://cses.fi/problemset/task/1645', tag: 'Sorting' },
      { title: 'Josephus Problem II', platform: 'CSES', url: 'https://cses.fi/problemset/task/2163', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Two Pointers',
    focus: 'Opposite-end pointers',
    problems: [
      { title: 'Trapping Rain Water', platform: 'LC', url: 'https://leetcode.com/problems/trapping-rain-water/', tag: 'Hard' },
      { title: 'Container With Most Water', platform: 'LC', url: 'https://leetcode.com/problems/container-with-most-water/', tag: 'Medium' },
      { title: 'Valid Palindrome III', platform: 'LC', url: 'https://leetcode.com/problems/valid-palindrome-iii/', tag: 'Hard' },
      { title: 'Sum of Two Values', platform: 'CSES', url: 'https://cses.fi/problemset/task/1640', tag: 'Sorting' },
      { title: 'Ferris Wheel', platform: 'CSES', url: 'https://cses.fi/problemset/task/1090', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Two Pointers',
    focus: 'Pair & triplet sums',
    problems: [
      { title: '4Sum', platform: 'LC', url: 'https://leetcode.com/problems/4sum/', tag: 'Medium' },
      { title: '3Sum Smaller', platform: 'LC', url: 'https://leetcode.com/problems/3sum-smaller/', tag: 'Medium' },
      { title: 'Number of Subsequences That Satisfy the Sum Condition', platform: 'LC', url: 'https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/', tag: 'Medium' },
      { title: 'Sum of Three Values', platform: 'CSES', url: 'https://cses.fi/problemset/task/1641', tag: 'Sorting' },
      { title: 'Sum of Four Values', platform: 'CSES', url: 'https://cses.fi/problemset/task/1642', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Two Pointers',
    focus: 'Container & partition',
    problems: [
      { title: 'Partition Labels', platform: 'LC', url: 'https://leetcode.com/problems/partition-labels/', tag: 'Medium' },
      { title: 'Sort Colors', platform: 'LC', url: 'https://leetcode.com/problems/sort-colors/', tag: 'Medium' },
      { title: 'Boats to Save People', platform: 'LC', url: 'https://leetcode.com/problems/boats-to-save-people/', tag: 'Medium' },
      { title: 'Maximum Number of Robots Within Budget', platform: 'LC', url: 'https://leetcode.com/problems/maximum-number-of-robots-within-budget/', tag: 'Hard' },
      { title: 'Ferris Wheel', platform: 'CSES', url: 'https://cses.fi/problemset/task/1090', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Two Pointers',
    focus: 'Fast-slow & cyclic',
    problems: [
      { title: 'Find the Duplicate Number', platform: 'LC', url: 'https://leetcode.com/problems/find-the-duplicate-number/', tag: 'Medium' },
      { title: 'Linked List Cycle II', platform: 'LC', url: 'https://leetcode.com/problems/linked-list-cycle-ii/', tag: 'Medium' },
      { title: 'Circular Array Loop', platform: 'LC', url: 'https://leetcode.com/problems/circular-array-loop/', tag: 'Medium' },
      { title: 'Reorder List', platform: 'LC', url: 'https://leetcode.com/problems/reorder-list/', tag: 'Medium' },
      { title: 'Tower of Hanoi', platform: 'CSES', url: 'https://cses.fi/problemset/task/2165', tag: 'Introductory' },
    ],
  },
  {
    phase: 'Two Pointers',
    focus: 'Hard two-pointer challenges',
    problems: [
      { title: 'Minimum Window Subsequence', platform: 'LC', url: 'https://leetcode.com/problems/minimum-window-subsequence/', tag: 'Hard' },
      { title: 'Subarrays with K Different Integers', platform: 'LC', url: 'https://leetcode.com/problems/subarrays-with-k-different-integers/', tag: 'Hard' },
      { title: 'Count Pairs of Nodes', platform: 'LC', url: 'https://leetcode.com/problems/count-pairs-of-nodes/', tag: 'Hard' },
      { title: 'Maximum Profit in Job Scheduling', platform: 'LC', url: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/', tag: 'Hard' },
      { title: 'Apartments', platform: 'CSES', url: 'https://cses.fi/problemset/task/1084', tag: 'Sorting' },
    ],
  },
  {
    phase: 'Sliding Window',
    focus: 'Fixed-size windows',
    problems: [
      { title: 'Maximum Number of Vowels in a Substring of Given Length', platform: 'LC', url: 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/', tag: 'Medium' },
      { title: 'Sliding Window Maximum', platform: 'LC', url: 'https://leetcode.com/problems/sliding-window-maximum/', tag: 'Hard' },
      { title: 'Find All Anagrams in a String', platform: 'LC', url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/', tag: 'Medium' },
      { title: 'Sliding Window Mex', platform: 'CSES', url: 'https://cses.fi/problemset/task/3219', tag: 'Sliding Window' },
      { title: 'Sliding Median', platform: 'CSES', url: 'https://cses.fi/problemset/task/1076', tag: 'Sliding Window' },
    ],
  },
  {
    phase: 'Sliding Window',
    focus: 'Variable windows: longest',
    problems: [
      { title: 'Longest Substring with At Most K Distinct Characters', platform: 'LC', url: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/', tag: 'Medium' },
      { title: 'Longest Substring Without Repeating Characters', platform: 'LC', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', tag: 'Medium' },
      { title: 'Longest Repeating Character Replacement', platform: 'LC', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/', tag: 'Medium' },
      { title: 'Sliding Window Mode', platform: 'CSES', url: 'https://cses.fi/problemset/task/3224', tag: 'Sliding Window' },
      { title: 'Distinct Values Subarrays II', platform: 'CSES', url: 'https://cses.fi/problemset/task/2428', tag: 'Sliding Window' },
    ],
  },
  {
    phase: 'Sliding Window',
    focus: 'Variable windows: shortest & counting',
    problems: [
      { title: 'Minimum Window Substring', platform: 'LC', url: 'https://leetcode.com/problems/minimum-window-substring/', tag: 'Hard' },
      { title: 'Minimum Size Subarray Sum', platform: 'LC', url: 'https://leetcode.com/problems/minimum-size-subarray-sum/', tag: 'Medium' },
      { title: 'Count Number of Nice Subarrays', platform: 'LC', url: 'https://leetcode.com/problems/count-number-of-nice-subarrays/', tag: 'Medium' },
      { title: 'Count Complete Subarrays in an Array', platform: 'LC', url: 'https://leetcode.com/problems/count-complete-subarrays-in-an-array/', tag: 'Medium' },
      { title: 'Distinct Values Subarrays II', platform: 'CSES', url: 'https://cses.fi/problemset/task/2428', tag: 'Sliding Window' },
    ],
  },
  {
    phase: 'Sliding Window',
    focus: 'Hard windows & monotonic deque',
    problems: [
      { title: 'Sliding Window Maximum', platform: 'LC', url: 'https://leetcode.com/problems/sliding-window-maximum/', tag: 'Hard' },
      { title: 'Constrained Subsequence Sum', platform: 'LC', url: 'https://leetcode.com/problems/constrained-subsequence-sum/', tag: 'Hard' },
      { title: 'Jump Game VI', platform: 'LC', url: 'https://leetcode.com/problems/jump-game-vi/', tag: 'Medium' },
      { title: 'Shortest Subarray with Sum at Least K', platform: 'LC', url: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/', tag: 'Hard' },
      { title: 'Maximum Subarray Sum II', platform: 'CSES', url: 'https://cses.fi/problemset/task/1644', tag: 'Sliding Window' },
    ],
  },
  {
    phase: 'Sliding Window',
    focus: 'Median & advanced windows',
    problems: [
      { title: 'Sliding Window Median', platform: 'LC', url: 'https://leetcode.com/problems/sliding-window-median/', tag: 'Hard' },
      { title: 'Find Median from Data Stream', platform: 'LC', url: 'https://leetcode.com/problems/find-median-from-data-stream/', tag: 'Hard' },
      { title: 'Maximum Performance of a Team', platform: 'LC', url: 'https://leetcode.com/problems/maximum-performance-of-a-team/', tag: 'Hard' },
      { title: 'Sliding Median', platform: 'CSES', url: 'https://cses.fi/problemset/task/1076', tag: 'Sliding Window' },
      { title: 'Sliding Cost', platform: 'CSES', url: 'https://cses.fi/problemset/task/1077', tag: 'Sliding Window' },
    ],
  },
]

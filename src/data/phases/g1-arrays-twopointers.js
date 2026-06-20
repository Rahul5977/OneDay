// PHASES for this topic group. Each problem = [title, source("LC"|"GFG"), difficulty("E"|"M"|"H"), slug]
// Phase = { name, tag, ext:boolean, days:[ { focus, items:[...] }, ... ] }
export const PHASES = [
  {
    name: "Arrays & Hashing",
    tag: "traversal · hashing · prefix sums",
    ext: false,
    days: [
      {
        focus: "Array fundamentals & in-place edits",
        items: [
          ["Remove Duplicates from Sorted Array", "LC", "E", "remove-duplicates-from-sorted-array"],
          ["Remove Duplicates from Sorted Array II", "LC", "M", "remove-duplicates-from-sorted-array-ii"],
          ["Majority Element", "LC", "E", "majority-element"],
          ["Rotate Array", "LC", "M", "rotate-array"],
        ],
      },
      {
        focus: "Hashing: lookups & frequency",
        items: [
          ["Two Sum", "LC", "E", "two-sum"],
          ["Contains Duplicate", "LC", "E", "contains-duplicate"],
          ["Valid Anagram", "LC", "E", "valid-anagram"],
          ["Group Anagrams", "LC", "M", "group-anagrams"],
          ["Top K Frequent Elements", "LC", "M", "top-k-frequent-elements"],
        ],
      },
      {
        focus: "Hash-set sequences & design",
        items: [
          ["Longest Consecutive Sequence", "LC", "M", "longest-consecutive-sequence"],
          ["Encode and Decode Strings", "LC", "M", "encode-and-decode-strings"],
          ["Ransom Note", "LC", "E", "ransom-note"],
          ["Word Pattern", "LC", "E", "word-pattern"],
        ],
      },
      {
        focus: "Prefix sums & range structure",
        items: [
          ["Product of Array Except Self", "LC", "M", "product-of-array-except-self"],
          ["Subarray Sum Equals K", "LC", "M", "subarray-sum-equals-k"],
          ["Contiguous Array", "LC", "M", "contiguous-array"],
        ],
      },
      {
        focus: "Hard hashing & subarray counting",
        items: [
          ["First Missing Positive", "LC", "H", "first-missing-positive"],
          ["Count of Range Sum", "LC", "H", "count-of-range-sum"],
          ["Max Sum of Rectangle No Larger Than K", "LC", "H", "max-sum-of-rectangle-no-larger-than-k"],
          ["Insert Delete GetRandom O(1)", "LC", "M", "insert-delete-getrandom-o1"],
          ["↻ Revise Arrays & Hashing patterns", "LC", "E", "revision"],
        ],
      },
    ],
  },
  {
    name: "Sorting & Matrix",
    tag: "sorting · intervals · matrices",
    ext: false,
    days: [
      {
        focus: "Custom sorting & arrangement",
        items: [
          ["Sort Colors", "LC", "M", "sort-colors"],
          ["Largest Number", "LC", "M", "largest-number"],
          ["H-Index", "LC", "M", "h-index"],
          ["Maximum Gap", "LC", "H", "maximum-gap"],
        ],
      },
      {
        focus: "Intervals",
        items: [
          ["Merge Intervals", "LC", "M", "merge-intervals"],
          ["Insert Interval", "LC", "M", "insert-interval"],
          ["Non-overlapping Intervals", "LC", "M", "non-overlapping-intervals"],
          ["Minimum Number of Arrows to Burst Balloons", "LC", "M", "minimum-number-of-arrows-to-burst-balloons"],
        ],
      },
      {
        focus: "Matrix traversal & transforms",
        items: [
          ["Set Matrix Zeroes", "LC", "M", "set-matrix-zeroes"],
          ["Spiral Matrix", "LC", "M", "spiral-matrix"],
          ["Rotate Image", "LC", "M", "rotate-image"],
          ["Valid Sudoku", "LC", "M", "valid-sudoku"],
        ],
      },
      {
        focus: "Matrix search & 2D structure",
        items: [
          ["Search a 2D Matrix", "LC", "M", "search-a-2d-matrix"],
          ["Search a 2D Matrix II", "LC", "M", "search-a-2d-matrix-ii"],
          ["Kth Smallest Element in a Sorted Matrix", "LC", "M", "kth-smallest-element-in-a-sorted-matrix"],
          ["Diagonal Traverse", "LC", "M", "diagonal-traverse"],
          ["Spiral Matrix II", "LC", "M", "spiral-matrix-ii"],
        ],
      },
      {
        focus: "Hard sorting & counting",
        items: [
          ["Count of Smaller Numbers After Self", "LC", "H", "count-of-smaller-numbers-after-self"],
          ["Reverse Pairs", "LC", "H", "reverse-pairs"],
          ["Max Points on a Line", "LC", "H", "max-points-on-a-line"],
          ["↻ Revise Sorting & Matrix patterns", "LC", "E", "revision"],
        ],
      },
    ],
  },
  {
    name: "Two Pointers",
    tag: "pair sums · partition · fast-slow",
    ext: false,
    days: [
      {
        focus: "Opposite-end pointers",
        items: [
          ["Two Sum II - Input Array Is Sorted", "LC", "M", "two-sum-ii-input-array-is-sorted"],
          ["Valid Palindrome", "LC", "E", "valid-palindrome"],
          ["Valid Palindrome II", "LC", "E", "valid-palindrome-ii"],
          ["Is Subsequence", "LC", "E", "is-subsequence"],
        ],
      },
      {
        focus: "Pair & triplet sums",
        items: [
          ["3Sum", "LC", "M", "3sum"],
          ["3Sum Closest", "LC", "M", "3sum-closest"],
          ["4Sum", "LC", "M", "4sum"],
          ["Boats to Save People", "LC", "M", "boats-to-save-people"],
        ],
      },
      {
        focus: "Container & partition",
        items: [
          ["Container With Most Water", "LC", "M", "container-with-most-water"],
          ["Sort Colors", "LC", "M", "sort-colors"],
          ["Move Zeroes", "LC", "E", "move-zeroes"],
          ["Partition Labels", "LC", "M", "partition-labels"],
        ],
      },
      {
        focus: "Fast-slow & cyclic",
        items: [
          ["Find the Duplicate Number", "LC", "M", "find-the-duplicate-number"],
          ["Linked List Cycle", "LC", "E", "linked-list-cycle"],
          ["Linked List Cycle II", "LC", "M", "linked-list-cycle-ii"],
          ["Happy Number", "LC", "E", "happy-number"],
        ],
      },
      {
        focus: "Hard two-pointer challenges",
        items: [
          ["Trapping Rain Water", "LC", "H", "trapping-rain-water"],
          ["Number of Subsequences That Satisfy the Given Sum Condition", "LC", "M", "number-of-subsequences-that-satisfy-the-given-sum-condition"],
          ["Subarray Product Less Than K", "LC", "M", "subarray-product-less-than-k"],
          ["Max Chunks To Make Sorted II", "LC", "H", "max-chunks-to-make-sorted-ii"],
        ],
      },
    ],
  },
  {
    name: "Sliding Window",
    tag: "fixed & variable windows",
    ext: false,
    days: [
      {
        focus: "Fixed-size windows",
        items: [
          ["Maximum Average Subarray I", "LC", "E", "maximum-average-subarray-i"],
          ["Find All Anagrams in a String", "LC", "M", "find-all-anagrams-in-a-string"],
          ["Permutation in String", "LC", "M", "permutation-in-string"],
          ["Substring with Concatenation of All Words", "LC", "H", "substring-with-concatenation-of-all-words"],
        ],
      },
      {
        focus: "Variable windows: longest",
        items: [
          ["Longest Substring Without Repeating Characters", "LC", "M", "longest-substring-without-repeating-characters"],
          ["Longest Repeating Character Replacement", "LC", "M", "longest-repeating-character-replacement"],
          ["Max Consecutive Ones III", "LC", "M", "max-consecutive-ones-iii"],
          ["Fruit Into Baskets", "LC", "M", "fruit-into-baskets"],
        ],
      },
      {
        focus: "Variable windows: shortest & counting",
        items: [
          ["Minimum Size Subarray Sum", "LC", "M", "minimum-size-subarray-sum"],
          ["Count Number of Nice Subarrays", "LC", "M", "count-number-of-nice-subarrays"],
          ["Maximum Points You Can Obtain from Cards", "LC", "M", "maximum-points-you-can-obtain-from-cards"],
          ["Longest Subarray of 1's After Deleting One Element", "LC", "M", "longest-subarray-of-1s-after-deleting-one-element"],
        ],
      },
      {
        focus: "Hard windows & monotonic deque",
        items: [
          ["Minimum Window Substring", "LC", "H", "minimum-window-substring"],
          ["Sliding Window Maximum", "LC", "H", "sliding-window-maximum"],
          ["Subarrays with K Different Integers", "LC", "H", "subarrays-with-k-different-integers"],
          ["Count Subarrays With Fixed Bounds", "LC", "H", "count-subarrays-with-fixed-bounds"],
          ["Minimum Number of K Consecutive Bit Flips", "LC", "H", "minimum-number-of-k-consecutive-bit-flips"],
        ],
      },
      {
        focus: "Median & advanced windows",
        items: [
          ["Sliding Window Median", "LC", "H", "sliding-window-median"],
          ["Maximum Sum of Distinct Subarrays With Length K", "LC", "M", "maximum-sum-of-distinct-subarrays-with-length-k"],
          ["Replace the Substring for Balanced String", "LC", "M", "replace-the-substring-for-balanced-string"],
          ["↻ Revise Sliding Window patterns", "LC", "E", "revision"],
        ],
      },
    ],
  },
];

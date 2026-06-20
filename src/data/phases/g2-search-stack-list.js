// PHASES for this topic group. Each problem = [title, source("LC"|"GFG"), difficulty("E"|"M"|"H"), slug]
// Phase = { name, tag, ext:boolean, days:[ { focus, items:[...] }, ... ] }
export const PHASES = [
  {
    name: "Binary Search",
    tag: "on array · on answer · 2D",
    ext: false,
    days: [
      {
        focus: "Core search & boundaries",
        items: [
          ["Binary Search", "LC", "E", "binary-search"],
          ["Search Insert Position", "LC", "E", "search-insert-position"],
          ["Find First and Last Position of Element in Sorted Array", "LC", "M", "find-first-and-last-position-of-element-in-sorted-array"],
          ["Find Peak Element", "LC", "M", "find-peak-element"],
          ["Sqrt(x)", "LC", "E", "sqrtx"],
        ],
      },
      {
        focus: "Rotated & search-space",
        items: [
          ["Search in Rotated Sorted Array", "LC", "M", "search-in-rotated-sorted-array"],
          ["Search in Rotated Sorted Array II", "LC", "M", "search-in-rotated-sorted-array-ii"],
          ["Find Minimum in Rotated Sorted Array", "LC", "M", "find-minimum-in-rotated-sorted-array"],
          ["Find Minimum in Rotated Sorted Array II", "LC", "H", "find-minimum-in-rotated-sorted-array-ii"],
          ["Single Element in a Sorted Array", "LC", "M", "single-element-in-a-sorted-array"],
        ],
      },
      {
        focus: "Binary search on answer",
        items: [
          ["Koko Eating Bananas", "LC", "M", "koko-eating-bananas"],
          ["Capacity To Ship Packages Within D Days", "LC", "M", "capacity-to-ship-packages-within-d-days"],
          ["Split Array Largest Sum", "LC", "H", "split-array-largest-sum"],
          ["Minimum Number of Days to Make m Bouquets", "LC", "M", "minimum-number-of-days-to-make-m-bouquets"],
          ["Aggressive Cows", "GFG", "M", "aggressive-cows"],
        ],
      },
      {
        focus: "Hard merge & 2D",
        items: [
          ["Median of Two Sorted Arrays", "LC", "H", "median-of-two-sorted-arrays"],
          ["Kth Smallest Element in a Sorted Matrix", "LC", "M", "kth-smallest-element-in-a-sorted-matrix"],
          ["Search a 2D Matrix", "LC", "M", "search-a-2d-matrix"],
          ["Search a 2D Matrix II", "LC", "M", "search-a-2d-matrix-ii"],
          ["Find K-th Smallest Pair Distance", "LC", "H", "find-k-th-smallest-pair-distance"],
        ],
      },
    ],
  },
  {
    name: "Stack & Queue",
    tag: "monotonic stack · design",
    ext: false,
    days: [
      {
        focus: "Stack fundamentals & parsing",
        items: [
          ["Valid Parentheses", "LC", "E", "valid-parentheses"],
          ["Min Stack", "LC", "M", "min-stack"],
          ["Evaluate Reverse Polish Notation", "LC", "M", "evaluate-reverse-polish-notation"],
          ["Simplify Path", "LC", "M", "simplify-path"],
          ["Decode String", "LC", "M", "decode-string"],
        ],
      },
      {
        focus: "Monotonic stack",
        items: [
          ["Daily Temperatures", "LC", "M", "daily-temperatures"],
          ["Next Greater Element II", "LC", "M", "next-greater-element-ii"],
          ["Largest Rectangle in Histogram", "LC", "H", "largest-rectangle-in-histogram"],
          ["Trapping Rain Water", "LC", "H", "trapping-rain-water"],
          ["Sum of Subarray Minimums", "LC", "M", "sum-of-subarray-minimums"],
        ],
      },
      {
        focus: "Monotonic deque & windows",
        items: [
          ["Sliding Window Maximum", "LC", "H", "sliding-window-maximum"],
          ["Maximal Rectangle", "LC", "H", "maximal-rectangle"],
          ["Remove K Digits", "LC", "M", "remove-k-digits"],
          ["Remove Duplicate Letters", "LC", "M", "remove-duplicate-letters"],
          ["Online Stock Span", "LC", "M", "online-stock-span"],
        ],
      },
      {
        focus: "Design & calculators",
        items: [
          ["Implement Queue using Stacks", "LC", "E", "implement-queue-using-stacks"],
          ["Implement Stack using Queues", "LC", "E", "implement-stack-using-queues"],
          ["Basic Calculator", "LC", "H", "basic-calculator"],
          ["Basic Calculator II", "LC", "M", "basic-calculator-ii"],
          ["Asteroid Collision", "LC", "M", "asteroid-collision"],
        ],
      },
    ],
  },
  {
    name: "Linked List",
    tag: "reversal · cycles · merge",
    ext: false,
    days: [
      {
        focus: "Traversal & reversal",
        items: [
          ["Reverse Linked List", "LC", "E", "reverse-linked-list"],
          ["Reverse Linked List II", "LC", "M", "reverse-linked-list-ii"],
          ["Middle of the Linked List", "LC", "E", "middle-of-the-linked-list"],
          ["Remove Nth Node From End of List", "LC", "M", "remove-nth-node-from-end-of-list"],
          ["Odd Even Linked List", "LC", "M", "odd-even-linked-list"],
        ],
      },
      {
        focus: "Cycles & intersection",
        items: [
          ["Linked List Cycle", "LC", "E", "linked-list-cycle"],
          ["Linked List Cycle II", "LC", "M", "linked-list-cycle-ii"],
          ["Intersection of Two Linked Lists", "LC", "E", "intersection-of-two-linked-lists"],
          ["Find the Duplicate Number", "LC", "M", "find-the-duplicate-number"],
          ["Remove Duplicates from Sorted List II", "LC", "M", "remove-duplicates-from-sorted-list-ii"],
        ],
      },
      {
        focus: "Merge & sort",
        items: [
          ["Merge Two Sorted Lists", "LC", "E", "merge-two-sorted-lists"],
          ["Merge k Sorted Lists", "LC", "H", "merge-k-sorted-lists"],
          ["Sort List", "LC", "M", "sort-list"],
          ["Add Two Numbers", "LC", "M", "add-two-numbers"],
          ["Add Two Numbers II", "LC", "M", "add-two-numbers-ii"],
        ],
      },
      {
        focus: "Hard restructuring & design",
        items: [
          ["Reverse Nodes in k-Group", "LC", "H", "reverse-nodes-in-k-group"],
          ["Copy List with Random Pointer", "LC", "M", "copy-list-with-random-pointer"],
          ["LRU Cache", "LC", "M", "lru-cache"],
          ["LFU Cache", "LC", "H", "lfu-cache"],
          ["Reorder List", "LC", "M", "reorder-list"],
        ],
      },
    ],
  },
];

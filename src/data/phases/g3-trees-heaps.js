// PHASES for this topic group. Each problem = [title, source("LC"|"GFG"), difficulty("E"|"M"|"H"), slug]
// Phase = { name, tag, ext:boolean, days:[ { focus, items:[...] }, ... ] }
export const PHASES = [
  {
    name: "Binary Trees",
    tag: "traversals · views · paths",
    ext: false,
    days: [
      {
        focus: "Traversals — iterative & recursive",
        items: [
          ["Binary Tree Inorder Traversal", "LC", "E", "binary-tree-inorder-traversal"],
          ["Binary Tree Preorder Traversal", "LC", "E", "binary-tree-preorder-traversal"],
          ["Binary Tree Postorder Traversal", "LC", "E", "binary-tree-postorder-traversal"],
          ["Binary Tree Level Order Traversal", "LC", "M", "binary-tree-level-order-traversal"],
          ["Binary Tree Zigzag Level Order Traversal", "LC", "M", "binary-tree-zigzag-level-order-traversal"],
        ],
      },
      {
        focus: "Properties — depth, balance, symmetry",
        items: [
          ["Maximum Depth of Binary Tree", "LC", "E", "maximum-depth-of-binary-tree"],
          ["Symmetric Tree", "LC", "E", "symmetric-tree"],
          ["Balanced Binary Tree", "LC", "E", "balanced-binary-tree"],
          ["Diameter of Binary Tree", "LC", "E", "diameter-of-binary-tree"],
          ["Count Complete Tree Nodes", "LC", "E", "count-complete-tree-nodes"],
        ],
      },
      {
        focus: "Views & boundaries",
        items: [
          ["Binary Tree Right Side View", "LC", "M", "binary-tree-right-side-view"],
          ["Top View of Binary Tree", "GFG", "M", "top-view-of-binary-tree"],
          ["Bottom View of Binary Tree", "GFG", "M", "bottom-view-of-binary-tree"],
          ["Boundary Traversal of Binary Tree", "GFG", "H", "boundary-traversal-of-binary-tree"],
          ["Vertical Order Traversal of a Binary Tree", "LC", "H", "vertical-order-traversal-of-a-binary-tree"],
        ],
      },
      {
        focus: "Path problems & LCA",
        items: [
          ["Path Sum", "LC", "E", "path-sum"],
          ["Path Sum II", "LC", "M", "path-sum-ii"],
          ["Sum Root to Leaf Numbers", "LC", "M", "sum-root-to-leaf-numbers"],
          ["Lowest Common Ancestor of a Binary Tree", "LC", "M", "lowest-common-ancestor-of-a-binary-tree"],
          ["Binary Tree Maximum Path Sum", "LC", "H", "binary-tree-maximum-path-sum"],
        ],
      },
      {
        focus: "Construction & serialization",
        items: [
          ["Construct Binary Tree from Preorder and Inorder Traversal", "LC", "M", "construct-binary-tree-from-preorder-and-inorder-traversal"],
          ["Construct Binary Tree from Inorder and Postorder Traversal", "LC", "M", "construct-binary-tree-from-inorder-and-postorder-traversal"],
          ["Flatten Binary Tree to Linked List", "LC", "M", "flatten-binary-tree-to-linked-list"],
          ["Populating Next Right Pointers in Each Node II", "LC", "M", "populating-next-right-pointers-in-each-node-ii"],
          ["Serialize and Deserialize Binary Tree", "LC", "H", "serialize-and-deserialize-binary-tree"],
        ],
      },
    ],
  },
  {
    name: "Binary Search Trees",
    tag: "validate · kth · LCA",
    ext: false,
    days: [
      {
        focus: "Search, insert, traverse",
        items: [
          ["Search in a Binary Search Tree", "LC", "E", "search-in-a-binary-search-tree"],
          ["Insert into a Binary Search Tree", "LC", "M", "insert-into-a-binary-search-tree"],
          ["Minimum Absolute Difference in BST", "LC", "E", "minimum-absolute-difference-in-bst"],
          ["Range Sum of BST", "LC", "E", "range-sum-of-bst"],
          ["Two Sum IV - Input is a BST", "LC", "E", "two-sum-iv-input-is-a-bst"],
        ],
      },
      {
        focus: "Validate & order statistics",
        items: [
          ["Validate Binary Search Tree", "LC", "M", "validate-binary-search-tree"],
          ["Kth Smallest Element in a BST", "LC", "M", "kth-smallest-element-in-a-bst"],
          ["Lowest Common Ancestor of a Binary Search Tree", "LC", "M", "lowest-common-ancestor-of-a-binary-search-tree"],
          ["Convert Sorted Array to Binary Search Tree", "LC", "E", "convert-sorted-array-to-binary-search-tree"],
          ["Binary Search Tree Iterator", "LC", "M", "binary-search-tree-iterator"],
        ],
      },
      {
        focus: "Modify & restore",
        items: [
          ["Delete Node in a BST", "LC", "M", "delete-node-in-a-bst"],
          ["Recover Binary Search Tree", "LC", "M", "recover-binary-search-tree"],
          ["Trim a Binary Search Tree", "LC", "M", "trim-a-binary-search-tree"],
          ["Convert BST to Greater Tree", "LC", "M", "convert-bst-to-greater-tree"],
          ["Predecessor and Successor in BST", "GFG", "M", "predecessor-and-successor"],
        ],
      },
      {
        focus: "Closest, count & structure",
        items: [
          ["Closest Binary Search Tree Value", "LC", "E", "closest-binary-search-tree-value"],
          ["Count of Smaller Numbers After Self", "LC", "H", "count-of-smaller-numbers-after-self"],
          ["Unique Binary Search Trees II", "LC", "M", "unique-binary-search-trees-ii"],
          ["Number of Ways to Reorder Array to Get Same BST", "LC", "H", "number-of-ways-to-reorder-array-to-get-same-bst"],
          ["Largest BST in Binary Tree", "GFG", "H", "largest-bst-in-a-binary-tree"],
        ],
      },
    ],
  },
  {
    name: "Heaps & Priority Queues",
    tag: "top-K · streams · scheduling",
    ext: false,
    days: [
      {
        focus: "Heap basics & top-K",
        items: [
          ["Kth Largest Element in an Array", "LC", "M", "kth-largest-element-in-an-array"],
          ["Top K Frequent Elements", "LC", "M", "top-k-frequent-elements"],
          ["K Closest Points to Origin", "LC", "M", "k-closest-points-to-origin"],
          ["Last Stone Weight", "LC", "E", "last-stone-weight"],
          ["Sort Characters By Frequency", "LC", "M", "sort-characters-by-frequency"],
        ],
      },
      {
        focus: "Merge & ordered streams",
        items: [
          ["Merge k Sorted Lists", "LC", "H", "merge-k-sorted-lists"],
          ["Find K Pairs with Smallest Sums", "LC", "M", "find-k-pairs-with-smallest-sums"],
          ["Kth Smallest Element in a Sorted Matrix", "LC", "M", "kth-smallest-element-in-a-sorted-matrix"],
          ["Smallest Range Covering Elements from K Lists", "LC", "H", "smallest-range-covering-elements-from-k-lists"],
          ["Ugly Number II", "LC", "M", "ugly-number-ii"],
        ],
      },
      {
        focus: "Data streams & medians",
        items: [
          ["Find Median from Data Stream", "LC", "H", "find-median-from-data-stream"],
          ["Sliding Window Median", "LC", "H", "sliding-window-median"],
          ["Kth Largest Element in a Stream", "LC", "E", "kth-largest-element-in-a-stream"],
          ["IPO", "LC", "H", "ipo"],
          ["Maximum Performance of a Team", "LC", "H", "maximum-performance-of-a-team"],
        ],
      },
      {
        focus: "Scheduling & greedy heaps",
        items: [
          ["Task Scheduler", "LC", "M", "task-scheduler"],
          ["Reorganize String", "LC", "M", "reorganize-string"],
          ["Meeting Rooms II", "LC", "M", "meeting-rooms-ii"],
          ["Minimum Cost to Connect Sticks", "LC", "M", "minimum-cost-to-connect-sticks"],
          ["The Skyline Problem", "LC", "H", "the-skyline-problem"],
        ],
      },
    ],
  },
];

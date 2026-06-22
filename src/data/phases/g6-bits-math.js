// PHASES for this topic group. Each problem = [title, source("LC"|"GFG"), difficulty("E"|"M"|"H"), slug]
// Phase = { name, tag, ext:boolean, days:[ { focus, items:[...] }, ... ] }
//
// Pattern-completion group: the three recognized interview patterns the core
// campaign was light on — Cyclic Sort (index placement), Bit Manipulation
// (bitwise XOR / masks), and Math & Number Theory. Mirrors the tail of the
// NeetCode 150 roadmap (Math & Geometry, Bit Manipulation come last in core).
export const PHASES = [
  {
    name: "Cyclic Sort",
    tag: "index placement · missing / duplicate numbers",
    ext: false,
    days: [
      {
        focus: "Index-placement core (numbers in 1..n)",
        items: [
          ["Find All Numbers Disappeared in an Array", "LC", "E", "find-all-numbers-disappeared-in-an-array"],
          ["Set Mismatch", "LC", "E", "set-mismatch"],
          ["Find All Duplicates in an Array", "LC", "M", "find-all-duplicates-in-an-array"],
          ["Find the Duplicate Number", "LC", "M", "find-the-duplicate-number"],
        ],
      },
      {
        focus: "Hard cyclic placement",
        items: [
          ["First Missing Positive", "LC", "H", "first-missing-positive"],
          ["Kth Missing Positive Number", "LC", "E", "kth-missing-positive-number"],
          ["Couples Holding Hands", "LC", "H", "couples-holding-hands"],
          ["↻ Revise cyclic-sort swap invariant", "LC", "E", "revision"],
        ],
      },
    ],
  },
  {
    name: "Bit Manipulation",
    tag: "XOR tricks · masks · bit counting",
    ext: false,
    days: [
      {
        focus: "Bit basics & counting",
        items: [
          ["Number of 1 Bits", "LC", "E", "number-of-1-bits"],
          ["Counting Bits", "LC", "E", "counting-bits"],
          ["Reverse Bits", "LC", "E", "reverse-bits"],
          ["Power of Two", "LC", "E", "power-of-two"],
          ["Hamming Distance", "LC", "E", "hamming-distance"],
        ],
      },
      {
        focus: "XOR family",
        items: [
          ["Single Number", "LC", "E", "single-number"],
          ["Single Number II", "LC", "M", "single-number-ii"],
          ["Single Number III", "LC", "M", "single-number-iii"],
          ["Missing Number", "LC", "E", "missing-number"],
          ["Maximum XOR of Two Numbers in an Array", "LC", "M", "maximum-xor-of-two-numbers-in-an-array"],
        ],
      },
      {
        focus: "Masks & bit arithmetic",
        items: [
          ["Sum of Two Integers", "LC", "M", "sum-of-two-integers"],
          ["Divide Two Integers", "LC", "M", "divide-two-integers"],
          ["Bitwise AND of Numbers Range", "LC", "M", "bitwise-and-of-numbers-range"],
          ["Gray Code", "LC", "M", "gray-code"],
          ["Number Complement", "LC", "E", "number-complement"],
        ],
      },
      {
        focus: "Bitmask techniques",
        items: [
          ["Subsets (bitmask view)", "LC", "M", "subsets"],
          ["Maximum Product of Word Lengths", "LC", "M", "maximum-product-of-word-lengths"],
          ["Minimum Flips to Make a OR b Equal to c", "LC", "M", "minimum-flips-to-make-a-or-b-equal-to-c"],
          ["Total Hamming Distance", "LC", "M", "total-hamming-distance"],
          ["↻ Revise bit tricks (n&(n-1), x^x=0, masks)", "LC", "E", "revision"],
        ],
      },
    ],
  },
  {
    name: "Math & Number Theory",
    tag: "primes · power · big-number · conversions",
    ext: false,
    days: [
      {
        focus: "Number theory",
        items: [
          ["Count Primes", "LC", "M", "count-primes"],
          ["Pow(x, n)", "LC", "M", "powx-n"],
          ["Factorial Trailing Zeroes", "LC", "M", "factorial-trailing-zeroes"],
          ["Excel Sheet Column Title", "LC", "E", "excel-sheet-column-title"],
          ["Excel Sheet Column Number", "LC", "E", "excel-sheet-column-number"],
        ],
      },
      {
        focus: "Big-number arithmetic",
        items: [
          ["Multiply Strings", "LC", "M", "multiply-strings"],
          ["Add Binary", "LC", "E", "add-binary"],
          ["Add Strings", "LC", "E", "add-strings"],
          ["Plus One", "LC", "E", "plus-one"],
          ["Integer to Roman", "LC", "M", "integer-to-roman"],
        ],
      },
      {
        focus: "Conversions & geometry",
        items: [
          ["Roman to Integer", "LC", "E", "roman-to-integer"],
          ["Reverse Integer", "LC", "M", "reverse-integer"],
          ["Palindrome Number", "LC", "E", "palindrome-number"],
          ["Valid Perfect Square", "LC", "E", "valid-perfect-square"],
          ["Max Points on a Line", "LC", "H", "max-points-on-a-line"],
          ["↻ Revise math identities & overflow handling", "LC", "E", "revision"],
        ],
      },
    ],
  },
];

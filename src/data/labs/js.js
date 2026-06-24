// JavaScript Practice Lab — advanced, logic-building challenges for interview
// prep and for writing solid Node/Express backend code. Authored to go well
// beyond syntax basics: closures, the event loop, building Promise combinators
// from scratch, functional utilities, metaprogramming, and backend patterns.
//
// Schema (consumed by ChallengeModal):
//   challenge = {
//     id, title, diff: 'E'|'M'|'H'|'X', tags: [],
//     summary,           // one-liner shown in the list + modal
//     prompt,            // problem statement (paragraphs split on \n\n)
//     setup?,            // optional given code / context (mono block)
//     examples?: [{ in, out, note }],
//     hints?: [],        // revealed progressively
//     solution?,         // reference solution (mono block)
//     explanation?,      // why it works (paragraphs)
//     keyPoints?: [],    // takeaway bullets
//     pitfalls?: [],     // common mistakes
//   }

export const LAB = {
  key: 'jslab',
  name: 'JavaScript Lab',
  tag: 'closures · async · prototypes · polyfills · patterns',
  lang: 'js',
  blurb: 'Advanced JS challenges to sharpen logic and core internals — no syntax filler.',
}

export const SECTIONS = [
  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Closures, Scope & Currying',
    intro: 'Lexical scope, private state, and functions that remember.',
    challenges: [
      {
        id: 'js-once',
        title: 'once(fn) — run a function exactly once',
        diff: 'M',
        tags: ['closure', 'hof'],
        summary: 'Return a wrapper that invokes fn only on the first call and caches its result thereafter.',
        prompt:
          'Implement once(fn) that returns a new function. The first time the returned function is called it should invoke fn with the given arguments and the correct this, remember the return value, and on every subsequent call return that cached value without calling fn again.\n\nThis is the classic pattern behind one-time initializers (open a DB connection once, attach a listener once).',
        examples: [
          { in: 'const init = once(() => { console.log("run"); return 42 })', out: 'init() → logs "run", returns 42; init() → returns 42 (no log)' },
        ],
        hints: [
          'You need a flag and a stored value that persist across calls — that is exactly what a closure variable gives you.',
          'Preserve this and arguments by calling fn.apply(this, args).',
        ],
        solution:
          'function once(fn) {\n  let called = false\n  let result\n  return function (...args) {\n    if (!called) {\n      called = true\n      result = fn.apply(this, args)\n      fn = null            // let the original be garbage-collected\n    }\n    return result\n  }\n}',
        explanation:
          'The returned function closes over `called` and `result`. Those variables live as long as the wrapper does, giving it private, persistent state. After the first call we flip the flag so fn never runs again.\n\nUsing fn.apply(this, args) keeps it transparent: it works as a method, with any number of arguments. Nulling fn afterward releases the reference so a heavy closure can be collected.',
        keyPoints: [
          'A closure is a function plus the lexical environment it was created in.',
          'Private per-instance state without a class — each call to once() gets its own called/result.',
          'apply(this, args) forwards context and variadic arguments faithfully.',
        ],
        pitfalls: ['Returning an arrow function would still work for state, but you would lose dynamic `this`.'],
      },
      {
        id: 'js-curry',
        title: 'curry(fn) — arity-aware currying',
        diff: 'H',
        tags: ['closure', 'functional', 'currying'],
        summary: 'Transform fn(a,b,c) so it can be called as f(a)(b)(c), f(a,b)(c), or f(a,b,c).',
        prompt:
          'Write curry(fn) that returns a curried version of fn. It should collect arguments across calls until at least fn.length arguments have been supplied, then invoke fn with all of them. Any partial application of the arguments should be supported.',
        examples: [
          { in: 'const sum = curry((a,b,c) => a+b+c)', out: 'sum(1)(2)(3) === sum(1,2)(3) === sum(1,2,3) === 6' },
        ],
        hints: [
          'fn.length tells you the declared number of parameters (its arity).',
          'If enough args have been gathered, call fn; otherwise return a new function that remembers the args so far.',
        ],
        solution:
          'function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args)\n    }\n    return (...next) => curried.apply(this, args.concat(next))\n  }\n}',
        explanation:
          'Each call compares how many arguments have accumulated against fn.length. Once we have enough we apply fn. Otherwise we return a function that, when called, concatenates the new arguments onto the existing ones and recurses.\n\nBecause args.concat(next) builds a fresh array each time, partial applications do not interfere with one another — you can reuse sum(1) twice safely.',
        keyPoints: [
          'fn.length = number of declared (non-rest, pre-default) parameters.',
          'Currying turns a multi-arg function into a chain of unary-ish steps.',
          'Recursion + closures = elegant accumulation of partial arguments.',
        ],
        pitfalls: ['Rest params and default values make fn.length unreliable; pass an explicit arity if needed.'],
      },
      {
        id: 'js-counter-factory',
        title: 'Loop closure trap — capture the right i',
        diff: 'M',
        tags: ['closure', 'scope', 'output'],
        summary: 'Explain and fix the classic for-loop closure that logs the wrong value.',
        prompt:
          'The code below logs "3, 3, 3" instead of "0, 1, 2". Explain precisely why, then give two distinct fixes — one using block scope and one using a closure/IIFE — without changing the output requirement (must log 0, 1, 2).',
        setup:
          'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0)\n}',
        hints: [
          'var is function-scoped — there is only ONE i shared by all three callbacks.',
          'By the time the timeouts fire, the loop has finished and i is 3.',
        ],
        solution:
          '// Fix 1 — let creates a fresh binding per iteration:\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0)\n}\n\n// Fix 2 — capture i in an IIFE parameter (pre-ES6 style):\nfor (var i = 0; i < 3; i++) {\n  (function (j) {\n    setTimeout(() => console.log(j), 0)\n  })(i)\n}',
        explanation:
          'With var there is a single i in the enclosing function scope. All three arrow callbacks close over that same variable. setTimeout defers them until after the synchronous loop ends, at which point i === 3, so every callback reads 3.\n\nlet is block-scoped and, in a for-loop, the spec creates a new binding of i for each iteration, so each callback closes over its own copy. The IIFE achieves the same by copying i into the parameter j, a fresh variable per call.',
        keyPoints: [
          'var = function scope (one shared binding); let/const = block scope (per-iteration binding).',
          'Closures capture variables by reference, not by value at creation time.',
          'The event loop runs the timeouts after the loop completes.',
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: '`this`, call / apply / bind',
    intro: 'Dynamic context, explicit binding, and method borrowing.',
    challenges: [
      {
        id: 'js-myBind',
        title: 'Function.prototype.myBind — polyfill bind',
        diff: 'H',
        tags: ['this', 'polyfill', 'prototype'],
        summary: 'Recreate bind: fix this, support partial args, and behave correctly with new.',
        prompt:
          'Add Function.prototype.myBind(context, ...preset) that returns a new function with `this` permanently set to context and preset arguments pre-filled. Bonus: if the bound function is later used with `new`, the bound `this` must be ignored in favour of the freshly constructed object (this is how the real bind behaves).',
        hints: [
          'Return a function that calls the original via apply with context and merged args.',
          'Detect construction: when called with new, `this instanceof boundFn` is true — then use the new object, not context.',
        ],
        solution:
          'Function.prototype.myBind = function (context, ...preset) {\n  const fn = this\n  function bound(...later) {\n    const isNew = this instanceof bound\n    return fn.apply(isNew ? this : context, [...preset, ...later])\n  }\n  // keep the prototype chain so `new bound()` produces correct instances\n  bound.prototype = Object.create(fn.prototype)\n  return bound\n}',
        explanation:
          'bind captures the original function as fn. The returned `bound` forwards everything to fn.apply, choosing the context: normally the bound context, but when invoked with `new` (detected via this instanceof bound) it uses the brand-new instance instead, matching the spec.\n\nWiring bound.prototype to Object.create(fn.prototype) means instances created with new bound() are also instanceof the original constructor.',
        keyPoints: [
          'bind returns a new function; it does not call the original immediately (unlike call/apply).',
          'Partial application: preset args are prepended to call-time args.',
          'new overrides a bound this — a subtle but tested detail.',
        ],
        pitfalls: ['Forgetting the new-target case makes bound constructors silently use the wrong this.'],
      },
      {
        id: 'js-this-table',
        title: 'Predict `this` across call styles',
        diff: 'M',
        tags: ['this', 'output'],
        summary: 'Given one method extracted and called several ways, state this in each case.',
        prompt:
          'For the object below, state what `this.name` resolves to (or why it throws/returns undefined) for each call. Assume non-strict module-level code where the global object has no `name`.',
        setup:
          'const obj = {\n  name: "obj",\n  regular() { return this?.name },\n  arrow: () => this?.name,\n}\nconst loose = obj.regular\n\n// A) obj.regular()\n// B) loose()\n// C) obj.arrow()\n// D) obj.regular.call({ name: "called" })',
        hints: [
          '`this` for a regular function is set by HOW it is called (the receiver before the dot).',
          'Arrow functions have no own this — they use the lexical this of where they were DEFINED.',
        ],
        solution:
          '// A) "obj"      — called as a method, receiver is obj\n// B) undefined  — bare call, this is undefined (module/strict) or global (sloppy)\n// C) undefined  — arrow uses module-level this (undefined in ESM)\n// D) "called"   — call() explicitly sets this to { name: "called" }',
        explanation:
          'A regular function’s this is the object to the left of the dot at call time. obj.regular() → this is obj. Pulling the method into `loose` loses the receiver, so a bare loose() has this = undefined (ESM/strict) and would read undefined.\n\nThe arrow captured the surrounding module scope’s this (undefined in an ES module), and that never changes regardless of how it is called. call/apply/bind only affect regular functions.',
        keyPoints: [
          'Regular functions: this is dynamic, decided at call time by the call site.',
          'Arrow functions: this is lexical, fixed at definition, immune to call/apply/bind.',
          'Detaching a method drops its receiver — a frequent source of bugs in callbacks.',
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Prototypes & Inheritance',
    intro: 'The prototype chain, delegation, and class internals.',
    challenges: [
      {
        id: 'js-myNew',
        title: 'myNew(Ctor, ...args) — implement the `new` operator',
        diff: 'H',
        tags: ['prototype', 'new', 'internals'],
        summary: 'Recreate what `new` does in four steps, including the object-return edge case.',
        prompt:
          'Write myNew(Ctor, ...args) that behaves like `new Ctor(...args)` without using the new keyword. Remember the rule: if the constructor returns an object, that object is used; otherwise the freshly created instance is returned.',
        hints: [
          'Create an object whose prototype is Ctor.prototype (Object.create).',
          'Call the constructor with the new object as this, then decide what to return.',
        ],
        solution:
          'function myNew(Ctor, ...args) {\n  const obj = Object.create(Ctor.prototype)   // 1. link prototype\n  const ret = Ctor.apply(obj, args)           // 2. run ctor with this = obj\n  return (ret !== null && typeof ret === "object") ? ret : obj  // 3. object override\n}',
        explanation:
          'The new operator does four things: creates a fresh object, links its [[Prototype]] to the constructor’s prototype, runs the constructor with this bound to the new object, and returns that object unless the constructor explicitly returns its own object.\n\nObject.create(Ctor.prototype) handles the prototype link so instanceof works. The final ternary implements the “return value override”: returning a primitive from a constructor is ignored, but returning an object replaces the instance.',
        keyPoints: [
          'Every object has an internal [[Prototype]] resolved on property misses.',
          'instanceof walks the prototype chain looking for Ctor.prototype.',
          'A constructor returning an object overrides the default instance.',
        ],
      },
      {
        id: 'js-inherit',
        title: 'Prototypal inheritance without class',
        diff: 'M',
        tags: ['prototype', 'inheritance'],
        summary: 'Wire Dog to inherit from Animal using constructor stealing + prototype linking.',
        prompt:
          'Using only functions and prototypes (no class keyword), make Dog inherit from Animal so that a Dog has its own name, inherits eat(), overrides speak(), and dog instanceof Animal is true.',
        setup:
          'function Animal(name) { this.name = name }\nAnimal.prototype.eat = function () { return this.name + " eats" }\nAnimal.prototype.speak = function () { return "..." }\n// Implement Dog(name) extending Animal, with speak() => name + " barks"',
        hints: [
          'Call Animal in Dog to inherit instance fields: Animal.call(this, name).',
          'Link prototypes with Object.create and reset the constructor reference.',
        ],
        solution:
          'function Dog(name) {\n  Animal.call(this, name)              // inherit instance state\n}\nDog.prototype = Object.create(Animal.prototype)  // inherit methods\nDog.prototype.constructor = Dog                   // fix constructor\nDog.prototype.speak = function () { return this.name + " barks" }',
        explanation:
          'Animal.call(this, name) runs the parent constructor against the new Dog instance, copying instance fields (name). Dog.prototype = Object.create(Animal.prototype) makes method lookups fall through to Animal’s methods, so eat() is inherited and instanceof Animal holds.\n\nWe reset Dog.prototype.constructor (Object.create wiped it) and then override speak on Dog’s prototype, shadowing the parent version.',
        keyPoints: [
          'Two-part inheritance: borrow the constructor (state) + link prototypes (behaviour).',
          'class extends is syntactic sugar over exactly this wiring.',
          'Always restore prototype.constructor after reassigning the prototype.',
        ],
        pitfalls: ['Dog.prototype = Animal.prototype (no Object.create) makes them share ONE prototype — overrides leak upward.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Event Loop & Async Ordering',
    intro: 'Microtasks vs macrotasks — predict and control execution order.',
    challenges: [
      {
        id: 'js-eventloop-order',
        title: 'Predict the log order',
        diff: 'H',
        tags: ['event-loop', 'microtask', 'output'],
        summary: 'Order sync code, Promise microtasks, and setTimeout macrotasks correctly.',
        prompt:
          'Write the exact console output order for the snippet below, and justify it in terms of the call stack, the microtask queue, and the macrotask (timer) queue.',
        setup:
          'console.log("1")\nsetTimeout(() => console.log("2"), 0)\nPromise.resolve().then(() => console.log("3")).then(() => console.log("4"))\nconsole.log("5")',
        hints: [
          'All synchronous code runs first, top to bottom.',
          'After the stack empties, the ENTIRE microtask queue drains before any macrotask (timer).',
        ],
        solution:
          '// Output: 1, 5, 3, 4, 2\n//\n// 1  — sync\n// 5  — sync\n// (stack empty → drain microtasks)\n// 3  — first .then microtask\n// 4  — chained .then (queued once 3 resolves, still before timers)\n// 2  — setTimeout macrotask, runs only after microtasks are exhausted',
        explanation:
          'Synchronous statements execute first: 1 then 5. setTimeout schedules a macrotask; the Promise callbacks schedule microtasks. When the call stack clears, the event loop fully drains the microtask queue before taking one macrotask. So 3 runs, which queues 4 (also a microtask), 4 runs, and only then does the loop pick up the timer callback 2.',
        keyPoints: [
          'Order: sync stack → all microtasks → one macrotask → all microtasks → ...',
          'Promise.then / queueMicrotask / await continuations are microtasks.',
          'setTimeout / setInterval / I/O callbacks are macrotasks.',
        ],
        pitfalls: ['A long microtask chain can starve timers — never assume setTimeout(…,0) runs "soon".'],
      },
      {
        id: 'js-async-await-order',
        title: 'async/await desugaring',
        diff: 'H',
        tags: ['async', 'event-loop', 'output'],
        summary: 'Trace logs across two async functions and a top-level Promise.',
        prompt:
          'Predict the output order and explain how each `await` splits the function at a microtask boundary.',
        setup:
          'async function a() {\n  console.log("a-start")\n  await b()\n  console.log("a-end")\n}\nasync function b() { console.log("b") }\nconsole.log("script-start")\na()\nPromise.resolve().then(() => console.log("promise"))\nconsole.log("script-end")',
        hints: [
          'await x pauses the async function and schedules the continuation as a microtask.',
          'Code before the first await runs synchronously when the async function is called.',
        ],
        solution:
          '// Output: script-start, a-start, b, script-end, a-end, promise\n//\n// a() runs synchronously up to await: logs a-start, then b() logs b.\n// await suspends a(); control returns to the caller.\n// script-end logs (sync). Microtasks now drain in order queued:\n//   a-end (continuation of a) then promise (.then).',
        explanation:
          'Calling a() runs synchronously until the first await: a-start and b are logged immediately (b’s body has no await before its log). await b() then suspends a and schedules its continuation (a-end) on the microtask queue. Execution returns to the main script, logging script-end.\n\nWith the stack empty, microtasks run in enqueue order: a-end was queued before the Promise.resolve().then, so a-end prints before promise.',
        keyPoints: [
          'Everything up to the first await runs synchronously.',
          'await is sugar for .then — the rest of the function becomes a microtask.',
          'Microtasks fire in the order they were scheduled.',
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Promises — Build the Combinators',
    intro: 'Reimplement the Promise toolbox you rely on in backend code.',
    challenges: [
      {
        id: 'js-promiseAll',
        title: 'myPromiseAll — resolve in order, reject fast',
        diff: 'H',
        tags: ['promise', 'polyfill', 'async'],
        summary: 'Resolve with results in input order; reject on the first rejection.',
        prompt:
          'Implement myPromiseAll(iterable) that returns a Promise resolving to an array of results in the SAME order as the inputs (not completion order), or rejecting as soon as any input rejects. Non-promise values must be passed through. Resolve immediately with [] for an empty input.',
        hints: [
          'Track a results array indexed by position and a remaining counter.',
          'Wrap each item in Promise.resolve so plain values work too.',
        ],
        solution:
          'function myPromiseAll(iterable) {\n  return new Promise((resolve, reject) => {\n    const items = Array.from(iterable)\n    const results = new Array(items.length)\n    let remaining = items.length\n    if (remaining === 0) return resolve([])\n    items.forEach((item, i) => {\n      Promise.resolve(item).then(\n        (val) => {\n          results[i] = val           // index keeps input order\n          if (--remaining === 0) resolve(results)\n        },\n        reject                       // first rejection wins\n      )\n    })\n  })\n}',
        explanation:
          'We pre-size a results array and assign each resolved value at its original index i, so completion order does not matter — output order matches input order. A remaining counter detects when the last promise settles.\n\nPassing reject directly as the rejection handler means the first failing promise rejects the aggregate immediately; later settlements are harmless because a promise can only settle once.',
        keyPoints: [
          'Index-based writes preserve input order independent of timing.',
          'Promise.resolve(item) normalizes thenables and plain values.',
          'A settled promise ignores further resolve/reject calls — safe to over-call.',
        ],
        pitfalls: ['Pushing into results on completion (instead of indexing) scrambles the order.'],
      },
      {
        id: 'js-allSettled',
        title: 'myAllSettled — never reject',
        diff: 'M',
        tags: ['promise', 'polyfill'],
        summary: 'Resolve with {status,value|reason} for every input, regardless of failures.',
        prompt:
          'Implement myAllSettled(iterable) returning a Promise that always resolves (never rejects) with an array of {status:"fulfilled", value} or {status:"rejected", reason} objects, in input order.',
        hints: [
          'It is structurally like Promise.all but you handle both fulfill and reject as success.',
          'Never call reject on the outer promise.',
        ],
        solution:
          'function myAllSettled(iterable) {\n  const items = Array.from(iterable)\n  return new Promise((resolve) => {\n    const out = new Array(items.length)\n    let remaining = items.length\n    if (remaining === 0) return resolve([])\n    items.forEach((item, i) => {\n      Promise.resolve(item).then(\n        (value) => { out[i] = { status: "fulfilled", value } },\n        (reason) => { out[i] = { status: "rejected", reason } }\n      ).finally(() => { if (--remaining === 0) resolve(out) })\n    })\n  })\n}',
        explanation:
          'Both branches write a descriptor object instead of failing. Using .finally to decrement the counter guarantees we count every settlement exactly once whether it fulfilled or rejected, then resolve when all are done.',
        keyPoints: [
          'allSettled is for "do everything, report each outcome" workflows.',
          'finally runs on both paths — perfect for the completion counter.',
          'The outer promise has no reject path by design.',
        ],
      },
      {
        id: 'js-retry',
        title: 'retry(fn, times, delay) with backoff',
        diff: 'H',
        tags: ['promise', 'async', 'backend'],
        summary: 'Retry a failing async operation N times with exponential backoff.',
        prompt:
          'Write retry(fn, times = 3, delay = 200) that calls the async fn and, if it rejects, waits delay ms and tries again, doubling the delay each attempt (exponential backoff). After `times` failed attempts, reject with the last error. Resolve as soon as any attempt succeeds.',
        hints: [
          'A small sleep helper: () => new Promise(r => setTimeout(r, ms)).',
          'Loop with async/await inside try/catch, or recurse decrementing times.',
        ],
        solution:
          'const sleep = (ms) => new Promise((r) => setTimeout(r, ms))\n\nasync function retry(fn, times = 3, delay = 200) {\n  let lastErr\n  for (let attempt = 0; attempt < times; attempt++) {\n    try {\n      return await fn()\n    } catch (err) {\n      lastErr = err\n      if (attempt < times - 1) await sleep(delay * 2 ** attempt)\n    }\n  }\n  throw lastErr\n}',
        explanation:
          'Each iteration awaits fn(). On success we return immediately. On failure we remember the error and, unless this was the final attempt, sleep for delay * 2^attempt — 200, 400, 800… — before retrying. After exhausting attempts we throw the last error so the caller can handle it.\n\nExponential backoff avoids hammering a struggling service and is standard for network calls, DB connects, and rate-limited APIs.',
        keyPoints: [
          'Backoff = delay grows multiplicatively to relieve pressure on the dependency.',
          'await sleep(...) pauses without blocking the event loop.',
          'Preserve and rethrow the original error for observability.',
        ],
        pitfalls: ['Retrying non-idempotent writes (e.g. POST that charges a card) can double-execute — guard with idempotency keys.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Functional Utilities',
    intro: 'compose, pipe, memoize — the backbone of clean transformations.',
    challenges: [
      {
        id: 'js-compose-pipe',
        title: 'compose & pipe',
        diff: 'M',
        tags: ['functional', 'hof'],
        summary: 'Combine unary functions right-to-left (compose) and left-to-right (pipe).',
        prompt:
          'Implement compose(...fns) and pipe(...fns). compose applies functions right-to-left; pipe applies them left-to-right. Both take an initial value and thread it through the chain.',
        examples: [
          { in: 'const f = pipe(x=>x+1, x=>x*2)', out: 'f(3) === 8   // (3+1)*2' },
          { in: 'const g = compose(x=>x+1, x=>x*2)', out: 'g(3) === 7   // (3*2)+1' },
        ],
        hints: ['reduce / reduceRight over the function list, passing the accumulator as the value.'],
        solution:
          'const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x)\nconst pipe    = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x)',
        explanation:
          'pipe folds left: the accumulator starts as the input and each function transforms it in order. compose is the mirror image using reduceRight, so the rightmost function runs first — matching mathematical f∘g notation.',
        keyPoints: [
          'pipe reads in execution order (great for readability); compose mirrors math.',
          'reduce/reduceRight elegantly thread a value through a list of steps.',
          'Keep composed functions unary for clean chaining.',
        ],
      },
      {
        id: 'js-memoize',
        title: 'memoize(fn, resolver)',
        diff: 'H',
        tags: ['functional', 'cache', 'closure'],
        summary: 'Cache results keyed by arguments, with a custom key resolver.',
        prompt:
          'Implement memoize(fn, resolver) returning a function that caches results. By default the cache key is built from all arguments; if a resolver is provided, use resolver(...args) as the key. Use a Map so non-string keys work.',
        hints: [
          'Default key: JSON.stringify(args) is simple but only safe for JSON-serialisable args.',
          'Check cache.has(key) before computing; store and return otherwise.',
        ],
        solution:
          'function memoize(fn, resolver) {\n  const cache = new Map()\n  return function (...args) {\n    const key = resolver ? resolver(...args) : JSON.stringify(args)\n    if (cache.has(key)) return cache.get(key)\n    const result = fn.apply(this, args)\n    cache.set(key, result)\n    return result\n  }\n}',
        explanation:
          'A Map kept in the closure stores computed results by key. We compute the key (custom or stringified args), short-circuit on a hit, and otherwise compute, store, and return. This trades memory for speed — ideal for pure, expensive functions (parsers, recursive math).',
        keyPoints: [
          'Memoization only works for pure functions (same inputs ⇒ same output).',
          'Map allows any key type and has predictable has/get semantics.',
          'A resolver decouples the cache key from the raw arguments.',
        ],
        pitfalls: ['JSON.stringify ignores functions/undefined and reorders nothing — objects with different key order produce different keys.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Rate Limiting: debounce & throttle',
    intro: 'Tame bursty calls — essential for inputs, scroll, and API guards.',
    challenges: [
      {
        id: 'js-debounce',
        title: 'debounce(fn, wait)',
        diff: 'H',
        tags: ['timing', 'closure', 'frontend', 'backend'],
        summary: 'Delay invocation until calls stop for `wait` ms; only the last call fires.',
        prompt:
          'Implement debounce(fn, wait). Each call resets a timer; fn runs only after `wait` ms have elapsed with no further calls. Preserve `this` and the latest arguments.',
        hints: [
          'Keep a timer id in the closure; clearTimeout it on every call before setting a new one.',
          'Capture this and args so the eventual call uses the most recent ones.',
        ],
        solution:
          'function debounce(fn, wait) {\n  let timer\n  return function (...args) {\n    const ctx = this\n    clearTimeout(timer)\n    timer = setTimeout(() => fn.apply(ctx, args), wait)\n  }\n}',
        explanation:
          'Every invocation cancels the pending timer and schedules a fresh one. As long as calls keep arriving within `wait`, the timer keeps resetting and fn never runs. Once a quiet gap of `wait` ms passes, the latest scheduled call fires with the most recent this/args.\n\nUse it for search-as-you-type, resize handlers, or collapsing rapid writes into one.',
        keyPoints: [
          'Debounce = "wait until it’s quiet" — fires once after the burst.',
          'clearTimeout + setTimeout in the closure is the whole mechanism.',
          'Latest-args semantics matter for inputs (you want the final keystroke).',
        ],
        pitfalls: ['A leading-edge variant (fire immediately, then ignore) is a common follow-up — track a separate flag.'],
      },
      {
        id: 'js-throttle',
        title: 'throttle(fn, limit)',
        diff: 'H',
        tags: ['timing', 'closure'],
        summary: 'Allow at most one call per `limit` ms, ignoring the rest.',
        prompt:
          'Implement throttle(fn, limit) so fn runs at most once every limit ms no matter how often the returned function is called. Contrast it with debounce in one sentence.',
        hints: [
          'Track the last execution time; only run if enough time has passed.',
          'Date.now() - last >= limit gates the call.',
        ],
        solution:
          'function throttle(fn, limit) {\n  let last = 0\n  return function (...args) {\n    const now = Date.now()\n    if (now - last >= limit) {\n      last = now\n      fn.apply(this, args)\n    }\n  }\n}\n// debounce waits for silence and fires once at the END of a burst;\n// throttle fires at a steady max rate DURING the burst.',
        explanation:
          'We store the timestamp of the last execution. A call only proceeds if at least `limit` ms have elapsed; otherwise it is dropped. This produces a steady stream of at most one call per interval — perfect for scroll/mousemove handlers or capping outbound API request rate.',
        keyPoints: [
          'Throttle = "at most once per interval"; debounce = "once after it stops".',
          'A timestamp comparison is the simplest leading-edge throttle.',
          'Choose throttle for continuous events you must sample regularly.',
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Objects: Clone, Equality, Immutability',
    intro: 'Deep operations, structural equality, and freezing.',
    challenges: [
      {
        id: 'js-deepclone',
        title: 'deepClone — handle nesting & cycles',
        diff: 'H',
        tags: ['objects', 'recursion'],
        summary: 'Recursively clone objects/arrays, preserving Date and surviving circular refs.',
        prompt:
          'Implement deepClone(value) that deep-copies nested objects and arrays, copies Date instances correctly, returns primitives as-is, and does NOT infinitely loop on circular references (a node that points back to an ancestor).',
        hints: [
          'Primitives and functions can be returned directly.',
          'Use a WeakMap to map already-cloned originals to their copies, breaking cycles.',
        ],
        solution:
          'function deepClone(value, seen = new WeakMap()) {\n  if (value === null || typeof value !== "object") return value\n  if (value instanceof Date) return new Date(value)\n  if (seen.has(value)) return seen.get(value)   // cycle guard\n\n  const copy = Array.isArray(value) ? [] : {}\n  seen.set(value, copy)\n  for (const key of Object.keys(value)) {\n    copy[key] = deepClone(value[key], seen)\n  }\n  return copy\n}',
        explanation:
          'Primitives are immutable, so we return them directly. For objects we create a matching container, record it in a WeakMap BEFORE recursing, and reuse that record if we meet the same object again — which breaks cycles. Dates need special handling because their internal value is not an enumerable property.\n\nModern engines also expose structuredClone() which does all this for you, but implementing it shows you understand recursion + identity tracking.',
        keyPoints: [
          'WeakMap of original→copy is the standard cycle-breaking trick.',
          'Register the copy before recursing so back-references resolve.',
          'Special types (Date, Map, Set, RegExp) need dedicated branches.',
        ],
        pitfalls: ['JSON.parse(JSON.stringify(x)) drops functions/undefined, mangles Dates, and throws on cycles.'],
      },
      {
        id: 'js-deepequal',
        title: 'deepEqual(a, b)',
        diff: 'H',
        tags: ['objects', 'recursion'],
        summary: 'Structural equality for nested plain objects and arrays.',
        prompt:
          'Implement deepEqual(a, b) returning true when a and b are structurally equal: same primitives (use Object.is for NaN/-0 correctness), same array contents, and same own enumerable keys/values recursively.',
        hints: [
          'Short-circuit with Object.is(a,b) for identical references and primitives.',
          'For objects: compare key counts, then every key recursively.',
        ],
        solution:
          'function deepEqual(a, b) {\n  if (Object.is(a, b)) return true\n  if (typeof a !== "object" || a === null ||\n      typeof b !== "object" || b === null) return false\n  const ka = Object.keys(a), kb = Object.keys(b)\n  if (ka.length !== kb.length) return false\n  return ka.every((k) => Object.prototype.hasOwnProperty.call(b, k) && deepEqual(a[k], b[k]))\n}',
        explanation:
          'Object.is handles the base cases including the tricky NaN === NaN (true here) and +0 vs -0 (distinct). If either side is a non-object after that, they cannot be deeply equal. For two objects we require identical key counts and then recurse on every key, also checking the key exists on b to avoid undefined matches.',
        keyPoints: [
          'Object.is fixes the two places === lies: NaN and signed zero.',
          'Equal key COUNT plus equal key VALUES = structural equality.',
          'hasOwnProperty guards against inherited or missing keys.',
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Arrays & Data Transformation',
    intro: 'Reshape data the way real APIs need it.',
    challenges: [
      {
        id: 'js-groupby',
        title: 'groupBy(arr, keyFn)',
        diff: 'M',
        tags: ['arrays', 'functional'],
        summary: 'Bucket items into an object keyed by a derived value.',
        prompt:
          'Implement groupBy(arr, keyFn) returning an object whose keys are keyFn(item) and whose values are arrays of the items that produced that key. Preserve input order within each bucket.',
        examples: [
          { in: 'groupBy([6.1,4.2,6.3], Math.floor)', out: '{ "6": [6.1,6.3], "4": [4.2] }' },
        ],
        hints: ['reduce into an accumulator object; create the bucket array on first sight of a key.'],
        solution:
          'function groupBy(arr, keyFn) {\n  return arr.reduce((acc, item) => {\n    const key = keyFn(item)\n    ;(acc[key] ||= []).push(item)\n    return acc\n  }, {})\n}',
        explanation:
          'A single reduce builds the map: for each item we compute its key, lazily initialise the bucket with the ||= logical-assignment operator, and push. Because we iterate in order, each bucket keeps source order. This is the pattern behind Object.groupBy (newer runtimes) and SQL-style grouping.',
        keyPoints: [
          'reduce is the natural tool for "collapse a list into a keyed structure".',
          '(acc[key] ||= []).push(item) is a concise create-or-append idiom.',
          'Object keys are strings — numeric keys get coerced.',
        ],
      },
      {
        id: 'js-flatten',
        title: 'flatten(arr, depth)',
        diff: 'M',
        tags: ['arrays', 'recursion'],
        summary: 'Flatten a nested array to a given depth without Array.prototype.flat.',
        prompt:
          'Implement flatten(arr, depth = Infinity) that flattens nested arrays up to `depth` levels, without using the built-in flat(). At depth 0 the array is returned unchanged.',
        examples: [
          { in: 'flatten([1,[2,[3,[4]]]], 1)', out: '[1, 2, [3,[4]]]' },
          { in: 'flatten([1,[2,[3,[4]]]])', out: '[1, 2, 3, 4]' },
        ],
        hints: ['reduce; if an element is an array and depth>0, recurse with depth-1, else keep it.'],
        solution:
          'function flatten(arr, depth = Infinity) {\n  return arr.reduce((acc, el) => {\n    if (Array.isArray(el) && depth > 0) {\n      acc.push(...flatten(el, depth - 1))\n    } else {\n      acc.push(el)\n    }\n    return acc\n  }, [])\n}',
        explanation:
          'For each element we either recurse (when it is an array and we still have depth budget) or push it as-is. Decrementing depth on each recursion enforces the level limit; the Infinity default flattens completely. Spreading the recursive result merges sublevels into the accumulator.',
        keyPoints: [
          'Track remaining depth and decrement on each descent.',
          'Array.isArray is the reliable array check (not typeof).',
          'An iterative stack-based version avoids deep recursion on huge inputs.',
        ],
      },
      {
        id: 'js-chunk',
        title: 'chunk(arr, size)',
        diff: 'E',
        tags: ['arrays'],
        summary: 'Split an array into consecutive groups of length `size`.',
        prompt:
          'Implement chunk(arr, size) splitting arr into subarrays of at most `size` elements, in order. The final chunk may be shorter. Throw or return [] for size < 1.',
        examples: [{ in: 'chunk([1,2,3,4,5], 2)', out: '[[1,2],[3,4],[5]]' }],
        hints: ['Step the index by size; slice(i, i+size) for each chunk.'],
        solution:
          'function chunk(arr, size) {\n  if (size < 1) return []\n  const out = []\n  for (let i = 0; i < arr.length; i += size) {\n    out.push(arr.slice(i, i + size))\n  }\n  return out\n}',
        explanation:
          'Advancing i by size and slicing a window of length size walks the array in fixed strides; slice clamps automatically at the end, so the last chunk is naturally shorter when the length is not a multiple of size.',
        keyPoints: ['slice is end-exclusive and clamps past the array length.', 'Stride loops (i += size) are the cleanest fixed-window pattern.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Generators, Iterators & Lazy Sequences',
    intro: 'Custom iteration protocols and pull-based, lazy data.',
    challenges: [
      {
        id: 'js-range-iterator',
        title: 'Make an object iterable',
        diff: 'M',
        tags: ['iterator', 'symbol'],
        summary: 'Implement Symbol.iterator so a range object works in for…of and spread.',
        prompt:
          'Create range(start, end, step = 1) returning an object usable in for…of and with the spread operator, yielding start, start+step, … up to but not including end. Do it by implementing the iterator protocol directly (no generator).',
        hints: [
          'An iterable has a [Symbol.iterator]() method returning an iterator.',
          'An iterator has next() returning { value, done }.',
        ],
        solution:
          'function range(start, end, step = 1) {\n  return {\n    [Symbol.iterator]() {\n      let current = start\n      return {\n        next() {\n          if (current < end) {\n            const value = current\n            current += step\n            return { value, done: false }\n          }\n          return { value: undefined, done: true }\n        },\n      }\n    },\n  }\n}\n// [...range(0, 5)] → [0,1,2,3,4]',
        explanation:
          'for…of and spread look up the [Symbol.iterator] method to obtain an iterator, then call next() repeatedly until done is true. By returning fresh iterator state on each [Symbol.iterator]() call, the range can be iterated multiple times independently.',
        keyPoints: [
          'Iterable = has [Symbol.iterator](); Iterator = has next()→{value,done}.',
          'for…of, spread, destructuring, and Array.from all consume iterables.',
          'Return new iterator state per call so the iterable is reusable.',
        ],
      },
      {
        id: 'js-gen-infinite',
        title: 'Lazy infinite sequence with a generator',
        diff: 'H',
        tags: ['generator', 'lazy'],
        summary: 'Generate naturals lazily and take(n) the first n without computing the rest.',
        prompt:
          'Use a generator to produce an infinite sequence of natural numbers, then write take(iter, n) that pulls just the first n values. Demonstrate that nothing beyond n is ever computed.',
        hints: [
          'function* naturals(){ let i=0; while(true) yield i++ } never returns on its own.',
          'take must stop calling next() after n values — generators are pull-based, so unpulled values never run.',
        ],
        solution:
          'function* naturals() {\n  let i = 0\n  while (true) yield i++\n}\n\nfunction take(iterable, n) {\n  const it = iterable[Symbol.iterator]()\n  const out = []\n  for (let k = 0; k < n; k++) {\n    const { value, done } = it.next()\n    if (done) break\n    out.push(value)\n  }\n  return out\n}\n// take(naturals(), 3) → [0,1,2]  (the loop never runs to "infinity")',
        explanation:
          'A generator’s body only advances when next() is called — it is lazy and pull-based. The infinite while(true) loop is safe because we only ever pull n values; the generator pauses at each yield and is simply never resumed past n. This enables modelling infinite or expensive streams without precomputing them.',
        keyPoints: [
          'Generators are lazy: code runs only on demand between yields.',
          'Pull-based iteration makes infinite sequences practical.',
          'yield suspends with state intact; next() resumes it.',
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Proxy, Reflect & Metaprogramming',
    intro: 'Intercept operations to build validation, defaults, and reactivity.',
    challenges: [
      {
        id: 'js-proxy-default',
        title: 'Auto-default object via Proxy',
        diff: 'M',
        tags: ['proxy', 'metaprogramming'],
        summary: 'Return a default for any missing property instead of undefined.',
        prompt:
          'Use a Proxy to build withDefault(obj, fallback) so reading a property that does not exist returns `fallback` rather than undefined, while existing properties read normally and writes pass through.',
        hints: ['Trap the get handler; check Reflect.has / the property presence before returning the default.'],
        solution:
          'function withDefault(obj, fallback) {\n  return new Proxy(obj, {\n    get(target, prop, receiver) {\n      return prop in target ? Reflect.get(target, prop, receiver) : fallback\n    },\n  })\n}\n// withDefault({a:1}, 0).b → 0 ; .a → 1',
        explanation:
          'The get trap intercepts every property read. We check whether the property exists on the target; if so we defer to Reflect.get (the canonical default behaviour, preserving the receiver for getters), otherwise we return the fallback. Writes are untrapped, so they hit the target directly.',
        keyPoints: [
          'Proxy traps (get/set/has/deleteProperty…) intercept fundamental operations.',
          'Reflect mirrors trap names and provides correct default behaviour.',
          'Great for defaults, validation, logging, and reactivity systems.',
        ],
      },
      {
        id: 'js-proxy-validate',
        title: 'Validation Proxy (set trap)',
        diff: 'H',
        tags: ['proxy', 'validation'],
        summary: 'Reject invalid assignments at write time using a schema of validators.',
        prompt:
          'Build validated(obj, schema) where schema maps property names to predicate functions. Assigning a value that fails its predicate must throw a TypeError; valid assignments succeed. Properties without a validator are allowed.',
        hints: ['Trap set; if a validator exists and returns false, throw; otherwise Reflect.set.'],
        solution:
          'function validated(obj, schema) {\n  return new Proxy(obj, {\n    set(target, prop, value, receiver) {\n      const check = schema[prop]\n      if (check && !check(value)) {\n        throw new TypeError("Invalid value for " + String(prop))\n      }\n      return Reflect.set(target, prop, value, receiver)\n    },\n  })\n}\n// const u = validated({}, { age: (v) => Number.isInteger(v) && v >= 0 })\n// u.age = -1  // throws',
        explanation:
          'The set trap runs on every assignment. We look up a validator for the property; if present and the value fails, we throw, preventing the write. Otherwise Reflect.set performs the real assignment and returns true (set traps must return a truthy success flag in strict mode).',
        keyPoints: [
          'set traps enforce invariants at the boundary, centralising validation.',
          'A set trap must return true on success or strict-mode code throws.',
          'Schema-as-data keeps validators declarative and reusable.',
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Coercion & Tricky Output',
    intro: 'The gotchas interviewers love — know exactly why each behaves so.',
    challenges: [
      {
        id: 'js-coercion-quiz',
        title: 'Coercion predictions',
        diff: 'M',
        tags: ['coercion', 'output'],
        summary: 'Predict the result of several notorious coercion expressions and justify each.',
        prompt:
          'State the result of each expression and the coercion rule behind it:\nA) [] + []\nB) [] + {}\nC) 0.1 + 0.2 === 0.3\nD) [1,2,3] + [4,5,6]\nE) null == undefined\nF) NaN === NaN',
        hints: [
          '+ with any operand that stringifies to a primitive becomes string concatenation; arrays/objects go through toString.',
          'IEEE-754 doubles cannot represent 0.1 exactly.',
        ],
        solution:
          '// A) ""          [].toString() is "" → "" + "" = ""\n// B) "[object Object]"   "" + "[object Object]"\n// C) false        0.1+0.2 = 0.30000000000000004\n// D) "1,2,34,5,6" arrays stringify and concatenate\n// E) true         null and undefined are loosely equal only to each other\n// F) false        NaN is not equal to anything, including itself',
        explanation:
          'The + operator, when either operand is not a number after ToPrimitive, performs string concatenation. Arrays ToPrimitive to their comma-joined toString, objects to "[object Object]". 0.1 and 0.2 are binary-fraction approximations whose sum rounds to 0.30000000000000004, so strict equality with 0.3 fails. null == undefined is a special-cased true; NaN is defined to be unequal to everything.',
        keyPoints: [
          'Binary + prefers string concat once a non-number primitive appears.',
          'Use Number.EPSILON tolerance for float comparisons, never ===.',
          'NaN checks need Number.isNaN; loose == has only the null/undefined special case.',
        ],
        pitfalls: ['Relying on implicit coercion in real code is error-prone — be explicit (String(), Number()).'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'OOP Patterns & Node Backend Logic',
    intro: 'EventEmitter, LRU cache, and concurrency control you will ship.',
    challenges: [
      {
        id: 'js-eventemitter',
        title: 'Build a tiny EventEmitter',
        diff: 'H',
        tags: ['oop', 'observer', 'backend'],
        summary: 'on / off / once / emit — the pub-sub core of Node.',
        prompt:
          'Implement an EventEmitter class with on(event, cb), off(event, cb), once(event, cb) (auto-removes after first emit), and emit(event, ...args) that calls every listener for the event in registration order. emit returns whether any listener existed.',
        hints: [
          'Store a Map of event → array (or Set) of listeners.',
          'For once, wrap the callback so it removes itself before/after calling the real one.',
        ],
        solution:
          'class EventEmitter {\n  constructor() { this.events = new Map() }\n  on(event, cb) {\n    if (!this.events.has(event)) this.events.set(event, [])\n    this.events.get(event).push(cb)\n    return this\n  }\n  off(event, cb) {\n    const list = this.events.get(event)\n    if (list) this.events.set(event, list.filter((f) => f !== cb))\n    return this\n  }\n  once(event, cb) {\n    const wrap = (...args) => { this.off(event, wrap); cb(...args) }\n    wrap.original = cb\n    return this.on(event, wrap)\n  }\n  emit(event, ...args) {\n    const list = this.events.get(event)\n    if (!list || list.length === 0) return false\n    ;[...list].forEach((fn) => fn(...args))\n    return true\n  }\n}',
        explanation:
          'A Map keyed by event name holds an ordered list of listeners. on appends, off filters out the target listener, and emit invokes a COPY of the list (so a listener that unsubscribes during emit does not corrupt the iteration). once wraps the callback so the first emit removes the wrapper then calls the real handler — storing .original lets off(cb) find wrapped listeners too if extended.',
        keyPoints: [
          'Observer/pub-sub decouples producers from consumers.',
          'Iterate a copy of the listener list to stay safe under mutation.',
          'once = self-removing wrapper around the user callback.',
        ],
        pitfalls: ['Emitting during iteration without copying can skip or double-call listeners.'],
      },
      {
        id: 'js-async-pool',
        title: 'asyncPool — bounded concurrency',
        diff: 'X',
        tags: ['async', 'concurrency', 'backend'],
        summary: 'Run async tasks with at most N in flight at once, preserving result order.',
        prompt:
          'Implement asyncPool(limit, items, iteratorFn) that runs iteratorFn(item) over all items but never more than `limit` promises in flight simultaneously. Resolve with results in input order once all complete. This is the core of safe batch processing (e.g. limiting concurrent DB/API calls).',
        hints: [
          'Start tasks, and whenever one finishes, start the next pending one.',
          'Track in-flight promises; when the set reaches limit, await Promise.race before adding more.',
        ],
        solution:
          'async function asyncPool(limit, items, iteratorFn) {\n  const results = new Array(items.length)\n  const executing = new Set()\n\n  for (let i = 0; i < items.length; i++) {\n    const p = Promise.resolve(iteratorFn(items[i], i)).then((res) => {\n      results[i] = res\n      executing.delete(p)\n    })\n    executing.add(p)\n    if (executing.size >= limit) {\n      await Promise.race(executing)   // wait for a slot to free up\n    }\n  }\n  await Promise.all(executing)        // drain the tail\n  return results\n}',
        explanation:
          'We launch tasks one by one, writing each result at its input index. A Set tracks the currently executing promises; each task removes itself on completion. Whenever the in-flight count reaches the limit we await Promise.race, which resolves as soon as ANY task finishes — freeing exactly one slot before we launch the next. After the loop we await the remaining tail.\n\nThis caps peak concurrency (protecting downstream services and memory) while still overlapping work for throughput, and index-based writes keep output ordered.',
        keyPoints: [
          'Promise.race resolves on the first settle — perfect for "wait for a free slot".',
          'Bounded concurrency prevents overwhelming DBs, APIs, or file handles.',
          'Index-keyed results decouple completion order from output order.',
        ],
        pitfalls: ['A rejecting task will reject Promise.all/race — wrap iteratorFn in try/catch if you want partial results.'],
      },
      {
        id: 'js-lru',
        title: 'LRU cache in O(1)',
        diff: 'X',
        tags: ['cache', 'data-structures', 'backend'],
        summary: 'get/put with capacity eviction of the least-recently-used key.',
        prompt:
          'Implement an LRUCache(capacity) with get(key) and put(key, value), both O(1) average. When inserting beyond capacity, evict the least-recently-used entry. Accessing or updating a key marks it most-recently-used. (A JS Map preserves insertion order — exploit that.)',
        hints: [
          'A Map iterates in insertion order; map.keys().next().value is the oldest key.',
          'On access, delete then re-set the key to move it to the "newest" end.',
        ],
        solution:
          'class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity\n    this.map = new Map()\n  }\n  get(key) {\n    if (!this.map.has(key)) return -1\n    const val = this.map.get(key)\n    this.map.delete(key)\n    this.map.set(key, val)        // move to most-recent end\n    return val\n  }\n  put(key, value) {\n    if (this.map.has(key)) this.map.delete(key)\n    else if (this.map.size >= this.capacity) {\n      const oldest = this.map.keys().next().value\n      this.map.delete(oldest)     // evict LRU (first key)\n    }\n    this.map.set(key, value)\n  }\n}',
        explanation:
          'A Map remembers insertion order, so the first key it yields is the least-recently-used and the last inserted is the most-recent. get re-inserts the key (delete + set) to bump it to the newest position. put removes the existing key (to refresh order) or, if full, deletes the oldest key from the front before inserting. Every operation is O(1) because Map delete/set/has are constant time and we never scan.',
        keyPoints: [
          'Map insertion-order + delete/re-set gives O(1) LRU without a manual linked list.',
          'map.keys().next().value is the oldest entry.',
          'The classic interview version uses a hash map + doubly linked list — Map hides that for you.',
        ],
        pitfalls: ['Forgetting to refresh order on get turns it into a plain FIFO cache, not LRU.'],
      },
    ],
  },
]

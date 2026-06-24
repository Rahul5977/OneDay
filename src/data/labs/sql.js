// SQL Practice Lab — query challenges from fundamentals to advanced analytics.
// Each challenge ships its own schema + sample rows so you can reason about the
// expected output, attempt the query, then check the reference solution.
// Dialect: standard SQL (notes call out PostgreSQL/MySQL differences).
//
// Schema (consumed by ChallengeModal):
//   challenge = { id, title, diff, tags, summary, prompt, setup, examples,
//                 hints, solution, explanation, keyPoints, pitfalls }
//   For SQL, `setup` holds the schema + sample data, and `solution` is the query.

export const LAB = {
  key: 'sqllab',
  name: 'SQL Lab',
  tag: 'joins · aggregation · subqueries · windows · CTEs',
  lang: 'sql',
  blurb: 'Query challenges from SELECT fundamentals to window functions and recursive CTEs.',
}

export const SECTIONS = [
  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'SELECT, Filtering & Sorting',
    intro: 'WHERE, DISTINCT, ORDER BY, LIMIT, NULL handling.',
    challenges: [
      {
        id: 'sql-filter-basics',
        title: 'Active users in a city, newest first',
        diff: 'E',
        tags: ['select', 'where', 'order-by'],
        summary: 'Filter on multiple conditions and sort the result.',
        prompt:
          'From Users, return the name and created_at of users who are active (status = \'active\') AND live in \'Pune\', ordered by created_at descending. Return only the 5 most recent.',
        setup:
          'Users(id, name, city, status, created_at)\n\n id | name  | city   | status   | created_at\n----+-------+--------+----------+------------\n 1  | Asha  | Pune   | active   | 2024-02-01\n 2  | Bilal | Mumbai | active   | 2024-03-10\n 3  | Chen  | Pune   | inactive | 2024-01-05\n 4  | Diya  | Pune   | active   | 2024-04-20',
        examples: [{ out: 'Diya | 2024-04-20\nAsha | 2024-02-01' }],
        hints: ['Combine conditions with AND.', 'ORDER BY ... DESC then LIMIT 5.'],
        solution:
          'SELECT name, created_at\nFROM Users\nWHERE status = \'active\'\n  AND city = \'Pune\'\nORDER BY created_at DESC\nLIMIT 5;',
        explanation:
          'WHERE filters rows before they are returned; combining predicates with AND requires both to hold. ORDER BY created_at DESC sorts newest first, and LIMIT caps the row count (use TOP 5 in SQL Server, FETCH FIRST 5 ROWS ONLY in standard SQL).',
        keyPoints: [
          'WHERE runs before ORDER BY/LIMIT in logical processing.',
          'String literals use single quotes in SQL.',
          'LIMIT/FETCH controls result size after sorting.',
        ],
      },
      {
        id: 'sql-null-handling',
        title: 'Coalesce missing phone numbers',
        diff: 'E',
        tags: ['null', 'coalesce'],
        summary: 'Treat NULL correctly with IS NULL and COALESCE.',
        prompt:
          'From Contacts, return name and a phone column that shows the phone if present, otherwise the text \'N/A\'. Also, separately, explain why WHERE phone = NULL returns no rows.',
        setup:
          'Contacts(id, name, phone)\n\n id | name | phone\n----+------+-----------\n 1  | Ravi | 9876543210\n 2  | Sara | NULL\n 3  | Tom  | 9123456780',
        examples: [{ out: 'Ravi | 9876543210\nSara | N/A\nTom  | 9123456780' }],
        hints: ['COALESCE returns the first non-NULL argument.', 'NULL is unknown — comparisons with = are never true.'],
        solution:
          'SELECT name, COALESCE(phone, \'N/A\') AS phone\nFROM Contacts;\n\n-- WHERE phone = NULL yields nothing because NULL = NULL is UNKNOWN,\n-- not TRUE. Use WHERE phone IS NULL instead.',
        explanation:
          'NULL represents an unknown value, so any comparison with = or <> evaluates to UNKNOWN (filtered out like false). You must use IS NULL / IS NOT NULL to test for it. COALESCE(a, b, …) returns the first non-NULL argument, the idiomatic way to supply defaults.',
        keyPoints: [
          'NULL = NULL is UNKNOWN; use IS NULL / IS NOT NULL.',
          'COALESCE picks the first non-NULL value.',
          'Aggregates like COUNT(col) skip NULLs, but COUNT(*) counts all rows.',
        ],
        pitfalls: ['NOT IN (subquery) silently returns nothing if the subquery contains a NULL.'],
      },
      {
        id: 'sql-distinct',
        title: 'Distinct cities with orders',
        diff: 'E',
        tags: ['distinct'],
        summary: 'Eliminate duplicates with DISTINCT.',
        prompt:
          'From Orders, list each distinct city that has at least one order, sorted alphabetically.',
        setup:
          'Orders(id, city, amount)\n\n id | city   | amount\n----+--------+-------\n 1  | Pune   | 500\n 2  | Mumbai | 300\n 3  | Pune   | 700\n 4  | Delhi  | 200',
        examples: [{ out: 'Delhi\nMumbai\nPune' }],
        hints: ['DISTINCT removes duplicate rows from the selected columns.'],
        solution:
          'SELECT DISTINCT city\nFROM Orders\nORDER BY city;',
        explanation:
          'DISTINCT collapses duplicate rows across the selected columns into one. Here three orders span three unique cities (Pune appears twice but is returned once). ORDER BY then alphabetises.',
        keyPoints: ['DISTINCT applies to the whole selected row, not a single column in isolation.', 'GROUP BY city would produce the same distinct set and lets you aggregate too.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Aggregation: GROUP BY & HAVING',
    intro: 'COUNT/SUM/AVG, grouping, and filtering groups.',
    challenges: [
      {
        id: 'sql-groupby-count',
        title: 'Orders and revenue per city',
        diff: 'E',
        tags: ['group-by', 'aggregate'],
        summary: 'Aggregate counts and sums per group.',
        prompt:
          'From Orders, return each city with its number of orders and total amount, ordered by total amount descending.',
        setup:
          'Orders(id, city, amount)\n\n id | city   | amount\n----+--------+-------\n 1  | Pune   | 500\n 2  | Mumbai | 300\n 3  | Pune   | 700\n 4  | Delhi  | 200',
        examples: [{ out: 'Pune   | 2 | 1200\nMumbai | 1 |  300\nDelhi  | 1 |  200' }],
        hints: ['GROUP BY city, then COUNT(*) and SUM(amount).'],
        solution:
          'SELECT city,\n       COUNT(*)      AS orders,\n       SUM(amount)   AS total_amount\nFROM Orders\nGROUP BY city\nORDER BY total_amount DESC;',
        explanation:
          'GROUP BY partitions rows into groups sharing the same city; aggregate functions then collapse each group into a single summary row. COUNT(*) counts rows per group and SUM adds the amounts. Every non-aggregated column in the SELECT must appear in GROUP BY.',
        keyPoints: [
          'Each SELECT column is either grouped or aggregated.',
          'COUNT(*) counts rows; COUNT(col) ignores NULLs.',
          'ORDER BY can reference an aggregate alias.',
        ],
      },
      {
        id: 'sql-having',
        title: 'Cities with more than one order',
        diff: 'M',
        tags: ['group-by', 'having'],
        summary: 'Filter groups (not rows) with HAVING.',
        prompt:
          'Return cities that have strictly more than one order, with their order count. Explain why this filter cannot go in WHERE.',
        setup:
          'Orders(id, city, amount)  -- same data as the previous challenge',
        examples: [{ out: 'Pune | 2' }],
        hints: ['WHERE filters rows before grouping; HAVING filters after aggregation.'],
        solution:
          'SELECT city, COUNT(*) AS orders\nFROM Orders\nGROUP BY city\nHAVING COUNT(*) > 1;',
        explanation:
          'WHERE is evaluated before rows are grouped, so it cannot reference COUNT(*), which only exists per group. HAVING runs after GROUP BY and can filter on aggregate results. Logical order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.',
        keyPoints: [
          'WHERE filters individual rows; HAVING filters groups.',
          'HAVING can use aggregate functions; WHERE cannot.',
          'Knowing the logical processing order explains many SQL rules.',
        ],
        pitfalls: ['Putting an aggregate in WHERE is a syntax error — move it to HAVING.'],
      },
      {
        id: 'sql-avg-per-group',
        title: 'Departments with avg salary above 60k',
        diff: 'M',
        tags: ['group-by', 'having', 'aggregate'],
        summary: 'Combine AVG with a HAVING threshold.',
        prompt:
          'From Employees, return each department whose AVERAGE salary exceeds 60000, showing the department and its rounded average salary, highest average first.',
        setup:
          'Employees(id, name, dept, salary)\n\n id | name | dept | salary\n----+------+------+-------\n 1  | A    | Eng  | 90000\n 2  | B    | Eng  | 50000\n 3  | C    | HR   | 40000\n 4  | D    | HR   | 45000\n 5  | E    | Sales| 70000',
        examples: [{ out: 'Sales | 70000\nEng   | 70000' }],
        hints: ['GROUP BY dept; HAVING AVG(salary) > 60000.', 'ROUND(AVG(salary)) for a clean number.'],
        solution:
          'SELECT dept, ROUND(AVG(salary)) AS avg_salary\nFROM Employees\nGROUP BY dept\nHAVING AVG(salary) > 60000\nORDER BY avg_salary DESC;',
        explanation:
          'AVG(salary) per department yields Eng 70000, HR 42500, Sales 70000. HAVING keeps only groups above 60000 (Eng and Sales). ROUND tidies the output. The aggregate in HAVING is recomputed per group independently of the SELECT list.',
        keyPoints: ['Aggregate inside HAVING is fine even if not selected.', 'ROUND/CAST control numeric presentation.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'JOINs',
    intro: 'INNER, LEFT, self-joins, and anti-joins.',
    challenges: [
      {
        id: 'sql-inner-join',
        title: 'Employees with their department names',
        diff: 'E',
        tags: ['join', 'inner-join'],
        summary: 'Match rows across two tables on a key.',
        prompt:
          'Return each employee’s name alongside their department name by joining Employees to Departments on dept_id.',
        setup:
          'Employees(id, name, dept_id)        Departments(id, name)\n\n id | name | dept_id            id | name\n----+------+--------            ----+------\n 1  | A    | 10                 10 | Eng\n 2  | B    | 20                 20 | HR\n 3  | C    | 10                 30 | Sales',
        examples: [{ out: 'A | Eng\nB | HR\nC | Eng' }],
        hints: ['INNER JOIN keeps only rows with a match on both sides.', 'Qualify ambiguous column names with table aliases.'],
        solution:
          'SELECT e.name AS employee, d.name AS department\nFROM Employees e\nINNER JOIN Departments d ON e.dept_id = d.id;',
        explanation:
          'INNER JOIN pairs each employee row with the department row sharing the same id, dropping unmatched rows on either side. Table aliases (e, d) disambiguate the two `name` columns. Departments 30 (Sales) has no employees and is excluded.',
        keyPoints: [
          'INNER JOIN = intersection on the join condition.',
          'Alias tables and qualify columns to avoid ambiguity.',
          'The ON clause defines how rows are matched.',
        ],
      },
      {
        id: 'sql-left-join-antijoin',
        title: 'Departments with no employees',
        diff: 'M',
        tags: ['join', 'left-join', 'anti-join'],
        summary: 'Use LEFT JOIN + IS NULL to find unmatched rows.',
        prompt:
          'Return the names of departments that currently have NO employees (an anti-join).',
        setup:
          'Employees(id, name, dept_id)        Departments(id, name)\n same data as previous challenge\n -- Dept 30 (Sales) has no employees',
        examples: [{ out: 'Sales' }],
        hints: ['LEFT JOIN keeps all departments; unmatched employee columns become NULL.', 'Filter WHERE e.id IS NULL to keep only the unmatched.'],
        solution:
          'SELECT d.name\nFROM Departments d\nLEFT JOIN Employees e ON e.dept_id = d.id\nWHERE e.id IS NULL;',
        explanation:
          'A LEFT JOIN returns every department, attaching employee columns where they match and NULLs where they do not. Departments with no employees therefore have NULL in the employee columns, and filtering WHERE e.id IS NULL isolates exactly those — the anti-join pattern.',
        keyPoints: [
          'LEFT JOIN preserves all left-table rows.',
          'IS NULL on the right key = "rows with no match" (anti-join).',
          'NOT EXISTS is an equivalent, often-faster alternative.',
        ],
        pitfalls: ['Filtering the right table in WHERE (instead of IS NULL on its key) silently turns a LEFT JOIN back into an INNER JOIN.'],
      },
      {
        id: 'sql-self-join',
        title: 'Employees earning more than their manager',
        diff: 'H',
        tags: ['join', 'self-join'],
        summary: 'Join a table to itself to compare related rows.',
        prompt:
          'Each employee has a manager_id pointing to another employee. Return the names of employees whose salary is greater than their manager’s salary.',
        setup:
          'Employees(id, name, salary, manager_id)\n\n id | name  | salary | manager_id\n----+-------+--------+-----------\n 1  | Joe   | 70000  | 3\n 2  | Henry | 80000  | 4\n 3  | Sam   | 60000  | NULL\n 4  | Max   | 90000  | NULL',
        examples: [{ out: 'Joe' }],
        hints: ['Join Employees e (worker) to Employees m (manager) on e.manager_id = m.id.', 'Then compare e.salary > m.salary.'],
        solution:
          'SELECT e.name\nFROM Employees e\nJOIN Employees m ON e.manager_id = m.id\nWHERE e.salary > m.salary;',
        explanation:
          'A self-join treats one table as two logical copies via aliases: e is the worker, m is their manager (linked by e.manager_id = m.id). The WHERE clause then compares the two salaries on the same joined row. Joe (70000) reports to Sam (60000) and so qualifies; Henry (80000) reports to Max (90000) and does not.',
        keyPoints: [
          'Self-joins compare rows within the same table using two aliases.',
          'Hierarchies (manager/report, parent/child) are a classic use case.',
          'INNER self-join here naturally excludes top managers (NULL manager_id).',
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Subqueries & EXISTS',
    intro: 'Scalar, IN, correlated subqueries, and EXISTS.',
    challenges: [
      {
        id: 'sql-scalar-subquery',
        title: 'Employees above the company average',
        diff: 'M',
        tags: ['subquery', 'scalar'],
        summary: 'Use a scalar subquery in WHERE.',
        prompt:
          'Return the names and salaries of employees who earn more than the overall average salary across all employees.',
        setup:
          'Employees(id, name, salary)\n\n id | name | salary\n----+------+-------\n 1  | A    | 90000\n 2  | B    | 50000\n 3  | C    | 40000\n 4  | D    | 60000   -- avg = 60000',
        examples: [{ out: 'A | 90000' }],
        hints: ['A subquery that returns one value can be compared with >.', 'Compute AVG(salary) in the subquery.'],
        solution:
          'SELECT name, salary\nFROM Employees\nWHERE salary > (SELECT AVG(salary) FROM Employees);',
        explanation:
          'The inner SELECT AVG(salary) returns a single scalar (60000) computed over the whole table. The outer query compares each row’s salary against it. Strictly greater than excludes D (exactly 60000), leaving A. The subquery runs once and its value is reused for every row.',
        keyPoints: [
          'A scalar subquery returns exactly one row/one column.',
          'It can appear anywhere a single value is expected.',
          'Aggregates in the subquery summarise the whole (or a correlated) set.',
        ],
      },
      {
        id: 'sql-correlated-exists',
        title: 'Customers who placed at least one order',
        diff: 'H',
        tags: ['subquery', 'correlated', 'exists'],
        summary: 'EXISTS with a correlated subquery.',
        prompt:
          'Return customer names who have placed at least one order, using EXISTS (not a JOIN). Then state how NOT EXISTS would find customers with no orders.',
        setup:
          'Customers(id, name)            Orders(id, customer_id, amount)\n\n id | name              id | customer_id | amount\n----+------             ----+-------------+-------\n 1  | Anu               1  | 1           | 200\n 2  | Bob               2  | 1           | 150\n 3  | Cara              3  | 3           | 500',
        examples: [{ out: 'Anu\nCara' }],
        hints: ['EXISTS is true if the correlated subquery returns any row.', 'Correlate on o.customer_id = c.id.'],
        solution:
          'SELECT c.name\nFROM Customers c\nWHERE EXISTS (\n  SELECT 1 FROM Orders o WHERE o.customer_id = c.id\n);\n\n-- Customers with NO orders: change EXISTS to NOT EXISTS → returns Bob.',
        explanation:
          'A correlated subquery references the outer row (c.id), so it is conceptually re-evaluated per customer. EXISTS short-circuits to true as soon as one matching order is found, making it efficient — SELECT 1 is conventional since the projected value is irrelevant. NOT EXISTS inverts it to find customers with zero orders.',
        keyPoints: [
          'EXISTS tests for presence of any matching row and stops at the first.',
          'Correlated subqueries depend on the current outer row.',
          'NOT EXISTS is the robust anti-join (NULL-safe, unlike NOT IN).',
        ],
        pitfalls: ['NOT IN with a NULL in the list returns no rows — prefer NOT EXISTS.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Window Functions',
    intro: 'ROW_NUMBER, RANK, running totals, LAG/LEAD.',
    challenges: [
      {
        id: 'sql-rownumber-dedup',
        title: 'Keep the latest row per user (dedup)',
        diff: 'H',
        tags: ['window', 'row-number', 'dedup'],
        summary: 'Use ROW_NUMBER partitioned to pick one row per group.',
        prompt:
          'Logins has multiple rows per user. Return only the most recent login row per user_id (highest login_at). Use a window function.',
        setup:
          'Logins(id, user_id, login_at)\n\n id | user_id | login_at\n----+---------+------------\n 1  | 7       | 2024-01-01\n 2  | 7       | 2024-03-01\n 3  | 9       | 2024-02-15\n 4  | 9       | 2024-02-01',
        examples: [{ out: 'id 2 (user 7, 2024-03-01)\nid 3 (user 9, 2024-02-15)' }],
        hints: ['ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_at DESC).', 'Wrap in a subquery/CTE and keep rn = 1.'],
        solution:
          'WITH ranked AS (\n  SELECT *,\n         ROW_NUMBER() OVER (\n           PARTITION BY user_id ORDER BY login_at DESC\n         ) AS rn\n  FROM Logins\n)\nSELECT id, user_id, login_at\nFROM ranked\nWHERE rn = 1;',
        explanation:
          'ROW_NUMBER assigns 1,2,3… within each PARTITION BY user_id, ordered by login_at descending — so the latest login gets rn = 1 in every partition. You cannot filter a window function in WHERE directly (it is computed after WHERE), so we compute it in a CTE and filter rn = 1 in the outer query.',
        keyPoints: [
          'PARTITION BY defines independent groups; ORDER BY ranks within each.',
          'Window functions are evaluated after WHERE/GROUP BY — filter them in an outer query/CTE.',
          'ROW_NUMBER is the go-to for "one row per group" / dedup.',
        ],
        pitfalls: ['ROW_NUMBER breaks ties arbitrarily; RANK/DENSE_RANK keep ties if you need them.'],
      },
      {
        id: 'sql-running-total',
        title: 'Running total of daily sales',
        diff: 'H',
        tags: ['window', 'running-total', 'frame'],
        summary: 'Cumulative SUM with an ordered window frame.',
        prompt:
          'From Sales, return each day, that day’s amount, and the cumulative running total of amount ordered by day.',
        setup:
          'Sales(day, amount)\n\n day        | amount\n-----------+-------\n 2024-01-01 | 100\n 2024-01-02 | 50\n 2024-01-03 | 200',
        examples: [{ out: '2024-01-01 | 100 | 100\n2024-01-02 |  50 | 150\n2024-01-03 | 200 | 350' }],
        hints: ['SUM(amount) OVER (ORDER BY day) accumulates up to the current row.'],
        solution:
          'SELECT day,\n       amount,\n       SUM(amount) OVER (\n         ORDER BY day\n         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n       ) AS running_total\nFROM Sales;',
        explanation:
          'An aggregate with an OVER(ORDER BY …) clause becomes a window function that computes over a frame relative to each row. The explicit frame ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW sums every row from the start up to the current one, producing a running total. (ORDER BY alone defaults to this RANGE frame, but stating ROWS is clearer and avoids tie surprises.)',
        keyPoints: [
          'OVER(ORDER BY …) turns an aggregate into a cumulative calculation.',
          'The frame clause (ROWS BETWEEN …) defines which rows feed each result.',
          'Window functions retain every input row, unlike GROUP BY.',
        ],
      },
      {
        id: 'sql-lag-diff',
        title: 'Day-over-day change with LAG',
        diff: 'H',
        tags: ['window', 'lag'],
        summary: 'Compare each row to the previous one using LAG.',
        prompt:
          'From Sales, return each day, its amount, and the difference versus the previous day’s amount (NULL for the first day).',
        setup:
          'Sales(day, amount)  -- same data as the running-total challenge',
        examples: [{ out: '2024-01-01 | 100 | NULL\n2024-01-02 |  50 | -50\n2024-01-03 | 200 | 150' }],
        hints: ['LAG(amount) OVER (ORDER BY day) gives the previous row’s amount.'],
        solution:
          'SELECT day,\n       amount,\n       amount - LAG(amount) OVER (ORDER BY day) AS diff\nFROM Sales;',
        explanation:
          'LAG(amount) OVER (ORDER BY day) returns the amount from the previous row in the ordered window; subtracting it from the current amount yields the day-over-day delta. The first row has no predecessor, so LAG is NULL and the difference is NULL. LEAD is the symmetric look-ahead function.',
        keyPoints: [
          'LAG/LEAD access prior/next rows without a self-join.',
          'They respect PARTITION BY for per-group sequences.',
          'A second argument sets the offset; a third sets a default for edges.',
        ],
      },
      {
        id: 'sql-nth-highest',
        title: 'Nth highest salary (with ties)',
        diff: 'X',
        tags: ['window', 'dense-rank'],
        summary: 'DENSE_RANK to find the 2nd-highest distinct salary.',
        prompt:
          'Return the 2nd highest DISTINCT salary from Employees. If it does not exist, return NULL. Handle duplicate salaries correctly.',
        setup:
          'Employees(id, salary)\n\n id | salary\n----+-------\n 1  | 100\n 2  | 100\n 3  | 90\n 4  | 80   -- distinct salaries: 100, 90, 80 → 2nd = 90',
        examples: [{ out: '90' }],
        hints: ['DENSE_RANK treats equal salaries as the same rank (no gaps).', 'Filter rank = 2; wrap in MAX/aggregate so a missing rank yields NULL.'],
        solution:
          'SELECT MAX(salary) AS second_highest\nFROM (\n  SELECT salary,\n         DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n  FROM Employees\n) t\nWHERE rnk = 2;',
        explanation:
          'DENSE_RANK orders salaries descending and assigns the same rank to equal values WITHOUT skipping numbers, so the two 100s are rank 1, 90 is rank 2, 80 is rank 3 — exactly the distinct ranking we want. Filtering rnk = 2 selects 90. Wrapping in MAX guarantees a single value, and importantly returns NULL when no rank 2 exists (empty set → MAX is NULL).',
        keyPoints: [
          'DENSE_RANK = ranking with ties and no gaps (1,1,2,3).',
          'RANK leaves gaps (1,1,3); ROW_NUMBER never ties (1,2,3).',
          'Aggregating the filtered result makes "missing Nth" return NULL gracefully.',
        ],
        pitfalls: ['LIMIT 1 OFFSET 1 fails with duplicate top salaries — it would return 100, not 90.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'CTEs & Recursive Queries',
    intro: 'Readable query decomposition and hierarchy traversal.',
    challenges: [
      {
        id: 'sql-cte-basic',
        title: 'Top spender per city via CTE',
        diff: 'H',
        tags: ['cte', 'window'],
        summary: 'Decompose a query into a named CTE for clarity.',
        prompt:
          'For each city, return the customer who spent the most (max total amount). Use a CTE to compute per-customer totals, then pick the top customer per city.',
        setup:
          'Orders(customer, city, amount)\n\n customer | city | amount\n----------+------+-------\n Anu      | Pune | 300\n Anu      | Pune | 200\n Bob      | Pune | 400\n Cara     | Goa  | 250',
        examples: [{ out: 'Pune | Anu  | 500\nGoa  | Cara | 250' }],
        hints: ['CTE 1: SUM(amount) GROUP BY customer, city.', 'Then ROW_NUMBER per city ordered by total DESC, keep rn=1.'],
        solution:
          'WITH totals AS (\n  SELECT city, customer, SUM(amount) AS total\n  FROM Orders\n  GROUP BY city, customer\n),\nranked AS (\n  SELECT *,\n         ROW_NUMBER() OVER (PARTITION BY city ORDER BY total DESC) AS rn\n  FROM totals\n)\nSELECT city, customer, total\nFROM ranked\nWHERE rn = 1;',
        explanation:
          'A CTE (WITH … AS) names an intermediate result so complex logic reads top-down. The first CTE aggregates spend per customer per city; the second ranks customers within each city by total. The final query keeps rank 1 — the top spender per city. Anu’s two Pune orders total 500, beating Bob’s 400.',
        keyPoints: [
          'CTEs name subqueries, improving readability and reuse within one statement.',
          'Chaining CTEs builds a pipeline of transformations.',
          'CTE + window function is the canonical "top-N per group" recipe.',
        ],
      },
      {
        id: 'sql-recursive-cte',
        title: 'Employee hierarchy depth (recursive CTE)',
        diff: 'X',
        tags: ['cte', 'recursive', 'hierarchy'],
        summary: 'Walk a manager tree with a recursive CTE.',
        prompt:
          'Given employees with manager_id, return each employee with their level in the hierarchy (CEO = level 1, their reports = 2, and so on). Use a recursive CTE.',
        setup:
          'Employees(id, name, manager_id)\n\n id | name | manager_id\n----+------+-----------\n 1  | CEO  | NULL\n 2  | VP   | 1\n 3  | Mgr  | 2\n 4  | Dev  | 3',
        examples: [{ out: 'CEO | 1\nVP  | 2\nMgr | 3\nDev | 4' }],
        hints: [
          'Anchor: rows where manager_id IS NULL at level 1.',
          'Recursive part: join the CTE to Employees on emp.manager_id = cte.id, level + 1.',
        ],
        solution:
          'WITH RECURSIVE org AS (\n  -- anchor: the top of the tree\n  SELECT id, name, 1 AS level\n  FROM Employees\n  WHERE manager_id IS NULL\n\n  UNION ALL\n\n  -- recursive: employees reporting to someone already in `org`\n  SELECT e.id, e.name, o.level + 1\n  FROM Employees e\n  JOIN org o ON e.manager_id = o.id\n)\nSELECT name, level\nFROM org\nORDER BY level;',
        explanation:
          'A recursive CTE has two parts joined by UNION ALL. The anchor selects the root (no manager) at level 1. The recursive member joins Employees to the rows already produced in `org`, incrementing the level, and repeats until no new rows are found. This walks the management tree breadth-first, computing each node’s depth without knowing the height in advance.',
        keyPoints: [
          'Recursive CTE = anchor query UNION ALL recursive query referencing itself.',
          'Recursion stops when the recursive member yields no new rows.',
          'Ideal for trees/graphs: org charts, category trees, bill-of-materials.',
        ],
        pitfalls: ['A cycle in the data causes infinite recursion — guard with a depth limit or visited-path tracking.'],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────
  {
    focus: 'Advanced Patterns',
    intro: 'CASE pivots, conditional aggregation, and gaps & islands.',
    challenges: [
      {
        id: 'sql-conditional-pivot',
        title: 'Pivot order counts by status',
        diff: 'H',
        tags: ['case', 'pivot', 'conditional-aggregation'],
        summary: 'Turn rows into columns with CASE inside aggregates.',
        prompt:
          'From Orders, produce one row per city with three columns: number of \'paid\', \'pending\', and \'cancelled\' orders. Use conditional aggregation (no PIVOT keyword).',
        setup:
          'Orders(id, city, status)\n\n id | city | status\n----+------+----------\n 1  | Pune | paid\n 2  | Pune | pending\n 3  | Pune | paid\n 4  | Goa  | cancelled',
        examples: [{ out: 'Pune | 2 | 1 | 0\nGoa  | 0 | 0 | 1' }],
        hints: ['SUM(CASE WHEN status = \'paid\' THEN 1 ELSE 0 END) per status.', 'GROUP BY city.'],
        solution:
          'SELECT city,\n       SUM(CASE WHEN status = \'paid\'      THEN 1 ELSE 0 END) AS paid,\n       SUM(CASE WHEN status = \'pending\'   THEN 1 ELSE 0 END) AS pending,\n       SUM(CASE WHEN status = \'cancelled\' THEN 1 ELSE 0 END) AS cancelled\nFROM Orders\nGROUP BY city;',
        explanation:
          'Conditional aggregation evaluates a CASE per row that emits 1 when the status matches and 0 otherwise; SUM then counts the matches per group. Each status becomes its own column, effectively pivoting rows into columns. COUNT(CASE WHEN … THEN 1 END) (without ELSE) works too, since COUNT ignores NULLs.',
        keyPoints: [
          'SUM(CASE …) / COUNT(CASE …) is portable pivoting that works in every dialect.',
          'One pass over the data produces all status columns.',
          'GROUP BY defines the rows; the CASE expressions define the columns.',
        ],
      },
      {
        id: 'sql-consecutive-islands',
        title: 'Consecutive login streaks (gaps & islands)',
        diff: 'X',
        tags: ['gaps-and-islands', 'window'],
        summary: 'Identify runs of consecutive days using the row-number difference trick.',
        prompt:
          'A user logs in on various days. Find the length of their LONGEST streak of consecutive calendar days. Use the classic gaps-and-islands technique.',
        setup:
          'Logins(login_date)\n\n login_date\n-----------\n 2024-01-01\n 2024-01-02\n 2024-01-03\n 2024-01-05\n 2024-01-06\n -- streaks: {01,02,03}=3, {05,06}=2 → answer 3',
        examples: [{ out: '3' }],
        hints: [
          'For consecutive dates, (date - ROW_NUMBER()) is constant within a streak.',
          'Group by that constant "island key", then COUNT and take the MAX.',
        ],
        solution:
          'WITH marked AS (\n  SELECT login_date,\n         ROW_NUMBER() OVER (ORDER BY login_date) AS rn\n  FROM Logins\n),\nislands AS (\n  SELECT login_date,\n         -- subtracting a dense counter collapses each run to one key\n         (login_date - rn * INTERVAL \'1 day\') AS grp\n  FROM marked\n)\nSELECT MAX(streak) AS longest\nFROM (\n  SELECT grp, COUNT(*) AS streak\n  FROM islands\n  GROUP BY grp\n) s;',
        explanation:
          'Within a run of consecutive dates, the date increases by exactly one day each step and so does ROW_NUMBER. Their difference (date minus rn days) is therefore CONSTANT across a streak and changes only when a gap breaks the sequence — giving each "island" a unique group key. Grouping by that key and counting yields each streak’s length; MAX returns the longest. (MySQL: use DATE_SUB(login_date, INTERVAL rn DAY); the idea is identical.)',
        keyPoints: [
          'Gaps & islands: a monotonic counter minus the ordered value is constant within a run.',
          'Group by the derived key to collapse each consecutive run.',
          'A foundational pattern for streaks, sessions, and contiguous ranges.',
        ],
        pitfalls: ['Duplicate dates break the 1:1 step — DISTINCT the dates first if duplicates are possible.'],
      },
    ],
  },
]

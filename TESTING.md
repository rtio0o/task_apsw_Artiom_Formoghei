# TaskFlow test notes

Date: October 16, 2026.

## Setup

- Node.js v20.19.5 on macOS.
- Started the API with `npm run api` and the app with `npm run dev`.
- Used the browser to repeat each bug before and after its fix.
- The original data has 7 tasks and 3 projects.
- Each bug fix was checked before its commit. See BUGS.md for the individual results.

## Priority filter

Issue: #11.

The filter has All priorities, Low, Medium and High. It works together with search and status. The Clear filters button resets all three controls.

Checked with the 7 sample tasks and 3 temporary tasks:

| Check | Result |
| --- | --- |
| All priorities | 10 tasks |
| Low | 2 tasks |
| Medium | 4 tasks |
| High | 4 tasks |
| High + In progress + ana | 1 task: Audit UX |
| Low + In progress + ana | 0 tasks and No tasks found |
| Clear filters | All status, All priorities, empty search and 10 rows |
| Accessible control name | Filter by priority is available in the browser accessibility tree |

Final CRUD, build and cleanup results will be added after the remaining checks.

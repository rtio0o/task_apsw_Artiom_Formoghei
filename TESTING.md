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

## Final checks with the original data

| Check | Result |
| --- | --- |
| All priorities | 7 tasks |
| Low | 2 tasks |
| Medium | 2 tasks |
| High | 3 tasks |
| High + In progress + ana | 1 task: Audit UX |
| Narrow screen (375 px) | Filter controls stack and Clear filters restores 7 rows |

## CRUD and validation

| Check | Result |
| --- | --- |
| Create | Created three temporary tasks through the form |
| Read | Opened task details and reloaded the saved data |
| Update | Changed title, status, priority and project; the changes stayed after reload |
| Project link after update | The selected project opens and includes the task |
| Delete | Removed the approved temporary tasks through the app; after the fix, deletion opens /tasks |
| Sidebar count | Matched the list after create, reload and delete: 8, 9 and finally 7 |
| Empty or spaces-only title | Rejected on create and edit |
| Title with surrounding spaces | Saved without the surrounding spaces |
| Missing due date | Rejected with Please choose a due date. |
| Cancel creating a task | Returned to Tasks without saving |

## Navigation and error states

- Dashboard View all opens Tasks.
- All three project cards open the correct project page and return to Projects.
- Add task preselects the project that was opened.
- Missing task and project IDs show return links that work.
- With an empty task array, Tasks shows No tasks found and Dashboard shows zero tasks and 0% completion.
- Failed API requests were tested by temporarily using an unused local API port. Tasks already showed a load error. Dashboard and Projects now also catch the failure and show an error message.
- The normal API URL was restored to http://localhost:3001. After reload, the app loaded the 7 tasks and 3 projects again.

## Build and cleanup

- `npm run build`: passed.
- `git diff --check`: passed.
- The seven original tasks and three projects match the original db.json. The original file contents were restored after the empty-state check.
- Temporary test data, the temporary API address, node_modules and dist are not included in the commits.

## Readability and component cleanup

- Formatted JavaScript, JSX and CSS with Prettier using `.prettierrc.json`.
- Added 14 components for layout, dashboard sections, task views, project views and the shared progress bar. Pages keep API loading, filter state and save/delete handlers.
- Compared all six pages before and after the cleanup. Headings, links, buttons, initial form values, task rows and progress styles matched.
- Checked that the CSS selectors, declaration values and their order were preserved after formatting.
- Checked that API logic and the original sample data were unchanged.
- Rechecked the priority controls: All = 7, Low = 2, Medium = 2, High = 3. Search and status together still return the correct task; the empty state and reset work.
- Rechecked the project default, spaces-only title validation on create and edit, and the Cancel links.
- `npm run build`, `npx --yes prettier@3.6.2 --check src .prettierrc.json` and `git diff --check` passed.

## Limits of these checks

These are manual browser checks. No automated test suite is configured. Cancelling the delete confirmation and the date changing at midnight were not tested.

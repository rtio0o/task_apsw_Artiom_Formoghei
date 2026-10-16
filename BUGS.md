# TaskFlow bug fixes

Date: October 16, 2026.

I checked the app in the browser and used the REST API through the app. The starting data has 7 tasks and 3 projects.

## Environment

- Node.js: v20.19.5
- App: http://localhost:5173/
- API: http://localhost:3001
- Branch: feature/fix-taskflow

## Bugs

| Bug | Issue | Status |
| --- | --- | --- |
| 01: Dashboard View all opens the wrong page | [#1](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/1) | Fixed and checked |
| 02: Dashboard shows zero tasks in progress | [#2](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/2) | Fixed and checked |
| 03: In progress filter hides matching tasks | [#3](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/3) | Fixed and checked |
| 04: Searching for a person depends on letter case | [#4](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/4) | Fixed and checked |
| 05: View project opens the dashboard | [#5](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/5) | Open |
| 06: A task title can contain only spaces | [#6](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/6) | Open |
| 07: Sidebar task count stays at seven | [#7](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/7) | Open |
| 08: Changing a task project breaks its project link | [#8](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/8) | Open |
| 09: Add task forgets the current project | [#9](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/9) | Open |
| 10: Dashboard and header show a fixed date | [#10](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/10) | Open |

### Bug 01: Dashboard View all opens the wrong page

- Issue: [#1](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/1)
- Steps: Open the dashboard and click View all under Recent tasks.
- Before: The link goes to /task and returns to the dashboard.
- Expected: The full task list should open at /tasks.
- Fix: Use /tasks for this link.
- Test: Passed in the browser: View all opens /tasks and the All tasks heading is visible.

### Bug 02: Dashboard shows zero tasks in progress

- Issue: [#2](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/2)
- Steps: Open the dashboard with the seven sample tasks.
- Before: In progress shows 0 even though two tasks have this status.
- Expected: The counter should show 2.
- Fix: Compare the status with In progress, using the same spelling as the data.
- Test: Passed in the browser: the sample data shows Total tasks 7, Completed 1, and In progress 2.

### Bug 03: In progress filter hides matching tasks

- Issue: [#3](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/3)
- Steps: Open Tasks and select In progress in the status filter.
- Before: No tasks found is shown.
- Expected: The two tasks with status In progress should be listed.
- Fix: Compare the selected status directly with the task status.
- Test: Passed in the browser: In progress lists Audit UX and Raport saptamanal; the footer shows 2 of 7 tasks.

### Bug 04: Searching for a person depends on letter case

- Issue: [#4](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/4)
- Steps: Search for Ana, then change the search to ana.
- Before: Ana finds two tasks, but ana finds none.
- Expected: Both searches should find the same tasks.
- Fix: Use lower case for the search text and the assignee name.
- Test: Passed in the browser: Ana, ana, ANA and extra spaces each return 2 tasks. Adding Done returns 1 task.

### Bug 05: View project opens the dashboard

- Issue: [#5](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/5)
- Steps: Open Projects and click View project on Website redesign.
- Before: The link goes to /project/1 and returns to the dashboard.
- Expected: The project page should open at /projects/1.
- Fix: Not applied yet.
- Test: Not checked after a fix yet.

### Bug 06: A task title can contain only spaces

- Issue: [#6](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/6)
- Steps: Create a task with three spaces as its title and a valid due date.
- Before: The task is saved with a visually empty title.
- Expected: The form should show a title validation error.
- Fix: Not applied yet.
- Test: Not checked after a fix yet.

### Bug 07: Sidebar task count stays at seven

- Issue: [#7](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/7)
- Steps: Create a test task and compare the task list with the desktop sidebar.
- Before: The list shows 8 tasks, but the sidebar still shows 7.
- Expected: Both counters should show the current number of tasks.
- Fix: Not applied yet.
- Test: Not checked after a fix yet.

### Bug 08: Changing a task project breaks its project link

- Issue: [#8](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/8)
- Steps: Edit a test task, select Mobile app launch, save and reload.
- Before: No project is shown and the task is missing from the project page.
- Expected: The selected project and its task list should include the task.
- Fix: Not applied yet.
- Test: Not checked after a fix yet.

### Bug 09: Add task forgets the current project

- Issue: [#9](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/9)
- Steps: Open Mobile app launch and click Add task.
- Before: The form selects Website redesign.
- Expected: Mobile app launch should be selected.
- Fix: Not applied yet.
- Test: Not checked after a fix yet.

### Bug 10: Dashboard and header show a fixed date

- Issue: [#10](https://github.com/rtio0o/task_apsw_Artiom_Formoghei/issues/10)
- Steps: Open or reload the app on October 16, 2026.
- Before: The header and dashboard still show Thursday, October 15.
- Expected: Both should show the current local date.
- Fix: Not applied yet.
- Test: Not checked after a fix yet.

## Other assignment work

Priority filtering and final CRUD checks are recorded in TESTING.md when completed.

The original sample data is kept after testing. Temporary test tasks are not part of the submitted data.

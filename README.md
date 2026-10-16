# TaskFlow evaluation project

TaskFlow is a React app for managing team tasks and projects. This is my solution for the practical web programming evaluation.

## Assignment

- Find and fix 10 bugs in the starter app.
- Add filtering by task priority.
- Check CRUD operations and navigation.
- Document the changes and tests.
- Use a work branch, clear commits and a Pull Request in the personal fork.

The original 10 bugs and two more problems found during the final checks are listed in [BUGS.md](BUGS.md). The test results are in [TESTING.md](TESTING.md).

## Requirements

- Node.js 18+ and npm
- Git

The app uses React, Vite, React Router, JSON Server, Lucide icons and plain CSS.

## Run locally

Install the dependencies:

```bash
npm install
```

Open two terminals in the project folder. Start the REST API in the first one:

```bash
npm run api
```

The API runs at http://localhost:3001. It reads and updates `db.json`.

Start the React app in the second terminal:

```bash
npm run dev
```

Open the Vite address, normally http://localhost:5173. Keep both terminals running.

Build the app:

```bash
npm run build
```

## Using the app

- Overview shows task statistics and links to recent tasks.
- Tasks supports searching by task title or assignee, filtering by status and priority, and clearing all filters.
- A task can be created, opened, edited and deleted through the REST API.
- Projects shows the tasks linked to each project.
- Add task on a project page selects that project in the new task form.

Priority choices are All priorities, Low, Medium and High. Search, status and priority work together. The footer shows the matching count, and an empty result shows No tasks found.

## GitHub work

Repository: [rtio0o/task_apsw_Artiom_Formoghei](https://github.com/rtio0o/task_apsw_Artiom_Formoghei).

The work branch is `feature/fix-taskflow`. Each bug has a GitHub Issue. Each fix was checked before making its commit, and the commit links to its Issue. The Pull Request targets `master` in this fork.

The original sample data is kept in the submitted code. Temporary tasks used for testing were removed. `node_modules` and `dist` are ignored by Git.

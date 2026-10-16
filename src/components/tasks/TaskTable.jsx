import { Search } from 'lucide-react'
import TaskTableRow from './TaskTableRow'

export default function TaskTable({ tasks, projects, onClear }) {
  return (
    <div className="table-wrap">
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Task name</th>
            <th>Assignee</th>
            <th>Due date</th>
            <th>Priority</th>
            <th>Status</th>
            <th>
              <span className="sr-only">Open</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskTableRow
              key={task.id}
              task={task}
              projectName={
                projects.find((project) => project.id === task.projectId)?.name || 'Unassigned'
              }
            />
          ))}
        </tbody>
      </table>
      {tasks.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">
            <Search size={22} />
          </div>
          <strong>No tasks found</strong>
          <p>Try another search or adjust your filters.</p>
          <button className="button button-ghost" onClick={onClear}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}

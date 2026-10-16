import { Link } from 'react-router-dom'
import PriorityBadge from '../PriorityBadge'
import StatusBadge from '../StatusBadge'

export default function TaskTableRow({ task, projectName }) {
  const initials = (task.assignee || '?')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
  const dueDate = new Date(`${task.dueDate}T12:00:00`).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
  })
  return (
    <tr>
      <td>
        <Link to={`/tasks/${task.id}`} className="table-task-title">
          <span className={`table-task-icon ${task.status === 'Done' ? 'task-icon-done' : ''}`}>
            {task.status === 'Done' ? '✓' : '↗'}
          </span>
          <span>
            <strong>{task.title}</strong>
            <small>{projectName}</small>
          </span>
        </Link>
      </td>
      <td>
        <span className="assignee-cell">
          <span className="mini-avatar">{initials}</span>
          {task.assignee || 'Unassigned'}
        </span>
      </td>
      <td className="date-cell">{dueDate}</td>
      <td>
        <PriorityBadge priority={task.priority} />
      </td>
      <td>
        <StatusBadge status={task.status} />
      </td>
      <td>
        <Link to={`/tasks/${task.id}`} className="row-open" aria-label={`Open ${task.title}`}>
          ↗
        </Link>
      </td>
    </tr>
  )
}

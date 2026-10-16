import { Link } from 'react-router-dom'
import PriorityBadge from '../PriorityBadge'
import StatusBadge from '../StatusBadge'

export default function ProjectTaskList({ tasks }) {
  return (
    <div className="card project-task-list">
      {tasks.length ? (
        tasks.map((task) => (
          <Link to={`/tasks/${task.id}`} className="project-task-row" key={task.id}>
            <div className="task-row-main">
              <strong>{task.title}</strong>
              <span>{task.assignee || 'Unassigned'}</span>
            </div>
            <PriorityBadge priority={task.priority} />
            <StatusBadge status={task.status} />
          </Link>
        ))
      ) : (
        <div className="empty-state">No tasks have been added to this project yet.</div>
      )}
    </div>
  )
}

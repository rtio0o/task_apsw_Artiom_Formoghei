import { CalendarDays, CircleUserRound } from 'lucide-react'
import PriorityBadge from '../PriorityBadge'
import StatusBadge from '../StatusBadge'

export default function TaskOverview({ task }) {
  return (
    <div className="card detail-main">
      <div className="detail-label">OVERVIEW</div>
      <div className="detail-status-row">
        <StatusBadge status={task.status} />
        <PriorityBadge priority={task.priority} />
      </div>
      <div className="detail-description">
        {task.description || 'No description has been added yet.'}
      </div>
      <div className="detail-divider" />
      <div className="detail-meta-grid">
        <div className="detail-meta">
          <CalendarDays size={17} />
          <div>
            <span>Due date</span>
            <strong>
              {new Date(`${task.dueDate}T12:00:00`).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </strong>
          </div>
        </div>
        <div className="detail-meta">
          <CircleUserRound size={17} />
          <div>
            <span>Assignee</span>
            <strong>{task.assignee || 'Unassigned'}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

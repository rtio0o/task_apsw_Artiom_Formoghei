import { Edit3, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TaskActions({ project, onEdit, onDelete }) {
  return (
    <div className="card detail-actions">
      <h3>Manage task</h3>
      <p>Keep information up to date as work progresses.</p>
      <button className="button button-secondary full-button" onClick={onEdit}>
        <Edit3 size={16} />
        Edit task
      </button>
      <button className="button button-danger full-button" onClick={onDelete}>
        <Trash2 size={16} />
        Delete task
      </button>
      <div className="detail-project-link">
        <span>PROJECT</span>
        <Link to={`/projects/${project?.id || ''}`}>
          {project?.name || 'No project'} <span>↗</span>
        </Link>
      </div>
    </div>
  )
}

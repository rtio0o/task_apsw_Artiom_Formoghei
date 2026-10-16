import { ArrowRight, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import PriorityBadge from '../PriorityBadge'
import StatusBadge from '../StatusBadge'

export default function RecentTasks({ tasks, projects, loading }) {
  return (
    <div className="card task-preview">
      <div className="card-heading">
        <div>
          <h3>Recent tasks</h3>
          <p>Your latest tasks, all in one place.</p>
        </div>
        <Link to="/tasks" className="text-link">
          View all <ArrowRight size={14} />
        </Link>
      </div>
      {loading ? (
        <div className="loading-state">Loading your tasks…</div>
      ) : (
        <div className="task-list">
          {tasks.slice(0, 4).map((task) => (
            <Link to={`/tasks/${task.id}`} className="task-row" key={task.id}>
              <div className="task-row-check">
                <span className={`fake-check ${task.status === 'Done' ? 'checked' : ''}`}>
                  {task.status === 'Done' ? '✓' : ''}
                </span>
              </div>
              <div className="task-row-main">
                <strong>{task.title}</strong>
                <span>
                  {projects.find((p) => p.id === task.projectId)?.name || 'Unassigned project'}
                </span>
              </div>
              <PriorityBadge priority={task.priority} />
              <StatusBadge status={task.status} />
            </Link>
          ))}
          {tasks.length === 0 && (
            <div className="empty-state">No tasks yet. Create your first task.</div>
          )}
        </div>
      )}
      <Link className="add-task-row" to="/tasks/new">
        <Plus size={16} /> Add a new task
      </Link>
    </div>
  )
}

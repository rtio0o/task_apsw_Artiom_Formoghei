export default function StatusBadge({ status }) {
  const map = {
    'To do': ['status-todo', 'To do'],
    'In progress': ['status-progress', 'In progress'],
    Review: ['status-review', 'In review'],
    Done: ['status-done', 'Done'],
  }
  const [className, label] = map[status] || ['status-todo', status]
  return (
    <span className={`status-badge ${className}`}>
      <span className="status-dot" />
      {label}
    </span>
  )
}

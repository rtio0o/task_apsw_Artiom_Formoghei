import { Search, SlidersHorizontal } from 'lucide-react'

export default function TaskFilters({
  search,
  status,
  priority,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
  onClear,
}) {
  return (
    <div className="task-toolbar">
      <div className="search-wrap">
        <Search size={17} />
        <input
          aria-label="Search tasks"
          placeholder="Search tasks or people..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filter-wrap">
        <SlidersHorizontal size={16} />
        <select
          aria-label="Filter by status"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option>All status</option>
          <option>To do</option>
          <option>In progress</option>
          <option>Review</option>
          <option>Done</option>
        </select>
      </div>
      <div className="filter-wrap">
        <SlidersHorizontal size={16} />
        <select
          aria-label="Filter by priority"
          value={priority}
          onChange={(e) => onPriorityChange(e.target.value)}
        >
          <option>All priorities</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <button className="button button-ghost" onClick={onClear}>
        Clear filters
      </button>
    </div>
  )
}

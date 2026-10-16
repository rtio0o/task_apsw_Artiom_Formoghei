import { useEffect, useMemo, useState } from 'react'
import { ListTodo } from 'lucide-react'
import { api } from '../api'
import SectionHeading from '../components/SectionHeading'
import TaskFilters from '../components/tasks/TaskFilters'
import TaskTable from '../components/tasks/TaskTable'

export default function Tasks() {
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All status')
  const [priority, setPriority] = useState('All priorities')
  const [error, setError] = useState('')

  function clearFilters() {
    setSearch('')
    setStatus('All status')
    setPriority('All priorities')
  }

  useEffect(() => {
    Promise.all([api.getTasks(), api.getProjects()])
      .then(([taskData, projectData]) => {
        setTasks(taskData)
        setProjects(projectData)
      })
      .catch(() => setError('We could not load tasks. Check that the API is running.'))
      .finally(() => setLoading(false))
  }, [])

  const filteredTasks = useMemo(() => {
    const query = search.trim().toLowerCase()
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(query) ||
        (task.assignee || '').toLowerCase().includes(query)
      const matchesStatus = status === 'All status' || task.status === status
      const matchesPriority = priority === 'All priorities' || task.priority === priority
      return matchesSearch && matchesStatus && matchesPriority
    })
  }, [tasks, search, status, priority])

  return (
    <div className="page-content">
      <SectionHeading
        eyebrow="YOUR WORKSPACE"
        title="All tasks"
        description="Keep track of the details that move your projects forward."
        action="Create task"
        to="/tasks/new"
      />
      <div className="task-summary-strip">
        <div className="summary-icon">
          <ListTodo size={19} />
        </div>
        <div>
          <strong>{tasks.length} tasks in your workspace</strong>
          <span>Stay focused on what matters most.</span>
        </div>
        <div className="summary-spacer" />
        <span className="summary-completed">
          {tasks.filter((t) => t.status === 'Done').length} completed
        </span>
      </div>
      <div className="card tasks-card">
        <TaskFilters
          search={search}
          status={status}
          priority={priority}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onPriorityChange={setPriority}
          onClear={clearFilters}
        />
        {error && <div className="form-error">{error}</div>}
        {loading ? (
          <div className="loading-state">Loading tasks…</div>
        ) : (
          <TaskTable tasks={filteredTasks} projects={projects} onClear={clearFilters} />
        )}
        <div className="table-footer">
          <span>
            Showing {filteredTasks.length} of {tasks.length} tasks
          </span>
          <span>Updated just now</span>
        </div>
      </div>
    </div>
  )
}

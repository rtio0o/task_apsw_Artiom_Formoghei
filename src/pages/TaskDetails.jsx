import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { api } from '../api'
import SectionHeading from '../components/SectionHeading'
import TaskForm from '../components/TaskForm'
import TaskOverview from '../components/tasks/TaskOverview'
import TaskActions from '../components/tasks/TaskActions'

export default function TaskDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [task, setTask] = useState(null)
  const [projects, setProjects] = useState([])
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([api.getTask(id), api.getProjects()])
      .then(([taskData, projectData]) => {
        setTask(taskData)
        setProjects(projectData)
      })
      .catch(() => setError('This task could not be found.'))
      .finally(() => setLoading(false))
  }, [id])

  async function updateTask(form) {
    try {
      const updated = await api.updateTask(id, { ...form, projectId: Number(form.projectId) })
      setTask(updated)
      setEditing(false)
    } catch {
      setError('Could not save your changes.')
    }
  }

  async function deleteTask() {
    if (!window.confirm('Delete this task? This action cannot be undone.')) return
    try {
      await api.deleteTask(id)
      navigate('/tasks')
    } catch {
      setError('Could not delete this task.')
    }
  }

  if (loading) return <div className="loading-state">Loading task…</div>
  if (!task)
    return (
      <div className="page-content">
        <div className="empty-state">
          <strong>Task not found</strong>
          <p>{error || 'This task may have been removed.'}</p>
          <Link className="button button-primary" to="/tasks">
            Back to tasks
          </Link>
        </div>
      </div>
    )

  const project = projects.find((p) => p.id === task.projectId)

  return (
    <div className="page-content">
      <Link to="/tasks" className="back-link">
        <ArrowLeft size={15} /> All tasks
      </Link>
      <SectionHeading
        eyebrow={project?.name || 'TASK DETAILS'}
        title={editing ? 'Edit task' : task.title}
        description={
          editing
            ? 'Update the task details below.'
            : task.description || 'No description has been added yet.'
        }
      />
      {error && <div className="form-error">{error}</div>}
      {editing ? (
        <TaskForm
          initialValues={task}
          projects={projects}
          onSubmit={updateTask}
          submitLabel="Save changes"
        />
      ) : (
        <div className="detail-layout">
          <TaskOverview task={task} />
          <TaskActions project={project} onEdit={() => setEditing(true)} onDelete={deleteTask} />
        </div>
      )}
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import TaskForm from '../components/TaskForm'
import { api } from '../api'

export default function NewTask() {
  const [projects, setProjects] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const projectId = searchParams.get('projectId') || '1'

  useEffect(() => {
    api
      .getProjects()
      .then(setProjects)
      .catch(() => setError('Could not load projects.'))
  }, [])

  async function createTask(form) {
    try {
      await api.createTask({ ...form, projectId: Number(form.projectId) })
      navigate('/tasks')
    } catch {
      setError('The task could not be created. Please try again.')
    }
  }

  return (
    <div className="page-content narrow-page">
      <SectionHeading
        eyebrow="TASK MANAGEMENT"
        title="Create a task"
        description="Break your next big idea into a clear, actionable step."
      />
      {error && <div className="form-error">{error}</div>}
      <TaskForm
        initialValues={{ projectId }}
        projects={projects}
        onSubmit={createTask}
        submitLabel="Create task"
      />
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, FolderKanban } from 'lucide-react'
import { api } from '../api'
import SectionHeading from '../components/SectionHeading'
import ProjectTaskList from '../components/projects/ProjectTaskList'

export default function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([api.getProject(id), api.getTasks()])
      .then(([projectData, taskData]) => {
        setProject(projectData)
        setTasks(taskData)
      })
      .catch(() => setProject(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="loading-state">Loading project…</div>
  if (!project)
    return (
      <div className="empty-state">
        <strong>Project not found</strong>
        <Link className="button button-primary" to="/projects">
          Back to projects
        </Link>
      </div>
    )
  const projectTasks = tasks.filter((task) => task.projectId === project.id)

  return (
    <div className="page-content">
      <Link to="/projects" className="back-link">
        <ArrowLeft size={15} /> All projects
      </Link>
      <div className="project-detail-hero card">
        <div
          className="project-symbol large"
          style={{ background: `${project.color}18`, color: project.color }}
        >
          <FolderKanban size={25} />
        </div>
        <div>
          <div className="eyebrow">PROJECT WORKSPACE</div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </div>
      <SectionHeading
        title="Project tasks"
        description={`${projectTasks.length} tasks connected to this project.`}
        action="Add task"
        to={`/tasks/new?projectId=${project.id}`}
      />
      <ProjectTaskList tasks={projectTasks} />
    </div>
  )
}

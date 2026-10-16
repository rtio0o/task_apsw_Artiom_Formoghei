import { useEffect, useState } from 'react'
import { FolderKanban, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/projects/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([api.getProjects(), api.getTasks()])
      .then(([projectData, taskData]) => {
        setProjects(projectData)
        setTasks(taskData)
      })
      .catch(() => setError('We could not load projects. Check that the API is running.'))
      .finally(() => setLoading(false))
  }, [])

  if (error)
    return (
      <div className="page-content">
        <SectionHeading title="Projects" />
        <div className="form-error" role="alert">
          {error}
        </div>
      </div>
    )

  return (
    <div className="page-content">
      <SectionHeading
        eyebrow="YOUR WORKSPACE"
        title="Projects"
        description="A home for every idea, milestone, and team effort."
      />
      <div className="project-intro">
        <div className="project-intro-icon">
          <FolderKanban size={21} />
        </div>
        <div>
          <strong>Your team's work, organized.</strong>
          <span>Explore projects and see what's moving forward.</span>
        </div>
        <span className="project-total">{projects.length} active projects</span>
      </div>
      {loading ? (
        <div className="loading-state">Loading projects…</div>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} tasks={tasks} index={index} />
          ))}
          <Link to="/projects" className="project-card add-project-card">
            <div className="add-project-icon">
              <Plus size={22} />
            </div>
            <strong>Plan something new</strong>
            <span>New project creation is coming soon.</span>
          </Link>
        </div>
      )}
    </div>
  )
}

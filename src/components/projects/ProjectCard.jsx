import { ArrowUpRight, FolderKanban } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProgressBar from '../ProgressBar'

export default function ProjectCard({ project, tasks, index }) {
  const projectTasks = tasks.filter((task) => task.projectId === project.id)
  const done = projectTasks.filter((task) => task.status === 'Done').length
  const progress = projectTasks.length ? Math.round((done / projectTasks.length) * 100) : 0
  return (
    <article className="project-card card">
      <div className="project-card-top">
        <div
          className="project-symbol"
          style={{ background: `${project.color}18`, color: project.color }}
        >
          <FolderKanban size={21} />
        </div>
        <button
          className="icon-button"
          aria-label="Project options"
          onClick={() => window.alert('Project options coming soon.')}
        >
          <span>•••</span>
        </button>
      </div>
      <span className="project-overline">PROJECT 0{index + 1}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-progress-meta">
        <span>Progress</span>
        <strong>{progress}%</strong>
      </div>
      <ProgressBar value={progress} color={project.color} />
      <div className="project-card-footer">
        <span>
          {projectTasks.length} tasks · {done} completed
        </span>
        <Link to={`/projects/${project.id}`} className="project-open">
          View project <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  )
}

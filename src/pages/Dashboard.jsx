import { useEffect, useState } from 'react'
import { api } from '../api'
import SectionHeading from '../components/SectionHeading'
import WorkspaceDate from '../components/WorkspaceDate'
import WelcomeBanner from '../components/dashboard/WelcomeBanner'
import DashboardStats from '../components/dashboard/DashboardStats'
import RecentTasks from '../components/dashboard/RecentTasks'
import WorkspaceProgress from '../components/dashboard/WorkspaceProgress'

export default function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([api.getTasks(), api.getProjects()])
      .then(([taskData, projectData]) => {
        setTasks(taskData)
        setProjects(projectData)
      })
      .catch(() => setError('We could not load the dashboard. Check that the API is running.'))
      .finally(() => setLoading(false))
  }, [])

  if (error)
    return (
      <div className="page-content">
        <div className="form-error" role="alert">
          {error}
        </div>
      </div>
    )

  const completed = tasks.filter((task) => task.status === 'Done').length
  const inProgress = tasks.filter((task) => task.status === 'In progress').length
  const completion = tasks.length ? Math.round((completed / tasks.length) * 100) : 0

  return (
    <div className="page-content">
      <SectionHeading
        eyebrow={<WorkspaceDate full />}
        title="Good morning, Dana ✨"
        description="Here's what's happening across your workspace today."
        action="New task"
        to="/tasks/new"
      />
      <WelcomeBanner />
      <DashboardStats
        totalTasks={tasks.length}
        completed={completed}
        inProgress={inProgress}
        completion={completion}
        totalProjects={projects.length}
        loading={loading}
      />
      <section className="dashboard-columns">
        <RecentTasks tasks={tasks} projects={projects} loading={loading} />
        <div className="right-column">
          <WorkspaceProgress completed={completed} total={tasks.length} completion={completion} />
          <div className="card tip-card">
            <div className="tip-icon">✦</div>
            <div>
              <span className="eyebrow">A LITTLE REMINDER</span>
              <h3>One thing at a time.</h3>
              <p>Focus on the next small step. Momentum follows clarity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

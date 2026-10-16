import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import TaskDetails from './pages/TaskDetails'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import NewTask from './pages/NewTask'
import { api } from './api'
import Sidebar from './components/layout/Sidebar'
import Topbar from './components/layout/Topbar'

export default function App() {
  const [projects, setProjects] = useState([])
  const [apiError, setApiError] = useState(false)
  const [taskCount, setTaskCount] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    api
      .getProjects()
      .then(setProjects)
      .catch(() => setApiError(true))
  }, [])

  useEffect(() => {
    let active = true
    api
      .getTasks()
      .then((tasks) => {
        if (active) setTaskCount(tasks.length)
      })
      .catch(() => {
        if (active) setTaskCount(null)
      })
    return () => {
      active = false
    }
  }, [pathname])

  return (
    <div className="app-shell">
      <Sidebar projects={projects} taskCount={taskCount} />

      <main className="main-area">
        {apiError && (
          <div className="api-warning">
            Could not connect to the local API. Start it with <code>npm run api</code>.
          </div>
        )}
        <Topbar />
        <div className="page-wrap">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/new" element={<NewTask />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <footer className="app-footer">
          <span>Made for meaningful work.</span>
          <span>
            TaskFlow <span className="footer-dot">●</span> Workspace edition
          </span>
        </footer>
      </main>
    </div>
  )
}

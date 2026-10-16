import { NavLink } from 'react-router-dom'
import {
  Activity,
  ArrowUpRight,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  Plus,
  Settings2,
  Sparkles,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/tasks', label: 'Tasks', icon: CheckSquare },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
]

export default function Sidebar({ projects, taskCount }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <Activity size={21} strokeWidth={2.5} />
        </div>
        <span>
          taskflow<span className="brand-dot">.</span>
        </span>
      </div>
      <div className="workspace-switcher">
        <div className="workspace-avatar">S</div>
        <div className="workspace-copy">
          <strong>Studio North</strong>
          <span>Free workspace</span>
        </div>
        <Settings2 size={16} className="muted-icon" />
      </div>
      <div className="nav-label">WORKSPACE</div>
      <nav className="main-nav">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
            {label === 'Tasks' && <span className="nav-count">{taskCount ?? '—'}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-section-head">
        <span className="nav-label">YOUR PROJECTS</span>
        <NavLink to="/projects" aria-label="View projects">
          <Plus size={16} />
        </NavLink>
      </div>
      <div className="project-nav">
        {projects.map((project) => (
          <NavLink to={`/projects/${project.id}`} key={project.id} className="project-nav-item">
            <span className="project-dot" style={{ background: project.color }} />
            {project.name}
          </NavLink>
        ))}
        {projects.length === 0 && <span className="side-empty">Projects will appear here</span>}
      </div>
      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <div className="upgrade-icon">
            <Sparkles size={17} />
          </div>
          <strong>Make room for focus</strong>
          <p>Bring your team's work into one calm space.</p>
          <button
            className="upgrade-link"
            onClick={() => window.alert('You are already on the TaskFlow workspace!')}
          >
            Explore workspace <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="profile-row">
          <div className="profile-avatar">DP</div>
          <div className="profile-copy">
            <strong>Dana Popa</strong>
            <span>Product designer</span>
          </div>
          <span className="online-dot" />
        </div>
      </div>
    </aside>
  )
}

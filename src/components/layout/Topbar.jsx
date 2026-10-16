import WorkspaceDate from '../WorkspaceDate'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="breadcrumbs">
        <span>Workspace</span>
        <span className="crumb-slash">/</span>
        <strong>My workspace</strong>
      </div>
      <div className="topbar-actions">
        <span className="today-label">
          <WorkspaceDate />
        </span>
        <div className="top-avatar">DP</div>
      </div>
    </header>
  )
}

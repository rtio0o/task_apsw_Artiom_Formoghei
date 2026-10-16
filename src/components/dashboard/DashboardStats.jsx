import { CalendarDays, CheckCircle2, CircleDashed, Clock3, TrendingUp } from 'lucide-react'

function StatCard({ label, value, color, icon: Icon, children }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{label}</span>
        <span className={`stat-icon ${color}`}>
          <Icon size={17} />
        </span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-foot">{children}</div>
    </div>
  )
}

export default function DashboardStats({
  totalTasks,
  completed,
  inProgress,
  completion,
  totalProjects,
  loading,
}) {
  return (
    <section className="stats-grid">
      <StatCard
        label="Total tasks"
        value={loading ? '—' : totalTasks}
        color="purple"
        icon={CircleDashed}
      >
        <span className="trend">
          <TrendingUp size={13} /> Workspace total
        </span>
      </StatCard>
      <StatCard
        label="Completed"
        value={loading ? '—' : completed}
        color="green"
        icon={CheckCircle2}
      >
        <span className="trend">{completion}% completion rate</span>
      </StatCard>
      <StatCard label="In progress" value={loading ? '—' : inProgress} color="blue" icon={Clock3}>
        <span className="stat-muted">Keep the momentum going</span>
      </StatCard>
      <StatCard
        label="Projects"
        value={loading ? '—' : totalProjects}
        color="amber"
        icon={CalendarDays}
      >
        <span className="stat-muted">Across your workspace</span>
      </StatCard>
    </section>
  )
}

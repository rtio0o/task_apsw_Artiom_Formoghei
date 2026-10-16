import { TrendingUp } from 'lucide-react'
import ProgressBar from '../ProgressBar'

export default function WorkspaceProgress({ completed, total, completion }) {
  return (
    <div className="card progress-card">
      <div className="card-heading">
        <div>
          <h3>Workspace progress</h3>
          <p>A snapshot of completed work.</p>
        </div>
        <span className="progress-icon">
          <TrendingUp size={17} />
        </span>
      </div>
      <div className="progress-number">
        {completion}
        <span>%</span>
      </div>
      <ProgressBar value={completion} />
      <div className="progress-foot">
        <span>
          {completed} of {total} tasks completed
        </span>
        <span className="progress-positive">Keep it up!</span>
      </div>
    </div>
  )
}

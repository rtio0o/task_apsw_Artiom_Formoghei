import { Flag } from 'lucide-react'

export default function PriorityBadge({ priority }) {
  return (
    <span className={`priority priority-${String(priority).toLowerCase()}`}>
      <Flag size={13} />
      {priority}
    </span>
  )
}

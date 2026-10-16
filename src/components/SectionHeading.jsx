import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionHeading({ eyebrow, title, description, action, to }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
      {action && (
        <Link className="button button-primary" to={to}>
          {action}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  )
}

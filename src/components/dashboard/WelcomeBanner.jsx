import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <div className="welcome-copy">
        <span className="banner-kicker">
          <span className="sparkle-dot">✦</span> YOUR WORKSPACE AT A GLANCE
        </span>
        <h2>
          Make progress, <em>not just plans.</em>
        </h2>
        <p>A little progress each day adds up to big results. Let's make today count.</p>
        <Link to="/tasks" className="banner-link">
          View all tasks <ArrowRight size={15} />
        </Link>
      </div>
      <div className="banner-art" aria-hidden="true">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-card art-card-back" />
        <div className="art-card art-card-front">
          <CheckCircle2 size={25} />
          <span>Focus time</span>
          <strong>02:45:18</strong>
          <small>You're doing great!</small>
        </div>
        <div className="art-star star-one">✦</div>
        <div className="art-star star-two">✳</div>
      </div>
    </section>
  )
}

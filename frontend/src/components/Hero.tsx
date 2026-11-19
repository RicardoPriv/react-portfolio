import { Link } from 'react-router-dom'
import { profile } from '../config/profile'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{profile.role} portfolio</p>
        <h1 id="hero-title">Hi, I’m {profile.name}<span>.</span></h1>
        <p className="hero-lead">{profile.headline}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="actions">
          <Link className="button primary" to="/projects">View projects</Link>
          <Link className="button secondary" to="/contact">Get in touch</Link>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-inner" />
        <div className="orbit orbit-tilted" />
        <div className="hero-disc" />
        <div className="hero-point" />
      </div>
    </section>
  )
}

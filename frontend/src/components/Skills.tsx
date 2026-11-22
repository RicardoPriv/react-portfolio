import { profile } from '../config/profile'
import { skills } from '../config/skills'
import '../styles/skills.css'

export default function Skills() {
  return (
    <section className="container page" aria-labelledby="skills-title">
      <div className="page-heading">
        <h1 id="skills-title">Skills</h1>
        <p>{profile.about}</p>
      </div>
      <div className="skills-grid">
        {skills.map(({ title, description, tools }) => (
          <article className="skill-group" key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
              {tools.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

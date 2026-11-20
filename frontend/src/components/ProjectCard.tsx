import type { Project } from '../types/project'

export default function ProjectCard({ project }: { project: Project }) {
  const { category, title, description, image, stack, repository, demo } = project

  return (
    <article className="project-card">
      <img className="project-image" src={image.src} alt={image.alt} loading="lazy" />
      <div className="project-body">
        <p className="eyebrow">{category}</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="tags" aria-label="Technologies">
          {stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="project-links">
          <a href={repository} aria-label={`Source code for ${title}`}>Source code</a>
          {demo && <a href={demo} aria-label={`Live demo for ${title}`}>Live demo</a>}
        </div>
      </div>
    </article>
  )
}

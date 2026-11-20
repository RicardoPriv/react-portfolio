import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../config/projects'
import ProjectCard from './ProjectCard'
import '../styles/projects.css'

export default function Projects({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<string | null>(null)
  const categories = [...new Set(projects.map((project) => project.category))]
  const visibleProjects = projects.filter((project) =>
    preview ? project.featured : category === null || project.category === category,
  )
  const Heading = preview ? 'h2' : 'h1'

  return (
    <section className={preview ? 'container selected-work' : 'container page'} aria-labelledby="projects-title">
      <div className="page-heading">
        <Heading id="projects-title">{preview ? 'Selected projects' : 'Projects'}</Heading>
        {!preview && <p>Small games and tools I’ve built while working with React, TypeScript and the web.</p>}
      </div>
      {!preview && categories.length > 1 && (
        <div className="project-filters" role="group" aria-label="Filter projects">
          <button type="button" aria-pressed={category === null} onClick={() => setCategory(null)}>All</button>
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      )}
      {visibleProjects.length > 0 ? (
        <div className="project-grid">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      ) : <p>Projects will appear here when they’re added.</p>}
      {preview && <Link className="all-projects" to="/projects">View all projects</Link>}
    </section>
  )
}

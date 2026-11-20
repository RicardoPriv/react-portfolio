export type Project = {
  id: string
  title: string
  description: string
  category: string
  stack: string[]
  image: { src: string; alt: string }
  repository: string
  demo?: string
  featured?: boolean
}

import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'memory-match',
    title: 'MemoryMatch',
    category: 'Games',
    description: 'A Pokémon memory game with live PokeAPI data, progressive levels and a score that carries across rounds.',
    stack: ['React', 'TypeScript', 'PokeAPI'],
    image: {
      src: '/projects/memory-match.webp',
      alt: 'MemoryMatch game board with Pokémon cards and a score panel',
    },
    repository: 'https://github.com/RicardoPriv/MemoryMatch',
    featured: true,
  },
  {
    id: 'cv-maker',
    title: 'CV Maker',
    category: 'Web apps',
    description: 'An interactive CV builder with an editing sidebar and a live preview that follows changes across sections.',
    stack: ['React', 'TypeScript', 'CSS'],
    image: {
      src: '/projects/cv-maker.webp',
      alt: 'CV Maker with editing controls alongside a résumé preview',
    },
    repository: 'https://github.com/RicardoPriv/CVmaker',
    featured: true,
  },
]

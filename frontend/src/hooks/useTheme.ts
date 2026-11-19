import { useLayoutEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
const themeKey = 'portfolio-theme'

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(themeKey)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Private browsing or storage policies can prevent access.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)

    try {
      localStorage.setItem(themeKey, next)
    } catch {
      // The current page still updates when storage is unavailable.
    }
  }

  return { theme, toggleTheme }
}

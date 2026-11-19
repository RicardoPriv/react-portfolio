import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { navigation } from '../../config/navigation'
import { profile } from '../../config/profile'
import { useTheme } from '../../hooks/useTheme'
import '../../styles/layout.css'

export default function SiteLayout() {
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()
  const main = useRef<HTMLElement>(null)
  const previousPath = useRef(pathname)

  useLayoutEffect(() => {
    const page = navigation.find(({ to }) => to === pathname)
    document.title = pathname === '/'
      ? `${profile.name} · ${profile.role} Portfolio`
      : `${page?.label ?? 'Page not found'} · ${profile.name}`

    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0)
      main.current?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" tabIndex={-1} ref={main}><Outlet /></main>
      <Footer />
    </>
  )
}

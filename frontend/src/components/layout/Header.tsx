import { Link, NavLink } from 'react-router-dom'
import { profile } from '../../config/profile'
import { navigation } from '../../config/navigation'
import type { Theme } from '../../hooks/useTheme'

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" to="/">{profile.name}<span>.</span></Link>
        <nav aria-label="Main navigation">
          {navigation.map(({ to, label }) => (
            <NavLink key={to} to={to} end>{label}</NavLink>
          ))}
        </nav>
        <button className="theme-toggle" type="button" onClick={onToggleTheme}
          aria-label="Dark mode" aria-pressed={theme === 'dark'}>
          <span className={theme === 'dark' ? 'sun-icon' : 'moon-icon'} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

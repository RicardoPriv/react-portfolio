import { profile } from '../../config/profile'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href={profile.githubUrl}>GitHub</a>
      </div>
    </footer>
  )
}

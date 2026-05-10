import { Bell, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar({ userName, userRole, showLogout = true }) {
  const hasSubtitle = Boolean(userRole?.trim())

  return (
    <header className="inmobi-header">
      <div className="inmobi-header-actions">
        <button type="button" className="inmobi-header-bell-wrap" aria-label="Notificaciones">
          <Bell size={21} strokeWidth={1.75} aria-hidden />
          <span className="inmobi-header-bell-dot" aria-hidden />
        </button>
        <span className="inmobi-header-divider" aria-hidden />
        <div className="inmobi-header-user-wrap">
          <div className="inmobi-header-profile">
            <span className="inmobi-header-profile-icon-wrap" aria-hidden>
              <User size={17} strokeWidth={2} />
            </span>
            <div className={`inmobi-header-profile-text ${hasSubtitle ? 'inmobi-header-profile-text--stack' : ''}`}>
              <span className="inmobi-header-profile-title">{userName}</span>
              {hasSubtitle ? <span className="inmobi-header-profile-sub">{userRole}</span> : null}
            </div>
          </div>
          {showLogout && (
            <Link to="/login" className="btn btn-outline-secondary btn-sm ms-1">
              Salir
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

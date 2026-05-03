import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar({ userName, userRole, avatarUrl, avatarInitials, showLogout = true }) {
  const initials =
    avatarInitials ??
    userName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join('')

  return (
    <header className="inmobi-header">
      <div className="inmobi-header-actions">
        <button type="button" className="inmobi-header-bell-wrap" aria-label="Notificaciones">
          <Bell size={21} strokeWidth={1.75} aria-hidden />
          <span className="inmobi-header-bell-dot" aria-hidden />
        </button>
        <span className="inmobi-header-divider" aria-hidden />
        <div className="inmobi-header-user-wrap">
          <div className="d-flex flex-column text-end gap-1">
            <span className="inmobi-header-user-text-name">{userName}</span>
            <span className="inmobi-header-user-text-role">{userRole}</span>
          </div>
          {avatarUrl ? (
            <img src={avatarUrl} alt="" className="inmobi-header-avatar" width={44} height={44} />
          ) : (
            <span className="inmobi-header-avatar-fallback" aria-hidden>
              {initials}
            </span>
          )}
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

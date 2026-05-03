import { Building2, FileSignature, FileText, LayoutGrid, User, Users, Wallet, Wrench } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const adminLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', Icon: LayoutGrid },
  { to: '/admin/propiedades', label: 'Propiedades', Icon: Building2 },
  { to: '/admin/inquilinos', label: 'Inquilinos', Icon: Users },
  { to: '/admin/contratos', label: 'Contratos', Icon: FileSignature },
  { to: '/admin/contabilidad', label: 'Contabilidad', Icon: Wallet },
  { to: '/admin/reclamos', label: 'Reclamos', Icon: Wrench },
  { to: '/admin/documentacion', label: 'Documentación', Icon: FileText },
]

const userLinks = [
  { to: '/usuario/mi-contrato', label: 'Mi contrato', Icon: FileText },
  { to: '/usuario/perfil', label: 'Perfil', Icon: User },
]

export function Sidebar({ variant }) {
  const isUser = variant === 'user'
  const links = isUser ? userLinks : adminLinks
  const subtitle = isUser ? 'ÁREA INQUILINO' : 'ASSET MANAGEMENT'

  return (
    <aside className="inmobi-sidebar">
      <div className="inmobi-sidebar-brand">
        <div className="d-flex align-items-center gap-3">
          <div className="inmobi-sidebar-logo-mark" aria-hidden>
            <Building2 size={22} strokeWidth={2} aria-hidden />
          </div>
          <div className="d-flex flex-column">
            <span className="inmobi-sidebar-brand-title">Inmobi</span>
            <span className="inmobi-sidebar-brand-sub">{subtitle}</span>
          </div>
        </div>
      </div>
      <nav className="inmobi-sidebar-nav">
        {links.map((item) => {
          const IconComponent = item.Icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `inmobi-sidebar-link ${isActive ? 'active' : ''}`}
            >
              <IconComponent
                size={18}
                strokeWidth={2}
                className="inmobi-sidebar-link-icon flex-shrink-0"
                aria-hidden
              />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar.jsx'
import { Sidebar } from './Sidebar.jsx'

export function AdminLayout() {
  return (
    <div className="d-flex min-vh-100 min-w-0">
      <Sidebar variant="admin" />
      <div className="flex-grow-1 d-flex flex-column bg-light min-w-0">
        <Navbar userName="Administrador" />
        <main className="flex-grow-1 p-4 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

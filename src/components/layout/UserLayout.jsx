import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar.jsx'
import { Sidebar } from './Sidebar.jsx'

export function UserLayout() {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar variant="user" />
      <div className="flex-grow-1 d-flex flex-column bg-light">
        <Navbar userName="Inquilino" userRole="ÁREA INQUILINO" />
        <main className="flex-grow-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from '../components/layout/AdminLayout.jsx'
import { UserLayout } from '../components/layout/UserLayout.jsx'
import { Contabilidad } from '../views/admin/Contabilidad.jsx'
import { Contratos } from '../views/admin/Contratos.jsx'
import { Dashboard } from '../views/admin/Dashboard.jsx'
import { Documentacion } from '../views/admin/Documentacion.jsx'
import { Inquilinos } from '../views/admin/Inquilinos.jsx'
import { Propiedades } from '../views/admin/Propiedades.jsx'
import { Reclamos } from '../views/admin/Reclamos.jsx'
import { Login } from '../views/public/Login.jsx'
import { MiContrato } from '../views/user/MiContrato.jsx'
import { Perfil } from '../views/user/Perfil.jsx'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="propiedades" element={<Propiedades />} />
        <Route path="inquilinos" element={<Inquilinos />} />
        <Route path="contratos" element={<Contratos />} />
        <Route path="contabilidad" element={<Contabilidad />} />
        <Route path="reclamos" element={<Reclamos />} />
        <Route path="documentacion" element={<Documentacion />} />
      </Route>

      <Route path="/usuario" element={<UserLayout />}>
        <Route index element={<Navigate to="mi-contrato" replace />} />
        <Route path="mi-contrato" element={<MiContrato />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

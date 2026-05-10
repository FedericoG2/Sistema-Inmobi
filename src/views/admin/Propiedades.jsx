import { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { AdminFilterCard } from '../../components/admin/AdminFilterCard'
import { AdminFilterSelect } from '../../components/admin/AdminFilterSelect'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { AdminTableCard } from '../../components/admin/AdminTableCard'
import { RegistryIconRowActions } from '../../components/admin/RegistryIconRowActions'

/** Sustituir por datos del API; vacío = fila «Sin datos». */
const properties = []

export function Propiedades() {
  const [search, setSearch] = useState('')
  const [estado, setEstado] = useState('todos')
  const [tipo, setTipo] = useState('todos')

  return (
    <div>
      <h1 className="h4 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Propiedades
      </h1>
      <p className="text-secondary small mb-2 mb-md-3">
        Consultá y gestioná tu portafolio de propiedades: estado, tipo y rentas en un solo lugar.
      </p>

      <AdminFilterCard
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar propiedades..."
            ariaLabel="Buscar propiedades"
            wrapperStyle={{ minWidth: 200, maxWidth: 360, flex: '1 1 220px' }}
          />
        }
        trailing={
          <Button type="button" variant="success" className="fw-semibold rounded-3 px-4 py-2 shadow-sm">
            Nueva Propiedad
          </Button>
        }
        filters={
          <>
            <AdminFilterSelect
              id="filtro-estado"
              label="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              minWidth={160}
            >
              <option value="todos">Estado: Todos</option>
              <option value="alquilada">Alquilada</option>
              <option value="disponible">Disponible</option>
              <option value="mantenimiento">Mantenimiento</option>
            </AdminFilterSelect>
            <AdminFilterSelect
              id="filtro-tipo"
              label="Tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              minWidth={160}
            >
              <option value="todos">Tipo: Todos</option>
              <option value="apartamento">Apartamento</option>
              <option value="casa">Casa</option>
              <option value="local">Local comercial</option>
              <option value="oficina">Oficina</option>
            </AdminFilterSelect>
          </>
        }
      />

      <AdminTableCard>
        <Table hover className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 ps-4">
                Propiedad
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">Tipo</th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Renta mensual
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Estado
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 text-end pe-4">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {properties.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-secondary py-5 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              properties.map((p) => (
                <tr key={p.id}>
                  <td className="ps-4 border-0 py-3">
                    <div className="fw-semibold">{p.nombre}</div>
                    <div className="small text-secondary">{p.direccion}</div>
                  </td>
                  <td className="border-0 py-3">{p.tipo}</td>
                  <td
                    className="border-0 py-3 fw-semibold"
                    style={{ color: 'var(--inmobi-header-accent)' }}
                  >
                    {p.renta}
                  </td>
                  <td className="border-0 py-3">
                    <Badge pill className="text-bg-success text-uppercase small">
                      {p.estadoLabel}
                    </Badge>
                  </td>
                  <td className="text-end pe-4 border-0 py-3">
                    <RegistryIconRowActions resourceLabel="propiedad" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </AdminTableCard>
    </div>
  )
}

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
const inquilinos = []

export function Inquilinos() {
  const [search, setSearch] = useState('')
  const [estadoContrato, setEstadoContrato] = useState('todos')
  const [tipo, setTipo] = useState('todos')

  return (
    <div>
      <h1 className="h4 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Inquilinos
      </h1>
      <p className="text-secondary small mb-2 mb-md-3">
        Administrá inquilinos y contratos: datos de contacto y vínculo con cada inmueble.
      </p>

      <AdminFilterCard
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar inquilinos..."
            ariaLabel="Buscar inquilinos"
            wrapperStyle={{ minWidth: 200, maxWidth: 360, flex: '1 1 220px' }}
          />
        }
        trailing={
          <Button type="button" variant="success" className="fw-semibold rounded-3 px-4 py-2 shadow-sm">
            Nuevo Inquilino
          </Button>
        }
        filters={
          <>
            <AdminFilterSelect
              id="filtro-estado-contrato"
              label="Estado del contrato"
              value={estadoContrato}
              onChange={(e) => setEstadoContrato(e.target.value)}
              minWidth={180}
            >
              <option value="todos">Contrato: Todos</option>
              <option value="activo">Activo</option>
              <option value="por-vencer">Por vencer</option>
              <option value="finalizado">Finalizado</option>
              <option value="sin-contrato">Sin contrato</option>
            </AdminFilterSelect>
            <AdminFilterSelect
              id="filtro-tipo-inquilino"
              label="Tipo de inquilino"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              minWidth={160}
            >
              <option value="todos">Tipo: Todos</option>
              <option value="persona">Persona física</option>
              <option value="empresa">Persona jurídica</option>
            </AdminFilterSelect>
          </>
        }
      />

      <AdminTableCard>
        <Table hover className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 ps-4">
                Inquilino
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Documento
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Propiedad
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Contrato
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 text-end pe-4">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {inquilinos.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-secondary py-5 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              inquilinos.map((q) => (
                <tr key={q.id}>
                  <td className="ps-4 border-0 py-3">
                    <div className="fw-semibold">{q.nombre}</div>
                    <div className="small text-secondary">{q.contacto}</div>
                  </td>
                  <td className="border-0 py-3">{q.documento}</td>
                  <td className="border-0 py-3">{q.propiedad}</td>
                  <td className="border-0 py-3">
                    <Badge pill className="text-bg-success text-uppercase small">
                      {q.estadoContratoLabel}
                    </Badge>
                  </td>
                  <td className="text-end pe-4 border-0 py-3">
                    <RegistryIconRowActions resourceLabel="inquilino" />
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

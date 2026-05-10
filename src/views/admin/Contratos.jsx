import { useState } from 'react'
import { FileSignature } from 'lucide-react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Table from 'react-bootstrap/Table'
import { AdminFilterCard } from '../../components/admin/AdminFilterCard'
import { AdminFilterSelect } from '../../components/admin/AdminFilterSelect'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { AdminTableCard } from '../../components/admin/AdminTableCard'
import { RegistryIconRowActions } from '../../components/admin/RegistryIconRowActions'

/** Sustituir por datos del API; vacío = fila «Sin datos». */
const contratos = []

export function Contratos() {
  const [search, setSearch] = useState('')
  const [estado, setEstado] = useState('todos')
  const [modalidad, setModalidad] = useState('todos')

  return (
    <div>
      <h1 className="h4 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Contratos
      </h1>
      <p className="text-secondary small mb-2 mb-md-3">
        Controlá vigencias, montos y la relación entre inquilinos y propiedades desde un único listado.
      </p>

      <AdminFilterCard
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar contratos..."
            ariaLabel="Buscar contratos"
            wrapperStyle={{ minWidth: 200, maxWidth: 360, flex: '1 1 220px' }}
          />
        }
        trailing={
          <Button type="button" variant="success" className="fw-semibold rounded-3 px-4 py-2 shadow-sm">
            Nuevo Contrato
          </Button>
        }
        filters={
          <>
            <AdminFilterSelect
              id="filtro-estado-contrato"
              label="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              minWidth={160}
            >
              <option value="todos">Estado: Todos</option>
              <option value="vigente">Vigente</option>
              <option value="por-vencer">Por vencer</option>
              <option value="finalizado">Finalizado</option>
              <option value="rescindido">Rescindido</option>
            </AdminFilterSelect>
            <AdminFilterSelect
              id="filtro-modalidad"
              label="Modalidad"
              value={modalidad}
              onChange={(e) => setModalidad(e.target.value)}
              minWidth={160}
            >
              <option value="todos">Modalidad: Todas</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
            </AdminFilterSelect>
          </>
        }
      />

      <AdminTableCard>
        <Table hover className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 ps-4">
                Contrato
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Inquilino
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Propiedad
              </th>
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
            {contratos.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-secondary py-5 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              contratos.map((c) => (
                <tr key={c.id}>
                  <td className="ps-4 border-0 py-3">
                    <Stack direction="horizontal" gap={2} className="align-items-center">
                      <span
                        className="rounded-2 d-inline-flex align-items-center justify-content-center flex-shrink-0 text-secondary"
                        style={{
                          width: 36,
                          height: 36,
                          background: 'rgba(28, 47, 92, 0.08)',
                        }}
                        aria-hidden
                      >
                        <FileSignature size={18} strokeWidth={1.75} />
                      </span>
                      <div>
                        <div className="fw-semibold">{c.codigo}</div>
                        <div className="small text-secondary">{c.vigencia}</div>
                      </div>
                    </Stack>
                  </td>
                  <td className="border-0 py-3">{c.inquilino}</td>
                  <td className="border-0 py-3">{c.propiedad}</td>
                  <td
                    className="border-0 py-3 fw-semibold"
                    style={{ color: 'var(--inmobi-header-accent)' }}
                  >
                    {c.renta}
                  </td>
                  <td className="border-0 py-3">
                    <Badge pill className="text-bg-success text-uppercase small">
                      {c.estadoLabel}
                    </Badge>
                  </td>
                  <td className="text-end pe-4 border-0 py-3">
                    <RegistryIconRowActions resourceLabel="contrato" />
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

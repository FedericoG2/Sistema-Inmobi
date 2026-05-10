import { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { AdminFilterCard } from '../../components/admin/AdminFilterCard'
import { AdminFilterSelect } from '../../components/admin/AdminFilterSelect'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { AdminTableCard } from '../../components/admin/AdminTableCard'
import { RegistryIconRowActions } from '../../components/admin/RegistryIconRowActions'

/** Datos de ejemplo para maquetación; sustituir por respuesta del API. */
const contratos = [
  {
    id: '1',
    codigo: 'CT‑2026‑0892',
    vigencia: '01/06/2024 — 31/05/2026',
    inquilino: 'María González',
    propiedad: 'Av. Corrientes 1842, Depto 4º «A», CABA',
    renta: '$ 385.000',
    estadoLabel: 'Vigente',
    estadoBadgeClass: 'text-bg-success text-uppercase small',
  },
  {
    id: '2',
    codigo: 'CT‑2025‑4821‑C',
    vigencia: '15/03/2025 — 14/03/2028',
    inquilino: 'Construcciones del Sur SA',
    propiedad: 'Galpón industrial · Ruta 36 km 412',
    renta: '$ 940.000',
    estadoLabel: 'Vigente',
    estadoBadgeClass: 'text-bg-success text-uppercase small',
  },
  {
    id: '3',
    codigo: 'CT‑2024‑7740',
    vigencia: '01/01/2024 — 30/06/2026',
    inquilino: 'Luciano Fernández',
    propiedad: 'Duplex · B° Nueva Córdoba',
    renta: '$ 312.000',
    estadoLabel: 'Por vencer',
    estadoBadgeClass: 'text-uppercase small',
    estadoBadgeBg: 'warning',
    estadoBadgeText: 'dark',
  },
  {
    id: '4',
    codigo: 'CT‑2023‑2105',
    vigencia: '01/02/2023 — 31/01/2025',
    inquilino: 'Martín López',
    propiedad: 'Local PB · Av. Pueyrredón 892, CABA',
    renta: '$ 558.000',
    estadoLabel: 'Finalizado',
    estadoBadgeClass: 'text-bg-secondary text-uppercase small',
  },
]

export function Contratos() {
  const [search, setSearch] = useState('')
  const [estado, setEstado] = useState('todos')
  const [modalidad, setModalidad] = useState('todos')

  return (
    <div>
      <h1 className="h3 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Contratos
      </h1>
      <p className="text-secondary small mb-2 mb-md-3">
        Controlá vigencias, montos y la relación entre inquilinos y propiedades desde un único listado.
      </p>

      <AdminFilterCard
        compact
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            compact
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar contratos..."
            ariaLabel="Buscar contratos"
            wrapperStyle={{ minWidth: 160, maxWidth: 320, flex: '1 1 200px' }}
          />
        }
        trailing={
          <Button type="button" variant="success" size="sm" className="fw-semibold rounded-3 px-3 shadow-sm">
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
              minWidth={136}
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
              minWidth={136}
            >
              <option value="todos">Modalidad: Todas</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
            </AdminFilterSelect>
          </>
        }
      />

      <AdminTableCard>
        <Table hover size="sm" className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-3">
                Contrato
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Período
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Inquilino
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Propiedad
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Renta mensual
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Estado
              </th>
              <th
                scope="col"
                className="text-uppercase small text-secondary fw-semibold border-0 py-2 text-center"
                style={{ minWidth: 100 }}
              >
                Detalle
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 text-end pe-2">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {contratos.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center text-secondary py-4 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              contratos.map((c) => (
                <tr key={c.id}>
                  <td className="ps-3 border-0 py-2 fw-semibold">{c.codigo}</td>
                  <td className="border-0 py-2 small text-secondary text-nowrap">{c.vigencia}</td>
                  <td className="border-0 py-2">{c.inquilino}</td>
                  <td className="border-0 py-2">{c.propiedad}</td>
                  <td
                    className="border-0 py-2 fw-semibold"
                    style={{ color: 'var(--inmobi-header-accent)' }}
                  >
                    {c.renta}
                  </td>
                  <td className="border-0 py-2">
                    {c.estadoBadgeBg ? (
                      <Badge pill bg={c.estadoBadgeBg} text={c.estadoBadgeText} className={c.estadoBadgeClass}>
                        {c.estadoLabel}
                      </Badge>
                    ) : (
                      <Badge pill className={c.estadoBadgeClass}>
                        {c.estadoLabel}
                      </Badge>
                    )}
                  </td>
                  <td className="border-0 py-2 text-center">
                    <Button
                      type="button"
                      variant="outline-primary"
                      size="sm"
                      className="rounded-3 px-2 fw-semibold shadow-none"
                      aria-label={`Ver detalle del contrato ${c.codigo}`}
                    >
                      Detalle
                    </Button>
                  </td>
                  <td className="text-end pe-2 border-0 py-2">
                    <RegistryIconRowActions resourceLabel="contrato" showView={false} />
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

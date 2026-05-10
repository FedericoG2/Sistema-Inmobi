import { useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { AdminFilterCard } from '../../components/admin/AdminFilterCard'
import { AdminFilterSelect } from '../../components/admin/AdminFilterSelect'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { AdminTableCard } from '../../components/admin/AdminTableCard'
import { RegistryIconRowActions } from '../../components/admin/RegistryIconRowActions'

/** Miniatura genérica (SVG); sustituir por URL real del API. */
const propertyThumbPlaceholderSrc =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect width="80" height="80" rx="10" fill="#e9ecef"/>
      <path d="M40 20L24 33v25h12V47h8v11h12V33L40 20z" fill="#adb5bd"/>
      <rect x="34" y="47" width="12" height="10" rx="1" fill="#ced4da"/>
    </svg>`,
  )

/** Sustituir por datos del API; vacío = fila «Sin datos». */
const properties = [
  {
    id: '1',
    imagenSrc: propertyThumbPlaceholderSrc,
    nombre: 'Depto 4º A — Corrientes',
    direccion: 'Av. Corrientes 1842, CABA',
    tipo: 'Apartamento',
    renta: '$ 385.000',
    estadoLabel: 'Alquilada',
    estadoBadgeClass: 'text-bg-success text-uppercase small',
  },
  {
    id: '2',
    imagenSrc: propertyThumbPlaceholderSrc,
    nombre: 'Local comercial Pueyrredón',
    direccion: 'Av. Pueyrredón 892, CABA',
    tipo: 'Local comercial',
    renta: '$ 620.000',
    estadoLabel: 'Disponible',
    estadoBadgeClass: 'text-bg-primary text-uppercase small',
  },
  {
    id: '3',
    imagenSrc: propertyThumbPlaceholderSrc,
    nombre: 'Casa Gral. Paz',
    direccion: 'Gral. Paz 2100, Córdoba',
    tipo: 'Casa',
    renta: '$ 298.500',
    estadoLabel: 'Mantenimiento',
    estadoBadgeClass: 'text-uppercase small',
    estadoBadgeBg: 'warning',
    estadoBadgeText: 'dark',
  },
  {
    id: '4',
    imagenSrc: propertyThumbPlaceholderSrc,
    nombre: 'Galpón Industrial Ruta 36',
    direccion: 'Ruta Provincial 36 km 412',
    tipo: 'Depósito / galpón',
    renta: '$ 940.000',
    estadoLabel: 'Alquilada',
    estadoBadgeClass: 'text-bg-success text-uppercase small',
  },
]

export function Propiedades() {
  const [search, setSearch] = useState('')
  const [estado, setEstado] = useState('todos')
  const [tipo, setTipo] = useState('todos')

  return (
    <div>
      <h1 className="h3 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Propiedades
      </h1>
      <p className="text-secondary small mb-2 mb-md-3">
        Consultá y gestioná tu portafolio de propiedades: estado, tipo y rentas en un solo lugar.
      </p>

      <AdminFilterCard
        compact
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            compact
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar propiedades..."
            ariaLabel="Buscar propiedades"
            wrapperStyle={{ minWidth: 160, maxWidth: 320, flex: '1 1 200px' }}
          />
        }
        trailing={
          <Button type="button" variant="success" size="sm" className="fw-semibold rounded-3 px-3 shadow-sm">
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
              minWidth={136}
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
              minWidth={136}
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
        <Table hover size="sm" className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th
                scope="col"
                className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-3"
                style={{ width: 64 }}
              >
                Imagen
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-0">
                Propiedad
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">Tipo</th>
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
            {properties.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center text-secondary py-4 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              properties.map((p) => (
                <tr key={p.id}>
                  <td className="ps-3 border-0 py-2">
                    <img
                      src={p.imagenSrc}
                      alt=""
                      width={48}
                      height={48}
                      className="rounded-3 object-fit-cover bg-light flex-shrink-0 d-block border"
                      style={{ width: 48, height: 48, objectFit: 'cover' }}
                    />
                  </td>
                  <td className="ps-2 ps-md-0 border-0 py-2">
                    <div className="fw-semibold">{p.nombre}</div>
                    <div className="small text-secondary">{p.direccion}</div>
                  </td>
                  <td className="border-0 py-2">{p.tipo}</td>
                  <td
                    className="border-0 py-2 fw-semibold"
                    style={{ color: 'var(--inmobi-header-accent)' }}
                  >
                    {p.renta}
                  </td>
                  <td className="border-0 py-2">
                    {p.estadoBadgeBg ? (
                      <Badge
                        pill
                        bg={p.estadoBadgeBg}
                        text={p.estadoBadgeText}
                        className={p.estadoBadgeClass}
                      >
                        {p.estadoLabel}
                      </Badge>
                    ) : (
                      <Badge pill className={p.estadoBadgeClass}>
                        {p.estadoLabel}
                      </Badge>
                    )}
                  </td>
                  <td className="border-0 py-2 text-center">
                    <Button
                      type="button"
                      variant="outline-primary"
                      size="sm"
                      className="rounded-3 px-2 fw-semibold shadow-none"
                      aria-label={`Ver detalle de ${p.nombre}`}
                    >
                      Detalle
                    </Button>
                  </td>
                  <td className="text-end pe-2 border-0 py-2">
                    <RegistryIconRowActions resourceLabel="propiedad" showView={false} />
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

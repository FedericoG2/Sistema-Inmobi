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
const inquilinos = [
  {
    id: '1',
    nombre: 'María González',
    email: 'maria.gonzalez@mail.com',
    telefono: '+54 9 11 4123-8891',
    documento: 'DNI 32.884.921',
    propiedad: 'Depto 4º A · Av. Corrientes 1842, CABA',
    estadoContratoLabel: 'Activo',
    estadoBadgeClass: 'text-bg-success text-uppercase small',
  },
  {
    id: '2',
    nombre: 'Construcciones del Sur SA',
    email: 'admin@sursa.com.ar',
    telefono: '+54 351 478-9200',
    documento: 'CUIT 30-71655421-9',
    propiedad: 'Galpón · Ruta Provincial 36 km 412',
    estadoContratoLabel: 'Activo',
    estadoBadgeClass: 'text-bg-success text-uppercase small',
  },
  {
    id: '3',
    nombre: 'Luciano Fernández',
    email: 'lucianof@gmail.com',
    telefono: '+54 9 351 62-8844',
    documento: 'DNI 28.901.055',
    propiedad: 'Duplex · B° Nueva Córdoba',
    estadoContratoLabel: 'Por vencer',
    estadoBadgeClass: 'text-uppercase small',
    estadoBadgeBg: 'warning',
    estadoBadgeText: 'dark',
  },
  {
    id: '4',
    nombre: 'Ana Martínez',
    email: 'ana.martinez@outlook.com',
    telefono: null,
    documento: 'DNI 35.102.440',
    propiedad: 'Casa · Gral. Paz 2100, Córdoba',
    estadoContratoLabel: 'Sin contrato',
    estadoBadgeClass: 'text-bg-secondary text-uppercase small',
  },
]

export function Inquilinos() {
  const [search, setSearch] = useState('')
  const [estadoContrato, setEstadoContrato] = useState('todos')
  const [tipo, setTipo] = useState('todos')

  return (
    <div>
      <h1 className="h3 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Inquilinos
      </h1>
      <p className="text-secondary small mb-2 mb-md-3">
        Administrá inquilinos y contratos: datos de contacto y vínculo con cada inmueble.
      </p>

      <AdminFilterCard
        compact
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            compact
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar inquilinos..."
            ariaLabel="Buscar inquilinos"
            wrapperStyle={{ minWidth: 160, maxWidth: 320, flex: '1 1 200px' }}
          />
        }
        trailing={
          <Button type="button" variant="success" size="sm" className="fw-semibold rounded-3 px-3 shadow-sm">
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
              minWidth={136}
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
              minWidth={136}
            >
              <option value="todos">Tipo: Todos</option>
              <option value="persona">Persona física</option>
              <option value="empresa">Persona jurídica</option>
            </AdminFilterSelect>
          </>
        }
      />

      <AdminTableCard>
        <Table hover size="sm" className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-3">
                Inquilino
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Contacto
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Documento
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Propiedad
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Contrato
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
            {inquilinos.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center text-secondary py-4 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              inquilinos.map((q) => (
                <tr key={q.id}>
                  <td className="ps-3 border-0 py-2">
                    <div className="fw-semibold">{q.nombre}</div>
                  </td>
                  <td className="border-0 py-2">
                    <div className="small text-secondary text-break">{q.email}</div>
                    <div className="small text-secondary">{q.telefono ?? '—'}</div>
                  </td>
                  <td className="border-0 py-2">{q.documento}</td>
                  <td className="border-0 py-2">{q.propiedad}</td>
                  <td className="border-0 py-2">
                    {q.estadoBadgeBg ? (
                      <Badge pill bg={q.estadoBadgeBg} text={q.estadoBadgeText} className={q.estadoBadgeClass}>
                        {q.estadoContratoLabel}
                      </Badge>
                    ) : (
                      <Badge pill className={q.estadoBadgeClass}>
                        {q.estadoContratoLabel}
                      </Badge>
                    )}
                  </td>
                  <td className="border-0 py-2 text-center">
                    <Button
                      type="button"
                      variant="outline-primary"
                      size="sm"
                      className="rounded-3 px-2 fw-semibold shadow-none"
                      aria-label={`Ver detalle de ${q.nombre}`}
                    >
                      Detalle
                    </Button>
                  </td>
                  <td className="text-end pe-2 border-0 py-2">
                    <RegistryIconRowActions resourceLabel="inquilino" showView={false} />
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

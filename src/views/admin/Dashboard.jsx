import {
  Building2,
  CalendarClock,
  FileText,
  Hash,
  Users,
  Wrench,
} from 'lucide-react'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Table from 'react-bootstrap/Table'
import { DashboardStatCard } from '../../components/admin/DashboardStatCard'

const iconSize = 18

/** Datos de ejemplo para maquetación; sustituir por respuesta del API. */
const actividadRecienteEstatica = [
  {
    id: '1',
    tituloPrincipal: 'Local comercial San Martín',
    subtitulo: 'San Martín 1450, CABA · PB frente',
    accion: 'Nueva propiedad cargada',
    fecha: '10/05/2026 · 14:20',
    monto: 'REF-PR-1844',
    estadoLabel: 'Disponible',
    estadoBadgeProps: {
      pill: true,
      className: 'text-bg-primary text-uppercase small',
    },
  },
  {
    id: '2',
    tituloPrincipal: 'María González',
    subtitulo: 'Depto 4º A · Av. Corrientes 1842, CABA',
    accion: 'Nuevo contrato generado',
    fecha: '10/05/2026 · 10:05',
    monto: 'CT‑2026‑0910',
    estadoLabel: 'Vigente',
    estadoBadgeProps: {
      pill: true,
      className: 'text-bg-success text-uppercase small',
    },
  },
  {
    id: '3',
    tituloPrincipal: 'Luciano Fernández',
    subtitulo: 'Duplex · B° Nueva Córdoba',
    accion: 'Nuevo reclamo abierto',
    fecha: '09/05/2026 · 11:40',
    monto: '#REC‑0918',
    estadoLabel: 'Abierto',
    estadoBadgeProps: {
      pill: true,
      className: 'text-bg-danger text-uppercase small',
    },
  },
]

export function Dashboard() {
  return (
    <div>
      <h1 className="h4 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Panel de Control
      </h1>
      <p className="text-secondary small mb-2 mb-md-3">
        Bienvenido de nuevo. Aquí tienes el resumen de tus activos hoy.
      </p>

      <Row className="row-cols-2 row-cols-md-3 row-cols-xl-6 g-2 mb-3">
          <Col>
            <DashboardStatCard
              tone={1}
              label="Propiedades Totales"
              value="124"
              icon={<Building2 size={iconSize} strokeWidth={2} aria-hidden />}
            />
          </Col>
          <Col>
            <DashboardStatCard
              tone={2}
              label="Inquilinos Activos"
              value="98"
              icon={<Users size={iconSize} strokeWidth={2} aria-hidden />}
            />
          </Col>
          <Col>
            <DashboardStatCard
              tone={3}
              label="Cantidad de aumentos este mes"
              value="15"
              icon={<Hash size={iconSize} strokeWidth={2} aria-hidden />}
            />
          </Col>
          <Col>
            <DashboardStatCard
              tone={4}
              label="Cantidad de aumentos próximo mes"
              value="12"
              icon={<CalendarClock size={iconSize} strokeWidth={2} aria-hidden />}
            />
          </Col>
          <Col>
            <DashboardStatCard
              tone={5}
              label="Reclamos abiertos"
              value="07"
              icon={<Wrench size={iconSize} strokeWidth={2} aria-hidden />}
            />
          </Col>
          <Col>
            <DashboardStatCard
              tone={6}
              label="Contratos Activos"
              value="186"
              icon={<FileText size={iconSize} strokeWidth={2} aria-hidden />}
            />
          </Col>
      </Row>

      <Card className="border-0 shadow-sm rounded-3">
        <Card.Body className="py-3">
          <Stack
            direction="horizontal"
            className="flex-wrap align-items-center justify-content-between gap-2 mb-2"
          >
            <h2 className="h6 fw-bold mb-0" style={{ color: 'var(--inmobi-navy)' }}>
              Actividad Reciente
            </h2>
            <a href="#" className="small link-primary text-decoration-none fw-semibold">
              Ver todo el historial
            </a>
          </Stack>

          <div className="table-responsive">
            <Table hover size="sm" className="align-middle mb-0 small">
              <thead>
                <tr className="border-bottom">
                  <th className="text-uppercase text-secondary fw-semibold border-0 py-2 ps-2" style={{ fontSize: '0.65rem' }}>
                    Inquilino / Propiedad
                  </th>
                  <th className="text-uppercase text-secondary fw-semibold border-0 py-2" style={{ fontSize: '0.65rem' }}>
                    Tipo de acción
                  </th>
                  <th className="text-uppercase text-secondary fw-semibold border-0 py-2" style={{ fontSize: '0.65rem' }}>
                    Fecha
                  </th>
                  <th className="text-uppercase text-secondary fw-semibold border-0 py-2" style={{ fontSize: '0.65rem' }}>
                    Monto / Ref.
                  </th>
                  <th className="text-uppercase text-secondary fw-semibold border-0 py-2 pe-2" style={{ fontSize: '0.65rem' }}>
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {actividadRecienteEstatica.map((row) => (
                  <tr key={row.id}>
                    <td className="border-0 py-2 ps-2">
                      <div className="fw-semibold">{row.tituloPrincipal}</div>
                      <div className="text-secondary">{row.subtitulo}</div>
                    </td>
                    <td className="border-0 py-2">{row.accion}</td>
                    <td className="border-0 py-2 text-secondary">{row.fecha}</td>
                    <td className="border-0 py-2 fw-medium">{row.monto}</td>
                    <td className="border-0 py-2 pe-2">
                      <Badge {...row.estadoBadgeProps}>{row.estadoLabel}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

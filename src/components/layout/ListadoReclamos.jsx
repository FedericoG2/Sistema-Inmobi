import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { AdminTableCard } from '../admin/AdminTableCard'

/** Datos de ejemplo para maquetación; sustituir por respuesta del API. */
const reclamos = [
  {
    id: '1',
    numero: 'REC‑0892',
    fecha: '10/05/2026 · 11:40',
    area: 'Mantenimiento',
    descripcion: 'Humedad en living — Depto 4º A, Corrientes 1842',
  },
  {
    id: '2',
    numero: 'REC‑0901',
    fecha: '08/05/2026 · 16:22',
    area: 'Mantenimiento',
    descripcion: 'Calefactores del local — Pueyrredón 892 PB',
  },
  {
    id: '3',
    numero: 'REC‑0876',
    fecha: '05/05/2026 · 09:15',
    area: 'Administración',
    descripcion: 'Consulta por débito automático y fecha de vencimiento',
  },
  {
    id: '4',
    numero: 'REC‑0855',
    fecha: '28/04/2026 · 14:08',
    area: 'Legales',
    descripcion: 'Solicitud de copia de anexo de índice de actualización',
  },
  {
    id: '5',
    numero: 'REC‑0840',
    fecha: '22/04/2026 · 10:30',
    area: 'Atención al cliente',
    descripcion: 'Reclamo por ruidos — unidad lindera (mediación)',
  },
]

export function ListadoReclamos() {
  return (
    <AdminTableCard>
      <Table hover size="sm" className="align-middle mb-0">
        <thead>
          <tr className="border-bottom">
            <th
              scope="col"
              className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-3 pe-2 text-start"
            >
              Reclamo
            </th>
            <th
              scope="col"
              className="text-uppercase small text-secondary fw-semibold border-0 py-2 px-2 text-start"
            >
              Fecha de reclamo
            </th>
            <th
              scope="col"
              className="text-uppercase small text-secondary fw-semibold border-0 py-2 px-2 text-start"
            >
              Área de reclamo
            </th>
            <th
              scope="col"
              className="text-uppercase small text-secondary fw-semibold border-0 py-2 px-2 text-start"
            >
              Descripción
            </th>
            <th
              scope="col"
              className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-2 pe-3 text-end"
            >
              Detalle
            </th>
          </tr>
        </thead>
        <tbody>
          {reclamos.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-secondary py-4 border-0">
                Sin datos
              </td>
            </tr>
          ) : (
            reclamos.map((r) => (
              <tr key={r.id}>
                <td className="ps-3 pe-2 border-0 py-2 fw-semibold text-start align-top">{r.numero}</td>
                <td className="border-0 py-2 px-2 small text-secondary text-start align-top">{r.fecha}</td>
                <td className="border-0 py-2 px-2 text-start align-top">{r.area}</td>
                <td className="border-0 py-2 px-2 small text-start align-top">{r.descripcion}</td>
                <td className="ps-2 pe-3 border-0 py-2 text-end align-top">
                  <Button
                    type="button"
                    variant="outline-primary"
                    size="sm"
                    className="rounded-3 px-2 fw-semibold shadow-none"
                    aria-label={`Ver detalle del reclamo ${r.numero}`}
                  >
                    Detalle
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </AdminTableCard>
  )
}

import Table from 'react-bootstrap/Table'
import { AdminTableCard } from '../admin/AdminTableCard'

/** Sustituir por datos del API; vacío = fila «Sin datos». */
const reclamos = []

export function ListadoReclamos() {
  return (
    <AdminTableCard>
      <Table hover className="align-middle mb-0">
        <thead>
          <tr className="border-bottom">
            <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 ps-4">#</th>
            <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
              Fecha de reclamo
            </th>
            <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
              Área de Reclamo
            </th>
            <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
              Condición del reclamo
            </th>
            <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 text-end pe-4">
              Ver reclamo
            </th>
          </tr>
        </thead>
        <tbody>
          {reclamos.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-secondary py-5 border-0">
                Sin datos
              </td>
            </tr>
          ) : (
            reclamos.map((r) => (
              <tr key={r.id}>
                <td className="ps-4 border-0 py-3">{r.numero}</td>
                <td className="border-0 py-3">{r.fecha}</td>
                <td className="border-0 py-3">{r.area}</td>
                <td className="border-0 py-3">{r.condicion}</td>
                <td className="text-end pe-4 border-0 py-3">{r.accion}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </AdminTableCard>
  )
}

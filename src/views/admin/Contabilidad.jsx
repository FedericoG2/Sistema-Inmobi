import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Table from 'react-bootstrap/Table'
import { AdminFilterCard } from '../../components/admin/AdminFilterCard'
import { AdminFilterSelect } from '../../components/admin/AdminFilterSelect'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { AdminTableCard } from '../../components/admin/AdminTableCard'

/** Sustituir por datos del API; vacío = fila «Sin datos». */
const contratosActualizacion = []

/** Historial de confirmaciones manuales (trazabilidad). */
const historialAjustes = []

/** Valores de índices para el panel de control. */
const indicesConfigurados = []

function normaliza(s) {
  return String(s).trim().toLowerCase()
}

export function Contabilidad() {
  const [search, setSearch] = useState('')
  const [mesLiquidacion, setMesLiquidacion] = useState('todos')
  const [estadoConfirmacion, setEstadoConfirmacion] = useState('todos')

  const filasActualizacion = useMemo(() => {
    let rows = [...contratosActualizacion]
    if (search.trim()) {
      const q = normaliza(search)
      rows = rows.filter(
        (r) =>
          normaliza(r.codigoContrato).includes(q) ||
          normaliza(r.inquilino).includes(q) ||
          normaliza(r.propiedad ?? '').includes(q),
      )
    }
    if (mesLiquidacion !== 'todos') {
      rows = rows.filter((r) => r.mesLiquidacionClave === mesLiquidacion)
    }
    if (estadoConfirmacion !== 'todos') {
      rows = rows.filter((r) => r.confirmacionClave === estadoConfirmacion)
    }
    return rows
  }, [search, mesLiquidacion, estadoConfirmacion])

  return (
    <div>
      <h1 className="h4 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Contabilidad
      </h1>
      <p className="text-secondary small mb-2 mb-md-3" style={{ maxWidth: '42rem' }}>
        Automatización del cálculo de actualizaciones de alquiler: el sistema aplica los índices
        configurados (por ejemplo IPC), sugiere el nuevo monto y requiere tu confirmación para
        actualizar el contrato, generar el comprobante y notificar al inquilino.
      </p>

      <h2 className="h6 fw-bold mb-2 mt-1" style={{ color: 'var(--inmobi-navy)' }}>
        Actualizaciones de alquiler
      </h2>
      <p className="text-secondary small mb-3">
        Contratos vigentes con ajuste según frecuencia pactada. El valor sugerido se obtiene en
        segundo plano; la confirmación manual es obligatoria para aplicar el cambio.
      </p>

      <AdminFilterCard
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por contrato, inquilino o propiedad..."
            ariaLabel="Buscar en actualizaciones"
            wrapperStyle={{ minWidth: 200, maxWidth: 360, flex: '1 1 220px' }}
          />
        }
        filters={
          <>
            <AdminFilterSelect
              id="conta-filtro-mes"
              label="Mes de liquidación"
              value={mesLiquidacion}
              onChange={(e) => setMesLiquidacion(e.target.value)}
              minWidth={200}
            >
              <option value="todos">Mes: Todos</option>
              <option value="01">Enero</option>
              <option value="02">Febrero</option>
              <option value="03">Marzo</option>
              <option value="04">Abril</option>
              <option value="05">Mayo</option>
              <option value="06">Junio</option>
              <option value="07">Julio</option>
              <option value="08">Agosto</option>
              <option value="09">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </AdminFilterSelect>
            <AdminFilterSelect
              id="conta-filtro-confirmacion"
              label="Estado de confirmación"
              value={estadoConfirmacion}
              onChange={(e) => setEstadoConfirmacion(e.target.value)}
              minWidth={220}
            >
              <option value="todos">Confirmación: Todas</option>
              <option value="pendiente">Pendiente de confirmar</option>
              <option value="confirmado">Confirmado</option>
            </AdminFilterSelect>
          </>
        }
      />

      <div className="mb-4">
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
                  Frecuencia
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Período
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Monto actual
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Nuevo monto (sugerido)
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Índice
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Confirmación
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 text-end pe-4">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {filasActualizacion.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center text-secondary py-5 border-0">
                    Sin datos
                  </td>
                </tr>
              ) : (
                filasActualizacion.map((r) => (
                  <tr key={r.id}>
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
                          <Calculator size={18} strokeWidth={1.75} />
                        </span>
                        <div>
                          <div className="fw-semibold">{r.codigoContrato}</div>
                          <div className="small text-secondary">{r.propiedad}</div>
                        </div>
                      </Stack>
                    </td>
                    <td className="border-0 py-3">{r.inquilino}</td>
                    <td className="border-0 py-3">{r.frecuenciaLabel}</td>
                    <td className="border-0 py-3">{r.periodoLabel}</td>
                    <td className="border-0 py-3 fw-semibold">{r.montoActual}</td>
                    <td
                      className="border-0 py-3 fw-semibold"
                      style={{ color: 'var(--inmobi-header-accent)' }}
                    >
                      {r.montoSugerido}
                    </td>
                    <td className="border-0 py-3">
                      <div className="small">{r.indiceLabel}</div>
                      {r.variacionLabel ? (
                        <div className="small text-secondary">{r.variacionLabel}</div>
                      ) : null}
                    </td>
                    <td className="border-0 py-3">
                      {r.confirmacionClave === 'confirmado' ? (
                        <Badge pill className="text-bg-success text-uppercase small">
                          Confirmado
                        </Badge>
                      ) : (
                        <Badge pill bg="warning" text="dark" className="text-uppercase small">
                          Pendiente
                        </Badge>
                      )}
                    </td>
                    <td className="text-end pe-4 border-0 py-3">
                      <Button
                        type="button"
                        variant="success"
                        size="sm"
                        className="fw-semibold rounded-3 px-3"
                        disabled={r.confirmacionClave === 'confirmado'}
                      >
                        Confirmar
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </AdminTableCard>
      </div>

      <h2 className="h6 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
        Historial de ajustes confirmados
      </h2>
      <p className="text-secondary small mb-3">
        Trazabilidad: cada validación queda asociada al usuario y al contrato.
      </p>

      <div className="mb-4">
        <AdminTableCard>
          <Table hover className="align-middle mb-0">
            <thead>
              <tr className="border-bottom">
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 ps-4">
                  Fecha
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Contrato
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Validó
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Monto anterior
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                  Monto nuevo
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 text-end pe-4">
                  Comprobante
                </th>
              </tr>
            </thead>
            <tbody>
              {historialAjustes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-secondary py-5 border-0">
                    Sin datos
                  </td>
                </tr>
              ) : (
                historialAjustes.map((h) => (
                  <tr key={h.id}>
                    <td className="ps-4 border-0 py-3">{h.fechaLabel}</td>
                    <td className="border-0 py-3 fw-semibold">{h.codigoContrato}</td>
                    <td className="border-0 py-3">{h.usuarioValidador}</td>
                    <td className="border-0 py-3">{h.montoAnterior}</td>
                    <td
                      className="border-0 py-3 fw-semibold"
                      style={{ color: 'var(--inmobi-header-accent)' }}
                    >
                      {h.montoNuevo}
                    </td>
                    <td className="text-end pe-4 border-0 py-3">
                      <Button type="button" variant="outline-secondary" size="sm" className="rounded-3">
                        Ver detalle
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </AdminTableCard>
      </div>

      <h2 className="h6 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
        Panel de control de índices
      </h2>
      <p className="text-secondary small mb-3">
        Valores aplicados al cálculo. Podés cargar o corregir manualmente si falla la API externa
        o el período requiere un ajuste puntual.
      </p>

      <AdminTableCard>
        <Table hover className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 ps-4">
                Índice
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Período de referencia
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Valor
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Origen
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                Actualizado
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 text-end pe-4">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {indicesConfigurados.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-secondary py-5 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              indicesConfigurados.map((i) => (
                <tr key={i.id}>
                  <td className="ps-4 border-0 py-3 fw-semibold">{i.nombre}</td>
                  <td className="border-0 py-3">{i.periodoLabel}</td>
                  <td className="border-0 py-3">{i.valorLabel}</td>
                  <td className="border-0 py-3">
                    {i.origenClave === 'api' ? (
                      <Badge bg="light" text="dark" className="border small">
                        API
                      </Badge>
                    ) : (
                      <Badge bg="secondary" className="small">
                        Manual
                      </Badge>
                    )}
                  </td>
                  <td className="border-0 py-3 small text-secondary">{i.actualizadoLabel}</td>
                  <td className="text-end pe-4 border-0 py-3">
                    <Button type="button" variant="outline-primary" size="sm" className="rounded-3">
                      Cargar / editar
                    </Button>
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

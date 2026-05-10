import { useMemo, useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { AdminFilterCard } from '../../components/admin/AdminFilterCard'
import { AdminFilterSelect } from '../../components/admin/AdminFilterSelect'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { AdminTableCard } from '../../components/admin/AdminTableCard'

/** Datos de ejemplo para maquetación; sustituir por respuesta del API. */
const contratosActualizacion = [
  {
    id: '1',
    codigoContrato: 'CT‑2026‑0892',
    propiedad: 'Av. Corrientes 1842, Depto 4º «A», CABA',
    inquilino: 'María González',
    frecuenciaLabel: 'Semestral',
    periodoLabel: 'Jun 2026 — Dic 2026',
    montoActual: '$ 385.000',
    montoSugerido: '$ 401.760',
    indiceLabel: 'IPC CABA',
    variacionLabel: 'Variación aplicada: +4,35 %',
    confirmacionClave: 'pendiente',
    mesLiquidacionClave: '06',
  },
  {
    id: '2',
    codigoContrato: 'CT‑2025‑4821‑C',
    propiedad: 'Galpón industrial · Ruta 36 km 412',
    inquilino: 'Construcciones del Sur SA',
    frecuenciaLabel: 'Cuatrimestral',
    periodoLabel: 'May — Ago 2026',
    montoActual: '$ 940.000',
    montoSugerido: '$ 961.180',
    indiceLabel: 'IPC Nacional',
    variacionLabel: '+2,25 % (serie sin estacionalidad)',
    confirmacionClave: 'pendiente',
    mesLiquidacionClave: '05',
  },
  {
    id: '3',
    codigoContrato: 'CT‑2024‑7740',
    propiedad: 'Duplex · B° Nueva Córdoba',
    inquilino: 'Luciano Fernández',
    frecuenciaLabel: 'Semestral',
    periodoLabel: 'Jul 2025 — Ene 2026',
    montoActual: '$ 312.000',
    montoSugerido: '$ 324.890',
    indiceLabel: 'IPC CABA + cláusula mixta',
    variacionLabel: '+4,13 %',
    confirmacionClave: 'confirmado',
    mesLiquidacionClave: '05',
  },
  {
    id: '4',
    codigoContrato: 'CT‑2024‑9911',
    propiedad: 'Oficina · Av. Libertador 11200',
    inquilino: 'Estudio LK SRL',
    frecuenciaLabel: 'Anual',
    periodoLabel: 'Vto. ajuste: dic 2025',
    montoActual: '$ 1.280.000',
    montoSugerido: '$ 1.342.400',
    indiceLabel: 'ICL / IPC combo',
    variacionLabel: 'IPC acum. 12 m: +4,88 %',
    confirmacionClave: 'pendiente',
    mesLiquidacionClave: '06',
  },
]

/** Historial de confirmaciones manuales (trazabilidad). */
const historialAjustes = [
  {
    id: 'h1',
    fechaLabel: '28/04/2026 · 11:40',
    codigoContrato: 'CT‑2024‑4102',
    usuarioValidador: 'admin@inmobi.com',
    montoAnterior: '$ 410.000',
    montoNuevo: '$ 426.830',
  },
  {
    id: 'h2',
    fechaLabel: '15/04/2026 · 09:05',
    codigoContrato: 'CT‑2025‑1208',
    usuarioValidador: 'carolina.vega@inmobi.com',
    montoAnterior: '$ 265.500',
    montoNuevo: '$ 274.120',
  },
  {
    id: 'h3',
    fechaLabel: '02/04/2026 · 16:22',
    codigoContrato: 'CT‑2023‑0891',
    usuarioValidador: 'admin@inmobi.com',
    montoAnterior: '$ 890.000',
    montoNuevo: '$ 922.450',
  },
]

/** Valores de índices para el panel de control. */
const indicesConfigurados = [
  {
    id: 'i1',
    nombre: 'IPC CABA (INDEC)',
    periodoLabel: 'Feb 2026 (publicación Mar 2026)',
    valorLabel: '4,35 %',
    origenClave: 'api',
    actualizadoLabel: '12/03/2026 · 08:15 (API INDEC)',
  },
  {
    id: 'i2',
    nombre: 'IPC Nacional nivel general',
    periodoLabel: 'Feb 2026',
    valorLabel: '3,42 %',
    origenClave: 'api',
    actualizadoLabel: '12/03/2026 · 08:20 (API INDEC)',
  },
  {
    id: 'i3',
    nombre: 'ICL · serie histórica',
    periodoLabel: '1º tri. 2026 (revisión 2)',
    valorLabel: '12,8 % acum. anual',
    origenClave: 'manual',
    actualizadoLabel: '10/03/2026 · carga manual',
  },
]

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
      <h1 className="h3 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Contabilidad
      </h1>
      <p className="text-secondary small mb-3" style={{ maxWidth: '40rem' }}>
        Actualizaciones de alquiler según contrato e índices (IPC y otros): el sistema propone los
        nuevos montos, vos confirmás el ajuste y recién entonces se aplica el valor, se genera el
        comprobante y se notifica al inquilino.
      </p>

      <AdminFilterCard
        compact
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            compact
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por contrato, inquilino o propiedad..."
            ariaLabel="Buscar en actualizaciones"
            wrapperStyle={{ minWidth: 160, maxWidth: 320, flex: '1 1 200px' }}
          />
        }
        filters={
          <>
            <AdminFilterSelect
              id="conta-filtro-mes"
              label="Mes de liquidación"
              value={mesLiquidacion}
              onChange={(e) => setMesLiquidacion(e.target.value)}
              minWidth={136}
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
              minWidth={136}
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
          <Table
            hover
            size="sm"
            className="align-middle mb-0"
            style={{ tableLayout: 'fixed', width: '100%' }}
          >
            <colgroup>
              <col style={{ width: '8%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '7%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '8%' }} />
              <col style={{ width: '8%' }} />
              <col style={{ width: '14%' }} />
              <col style={{ width: '9%' }} />
              <col style={{ width: '11%' }} />
            </colgroup>
            <thead>
              <tr className="border-bottom">
                <th
                  className="text-uppercase text-secondary fw-semibold border-0 py-2 ps-3 lh-sm"
                  style={{ fontSize: '0.65rem' }}
                >
                  Contrato
                </th>
                <th className="text-uppercase text-secondary fw-semibold border-0 py-2 lh-sm" style={{ fontSize: '0.65rem' }}>
                  Propiedad
                </th>
                <th className="text-uppercase text-secondary fw-semibold border-0 py-2 lh-sm" style={{ fontSize: '0.65rem' }}>
                  Inquilino
                </th>
                <th className="text-uppercase text-secondary fw-semibold border-0 py-2 lh-sm" style={{ fontSize: '0.65rem' }}>
                  Frec.
                </th>
                <th className="text-uppercase text-secondary fw-semibold border-0 py-2 lh-sm" style={{ fontSize: '0.65rem' }}>
                  Período
                </th>
                <th className="text-uppercase text-secondary fw-semibold border-0 py-2 lh-sm" style={{ fontSize: '0.65rem' }}>
                  Actual
                </th>
                <th className="text-uppercase text-secondary fw-semibold border-0 py-2 lh-sm" style={{ fontSize: '0.65rem' }}>
                  Sugerido
                </th>
                <th className="text-uppercase text-secondary fw-semibold border-0 py-2 lh-sm" style={{ fontSize: '0.65rem' }}>
                  Índice
                </th>
                <th className="text-uppercase text-secondary fw-semibold border-0 py-2 lh-sm" style={{ fontSize: '0.65rem' }}>
                  Estado
                </th>
                <th
                  className="text-uppercase text-secondary fw-semibold border-0 py-2 pe-2 text-end lh-sm"
                  style={{ fontSize: '0.65rem' }}
                >
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {filasActualizacion.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center text-secondary py-4 border-0">
                    Sin datos
                  </td>
                </tr>
              ) : (
                filasActualizacion.map((r) => (
                  <tr key={r.id}>
                    <td className="ps-3 border-0 py-2 fw-semibold small text-break">{r.codigoContrato}</td>
                    <td className="border-0 py-2 small text-secondary text-break lh-sm">{r.propiedad}</td>
                    <td className="border-0 py-2 small text-break lh-sm">{r.inquilino}</td>
                    <td className="border-0 py-2 small lh-sm text-break">{r.frecuenciaLabel}</td>
                    <td className="border-0 py-2 small text-secondary text-break lh-sm">{r.periodoLabel}</td>
                    <td className="border-0 py-2 fw-semibold small text-nowrap">{r.montoActual}</td>
                    <td
                      className="border-0 py-2 fw-semibold small text-nowrap"
                      style={{ color: 'var(--inmobi-header-accent)' }}
                    >
                      {r.montoSugerido}
                    </td>
                    <td className="border-0 py-2 small lh-sm text-break">
                      <span className="d-block">{r.indiceLabel}</span>
                      {r.variacionLabel ? (
                        <span className="d-block text-secondary" style={{ fontSize: '0.7rem' }}>
                          {r.variacionLabel}
                        </span>
                      ) : null}
                    </td>
                    <td className="border-0 py-2">
                      {r.confirmacionClave === 'confirmado' ? (
                        <Badge
                          pill
                          bg="primary"
                          className="text-uppercase py-1 px-2"
                          style={{ fontSize: '0.65rem' }}
                          title="Confirmado"
                        >
                          Confirm.
                        </Badge>
                      ) : (
                        <Badge
                          pill
                          bg="warning"
                          text="dark"
                          className="text-uppercase py-1 px-2"
                          style={{ fontSize: '0.65rem' }}
                          title="Pendiente de confirmar"
                        >
                          Pend.
                        </Badge>
                      )}
                    </td>
                    <td className="text-end pe-2 border-0 py-2">
                      <Button
                        type="button"
                        variant="success"
                        size="sm"
                        className="fw-semibold rounded-2 px-2 py-1"
                        style={{ fontSize: '0.75rem' }}
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
          <Table hover size="sm" className="align-middle mb-0">
            <thead>
              <tr className="border-bottom">
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-3">
                  Fecha
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                  Contrato
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                  Validó
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                  Monto anterior
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                  Monto nuevo
                </th>
                <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 text-end pe-2">
                  Comprobante
                </th>
              </tr>
            </thead>
            <tbody>
              {historialAjustes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-secondary py-4 border-0">
                    Sin datos
                  </td>
                </tr>
              ) : (
                historialAjustes.map((h) => (
                  <tr key={h.id}>
                    <td className="ps-3 border-0 py-2 small text-break">{h.fechaLabel}</td>
                    <td className="border-0 py-2 fw-semibold small">{h.codigoContrato}</td>
                    <td className="border-0 py-2 small text-break">{h.usuarioValidador}</td>
                    <td className="border-0 py-2 small text-nowrap">{h.montoAnterior}</td>
                    <td
                      className="border-0 py-2 fw-semibold small text-nowrap"
                      style={{ color: 'var(--inmobi-header-accent)' }}
                    >
                      {h.montoNuevo}
                    </td>
                    <td className="text-end pe-2 border-0 py-2">
                      <Button type="button" variant="outline-secondary" size="sm" className="rounded-3 px-2 py-1">
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
        <Table hover size="sm" className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-3">
                Índice
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Período ref.
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Valor
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Origen
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Actualizado
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 text-end pe-2">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {indicesConfigurados.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-secondary py-4 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              indicesConfigurados.map((i) => (
                <tr key={i.id}>
                  <td className="ps-3 border-0 py-2 fw-semibold small text-break">{i.nombre}</td>
                  <td className="border-0 py-2 small text-break">{i.periodoLabel}</td>
                  <td className="border-0 py-2 small text-nowrap">{i.valorLabel}</td>
                  <td className="border-0 py-2">
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
                  <td className="border-0 py-2 small text-secondary text-break">{i.actualizadoLabel}</td>
                  <td className="text-end pe-2 border-0 py-2">
                    <Button
                      type="button"
                      variant="outline-primary"
                      size="sm"
                      className="rounded-3 px-2 py-1"
                      title="Cargar o editar valor del índice"
                    >
                      Editar
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

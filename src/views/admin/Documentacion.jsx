import { useMemo, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { AdminFilterCard } from '../../components/admin/AdminFilterCard'
import { AdminFilterSelect } from '../../components/admin/AdminFilterSelect'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { AdminTableCard } from '../../components/admin/AdminTableCard'

/**
 * Sustituir por datos del API.
 * `tipoClave` alinea con el filtro «Tipo de documento».
 */
const documentacion = []

function normaliza(s) {
  return s.trim().toLowerCase()
}

export function Documentacion() {
  const [search, setSearch] = useState('')
  const [tipoDoc, setTipoDoc] = useState('todos')
  const [periodo, setPeriodo] = useState('todos')
  const [legajo, setLegajo] = useState('todos')

  const filas = useMemo(() => {
    let rows = [...documentacion]
    if (search.trim()) {
      const q = normaliza(search)
      rows = rows.filter((d) => normaliza(d.nombre).includes(q))
    }
    if (tipoDoc !== 'todos') {
      rows = rows.filter((d) => d.tipoClave === tipoDoc)
    }
    if (legajo !== 'todos') {
      rows = rows.filter((d) => d.legajoClave === legajo)
    }
    if (periodo !== 'todos' && rows.length) {
      const ahora = new Date()
      const limite = new Date(ahora)
      if (periodo === '30') limite.setDate(limite.getDate() - 30)
      if (periodo === '90') limite.setDate(limite.getDate() - 90)
      if (periodo === 'anio') limite.setFullYear(limite.getFullYear() - 1)
      rows = rows.filter((d) => {
        if (!d.fechaISO) return true
        const f = new Date(d.fechaISO)
        return f >= limite
      })
    }
    return rows
  }, [search, tipoDoc, periodo, legajo])

  return (
    <div>
      <h1 className="h3 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Documentación
      </h1>
      <p className="text-secondary small mb-2 mb-md-3" style={{ maxWidth: '42rem' }}>
        Consultá contratos, anexos y archivos legales del legajo. Solo visualización y descarga.
      </p>

      <AdminFilterCard
        compact
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            compact
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre de documento..."
            ariaLabel="Buscar documentación"
            wrapperStyle={{ minWidth: 160, maxWidth: 320, flex: '1 1 200px' }}
          />
        }
        filters={
          <>
            <AdminFilterSelect
              id="doc-filtro-tipo"
              label="Tipo de documento"
              value={tipoDoc}
              onChange={(e) => setTipoDoc(e.target.value)}
              minWidth={136}
            >
              <option value="todos">Tipo: Todos</option>
              <option value="contrato">Contrato</option>
              <option value="identidad">Identidad / DNI</option>
              <option value="recibo">Recibo / comprobante</option>
              <option value="garantia">Garantía</option>
              <option value="otro">Otro</option>
            </AdminFilterSelect>
            <AdminFilterSelect
              id="doc-filtro-periodo"
              label="Período de carga"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              minWidth={136}
            >
              <option value="todos">Período: Todos</option>
              <option value="30">Últimos 30 días</option>
              <option value="90">Últimos 90 días</option>
              <option value="anio">Último año</option>
            </AdminFilterSelect>
            <AdminFilterSelect
              id="doc-filtro-legajo"
              label="Legajo"
              value={legajo}
              onChange={(e) => setLegajo(e.target.value)}
              minWidth={136}
            >
              <option value="todos">Legajo: Todos</option>
              <option value="principal">Principal</option>
              <option value="garantes">Garantes</option>
              <option value="inquilino">Inquilino</option>
            </AdminFilterSelect>
          </>
        }
      />

      <AdminTableCard>
        <Table hover size="sm" className="align-middle mb-0">
          <thead>
            <tr className="border-bottom">
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 ps-3">
                Documento
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">Tipo</th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">
                Fecha de carga
              </th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2">Tamaño</th>
              <th className="text-uppercase small text-secondary fw-semibold border-0 py-2 text-end pe-2">
                Consulta
              </th>
            </tr>
          </thead>
          <tbody>
            {filas.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-secondary py-4 border-0">
                  Sin datos
                </td>
              </tr>
            ) : (
              filas.map((d) => (
                <tr key={d.id}>
                  <td className="ps-3 border-0 py-2 fw-semibold">{d.nombre}</td>
                  <td className="border-0 py-2">{d.tipo}</td>
                  <td className="border-0 py-2">{d.fecha}</td>
                  <td className="border-0 py-2">{d.tamano}</td>
                  <td className="text-end pe-2 border-0 py-2">{d.accion}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </AdminTableCard>
    </div>
  )
}

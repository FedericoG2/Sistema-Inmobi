import { useState } from 'react'
import { Eye, FileSignature, LayoutGrid, List, Pencil, Search, Trash2 } from 'lucide-react'

const btnNavyStyle = {
  background: 'var(--inmobi-navy)',
  borderColor: 'var(--inmobi-navy)',
}

/** Sustituir por datos del API; vacío = fila «Sin datos». */
const contratos = []

function ContratosRowActions() {
  const actionBtn =
    'btn btn-sm border-0 p-2 rounded-2 text-secondary d-inline-flex align-items-center justify-content-center'
  return (
    <div className="d-flex justify-content-end gap-1 flex-wrap">
      <button type="button" className={actionBtn} aria-label="Ver detalle">
        <Eye size={18} strokeWidth={1.75} aria-hidden />
      </button>
      <button type="button" className={actionBtn} aria-label="Editar contrato">
        <Pencil size={18} strokeWidth={1.75} aria-hidden />
      </button>
      <button type="button" className={actionBtn} aria-label="Eliminar contrato">
        <Trash2 size={18} strokeWidth={1.75} aria-hidden />
      </button>
    </div>
  )
}

export function Contratos() {
  const [search, setSearch] = useState('')
  const [estado, setEstado] = useState('todos')
  const [modalidad, setModalidad] = useState('todos')
  const [viewMode, setViewMode] = useState('list')

  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div className="position-relative flex-grow-1" style={{ maxWidth: 420, minWidth: 240 }}>
          <Search
            size={18}
            strokeWidth={1.75}
            className="position-absolute text-secondary"
            style={{ left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
            aria-hidden
          />
          <input
            type="search"
            className="form-control rounded-pill ps-5 py-2 border bg-white shadow-sm"
            placeholder="Buscar contratos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar contratos"
          />
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-4">
        <div>
          <h1 className="h3 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
            Gestión de Contratos
          </h1>
          <p className="text-secondary mb-0" style={{ maxWidth: '36rem' }}>
            Controla vigencias, montos y el vínculo entre inquilinos e inmuebles en un solo lugar.
          </p>
        </div>
        <button
          type="button"
          className="btn text-white fw-semibold rounded-3 px-4 py-2 shadow-sm"
          style={btnNavyStyle}
        >
          + Nuevo Contrato
        </button>
      </div>

      <div className="card border-0 shadow-sm rounded-3 mb-4">
        <div className="card-body py-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <span className="small fw-semibold text-secondary text-uppercase mb-0">
                Filtrar por:
              </span>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <label htmlFor="filtro-estado-contrato" className="visually-hidden">
                  Estado
                </label>
                <select
                  id="filtro-estado-contrato"
                  className="form-select form-select-sm rounded-3 border bg-white"
                  style={{ width: 'auto', minWidth: 160 }}
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <option value="todos">Estado: Todos</option>
                  <option value="vigente">Vigente</option>
                  <option value="por-vencer">Por vencer</option>
                  <option value="finalizado">Finalizado</option>
                  <option value="rescindido">Rescindido</option>
                </select>
                <label htmlFor="filtro-modalidad" className="visually-hidden">
                  Modalidad
                </label>
                <select
                  id="filtro-modalidad"
                  className="form-select form-select-sm rounded-3 border bg-white"
                  style={{ width: 'auto', minWidth: 160 }}
                  value={modalidad}
                  onChange={(e) => setModalidad(e.target.value)}
                >
                  <option value="todos">Modalidad: Todas</option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                </select>
              </div>
            </div>
            <div
              className="d-inline-flex rounded-3 p-1 gap-1"
              style={{ background: '#f1f4f9' }}
              role="group"
              aria-label="Vista de listado"
            >
              <button
                type="button"
                className={`btn btn-sm border-0 p-2 rounded-2 d-inline-flex align-items-center justify-content-center ${
                  viewMode === 'grid' ? 'text-primary' : 'text-secondary'
                }`}
                style={{
                  background: viewMode === 'grid' ? '#e8eef7' : 'transparent',
                  width: 38,
                  height: 38,
                }}
                onClick={() => setViewMode('grid')}
                aria-pressed={viewMode === 'grid'}
                aria-label="Vista en grilla"
              >
                <LayoutGrid size={18} strokeWidth={1.75} aria-hidden />
              </button>
              <button
                type="button"
                className={`btn btn-sm border-0 p-2 rounded-2 d-inline-flex align-items-center justify-content-center ${
                  viewMode === 'list' ? 'text-primary' : 'text-secondary'
                }`}
                style={{
                  background: viewMode === 'list' ? '#e8eef7' : 'transparent',
                  width: 38,
                  height: 38,
                }}
                onClick={() => setViewMode('list')}
                aria-pressed={viewMode === 'list'}
                aria-label="Vista en lista"
              >
                <List size={18} strokeWidth={1.75} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="card border-0 shadow-sm rounded-3">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
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
                          <div className="d-flex align-items-center gap-2">
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
                          </div>
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
                          <span className="badge rounded-pill text-bg-success text-uppercase small">
                            {c.estadoLabel}
                          </span>
                        </td>
                        <td className="text-end pe-4 border-0 py-3">
                          <ContratosRowActions />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="card border-0 shadow-sm rounded-3">
          <div className="card-body py-5 text-center text-secondary">
            <p className="mb-0">Sin datos</p>
          </div>
        </div>
      )}
    </div>
  )
}

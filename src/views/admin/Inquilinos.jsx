import { useState } from 'react'
import { Eye, LayoutGrid, List, Pencil, Search, Trash2 } from 'lucide-react'

const btnNavyStyle = {
  background: 'var(--inmobi-navy)',
  borderColor: 'var(--inmobi-navy)',
}

/** Sustituir por datos del API; vacío = fila «Sin datos». */
const inquilinos = []

function InquilinosRowActions() {
  const actionBtn =
    'btn btn-sm border-0 p-2 rounded-2 text-secondary d-inline-flex align-items-center justify-content-center'
  return (
    <div className="d-flex justify-content-end gap-1 flex-wrap">
      <button type="button" className={actionBtn} aria-label="Ver detalle">
        <Eye size={18} strokeWidth={1.75} aria-hidden />
      </button>
      <button type="button" className={actionBtn} aria-label="Editar inquilino">
        <Pencil size={18} strokeWidth={1.75} aria-hidden />
      </button>
      <button type="button" className={actionBtn} aria-label="Eliminar inquilino">
        <Trash2 size={18} strokeWidth={1.75} aria-hidden />
      </button>
    </div>
  )
}

export function Inquilinos() {
  const [search, setSearch] = useState('')
  const [estadoContrato, setEstadoContrato] = useState('todos')
  const [tipo, setTipo] = useState('todos')
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
            placeholder="Buscar inquilinos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar inquilinos"
          />
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-4">
        <div>
          <h1 className="h3 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
            Gestión de Inquilinos
          </h1>
          <p className="text-secondary mb-0" style={{ maxWidth: '36rem' }}>
            Consulta y administra inquilinos, datos de contacto y contratos asociados a cada inmueble.
          </p>
        </div>
        <button
          type="button"
          className="btn text-white fw-semibold rounded-3 px-4 py-2 shadow-sm"
          style={btnNavyStyle}
        >
          + Nuevo Inquilino
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
                  Estado del contrato
                </label>
                <select
                  id="filtro-estado-contrato"
                  className="form-select form-select-sm rounded-3 border bg-white"
                  style={{ width: 'auto', minWidth: 180 }}
                  value={estadoContrato}
                  onChange={(e) => setEstadoContrato(e.target.value)}
                >
                  <option value="todos">Contrato: Todos</option>
                  <option value="activo">Activo</option>
                  <option value="por-vencer">Por vencer</option>
                  <option value="finalizado">Finalizado</option>
                  <option value="sin-contrato">Sin contrato</option>
                </select>
                <label htmlFor="filtro-tipo-inquilino" className="visually-hidden">
                  Tipo de inquilino
                </label>
                <select
                  id="filtro-tipo-inquilino"
                  className="form-select form-select-sm rounded-3 border bg-white"
                  style={{ width: 'auto', minWidth: 160 }}
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option value="todos">Tipo: Todos</option>
                  <option value="persona">Persona física</option>
                  <option value="empresa">Persona jurídica</option>
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
                      Inquilino
                    </th>
                    <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                      Documento
                    </th>
                    <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                      Propiedad
                    </th>
                    <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                      Contrato
                    </th>
                    <th className="text-uppercase small text-secondary fw-semibold border-0 py-3 text-end pe-4">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inquilinos.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center text-secondary py-5 border-0">
                        Sin datos
                      </td>
                    </tr>
                  ) : (
                    inquilinos.map((q) => (
                      <tr key={q.id}>
                        <td className="ps-4 border-0 py-3">
                          <div className="fw-semibold">{q.nombre}</div>
                          <div className="small text-secondary">{q.contacto}</div>
                        </td>
                        <td className="border-0 py-3">{q.documento}</td>
                        <td className="border-0 py-3">{q.propiedad}</td>
                        <td className="border-0 py-3">
                          <span className="badge rounded-pill text-bg-success text-uppercase small">
                            {q.estadoContratoLabel}
                          </span>
                        </td>
                        <td className="text-end pe-4 border-0 py-3">
                          <InquilinosRowActions />
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

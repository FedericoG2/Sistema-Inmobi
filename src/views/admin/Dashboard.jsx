import {
  Building2,
  Check,
  FileText,
  Info,
  TrendingUp,
  Users,
  Wrench,
} from 'lucide-react'

function StatIconBox({ children }) {
  return (
    <div
      className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
      style={{
        width: 44,
        height: 44,
        background: 'rgba(28, 47, 92, 0.1)',
        color: 'var(--inmobi-navy)',
      }}
    >
      {children}
    </div>
  )
}

export function Dashboard() {
  const iconSize = 22

  return (
    <div>
      <h1 className="h3 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
        Panel de Control
      </h1>
      <p className="text-secondary mb-4">
        Bienvenido de nuevo. Aquí tienes el resumen de tus activos hoy.
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-3 mb-4">
        <div className="col">
          <div className="card border-0 shadow-sm h-100 rounded-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className="small fw-semibold text-secondary text-uppercase">
                  Propiedades Totales
                </span>
                <StatIconBox>
                  <Building2 size={iconSize} strokeWidth={1.75} aria-hidden />
                </StatIconBox>
              </div>
              <p className="display-6 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
                124
              </p>
              <p className="small text-success mb-0 d-flex align-items-center gap-1">
                <TrendingUp size={14} aria-hidden />
                +12% este mes
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm h-100 rounded-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className="small fw-semibold text-secondary text-uppercase">
                  Inquilinos Activos
                </span>
                <StatIconBox>
                  <Users size={iconSize} strokeWidth={1.75} aria-hidden />
                </StatIconBox>
              </div>
              <p className="display-6 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
                98
              </p>
              <p className="small text-secondary mb-0">Sin cambios vs ayer</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm h-100 rounded-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className="small fw-semibold text-secondary text-uppercase">
                  Contratos con aumento este mes
                </span>
                <StatIconBox>
                  <FileText size={iconSize} strokeWidth={1.75} aria-hidden />
                </StatIconBox>
              </div>
              <p className="display-6 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
                15
              </p>
              <p
                className="small mb-0 d-inline-flex align-items-center gap-1 fw-semibold"
                style={{ color: 'var(--inmobi-navy)' }}
              >
                <Info size={14} aria-hidden />
                Requiere revisión
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm h-100 rounded-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className="small fw-semibold text-secondary text-uppercase">
                  Reclamos Abiertos
                </span>
                <StatIconBox>
                  <Wrench size={iconSize} strokeWidth={1.75} aria-hidden />
                </StatIconBox>
              </div>
              <p className="display-6 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
                07
              </p>
              <p className="small text-primary mb-0 fw-semibold">3 en curso hoy</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-0 shadow-sm h-100 rounded-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <span className="small fw-semibold text-secondary text-uppercase">
                  Contratos Activos
                </span>
                <StatIconBox>
                  <FileText size={iconSize} strokeWidth={1.75} aria-hidden />
                </StatIconBox>
              </div>
              <p className="display-6 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
                186
              </p>
              <p className="small text-success mb-0 d-flex align-items-center gap-1 fw-semibold">
                <Check size={14} strokeWidth={2.5} aria-hidden />
                Vigentes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
            <h2 className="h5 fw-bold mb-0" style={{ color: 'var(--inmobi-navy)' }}>
              Actividad Reciente
            </h2>
            <a href="#" className="small link-primary text-decoration-none fw-semibold">
              Ver todo el historial
            </a>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr className="border-bottom">
                  <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                    Inquilino / Propiedad
                  </th>
                  <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                    Tipo de acción
                  </th>
                  <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                    Fecha
                  </th>
                  <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                    Monto / Ref.
                  </th>
                  <th className="text-uppercase small text-secondary fw-semibold border-0 py-3">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="text-center text-secondary py-5 border-0">
                    Sin datos
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

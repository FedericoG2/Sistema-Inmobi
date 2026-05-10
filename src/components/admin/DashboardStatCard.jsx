import Card from 'react-bootstrap/Card'

const TONE_MIN = 1
const TONE_MAX = 6

export function DashboardStatCard({ label, value, icon, tone = 1, footer }) {
  const safeTone = Math.min(Math.max(Number(tone) || 1, TONE_MIN), TONE_MAX)

  return (
    <Card className="dashboard-kpi-lite h-100">
      <Card.Body className="d-flex justify-content-between align-items-start gap-2 py-3 px-3">
        <div className="flex-grow-1 min-w-0">
          <div className="dashboard-kpi-lite-title">{label}</div>
          <div className="dashboard-kpi-lite-value">{value}</div>
          {footer ? (
            <div className="small text-secondary mt-2 mb-0" style={{ lineHeight: 1.35 }}>
              {footer}
            </div>
          ) : null}
        </div>
        {icon ? (
          <div className={`dashboard-kpi-lite-icon dashboard-kpi-lite-icon--${safeTone}`}>{icon}</div>
        ) : null}
      </Card.Body>
    </Card>
  )
}

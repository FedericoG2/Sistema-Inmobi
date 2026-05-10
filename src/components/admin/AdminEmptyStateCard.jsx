import Card from 'react-bootstrap/Card'

export function AdminEmptyStateCard({ message = 'Sin datos' }) {
  return (
    <Card className="border-0 shadow-sm rounded-3">
      <Card.Body className="py-5 text-center text-secondary">
        <p className="mb-0">{message}</p>
      </Card.Body>
    </Card>
  )
}

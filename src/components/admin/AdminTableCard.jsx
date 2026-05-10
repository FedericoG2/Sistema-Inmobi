import Card from 'react-bootstrap/Card'

export function AdminTableCard({ children }) {
  return (
    <Card className="border-0 shadow-sm rounded-3">
      <Card.Body className="p-0">
        <div className="table-responsive">{children}</div>
      </Card.Body>
    </Card>
  )
}

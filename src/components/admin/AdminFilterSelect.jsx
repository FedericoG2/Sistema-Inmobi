import Form from 'react-bootstrap/Form'

export function AdminFilterSelect({ id, label, value, onChange, minWidth = 160, children }) {
  return (
    <>
      <Form.Label htmlFor={id} className="visually-hidden">
        {label}
      </Form.Label>
      <Form.Select
        id={id}
        size="sm"
        className="rounded-3 border bg-white"
        style={{ width: 'auto', minWidth }}
        value={value}
        onChange={onChange}
      >
        {children}
      </Form.Select>
    </>
  )
}

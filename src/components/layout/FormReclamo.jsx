import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'

export function FormReclamo() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    nroContrato: '',
    area: '',
    descripcion: '',
    archivo: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'archivo') {
      setFormData({ ...formData, archivo: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del Reclamo:', formData)
    alert('Formulario enviado correctamente.')
  }

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '0 auto' }}>
      <Row className="g-2 mb-3">
        <Col sm={6}>
          <Form.Group controlId="reclamo-nombre">
            <Form.Label className="fw-semibold small">Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group controlId="reclamo-apellido">
            <Form.Label className="fw-semibold small">Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="reclamo-email">
        <Form.Label className="fw-semibold small">Correo Electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="reclamo-contrato">
        <Form.Label className="fw-semibold small">Número de Contrato</Form.Label>
        <Form.Control
          type="text"
          name="nroContrato"
          value={formData.nroContrato}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="reclamo-area">
        <Form.Label className="fw-semibold small">Área de Reclamo</Form.Label>
        <Form.Select name="area" value={formData.area} onChange={handleChange} required>
          <option value="">Seleccione un área...</option>
          <option value="Administración">Administración</option>
          <option value="Ventas">Ventas</option>
          <option value="Mantenimiento">Mantenimiento</option>
          <option value="Legales">Legales</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="reclamo-descripcion">
        <Form.Label className="fw-semibold small">Descripción del Reclamo</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="reclamo-archivo">
        <Form.Label className="fw-semibold small">Adjuntar Archivos (Fotos/Documentos)</Form.Label>
        <Form.Control type="file" name="archivo" onChange={handleChange} />
      </Form.Group>

      <Stack direction="horizontal" className="justify-content-end">
        <Button type="submit" variant="primary">
          Enviar Formulario
        </Button>
      </Stack>
    </Form>
  )
}

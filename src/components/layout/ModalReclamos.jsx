import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FormReclamo } from './FormReclamo.jsx'

export function ModalReclamos({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo reclamo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormReclamo />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

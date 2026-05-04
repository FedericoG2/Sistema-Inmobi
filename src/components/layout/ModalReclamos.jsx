
import { Button, Modal } from 'react-bootstrap';
import { FormReclamo } from './FormReclamo.jsx';

export function ModalReclamos({ show, onHide }) {
  return (
    <>
     <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo reclamo</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
            <FormReclamo />
        </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

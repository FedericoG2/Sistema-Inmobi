import { ModalReclamos } from '../../components/layout/ModalReclamos.jsx'
import { useState } from 'react';
import { ListadoReclamos } from '../../components/layout/ListadoReclamos.jsx';


export function Reclamos() {
  //modal de reclamos
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 className="h3 mb-3">Reclamos</h1>
      <p className="text-muted">Seguimiento de reclamos y mantenimiento.</p>
      <div className="d-flex justify-content-end mt-3">
      <button type="button"
  className="btn text-white fw-semibold rounded-3 px-4 py-2 shadow-sm"
  style={{ background: 'var(--inmobi-navy)', borderColor: 'var(--inmobi-navy)' }} onClick={handleShow}>
       + Nuevo reclamo
        </button>
        </div>
       <ModalReclamos show={show} onHide={handleClose}/>
       <hr />
       <ListadoReclamos />


    </>
  )
}

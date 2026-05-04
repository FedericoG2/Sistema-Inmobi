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
     
      <button className="btn btn-primary" onClick={handleShow}>
        Nuevo reclamo
        </button>
       <ModalReclamos show={show} onHide={handleClose}/>
       <hr />
       <ListadoReclamos />
    </>
  )
}

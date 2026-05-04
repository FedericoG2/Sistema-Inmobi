import Table from 'react-bootstrap/Table';

export function ListadoReclamos() {
  return (
    <>
    <Table striped bordered hover>
    <thead>
  <tr>
    <th>#</th>
    <th>Fecha de reclamo</th>
    <th>Área de Reclamo</th>
    <th>Condición del reclamo</th>
    <th>Ver reclamo</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>2026-04-15</td>
    <td>Administración</td>
    <td>Pendiente</td>
    <td><button className="btn btn-primary">Ver detalle</button></td>
  </tr>
  <tr>
    <td>2</td>
    <td>2026-04-18</td>
    <td>Mantenimiento</td>
    <td>En Revisión</td>
    <td><button className="btn btn-primary">Ver detalle</button></td>
  </tr>
  <tr>
    <td>3</td>
    <td>2026-04-20</td>
    <td>Legales</td>
    <td>Resuelto</td>
    <td><button className="btn btn-primary">Ver detalle</button></td>
  </tr>
  <tr>
    <td>4</td>
    <td>2026-04-22</td>
    <td>Ventas</td>
    <td>Pendiente</td>
    <td><button className="btn btn-primary">Ver detalle</button></td>
  </tr>
  <tr>
    <td>5</td>
    <td>2026-04-25</td>
    <td>Administración</td>
    <td>Rechazado</td>
    <td><button className="btn btn-primary">Ver detalle</button></td>
  </tr>
  <tr>
    <td>6</td>
    <td>2026-04-28</td>
    <td>Atención al Cliente</td>
    <td>En Revisión</td>
    <td><button className="btn btn-primary">Ver detalle</button></td>
  </tr>
  <tr>
    <td>7</td>
    <td>2026-05-02</td>
    <td>Mantenimiento</td>
    <td>Pendiente</td>
    <td><button className="btn btn-primary">Ver detalle</button></td>
  </tr>
</tbody>
    </Table>
    </>
  )
}
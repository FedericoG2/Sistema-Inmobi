import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { AdminFilterCard } from '../../components/admin/AdminFilterCard'
import { AdminFilterSelect } from '../../components/admin/AdminFilterSelect'
import { AdminSearchBar } from '../../components/admin/AdminSearchBar'
import { ListadoReclamos } from '../../components/layout/ListadoReclamos.jsx'
import { ModalReclamos } from '../../components/layout/ModalReclamos.jsx'

export function Reclamos() {
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')
  const [estado, setEstado] = useState('todos')
  const [area, setArea] = useState('todos')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <h1 className="h3 fw-bold mb-1" style={{ color: 'var(--inmobi-navy)' }}>
        Reclamos
      </h1>
      <p className="text-secondary small mb-2 mb-md-3">
        Seguimiento de reclamos y solicitudes: estado, área y prioridad de cada caso.
      </p>

      <AdminFilterCard
        compact
        showViewToggle={false}
        prepend={
          <AdminSearchBar
            compact
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar reclamos..."
            ariaLabel="Buscar reclamos"
            wrapperStyle={{ minWidth: 160, maxWidth: 320, flex: '1 1 200px' }}
          />
        }
        trailing={
          <Button
            type="button"
            variant="success"
            size="sm"
            className="fw-semibold rounded-3 px-3 shadow-sm"
            onClick={handleShow}
          >
            Nuevo Reclamo
          </Button>
        }
        filters={
          <>
            <AdminFilterSelect
              id="filtro-estado-reclamo"
              label="Estado del reclamo"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              minWidth={136}
            >
              <option value="todos">Estado: Todos</option>
              <option value="pendiente">Pendiente</option>
              <option value="en-revision">En revisión</option>
              <option value="resuelto">Resuelto</option>
              <option value="rechazado">Rechazado</option>
            </AdminFilterSelect>
            <AdminFilterSelect
              id="filtro-area-reclamo"
              label="Área de reclamo"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              minWidth={136}
            >
              <option value="todos">Área: Todas</option>
              <option value="administracion">Administración</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="legales">Legales</option>
              <option value="ventas">Ventas</option>
              <option value="atencion">Atención al cliente</option>
            </AdminFilterSelect>
          </>
        }
      />

      <ModalReclamos show={show} onHide={handleClose} />
      <ListadoReclamos />
    </>
  )
}

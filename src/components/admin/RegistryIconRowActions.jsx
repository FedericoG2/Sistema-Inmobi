import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { Eye, Pencil, Trash2 } from 'lucide-react'

const actionBtnClass =
  'border-0 p-2 rounded-2 text-secondary d-inline-flex align-items-center justify-content-center bg-transparent shadow-none'

export function RegistryIconRowActions({ resourceLabel }) {
  return (
    <Stack direction="horizontal" className="justify-content-end gap-1 flex-wrap">
      <Button type="button" variant="light" size="sm" className={actionBtnClass} aria-label="Ver detalle">
        <Eye size={18} strokeWidth={1.75} aria-hidden />
      </Button>
      <Button
        type="button"
        variant="light"
        size="sm"
        className={actionBtnClass}
        aria-label={`Editar ${resourceLabel}`}
      >
        <Pencil size={18} strokeWidth={1.75} aria-hidden />
      </Button>
      <Button
        type="button"
        variant="light"
        size="sm"
        className={actionBtnClass}
        aria-label={`Eliminar ${resourceLabel}`}
      >
        <Trash2 size={18} strokeWidth={1.75} aria-hidden />
      </Button>
    </Stack>
  )
}

import Button from 'react-bootstrap/Button'
import { LayoutGrid, List } from 'lucide-react'

export function ViewModeToggle({ value, onChange, ariaLabel = 'Vista de listado' }) {
  const baseClass =
    'border-0 p-2 rounded-2 d-inline-flex align-items-center justify-content-center shadow-none'

  return (
    <div
      className="d-inline-flex rounded-3 p-1 gap-1"
      style={{ background: '#f1f4f9' }}
      role="group"
      aria-label={ariaLabel}
    >
      <Button
        type="button"
        variant="light"
        size="sm"
        className={`${baseClass} ${value === 'grid' ? 'text-primary' : 'text-secondary'}`}
        style={{
          background: value === 'grid' ? '#e8eef7' : 'transparent',
          width: 38,
          height: 38,
        }}
        onClick={() => onChange('grid')}
        aria-pressed={value === 'grid'}
        aria-label="Vista en grilla"
      >
        <LayoutGrid size={18} strokeWidth={1.75} aria-hidden />
      </Button>
      <Button
        type="button"
        variant="light"
        size="sm"
        className={`${baseClass} ${value === 'list' ? 'text-primary' : 'text-secondary'}`}
        style={{
          background: value === 'list' ? '#e8eef7' : 'transparent',
          width: 38,
          height: 38,
        }}
        onClick={() => onChange('list')}
        aria-pressed={value === 'list'}
        aria-label="Vista en lista"
      >
        <List size={18} strokeWidth={1.75} aria-hidden />
      </Button>
    </div>
  )
}

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import { ViewModeToggle } from './ViewModeToggle'

export function AdminFilterCard({
  filters,
  viewMode,
  onViewModeChange,
  showViewToggle = true,
  trailing = null,
  prepend = null,
  showFiltersRow = true,
  /** Menos padding y gaps; usar en vistas con tabla densa debajo del encabezado. */
  compact = false,
}) {
  const endSlot = showViewToggle ? (
    <ViewModeToggle value={viewMode} onChange={onViewModeChange} />
  ) : (
    trailing
  )

  return (
    <Card className="border-0 shadow-sm rounded-3 mb-4">
      <Card.Body className={compact ? 'py-2' : 'py-3'}>
        <Stack
          direction="horizontal"
          className={`flex-wrap justify-content-between align-items-center ${compact ? 'gap-2' : 'gap-3'}`}
        >
          {prepend}
          {showFiltersRow ? (
            <Stack
              direction="horizontal"
              className={`flex-wrap align-items-center flex-grow-1 ${compact ? 'gap-2' : 'gap-3'}`}
            >
              <span
                className={`fw-semibold text-secondary text-uppercase mb-0 lh-1 ${compact ? '' : 'small'}`}
                style={{ fontSize: compact ? '0.65rem' : undefined }}
              >
                Filtrar por:
              </span>
              <Stack direction="horizontal" className={`flex-wrap align-items-center ${compact ? 'gap-2' : 'gap-2'}`}>
                {filters}
              </Stack>
            </Stack>
          ) : (
            <div className="flex-grow-1 min-w-0" aria-hidden />
          )}
          {endSlot}
        </Stack>
      </Card.Body>
    </Card>
  )
}

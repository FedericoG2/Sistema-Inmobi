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
}) {
  const endSlot = showViewToggle ? (
    <ViewModeToggle value={viewMode} onChange={onViewModeChange} />
  ) : (
    trailing
  )

  return (
    <Card className="border-0 shadow-sm rounded-3 mb-4">
      <Card.Body className="py-3">
        <Stack
          direction="horizontal"
          className="flex-wrap justify-content-between align-items-center gap-3"
        >
          {prepend}
          {showFiltersRow ? (
            <Stack direction="horizontal" className="flex-wrap align-items-center gap-3 flex-grow-1">
              <span className="small fw-semibold text-secondary text-uppercase mb-0">
                Filtrar por:
              </span>
              <Stack direction="horizontal" className="flex-wrap align-items-center gap-2">
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

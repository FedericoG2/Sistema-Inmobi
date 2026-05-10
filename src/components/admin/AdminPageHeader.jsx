import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { inmobiNavyButtonStyle } from './inmobiStyles'

export function AdminPageHeader({ title, description, actionLabel }) {
  return (
    <Stack
      direction="horizontal"
      className="flex-wrap justify-content-between align-items-start gap-3 mb-4"
    >
      <div>
        <h1 className="h3 fw-bold mb-2" style={{ color: 'var(--inmobi-navy)' }}>
          {title}
        </h1>
        <p className="text-secondary mb-0" style={{ maxWidth: '36rem' }}>
          {description}
        </p>
      </div>
      <Button
        type="button"
        className="text-white fw-semibold rounded-3 px-4 py-2 shadow-sm"
        style={inmobiNavyButtonStyle}
      >
        {actionLabel}
      </Button>
    </Stack>
  )
}

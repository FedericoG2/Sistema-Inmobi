import Form from 'react-bootstrap/Form'
import { Search } from 'lucide-react'

export function AdminSearchBar({
  value,
  onChange,
  placeholder,
  ariaLabel,
  wrapperClassName = '',
  wrapperStyle,
  compact = false,
}) {
  const iconSize = compact ? 15 : 18
  const iconLeft = compact ? 11 : 14

  return (
    <div
      className={`position-relative flex-grow-1 ${wrapperClassName}`.trim()}
      style={{ maxWidth: 420, minWidth: compact ? 200 : 240, ...wrapperStyle }}
    >
      <Search
        size={iconSize}
        strokeWidth={1.75}
        className="position-absolute text-secondary"
        style={{ left: iconLeft, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        aria-hidden
      />
      <Form.Control
        type="search"
        className={`rounded-pill border bg-white shadow-sm ps-5 ${compact ? 'form-control-sm' : 'py-2'}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
      />
    </div>
  )
}

import Form from 'react-bootstrap/Form'
import { Search } from 'lucide-react'

export function AdminSearchBar({
  value,
  onChange,
  placeholder,
  ariaLabel,
  wrapperClassName = '',
  wrapperStyle,
}) {
  return (
    <div
      className={`position-relative flex-grow-1 ${wrapperClassName}`.trim()}
      style={{ maxWidth: 420, minWidth: 240, ...wrapperStyle }}
    >
      <Search
        size={18}
        strokeWidth={1.75}
        className="position-absolute text-secondary"
        style={{ left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        aria-hidden
      />
      <Form.Control
        type="search"
        className="rounded-pill ps-5 py-2 border bg-white shadow-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
      />
    </div>
  )
}

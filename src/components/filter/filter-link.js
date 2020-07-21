import React from 'react'
const FilterLink = ({ action, activeFilter, children, onClick }) => {
  if (action === activeFilter) {
    return <span style={{ marginRight: 10 }}>{children}</span>
  }

  return (
    <a
      href=' '
      style={{ marginRight: 10 }}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default FilterLink

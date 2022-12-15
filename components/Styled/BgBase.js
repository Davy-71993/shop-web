import React from 'react'

export default function BgBase({children, className}) {
  return (
    <div className="bg-gray-100 dark:bg-slate-900">
        {children}
    </div>
  )
}

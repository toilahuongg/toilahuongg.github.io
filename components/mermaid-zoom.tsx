'use client'

import { useState } from 'react'

export function MermaidZoom({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="mermaid-wrapper cursor-pointer"
        onClick={() => setIsOpen(true)}
        title="Click to zoom"
      >
        {children}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-[90vw] w-full max-h-[90vh] overflow-auto bg-gray-900 rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <div className="mermaid flex justify-center">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

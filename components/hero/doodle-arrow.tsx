import React from "react"

/**
 * DoodleArrow Component
 * Standalone organic hand-drawn doodle arrow SVG.
 * Guaranteed unclipped with generous viewBox and overflow-visible.
 */
export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        <path
          d="M56 16 C30 20 18 50 38 58 C62 66 68 32 48 34 C26 36 18 76 40 96 C56 110 76 114 94 116"
          stroke="#37322F"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Arrow tip */}
        <path
          d="M84 107 L95 116 L83 125"
          stroke="#37322F"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default DoodleArrow

import React from "react"

/**
 * GreenDiscBackdrop Component
 * Standalone organic dark-forest circular backdrop.
 * Perfectly blended with soft radial edges to avoid harsh boundaries or clipping.
 */
export function GreenDiscBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none rounded-full ${className}`}
      aria-hidden="true"
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#234533] via-[#152F21] to-[#0E1E15] shadow-[0_25px_60px_rgba(18,38,27,0.3)] ring-1 ring-white/10 relative overflow-hidden">
        {/* Subtle inner ambient radial glow for organic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(57,247,99,0.12),transparent_70%)]" />
      </div>
    </div>
  )
}

export default GreenDiscBackdrop

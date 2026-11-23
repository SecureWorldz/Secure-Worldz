import React from "react"

/**
 * PedestalPlatform Component
 * Architectural limestone / concrete ledge that grounds the laptop.
 * Softly fades at the edges to blend into the hero section canvas without harsh cuts.
 */
export function PedestalPlatform({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Top Plane of Concrete Pedestal */}
      <div className="h-4 sm:h-5 bg-gradient-to-r from-[#DFDCD5] via-[#EAE7DF] to-[#DFDCD5] border-t border-white/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-t-sm" />

      {/* Front Vertical Face with Soft Bottom & Edge Fading */}
      <div className="h-18 sm:h-24 bg-gradient-to-b from-[#C8C4B8] via-[#B8B4A6] to-[#A39E8F] border-t border-[#B2AEA0] shadow-[0_24px_45px_rgba(55,50,47,0.12)] relative overflow-hidden">
        {/* Subtle natural concrete grain */}
        <div className="w-full h-full opacity-15 bg-[radial-gradient(#7D7970_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Soft bottom edge gradient blend into the background */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-[#F7F5F3]" />
      </div>
    </div>
  )
}

export default PedestalPlatform

import React from "react"
import { ShieldSecurityIcon, ThreeBarChart } from "../svgs/hero-svgs"

export interface FloatingOwaspCardProps {
  className?: string
  title?: string
  subtitle?: string
}

export function FloatingOwaspCard({
  className = "",
  title = "OWASP 2026",
  subtitle = "Zero-Day Ready",
}: FloatingOwaspCardProps) {
  return (
    <div
      className={`z-30 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 sm:px-4.5 sm:py-3 border border-[rgba(55,50,47,0.08)] shadow-[0_16px_36px_rgba(55,50,47,0.08)] hover:border-[#39F763]/40 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-[rgba(55,50,47,0.04)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#1C1A18] shrink-0">
        <ShieldSecurityIcon className="w-4 h-4" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] text-[#82807C] font-medium leading-tight font-sans">
          {title}
        </span>
        <span className="text-xs sm:text-[13px] font-semibold text-[#1C1A18] leading-tight font-sans whitespace-nowrap">
          {subtitle}
        </span>
      </div>
      <div className="ml-1 pl-2 border-l border-[rgba(55,50,47,0.08)] flex items-center">
        <ThreeBarChart className="w-5 h-5 text-[#1C1A18]" />
      </div>
    </div>
  )
}

export default FloatingOwaspCard

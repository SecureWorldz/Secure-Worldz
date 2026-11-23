import React from "react"
import { ShieldCheck } from "lucide-react"
import { PerformanceSparkline } from "../svgs/hero-svgs"

export interface FloatingThreatCardProps {
  className?: string
  title?: string
  subtitle?: string
}

export function FloatingThreatCard({
  className = "",
  title = "Threat Defense",
  subtitle = "Live VAPT Labs",
}: FloatingThreatCardProps) {
  return (
    <div
      className={`z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-[rgba(55,50,47,0.08)] shadow-[0_18px_40px_rgba(55,50,47,0.1)] hover:border-[#39F763]/40 flex flex-col gap-2 w-36 sm:w-44 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[rgba(55,50,47,0.04)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#1C1A18] shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#1C1A18]" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-[#82807C] font-medium leading-tight font-sans">
            {title}
          </span>
          <span className="text-xs sm:text-[13px] font-semibold text-[#1C1A18] leading-tight font-sans whitespace-nowrap">
            {subtitle}
          </span>
        </div>
      </div>
      <div className="w-full pt-1">
        <PerformanceSparkline className="w-full h-auto" />
      </div>
    </div>
  )
}

export default FloatingThreatCard

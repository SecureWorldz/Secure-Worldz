"use client"

import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export default function AnnouncementBanner() {
  return (
    <aside aria-label="Announcement" className="w-full bg-[#421d24] text-white py-2.5 px-4 z-50 relative flex items-center justify-center text-xs sm:text-sm font-[460]">
      <div className="max-w-[1200px] w-full flex items-center justify-center gap-2 sm:gap-3 text-center flex-wrap">
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/10 text-[#d4c7ff]">
          <Sparkles className="w-2.5 h-2.5" />
        </span>
        <span className="text-white/95">
          SECUREWORLDZ 2026: New OWASP Agentic AI Security Labs & Starter Cohorts are now enrolling.
        </span>
        <Link
          href="/courses"
          className="inline-flex items-center gap-1 text-white border border-white/30 rounded-full px-2.5 py-0.5 text-xs hover:border-white transition-colors"
        >
          <span>Learn more</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </aside>
  )
}

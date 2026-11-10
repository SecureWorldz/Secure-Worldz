import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function GradientBanner() {
  return (
    <section className="w-full relative overflow-hidden py-20 px-4 sm:px-6 md:px-8 border-b border-[#e3e3e2] bg-[#f2f0eb]">
      {/* Decorative Layered Atmospheric Gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 68% 50%, rgba(113, 76, 182, 0.55), transparent 50%),
            radial-gradient(circle at 93% 50%, rgba(59, 130, 246, 0.50), transparent 50%),
            radial-gradient(circle at 50% 98%, rgba(244, 114, 182, 0.50), transparent 50%),
            radial-gradient(circle at 50% 75%, rgba(6, 182, 212, 0.50), transparent 50%)
          `,
        }}
      />

      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-[680px]">
          <div className="inline-flex items-center gap-2 text-xs font-[460] text-[#714cb6] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atmospheric Learning Workbench</span>
          </div>

          <h2 className="text-[34px] sm:text-[44px] md:text-[48px] font-[460] leading-[1.05] tracking-tight text-[#292827]">
            Master offensive tactics with live practitioner mentorship.
          </h2>

          <p className="text-[16px] font-[460] text-[#292827]/80 leading-[1.4] max-w-[540px]">
            Whether you are taking your first steps with our ₹999 starter cohort or running complex VAPT engagements, SECUREWORLDZ brings tools, labs, and guidance into one workspace.
          </p>
        </div>

        {/* White button right-aligned */}
        <div className="shrink-0">
          <Link
            href="/courses"
            className="h-12 px-7 bg-white text-[#292827] border border-[#e3e3e2] hover:bg-[#f2f0eb] rounded-[16px] text-base font-[460] flex items-center justify-center gap-2 transition-colors shadow-none"
          >
            <span>Get SECUREWORLDZ</span>
            <ArrowRight className="w-4 h-4 text-[#714cb6]" />
          </Link>
        </div>
      </div>
    </section>
  )
}

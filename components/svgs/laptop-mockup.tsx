import React from "react"
import { ArrowUpRight } from "lucide-react"

interface LaptopMockupProps {
  brandName?: string
  headlineLine1?: string
  headlineLine2?: string
  headlineLine3?: string
  subtitle?: string
}

export function LaptopMockup({
  brandName = "SECUREWORLDZ",
  headlineLine1 = "Offensive Labs",
  headlineLine2 = "Built For",
  headlineLine3 = "Modern Teams",
  subtitle = "Real exploitation workflows, VAPT labs, and agentic AI security audits.",
}: LaptopMockupProps) {
  return (
    <div className="relative w-full max-w-[580px] select-none">
      {/* 1. Laptop Display Unit */}
      <div className="relative mx-auto w-[92%] sm:w-[94%] bg-[#121316] rounded-t-[18px] sm:rounded-t-[22px] p-[6px] sm:p-[8px] shadow-[0_20px_50px_rgba(55,50,47,0.25),0_0_0_1px_rgba(255,255,255,0.08)]">
        {/* Screen Bezel & Notch */}
        <div className="relative w-full bg-[#18191D] rounded-t-[14px] sm:rounded-t-[18px] overflow-hidden border border-black/40">
          {/* Top Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-2.5 sm:h-3.5 bg-[#121316] rounded-b-md flex items-center justify-center gap-1 z-20">
            <span className="w-1 h-1 rounded-full bg-[#0E202B]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#08080A] border border-white/10" />
          </div>

          {/* Screen Content Viewport */}
          <div className="relative w-full aspect-[16/10] bg-[#F7F5F3] overflow-hidden flex flex-col justify-between text-[#1C1A18] font-sans p-3 sm:p-5">
            {/* Screen Top Header */}
            <div className="flex items-center justify-between border-b border-[rgba(55,50,47,0.06)] pb-2 sm:pb-3">
              <span className="font-bold tracking-wider text-[8px] sm:text-[10px] text-[#1C1A18] font-sans">
                {brandName}
              </span>
              <div className="flex items-center gap-2 sm:gap-3 text-[7px] sm:text-[9px] text-[#82807C] font-medium font-sans">
                <span>Courses</span>
                <span>Labs</span>
                <span>Tools</span>
                <span>Community</span>
              </div>
            </div>

            {/* Screen Inner Hero Grid */}
            <div className="grid grid-cols-12 gap-2 sm:gap-3 items-center flex-1 my-auto pl-1 sm:pl-2">
              {/* Left Column: Mini Hero Copy */}
              <div className="col-span-7 flex flex-col items-start gap-1 sm:gap-2">
                {/* Mini Pill Tag */}
                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white border border-[rgba(55,50,47,0.1)] text-[6px] sm:text-[8px] text-[#37322F] font-medium shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39F763] shadow-[0_0_4px_#39F763]" />
                  <span>Offensive Security Platform</span>
                </div>

                {/* Mini Headline */}
                <h4 className="text-[11px] sm:text-[16px] md:text-[18px] font-serif font-normal tracking-tight leading-[1.08] text-[#1C1A18]">
                  <span className="block">{headlineLine1}</span>
                  <span className="block text-[#82807C]">{headlineLine2}</span>
                  <span className="block text-[#1C1A18]">{headlineLine3}</span>
                </h4>

                {/* Mini Description */}
                <p className="text-[6.5px] sm:text-[8px] text-[#605A57] leading-snug line-clamp-2 max-w-[170px] mt-0.5 font-sans">
                  {subtitle}
                </p>

                {/* Mini Button */}
                <div className="mt-0.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181716] text-white text-[6.5px] sm:text-[8.5px] font-medium shadow-xs border border-white/10 font-sans">
                  <span>Explore Labs</span>
                  <ArrowUpRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#39F763]" />
                </div>
              </div>

              {/* Right Column: High-Tech Cybersecurity Terminal & Matrix Visualization */}
              <div className="col-span-5 h-[90%] flex items-center justify-center">
                <div className="relative w-full h-[95px] sm:h-[135px] rounded-lg overflow-hidden bg-[#11141A] border border-white/10 shadow-inner flex flex-col justify-between p-2 font-mono text-[6px] sm:text-[8px]">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-1 border-b border-white/10">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39F763]/80" />
                    </div>
                    <span className="text-[6px] text-neutral-400">dragoz-vapt.sh</span>
                  </div>

                  {/* Terminal Content Lines */}
                  <div className="flex flex-col gap-0.5 text-neutral-300 font-mono text-[6px] sm:text-[7.5px] my-auto">
                    <span className="text-[#39F763] font-semibold">$ bugatlas --audit 0day</span>
                    <span className="text-neutral-400">[*] Scanning OWASP 2026...</span>
                    <span className="text-emerald-400">[✓] 10 Hands-on Labs Ready</span>
                    <span className="text-neutral-400">[*] AI Safety: 100% Passed</span>
                  </div>

                  {/* Terminal Status Footer */}
                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[5.5px] sm:text-[7px]">
                    <span className="text-neutral-400">Status: DEFENDING</span>
                    <span className="inline-flex items-center gap-0.5 text-[#39F763]">
                      <span className="w-1 h-1 rounded-full bg-[#39F763] animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Laptop Keyboard Deck Base */}
      <div className="relative mx-auto w-full z-10">
        {/* Sleek Aluminum Deck Base */}
        <div className="relative h-[11px] sm:h-[14px] bg-gradient-to-b from-[#C4C5C8] via-[#B0B2B6] to-[#8C8F94] rounded-b-[10px] sm:rounded-b-[14px] shadow-[0_12px_24px_rgba(0,0,0,0.35)] flex justify-center">
          {/* Center Thumb Notch */}
          <div className="w-16 sm:w-20 h-[3.5px] sm:h-[4.5px] bg-[#6F7175] rounded-b-sm border-t border-black/30 shadow-inner" />
          {/* Front metallic reflection edge */}
          <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-white/40 rounded-b-[10px] sm:rounded-b-[14px]" />
        </div>

        {/* Ambient Occlusion Shadow Under Chassis */}
        <div className="mx-auto w-[96%] h-[8px] bg-black/40 blur-[6px] -mt-1 rounded-full" />
      </div>

      {/* 3. Concrete / Architectural Pedestal Ledge */}
      <div className="relative w-[114%] -left-[7%] -mt-2 z-0">
        {/* Top Plane of Concrete Pedestal */}
        <div className="h-4 sm:h-5 bg-gradient-to-r from-[#DFDCD5] via-[#EAE7DF] to-[#DFDCD5] border-t border-white/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]" />
        
        {/* Front Vertical Face of Pedestal */}
        <div className="h-18 sm:h-26 bg-gradient-to-b from-[#C8C4B8] via-[#B8B4A6] to-[#A39E8F] border-t border-[#B2AEA0] shadow-[0_24px_45px_rgba(55,50,47,0.12)]">
          {/* Subtle natural concrete grain */}
          <div className="w-full h-full opacity-15 bg-[radial-gradient(#7D7970_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>
    </div>
  )
}

export default LaptopMockup

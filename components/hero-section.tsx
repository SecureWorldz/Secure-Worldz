"use client"

import React from "react"
import Link from "next/link"
import { ArrowUpRight, Play } from "lucide-react"

// Import modular individual hero components
import { BotanicalFoliage } from "./hero/botanical-foliage"
import { GreenDiscBackdrop } from "./hero/green-disc-backdrop"
import { FloatingOwaspCard } from "./hero/floating-owasp-card"
import { FloatingThreatCard } from "./hero/floating-threat-card"
import { DoodleArrow } from "./hero/doodle-arrow"
import { HeroLaptop } from "./hero/hero-laptop"
import { PedestalPlatform } from "./hero/pedestal-platform"

export interface HeroSectionProps {
  badgeCategory?: string
  badgeText?: string
  headlineLine1?: string
  headlineLine2?: string
  headlineLine3?: string
  subtitle?: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  stats?: Array<{ value: string; label: string }>
}

export function HeroSection({
  badgeCategory = "Cybersecurity Labs",
  badgeText = "Products Built by People Who Build Tech",
  headlineLine1 = "Defend Better",
  headlineLine2 = "Faster Smarter",
  headlineLine3 = "Zero-Day Ready",
  subtitle = "Practical cybersecurity training, offensive tools, zero-day labs, and community built by people who build tech.",
  primaryCtaText = "Explore Courses",
  primaryCtaLink = "/courses",
  secondaryCtaText = "View Products & Labs",
  secondaryCtaLink = "/#products",
  stats = [
    { value: "5,000+", label: "Students Trained" },
    { value: "100+", label: "Events Partnered" },
    { value: "40K+", label: "Community Reach" },
  ],
}: HeroSectionProps) {
  return (
    <section className="relative w-full bg-[#F7F5F3] overflow-hidden pt-10 sm:pt-14 md:pt-18 lg:pt-24 pb-16 sm:pb-20 md:pb-24 border-b border-[rgba(55,50,47,0.08)] [background-image:repeating-linear-gradient(-45deg,rgba(55,50,47,0.02)_0,rgba(55,50,47,0.02)_1px,transparent_0,transparent_14px)]">
      {/* Outer Content Constraint with Generous Padding to Prevent Any SVG Edge Clipping */}
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: BADGE, HEADLINE, DESCRIPTION, CTAS, STATS   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start items-start text-left z-10">
            {/* 1. Category Pill Badge with Pulsing Cyber Green Indicator */}
            <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] inline-flex items-center gap-2 border border-[rgba(2,6,23,0.08)] mb-6 sm:mb-8 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#39F763] shadow-[0_0_8px_#39F763] animate-pulse" />
              <span className="text-[#37322F]/60 text-xs font-medium font-sans">Core Focus:</span>
              <span className="text-[#1C1A18] text-xs font-semibold font-sans tracking-tight">{badgeCategory}</span>
              <span className="text-[#37322F]/20 font-light">—</span>
              <span className="text-[#605A57] text-xs font-normal font-sans">{badgeText}</span>
            </div>

            {/* 2. Signature Serif Two-Tone Display Headline (Instrument Serif) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-serif font-normal tracking-tight leading-[1.03] text-[#1C1A18]">
              <span className="block">{headlineLine1}</span>
              <span className="block text-[#9E9B95]">{headlineLine2}</span>
              <span className="block text-[#1C1A18]">{headlineLine3}</span>
            </h1>

            {/* 3. Subtitle / Descriptive Copy */}
            <p className="text-[#605A57] text-base sm:text-lg md:text-[17px] font-normal leading-relaxed max-w-[500px] mt-6 sm:mt-8 mb-8 sm:mb-10 font-sans">
              {subtitle}
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* Primary Pill Button with Cyber Accent Glow on Hover */}
              <Link
                href={primaryCtaLink}
                className="h-12 sm:h-14 px-8 bg-[#181716] hover:bg-black text-white text-xs sm:text-sm font-medium rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.18)] flex items-center justify-center gap-2 font-sans transition-all hover:scale-[1.02] border border-transparent hover:border-[#39F763]/40 hover:shadow-[0_8px_24px_rgba(57,247,99,0.25)] group"
              >
                <span>{primaryCtaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary Button: "View Products & Labs" with Circular Play Icon */}
              <Link
                href={secondaryCtaLink}
                className="h-12 sm:h-14 px-8 bg-white/90 hover:bg-white text-[#181716] text-xs sm:text-sm font-medium rounded-full border border-[rgba(55,50,47,0.15)] shadow-xs flex items-center justify-center gap-2.5 font-sans transition-all hover:scale-[1.02] group"
              >
                <span className="w-6 h-6 rounded-full bg-[#181716] text-white flex items-center justify-center group-hover:bg-[#39F763] group-hover:text-black transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                <span>{secondaryCtaText}</span>
              </Link>
            </div>

            {/* 5. Metrics & Social Proof in Signature Instrument Serif */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-4 w-full max-w-[500px]">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1C1A18] tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#82807C] font-sans mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: MODULAR ASSEMBLED HERO VISUALS              */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 pt-4 pb-2">
            {/* Visual Assembly Relative Container */}
            <div className="relative w-full max-w-[560px] lg:max-w-[580px] flex items-center justify-center">

              {/* 1. Standalone Green Disc Backdrop (Contained, no clipping) */}
              <GreenDiscBackdrop className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] -top-3 sm:-top-6 right-1 sm:right-4 lg:right-6 z-0" />

              {/* 2. Standalone Botanical Leaves (Generous viewBox, 100% unclipped) */}
              <BotanicalFoliage className="absolute -top-6 sm:-top-10 -right-4 sm:-right-8 w-52 sm:w-68 md:w-76 lg:w-84 z-20" />

              {/* 3. Standalone Hand-drawn Doodle Loop Arrow */}
              <DoodleArrow className="absolute top-[12%] sm:top-[16%] -left-10 sm:-left-16 lg:-left-20 w-16 sm:w-20 md:w-24 z-30" />

              {/* 4. Standalone Floating OWASP 2026 Card */}
              <FloatingOwaspCard className="absolute -top-3 sm:-top-6 right-4 sm:right-10" />

              {/* 5. Standalone Floating Threat Defense Card */}
              <FloatingThreatCard className="absolute top-[48%] -left-8 sm:-left-14 lg:-left-18 -translate-y-1/2" />

              {/* 6. Centerpiece: Laptop Mockup standing on grounded Pedestal */}
              <div className="relative w-full z-10 pt-4 flex flex-col items-center">
                <HeroLaptop />
                <div className="w-[114%] -mt-2 z-0">
                  <PedestalPlatform />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection

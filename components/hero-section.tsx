"use client"

import React from "react"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck, Play } from "lucide-react"
import {
  DoodleLoopArrow,
  PerformanceSparkline,
  ThreeBarChart,
  ShieldSecurityIcon,
  BotanicalBranch,
} from "./svgs/hero-svgs"
import { LaptopMockup } from "./svgs/laptop-mockup"

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
    <section className="relative w-full bg-[#F7F5F3] overflow-hidden pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 sm:pb-20 md:pb-24 border-b border-[rgba(55,50,47,0.08)] [background-image:repeating-linear-gradient(-45deg,rgba(55,50,47,0.02)_0,rgba(55,50,47,0.02)_1px,transparent_0,transparent_14px)]">
      {/* Outer Content Constraint */}
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: BADGE, HEADLINE, DESCRIPTION, CTAS, STATS   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start items-start text-left z-10">
            {/* 1. Category Pill Badge with Pulsing Cyber Green Indicator (Matching Site Brillance Styling) */}
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
          {/* RIGHT COLUMN: DARK GREEN DISC, FOLIAGE, SVGS, LAPTOP     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Visual Assembly Relative Container */}
            <div className="relative w-full max-w-[560px] lg:max-w-[580px] flex items-center justify-center">

              {/* A. Large Forest Green Disc in Background */}
              <div
                className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-[#1E3B2B] via-[#142A1F] to-[#0D1C14] -top-10 sm:-top-16 right-0 sm:right-4 lg:right-6 z-0 shadow-[0_25px_60px_rgba(20,42,31,0.25)] pointer-events-none"
                aria-hidden="true"
              />

              {/* B. Botanical Leaves Branch entering from top-right */}
              <div
                className="absolute -top-12 sm:-top-20 -right-6 sm:-right-10 w-48 sm:w-64 md:w-72 lg:w-80 pointer-events-none z-20"
                aria-hidden="true"
              >
                <BotanicalBranch className="w-full h-auto" />
              </div>

              {/* C. Hand-drawn Doodle Loop Arrow pointing toward Laptop & Defense Card */}
              <div
                className="absolute top-[12%] sm:top-[16%] -left-10 sm:-left-16 lg:-left-20 w-16 sm:w-20 md:w-24 pointer-events-none z-30"
                aria-hidden="true"
              >
                <DoodleLoopArrow className="w-full h-auto text-[#37322F]" />
              </div>

              {/* D. Floating Card: "OWASP 2026" (Top-Right of Laptop) */}
              <div className="absolute -top-4 sm:-top-7 right-4 sm:right-10 z-30 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 sm:px-4.5 sm:py-3 border border-[rgba(55,50,47,0.08)] shadow-[0_16px_36px_rgba(55,50,47,0.08)] hover:border-[#39F763]/40 flex items-center gap-3 transition-all hover:-translate-y-1 duration-300">
                <div className="w-8 h-8 rounded-lg bg-[rgba(55,50,47,0.04)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#1C1A18]">
                  <ShieldSecurityIcon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-[#82807C] font-medium leading-tight font-sans">
                    OWASP 2026
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold text-[#1C1A18] leading-tight font-sans">
                    Zero-Day Ready
                  </span>
                </div>
                <div className="ml-1 pl-2 border-l border-[rgba(55,50,47,0.08)] flex items-center">
                  <ThreeBarChart className="w-5 h-5 text-[#1C1A18]" />
                </div>
              </div>

              {/* E. Floating Card: "Threat Defense" (Left of Laptop) */}
              <div className="absolute top-[48%] -left-8 sm:-left-14 lg:-left-18 -translate-y-1/2 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-[rgba(55,50,47,0.08)] shadow-[0_18px_40px_rgba(55,50,47,0.1)] hover:border-[#39F763]/40 flex flex-col gap-2 w-36 sm:w-44 transition-all hover:-translate-y-[calc(50%+4px)] duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[rgba(55,50,47,0.04)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#1C1A18]">
                    <ShieldCheck className="w-4 h-4 text-[#1C1A18]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-[#82807C] font-medium leading-tight font-sans">
                      Threat Defense
                    </span>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#1C1A18] leading-tight font-sans">
                      Live VAPT Labs
                    </span>
                  </div>
                </div>
                <div className="w-full pt-1">
                  <PerformanceSparkline className="w-full h-auto" />
                </div>
              </div>

              {/* F. Centerpiece: Laptop Mockup standing on Concrete Pedestal */}
              <div className="relative w-full z-10 pt-4">
                <LaptopMockup />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection

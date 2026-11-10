"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Header from "../components/header"
import ScrollProgress from "../components/scroll-progress"
import { ScrollReveal } from "../components/scroll-reveal"
import ServicesSection from "../components/services-section"
import ProductsSection from "../components/products-section"
import AchievementsSection from "../components/achievements-section"
import WhyUsSection from "../components/why-us-section"
import CommunitySection from "../components/community-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import AwardsRecognition from "../components/awards-recognition"
import FeaturedMasterclasses from "../components/featured-masterclasses"
import CareerGuidanceDialog from "../components/career-guidance-dialog"
import TestimonialsSection from "../components/testimonials-section"
import { ArrowRight, ArrowUpRight, Users, ShieldCheck, Bug, Award, Sparkles, Shield, GraduationCap } from "lucide-react"

// Reusable Badge Component adhering to Brillance styling
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

const focusTracks = [
  "Offensive Security Labs",
  "VAPT & Defense Protocols",
  "Zero-Day Vulnerability Research",
  "Agentic AI Security Audits",
  "Reverse Engineering & Exploits",
]

export default function LandingPage() {
  const [trackIndex, setTrackIndex] = useState(0)

  // Smooth rotating focus track
  useEffect(() => {
    const timer = setInterval(() => {
      setTrackIndex((prev) => (prev + 1) % focusTracks.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* Scroll Progress Indicator along top edge */}
      <ScrollProgress />

      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Full-width container */}
        <div className="w-full relative flex flex-col justify-start items-center min-h-screen">
          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10 w-full">
            {/* Global Header Navigation */}
            <Header />

            {/* 4.1 Sevora-Inspired Hero Section */}
            <div className="w-full pt-6 sm:pt-10 md:pt-14 pb-14 sm:pb-20 px-3 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center relative overflow-hidden [background-image:repeating-linear-gradient(-45deg,rgba(55,50,47,0.035)_0,rgba(55,50,47,0.035)_1px,transparent_0,transparent_14px)] border-b border-[rgba(55,50,47,0.08)]">
              {/* Floating Sevora-Style Rounded Hero Container */}
              <ScrollReveal direction="up" distance={20} delay={50} className="w-full max-w-[1240px] mx-auto rounded-[28px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#F4F2EC] via-[#ECE9E3] to-[#E4E1DB] border border-[rgba(55,50,47,0.08)] shadow-[0_24px_60px_-15px_rgba(55,50,47,0.06)] p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Column (Headline, Typewriter, Subtitle, Buttons, 3-Stat Columns) */}
                  <div className="lg:col-span-7 flex flex-col justify-start items-start text-left">
                    {/* Modern Program Focus Pill (Clean Sans-Serif) */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#37322F]/10 shadow-xs text-xs font-sans text-[#37322F] mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#39F763] shadow-[0_0_8px_#39F763] animate-pulse" />
                      <span className="text-[#37322F]/60 font-medium">Core Focus:</span>
                      <span className="font-semibold text-[#1C1A18] tracking-tight">
                        {focusTracks[trackIndex]}
                      </span>
                    </div>

                    {/* Sevora Two-Tone Typography Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-serif font-normal leading-[1.04] tracking-tight text-[#1C1A18]">
                      Defend Better<br />
                      <span className="text-[#9E9B95]">Faster Smarter</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[#605A57] text-sm sm:text-base md:text-[17px] font-sans leading-relaxed max-w-[480px] mt-5 mb-8">
                      Practical cybersecurity training, offensive tools, zero-day labs, and community built by people who build tech.
                    </p>

                    {/* Buttons Side by Side */}
                    <div className="flex flex-wrap items-center gap-3.5 mb-10 sm:mb-12">
                      <Link
                        href="/courses"
                        className="h-12 px-8 bg-[#181716] hover:bg-black text-white text-xs sm:text-sm font-medium rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.18)] flex items-center justify-center gap-2 font-sans transition-all hover:scale-[1.02] border border-transparent hover:border-[#39F763]/40 hover:shadow-[0_8px_24px_rgba(57,247,99,0.2)]"
                      >
                        <span>Explore Courses</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/#products"
                        className="h-12 px-8 bg-white/90 hover:bg-white text-[#181716] text-xs sm:text-sm font-medium rounded-full border border-[rgba(55,50,47,0.15)] shadow-xs flex items-center justify-center gap-2 font-sans transition-all hover:scale-[1.02]"
                      >
                        <span>View Products</span>
                      </Link>
                    </div>

                    {/* 3 Inline Stat Columns (Matching Sevora's "120+ / 8yr / 40+") */}
                    <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-[rgba(55,50,47,0.1)] w-full max-w-[480px]">
                      <div>
                        <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1A18] tracking-tight">
                          5,000+
                        </span>
                        <span className="block text-xs sm:text-[13px] text-[#82807C] font-sans mt-1">
                          Students trained
                        </span>
                      </div>
                      <div>
                        <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1A18] tracking-tight">
                          100+
                        </span>
                        <span className="block text-xs sm:text-[13px] text-[#82807C] font-sans mt-1">
                          Events partnered
                        </span>
                      </div>
                      <div>
                        <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1A18] tracking-tight">
                          40K+
                        </span>
                        <span className="block text-xs sm:text-[13px] text-[#82807C] font-sans mt-1">
                          Community reach
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Apple-Grade Floating Glassmorphic Cohort Card */}
                  <div className="lg:col-span-5 flex flex-col justify-center items-center w-full h-full">
                    <div className="w-full rounded-[28px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 bg-[#141416]/90 backdrop-blur-2xl border border-white/[0.08] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.14)] text-white flex flex-col justify-between gap-6 transition-all duration-300 hover:border-[#39F763]/30 group">
                      {/* Top Header with Status Badges */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-sans font-medium tracking-wide">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>UPCOMING COHORT</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs text-[#39F763] font-sans font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#39F763] shadow-[0_0_6px_#39F763] animate-pulse" />
                          <span>Enrolling Now</span>
                        </div>
                      </div>

                      {/* Main Copy */}
                      <div className="flex flex-col gap-2.5">
                        <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal tracking-tight leading-tight">
                          Available for enrollments
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300/80 leading-relaxed font-sans">
                          Direct mentorship with Cyber Jai, weekly offensive CTFs, 10 OWASP AI simulation labs, and 24/7 DRAGOZ Discord exchange.
                        </p>
                      </div>

                      {/* Feature Tags (Apple-style translucent chips) */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[11px] font-sans font-medium text-neutral-200">
                          OWASP 2026 Ready
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[11px] font-sans font-medium text-neutral-200">
                          English & Tamil
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[11px] font-sans font-medium text-neutral-200">
                          10 Hands-on Labs
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[11px] font-sans font-medium text-neutral-200">
                          ₹999 Starter · ₹2,999 Advanced
                        </span>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="flex items-center justify-between pt-5 border-t border-white/[0.08] mt-1">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-white font-sans">
                            5,000+ Alumni Network
                          </span>
                          <span className="text-[11px] text-neutral-400 font-sans">
                            Recognized across 100+ events
                          </span>
                        </div>
                        <Link
                          href="/courses"
                          className="w-12 h-12 rounded-2xl bg-white text-[#181716] flex items-center justify-center shrink-0 hover:bg-[#39F763] hover:text-black hover:scale-105 active:scale-95 transition-all shadow-md group/btn"
                          aria-label="View Courses"
                        >
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Sevora-Style Logo Marquee Strip underneath the Hero Card */}
              <ScrollReveal direction="up" distance={16} delay={150} className="w-full max-w-[1240px] mx-auto mt-10 sm:mt-12 px-4">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 opacity-75">
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <ShieldCheck className="w-4 h-4 text-[#37322F]" />
                    <span>OWASP 2026</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Users className="w-4 h-4 text-[#37322F]" />
                    <span>DRAGOZ</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Sparkles className="w-4 h-4 text-[#37322F]" />
                    <span>CyberJai</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Bug className="w-4 h-4 text-[#37322F]" />
                    <span>BugAtlas</span>
                  </div>
                  <div className="flex items-center gap-2 font-sans font-semibold text-sm sm:text-base text-[#37322F]">
                    <Award className="w-4 h-4 text-[#37322F]" />
                    <span>100+ Events</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Course Tracks Teaser Strip Linking to /courses */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 border-b border-[rgba(55,50,47,0.08)]">
              <ScrollReveal direction="up" distance={18} className="p-6 sm:p-8 rounded-3xl bg-white border border-[rgba(55,50,47,0.08)] shadow-xs hover:border-[#39F763]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 group">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(55,50,47,0.05)] text-xs font-sans font-medium text-[#37322F] w-fit mx-auto md:mx-0 group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all">
                    <GraduationCap className="w-3.5 h-3.5 group-hover:text-[#39F763] transition-colors" />
                    <span>Professional Training Tracks</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif text-[#1C1A18] group-hover:text-black font-normal transition-colors">
                    Starter Program (₹999) · Advanced Career Track (₹2,999)
                  </h2>
                  <p className="text-xs sm:text-sm text-[#605A57] font-sans max-w-[560px]">
                    Bilingual hands-on cybersecurity courses with practical labs, live mentorship, and verified certification.
                  </p>
                </div>
                <Link
                  href="/courses"
                  className="px-7 py-3.5 bg-[#181716] hover:bg-[#39F763] hover:text-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-all flex items-center gap-2 shrink-0 font-sans group/btn"
                >
                  <span>View All Courses & Syllabi</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Student Review / Testimonials Section (EMC & User Image Reference) */}
            <TestimonialsSection />

            {/* 4.2 Services Section */}
            <ServicesSection />

            {/* 4.3 Products Section (7 Tools + OWASP 2026 Lab) */}
            <ProductsSection />

            {/* EMC-Style Awards & Recognition Grid */}
            <AwardsRecognition />

            {/* 4.7 Why Us Section (10 Core Pillars) */}
            <WhyUsSection />

            {/* 4.5 Community Section (EMC-style stats, Discord, Prathyusha Meetup & Bilingual badges) */}
            <CommunitySection />

            {/* EMC-Style Featured Masterclasses & Free Tutorials */}
            <FeaturedMasterclasses />

            {/* 4.6 Achievements Section (100+ events, 5,000+ students, 40K+ followers) */}
            <AchievementsSection />

            {/* EMC-Style Giant Typographic Watermark Strip */}
            <div className="w-full py-10 sm:py-16 overflow-hidden border-t border-b border-[#37322F]/10 flex items-center justify-center bg-white/40 select-none">
              <p className="font-serif text-[28px] xs:text-[38px] sm:text-[56px] md:text-[80px] lg:text-[104px] tracking-[0.2em] sm:tracking-[0.28em] md:tracking-[0.32em] text-[#37322F]/[0.08] font-bold uppercase text-center whitespace-nowrap">
                S E C U R E W O R L D Z
              </p>
            </div>

            {/* Closing Primary CTA Section (Learn. Practice. Build.) */}
            <CTASection />

            {/* Global Footer Section */}
            <FooterSection />
          </div>
        </div>
      </div>

      {/* Floating EMC-Style Career Counselor / WhatsApp Guidance Widget */}
      <CareerGuidanceDialog />
    </div>
  )
}

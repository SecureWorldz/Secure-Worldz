"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Header from "../components/header"
import HeroSection from "../components/hero-section"
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

export default function LandingPage() {

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* Scroll Progress Indicator along top edge */}
      <ScrollProgress />

      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Full-width container */}
        <div className="w-full relative flex flex-col justify-start items-center min-h-screen">
          <div className="self-stretch pt-0 overflow-hidden flex flex-col justify-center items-center relative z-10 w-full">
            {/* Global Header Navigation */}
            <Header />

            {/* Algofort-Inspired Modern Hero Section */}
            <HeroSection />

            {/* Course Tracks Teaser Strip Linking to /courses */}
            <div className="content-container py-8 sm:py-10 border-b border-[rgba(55,50,47,0.08)]">
              <ScrollReveal direction="up" distance={18} className="p-6 sm:p-8 rounded-3xl bg-white border border-[rgba(55,50,47,0.08)] shadow-xs hover:border-[#39F763]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 group">
                <div className="flex flex-col gap-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(55,50,47,0.05)] text-xs font-sans font-medium text-[#37322F] w-fit mx-auto md:mx-0 group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all">
                    <GraduationCap className="w-3.5 h-3.5 group-hover:text-[#39F763] transition-colors" />
                    <span>Professional Training Tracks</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif text-[#1C1A18] group-hover:text-black font-normal transition-colors">
                    Starter Program (₹499) · Advanced Career Track (₹2,999)
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

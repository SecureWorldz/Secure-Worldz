"use client"

import { Star, MessageSquare } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useContent } from "@/hooks/use-content"
import type { Testimonial } from "@/lib/data/testimonials"


export default function TestimonialsSection() {
  const testimonials = useContent("testimonials")
  const column1 = testimonials.filter((_, index) => index % 3 === 0)
  const column2 = testimonials.filter((_, index) => index % 3 === 1)
  const column3 = testimonials.filter((_, index) => index % 3 === 2)

  return (
    <section id="reviews" className="w-full py-20 md:py-28 relative overflow-hidden bg-[#F7F5F3] border-b border-[rgba(55,50,47,0.12)]">
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.05),transparent_60%)] pointer-events-none" />

      {/* Header Section */}
      <div className="content-container mb-12 sm:mb-16 flex flex-col items-center text-center relative z-10">
        <ScrollReveal direction="down" distance={16} delay={50} className="mb-3">
          <span className="text-[#D97706] text-xs font-semibold uppercase tracking-[0.2em] font-sans">
            STUDENT REVIEW
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={20} delay={100}>
          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-tight">
            Hear from students like you
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[620px] mx-auto mt-4">
            Discover how students, engineers, and career switchers built practical cybersecurity skills, cracked interviews, and grew with SECUREWORLDZ.
          </p>
        </ScrollReveal>
      </div>

      {/* Masonry Columns Container */}
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {column1.map((item, idx) => (
              <TestimonialCard key={idx} item={item} delay={idx * 80} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {column2.map((item, idx) => (
              <TestimonialCard key={idx} item={item} delay={idx * 100 + 40} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            {column3.map((item, idx) => (
              <TestimonialCard key={idx} item={item} delay={idx * 90 + 80} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust metric badge below reviews */}
      <div className="content-container mt-12 sm:mt-16 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[rgba(55,50,47,0.1)] shadow-xs text-xs sm:text-sm font-sans text-[#37322F]">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
            ))}
          </div>
          <span className="font-semibold">4.9 / 5 Average Rating</span>
          <span className="text-[#828387]">•</span>
          <span className="text-[#605A57]">Across 5,000+ Community Learners</span>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ item, delay }: { item: Testimonial; delay: number }) {
  return (
    <ScrollReveal
      direction="up"
      distance={20}
      delay={delay}
      className="w-full bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(55,50,47,0.1)] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-5 group"
    >
      {/* Review content */}
      <p className="text-[#37322F] text-sm leading-relaxed font-sans font-normal">
        {item.content}
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 pt-2 border-t border-[rgba(55,50,47,0.06)]">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover border border-[rgba(55,50,47,0.12)] shrink-0 shadow-xs"
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#37322F] font-sans group-hover:text-black transition-colors">
            {item.name}
          </span>
          <span className="text-xs text-[#828387] font-sans">
            {item.source}
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}

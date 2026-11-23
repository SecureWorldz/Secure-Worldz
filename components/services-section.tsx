"use client"

import {
  Shield,
  Lock,
  Search,
  Globe,
  Eye,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SERVICES } from "@/lib/data/services"

function getServiceIcon(id: string) {
  switch (id) {
    case "vapt":
      return <Shield className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "penetration-testing":
      return <Lock className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "security-auditing":
      return <Search className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "web-app-security":
      return <Globe className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "soc-monitoring":
      return <Eye className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    case "incident-response":
      return <AlertTriangle className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
    default:
      return <Shield className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
  }
}

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-28 relative overflow-hidden bg-[#F7F5F3] border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Background subtle radial glow matching Testimonials */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(55,50,47,0.03),transparent_60%)] pointer-events-none" />

      {/* Header Section */}
      <div className="content-container mb-12 sm:mb-16 flex flex-col justify-center items-center text-center relative z-10">
        <ScrollReveal className="w-full max-w-[640px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Shield className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Cybersecurity Services</span>
          </div>

          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Security Auditing & Defensive Operations
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            End-to-end security assessment, continuous threat monitoring, and rapid incident response engineered to safeguard your systems and applications.
          </p>
        </ScrollReveal>
      </div>

      {/* Clean 3x2 Grid of 6 Cards Matching the Testimonials UI */}
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={index * 60}
              direction="up"
              distance={20}
              className="w-full bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(55,50,47,0.1)] shadow-xs hover:border-[#39F763]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(55,50,47,0.04)] border border-[rgba(55,50,47,0.08)] flex items-center justify-center text-[#1C1A18] group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all shadow-xs">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.05)] text-[10px] font-sans font-semibold uppercase tracking-[0.14em] text-[#82807C]">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#1C1A18] tracking-tight group-hover:text-black transition-colors mb-1.5">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#2F2B28] leading-snug font-sans mb-2">
                  {service.shortDescription}
                </p>
                <p className="text-xs text-[#605A57] leading-relaxed font-sans">
                  {service.details}
                </p>
              </div>

              {/* Bottom Action Row with Divider */}
              <a
                href={`https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 mt-6 border-t border-[rgba(55,50,47,0.06)] flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1C1A18] group-hover:text-black transition-colors"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-[#39F763] transition-all" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Services Action Strip */}
      <div className="content-container mt-12 sm:mt-16 relative z-10">
        <div className="w-full p-6 sm:p-7 rounded-2xl bg-white border border-[rgba(55,50,47,0.1)] shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-serif font-medium text-[#1C1A18]">
              Need a tailored penetration test, infrastructure audit, or SOC evaluation?
            </span>
            <span className="text-xs text-[#605A57] font-sans mt-0.5">
              Our principal engineers provide detailed scopes of work and NDA-backed consultations.
            </span>
          </div>
          <a
            href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20would%20like%20to%20discuss%20a%20security%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#181716] hover:bg-black text-white text-xs sm:text-sm font-medium rounded-full shadow-xs hover:border-[#39F763]/40 hover:shadow-[0_4px_16px_rgba(57,247,99,0.2)] border border-transparent transition-all font-sans shrink-0"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  )
}

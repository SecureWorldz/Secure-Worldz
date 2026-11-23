"use client"

import { Award, ShieldCheck, Trophy, Sparkles, Youtube, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AwardsRecognition() {
  const recognitions = [
    {
      title: "100+ National Events",
      subtitle: "Sponsored & Partnered",
      description: "Recognized for sponsoring technical symposiums, hackathons, and cybersecurity conclaves nationwide.",
      icon: <Trophy className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
      badge: "National Reach",
    },
    {
      title: "Prathyusha Engineering College",
      subtitle: "Institutional Partner",
      description: "Hosted the landmark DRAGOZ Community Meetup 2026 featuring live penetration testing demonstrations.",
      icon: <Award className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
      badge: "Campus Collaboration",
    },
    {
      title: "OWASP 2026 Framework",
      subtitle: "Agentic AI Security Alignment",
      description: "Pioneered 10 hands-on simulation labs mapping directly to OWASP ASI-01 through ASI-10 threat categories.",
      icon: <ShieldCheck className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
      badge: "Curriculum Standard",
    },
    {
      title: "CyberJai YouTube Milestone",
      subtitle: "Cybersecurity Tech Educator",
      description: "Delivering free, high-impact cybersecurity and vibe hacking tutorials across English and Tamil audiences.",
      icon: <Youtube className="w-5 h-5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
      badge: "Community Recognition",
    },
  ]

  return (
    <section id="recognition" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="content-container py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <ScrollReveal className="w-full max-w-[620px] flex flex-col justify-start items-center gap-4 text-center">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Awards & Recognition</span>
          </div>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Recognized for Practical Excellence
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            Acknowledged by academic institutions, conferences, and community leaders for our commitment to transparent cybersecurity learning.
          </p>
        </ScrollReveal>
      </div>

      {/* 4 Recognition Cards */}
      <div className="content-container py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitions.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 90}
              direction="up"
              distance={20}
              className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(55,50,47,0.1)] shadow-xs hover:border-[#39F763]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-start gap-4 group"
            >
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[rgba(55,50,47,0.1)] flex items-center justify-center shadow-xs group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.06)] text-[#37322F] group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all font-sans">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-medium text-[#828387] uppercase tracking-wide font-sans block mb-1">
                    Recognized for
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-[#37322F] group-hover:text-black transition-colors font-sans leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-[#49423D] font-sans mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-[#605A57] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[rgba(55,50,47,0.08)] w-full flex items-center gap-1.5 text-[11px] text-[#49423D] font-sans font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
                <span>Verified by SECUREWORLDZ</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

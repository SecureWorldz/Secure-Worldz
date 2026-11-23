"use client"

import { CheckCircle2, Compass, Layers, ShieldCheck, UserCheck, Hammer, Infinity as InfinityIcon, BrainCircuit, TrendingUp, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function WhyUsSection() {
  const pillars = [
    {
      title: "Learn by Doing, Not Just Watching",
      description: "Hands-on labs, practical exercises, security tools and real-world scenarios instead of passive video consumption.",
      icon: <Hammer className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "Built Around Real Cybersecurity Skills",
      description: "Ethical hacking, VAPT, web application defense, incident response, cloud security, and actionable threat intelligence.",
      icon: <ShieldCheck className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "Learn Directly From Practitioners",
      description: "Taught by security analysts and engineers solving live client challenges, not purely theoretical academics.",
      icon: <UserCheck className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "Build While You Learn",
      description: "Develop your own offensive scripts, forensic triage tools, and portfolio capstones that prove your real engineering ability.",
      icon: <Layers className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "Your Learning Doesn't End With the Course",
      description: "Ongoing SECUREWORLDZ community support, collaborative problem-solving, and continuous industry updates.",
      icon: <InfinityIcon className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "Cybersecurity + AI",
      description: "Cutting-edge curriculum covering agentic risks, prompt injection defenses, and the OWASP 2026 AI security roadmap.",
      icon: <BrainCircuit className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "From Beginner to Advanced",
      description: "Structured pathways beginning with foundational Linux and networking up through kernel concepts and malware reverse engineering.",
      icon: <TrendingUp className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "Tools + Labs + Training Under One Roof",
      description: "An integrated ecosystem uniting software tools, live web labs, workshops, consulting services, and active community forums.",
      icon: <Compass className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "Learn. Practice. Build.",
      description: "Our guiding operational methodology dedicated to producing confident, industry-ready cybersecurity builders.",
      icon: <CheckCircle2 className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
    {
      title: "A Community Built Around Cybersecurity",
      description: "Join DRAGOZ—our 300+ member tight-knit cybersecurity collective featuring Discord interactions and offline meetups.",
      icon: <Sparkles className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />,
    },
  ]

  return (
    <section id="why-us" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="content-container py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <ScrollReveal className="w-full max-w-[620px] flex flex-col justify-start items-center gap-4 text-center">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">The Advantage</span>
          </div>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Why SECUREWORLDZ?
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            We bridge the gap between academic theory and real-world security engineering through practitioner mentorship and dedicated tooling.
          </p>
        </ScrollReveal>
      </div>

      {/* 10 Pillar Cards */}
      <div className="content-container py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <ScrollReveal
              key={index}
              delay={index * 50}
              direction="up"
              distance={18}
              className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(55,50,47,0.1)] shadow-xs hover:border-[#39F763]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-[rgba(55,50,47,0.12)] flex items-center justify-center shrink-0 shadow-xs mt-0.5 group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all">
                {pillar.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[#37322F] text-sm sm:text-base font-semibold font-sans group-hover:text-black transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[#605A57] text-xs sm:text-[13px] leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

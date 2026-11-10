"use client"

import { useState } from "react"
import Link from "next/link"
import { Crosshair, Cpu, GraduationCap, Shield, Terminal, Bug, Database, Layers, ArrowRight } from "lucide-react"

interface SuiteCardItem {
  name: string
  description: string
  icon: any
  iconColor: string
  link: string
  actionText: string
}

const SUITE_TABS: {
  id: string
  title: string
  icon: any
  cards: SuiteCardItem[]
}[] = [
  {
    id: "tools",
    title: "Offensive Tools",
    icon: Crosshair,
    cards: [
      {
        name: "Exploitry",
        description: "Zero-day payload crafting and exploit automation suite built for penetration testers.",
        icon: Crosshair,
        iconColor: "#714cb6",
        link: "/#products",
        actionText: "Explore Exploitry",
      },
      {
        name: "BugAtlas",
        description: "Live web application vulnerability scanner and asset reconnaissance framework.",
        icon: Bug,
        iconColor: "#421d24",
        link: "/#products",
        actionText: "Explore BugAtlas",
      },
      {
        name: "DarkX OSINT",
        description: "Dark web intelligence, leaked credential triage, and digital footprint inspection.",
        icon: Database,
        iconColor: "#0c4243",
        link: "/#products",
        actionText: "Explore DarkX",
      },
      {
        name: "Versage",
        description: "Binary analysis and memory corruption testing environment for security researchers.",
        icon: Terminal,
        iconColor: "#714cb6",
        link: "/#products",
        actionText: "Explore Versage",
      },
    ],
  },
  {
    id: "labs",
    title: "Training Labs",
    icon: Cpu,
    cards: [
      {
        name: "OWASP 2026 AI Lab",
        description: "10 interactive browser simulations targeting agentic risks, prompt injections, and goal hijacking.",
        icon: Cpu,
        iconColor: "#714cb6",
        link: "/#products",
        actionText: "Launch AI Lab",
      },
      {
        name: "Machinex",
        description: "Offensive Linux sandbox with 25+ real-world privilege escalation vulnerabilities.",
        icon: Terminal,
        iconColor: "#421d24",
        link: "/#products",
        actionText: "Launch Machinex",
      },
      {
        name: "Kernelis",
        description: "Rootkit detection and kernel-level hook analysis playground for systems engineers.",
        icon: Layers,
        iconColor: "#0c4243",
        link: "/#products",
        actionText: "Launch Kernelis",
      },
      {
        name: "Infectis",
        description: "Isolated malware behavioral detonator for safe triage of suspicious binaries.",
        icon: Crosshair,
        iconColor: "#714cb6",
        link: "/#products",
        actionText: "Launch Infectis",
      },
    ],
  },
  {
    id: "courses",
    title: "Academy Tracks",
    icon: GraduationCap,
    cards: [
      {
        name: "Starter Program",
        description: "7-day intensive hands-on foundation in Linux, networking, and ethical hacking essentials for ₹999.",
        icon: GraduationCap,
        iconColor: "#714cb6",
        link: "/courses",
        actionText: "View Starter Syllabus",
      },
      {
        name: "Advanced Career Track",
        description: "Comprehensive professional curriculum covering enterprise VAPT, Ghidra, and OWASP 2026 for ₹2,999.",
        icon: Shield,
        iconColor: "#421d24",
        link: "/courses",
        actionText: "View Advanced Syllabus",
      },
      {
        name: "Bilingual Mentorship",
        description: "Interactive lectures and Discord office hours delivered in both English and Tamil.",
        icon: Terminal,
        iconColor: "#0c4243",
        link: "/courses",
        actionText: "Learn More",
      },
      {
        name: "Live Workshops",
        description: "Monthly weekend intensives tackling live exploit triage and offensive AI defense.",
        icon: Cpu,
        iconColor: "#714cb6",
        link: "/workshops",
        actionText: "Explore Workshops",
      },
    ],
  },
  {
    id: "services",
    title: "Security Audits",
    icon: Shield,
    cards: [
      {
        name: "VAPT Assessment",
        description: "Deep-dive vulnerability assessment & penetration testing for web, mobile, and APIs.",
        icon: Shield,
        iconColor: "#421d24",
        link: "/#services",
        actionText: "Request VAPT Quote",
      },
      {
        name: "SOC Monitoring",
        description: "Continuous 24/7 security event logging, anomaly correlation, and proactive alerting.",
        icon: Terminal,
        iconColor: "#714cb6",
        link: "/#services",
        actionText: "Explore SOC Services",
      },
      {
        name: "Incident Response",
        description: "Rapid triage, containment, forensic root-cause analysis, and threat neutralization.",
        icon: Crosshair,
        iconColor: "#0c4243",
        link: "/#services",
        actionText: "Contact Incident Team",
      },
      {
        name: "AI Model Hardening",
        description: "Security evaluations for LLMs, agent toolchains, and internal enterprise workflows.",
        icon: Cpu,
        iconColor: "#714cb6",
        link: "/#services",
        actionText: "Schedule AI Audit",
      },
    ],
  },
]

export default function SuiteTabStrip() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="w-full bg-[#f2f0eb] py-20 px-4 sm:px-6 md:px-8 border-b border-[#e3e3e2]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Editorial Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-wider text-[#714cb6] font-[460]">
            The Integrated Security Ecosystem
          </span>
          <h2 className="text-[36px] sm:text-[48px] font-[460] leading-[0.96] tracking-tight text-[#292827]">
            Your SECUREWORLDZ suite
          </h2>
          <p className="text-base text-[#666666] font-[460] max-w-[620px]">
            Every tool, sandbox lab, and training track is built by practicing security engineers, designed to function as an integrated offensive and defensive workbench.
          </p>
        </div>

        {/* Four equal-width tabs in a horizontal row */}
        <div className="w-full bg-white rounded-[8px] border border-[#e3e3e2] p-0 grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {SUITE_TABS.map((tab, idx) => {
            const Icon = tab.icon
            const isActive = activeTab === idx
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`py-4 px-4 flex items-center justify-center gap-2.5 text-sm font-[460] transition-colors ${
                  isActive
                    ? "bg-[#d4c7ff] text-[#292827]"
                    : "bg-white text-[#292827] hover:bg-[#f2f0eb]"
                } ${idx > 0 ? "border-l border-[#e3e3e2]" : ""}`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-[#714cb6]" : "text-[#292827]"
                  }`}
                />
                <span>{tab.title}</span>
              </button>
            )
          })}
        </div>

        {/* 4 Suite Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUITE_TABS[activeTab].cards.map((card, idx) => {
            const CardIcon = card.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-4 border border-[#e3e3e2] flex flex-col justify-between transition-colors hover:border-[#292827]/40"
              >
                <div>
                  {/* Colored icon top-left (16px) */}
                  <div
                    className="w-8 h-8 rounded-[8px] flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${card.iconColor}15` }}
                  >
                    <CardIcon className="w-4 h-4" style={{ color: card.iconColor }} />
                  </div>

                  {/* Product name at 19px weight 700 #292827 */}
                  <h3 className="text-[19px] font-bold text-[#292827] leading-[1.5] mb-2 tracking-tight">
                    {card.name}
                  </h3>

                  {/* Body text at 16px weight 460 #292827, two lines max */}
                  <p className="text-[16px] font-[460] text-[#292827] leading-[1.3] line-clamp-2 mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Learn more link at 16px weight 460 #714cb6, underline appears on hover with 0.2s ease */}
                <div className="pt-3 border-t border-[#e3e3e2]/60">
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-1.5 text-[16px] font-[460] text-[#714cb6] hover:underline transition-all duration-200"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

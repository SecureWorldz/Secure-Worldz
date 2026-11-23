"use client"

import Link from "next/link"
import { Youtube, Clock, ThumbsUp, Layers, PlayCircle, ArrowRight, Video } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function FeaturedMasterclasses() {
  const masterclasses = [
    {
      title: "How to do vibe hacking for free?",
      badge: "Upcoming Live Workshop",
      description: "A hands-on masterclass on AI prompt-driven experimentation, system boundary probing, and free security tools.",
      duration: "Live Interactive Session",
      likes: "October 30, 2026",
      topics: "5 Core Modules",
      highlight: "Free Community Access",
      link: "/workshops",
      isInternal: true,
    },
    {
      title: "VAPT & Web Security Practical Foundation",
      badge: "CyberJai YouTube Series",
      description: "Comprehensive walkthrough covering Burp Suite, SQL injection, XSS, and modern application attack vectors in English & Tamil.",
      duration: "6+ Hours Deep Dive",
      likes: "12k+ Views",
      topics: "OWASP Top 10",
      highlight: "Practical Lab Walkthrough",
      link: "https://youtube.com/@CyberJai",
      isInternal: false,
    },
    {
      title: "Linux & Network Defense for Cybersecurity",
      badge: "CyberJai YouTube Series",
      description: "From essential Linux system tools to packet inspection with Wireshark and automated triage scripts.",
      duration: "4+ Hours Tutorial",
      likes: "9.5k+ Views",
      topics: "Linux & Networking",
      highlight: "Zero-to-Hero Roadmap",
      link: "https://youtube.com/@CyberJai",
      isInternal: false,
    },
  ]

  return (
    <section id="masterclasses" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="content-container py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <ScrollReveal className="w-full max-w-[620px] flex flex-col justify-start items-center gap-4 text-center">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <Video className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Free Masterclasses & Videos</span>
          </div>

          <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Learn at Your Own Pace
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            Unlock free practical security tutorials and upcoming live workshops led by Cyber Jai on YouTube and community streams.
          </p>
        </ScrollReveal>
      </div>

      {/* 3 Masterclass Cards */}
      <div className="content-container py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masterclasses.map((cls, index) => (
            <ScrollReveal
              key={index}
              delay={index * 110}
              direction="up"
              distance={22}
              className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-[rgba(55,50,47,0.1)] shadow-xs hover:border-[#39F763]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-start gap-6 group"
            >
              <div className="flex flex-col gap-4 w-full">
                {/* Visual Video Card Preview */}
                <div className="w-full h-40 bg-[#1F1E1D] rounded-xl border border-[rgba(55,50,47,0.15)] p-4 flex flex-col justify-between text-white relative overflow-hidden group/thumb shadow-xs">
                  <div className="flex justify-between items-center z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                      SECUREWORLDZ FREE ACCESS
                    </span>
                    <Youtube className="w-4 h-4 text-red-500" />
                  </div>

                  <div className="z-10 flex items-center justify-center my-auto">
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 group-hover:bg-[#181716] group-hover:text-[#39F763] group-hover/thumb:scale-110 transition-all shadow-xs">
                      <PlayCircle className="w-6 h-6 group-hover:text-[#39F763] transition-colors" />
                    </div>
                  </div>

                  <div className="z-10 flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-1">
                    <span>{cls.highlight}</span>
                    <span>HD 1080P</span>
                  </div>

                  {/* Subtle pattern background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                </div>

                {/* Badge & Title */}
                <div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full font-sans inline-block mb-2 ${
                      cls.isInternal
                        ? "bg-[#181716] text-[#39F763] border border-[#39F763]/30"
                        : "bg-[rgba(55,50,47,0.06)] text-[#37322F] group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all"
                    }`}
                  >
                    {cls.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-[#37322F] group-hover:text-black transition-colors leading-snug font-medium">
                    {cls.title}
                  </h3>
                  <p className="text-xs text-[#605A57] font-sans leading-relaxed mt-1.5">
                    {cls.description}
                  </p>
                </div>

                {/* Metadata tags */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#49423D] font-sans p-3 bg-white rounded-xl border border-[rgba(55,50,47,0.08)]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#828387] group-hover:text-[#39F763] transition-colors" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#828387] group-hover:text-[#39F763] transition-colors" />
                    <span>{cls.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Layers className="w-3.5 h-3.5 text-[#828387] group-hover:text-[#39F763] transition-colors" />
                    <span>{cls.topics}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {cls.isInternal ? (
                <Link
                  href={cls.link}
                  className="w-full py-3 rounded-full bg-[#181716] hover:bg-[#39F763] hover:text-black text-white text-xs font-semibold font-sans flex items-center justify-center gap-2 transition-all shadow-xs group/btn"
                >
                  <span>Explore Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:text-black group-hover:text-[#39F763] transition-all" />
                </Link>
              ) : (
                <a
                  href={cls.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-white hover:bg-[#181716] hover:text-[#39F763] hover:border-black text-[#37322F] border border-[rgba(55,50,47,0.15)] text-xs font-medium font-sans flex items-center justify-center gap-2 transition-all shadow-xs group/btn"
                >
                  <span>Watch on YouTube</span>
                  <PlayCircle className="w-3.5 h-3.5 group-hover/btn:scale-110 group-hover:text-[#39F763] transition-colors" />
                </a>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

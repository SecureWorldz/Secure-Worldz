"use client"

import Link from "next/link"
import { Clock, ThumbsUp, Layers, PlayCircle, ArrowRight, Video } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { YoutubePlayer } from "@/components/youtube-player"

export default function FeaturedMasterclasses() {
  const masterclasses = [
  {
    title: "How to Become a Hacker in 2026?",
    badge: "Cybersecurity Roadmap",
    description: "A beginner-friendly guide to ethical hacking and cybersecurity. Explore the essential skills, networking, Linux, programming, certifications, career opportunities, and salary expectations for aspiring ethical hackers.",
    duration: "24:07",
    likes: "July 10, 2026",
    topics: "12+ Key Topics",
    highlight: "Beginner to Ethical Hacker",
    videoId: "Fzzim7iVibI",
    link: "https://youtu.be/Fzzim7iVibI",
    isInternal: false,
  },
  {
    title: "The Complete Cyber Forensics Roadmap | 2026",
    badge: "Digital Forensics",
    description: "Explore the roadmap to becoming a cyber forensics professional. Understand the field of digital forensics, the skills required, career opportunities, and the learning path to enter the world of cybercrime investigation and digital evidence analysis.",
    duration: "YouTube Video",
    likes: "2026",
    topics: "Cyber Forensics Roadmap",
    highlight: "Build a Career in Digital Forensics",
    videoId: "k2XiUO-juK4",
    link: "https://youtu.be/k2XiUO-juK4",
    isInternal: false,
  },
  {
    title: "I Tested the Viral GitHub Repo That Reverse Engineers Anything",
    badge: "AI & Open Source",
    description: "Discover Reverse Engineer Anything (REA), a viral open-source project that helps AI agents inspect and understand existing software. Explore how reverse engineering tools work with AI coding agents to analyze applications, understand their features, and recreate similar functionality.",
    duration: "YouTube Video",
    likes: "October 2026",
    topics: "AI Agents & Reverse Engineering",
    highlight: "Explore the Future of AI-Powered Development",
    videoId: "xubXao5wKJY",
    link: "https://youtu.be/xubXao5wKJY",
    isInternal: false,
  },
  ]

  return (
    <section id="masterclasses" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center">
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

      {/* Connected Editorial Grid for Masterclasses */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left decorative hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 90 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        {/* 3 Masterclass Columns in Connected Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {masterclasses.map((cls, index) => (
            <ScrollReveal
              key={index}
              delay={index * 110}
              direction="up"
              distance={22}
              className={`p-6 sm:p-8 flex flex-col justify-between items-start gap-6 border-b md:border-b-0 border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] hover:bg-white transition-all duration-300 group ${
                index < 2 ? "md:border-r border-[rgba(55,50,47,0.12)]" : ""
              }`}
            >
              <div className="flex flex-col gap-4 w-full">
                {/* YouTube Video Player */}
                <YoutubePlayer
                  videoId={cls.videoId}
                  title={cls.title}
                  highlight={cls.highlight}
                />

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

        {/* Right decorative hatch */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden hidden sm:block">
          <div className="w-[120px] left-[-40px] top-[-120px] absolute flex flex-col">
            {Array.from({ length: 90 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

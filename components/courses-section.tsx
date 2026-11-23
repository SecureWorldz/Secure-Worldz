"use client"

import { useState } from "react"
import { COURSES } from "@/lib/data/courses"
import { GraduationCap, Check, ArrowRight, Clock, Award, Users, BookOpen, Shield, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function CoursesSection() {
  const [selectedLevel, setSelectedLevel] = useState<"All" | "Beginner" | "Advanced">("All")

  const filteredCourses = selectedLevel === "All" 
    ? COURSES 
    : COURSES.filter((c) => c.level === selectedLevel)

  const courseTechStacks: Record<string, string[]> = {
    "cybersecurity-starter-program": ["Linux", "Wireshark", "Nmap", "Bash", "Python", "AI Prompting"],
    "advanced-cybersecurity-course": ["Burp Suite", "Metasploit", "Ghidra", "Wireshark", "Docker", "AWS Security", "Python"],
  }

  return (
    <section id="courses" className="w-full py-20 md:py-28 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="content-container mb-10 sm:mb-12 flex flex-col justify-center items-center text-center">
        <ScrollReveal className="w-full max-w-[660px] flex flex-col justify-start items-center gap-4 text-center">
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
            <GraduationCap className="w-3.5 h-3.5 text-[#37322F]" />
            <span className="text-[#37322F] text-xs font-medium font-sans">Premier Learning Programs</span>
          </div>

          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-normal font-serif tracking-tight leading-tight">
            Discover Our Top-Rated Training Tracks
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[540px]">
            Master offensive and defensive cybersecurity through practical labs, real capstone engineering, and practitioner mentorship.
          </p>
        </ScrollReveal>
      </div>

      {/* Filter / Toggle Pills */}
      <div className="content-container mb-12 flex justify-center items-center">
        <div className="p-1.5 bg-white rounded-full flex items-center gap-1.5 border border-[rgba(55,50,47,0.1)] shadow-xs">
          {(["All", "Beginner", "Advanced"] as const).map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-5 py-2 rounded-full text-xs font-medium font-sans transition-all duration-200 ${
                selectedLevel === level
                  ? "bg-[#37322F] text-white shadow-xs"
                  : "text-[#605A57] hover:text-[#37322F]"
              }`}
            >
              {level === "All" ? "All Programs" : `${level} Track`}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Cards Section with Distinct Cards & Neat Spacing */}
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredCourses.map((course, index) => {
            const isFeatured = course.featured
            const techStack = courseTechStacks[course.id] || []

            return (
              <ScrollReveal
                key={course.id}
                delay={index * 120}
                direction="up"
                className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 ${
                  isFeatured
                    ? "bg-[#1C1A18] text-white border border-[#39F763]/30 shadow-[0_16px_40px_-10px_rgba(57,247,99,0.12)] hover:border-[#39F763]/60"
                    : "bg-white text-[#37322F] border border-[rgba(55,50,47,0.1)]"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {/* Top Bar with Badges */}
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs uppercase font-semibold px-3 py-1 rounded-full font-sans tracking-wide ${
                        isFeatured
                          ? "bg-[#39F763]/15 text-[#39F763] border border-[#39F763]/30"
                          : "bg-[rgba(55,50,47,0.06)] text-[#37322F]"
                      }`}
                    >
                      {course.badge}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-sans font-medium">
                      <Clock className="w-3.5 h-3.5 opacity-70" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl font-serif mb-2 ${
                        isFeatured ? "text-white" : "text-[#37322F]"
                      }`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-sans leading-relaxed ${
                        isFeatured ? "text-white/80" : "text-[#605A57]"
                      }`}
                    >
                      {course.description}
                    </p>
                  </div>

                  {/* EMC-Style Tech Stack Strip */}
                  <div className="flex flex-col gap-2 pt-1">
                    <span className={`text-[11px] font-semibold uppercase tracking-wider font-sans ${isFeatured ? "text-[#39F763]/90" : "text-[#828387]"}`}>
                      Tools & Stack Mastered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {techStack.map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2.5 py-1 rounded-full font-sans font-medium flex items-center gap-1.5 ${
                            isFeatured
                              ? "bg-white/10 text-white border border-white/15"
                              : "bg-[rgba(55,50,47,0.05)] text-[#37322F] border border-[rgba(55,50,47,0.08)]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="py-2.5 border-y border-current/10 flex items-baseline gap-2.5">
                    <span className="text-4xl sm:text-5xl font-serif tracking-tight font-medium">
                      {course.price}
                    </span>
                    <span className={`text-xs font-sans ${isFeatured ? "text-white/70" : "text-[#828387]"}`}>
                      one-time complete fee (no recurring cost)
                    </span>
                  </div>

                  {/* EMC-Style Key Highlight Pills */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                    <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${isFeatured ? "bg-white/5 border-white/10" : "bg-neutral-50 border-[rgba(55,50,47,0.08)]"}`}>
                      <BookOpen className="w-3.5 h-3.5 shrink-0" />
                      <span>{course.format}</span>
                    </div>
                    <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${isFeatured ? "bg-white/5 border-white/10" : "bg-neutral-50 border-[rgba(55,50,47,0.08)]"}`}>
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span>Verified Certificate</span>
                    </div>
                    <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${isFeatured ? "bg-white/5 border-white/10" : "bg-neutral-50 border-[rgba(55,50,47,0.08)]"}`}>
                      <Users className="w-3.5 h-3.5 shrink-0" />
                      <span>DRAGOZ Community</span>
                    </div>
                    <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${isFeatured ? "bg-white/5 border-white/10" : "bg-neutral-50 border-[rgba(55,50,47,0.08)]"}`}>
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>Practitioner Guidance</span>
                    </div>
                  </div>

                  {/* Curriculum Modules */}
                  <div className="flex flex-col gap-2.5 pt-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider font-sans ${
                        isFeatured ? "text-[#39F763]/90" : "text-[#828387]"
                      }`}
                    >
                      Curriculum Syllabus ({course.modules.length} Modules):
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                      {course.modules.map((mod, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isFeatured ? "text-[#39F763]" : "text-[#37322F]"}`} />
                          <span className={isFeatured ? "text-white/90" : "text-[#49423D]"}>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inclusions */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-current/10">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider font-sans ${
                        isFeatured ? "text-[#39F763]/90" : "text-[#828387]"
                      }`}
                    >
                      What's Included:
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs font-sans">
                      {course.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isFeatured ? "bg-[#39F763] shadow-[0_0_4px_#39F763]" : "bg-[#37322F]"}`} />
                          <span className={isFeatured ? "text-white/80" : "text-[#605A57]"}>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enroll CTA Button */}
                <div className="pt-8">
                  <a
                    href={`https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(course.title)}%20(${course.price}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-full flex justify-center items-center gap-2 text-xs sm:text-sm font-sans transition-all shadow-xs ${
                      isFeatured
                        ? "bg-[#39F763] hover:bg-[#2ee656] text-black font-semibold shadow-[0_4px_16px_rgba(57,247,99,0.3)]"
                        : "bg-[#37322F] text-white hover:bg-[#201D1B] font-medium"
                    }`}
                  >
                    <span>Enroll Now ({course.price})</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

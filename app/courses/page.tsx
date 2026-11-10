"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import CTASection from "@/components/cta-section"
import ScrollProgress from "@/components/scroll-progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import CareerGuidanceDialog from "@/components/career-guidance-dialog"
import { COURSES } from "@/lib/data/courses"
import {
  GraduationCap,
  Check,
  ArrowRight,
  Clock,
  Award,
  Users,
  BookOpen,
  Shield,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Layers,
  FileCheck,
  Laptop,
} from "lucide-react"

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState<"All" | "Beginner" | "Advanced">("All")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filteredCourses =
    selectedLevel === "All"
      ? COURSES
      : COURSES.filter((c) => c.level === selectedLevel)

  const courseTechStacks: Record<string, string[]> = {
    "cybersecurity-starter-program": ["Linux", "Wireshark", "Nmap", "Bash", "Python", "AI Prompting"],
    "advanced-cybersecurity-course": [
      "Burp Suite",
      "Metasploit",
      "Ghidra",
      "Wireshark",
      "Docker",
      "AWS Security",
      "Python",
    ],
  }

  const comparisonFeatures = [
    { name: "Price", starter: "₹999 (One-time)", advanced: "₹2,999 (One-time)" },
    { name: "Duration", starter: "7 Days Intensive", advanced: "Comprehensive Career Track" },
    { name: "Prerequisites", starter: "Zero experience required", advanced: "Basic computing & networking" },
    { name: "Delivery Format", starter: "Self-paced + Guided labs", advanced: "Practical project capstones + Live" },
    { name: "Language Support", starter: "English & Tamil", advanced: "English & Tamil" },
    { name: "AI Security Module", starter: "Prompting & Foundations", advanced: "OWASP 2026 AI Threat Modeling" },
    { name: "Capstone Project", starter: "Mini Hands-on Project", advanced: "Enterprise End-to-End Capstone" },
    { name: "Certificate", starter: "Verified Foundation Certificate", advanced: "Professional Security Practitioner" },
    { name: "Community Access", starter: "DRAGOZ Community", advanced: "DRAGOZ VIP & Direct Mentorship" },
  ]

  const faqs = [
    {
      q: "Do I need prior coding or cybersecurity experience to join?",
      a: "No prior experience is necessary for the Cybersecurity Starter Program (₹999). It starts from ground zero with computer fundamentals, operating systems, and beginner networking. For the Advanced Course (₹2,999), foundational computer familiarity is helpful, but our bilingual explanations make complex concepts easy to absorb.",
    },
    {
      q: "In what languages are the lectures and mentorship delivered?",
      a: "All course explanations, video materials, and Discord interactive sessions are delivered in both English and Tamil. This enables students to understand difficult technical principles in their native language while mastering global industry standards.",
    },
    {
      q: "Are the labs browser-based or do I need high-end hardware?",
      a: "Our practical exercises and OWASP 2026 AI security simulations are designed to run smoothly on standard laptops. We utilize browser-accessible virtual environments and free open-source tools without requiring expensive computer hardware.",
    },
    {
      q: "How do I receive my Certificate of Completion?",
      a: "Upon completing the modules, assignments, and capstone evaluation, SECUREWORLDZ issues a verifiable digital Certificate of Completion with a unique credential ID that you can directly showcase on LinkedIn and your resume.",
    },
    {
      q: "What is the DRAGOZ Community and how does it help me?",
      a: "DRAGOZ is our 300+ member tight-knit cybersecurity collective of students, interns, and analysts. Members participate in weekly CTFs, resume workshops, peer code reviews, and off-campus meetups to help you land cybersecurity internships and roles.",
    },
  ]

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* Top Cyber Green Scroll Progress Bar */}
      <ScrollProgress />

      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Full-width container */}
        <div className="w-full relative flex flex-col justify-start items-center min-h-screen">
          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10 w-full">
            {/* Global Header Navigation */}
            <Header />

            {/* Header Banner */}
            <div className="pt-10 sm:pt-16 pb-12 sm:pb-16 flex flex-col justify-start items-center px-4 w-full border-b border-[rgba(55,50,47,0.12)] [background-image:repeating-linear-gradient(-45deg,rgba(55,50,47,0.035)_0,rgba(55,50,47,0.035)_1px,transparent_0,transparent_14px)]">
              <ScrollReveal className="w-full max-w-[760px] flex flex-col justify-center items-center gap-4 text-center">
                <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#37322F]" />
                  <span className="text-[#37322F] text-xs font-medium font-sans">
                    Premier Cybersecurity Training Tracks
                  </span>
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-5xl md:text-6xl font-normal font-serif tracking-tight leading-[1.08]">
                  Architected for Practical Mastery
                </h1>
                <p className="text-[#605A57] text-sm sm:text-base leading-relaxed font-sans max-w-[580px]">
                  Practical cybersecurity training, offensive tools, zero-day labs, and practitioner mentorship designed to take you from foundational understanding to enterprise defense.
                </p>

                {/* 4 Trust Highlights Strip */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs font-sans text-[#37322F]">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[rgba(55,50,47,0.1)] shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#39F763] shadow-[0_0_6px_#39F763] animate-pulse" />
                    <span className="font-semibold">5,000+</span> Students Trained
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[rgba(55,50,47,0.1)] shadow-2xs">
                    <Laptop className="w-3.5 h-3.5 text-[#37322F]" />
                    <span>100% Practical Labs</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[rgba(55,50,47,0.1)] shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-[#37322F]" />
                    <span>Verified Certificates</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[rgba(55,50,47,0.1)] shadow-2xs">
                    <Users className="w-3.5 h-3.5 text-[#37322F]" />
                    <span>English & Tamil</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Filter / Toggle Pills */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-6 flex justify-center items-center">
              <div className="p-1.5 bg-white rounded-full flex items-center gap-1.5 border border-[rgba(55,50,47,0.1)] shadow-xs">
                {(["All", "Beginner", "Advanced"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-5 py-2 rounded-full text-xs font-medium font-sans transition-all duration-200 border ${
                      selectedLevel === level
                        ? "bg-[#181716] text-[#39F763] shadow-xs border-[#39F763]/40"
                        : "text-[#605A57] border-transparent hover:text-[#181716] hover:bg-white hover:border-[#39F763]/30"
                    }`}
                  >
                    {level === "All" ? "All Programs" : `${level} Track`}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Cards Section with Distinct Cards & Neat Spacing */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {filteredCourses.map((course, index) => {
                  const isFeatured = course.featured
                  const techStack = courseTechStacks[course.id] || []

                  return (
                    <ScrollReveal
                      key={course.id}
                      delay={index * 120}
                      direction="up"
                      className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 group ${
                        isFeatured
                          ? "bg-[#1C1A18] text-white border border-[#39F763]/30 shadow-[0_16px_40px_-10px_rgba(57,247,99,0.12)] hover:border-[#39F763]/60"
                          : "bg-white text-[#37322F] border border-[rgba(55,50,47,0.1)] hover:border-[#39F763]/40"
                      }`}
                    >
                      <div className="flex flex-col gap-6">
                        {/* Top Bar with Badges */}
                        <div className="flex justify-between items-center">
                          <span
                            className={`text-xs uppercase font-semibold px-3 py-1 rounded-full font-sans tracking-wide transition-all ${
                              isFeatured
                                ? "bg-[#39F763]/15 text-[#39F763] border border-[#39F763]/30"
                                : "bg-[rgba(55,50,47,0.06)] text-[#37322F] group-hover:bg-[#181716] group-hover:text-[#39F763]"
                            }`}
                          >
                            {course.badge}
                          </span>

                          <div className="flex items-center gap-1.5 text-xs font-sans font-medium">
                            <Clock className="w-3.5 h-3.5 opacity-70 group-hover:text-[#39F763] transition-colors" />
                            <span>{course.duration}</span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h2
                            className={`text-2xl sm:text-3xl font-serif mb-2 transition-colors ${
                              isFeatured ? "text-white" : "text-[#37322F] group-hover:text-black"
                            }`}
                          >
                            {course.title}
                          </h2>
                          <p
                            className={`text-xs sm:text-sm font-sans leading-relaxed ${
                              isFeatured ? "text-white/80" : "text-[#605A57]"
                            }`}
                          >
                            {course.description}
                          </p>
                        </div>

                        {/* Tech Stack Strip */}
                        <div className="flex flex-col gap-2 pt-1">
                          <span
                            className={`text-[11px] font-semibold uppercase tracking-wider font-sans ${
                              isFeatured ? "text-[#39F763]/90" : "text-[#828387]"
                            }`}
                          >
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

                        {/* Key Highlight Pills */}
                        <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                          <div
                            className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                              isFeatured ? "bg-white/5 border-white/10" : "bg-neutral-50 border-[rgba(55,50,47,0.08)]"
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5 shrink-0 group-hover:text-[#39F763] transition-colors" />
                            <span>{course.format}</span>
                          </div>
                          <div
                            className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                              isFeatured ? "bg-white/5 border-white/10" : "bg-neutral-50 border-[rgba(55,50,47,0.08)]"
                            }`}
                          >
                            <Award className="w-3.5 h-3.5 shrink-0 group-hover:text-[#39F763] transition-colors" />
                            <span>Verified Certificate</span>
                          </div>
                          <div
                            className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                              isFeatured ? "bg-white/5 border-white/10" : "bg-neutral-50 border-[rgba(55,50,47,0.08)]"
                            }`}
                          >
                            <Users className="w-3.5 h-3.5 shrink-0 group-hover:text-[#39F763] transition-colors" />
                            <span>DRAGOZ Community</span>
                          </div>
                          <div
                            className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                              isFeatured ? "bg-white/5 border-white/10" : "bg-neutral-50 border-[rgba(55,50,47,0.08)]"
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5 shrink-0 group-hover:text-[#39F763] transition-colors" />
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
                                <Check
                                  className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                    isFeatured ? "text-[#39F763]" : "text-[#37322F]"
                                  }`}
                                />
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
                                <span
                                  className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-all ${
                                    isFeatured
                                      ? "bg-[#39F763] shadow-[0_0_4px_#39F763]"
                                      : "bg-[#37322F] group-hover:bg-[#39F763] group-hover:shadow-[0_0_4px_#39F763]"
                                  }`}
                                />
                                <span className={isFeatured ? "text-white/80" : "text-[#605A57]"}>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Enroll CTA Button */}
                      <div className="pt-8">
                        <a
                          href={`https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(
                            course.title
                          )}%20(${course.price}).`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-3.5 rounded-full flex justify-center items-center gap-2 text-xs sm:text-sm font-sans transition-all shadow-xs group/btn ${
                            isFeatured
                              ? "bg-[#39F763] hover:bg-[#2ee656] text-black font-semibold shadow-[0_4px_16px_rgba(57,247,99,0.3)]"
                              : "bg-[#181716] text-white hover:bg-[#39F763] hover:text-black hover:shadow-[0_4px_16px_rgba(57,247,99,0.25)] font-semibold"
                          }`}
                        >
                          <span>Enroll Now ({course.price})</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>

            {/* Program Comparison Table (Starter vs Advanced) */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14">
              <ScrollReveal direction="up" distance={20} className="w-full bg-white rounded-3xl border border-[rgba(55,50,47,0.1)] p-6 sm:p-10 shadow-xs hover:border-[#39F763]/40 hover:shadow-md transition-all duration-300 group">
                <div className="text-center max-w-[620px] mx-auto mb-8 sm:mb-10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#828387] group-hover:text-[#39F763] transition-colors font-sans">
                    Track Comparison
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1A18] font-normal mt-1">
                    Starter vs Advanced Breakdown
                  </h3>
                  <p className="text-xs sm:text-sm text-[#605A57] font-sans mt-2">
                    Review feature differences to choose the optimal training track for your current career stage.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm font-sans">
                    <thead>
                      <tr className="border-b border-[rgba(55,50,47,0.1)] text-[#1C1A18]">
                        <th className="py-3.5 px-4 font-semibold">Curriculum Feature</th>
                        <th className="py-3.5 px-4 font-semibold text-[#37322F]">Starter Program (₹999)</th>
                        <th className="py-3.5 px-4 font-semibold text-[#16a34a]">Advanced Course (₹2,999)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[rgba(55,50,47,0.06)]">
                      {comparisonFeatures.map((row, i) => (
                        <tr key={i} className="hover:bg-[#39F763]/5 transition-colors">
                          <td className="py-3.5 px-4 font-medium text-[#49423D]">{row.name}</td>
                          <td className="py-3.5 px-4 text-[#605A57]">{row.starter}</td>
                          <td className="py-3.5 px-4 font-medium text-[#1C1A18]">{row.advanced}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            </div>

            {/* Verified Certification & Career Assurance */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-14">
              <ScrollReveal direction="up" distance={20} className="w-full rounded-3xl bg-gradient-to-br from-[#1C1A18] to-[#141416] text-white p-8 sm:p-12 border border-white/[0.08] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#39F763]/40 hover:shadow-[0_16px_40px_-10px_rgba(57,247,99,0.2)] transition-all duration-300 group">
                <div className="flex flex-col gap-3 max-w-[620px]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39F763]/15 border border-[#39F763]/30 text-[#39F763] text-xs font-sans font-medium w-fit">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Industry Recognized Credential</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal">
                    Verified Digital Certificate of Completion
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    Each graduate undergoes capstone evaluation and receives a unique credential verification link. Recognized across 100+ partnered academic institutions and tech employers.
                  </p>
                </div>
                <a
                  href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20have%20questions%20about%20the%20certificate%20and%20curriculum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-white hover:bg-[#39F763] hover:text-black hover:shadow-[0_4px_16px_rgba(57,247,99,0.35)] text-[#1C1A18] font-semibold text-xs sm:text-sm rounded-full shadow-md transition-all shrink-0 font-sans"
                >
                  Speak with an Instructor
                </a>
              </ScrollReveal>
            </div>

            {/* Curriculum FAQs Accordion */}
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pb-20">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[rgba(55,50,47,0.1)] text-xs font-sans font-medium text-[#37322F] mb-3 shadow-2xs">
                  <HelpCircle className="w-3.5 h-3.5 text-[#37322F]" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1A18] font-normal">
                  Everything You Need to Know
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] overflow-hidden shadow-2xs hover:border-[#39F763]/40 transition-all duration-300 group"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 hover:bg-[#39F763]/5 transition-colors"
                      >
                        <span className="text-sm sm:text-base font-semibold text-[#1C1A18] group-hover:text-black font-sans transition-colors">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#828387] shrink-0 transition-all duration-200 ${
                            isOpen ? "rotate-180 text-[#39F763]" : "group-hover:text-[#39F763]"
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#605A57] font-sans leading-relaxed border-t border-[rgba(55,50,47,0.06)] pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Global CTA Section */}
            <CTASection />

            {/* Global Footer Section */}
            <FooterSection />
          </div>
        </div>
      </div>

      {/* Floating Career Guidance Dialog Widget */}
      <CareerGuidanceDialog />
    </div>
  )
}

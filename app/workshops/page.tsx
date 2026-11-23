"use client"

import { useState } from "react"
import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import CTASection from "@/components/cta-section"
import ScrollProgress from "@/components/scroll-progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useContent } from "@/hooks/use-content"
import { Calendar, Clock, MapPin, Users, CheckCircle2, Send, Sparkles, ArrowRight } from "lucide-react"

export default function WorkshopsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "Student / Beginner",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const workshops = useContent("workshops")
  const upcomingWorkshop = workshops.find((w) => w.status === "Upcoming")
  const pastEvents = workshops.filter((w) => w.status === "Completed")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Full-width container */}
        <div className="w-full relative flex flex-col justify-start items-center min-h-screen">
          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10 w-full">
            <Header />

            {/* Header Banner */}
            <div className="pt-10 sm:pt-14 pb-8 sm:pb-12 flex flex-col justify-start items-center px-4 w-full border-b border-[rgba(55,50,47,0.12)]">
              <ScrollReveal className="w-full max-w-[700px] flex flex-col justify-center items-center gap-4 text-center">
                <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] rounded-[90px] flex items-center gap-2 border border-[rgba(2,6,23,0.08)]">
                  <Sparkles className="w-3.5 h-3.5 text-[#37322F]" />
                  <span className="text-[#37322F] text-xs font-medium font-sans">
                    Live Practical Sessions
                  </span>
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-6xl font-normal font-serif tracking-tight leading-tight">
                  Cybersecurity Workshops
                </h1>
                <p className="text-[#605A57] text-sm sm:text-base leading-relaxed font-sans max-w-[540px]">
                  Intensive, interactive masterclasses dedicated to prompt security, offensive automation, real-world VAPT, and defensive strategies.
                </p>
              </ScrollReveal>
            </div>

            {/* Upcoming Workshop Spotlight (October 30) */}
            {upcomingWorkshop && (
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-white/70 py-12 px-4 sm:px-8">
                <div className="content-container flex flex-col lg:flex-row gap-10 items-start">
                  {/* Left Column: Workshop Details */}
                  <ScrollReveal direction="left" distance={24} delay={100} className="flex-1 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-[#181716] text-[#39F763] text-xs font-semibold rounded-full font-sans border border-[#39F763]/30">
                        Upcoming Workshop
                      </span>
                      <span className="px-3 py-1 bg-[rgba(55,50,47,0.06)] text-[#37322F] text-xs font-medium rounded-full font-sans">
                        Free Community Session
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#37322F] leading-tight">
                      {upcomingWorkshop.title}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#49423D] font-sans p-4 bg-[#F7F5F3] rounded-xl border border-[rgba(55,50,47,0.1)] hover:border-[#39F763]/40 transition-colors">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#37322F]" />
                        <span>Date: <strong>{upcomingWorkshop.date}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#37322F]" />
                        <span>Time: <strong>{upcomingWorkshop.time}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#37322F]" />
                        <span>Mode: <strong>{upcomingWorkshop.mode}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#37322F]" />
                        <span>Facilitator: <strong>{upcomingWorkshop.facilitator}</strong></span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#605A57] font-sans leading-relaxed">
                      {upcomingWorkshop.description}
                    </p>

                    {/* Topics covered */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#37322F] font-sans">
                        What you will learn:
                      </h4>
                      <ul className="flex flex-col gap-2 text-xs text-[#49423D] font-sans">
                        {upcomingWorkshop.topics.map((t, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#37322F] mt-0.5 shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>

                  {/* Right Column: Registration Block */}
                  <ScrollReveal direction="right" distance={24} delay={150} className="w-full lg:w-[380px] p-6 sm:p-8 bg-white border border-[rgba(55,50,47,0.15)] rounded-2xl shadow-sm hover:border-[#39F763]/40 transition-all flex flex-col gap-4 group">
                    <h3 className="text-lg font-serif text-[#37322F] group-hover:text-black transition-colors">
                      Register for Free Access
                    </h3>
                    <p className="text-xs text-[#605A57] font-sans leading-relaxed">
                      Seats are allocated on a first-come basis. Fill the form below or RSVP directly via WhatsApp.
                    </p>

                    {isSubmitted ? (
                      <div className="p-4 bg-[rgba(55,50,47,0.05)] rounded-xl border border-[rgba(55,50,47,0.1)] text-center flex flex-col gap-2 my-4">
                        <CheckCircle2 className="w-8 h-8 text-[#39F763] mx-auto" />
                        <span className="text-sm font-semibold text-[#37322F] font-sans">
                          Registration Confirmed!
                        </span>
                        <p className="text-xs text-[#605A57] font-sans">
                          Session details and Discord stream links will be sent to your WhatsApp and email.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-sans">
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-medium text-[#49423D]">
                            Your Full Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="px-3 py-2 bg-[#F7F5F3] border border-[rgba(55,50,47,0.12)] rounded-lg text-xs focus:outline-none focus:border-[#39F763]/60 focus:ring-1 focus:ring-[#39F763]/30 transition-all"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-medium text-[#49423D]">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="px-3 py-2 bg-[#F7F5F3] border border-[rgba(55,50,47,0.12)] rounded-lg text-xs focus:outline-none focus:border-[#39F763]/60 focus:ring-1 focus:ring-[#39F763]/30 transition-all"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-medium text-[#49423D]">
                            WhatsApp Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="px-3 py-2 bg-[#F7F5F3] border border-[rgba(55,50,47,0.12)] rounded-lg text-xs focus:outline-none focus:border-[#39F763]/60 focus:ring-1 focus:ring-[#39F763]/30 transition-all"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-2 py-3 bg-[#181716] hover:bg-[#39F763] hover:text-black text-white text-xs font-semibold rounded-full shadow-xs flex justify-center items-center gap-2 transition-all font-sans group/btn"
                        >
                          <span>Reserve My Seat</span>
                          <Send className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:text-black transition-all" />
                        </button>
                      </form>
                    )}

                    <div className="pt-2 border-t border-[rgba(55,50,47,0.08)] text-center">
                      <a
                        href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20want%20to%20register%20for%20the%20Vibe%20Hacking%20workshop%20on%20October%2030."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#37322F] hover:text-black font-medium font-sans flex items-center justify-center gap-1 group/wa transition-colors"
                      >
                        <span>Or RSVP via WhatsApp</span>
                        <ArrowRight className="w-3 h-3 group-hover/wa:translate-x-1 group-hover/wa:text-[#39F763] transition-all" />
                      </a>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )}

            {/* Past Events / Community Meetups */}
            <div className="w-full py-12 px-4 sm:px-8 border-b border-[rgba(55,50,47,0.12)]">
              <div className="content-container flex flex-col gap-6">
                <ScrollReveal>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#37322F]">
                    Community Gatherings & Past Events
                  </h3>
                  <p className="text-xs sm:text-sm text-[#605A57] font-sans mt-1">
                    Over 100+ national-level events sponsored and partnered, reaching 5,000+ students.
                  </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastEvents.map((evt, index) => (
                    <ScrollReveal
                      key={evt.id}
                      delay={index * 120}
                      direction="up"
                      distance={20}
                      className="p-6 bg-white border border-[rgba(55,50,47,0.12)] rounded-xl flex flex-col justify-between gap-4 h-full shadow-xs hover:border-[#39F763]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#828387] font-sans">
                            {evt.date}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(55,50,47,0.06)] text-[#37322F] font-sans">
                            Completed
                          </span>
                        </div>
                        <h4 className="text-lg font-serif text-[#37322F] group-hover:text-black transition-colors">
                          {evt.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-[#605A57] font-sans">
                          <MapPin className="w-3.5 h-3.5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
                          <span>{evt.mode}</span>
                        </div>
                        <p className="text-xs text-[#605A57] font-sans leading-relaxed pt-1">
                          {evt.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[rgba(55,50,47,0.06)] text-xs text-[#828387] font-sans">
                        Facilitated by {evt.facilitator}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Closing CTA */}
            <CTASection />

            {/* Footer */}
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { MessageSquare, X, Send, ShieldCheck, CheckCircle2 } from "lucide-react"

export default function CareerGuidanceDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [interest, setInterest] = useState("Cybersecurity Starter Program (₹999)")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const text = encodeURIComponent(
      `Hi SECUREWORLDZ Team,\nMy name is ${name}.\nI would like free guidance regarding ${interest}.\nPhone: ${phone}`
    )
    window.open(`https://wa.me/917845088387?text=${text}`, "_blank")
    setTimeout(() => {
      setSubmitted(false)
      setIsOpen(false)
    }, 2000)
  }

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2.5 bg-[#181716] hover:bg-black text-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.22)] border border-[rgba(255,255,255,0.15)] hover:border-[#39F763]/50 hover:shadow-[0_4px_20px_rgba(57,247,99,0.25)] flex items-center gap-2 text-xs font-medium font-sans transition-all hover:scale-105 active:scale-95"
          aria-label="Get Free Career Guidance"
        >
          <div className="w-2 h-2 rounded-full bg-[#39F763] shadow-[0_0_8px_#39F763] animate-pulse" />
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get Free Guidance</span>
        </button>
      </div>

      {/* Guidance Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-[100] animate-fadeIn">
          <div
            className="w-full max-w-[420px] bg-[#F7F5F3] border border-[rgba(55,50,47,0.15)] shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-2xl p-6 sm:p-7 relative flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[rgba(55,50,47,0.08)] text-[#605A57] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex flex-col gap-1.5 pr-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#37322F]" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#828387] font-sans">
                  Free Career Guidance
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#37322F]">
                Talk to a Cybersecurity Counselor
              </h3>
              <p className="text-xs text-[#605A57] font-sans leading-relaxed">
                One quick chat with our practitioners. Free roadmap advice, lab guidance, and course selection.
              </p>
            </div>

            {submitted ? (
              <div className="py-6 flex flex-col items-center justify-center gap-2 text-center bg-white rounded-xl border border-[rgba(55,50,47,0.1)]">
                <CheckCircle2 className="w-8 h-8 text-[#37322F]" />
                <span className="text-sm font-semibold text-[#37322F] font-sans">
                  Connecting via WhatsApp...
                </span>
                <span className="text-xs text-[#605A57] font-sans">
                  Opening official chat with +91 7845088387
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-sans">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-[#49423D]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Abishek"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-3 py-2 bg-white border border-[rgba(55,50,47,0.15)] rounded-lg text-xs focus:outline-none focus:border-[#37322F]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-[#49423D]">
                    WhatsApp Number
                  </label>
                  <div className="flex items-center bg-white border border-[rgba(55,50,47,0.15)] rounded-lg overflow-hidden">
                    <span className="px-3 py-2 text-xs text-[#828387] bg-neutral-50 border-r border-[rgba(55,50,47,0.1)] font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="78450 88387"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-3 py-2 w-full text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-[#49423D]">
                    Program or Area of Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="px-3 py-2 bg-white border border-[rgba(55,50,47,0.15)] rounded-lg text-xs focus:outline-none focus:border-[#37322F]"
                  >
                    <option value="Cybersecurity Starter Program (₹999)">
                      Cybersecurity Starter Program (₹999)
                    </option>
                    <option value="Advanced Cybersecurity Course (₹2,999)">
                      Advanced Cybersecurity Course (₹2,999)
                    </option>
                    <option value="VAPT & Pentesting Services">
                      VAPT & Pentesting Services
                    </option>
                    <option value="Vibe Hacking Workshop (Oct 30)">
                      Vibe Hacking Workshop (Oct 30)
                    </option>
                    <option value="DRAGOZ Community Access">
                      DRAGOZ Community Access
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-[#181716] hover:bg-[#39F763] hover:text-black text-white text-xs font-semibold rounded-full shadow-xs flex justify-center items-center gap-2 transition-all font-sans"
                >
                  <span>Get Free Guidance</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-[#828387] text-center font-sans">
                  Takes less than a minute. Direct practitioner chat. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import { Star, MessageSquare } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Testimonial {
  name: string
  role?: string
  source: string
  content: string
  avatar: string
  highlight?: boolean
}

const COLUMN_1: Testimonial[] = [
  {
    name: "Jerlin",
    source: "Rated by @Whatsapp",
    content:
      "I want to express my deep gratitude to SECUREWORLDZ and my mentor Cyber Jai for their life-changing guidance. Thanks to their support, I overcame challenges and developed offensive security skills, which led me to my current position in cybersecurity.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Mohammed Akmal",
    source: "Rated by @Google",
    content:
      "They are awesome because they provide free practical tutorials and Vibe Hacking workshops on YouTube with an interactive, hands-on way of teaching.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Nakash Shafiey",
    source: "Rated by @Google",
    content:
      "Everyone here talks about standard coding, but I learnt practical cybersecurity engineering here. Motivation, inspiration, and hands-on lab triage. Thanks to the whole team who are making students' dreams into reality. Always by your side 🙌",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Praveen M",
    source: "Rated by @Google",
    content:
      "Detailed explanation helps to understand the concept clearly. The real hands-on labs and packet inspection sessions were exceptional ❤️",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  },
]

const COLUMN_2: Testimonial[] = [
  {
    name: "Velu Mani",
    source: "Rated by @Google",
    content:
      "Hi Team, Your Cybersecurity Starter course is very helpful to learn ethical hacking as a beginner. I was struggling with Linux command line tools and networking protocols. SECUREWORLDZ practical series made everything clear and simple to understand. Now I can practice Burp Suite and BugAtlas with confidence. Thanks to the SECUREWORLDZ team!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Jai Pravin",
    source: "Rated by @Trustpilot",
    content:
      "First of all great appreciation from my side to take an initiative to teach cybersecurity in our native language (Tamil & English) for great understanding. The main thing of this course was it has vast number of topics included which is truly needed for upskilling. They also gave useful tips and tricks for Resume Building and how to crack the Technical Interview. They trained us with hands-on projects which is much better way to practice. Highly recommend to everyone who is new to the cybersecurity world! 👏",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80",
  },
]

const COLUMN_3: Testimonial[] = [
  {
    name: "Syed Imran",
    source: "Rated by @Google",
    content:
      "Thrilled to share my SECUREWORLDZ experience! From zero security knowledge to analyzing live web vulnerabilities and understanding defensive architectures. With 10 practical modules, hands-on capstone labs, and DRAGOZ community support, SECUREWORLDZ is a must for career growth seekers.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Mohana Priya",
    source: "Rated by @Google",
    content:
      "Being a peer mentor at DRAGOZ has been such a rewarding journey. The support, guidance, and collaboration here are truly top-notch. The team's commitment to high standards and welcoming environment makes it a great place. It feels like a genuine community dedicated to learning, growing, and helping each other succeed.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Arjun",
    source: "Rated by @Google",
    content:
      "I have been participating in the practical cohorts and DRAGOZ Discord discussions. We have a great atmosphere and friendly mentors who review real exploit scenarios. Looking forward to continuing my security research with SECUREWORLDZ.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Karthik Raja",
    source: "Rated by @LinkedIn",
    content:
      "The offline meetup conducted at Prathyusha Engineering College was 10x value worth! I learned so many takeaways from industry experts and live vulnerability demos.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="w-full py-20 md:py-28 relative overflow-hidden bg-[#F7F5F3] border-b border-[rgba(55,50,47,0.12)]">
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.05),transparent_60%)] pointer-events-none" />

      {/* Header Section */}
      <div className="content-container mb-12 sm:mb-16 flex flex-col items-center text-center relative z-10">
        <ScrollReveal direction="down" distance={16} delay={50} className="mb-3">
          <span className="text-[#D97706] text-xs font-semibold uppercase tracking-[0.2em] font-sans">
            STUDENT REVIEW
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={20} delay={100}>
          <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-tight">
            Hear from students like you
          </h2>
          <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans max-w-[620px] mx-auto mt-4">
            Discover how students, engineers, and career switchers built practical cybersecurity skills, cracked interviews, and grew with SECUREWORLDZ.
          </p>
        </ScrollReveal>
      </div>

      {/* Masonry Columns Container */}
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {COLUMN_1.map((item, idx) => (
              <TestimonialCard key={idx} item={item} delay={idx * 80} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {COLUMN_2.map((item, idx) => (
              <TestimonialCard key={idx} item={item} delay={idx * 100 + 40} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            {COLUMN_3.map((item, idx) => (
              <TestimonialCard key={idx} item={item} delay={idx * 90 + 80} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust metric badge below reviews */}
      <div className="content-container mt-12 sm:mt-16 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[rgba(55,50,47,0.1)] shadow-xs text-xs sm:text-sm font-sans text-[#37322F]">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
            ))}
          </div>
          <span className="font-semibold">4.9 / 5 Average Rating</span>
          <span className="text-[#828387]">•</span>
          <span className="text-[#605A57]">Across 5,000+ Community Learners</span>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ item, delay }: { item: Testimonial; delay: number }) {
  return (
    <ScrollReveal
      direction="up"
      distance={20}
      delay={delay}
      className="w-full bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(55,50,47,0.1)] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-5 group"
    >
      {/* Review content */}
      <p className="text-[#37322F] text-sm leading-relaxed font-sans font-normal">
        {item.content}
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 pt-2 border-t border-[rgba(55,50,47,0.06)]">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover border border-[rgba(55,50,47,0.12)] shrink-0 shadow-xs"
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#37322F] font-sans group-hover:text-black transition-colors">
            {item.name}
          </span>
          <span className="text-xs text-[#828387] font-sans">
            {item.source}
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}

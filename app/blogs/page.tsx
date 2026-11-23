"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import CTASection from "@/components/cta-section"
import ScrollProgress from "@/components/scroll-progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useContent } from "@/hooks/use-content"
import { BookOpen, User, ArrowRight, Tag } from "lucide-react"

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const blogPosts = useContent("blogs")
  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category).filter(Boolean)))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags ?? []).some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
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
                  <BookOpen className="w-3.5 h-3.5 text-[#37322F]" />
                  <span className="text-[#37322F] text-xs font-medium font-sans">
                    Cybersecurity & AI Publication
                  </span>
                </div>

                <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-6xl font-normal font-serif tracking-tight leading-tight">
                  Knowledge & Field Notes
                </h1>
                <p className="text-[#605A57] text-sm sm:text-base leading-relaxed font-sans max-w-[540px]">
                  Technical breakdowns, career guides, AI safety research, and hands-on perspectives from the SECUREWORLDZ engineering team.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-[420px] mt-2">
                  <input
                    type="text"
                    placeholder="Search articles, topics, keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[rgba(55,50,47,0.15)] rounded-full text-xs sm:text-sm font-sans placeholder:text-[#828387] focus:outline-none focus:border-[#39F763]/60 focus:ring-2 focus:ring-[#39F763]/20 shadow-xs transition-all"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Category Filter Pills */}
            <div className="w-full px-4 sm:px-8 py-5 border-b border-[rgba(55,50,47,0.12)] bg-white/40 flex justify-center items-center overflow-x-auto">
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-sans whitespace-nowrap transition-all border ${
                      selectedCategory === category
                        ? "bg-[#181716] text-[#39F763] border-[#39F763]/40 shadow-xs"
                        : "text-[#605A57] border-transparent hover:text-[#181716] hover:bg-white hover:border-[#39F763]/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid (9 Articles) */}
            <div className="content-container py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal
                    key={post.id}
                    delay={index * 60}
                    direction="up"
                    distance={20}
                    className={`p-6 sm:p-8 flex flex-col justify-between items-start gap-6 border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] hover:bg-white transition-all duration-300 group ${
                      index % 3 !== 2 ? "lg:border-r border-[rgba(55,50,47,0.12)]" : ""
                    } ${index % 2 === 0 ? "md:border-r lg:border-r-0 border-[rgba(55,50,47,0.12)]" : ""}`}
                  >
                    <div className="flex flex-col gap-4 w-full">
                      {/* Meta badge & Read Time */}
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[rgba(55,50,47,0.06)] text-[#37322F] group-hover:bg-[#181716] group-hover:text-[#39F763] transition-all font-sans">
                          {post.category}
                        </span>
                        <span className="text-[11px] text-[#828387] font-sans">
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title & Excerpt */}
                      <div className="flex flex-col gap-2">
                        <Link href={`/blogs/${post.slug}`}>
                          <h2 className="text-[#37322F] text-lg sm:text-xl font-semibold font-sans hover:underline leading-snug line-clamp-2 group-hover:text-black transition-colors">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-[#605A57] text-xs sm:text-[13px] leading-relaxed font-sans line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] text-[#828387] bg-white border border-[rgba(55,50,47,0.08)] group-hover:border-[#39F763]/40 px-2 py-0.5 rounded-full font-sans flex items-center gap-1 transition-colors"
                          >
                            <Tag className="w-2.5 h-2.5 group-hover:text-[#39F763] transition-colors" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Author & Read More Footer */}
                    <div className="pt-4 border-t border-[rgba(55,50,47,0.06)] w-full flex justify-between items-center">
                      <div className="flex items-center gap-1.5 text-xs text-[#605A57] font-sans">
                        <User className="w-3.5 h-3.5 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
                        <span>{post.author}</span>
                      </div>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#37322F] group-hover:text-black transition-all font-sans"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:text-[#39F763] transition-all" />
                      </Link>
                    </div>
                  </ScrollReveal>
                ))}

                {filteredPosts.length === 0 && (
                  <div className="col-span-full p-12 text-center text-[#605A57] font-sans">
                    No articles found matching your criteria.
                  </div>
                )}
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

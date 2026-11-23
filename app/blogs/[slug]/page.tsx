import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import CTASection from "@/components/cta-section"
import ScrollProgress from "@/components/scroll-progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BLOG_POSTS } from "@/lib/data/blogs"
import { readCollection, isFirebaseConfigured } from "@/lib/content/firebase-server"
import { MarkdownBlogContent } from "@/components/markdown-blog-content"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  BrainCircuit,
  Terminal,
  Layers,
} from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }> | {
    slug: string
  }
}

// Content lives in Firestore, so render per request rather than at build time.
export const dynamic = "force-dynamic"

async function getPosts() {
  if (!isFirebaseConfigured()) return BLOG_POSTS
  return (await readCollection<(typeof BLOG_POSTS)[number]>("blogs")) ?? BLOG_POSTS
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const posts = await getPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) {
    return {
      title: "Article Not Found — SECUREWORLDZ",
    }
  }

  return {
    title: `${post.title} — SECUREWORLDZ`,
    description: post.metaDescription,
    keywords: post.tags ?? [],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const posts = await getPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Markdown authored in the admin app takes precedence over paragraphs.
  const markdownContent = post.markdown || null

  // Related posts from other categories
  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full relative flex flex-col justify-start items-center min-h-screen">
          <div className="self-stretch pt-0 overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10 w-full">
            <Header />

            {/* Back to Blogs Navigation */}
            <div className="w-full max-w-[940px] px-4 sm:px-8 pt-8 pb-4 flex justify-between items-center border-b border-[rgba(55,50,47,0.08)]">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#605A57] hover:text-black transition-colors font-sans group/back"
              >
                <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 group-hover/back:text-[#39F763] transition-all" />
                <span>Back to all articles</span>
              </Link>

              <div className="inline-flex items-center gap-2 text-[11px] text-[#828387] font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39F763] animate-pulse" />
                <span>SECUREWORLDZ Publications</span>
              </div>
            </div>

            {/* Article Header */}
            <header className="w-full max-w-[940px] px-4 sm:px-8 pt-10 pb-8 flex flex-col gap-6">
              <ScrollReveal direction="down" distance={16} delay={50}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-white border border-[rgba(55,50,47,0.12)] text-[#37322F] text-xs font-semibold rounded-full uppercase tracking-wider font-sans shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>{post.category}</span>
                  </span>
                  {markdownContent && (
                    <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium rounded-full font-sans flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-emerald-600" />
                      <span>Full R&D & Video Package</span>
                    </span>
                  )}
                  <span className="text-xs text-[#828387] font-sans flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={20} delay={100}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal font-serif text-[#1C1A18] tracking-tight leading-[1.12]">
                  {post.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={16} delay={150}>
                <p className="text-base sm:text-lg text-[#605A57] font-sans leading-relaxed border-l-2 border-[#181716] pl-4 italic">
                  {post.excerpt}
                </p>
              </ScrollReveal>

              {/* Author & Meta Row */}
              <ScrollReveal direction="none" delay={200}>
                <div className="flex flex-wrap items-center justify-between py-4 border-y border-[rgba(55,50,47,0.1)] gap-4 text-xs font-sans">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-[#37322F] font-medium">
                      <div className="w-7 h-7 rounded-full bg-white border border-[rgba(55,50,47,0.15)] flex items-center justify-center font-bold text-xs shadow-2xs">
                        CJ
                      </div>
                      <span>By {post.author}</span>
                    </div>
                    <span className="text-[#828387]">•</span>
                    <div className="flex items-center gap-1.5 text-[#828387]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Updated: {post.publishDate}</span>
                    </div>
                  </div>

                  {/* Share Options */}
                  <div className="flex items-center gap-2">
                    <span className="text-[#828387] text-[11px] font-medium uppercase tracking-wider">
                      Share:
                    </span>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - Read at SECUREWORLDZ`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-white border border-[rgba(55,50,47,0.12)] hover:bg-[#181716] hover:text-[#39F763] hover:border-[#39F763]/40 transition-all shadow-xs group/share"
                      aria-label="Share on WhatsApp"
                    >
                      <Share2 className="w-3.5 h-3.5 group-hover/share:text-[#39F763] transition-colors" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </header>

            {/* Visual Cover Banner with Terminal / Field Dispatch Styling */}
            <div className="w-full max-w-[940px] px-4 sm:px-8 mb-8">
              <ScrollReveal direction="up" distance={24} delay={250}>
                <div className="w-full h-48 sm:h-64 bg-[#141518] border border-[rgba(55,50,47,0.15)] rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between text-white relative shadow-md">
                  <div className="flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#39F763] animate-pulse" />
                      <span className="text-xs font-mono text-[#39F763]">
                        // secureworldz/insights/{post.slug}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10">
                      RESEARCH DISPATCH
                    </span>
                  </div>

                  <div className="z-10">
                    <span className="text-xs font-mono text-neutral-400 block mb-1">
                      ARTICLE_REF: #{post.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-white">
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 z-10 pt-2 border-t border-white/10">
                    <span>Curator: {post.author}</span>
                    <span>Status: VERIFIED_FIELD_GUIDE</span>
                  </div>

                  {/* Decorative ambient background grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>

            {/* Quick Stats Highlights (If this is the AI Cyber Learning Markdown Guide) */}
            {markdownContent && slug === "what-is-ai-based-cyber-learning" && (
              <div className="w-full max-w-[940px] px-4 sm:px-8 mb-10">
                <ScrollReveal direction="up" distance={16} delay={280}>
                  <div className="p-6 bg-white rounded-2xl border border-[rgba(55,50,47,0.1)] shadow-xs">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[rgba(55,50,47,0.06)]">
                      <TrendingUp className="w-4 h-4 text-[#39F763]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1A18] font-sans">
                        Key Data: ISC2 2025 Cybersecurity Workforce Study
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div className="p-3 rounded-xl bg-[#F7F5F3]">
                        <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1A18] block">
                          95%
                        </span>
                        <span className="text-[11px] text-[#605A57] font-sans">
                          Report Skills Gap
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#F7F5F3]">
                        <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1A18] block">
                          59%
                        </span>
                        <span className="text-[11px] text-[#605A57] font-sans">
                          Critical Gaps (Up from 44%)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#F7F5F3]">
                        <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1A18] block">
                          41%
                        </span>
                        <span className="text-[11px] text-[#605A57] font-sans">
                          Name AI as Critical Skill
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#F7F5F3]">
                        <span className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1A18] block">
                          73%
                        </span>
                        <span className="text-[11px] text-[#605A57] font-sans">
                          Expect Specialized Roles
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {/* Article Body */}
            <main className="w-full max-w-[940px] px-4 sm:px-8 pb-12">
              {markdownContent ? (
                /* Rich Markdown Rendered Content */
                <div className="w-full flex flex-col gap-2">
                  <MarkdownBlogContent content={markdownContent} />
                </div>
              ) : (
                /* Fallback to Default Paragraphs */
                <div className="prose prose-neutral max-w-none flex flex-col gap-5 text-[#37322F] font-sans text-sm sm:text-base leading-[1.8]">
                  {(post.content ?? []).map((paragraph, index) => (
                    <ScrollReveal key={index} direction="up" distance={14} delay={index * 40}>
                      <p className="text-[#37322F] font-normal">{paragraph}</p>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {/* Tags Section */}
              <ScrollReveal
                direction="up"
                distance={16}
                className="pt-8 pb-4 mt-12 border-t border-[rgba(55,50,47,0.12)] flex flex-wrap items-center gap-2"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-[#828387] font-sans mr-2">
                  Tags:
                </span>
                {(post.tags ?? []).map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs text-[#37322F] bg-white border border-[rgba(55,50,47,0.15)] px-3 py-1 rounded-full font-sans flex items-center gap-1.5 shadow-xs"
                  >
                    <Tag className="w-3 h-3 text-[#828387]" />
                    {tag}
                  </span>
                ))}
              </ScrollReveal>

              {/* Course & Product CTA Banner within Article */}
              <ScrollReveal
                direction="up"
                distance={20}
                className="mt-10 p-6 sm:p-8 bg-white border border-[rgba(55,50,47,0.1)] rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xs hover:border-[#39F763]/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#37322F] group-hover:text-[#39F763] transition-colors" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#37322F] font-sans">
                      Advance Your Practical Skills
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#37322F] group-hover:text-black transition-colors">
                    Ready to build real cybersecurity tools?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#605A57] font-sans max-w-[480px]">
                    Join our Starter Program (₹999) or Comprehensive Career Track (₹2,999) with real lab exercises and lifetime community mentorship.
                  </p>
                </div>

                <Link
                  href="/courses"
                  className="px-6 py-3 bg-[#181716] hover:bg-[#39F763] hover:text-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs flex items-center gap-2 shrink-0 font-sans transition-all group/btn"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </main>

            {/* Related Blogs Section */}
            <div className="w-full border-t border-[rgba(55,50,47,0.12)] bg-white/40 py-12 px-4 sm:px-8">
              <div className="max-w-[940px] mx-auto flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#37322F]">
                    Related Articles
                  </h3>
                  <Link
                    href="/blogs"
                    className="text-xs font-semibold text-[#37322F] hover:text-black font-sans flex items-center gap-1 group/all"
                  >
                    <span>View all 9 blogs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 group-hover/all:text-[#39F763] transition-all" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {relatedPosts.map((related, index) => (
                    <ScrollReveal key={related.id} delay={index * 100} direction="up" distance={18}>
                      <Link
                        href={`/blogs/${related.slug}`}
                        className="p-5 bg-white border border-[rgba(55,50,47,0.1)] rounded-2xl shadow-xs hover:border-[#39F763]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-3 group h-full"
                      >
                        <div className="flex flex-col gap-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#828387] group-hover:text-[#39F763] transition-colors font-sans">
                            {related.category}
                          </span>
                          <h4 className="text-sm font-semibold text-[#37322F] group-hover:text-black leading-snug line-clamp-2 font-sans transition-colors">
                            {related.title}
                          </h4>
                          <p className="text-xs text-[#605A57] line-clamp-2 font-sans">
                            {related.excerpt}
                          </p>
                        </div>
                        <span className="text-[11px] font-medium text-[#37322F] group-hover:text-black flex items-center gap-1 font-sans pt-2 border-t border-neutral-100 transition-colors">
                          <span>Read post</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 group-hover:text-[#39F763] transition-all" />
                        </span>
                      </Link>
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

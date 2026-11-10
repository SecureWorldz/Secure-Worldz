import Link from "next/link"

export default function FooterSection() {
  return (
    <footer id="contact" className="w-full pt-12 flex flex-col justify-start items-center">
      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-start pb-10 pt-0 gap-8">
        {/* Brand & Contact Info */}
        <div className="h-auto p-4 md:p-6 flex flex-col justify-start items-start gap-6 max-w-[380px]">
          <div className="flex flex-col gap-1.5">
            <div className="text-[#37322F] text-xl font-semibold tracking-tight font-sans">
              SECUREWORLDZ
            </div>
            <div className="text-[rgba(73,66,61,0.85)] text-sm font-medium leading-[20px] font-sans">
              Products Built by People Who Build Tech
            </div>
            <div className="text-[#605A57] text-xs font-normal leading-5 font-sans mt-1">
              Cybersecurity training institute & software development company. Practical learning, tools, labs, and security services.
            </div>
          </div>

          {/* Contact Details List */}
          <div className="flex flex-col gap-2 text-xs text-[#49423D] font-sans">
            <div className="flex items-center gap-2">
              <span className="text-[#828387]">Email:</span>
              <a href="mailto:secureworld628@gmail.com" className="hover:underline font-medium">
                secureworld628@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#828387]">WhatsApp:</span>
              <a
                href="https://wa.me/917845088387"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium"
              >
                +91 7845088387
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#828387]">Website:</span>
              <span className="font-medium">secureworldz.pro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#828387]">Languages:</span>
              <span className="font-medium">English & Tamil</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-start items-center gap-4 pt-1">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/917845088387"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full border border-[rgba(55,50,47,0.15)] flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#49423D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/secureworldz_official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-[rgba(55,50,47,0.15)] flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#49423D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@CyberJai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full border border-[rgba(55,50,47,0.15)] flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#49423D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="self-stretch p-4 md:p-6 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-end items-start gap-8 md:gap-12 flex-1">
          {/* Products & Labs */}
          <div className="flex flex-col justify-start items-start gap-3 min-w-[130px]">
            <div className="text-[rgba(73,66,61,0.60)] text-xs font-semibold uppercase tracking-wider font-sans">
              Products & Labs
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <Link href="/#products" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Exploitry</Link>
              <Link href="/#products" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">BugAtlas</Link>
              <Link href="/#products" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Versage</Link>
              <Link href="/#products" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Machinex</Link>
              <Link href="/#products" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Kernelis & Infectis</Link>
              <Link href="/#products" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">DarkX</Link>
              <Link href="/#products" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors font-medium">OWASP 2026 AI Lab</Link>
            </div>
          </div>

          {/* Training & Services */}
          <div className="flex flex-col justify-start items-start gap-3 min-w-[130px]">
            <div className="text-[rgba(73,66,61,0.60)] text-xs font-semibold uppercase tracking-wider font-sans">
              Training & Services
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <Link href="/courses" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Starter Program (₹999)</Link>
              <Link href="/courses" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Advanced Course (₹2,999)</Link>
              <Link href="/#services" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">VAPT & Pentesting</Link>
              <Link href="/#services" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">SOC Monitoring</Link>
              <Link href="/#services" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Incident Response</Link>
              <Link href="/workshops" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Upcoming Workshops</Link>
            </div>
          </div>

          {/* Resources & Community */}
          <div className="flex flex-col justify-start items-start gap-3 min-w-[130px]">
            <div className="text-[rgba(73,66,61,0.60)] text-xs font-semibold uppercase tracking-wider font-sans">
              Insights & Community
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <Link href="/blogs" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">All 9 Blogs</Link>
              <Link href="/blogs/what-is-vibe-hacking" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">What is Vibe Hacking?</Link>
              <Link href="/blogs/about-secureworldz" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">About SECUREWORLDZ</Link>
              <Link href="/#community" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">DRAGOZ Community</Link>
              <Link href="/#why-us" className="text-[#49423D] text-sm hover:text-[#2F3037] transition-colors">Why SECUREWORLDZ</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full border-t border-[rgba(55,50,47,0.1)] py-4">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#828387] gap-2">
          <div>© {new Date().getFullYear()} SECUREWORLDZ. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Products Built by People Who Build Tech</span>
          </div>
        </div>
      </div>

      {/* Signature Decorative Hatched Bottom Section */}
      <div className="self-stretch h-10 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[300px] h-16 border border-[rgba(3,7,18,0.08)]"
                style={{
                  left: `${i * 300 - 600}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

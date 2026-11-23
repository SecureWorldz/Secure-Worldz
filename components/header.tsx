"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

export interface HeaderProps {
  brandName?: string
}

export function Header({ brandName = "SECUREWORLDZ" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#products" },
    { name: "Courses", href: "/courses" },
    { name: "Workshops", href: "/workshops" },
    { name: "Blogs", href: "/blogs" },
    { name: "Community", href: "/#community" },
  ]

  return (
    <header className="w-full bg-[#F7F5F3] border-b border-[rgba(55,50,47,0.08)] relative z-40">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-18 sm:h-20 flex justify-between items-center">
        {/* 1. Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-[#1C1A18] font-sans font-bold text-base sm:text-lg lg:text-xl tracking-[0.14em] uppercase transition-colors group-hover:text-black">
            {brandName}
          </span>
        </Link>

        {/* 2. Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#605A57] hover:text-[#1C1A18] text-xs sm:text-[13px] font-medium font-sans transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. Right Action Pill Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917845088387?text=Hi%20SECUREWORLDZ%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 sm:h-11 px-5 sm:px-6 bg-[#181716] hover:bg-black hover:border-[#39F763]/40 text-white hover:text-[#39F763] text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center gap-2 font-sans transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs border border-transparent hover:shadow-[0_8px_20px_rgba(57,247,99,0.25)] group"
          >
            <span>Talk to Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#37322F] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(55,50,47,0.08)] bg-[#F7F5F3] px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#37322F] hover:bg-black/5 px-3 py-2.5 rounded-lg text-sm font-medium font-sans transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-[rgba(55,50,47,0.08)] flex flex-col gap-1 text-xs text-[#82807C] px-3">
            <span>secureworld628@gmail.com</span>
            <span>+91 7845088387</span>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

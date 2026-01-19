"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const navLinks = [
    { href: "#planos", label: "Planos" },
    { href: "#combo-builder", label: "Monte seu Combo" },
    { href: "#streaming", label: "Streaming" },
    { href: "#faq", label: "Dúvidas" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logofnet.png"
              alt="Fernando Net"
              width={160}
              height={50}
              className="h-7 md:h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#000347] hover:text-[#E42525] transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E42525] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="https://fernandonetgo.sgp.net.br/accounts/central/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-pulse-soft text-xs md:text-sm px-6 py-2 md:px-8 md:py-3 whitespace-nowrap shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Área do Cliente
          </a>
        </div>
      </div>
    </header>
  )
}

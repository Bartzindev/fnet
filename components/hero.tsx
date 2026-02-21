"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return <span ref={ref}>{count}</span>
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleScrollToPlans = () => {
    const el = document.querySelector("#planos")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#000347]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E42525]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#001366]/60 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
              </span>
              <span className="text-white/80 text-xs font-medium tracking-wide">
                100% Fibra optica
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span
                className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]"
                style={{ fontFamily: "Nohemi" }}
              >
                Internet que
              </span>
              <span
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mt-1 bg-gradient-to-r from-[#E42525] via-[#ff5252] to-[#E42525] bg-clip-text text-transparent"
                style={{ fontFamily: "Nohemi" }}
              >
                acompanha voce
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-white/70 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 mt-4 leading-relaxed transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Planos com velocidades de ate{" "}
              <span className="text-white font-bold">1000 Mega</span> e beneficios
              exclusivos inclusos em todos os planos.
            </p>

            {/* CTA buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-3 mt-7 transition-all duration-700 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={handleScrollToPlans}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#E42525]/30 hover:shadow-xl hover:shadow-[#E42525]/40 hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "Nohemi" }}
              >
                Ver planos
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=556299821212&text=Quero%20conhecer%20os%20planos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/20 transition-all duration-300 text-center"
                style={{ fontFamily: "Nohemi" }}
              >
                Fale conosco
              </a>
            </div>

            {/* Trust badges */}
            <div
              className={`flex items-center justify-center md:justify-start gap-6 mt-8 transition-all duration-700 delay-[400ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="text-center md:text-left">
                <p className="text-white text-xl md:text-2xl font-extrabold leading-none" style={{ fontFamily: "Nohemi" }}>
                  20+
                </p>
                <p className="text-white/50 text-[10px] uppercase tracking-wider font-medium mt-0.5">
                  Anos no mercado
                </p>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <div className="text-center md:text-left">
                <p className="text-white text-xl md:text-2xl font-extrabold leading-none" style={{ fontFamily: "Nohemi" }}>
                  10k+
                </p>
                <p className="text-white/50 text-[10px] uppercase tracking-wider font-medium mt-0.5">
                  Clientes ativos
                </p>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <div className="text-center md:text-left">
                <p className="text-white text-xl md:text-2xl font-extrabold leading-none" style={{ fontFamily: "Nohemi" }}>
                  99.8%
                </p>
                <p className="text-white/50 text-[10px] uppercase tracking-wider font-medium mt-0.5">
                  Disponibilidade
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Speed display */}
          <div
            className={`flex-shrink-0 hidden md:flex flex-col items-center transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#E42525]/20 blur-[40px] scale-110" />

              {/* Speed circle */}
              <div className="relative w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border-2 border-white/10 flex flex-col items-center justify-center bg-gradient-to-br from-[#000d3a] to-[#000347]">
                {/* Animated ring */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#speedGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="301.6"
                    strokeDashoffset={isLoaded ? "75" : "301.6"}
                    className="transition-all duration-[2s] ease-out"
                  />
                  <defs>
                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E42525" />
                      <stop offset="100%" stopColor="#ff6b6b" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">
                  ate
                </span>
                <span
                  className="text-white text-6xl lg:text-7xl font-black leading-none"
                  style={{ fontFamily: "Nohemi" }}
                >
                  <AnimatedCounter target={1000} duration={2000} />
                </span>
                <span
                  className="text-[#E42525] text-lg lg:text-xl font-bold uppercase tracking-wider mt-1"
                  style={{ fontFamily: "Nohemi" }}
                >
                  Mega
                </span>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-12 top-8 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2 flex items-center gap-2 animate-float">
                <div className="w-8 h-8 rounded-lg bg-[#E42525]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#E42525]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[10px] font-bold leading-none">Baixa latencia</p>
                  <p className="text-white/50 text-[8px] mt-0.5">Ping estavel</p>
                </div>
              </div>

              <div className="absolute -right-10 bottom-12 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2 flex items-center gap-2 animate-float-delayed">
                <div className="w-8 h-8 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[10px] font-bold leading-none">Wi-Fi Premium</p>
                  <p className="text-white/50 text-[8px] mt-0.5">Incluso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile speed badge */}
          <div
            className={`md:hidden flex items-center justify-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 w-full transition-all duration-700 delay-[400ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="text-center">
              <span
                className="text-white text-4xl font-black leading-none"
                style={{ fontFamily: "Nohemi" }}
              >
                <AnimatedCounter target={1000} />
              </span>
              <span
                className="block text-[#E42525] text-sm font-bold uppercase tracking-wider mt-0.5"
                style={{ fontFamily: "Nohemi" }}
              >
                Mega
              </span>
            </div>
            <div className="w-px h-12 bg-white/15" />
            <div className="text-left">
              <p className="text-white text-xs font-bold leading-snug">Velocidade maxima</p>
              <p className="text-white/50 text-[11px] leading-snug mt-0.5">
                100% Fibra optica com Wi-Fi Premium incluso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function StreamingSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const streamingApps = [
    {
      src: "/images/os-inseparaveis-1.webp",
      alt: "Globoplay - Os Inseparáveis",
    },
    {
      src: "/images/fantastico.gif",
      alt: "TV Globo - Fantástico",
    },
    {
      src: "/images/design-sem-nome-4-1.gif",
      alt: "Telecine",
    },
    {
      src: "/images/cosme-e-damiao.webp",
      alt: "Multishow - Cosme & Damião",
    },
    {
      src: "/images/espn-1.gif",
      alt: "ESPN",
    },
    {
      src: "/images/edye-1.gif",
      alt: "edye",
    },
  ]

  const allApps = [...streamingApps, ...streamingApps]

  const handleComboClick = () => {
    const comboSection = document.getElementById('combo-builder')
    if (comboSection) {
      comboSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollSpeed = 0.5
    let animationFrameId: number

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += scrollSpeed
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])


  return (
    <section className="streaming-section bg-[#000347] relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000347] via-[#000347] to-[#0a0a52]" />

        {/* Very subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Minimal animated glow orbs - blue tones only */}
        <div className="absolute top-1/4 left-[15%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-[15%] w-96 h-96 bg-blue-400/8 rounded-full blur-[140px] animate-float-slow-reverse" />

        {/* Subtle fiber optic lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse-line-horizontal" />
        <div
          className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-line-horizontal"
          style={{ animationDelay: "2s" }}
        />

        {/* Minimal connection dots */}
        <div className="absolute top-[20%] left-[25%] w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse" />
        <div
          className="absolute top-[45%] right-[30%] w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[35%] left-[40%] w-1.5 h-1.5 bg-blue-300/25 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="streaming-content">
          {/* Text content */}
          <div className="streaming-text text-center md:text-left">
            <h2
              className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6"
              style={{ fontFamily: "Nohemi" }}
            >
              Diversão ilimitada<br />
              com a <span className="text-[#E42525]">Fernando Net</span>
            </h2>
            <p className="text-sm md:text-lg text-white/85 leading-relaxed mb-4 md:mb-6">
              Acesso aos melhores aplicativos de streaming, filmes, séries, esportes e muito mais. Tudo incluso nos
              nossos planos!
            </p>
            <button 
              onClick={handleComboClick}
              className="bg-[#E42525] hover:bg-[#c41f1f] text-white font-bold py-3 px-8 rounded-full text-sm md:text-base uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Quero no meu plano
            </button>
          </div>

          {/* Carousel */}
          <div className="streaming-carousel-container">
            <div ref={scrollRef} className="streaming-carousel">
              {allApps.map((app, index) => (
                <div key={index} className="streaming-card">
                  <Image
                    src={app.src || "/placeholder.svg"}
                    alt={app.alt}
                    width={280}
                    height={400}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

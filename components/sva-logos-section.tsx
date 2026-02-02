"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function SvaLogosSection() {
  const svas = [
    { src: "/images/tv-globo-2025.svg.png", alt: "TV Globo" },
    { src: "/images/premiere-fc-logo-1.png", alt: "Premiere FC" },
    { src: "/images/sportv-logo-8.png", alt: "SporTV" },
    { src: "/images/sbt-logo.png", alt: "SBT" },
    { src: "/images/paramount-plus-logo.png", alt: "Paramount+" },
    { src: "/images/espn-logo-5.png", alt: "ESPN" },
    { src: "/images/logo-footer-telecine.svg.png", alt: "Telecine" },
    { src: "/images/nickjr-logo.png", alt: "Nick Jr" },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 0.5 // pixels per frame
    const containerWidth = scrollContainer.scrollWidth / 2 // Half because we duplicate

    const scroll = () => {
      scrollAmount += scrollStep
      if (scrollAmount >= containerWidth) {
        scrollAmount = 0
      }
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`
      requestAnimationFrame(scroll)
    }

    const animationFrame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="sva-carousel-section">
      <div className="sva-carousel-overflow">
        <div ref={scrollRef} className="sva-carousel-container">
          {/* First set */}
          {svas.map((sva, idx) => (
            <div key={`first-${idx}`} className="sva-logo-box">
              <Image
                src={sva.src || "/placeholder.svg"}
                alt={sva.alt}
                width={200}
                height={40}
                className="sva-logo-image"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {svas.map((sva, idx) => (
            <div key={`second-${idx}`} className="sva-logo-box">
              <Image
                src={sva.src || "/placeholder.svg"}
                alt={sva.alt}
                width={200}
                height={40}
                className="sva-logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

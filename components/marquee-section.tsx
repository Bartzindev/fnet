"use client"

import { useEffect, useRef } from "react"

export default function MarqueeSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const getMarqueeNode = (content: string) => {
      const el = document.createElement("div")
      el.setAttribute("data-marquee-style", "true")
      el.textContent = content
      return el
    }

    const calculateItemsInView = (ref: HTMLElement) => {
      const single = ref.clientWidth
      const total = ref.parentElement?.clientWidth || 0
      return Math.floor(total / single) + 1
    }

    const render = () => {
      if (!marqueeRef.current) return

      const content = marqueeRef.current.getAttribute("data-marquee") || ""
      const shadow = getMarqueeNode(content)
      shadow.setAttribute("data-marquee-shadow", "true")

      marqueeRef.current.innerHTML = ""
      marqueeRef.current.appendChild(shadow)

      const inView = calculateItemsInView(shadow)

      const overflow = document.createElement("div")
      overflow.setAttribute("data-marquee-overflow", "true")
      const container = document.createElement("div")
      container.setAttribute("data-marquee-container", "true")

      overflow.appendChild(container)

      const count = inView * 3

      for (let i = 0; i < count; i++) {
        container.appendChild(getMarqueeNode(content))
      }

      marqueeRef.current.appendChild(overflow)
    }

    render()

    const handleResize = () => render()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="bg-[#E42525] py-0.5 md:py-1 overflow-hidden flex items-center">
      <div ref={marqueeRef} data-marquee="Internet 100% Fibra Óptica" className="w-full" />
    </section>
  )
}

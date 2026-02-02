"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function SmoothScroll() {
  useEffect(() => {
    // Wait for Lenis to be loaded
    const initLenis = () => {
      if (typeof window !== "undefined" && (window as any).Lenis) {
        const lenis = new (window as any).Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Store lenis instance globally for potential cleanup
        ;(window as any).__lenis = lenis

        return () => {
          lenis.destroy()
        }
      }
    }

    // Small delay to ensure script is loaded
    const timer = setTimeout(initLenis, 100)

    return () => {
      clearTimeout(timer)
      if ((window as any).__lenis) {
        ;(window as any).__lenis.destroy()
      }
    }
  }, [])

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/lenis@1.1.18/dist/lenis.css" />
      <Script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js" strategy="beforeInteractive" />
    </>
  )
}

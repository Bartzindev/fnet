"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#000347]">
      <div className="block md:hidden relative w-full">
        <Image
          src="/images/banner-site-mobile.jpg"
          alt="Planos com até 1000 Mbps - Fernando Net com benefícios inclusos"
          width={960}
          height={1200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="hidden md:block relative w-full h-[250px]">
        <Image
          src="/images/banner-melhor-desktop.jpg"
          alt="Planos com até 1000 Mbps - Fernando Net com benefícios inclusos"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}

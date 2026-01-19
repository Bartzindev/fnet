"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import PlansSection from "@/components/plans-section"
import ComboBuilder from "@/components/combo-builder"
import StreamingSection from "@/components/streaming-section"
import SvaLogosSection from "@/components/sva-logos-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const [selectedPlanSpeed, setSelectedPlanSpeed] = useState<string | undefined>(undefined)

  const handlePlanSelect = (speed: string) => {
    setSelectedPlanSpeed(speed)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="h-12 md:h-16" />
      <Hero />
      <PlansSection onPlanSelect={handlePlanSelect} />
      <ComboBuilder preSelectedPlan={selectedPlanSpeed} />
      <SvaLogosSection />
      <StreamingSection />
      <FAQSection />
      <Footer />

      <WhatsAppButton />
    </main>
  )
}

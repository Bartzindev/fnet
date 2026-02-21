"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import PlanCard from "./plan-card"
import PlanSelector from "./plan-selector"
import SubscriptionModal from "./subscription-modal"

const allPlans: Record<string, Array<{
  speed: string
  price: string
  features: string[]
  label?: string
  benefitIcons?: Array<{ src: string; alt: string }>
  comboDescription?: string
}>> = {
  "500": [
    {
      speed: "500",
      price: "99,90",
      label: "500 Mega",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "CDN TV", "Deezer"],
      benefitIcons: [
        { src: "/images/cdntv.png", alt: "CDN TV" },
        { src: "/images/deezer.png", alt: "Deezer" },
      ],
      comboDescription: "500 Mega - R$ 99,90/mes | Incluso: CDN TV, Deezer",
    },
  ],
  "800": [
    {
      speed: "800",
      price: "129,90",
      label: "CDN TV + Deezer",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "CDN TV", "Deezer"],
      benefitIcons: [
        { src: "/images/cdntv.png", alt: "CDN TV" },
        { src: "/images/deezer.png", alt: "Deezer" },
      ],
      comboDescription: "800 Mega + CDN TV + Deezer - R$ 129,90/mes",
    },
    {
      speed: "800",
      price: "149,90",
      label: "Rastreador",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "Rastreador veicular"],
      benefitIcons: [
        { src: "/images/rastreador.png", alt: "Rastreador" },
      ],
      comboDescription: "800 Mega + Rastreador Veicular - R$ 149,90/mes",
    },
    {
      speed: "800",
      price: "149,90",
      label: "Watch TV",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "Watch TV"],
      benefitIcons: [
        { src: "/images/watch-tv.png", alt: "Watch TV" },
      ],
      comboDescription: "800 Mega + Watch TV - R$ 149,90/mes",
    },
    {
      speed: "800",
      price: "159,90",
      label: "10GB Movel",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "10GB internet movel"],
      comboDescription: "800 Mega + 10GB Movel - R$ 159,90/mes",
    },
  ],
  "1000": [
    {
      speed: "1000",
      price: "149,90",
      label: "CDN TV + Deezer",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "CDN TV", "Deezer"],
      benefitIcons: [
        { src: "/images/cdntv.png", alt: "CDN TV" },
        { src: "/images/deezer.png", alt: "Deezer" },
      ],
      comboDescription: "1000 Mega + CDN TV + Deezer - R$ 149,90/mes",
    },
    {
      speed: "1000",
      price: "159,90",
      label: "Rastreador",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "Rastreador veicular"],
      benefitIcons: [
        { src: "/images/rastreador.png", alt: "Rastreador" },
      ],
      comboDescription: "1000 Mega + Rastreador Veicular - R$ 159,90/mes",
    },
    {
      speed: "1000",
      price: "159,90",
      label: "Watch TV",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "Watch TV"],
      benefitIcons: [
        { src: "/images/watch-tv.png", alt: "Watch TV" },
      ],
      comboDescription: "1000 Mega + Watch TV - R$ 159,90/mes",
    },
    {
      speed: "1000",
      price: "179,90",
      label: "15GB Movel",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "15GB internet movel"],
      comboDescription: "1000 Mega + 15GB Movel - R$ 179,90/mes",
    },
    {
      speed: "1000",
      price: "189,90",
      label: "25GB Movel",
      features: ["Wi-Fi Premium incluso", "Instalacao gratuita", "Suporte tecnico prioritario", "25GB internet movel"],
      comboDescription: "1000 Mega + 25GB Movel - R$ 189,90/mes",
    },
  ],
}

const speedTabs = ["500", "800", "1000"] as const

const mobilePlans = [
  { gb: "5", bonusGb: "3", price: "49,90" },
  { gb: "10", bonusGb: "5", price: "59,90" },
  { gb: "15", bonusGb: "5", price: "64,99" },
  { gb: "25", bonusGb: "10", price: "89,90" },
]

interface PlansSectionProps {
  onPlanSelect?: (speed: string) => void
}

export default function PlansSection({ onPlanSelect }: PlansSectionProps = {}) {
  const [activeTab, setActiveTab] = useState<"internet" | "mobile">("internet")
  const [activeSpeed, setActiveSpeed] = useState<string>("500")
  const [showModal, setShowModal] = useState(false)
  const [selectedPlanDetails, setSelectedPlanDetails] = useState("")

  useEffect(() => {
    const handleSwitchTab = (event: CustomEvent<{ tab: "internet" | "mobile" }>) => {
      setActiveTab(event.detail.tab)
    }

    window.addEventListener("switchPlanTab", handleSwitchTab as EventListener)
    return () => {
      window.removeEventListener("switchPlanTab", handleSwitchTab as EventListener)
    }
  }, [])

  const handlePlanSubscribe = (planInfo: string, planType: "internet" | "mobile", price: string, comboDescription?: string) => {
    if (comboDescription) {
      setSelectedPlanDetails(comboDescription)
    } else if (planType === "internet") {
      setSelectedPlanDetails(`Internet Fibra ${planInfo} Mega - R$ ${price}/mês`)
    } else {
      const plan = mobilePlans.find((p) => p.gb === planInfo)
      setSelectedPlanDetails(`Chip Móvel ${planInfo}GB (+${plan?.bonusGb}GB bônus) - R$ ${price}/mês`)
    }
    setShowModal(true)
  }

  return (
    <>
      <section id="planos" className="py-8 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-5xl font-bold text-[#000347] mb-2 px-1" style={{ fontFamily: "Nohemi" }}>
              {activeTab === "internet" ? "Planos de Internet Fibra" : "Planos de Chip 5G"}
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl md:max-w-2xl mx-auto leading-snug px-4 font-normal">
              {activeTab === "internet"
                ? "Escolha a velocidade perfeita para suas necessidades"
                : "Conectividade 5G com cobertura nacional"}
            </p>
          </div>

          <PlanSelector activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Speed sub-tabs */}
          {activeTab === "internet" && (
            <div className="flex justify-center gap-2 mb-6">
              {speedTabs.map((speed) => (
                <button
                  key={speed}
                  onClick={() => setActiveSpeed(speed)}
                  className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                    activeSpeed === speed
                      ? "bg-[#E42525] text-white shadow-lg"
                      : "bg-[#000347]/10 text-[#000347] hover:bg-[#000347]/20"
                  }`}
                  style={{ fontFamily: "Nohemi" }}
                >
                  {speed} Mega
                </button>
              ))}
            </div>
          )}

          {/* Desktop grid */}
          {activeTab === "internet" && (
            <div className={`hidden md:grid gap-4 justify-center ${
              allPlans[activeSpeed].length <= 1 ? "md:grid-cols-1 max-w-[240px] mx-auto" :
              allPlans[activeSpeed].length <= 3 ? "md:grid-cols-3 max-w-[720px] mx-auto" :
              allPlans[activeSpeed].length <= 4 ? "md:grid-cols-4 max-w-[960px] mx-auto" :
              "md:grid-cols-5 max-w-[1200px] mx-auto"
            }`}>
              {allPlans[activeSpeed].map((plan, idx) => (
                <PlanCard
                  key={`${activeSpeed}-${idx}`}
                  speed={plan.speed}
                  price={plan.price}
                  features={plan.features}
                  label={plan.label}
                  benefitIcons={plan.benefitIcons}
                  onSubscribe={() => handlePlanSubscribe(plan.speed, "internet", plan.price, plan.comboDescription)}
                />
              ))}
            </div>
          )}

          {/* Mobile horizontal scroll */}
          {activeTab === "internet" && (
            <div className="md:hidden">
              <div
                className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-3 items-stretch"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                  paddingLeft: "4vw",
                  paddingRight: "4vw",
                }}
              >
                {allPlans[activeSpeed].map((plan, idx) => (
                  <div key={`${activeSpeed}-${idx}`} className="flex-shrink-0 w-[72vw] snap-center flex">
                    <PlanCard
                      speed={plan.speed}
                      price={plan.price}
                      features={plan.features}
                      label={plan.label}
                      benefitIcons={plan.benefitIcons}
                      onSubscribe={() => handlePlanSubscribe(plan.speed, "internet", plan.price, plan.comboDescription)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {mobilePlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#000347] via-[#001366] to-[#000347] rounded-2xl p-6 md:p-8 flex flex-col justify-between text-white shadow-xl border border-white/10 relative"
                >
                  {plan.gb === "15" && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                        Promoção
                      </div>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <h3
                        className="text-5xl md:text-6xl font-black mb-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                        style={{ fontFamily: "Nohemi" }}
                      >
                        {plan.gb}
                      </h3>
                      <p className="text-base font-medium text-white/70 uppercase tracking-wider">Giga</p>
                    </div>

                    <div className="mb-4 flex justify-center">
                      <div className="bg-[#E42525]/20 backdrop-blur-sm rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wide text-center border border-[#E42525]/30">
                        +{plan.bonusGb} GB bônus portabilidade
                      </div>
                    </div>

                    <div className="mb-4 flex justify-center items-center gap-3">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span className="text-xs font-semibold">WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                        <Image src="/images/waze-app-icon.png" alt="Waze" width={20} height={20} className="rounded" />
                        <span className="text-xs font-semibold">Waze</span>
                      </div>
                    </div>

                    <div className="mb-4 flex justify-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                        Cobertura Nacional
                      </div>
                    </div>

                    <div className="text-center mb-5">
                      <p className="text-[10px] uppercase tracking-widest font-semibold mb-1 text-white/60">
                        S/ FIDELIDADE
                      </p>
                      <div className="inline-flex items-baseline gap-1">
                        <span className="text-lg font-semibold text-white/80">R$</span>
                        <span className="text-5xl font-black text-white" style={{ fontFamily: "Nohemi" }}>
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 mt-1">por mês</p>
                    </div>
                  </div>

                  <button
                    className="relative z-10 w-full bg-gradient-to-r from-[#E42525] to-[#c41f1f] hover:shadow-xl text-white font-bold uppercase tracking-wide py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{ fontFamily: "Nohemi" }}
                    onClick={() => handlePlanSubscribe(plan.gb, "mobile", plan.price)}
                  >
                    EU QUERO
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="md:hidden">
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 py-4 -mx-4"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {mobilePlans.map((plan, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[80vw] max-w-[290px] snap-center first:ml-2 last:mr-2">
                    <div className="bg-gradient-to-br from-[#000347] via-[#001366] to-[#000347] rounded-2xl p-5 flex flex-col justify-between text-white shadow-xl border border-white/10 relative h-full">
                      {plan.gb === "15" && (
                        <div className="absolute top-3 right-3 z-10">
                          <div className="bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                            Promoção
                          </div>
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className="text-center mb-3">
                          <h3
                            className="text-5xl font-black mb-0 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                            style={{ fontFamily: "Nohemi" }}
                          >
                            {plan.gb}
                          </h3>
                          <p className="text-sm font-medium text-white/70 uppercase tracking-wider">Giga</p>
                        </div>

                        <div className="mb-3 flex justify-center">
                          <div className="bg-[#E42525]/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-center border border-[#E42525]/30">
                            +{plan.bonusGb} GB bônus portabilidade
                          </div>
                        </div>

                        <div className="mb-3 flex justify-center items-center gap-2">
                          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="text-[10px] font-semibold">WhatsApp</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                            <Image src="/images/waze-app-icon.png" alt="Waze" width={16} height={16} className="rounded" />
                            <span className="text-[10px] font-semibold">Waze</span>
                          </div>
                        </div>

                        <div className="mb-3 flex justify-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
                            Cobertura Nacional
                          </div>
                        </div>

                        <div className="text-center mb-4">
                          <p className="text-[9px] uppercase tracking-widest font-semibold mb-1 text-white/60">
                            S/ FIDELIDADE
                          </p>
                          <div className="inline-flex items-baseline gap-0.5">
                            <span className="text-base font-semibold text-white/80">R$</span>
                            <span className="text-4xl font-black text-white" style={{ fontFamily: "Nohemi" }}>
                              {plan.price}
                            </span>
                          </div>
                          <p className="text-[10px] text-white/60 mt-0.5">por mês</p>
                        </div>
                      </div>

                      <button
                        className="relative z-10 w-full bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white font-bold uppercase tracking-wide py-3 rounded-xl shadow-lg text-sm"
                        style={{ fontFamily: "Nohemi" }}
                        onClick={() => handlePlanSubscribe(plan.gb, "mobile", plan.price)}
                      >
                        EU QUERO
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SubscriptionModal isOpen={showModal} onClose={() => setShowModal(false)} comboDetails={selectedPlanDetails} />
    </>
  )
}

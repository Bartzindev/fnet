"use client"

import { useState, useEffect } from "react"
import SubscriptionModal from "./subscription-modal"

interface ComboOption {
  id: string
  name: string
  price: number
  description?: string
  iconType?: string
}

interface ComboBuilderProps {
  preSelectedPlan?: string
}

const internetOptions: ComboOption[] = [
  { id: "none_internet", name: "Não quero adicionar", price: 0, description: "Pular esta opção", iconType: "globe" },
  { id: "net500", name: "500 Mbps", price: 99.9, description: "Ideal para casa", iconType: "globe" },
  { id: "net800", name: "800 Mbps", price: 129.9, description: "Mais velocidade", iconType: "globe" },
  { id: "net1000", name: "1000 Mbps", price: 159.9, description: "Ultra rápido", iconType: "globe" },
]

const mobileOptions: ComboOption[] = [
  { id: "none_mobile", name: "Não quero adicionar", price: 0, description: "Pular esta opção", iconType: "smartphone" },
  { id: "mob5", name: "Chip 5GB + 3GB bônus", price: 49.9, description: "+3GB portabilidade", iconType: "smartphone" },
  {
    id: "mob10",
    name: "Chip 10GB + 5GB bônus",
    price: 59.9,
    description: "+5GB portabilidade",
    iconType: "smartphone",
  },
  {
    id: "mob15",
    name: "Chip 15GB + 5GB bônus",
    price: 64.99,
    description: "+5GB portabilidade",
    iconType: "smartphone",
  },
  {
    id: "mob25",
    name: "Chip 25GB + 10GB bônus",
    price: 89.9,
    description: "+10GB portabilidade",
    iconType: "smartphone",
  },
]

const tvStreamingOptions: ComboOption[] = [
  { id: "none_streaming", name: "Não quero adicionar", price: 0, description: "Pular esta opção", iconType: "film" },
  {
    id: "streampremium",
    name: "Premium Streaming",
    price: 49.9,
    description: "Planos premium de streaming",
    iconType: "film",
  },
]

const renderIcon = (iconType?: string, className = "w-6 h-6 text-[#E42525]") => {
  switch (iconType) {
    case "globe":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    case "smartphone":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      )
    case "tv":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      )
    case "film":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      )
    default:
      return null
  }
}

export default function ComboBuilder({ preSelectedPlan }: ComboBuilderProps) {
  const [selectedInternet, setSelectedInternet] = useState<string>("")
  const [selectedMobile, setSelectedMobile] = useState<string>("")
  const [selectedTVStreaming, setSelectedTVStreaming] = useState<string>("")
  const [openDrawer, setOpenDrawer] = useState<number>(0)
  const [animatePrice, setAnimatePrice] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getPrice = (id: string, options: ComboOption[]) => {
    return options.find((opt) => opt.id === id)?.price || 0
  }

  const getSelectedName = (id: string, options: ComboOption[]) => {
    if (!id) return "Selecione"
    return options.find((opt) => opt.id === id)?.name || "Selecione"
  }

  const totalPrice =
    getPrice(selectedInternet, internetOptions) +
    getPrice(selectedMobile, mobileOptions) +
    getPrice(selectedTVStreaming, tvStreamingOptions)

  useEffect(() => {
    setAnimatePrice(true)
    const timer = setTimeout(() => setAnimatePrice(false), 400)
    return () => clearTimeout(timer)
  }, [totalPrice])

  useEffect(() => {
    if (preSelectedPlan) {
      const speedToId: { [key: string]: string } = {
        "500": "net500",
        "800": "net800",
        "1000": "net1000",
      }
      const mappedId = speedToId[preSelectedPlan]
      if (mappedId) {
        setSelectedInternet(mappedId)
        setOpenDrawer(0)
      }
    }
  }, [preSelectedPlan])

  const steps = [
    {
      title: "Escolher plano de Internet",
      subtitle: "Escolha a velocidade ideal",
      options: internetOptions,
      selected: selectedInternet,
      setSelected: setSelectedInternet,
      icon: renderIcon("globe"),
    },
    {
      title: "Escolher plano de Chip Móvel",
      subtitle: "Escolha seus dados móveis",
      options: mobileOptions,
      selected: selectedMobile,
      setSelected: setSelectedMobile,
      icon: renderIcon("smartphone"),
    },
    {
      title: "Escolher plano de Streaming e TV",
      subtitle: "Adicione streaming e TV ao seu combo",
      options: tvStreamingOptions,
      selected: selectedTVStreaming,
      setSelected: setSelectedTVStreaming,
      icon: renderIcon("tv"),
    },
  ]

  const toggleDrawer = (index: number) => {
    setOpenDrawer(openDrawer === index ? -1 : index)
  }

  const generateComboDetails = () => {
    const internetName = selectedInternet ? getSelectedName(selectedInternet, internetOptions) : "Não selecionado"
    const mobileName = selectedMobile ? getSelectedName(selectedMobile, mobileOptions) : "Não selecionado"
    const tvStreamingName = selectedTVStreaming
      ? getSelectedName(selectedTVStreaming, tvStreamingOptions)
      : "Não selecionado"
    const internetPrice = getPrice(selectedInternet, internetOptions)
    const mobilePrice = getPrice(selectedMobile, mobileOptions)
    const tvStreamingPrice = getPrice(selectedTVStreaming, tvStreamingOptions)
    return `Internet ${internetName} (R$ ${internetPrice.toFixed(2)}) + ${mobileName} (R$ ${mobilePrice.toFixed(2)}) + ${tvStreamingName} (R$ ${tvStreamingPrice.toFixed(2)}) = Total: R$ ${totalPrice.toFixed(2)}/mês`
  }

  return (
    <>
      <section id="combo-builder" className="py-12 md:py-20 bg-[#000347] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3"
              style={{ fontFamily: "Nohemi" }}
            >
              Monte seu Combo <span className="text-[#E42525]">Fernando Net</span>
            </h2>
            <p className="text-white/70 text-xs md:text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
              Escolha seu plano de Internet, Chip Móvel, TV e Streaming — veja o valor total em tempo real.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-col gap-3 max-w-4xl mx-auto">
              {steps.map((step, index) => {
                const isOpen = openDrawer === index
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleDrawer(index)}
                      className="w-full flex items-center justify-between p-4 md:p-5 bg-[#000347] hover:bg-[#000347]/90 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl group-hover:bg-white/15 transition-colors">
                          {step.icon}
                        </div>
                        <div className="text-left">
                          <h3
                            className="text-white font-bold text-base md:text-lg mb-0.5"
                            style={{ fontFamily: "Nohemi" }}
                          >
                            {step.title}
                          </h3>
                          <p className="text-white/60 text-[10px] md:text-xs">{step.subtitle}</p>
                        </div>
                      </div>
                      <svg
                        className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-400 flex-shrink-0 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`drawer-content transition-all duration-400 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="p-3 md:p-5 bg-[#0b0b4a]/50">
                        <div className="grid grid-cols-1 gap-2.5">
                          {step.options.map((option) => {
                            const isSelected = step.selected === option.id
                            return (
                              <button
                                key={option.id}
                                onClick={() => step.setSelected(option.id)}
                                className={`relative p-3 md:p-4 rounded-xl text-left transition-all duration-300 group flex items-center justify-between ${
                                  isSelected
                                    ? "bg-white text-[#000347] shadow-xl ring-2 ring-[#E42525]"
                                    : "bg-white/10 text-white hover:bg-white/15 border border-white/20"
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className="flex-shrink-0">
                                    {renderIcon(
                                      option.iconType,
                                      `w-5 h-5 ${isSelected ? "text-[#E42525]" : "text-[#E42525]"}`,
                                    )}
                                  </div>
                                  <div>
                                    <div
                                      className="font-bold text-xs md:text-sm mb-0.5"
                                      style={{ fontFamily: "Nohemi" }}
                                    >
                                      {option.name}
                                    </div>
                                    <div
                                      className={`text-[10px] md:text-xs ${isSelected ? "text-gray-600" : "text-white/50"}`}
                                    >
                                      {option.description}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                  <div
                                    className={`text-base md:text-lg font-bold ${isSelected ? "text-[#E42525]" : "text-white"}`}
                                  >
                                    {option.price === 0 ? "Grátis" : `R$ ${option.price.toFixed(2)}`}
                                  </div>
                                  {isSelected && (
                                    <div className="w-5 h-5 bg-[#E42525] rounded-full flex items-center justify-center">
                                      <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={3}
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-6">
            <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 border-2 border-gray-100">
              <div className="mb-3 md:mb-5">
                <h4
                  className="text-gray-700 font-bold text-sm md:text-base mb-3 md:mb-4 text-center"
                  style={{ fontFamily: "Nohemi" }}
                >
                  Seu combo:
                </h4>
                <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-5">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 md:p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center min-h-[90px] md:min-h-[110px]">
                    <div className="mb-1 md:mb-2 flex items-center justify-center scale-75 md:scale-100">
                      {steps[0].icon}
                    </div>
                    <div className="text-[8px] md:text-xs text-gray-500 mb-0.5 md:mb-1 text-center font-medium">
                      Internet
                    </div>
                    <div
                      className="font-bold text-[#000347] text-[9px] md:text-sm text-center leading-snug px-0.5"
                      style={{ fontFamily: "Nohemi" }}
                    >
                      {getSelectedName(selectedInternet, internetOptions)}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 md:p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center min-h-[90px] md:min-h-[110px]">
                    <div className="mb-1 md:mb-2 flex items-center justify-center scale-75 md:scale-100">
                      {steps[1].icon}
                    </div>
                    <div className="text-[8px] md:text-xs text-gray-500 mb-0.5 md:mb-1 text-center font-medium">
                      Chip Móvel
                    </div>
                    <div
                      className="font-bold text-[#000347] text-[9px] md:text-sm text-center leading-snug px-0.5 break-words w-full"
                      style={{ fontFamily: "Nohemi" }}
                    >
                      {getSelectedName(selectedMobile, mobileOptions)}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 md:p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center min-h-[90px] md:min-h-[110px]">
                    <div className="mb-1 md:mb-2 flex items-center justify-center scale-75 md:scale-100">
                      {steps[2].icon}
                    </div>
                    <div className="text-[8px] md:text-xs text-gray-500 mb-0.5 md:mb-1 text-center font-medium">
                      Streaming/TV
                    </div>
                    <div
                      className="font-bold text-[#000347] text-[9px] md:text-sm text-center leading-snug px-0.5 break-words w-full"
                      style={{ fontFamily: "Nohemi" }}
                    >
                      {getSelectedName(selectedTVStreaming, tvStreamingOptions)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2 md:pt-3 border-t border-gray-200">
                <p className="text-gray-600 text-[10px] md:text-sm mb-1.5">Total do combo:</p>
                <p
                  className={`text-2xl md:text-4xl font-bold text-[#E42525] mb-3 md:mb-5 transition-all duration-300 ${animatePrice ? "scale-110" : "scale-100"}`}
                  style={{ fontFamily: "Nohemi" }}
                >
                  R$ {totalPrice.toFixed(2)}
                  <span className="text-xs md:text-base text-gray-600 font-normal ml-1">/mês</span>
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block btn-primary text-xs md:text-base w-full px-5 md:px-7 py-2.5 md:py-3.5 shadow-xl hover:shadow-2xl transition-all text-center"
                  style={{ fontFamily: "Nohemi" }}
                >
                  Assinar Combo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        comboDetails={generateComboDetails()}
      />
    </>
  )
}

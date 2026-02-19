"use client"

import Image from "next/image"

interface BenefitIcon {
  src: string
  alt: string
}

interface PlanCardProps {
  speed: string
  price: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  buttonVariant?: "red" | "blue"
  mostPopular?: boolean
  label?: string
  benefitIcons?: BenefitIcon[]
  onSubscribe?: (speed: string) => void
}

export default function PlanCard({
  speed,
  price,
  features,
  highlighted = false,
  buttonText = "Assinar Agora",
  mostPopular = false,
  label,
  benefitIcons,
  onSubscribe,
}: PlanCardProps) {
  const borderColor = highlighted ? "border-2 border-[#E42525]" : "border border-white/10"

  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe(speed)
    }
  }

  return (
    <div
      className={`bg-gradient-to-br from-[#000347] via-[#001366] to-[#000347] ${borderColor} rounded-2xl px-4 pt-4 pb-4 flex flex-col justify-between text-white relative overflow-hidden group h-full`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top content */}
      <div className="relative z-10 flex flex-col">
        {/* Most Popular badge - positioned to not overlap label */}
        {mostPopular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white px-2.5 py-0.5 rounded-bl-lg rounded-tr-xl shadow-lg z-20">
            <span className="text-[9px] font-bold tracking-wider uppercase" style={{ fontFamily: "Nohemi" }}>
              Mais Popular
            </span>
          </div>
        )}

        {/* Label */}
        {label && (
          <div className={`text-center ${mostPopular ? "mt-5" : "mt-0"} mb-1`}>
            <span
              className="inline-block text-white text-[10px] font-bold uppercase tracking-widest"
              style={{ fontFamily: "Nohemi" }}
            >
              {label}
            </span>
          </div>
        )}

        {/* Speed */}
        <div className="text-center">
          <h3
            className="text-[2.75rem] leading-none font-extrabold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            style={{ fontFamily: "Nohemi" }}
          >
            {speed}
          </h3>
          <p className="text-[11px] font-medium text-white/70 uppercase tracking-wider">Mega</p>
        </div>

        {/* Price */}
        <div className="text-center mt-1">
          <div className="inline-flex items-baseline gap-0.5">
            <span className="text-xs text-white/80 font-semibold">R$</span>
            <span className="text-[1.75rem] font-black text-white leading-none" style={{ fontFamily: "Nohemi" }}>
              {price}
            </span>
          </div>
          <p className="text-[10px] text-white/60 font-medium leading-tight">/mês</p>
        </div>

        {/* Benefit Icons */}
        {benefitIcons && benefitIcons.length > 0 && (
          <div className="mt-2 text-center">
            <p className="text-[8px] uppercase tracking-widest font-semibold text-white/50 mb-1">
              Incluso no plano
            </p>
            <div className="flex items-center justify-center gap-1.5 flex-nowrap">
              {benefitIcons.map((icon, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-8 h-8 relative rounded-lg overflow-hidden shadow-lg border border-white/10"
                >
                  <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <ul className="mt-2 space-y-1.5">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              <div className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#E42525]/20 flex items-center justify-center">
                <svg
                  className="w-2 h-2 text-[#E42525]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/90 text-[11px] font-medium leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button pinned to bottom */}
      <button
        onClick={handleSubscribe}
        className="relative z-10 w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide mt-3"
        style={{ fontFamily: "Nohemi" }}
      >
        {buttonText}
      </button>
    </div>
  )
}

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
      className={`bg-gradient-to-br from-[#000347] via-[#001366] to-[#000347] ${borderColor} rounded-2xl px-4 py-4 flex flex-col justify-between text-white relative overflow-hidden group h-full`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top content */}
      <div className="relative z-10 flex flex-col">
        {mostPopular && (
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white px-3 py-1 rounded-bl-xl shadow-lg">
            <span className="text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: "Nohemi" }}>
              Mais Popular
            </span>
          </div>
        )}

        {/* Label - fixed height so cards align */}
        <div className="text-center h-6 flex items-center justify-center mb-1">
          {label ? (
            <span
              className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full border border-white/20"
              style={{ fontFamily: "Nohemi" }}
            >
              {label}
            </span>
          ) : null}
        </div>

        {/* Speed */}
        <div className="text-center">
          <h3
            className="text-[2.75rem] leading-none font-extrabold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            style={{ fontFamily: "Nohemi" }}
          >
            {speed}
          </h3>
          <p className="text-xs font-medium text-white/70 uppercase tracking-wider mt-0.5">Mega</p>
        </div>

        {/* Price */}
        <div className="text-center mt-2">
          <div className="inline-flex items-baseline gap-0.5">
            <span className="text-sm text-white/80 font-semibold">R$</span>
            <span className="text-3xl font-black text-white leading-none" style={{ fontFamily: "Nohemi" }}>
              {price}
            </span>
          </div>
          <p className="text-[11px] text-white/60 font-medium">/mês</p>
        </div>

        {/* Benefit Icons - fixed height for alignment */}
        <div className="h-14 flex items-center justify-center mt-1">
          {benefitIcons && benefitIcons.length > 0 ? (
            <div>
              <p className="text-[8px] uppercase tracking-widest font-semibold text-white/50 text-center mb-1">
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
          ) : null}
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mt-1">
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
              <span className="text-white/90 text-[11px] font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button pinned to bottom */}
      <button
        onClick={handleSubscribe}
        className="relative z-10 w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide mt-3 whitespace-nowrap"
        style={{ fontFamily: "Nohemi" }}
      >
        {buttonText}
      </button>
    </div>
  )
}

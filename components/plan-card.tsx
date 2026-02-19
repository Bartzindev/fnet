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
      className={`bg-gradient-to-br from-[#000347] via-[#001366] to-[#000347] ${borderColor} rounded-2xl p-5 flex flex-col justify-between text-white relative overflow-hidden group h-full`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top section */}
      <div className="relative z-10 flex flex-col">
        {/* Most Popular badge - absolute so it doesn't affect flow */}
        {mostPopular && (
          <div className="absolute -top-5 -right-5 bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white px-3 py-1 rounded-bl-xl shadow-lg">
            <span className="text-[10px] font-bold tracking-wider uppercase" style={{ fontFamily: "Nohemi" }}>
              Mais Popular
            </span>
          </div>
        )}

        {/* Label */}
        <div className="text-center h-8 flex items-center justify-center">
          {label ? (
            <span
              className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20"
              style={{ fontFamily: "Nohemi" }}
            >
              {label}
            </span>
          ) : null}
        </div>

        {/* Speed */}
        <div className="text-center mt-1 mb-1">
          <h3
            className="text-5xl font-extrabold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-none"
            style={{ fontFamily: "Nohemi" }}
          >
            {speed}
          </h3>
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider mt-1">Mega</p>
        </div>

        {/* Price */}
        <div className="text-center mt-3 mb-3">
          <div className="inline-flex items-baseline gap-0.5">
            <span className="text-base text-white/80 font-semibold">R$</span>
            <span className="text-4xl font-black text-white" style={{ fontFamily: "Nohemi" }}>
              {price}
            </span>
          </div>
          <p className="text-xs text-white/60 mt-1 font-medium">/mês</p>
        </div>

        {/* Benefit Icons */}
        <div className="h-16 flex items-center justify-center">
          {benefitIcons && benefitIcons.length > 0 ? (
            <div>
              <p className="text-[9px] uppercase tracking-widest font-semibold text-white/50 text-center mb-2">
                Incluso no plano
              </p>
              <div className="flex items-center justify-center gap-2 flex-nowrap">
                {benefitIcons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-9 h-9 relative rounded-lg overflow-hidden shadow-lg border border-white/10"
                  >
                    <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Features */}
        <div className="mt-3">
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#E42525]/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-2.5 h-2.5 text-[#E42525]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/90 text-xs font-medium flex-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button - always at bottom */}
      <button
        onClick={handleSubscribe}
        className="relative z-10 w-full py-3 px-4 text-sm font-bold rounded-xl bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide mt-4"
        style={{ fontFamily: "Nohemi" }}
      >
        {buttonText}
      </button>
    </div>
  )
}

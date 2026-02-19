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
  const borderColor = "border border-white/10"

  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe(speed)
    }
  }

  return (
    <div
      className={`bg-gradient-to-br from-[#000347] via-[#001366] to-[#000347] ${borderColor} rounded-2xl p-4 md:p-5 flex flex-col text-white relative overflow-hidden group h-full`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top content - grows to fill */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Label */}
        <div className="text-center min-h-[24px] flex items-center justify-center mb-2">
          {label ? (
            <span
              className="inline-block bg-[#E42525] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ fontFamily: "Nohemi" }}
            >
              {label}
            </span>
          ) : null}
        </div>

        {/* Speed */}
        <div className="text-center mb-1">
          <h3
            className="text-5xl md:text-[3.25rem] leading-none font-extrabold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            style={{ fontFamily: "Nohemi" }}
          >
            {speed}
          </h3>
          <p className="text-xs font-medium text-white/70 uppercase tracking-wider mt-1">Mega</p>
        </div>

        {/* Price */}
        <div className="text-center mt-2 mb-3">
          <div className="inline-flex items-baseline gap-0.5">
            <span className="text-sm text-white/80 font-semibold">R$</span>
            <span className="text-[2rem] md:text-4xl font-black text-white leading-none" style={{ fontFamily: "Nohemi" }}>
              {price}
            </span>
          </div>
          <p className="text-[11px] text-white/60 font-medium">/mês</p>
        </div>

        {/* Benefit Icons - only rendered when icons exist */}
        {benefitIcons && benefitIcons.length > 0 && (
          <div className="flex items-center justify-center mb-3">
            <div className="text-center">
              <p className="text-[8px] uppercase tracking-widest font-semibold text-white/50 mb-1.5">
                Incluso no plano
              </p>
              <div className="flex items-center justify-center gap-2 flex-nowrap">
                {benefitIcons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 relative rounded-lg overflow-hidden shadow-lg border border-white/10"
                  >
                    <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#E42525]/20 flex items-center justify-center">
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
              <span className="text-white/90 text-xs font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button pinned to bottom */}
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

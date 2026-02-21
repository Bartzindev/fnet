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
  extraFeatures?: string[]
  highlighted?: boolean
  buttonText?: string
  mostPopular?: boolean
  label?: string
  featured?: boolean
  benefitIcons?: BenefitIcon[]
  onSubscribe?: (speed: string) => void
}

export default function PlanCard({
  speed,
  price,
  features,
  extraFeatures,
  highlighted = false,
  buttonText = "Assinar Agora",
  mostPopular = false,
  label,
  featured = false,
  benefitIcons,
  onSubscribe,
}: PlanCardProps) {
  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe(speed)
    }
  }

  return (
    <div
      className={`bg-gradient-to-br from-[#000347] via-[#001366] to-[#000347] border border-white/10 rounded-2xl flex flex-col text-white relative overflow-hidden group h-full transition-all duration-300 ${
        featured
          ? "p-5 md:p-6 shadow-2xl shadow-blue-900/40 scale-[1.02]"
          : "p-4 md:p-5 shadow-xl"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Label badge */}
        {label && (
          <div className="text-center mb-3">
            <span
              className="inline-block bg-[#E42525] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg"
              style={{ fontFamily: "Nohemi" }}
            >
              {label}
            </span>
          </div>
        )}

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
            <span
              className="text-[2rem] md:text-4xl font-black text-white leading-none"
              style={{ fontFamily: "Nohemi" }}
            >
              {price}
            </span>
          </div>
          <p className="text-[11px] text-white/60 font-medium">/mes</p>
        </div>

        {/* Benefit Icons */}
        {benefitIcons && benefitIcons.length > 0 && (
          <div className="flex items-center justify-center mb-3">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 flex-nowrap">
                {benefitIcons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 relative rounded-lg overflow-hidden shadow-lg border border-white/10 bg-white/10"
                  >
                    <Image src={icon.src} alt={icon.alt} fill className="object-contain p-0.5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Standard Features */}
        <div className="mb-2">
          <p className="text-[9px] uppercase tracking-widest font-semibold text-white/40 mb-2">
            Incluso no plano
          </p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#E42525] flex items-center justify-center shadow-sm">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-xs font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Extra Features (separated by divider) */}
        {extraFeatures && extraFeatures.length > 0 && (
          <div className="mt-1">
            <div className="border-t border-white/10 mb-2" />
            <p className="text-[9px] uppercase tracking-widest font-semibold text-[#ff6b6b] mb-2">
              Beneficios adicionais
            </p>
            <ul className="space-y-2">
              {extraFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#E42525] flex items-center justify-center shadow-sm">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
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

"use client"

import Image from "next/image"

interface BenefitIcon {
  src: string
  alt: string
  bg?: string // tailwind bg class, adapts to each logo's brand color
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

      {/* Chip icon */}
      <div className="absolute top-3 right-3 w-8 h-8 md:w-9 md:h-9 opacity-60">
        <Image
          src="/images/chip-rfid.png"
          alt="Chip"
          fill
          className="object-contain invert"
        />
      </div>

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
          <div className="mb-4">
            <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-white/60 text-center mb-3">
              Inclusos no plano
            </p>
            <div className="flex items-start justify-center gap-4 flex-wrap">
              {benefitIcons.map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div
                    className={`flex-shrink-0 w-[52px] h-[52px] md:w-[60px] md:h-[60px] relative rounded-2xl overflow-hidden ${icon.bg || "bg-white"}`}
                    style={{
                      boxShadow: "0 4px 14px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                    }}
                  >
                    <Image src={icon.src} alt={icon.alt} fill className="object-contain p-2" />
                  </div>
                  <span className="text-[10px] text-white font-semibold leading-tight text-center max-w-[64px]">
                    {icon.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Standard Features */}
        <div className="mb-2">
          <ul className="space-y-2.5">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E42525] flex items-center justify-center"
                  style={{ boxShadow: "0 2px 6px rgba(228,37,37,0.4)" }}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-[13px] font-medium leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Extra Features (separated by divider) */}
        {extraFeatures && extraFeatures.length > 0 && (
          <div className="mt-2">
            <div className="border-t border-white/15 mb-3" />
            <p
              className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#ff8a8a] mb-2.5"
              style={{ fontFamily: "Nohemi" }}
            >
              Extras inclusos
            </p>
            <ul className="space-y-2.5">
              {extraFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#ff4d4d] to-[#E42525] flex items-center justify-center"
                    style={{ boxShadow: "0 2px 8px rgba(228,37,37,0.5)" }}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="text-white text-[13px] font-bold leading-snug">{feature}</span>
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

"use client"

interface PlanCardProps {
  speed: string
  price: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  buttonVariant?: "red" | "blue"
  mostPopular?: boolean
  onSubscribe?: (speed: string) => void
}

export default function PlanCard({
  speed,
  price,
  features,
  highlighted = false,
  buttonText = "Assinar Agora",
  buttonVariant = "red",
  mostPopular = false,
  onSubscribe,
}: PlanCardProps) {
  const bgColor = "bg-gradient-to-br from-[#000347] via-[#001366] to-[#000347]"
  const borderColor = highlighted ? "border-2 border-[#E42525]" : "border border-white/10"
  const buttonClass = buttonVariant === "red" ? "btn-primary" : "btn-outline-blue"

  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe(speed)
    }
  }

  return (
    <div
      className={`${bgColor} ${borderColor} rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 text-white relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl group`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {mostPopular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white px-4 py-1.5 rounded-bl-xl shadow-lg">
          <span className="text-xs font-bold tracking-wider uppercase" style={{ fontFamily: "Nohemi" }}>
            Mais Popular
          </span>
        </div>
      )}

      <div className="mb-6 text-center relative z-10">
        <div className="inline-block">
          <h3
            className="text-6xl md:text-7xl font-extrabold mb-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            style={{ fontFamily: "Nohemi" }}
          >
            {speed}
          </h3>
          <p className="text-base md:text-lg font-medium text-white/70 uppercase tracking-wider">Mega</p>
        </div>
      </div>

      <div className="mb-8 text-center relative z-10">
        <div className="inline-flex items-baseline gap-1">
          <span className="text-xl md:text-2xl text-white/80 font-semibold">R$</span>
          <span className="text-5xl md:text-6xl font-black text-white" style={{ fontFamily: "Nohemi" }}>
            {price}
          </span>
        </div>
        <p className="text-sm text-white/60 mt-2 font-medium">/mês</p>
      </div>

      <div className="mb-8 flex-grow relative z-10">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E42525]/20 flex items-center justify-center mt-0.5">
                <svg
                  className="w-3 h-3 text-[#E42525]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/90 text-sm font-medium flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubscribe}
        className="relative z-10 w-full py-4 px-6 text-base font-bold rounded-xl bg-gradient-to-r from-[#E42525] to-[#c41f1f] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide"
        style={{ fontFamily: "Nohemi" }}
      >
        {buttonText}
      </button>
    </div>
  )
}

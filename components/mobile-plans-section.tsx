"use client"

const mobilePlans = [
  { gb: "5 GB", price: "49,90" },
  { gb: "15 GB", price: "69,90" },
  { gb: "20 GB", price: "79,90" },
  { gb: "30 GB", price: "89,90" },
  { gb: "40 GB", price: "99,90" },
]

export default function MobilePlansSection() {
  return (
    <section id="telefonia" className="py-12 md:py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#000347] mb-4" style={{ fontFamily: "Nohemi" }}>
            Planos de Telefonia Móvel
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Internet 4G/5G com WhatsApp e ligações ilimitadas, sem fidelidade.
          </p>
        </div>

        {/* Mobile Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {mobilePlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#000347] rounded-2xl p-6 flex flex-col justify-between card-shadow card-shadow-hover transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#000347] mb-2" style={{ fontFamily: "Nohemi" }}>
                  {plan.gb}
                </h3>
                <p className="text-2xl font-bold text-[#E42525]" style={{ fontFamily: "Nohemi" }}>
                  R$ {plan.price}
                  <span className="text-sm text-gray-600 font-normal">/mês</span>
                </p>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">WhatsApp ilimitado</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">Ligações ilimitadas</span>
                </div>
              </div>

              <button className="w-full btn-outline-blue">Eu quero</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

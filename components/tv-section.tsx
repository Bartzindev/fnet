"use client"

export default function TVSection() {
  const tvPlans = [
    {
      name: "TV Light",
      price: "29,90",
      description: "Pacote básico com os principais canais de entretenimento",
    },
    {
      name: "TV Plus",
      price: "69,90",
      description: "Pacote premium com canais premium e serviços adicionais",
    },
  ]

  return (
    <section id="tv" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#000347] mb-4" style={{ fontFamily: "Nohemi" }}>
            Planos de Canais de TV
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Escolha o pacote ideal para o seu entretenimento.
          </p>
        </div>

        {/* TV Plans Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Plans */}
          <div className="space-y-6">
            {tvPlans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl card-shadow card-shadow-hover p-8 border-l-4 border-[#E42525] transition-all"
              >
                <h3 className="text-3xl font-bold text-[#000347] mb-2" style={{ fontFamily: "Nohemi" }}>
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{plan.description}</p>
                <p className="text-4xl font-bold text-[#E42525] mb-6" style={{ fontFamily: "Nohemi" }}>
                  R$ {plan.price}
                  <span className="text-sm text-gray-600 font-normal">/mês</span>
                </p>
                <button className="btn-primary">Contratar Agora</button>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="bg-[#F5F6FA] rounded-2xl overflow-hidden h-96 md:h-full min-h-96 flex items-center justify-center">
              <img
                src="/smart-tv-with-streaming-apps.jpg"
                alt="Serviços de TV"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Streaming apps badges */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 justify-center">
              {["Netflix", "Prime", "Disney+", "Globo"].map((app) => (
                <div
                  key={app}
                  className="bg-white/95 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold text-[#000347] card-shadow"
                >
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

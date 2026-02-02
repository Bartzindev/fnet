"use client"

export default function AppSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000347] mb-4 md:mb-6"
              style={{ fontFamily: "Nohemi" }}
            >
              App Fernando Net
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Baixe agora e tenha tudo na palma da sua mão: 2ª via, pagamentos, suporte e teste de velocidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="#" className="btn-outline-blue !text-[#000347] !border-[#000347] text-sm md:text-base">
                Google Play
              </a>
              <a href="#" className="btn-outline-blue !text-[#000347] !border-[#000347] text-sm md:text-base">
                Apple Store
              </a>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 aspect-video md:aspect-auto h-96">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-4">📱</div>
                    <p className="text-lg font-semibold">App Interface</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

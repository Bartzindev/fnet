"use client"

import Image from "next/image"

export default function BenefitsSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background with phone image */}
      <div className="absolute inset-0">
        <Image
          src="/images/captura-20de-20tela-202025-11-13-20a-cc-80s-2012.png"
          alt="App Fernando Net"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B4E]/95 via-[#2D1B4E]/80 to-[#2D1B4E]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-10 md:mb-12 leading-tight"
            style={{ fontFamily: "Nohemi" }}
          >
            Praticidade na palma
            <br />
            da sua mão!
          </h2>

          {/* Benefits List */}
          <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
            {/* Solicitar Atendimento */}
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E42525] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl md:text-2xl text-white font-medium">Solicitar Atendimento</span>
            </div>

            {/* Realizar pagamentos */}
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E42525] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 10h20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl md:text-2xl text-white font-medium">Realizar pagamentos</span>
            </div>

            {/* Testar Velocidade */}
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#E42525] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 2v10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.4 6.6a9 9 0 1 1-12.77.04" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl md:text-2xl text-white font-medium">Testar Velocidade</span>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="space-y-4">
            <p className="text-yellow-400 text-base md:text-lg font-semibold">
              Baixe agora e tenha tudo na palma
              <br />
              da sua mão:
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Disponível no Google Play"
                  width={140}
                  height={48}
                  className="h-11 md:h-12 w-auto"
                />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Disponível na App Store"
                  width={140}
                  height={48}
                  className="h-11 md:h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

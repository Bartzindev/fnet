"use client"

const apps = [
  { name: "HBO Max", icon: "🎬" },
  { name: "Paramount+", icon: "📺" },
  { name: "Looke", icon: "🎯" },
  { name: "WatchTV", icon: "📹" },
  { name: "PlayHub", icon: "▶️" },
]

export default function SVASection() {
  return (
    <section className="py-12 md:py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#000347] mb-4" style={{ fontFamily: "Nohemi" }}>
            Serviços Adicionais Disponíveis
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Complemente sua experiência com os melhores serviços de streaming
          </p>
        </div>

        {/* Apps Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl card-shadow card-shadow-hover cursor-pointer transition-all"
            >
              <span className="text-4xl mb-2">{app.icon}</span>
              <span className="text-xs md:text-sm font-semibold text-[#000347] text-center px-2">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

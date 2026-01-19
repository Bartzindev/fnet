"use client"

import { useState } from "react"

export default function ConsultSection() {
  const [cep, setCep] = useState("")
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)

  const handleConsult = () => {
    // Simulate availability check
    setIsAvailable(Math.random() > 0.3)
  }

  return (
    <section id="consultar" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-[#000347] mb-6" style={{ fontFamily: "Nohemi" }}>
          Consultar Disponibilidade
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Digite seu CEP para verificar se a Fernando Net está disponível em sua região.
        </p>

        <div className="bg-white rounded-2xl card-shadow p-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Digite seu CEP (XXXXX-XXX)"
              className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E42525] focus:border-transparent transition-all"
            />
            <button onClick={handleConsult} className="btn-primary text-base whitespace-nowrap">
              Consultar
            </button>
          </div>

          {isAvailable !== null && (
            <div
              className={`p-6 rounded-lg transition-all ${
                isAvailable ? "bg-green-50 border-2 border-green-200" : "bg-red-50 border-2 border-red-200"
              }`}
            >
              <p className={`text-lg font-semibold ${isAvailable ? "text-green-800" : "text-red-800"}`}>
                {isAvailable
                  ? "✓ Ótimo! A Fernando Net está disponível em sua região!"
                  : "✗ Desculpe, ainda não estamos disponíveis em sua região."}
              </p>
              {isAvailable && (
                <p className="text-green-700 mt-2">Clique no botão abaixo para contratar nossos serviços.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

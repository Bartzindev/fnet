"use client"

import { useState, useEffect, FormEvent } from "react"
import { X } from 'lucide-react'

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  comboDetails?: string
}

export default function SubscriptionModal({ isOpen, onClose, comboDetails }: SubscriptionModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cpf: "",
    endereco: "",
    combo: "",
  })

  useEffect(() => {
    if (comboDetails) {
      setFormData(prev => ({
        ...prev,
        combo: comboDetails
      }))
    }
  }, [comboDetails])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const message = `🔥 NOVA ASSINATURA DE COMBO 🔥

📌 *Dados do Cliente*
👤 Nome: ${formData.nome}
📞 Telefone: ${formData.telefone}
🧾 CPF: ${formData.cpf}
🏠 Endereço: ${formData.endereco}

📌 *Combo escolhido*
💼 ${formData.combo}

Por favor, confirmar prosseguimento.`

    const whatsappUrl = `https://wa.me/5561993732005?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    
    // Reset form and close modal
    setFormData({
      nome: "",
      telefone: "",
      cpf: "",
      endereco: "",
      combo: comboDetails || "",
    })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        <div
          className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-4xl my-auto bg-[#000347] rounded-2xl sm:rounded-3xl shadow-2xl relative max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            type="button"
            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-[70] w-7 h-7 sm:w-8 sm:h-8 bg-[#E42525] hover:bg-[#c41f1f] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Fechar"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Background animations matching combo builder section */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#000347] via-[#000347] to-[#0a0a52]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="absolute top-1/4 left-[15%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-float-slow" />
            <div className="absolute bottom-1/4 right-[15%] w-96 h-96 bg-blue-400/8 rounded-full blur-[140px] animate-float-slow-reverse" />
          </div>

          <div className="relative z-10 p-4 sm:p-5 md:p-6 lg:p-8 overflow-y-auto max-h-[90vh]">
            {/* Combo escolhido */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 lg:p-7">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 md:space-y-3 lg:space-y-3.5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                  {/* Nome completo */}
                  <div>
                    <label htmlFor="nome" className="block text-[#000347] font-semibold mb-1.5 text-xs sm:text-sm md:text-sm">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-[#E42525] focus:ring-2 focus:ring-[#E42525]/20 outline-none transition-all text-[#000347] text-sm sm:text-base"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="telefone" className="block text-[#000347] font-semibold mb-1.5 text-xs sm:text-sm md:text-sm">
                      Telefone para contato *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-[#E42525] focus:ring-2 focus:ring-[#E42525]/20 outline-none transition-all text-[#000347] text-sm sm:text-base"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                  {/* CPF */}
                  <div>
                    <label htmlFor="cpf" className="block text-[#000347] font-semibold mb-1.5 text-xs sm:text-sm md:text-sm">
                      CPF *
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      required
                      value={formData.cpf}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-[#E42525] focus:ring-2 focus:ring-[#E42525]/20 outline-none transition-all text-[#000347] text-sm sm:text-base"
                      placeholder="000.000.000-00"
                    />
                  </div>

                  {/* Endereço */}
                  <div>
                    <label htmlFor="endereco" className="block text-[#000347] font-semibold mb-1.5 text-xs sm:text-sm md:text-sm">
                      Endereço completo *
                    </label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      required
                      value={formData.endereco}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-[#E42525] focus:ring-2 focus:ring-[#E42525]/20 outline-none transition-all text-[#000347] text-sm sm:text-base"
                      placeholder="Rua, número, bairro, cidade - UF"
                    />
                  </div>
                </div>

                {/* Combo escolhido */}
                <div>
                  <label htmlFor="combo" className="block text-[#000347] font-semibold mb-1.5 text-xs sm:text-sm md:text-sm">
                    Combo escolhido *
                  </label>
                  <textarea
                    id="combo"
                    name="combo"
                    readOnly
                    value={formData.combo}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-200 bg-gray-50 text-[#000347] cursor-not-allowed text-sm sm:text-base resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E42525] hover:bg-[#c41f1f] text-white font-bold py-2.5 sm:py-3 md:py-3.5 rounded-full text-sm sm:text-base md:text-lg uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-xl mt-3 sm:mt-4"
                  style={{ fontFamily: "Nohemi" }}
                >
                  Enviar pelo WhatsApp
                </button>

                <p className="text-center text-gray-500 text-[10px] sm:text-xs md:text-sm mt-2">
                  * Campos obrigatórios. Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

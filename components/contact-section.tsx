"use client"

import type React from "react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contato" className="py-12 md:py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#000347] mb-6" style={{ fontFamily: "Nohemi" }}>
              Entre em Contato
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Tem alguma dúvida? Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em contato.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#000347] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E42525] focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#000347] mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E42525] focus:border-transparent transition-all"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#000347] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E42525] focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#000347] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E42525] focus:border-transparent transition-all"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Enviar
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-300 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#E42525]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="text-gray-700">0800 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#E42525]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16.5c-1.5-1.5-2.5-.5-3.5.5-1 1 0 2-2 4-2 2-3 1-4.5-1s-2.5-2.5-1-4c1-1 2-2.5.5-3.5C9 10.5 8 11 6.5 9.5c-1.5-1.5-2.5-2.5-3.5-1s-2 3-1 4c3 3 6 6 12 12 1 1 7-1 4-2.5z" />
                </svg>
                <span className="text-gray-700">WhatsApp: (XX) XXXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#E42525]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-gray-700">suporte@fernandonet.com.br</span>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div>
            <div className="bg-[#F5F6FA] rounded-2xl overflow-hidden h-full min-h-96 card-shadow flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-[#000347] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
                </svg>
                <p className="text-[#000347] font-semibold" style={{ fontFamily: "Nohemi" }}>
                  Google Maps
                </p>
                <p className="text-gray-600 text-sm mt-2">Localização de nossa filial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

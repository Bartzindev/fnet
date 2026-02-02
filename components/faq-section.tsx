"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "Meu boleto venceu, posso pagar mesmo assim?",
      answer:
        "Sim, você pode pagar seu boleto mesmo após o vencimento. No entanto, pode haver juros e multa conforme a legislação. Recomendamos pagar o quanto antes para evitar suspensão do serviço.",
    },
    {
      question: "Existe limite de downloads e uploads?",
      answer:
        "Não, nossos planos não têm limite de downloads e uploads. Você tem liberdade total para usar sua internet conforme necessário.",
    },
    {
      question: "Quanto tempo leva para fazer a instalação?",
      answer:
        "A instalação é realizada em até 24 horas após a confirmação do pedido. Você receberá um contato para agendar a data e horário que melhor se adequa.",
    },
    {
      question: "Como solicitar suporte técnico?",
      answer:
        "Você pode solicitar suporte técnico através do nosso aplicativo, site, WhatsApp. Nosso time está disponível para ajudar.",
    },
    {
      question: "Como baixar o aplicativo?",
      answer:
        'O aplicativo Fernando Net está disponível tanto na Google Play quanto na App Store. Basta buscar por "Fernando Net" ou acessar os links disponíveis em nosso site.',
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#F5F6FA] pb-24 md:pb-16">
      <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#000347] mb-3 md:mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-base md:text-lg">Encontre respostas para as dúvidas mais comuns</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 md:space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#000347] text-left">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-[#E42525] flex-shrink-0 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === idx && (
                <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

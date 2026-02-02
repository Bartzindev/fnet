"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [cpf, setCpf] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }
    return value
  }

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value)
    setCpf(formatted)
    setError("") // Clear error on input
  }

  const validateCPF = (cpf: string) => {
    const numbers = cpf.replace(/\D/g, "")
    return numbers.length === 11
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateCPF(cpf)) {
      setError("Por favor, insira um CPF válido.")
      return
    }

    setIsLoading(true)

    try {
      const cpfNumbers = cpf.replace(/\D/g, "")
      const response = await fetch(`https://fernandonetgo.sgp.net.br/api/customer?cpf=${cpfNumbers}`, {
        headers: {
          Authorization: "Bearer 85c5afbd-6f3a-43ff-b0c1-828bfa2460bf",
        },
      })

      if (response.ok) {
        const customerData = await response.json()

        // Save customer data to localStorage
        localStorage.setItem("customerData", JSON.stringify(customerData))

        // Redirect to dashboard
        router.push("/dashboard")
      } else {
        setError("CPF não encontrado. Verifique os dados e tente novamente.")
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-b from-[#C41E1E] via-[#E42525] to-[#FF6B6B] animate-fade-in">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 animate-slide-up">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image src="/logofnet.png" alt="Fernando Net" fill className="object-contain" priority />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm mb-2" style={{ fontFamily: "Nohemi" }}>
            Bem-vindo(a)
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#000347]" style={{ fontFamily: "Nohemi" }}>
            Acessar Área do Cliente
          </h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* CPF Input */}
          <div>
            <label
              htmlFor="cpf"
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{ fontFamily: "Nohemi" }}
            >
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              value={cpf}
              onChange={handleCPFChange}
              placeholder="000.000.000-00"
              maxLength={14}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#E42525] focus:outline-none transition-colors text-lg"
              style={{ fontFamily: "Nohemi" }}
              disabled={isLoading}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 animate-fade-in">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#E42525] hover:bg-[#C41E1E] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "Nohemi" }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Entrando...</span>
              </div>
            ) : (
              "Entrar"
            )}
          </button>

          {/* Help Link */}
          <div className="text-center">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-[#E42525] transition-colors"
              style={{ fontFamily: "Nohemi" }}
            >
              Problemas para acessar?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

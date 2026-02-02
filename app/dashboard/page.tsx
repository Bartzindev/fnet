"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface CustomerData {
  nome?: string
  cpf?: string
  contrato?: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [customerData, setCustomerData] = useState<CustomerData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const data = localStorage.getItem("customerData")

    if (!data) {
      router.push("/login")
      return
    }

    try {
      const parsed = JSON.parse(data)
      setCustomerData(parsed)
    } catch (err) {
      router.push("/login")
    } finally {
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("customerData")
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-[#E42525] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#000347]" style={{ fontFamily: "Nohemi" }}>
              Painel do Cliente
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#E42525] text-white rounded-lg hover:bg-[#C41E1E] transition-colors"
              style={{ fontFamily: "Nohemi" }}
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#000347] mb-6" style={{ fontFamily: "Nohemi" }}>
            Bem-vindo(a), {customerData?.nome || "Cliente"}!
          </h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">CPF</p>
              <p className="text-lg font-semibold text-gray-800">{customerData?.cpf || "N/A"}</p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Contrato</p>
              <p className="text-lg font-semibold text-gray-800">{customerData?.contrato || "N/A"}</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              style={{ fontFamily: "Nohemi" }}
            >
              Voltar ao site
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

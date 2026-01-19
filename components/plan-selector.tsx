"use client"

interface PlanSelectorProps {
  activeTab: "internet" | "mobile"
  onTabChange: (tab: "internet" | "mobile") => void
}

export default function PlanSelector({ activeTab, onTabChange }: PlanSelectorProps) {
  return (
    <div className="flex justify-center mb-8 md:mb-16 gap-2 md:gap-4">
      <button
        onClick={() => onTabChange("internet")}
        className={`px-4 py-1.5 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 border text-sm md:text-base ${
          activeTab === "internet"
            ? "bg-[#000347] text-white border-[#000347] shadow-md"
            : "bg-white text-[#000347] border-[#000347] hover:bg-[#F5F6FA]"
        }`}
        style={{ fontFamily: "Nohemi" }}
      >
        INTERNET
      </button>
      <button
        onClick={() => onTabChange("mobile")}
        className={`px-4 py-1.5 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 border text-sm md:text-base ${
          activeTab === "mobile"
            ? "bg-[#000347] text-white border-[#000347] shadow-md"
            : "bg-white text-[#000347] border-[#000347] hover:bg-[#F5F6FA]"
        }`}
        style={{ fontFamily: "Nohemi" }}
      >
        CHIP MÓVEL
      </button>
    </div>
  )
}

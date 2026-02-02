import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import SmoothScroll from "@/components/smooth-scroll"

export const metadata: Metadata = {
  title: "Fernando Net - Internet, Telefonia e TV",
  description:
    "Conexão rápida e confiável para sua casa e negócio. Internet, telefonia móvel e TV com a melhor qualidade.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          href="/images/nohemi-semibold-bf6438cc57db2ff.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/images/nohemi-bold-bf6438cc577b524.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}

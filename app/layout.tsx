import type React from "react"
import "@/app/globals.css"
import { Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
})

export const metadata = {
  title: "Isa's Kombucha - Premium Fermented Tea",
  description:
    "Discover Isa's premium kombucha, handcrafted in small batches using only the finest organic ingredients.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-general-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

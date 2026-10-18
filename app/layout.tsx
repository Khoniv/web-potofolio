import type { Metadata } from "next"
import { JetBrains_Mono, Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://khonifzakaria.dev"),
  title: {
    default: "Khonif Zakaria // Cyberpunk Developer Portfolio",
    template: "%s | Khonif Zakaria",
  },
  description: "Personal portfolio of Khonif Zakaria. Informatics graduate, Cyberpunk Developer specializing in Next.js, React, Laravel, Flutter, C#, and Unity Engine.",
  keywords: ["Khonif Zakaria", "Cyberpunk Portfolio", "Software Developer", "Web Developer", "Game Developer", "Unity", "Next.js", "React", "Laravel", "Flutter"],
  authors: [{ name: "Khonif Zakaria" }],
  creator: "Khonif Zakaria",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Khonif Zakaria // Cyberpunk Developer",
    description: "Personal portfolio of Khonif Zakaria. Informatics graduate, Software, Web, Mobile, and Game Developer.",
    siteName: "Khonif Zakaria Portfolio",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Khonif Zakaria Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khonif Zakaria // Cyberpunk Developer",
    description: "Personal portfolio of Khonif Zakaria. Informatics graduate, Software, Web, Mobile, and Game Developer.",
    images: ["/images/hero.jpg"],
    creator: "@khonifzakaria",
  },
  icons: {
    icon: "/images/hero.jpg",
    shortcut: "/images/hero.jpg",
    apple: "/images/hero.jpg",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#00f0ff] selection:text-black`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

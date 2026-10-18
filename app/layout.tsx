import type { Metadata } from "next"
import Script from "next/script"
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://khonifzakaria.dev"),
  title: {
    default: "Khonif Zakaria, S.Kom., Software Engineer",
    template: "%s | Khonif Zakaria",
  },
  description: "Personal portfolio of Khonif Zakaria. Informatics graduate (S.Kom.) specializing in Next.js, React, Laravel, Flutter, C#, and Unity Engine.",
  keywords: ["Khonif Zakaria", "Software Developer", "Web Developer", "Game Developer", "Unity", "Next.js", "React", "Laravel", "Flutter"],
  authors: [{ name: "Khonif Zakaria" }],
  creator: "Khonif Zakaria",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Khonif Zakaria, S.Kom., Software Engineer",
    description: "Personal portfolio of Khonif Zakaria. Informatics graduate, Software, Web, Mobile, and Game Developer.",
    siteName: "Khonif Zakaria Portfolio",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Khonif Zakaria Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khonif Zakaria, S.Kom., Software Engineer",
    description: "Personal portfolio of Khonif Zakaria. Informatics graduate, Software, Web, Mobile, and Game Developer.",
    images: ["/images/og-cover.jpg"],
    creator: "@khonifzakaria",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
    <html lang="id" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* Set tema sebelum hydration untuk menghindari kedip (baca localStorage / preferensi OS) */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('khonif-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Khonif Zakaria",
              jobTitle: "Software Developer",
              description:
                "Informatics graduate specializing in Next.js, React, Laravel, Flutter, C#, and Unity Engine.",
              sameAs: [
                "https://github.com/Khoniv",
                "https://www.linkedin.com/in/khonif-zakaria",
              ],
            }),
          }}
        />
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

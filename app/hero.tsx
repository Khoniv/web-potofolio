"use client"
import { useEffect, useState, useMemo } from "react"
import FadeRight from "@/components/animations/FadeRight"
import FadeLeft from "@/components/animations/FadeLeft"
import PhotoCard from "@/components/PhotoCard"

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const texts = useMemo(() => [
    "Fullstack Developer",
    "Game Developer",
    "Mobile Developer",
    "Software Engineer"
  ], [])

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true)
      setSubIndex(texts[0].length)
    }
  }, [texts])

  useEffect(() => {
    if (reducedMotion) return
    const currentIndex = index % texts.length
    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex]
      if (!deleting && subIndex < currentText.length) {
        setSubIndex(subIndex + 1)
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1)
      } else if (!deleting && subIndex === currentText.length) {
        setDeleting(true)
      } else if (deleting && subIndex === 0) {
        setDeleting(false)
        setIndex((currentIndex + 1) % texts.length)
      }
    }, deleting ? 40 : 90)
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, texts, reducedMotion])

  return (
    <section id="home" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-14 sm:pb-16 md:pb-20">
      {/* Soft accent glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[380px] bg-accent/[0.08] dark:bg-accent/[0.12] blur-[130px] rounded-full" aria-hidden="true" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        {/* Left: intro */}
        <div className="lg:col-span-7">
          <FadeLeft>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/60 backdrop-blur-md border border-border shadow-sm text-[12px] font-medium text-muted mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for work
            </div>

            <p className="font-mono text-[13px] text-muted mb-3"><span className="text-accent">//</span> hello world, i&apos;m</p>
            <h1 className="font-display font-bold tracking-tight text-ink text-balance text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.05]">
              Khonif Zakaria
            </h1>

            {/* Typewriter */}
            <div className="mt-4 flex items-center gap-2 font-mono text-[15px] sm:text-base md:text-lg" aria-live="polite">
              <span className="text-accent font-semibold">$</span>
              <span className="text-ink font-medium">
                {texts[index].substring(0, subIndex)}
              </span>
              {!reducedMotion && <span className="animate-cursor text-accent font-bold">▍</span>}
            </div>

            <p className="mt-5 max-w-xl text-muted text-[15px] sm:text-base leading-relaxed">
              Fresh informatics graduate from Universitas Amikom Purwokerto, GPA 3.78.
              I build web apps, mobile apps, desktop systems, and 3D games with Unity.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
              <button
                onClick={() => handleScroll("projects")}
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-ink/90 text-paper text-sm font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(22,22,26,0.18)]"
              >
                View projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <a
                href="/Khonif_Zakaria_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-surface border border-border text-sm font-semibold px-6 py-3.5 rounded-xl hover:border-ink transition-all duration-300 hover:-translate-y-0.5"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-mono text-[11px] tracking-[0.2em] text-faint mb-3"><span className="text-accent">$</span> find me online</p>
              <div className="flex flex-wrap gap-2.5">
                {socialMediaList.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className="p-2.5 rounded-xl bg-surface border border-border text-muted hover:text-accent hover:border-accent transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeLeft>
        </div>

        {/* Right: photo */}
        <div className="lg:col-span-5">
          <FadeRight>
            <div className="max-w-[320px] sm:max-w-[360px] mx-auto pb-6">
              <PhotoCard priority />
            </div>
          </FadeRight>
        </div>

      </div>
    </section>
  )
}

const socialMediaList = [
  {
    name: "GitHub",
    href: "https://github.com/Khoniv",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khonif-zakaria",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:oniefzk11@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281585221246",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.646 5.634l-.999 3.648 3.842-.981z" />
      </svg>
    ),
  },
]

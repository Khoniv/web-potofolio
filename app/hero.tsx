"use client"
import Image from "next/image"
import { useEffect, useState, useMemo } from "react"
import FadeRight from "@/components/animations/FadeRight"
import FadeLeft from "@/components/animations/FadeLeft"

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const texts = useMemo(() => [
    "Fullstack Developer",
    "Game Developer",
    "Mobile Developer",
    "Software Engineer"
  ], [])

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const currentIndex = index % texts.length

    const timeout = setTimeout(
      () => {
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
      },
      deleting ? 45 : 100,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, texts])

  return (
    <>
      <section id="home" className="w-full max-w-7xl mx-auto cursor-default grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center px-4 sm:px-6 md:px-12 pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden relative">
        
        {/* Cyber Background Glow */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff007f]/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Left Column: Bio & Actions */}
        <div className="md:col-span-7 z-10">
          <FadeLeft>
            <div className="flex flex-col gap-3.5 sm:gap-4">
              
              {/* Terminal status badge */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#090e1c] border border-[#00f0ff]/30 text-[11px] sm:text-xs font-mono text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_8px_#00ff66]"></span>
                  <span>ROOT_ACCESS // LEVEL 999</span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-[#7f99b8]">
                  PING: 14ms | 100% OPERATIONAL
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-white font-mono">
                  &lt;HELLO WORLD /&gt;
                  <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38f4ff] to-[#ff007f]">
                    I&apos;m Khonif.
                  </span>
                </h1>
              </div>

              {/* Typewriter role */}
              <div className="flex items-center gap-2 font-mono bg-[#090e1c]/80 border border-[#00f0ff]/25 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg w-fit max-w-full shadow-[0_0_15px_rgba(0,240,255,0.08)]">
                <span className="text-[#ff007f] font-bold text-xs sm:text-sm md:text-base">$</span>
                <span className="text-[11px] sm:text-xs md:text-sm text-[#7f99b8]">role =</span>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#00f0ff] tracking-tight">
                  &quot;{texts[index].substring(0, subIndex)}&quot;
                </span>
                <span className="animate-cursor text-[#00f0ff] font-bold text-sm sm:text-base md:text-lg">_</span>
              </div>

              {/* Description */}
              <div className="max-w-xl mt-1 sm:mt-2">
                <p className="text-[#a1b8d4] text-xs sm:text-sm md:text-base leading-relaxed">
                  Informatics Graduate (Cumlaude, GPA 3.78) from Universitas Amikom Purwokerto. 
                  Specializing in fullstack web architecture, responsive mobile applications, C# desktop systems, and interactive 3D game development with Unity.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3.5 mt-3 sm:mt-4 font-mono">
                <button 
                  onClick={() => handleScroll("projects")} 
                  className="cursor-pointer text-xs sm:text-sm font-bold bg-[#00f0ff] hover:bg-[#38f4ff] text-black px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg flex flex-row items-center justify-center gap-2.5 sm:gap-3 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] hover:-translate-y-1 transition-all duration-300"
                >
                  <span>EXPLORE_PROJECTS</span>
                  <svg className="w-4 h-4 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <a 
                  href="/Khonif_Zakaria_CV.pdf" 
                  download 
                  className="cursor-pointer text-xs sm:text-sm font-bold border border-[#00f0ff]/40 hover:border-[#00f0ff] bg-[#090e1c] text-[#00f0ff] hover:text-white hover:bg-[#00f0ff]/10 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg flex flex-row items-center justify-center gap-2.5 sm:gap-3 hover:-translate-y-1 transition-all duration-300"
                >
                  <span>DOWNLOAD_CV.PDF</span>
                  <svg className="w-4 h-4 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>

              {/* Cyber Network Connect Icons */}
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#00f0ff]/20">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-widest font-mono text-[#7f99b8] mb-2.5 flex items-center gap-2">
                  <span className="text-[#ff007f]">//</span> NEURAL_NETWORK_LINKS:
                </div>
                <div className="flex flex-row flex-wrap gap-2.5 sm:gap-3">
                  {socialMediaList.map((item, index) => (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 sm:p-2.5 bg-[#090e1c] border border-[#00f0ff]/30 rounded-lg hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] text-[#a1b8d4] shadow-[0_0_12px_rgba(0,240,255,0.08)] hover:shadow-[0_0_18px_rgba(0,240,255,0.3)] transition-all duration-300" 
                      key={index} 
                      title={item.name}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </FadeLeft>
        </div>

        {/* Right Column: Holographic Avatar & Cyber Stats */}
        <div className="md:col-span-5 z-10 mt-4 md:mt-0 flex flex-col items-center">
          <FadeRight>
            <div className="flex flex-col items-center justify-center relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs lg:max-w-sm mx-auto">
              
              {/* Subtle Ambient Back-Glow Behind Photo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#00f0ff]/20 via-[#ff007f]/15 to-[#00ff66]/15 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Cyber Frame with seamless blending */}
              <div className="relative p-1.5 sm:p-2 rounded-2xl bg-[#090e1c]/90 border border-[#00f0ff]/35 shadow-[0_0_35px_rgba(0,240,255,0.18)] hover:border-[#00f0ff] transition-all duration-500 group w-full overflow-hidden backdrop-blur-md">
                
                {/* HUD Corner Accents */}
                <span className="absolute top-1 left-1 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-[#00f0ff] z-20"></span>
                <span className="absolute top-1 right-1 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-[#00f0ff] z-20"></span>
                <span className="absolute bottom-1 left-1 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-[#ff007f] z-20"></span>
                <span className="absolute bottom-1 right-1 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-[#00ff66] z-20"></span>

                {/* Inner Image Container with Soft Gradient Edge Mask */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#090e1c] via-[#050811] to-[#030509]">
                  <Image 
                    src="/images/khonif-informal.png" 
                    alt="Khonif Zakaria" 
                    width={560} 
                    height={700} 
                    priority 
                    className="object-cover object-top aspect-[4/5] w-full h-auto transition-all duration-700 group-hover:scale-102" 
                  />
                  
                  {/* Seamless blending overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/30 to-transparent opacity-75 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#090e1c] to-transparent pointer-events-none" />
                  
                  {/* Subtle Top & Lateral Vignette to blend studio gray with dark cyberpunk */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#00f0ff]/20 pointer-events-none rounded-xl" />

                  {/* Live Status Overlay Tag inside Portrait */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 bg-[#050811]/90 backdrop-blur-md border border-[#00f0ff]/30 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg font-mono text-[10px] sm:text-[11px] flex justify-between items-center text-[#7f99b8] z-10 shadow-lg">
                    <span className="text-[#00f0ff] font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_6px_#00ff66] animate-pulse" />
                      OPERATOR: KHONIF
                    </span>
                    <span className="text-[#00ff66] font-bold tracking-wider">AVAILABLE</span>
                  </div>
                </div>
              </div>

              {/* Floating Telemetry Stats */}
              <div className="w-full mt-3.5 sm:mt-5 flex flex-col gap-2 font-mono">
                {quickStatsList.map((stat, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between bg-[#090e1c]/90 border border-[#00f0ff]/30 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.08)] backdrop-blur-md hover:border-[#00f0ff] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                      <div className="p-1 sm:p-1.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 flex-shrink-0">
                        {stat.icon}
                      </div>
                      <span className="text-[11px] sm:text-xs text-white font-medium truncate">{stat.message}</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-[#00ff66] bg-[#00ff66]/10 px-1.5 py-0.5 rounded border border-[#00ff66]/20 flex-shrink-0">
                      [VERIFIED]
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </FadeRight>
        </div>

      </section>
    </>
  )
}

const socialMediaList = [
  {
    name: "GitHub",
    href: "https://github.com/Khoniv",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khonif-zakaria",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:oniefzk11@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281585221246",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.646 5.634l-.999 3.648 3.842-.981z" />
      </svg>
    ),
  },
]

const quickStatsList = [
  {
    message: "GPA 3.78 / 4.00 (Cumlaude)",
    icon: (
      <svg className="w-4 h-4 text-[#00f0ff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    message: "Informatics Graduate (S1)",
    icon: (
      <svg className="w-4 h-4 text-[#00f0ff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-4.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    message: "Fullstack, Mobile & Game Dev",
    icon: (
      <svg className="w-4 h-4 text-[#00f0ff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M5 12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2M5 12h14m-7 4v3m-4 0h8" />
      </svg>
    ),
  },
]

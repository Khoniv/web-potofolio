"use client"
import { useState, useEffect } from "react"
import FadeDown from "./animations/FadeDown"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)

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
    setMounted(true)
    document.documentElement.classList.add("dark")
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const handleScroll = () => {
      let current: string | null = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-2.5 sm:top-3 md:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none w-full font-mono">
      <div className="w-full max-w-5xl pointer-events-auto">
        <FadeDown>
          <div className="relative flex items-center justify-between py-2 sm:py-2.5 md:py-3 px-3.5 sm:px-5 md:px-7 bg-[#090e1c]/85 backdrop-blur-xl border border-[#00f0ff]/30 shadow-[0_0_25px_rgba(0,240,255,0.15)] rounded-xl transition-all duration-300">
            
            {/* Tech Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff66] shadow-[0_0_8px_#00ff66]"></span>
              </span>
              <button 
                onClick={() => handleScroll("home")}
                className="text-left group cursor-pointer"
              >
                <span className="text-sm sm:text-base md:text-lg font-black tracking-widest text-white group-hover:text-[#00f0ff] transition-colors">
                  NivDev<span className="text-[#00f0ff]">.exe</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] text-[#7f99b8] ml-2 font-mono">
                  [SYS:READY]
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex-row gap-2 xl:gap-5 hidden lg:flex items-center">
              {shortCut.map((item, index) => {
                const isActive = activeSection === item.name.toLowerCase()
                return (
                  <button 
                    onClick={() => handleScroll(item.link)} 
                    key={index} 
                    className={`
                      cursor-pointer text-[11px] xl:text-xs uppercase tracking-wider xl:tracking-widest font-mono transition-all duration-200 ease-in-out px-2 xl:px-2.5 py-1 rounded relative
                      ${isActive 
                        ? "text-[#00f0ff] font-bold bg-[#00f0ff]/10 border-b-2 border-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.2)]" 
                        : "text-[#7f99b8] hover:text-white hover:bg-white/5"}
                    `}
                  >
                    <span className="text-[#ff007f] mr-1 opacity-70">#</span>
                    {item.name}
                  </button>
                )
              })}
            </nav>

            {/* Quick Status & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 rounded bg-[#050811] border border-[#00f0ff]/20 text-[10px] sm:text-[11px] font-mono text-[#00f0ff]">
                <span className="text-[#ff007f] font-bold">&gt;_</span>
                <span>STATUS: 200 OK</span>
              </div>

              <button 
                className="lg:hidden text-[#00f0ff] p-1.5 sm:p-2 hover:bg-[#00f0ff]/10 rounded border border-[#00f0ff]/30 transition-colors cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Cyber Dropdown */}
            <div className={`${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"} lg:hidden transform absolute top-14 sm:top-16 right-0 z-50 origin-top-right transition-all duration-200 ease-out w-60 sm:w-64 max-w-[calc(100vw-2rem)]`}>
              <div className="flex flex-col gap-1.5 sm:gap-2 bg-[#090e1c] border border-[#00f0ff]/40 p-4 sm:p-5 rounded-xl shadow-[0_0_35px_rgba(0,240,255,0.25)] backdrop-blur-2xl">
                <div className="text-[10px] font-mono text-[#7f99b8] uppercase tracking-widest pb-2 border-b border-[#00f0ff]/20 mb-1 sm:mb-2">
                  // NAVIGATION_ROUTES
                </div>
                {shortCut.map((item, index) => (
                  <button 
                    onClick={() => { handleScroll(item.link); setIsOpen(false); }} 
                    key={index} 
                    className={`
                      text-left cursor-pointer text-xs uppercase tracking-widest py-2 px-3 rounded font-mono transition-colors
                      ${activeSection === item.name.toLowerCase() 
                        ? "text-[#00f0ff] bg-[#00f0ff]/15 font-bold border-l-2 border-[#00f0ff]" 
                        : "text-[#7f99b8] hover:text-white hover:bg-white/5"}
                    `}
                  >
                    <span className="text-[#ff007f] mr-2">0{index + 1}.</span>
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </FadeDown>
      </div>
    </div>
  )
}

const shortCut = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Experience", link: "experience" },
  { name: "Skills", link: "techstack" },
  { name: "Projects", link: "projects" },
  { name: "Contacts", link: "contacts" },
]

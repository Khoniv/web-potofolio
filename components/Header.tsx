"use client"
import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "techstack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = (id: string) => {
    setIsOpen(false)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = "home"
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop
        if (window.scrollY >= top - window.innerHeight / 3) {
          current = section.getAttribute("id") || current
        }
      })
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4">
      <nav
        aria-label="Main navigation"
        className={`w-full max-w-4xl rounded-2xl border bg-surface/70 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "border-border shadow-[0_8px_30px_rgba(22,22,26,0.10)]" : "border-transparent shadow-none"
        }`}
      >
        <div className="flex items-center justify-between pl-5 pr-3 sm:pr-4 py-2.5">
          <button
            onClick={() => handleScroll("home")}
            className="font-display text-[17px] font-bold tracking-tight text-ink cursor-pointer py-1"
            aria-label="Back to top"
          >
            niv<span className="text-accent">.dev</span>
          </button>

          {/* Right group: links + divider + theme toggle (+ hamburger on mobile) */}
          <div className="flex items-center gap-1.5">
            <div className="hidden md:flex items-center gap-0.5">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                    activeSection === link.id ? "text-ink bg-ink/[0.05]" : "text-muted hover:text-ink hover:bg-ink/[0.04]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute left-3.5 right-3.5 -bottom-px h-0.5 rounded-full bg-accent" />
                  )}
                </button>
              ))}
            </div>
            <span className="hidden md:block w-px h-5 bg-border mx-1.5" aria-hidden="true" />
            <ThemeToggle />
            <button
              className="md:hidden p-2 text-ink cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 pt-1 flex flex-col gap-1 border-t border-border">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-ink hover:bg-ink/[0.05]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

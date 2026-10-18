"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import SectionHeader from "@/components/SectionHeader"

interface Tech {
  name: string
  icon: string
  category: string
  description: string
}

export default function TechStack() {
  const [selected, setSelected] = useState<Tech | null>(null)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selected])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section id="techstack" className="w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 border-t border-border">
        <SectionHeader
          index="04"
          subtitle="Tech Stack"
          title="Tools I work with"
          description="One toolbox, no silos. Click any technology for a quick overview."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {technologies.map((tech, i) => (
            <motion.button
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
              onClick={() => setSelected(tech)}
              className="group cursor-pointer rounded-2xl bg-surface border border-border p-4 sm:p-5 flex flex-col items-center gap-3 hover:border-accent/50 hover:shadow-[0_12px_32px_rgba(46,75,255,0.10)] hover:-translate-y-1 transition-all duration-300 text-center"
              aria-label={`${tech.name} — klik untuk keterangan`}
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {tech.icon ? (
                  <img src={tech.icon} alt="" aria-hidden="true" className="w-full h-full object-contain" loading="lazy" />
                ) : (
                  <span className="w-full h-full flex items-center justify-center font-display font-bold text-lg text-accent bg-accent-soft rounded-xl">
                    {tech.name.charAt(0)}
                  </span>
                )}
              </span>
              <span>
                <span className="block text-[13px] sm:text-sm font-semibold text-ink leading-tight">
                  {tech.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-faint mt-1">
                  {tech.category}
                </span>
              </span>
            </motion.button>
          ))}
        </div>

        {/* Detail modal */}
        <AnimatePresence>
          {selected && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label={`Tentang ${selected.name}`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                className="relative bg-surface border border-border rounded-2xl w-full max-w-sm p-6 sm:p-7 shadow-[0_24px_80px_rgba(22,22,26,0.18)]"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-muted hover:text-ink hover:bg-ink/[0.06] transition-colors cursor-pointer"
                  aria-label="Tutup"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                    {selected.icon ? (
                      <img src={selected.icon} alt="" aria-hidden="true" className="w-full h-full object-contain" />
                    ) : (
                      <span className="w-full h-full flex items-center justify-center font-display font-bold text-2xl text-accent bg-accent-soft rounded-2xl">
                        {selected.name.charAt(0)}
                      </span>
                    )}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink tracking-tight">{selected.name}</h3>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent mt-0.5">
                      {selected.category}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">{selected.description}</p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

const technologies: Tech[] = [
  { name: "React", icon: "/icons/react.svg", category: "Frontend", description: "Library JavaScript untuk membangun user interface berbasis komponen yang reaktif dan modular." },
  { name: "Next.js", icon: "/icons/nextjs.svg", category: "Frontend", description: "Framework React untuk aplikasi web production — server-side rendering, static generation, dan App Router." },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "Frontend", description: "JavaScript dengan type-safety: menangkap bug lebih awal dan membuat codebase besar lebih aman dikelola." },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", category: "Frontend", description: "Utility-first CSS framework untuk styling yang cepat, konsisten, dan responsif." },
  { name: "HTML5", icon: "/icons/html.svg", category: "Frontend", description: "Bahasa markup standar untuk struktur setiap halaman web." },
  { name: "CSS3", icon: "/icons/css.svg", category: "Frontend", description: "Styling modern: layout, animasi, dan desain responsif." },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "Backend", description: "Runtime JavaScript untuk membangun API, server, dan tooling di sisi backend." },
  { name: "Laravel", icon: "/icons/laravel.svg", category: "Backend", description: "Framework PHP yang ekspresif untuk backend — routing, ORM, autentikasi, dan queue." },
  { name: "C#", icon: "/icons/csharp.svg", category: "Backend", description: "Bahasa utama ekosistem .NET: dipakai untuk aplikasi desktop, backend, dan game development dengan Unity." },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "Database", description: "Relational database open-source yang populer untuk aplikasi web." },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database", description: "Relational database open-source yang powerful dengan fitur SQL tingkat lanjut." },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "Database", description: "NoSQL document database yang fleksibel untuk data semi-terstruktur." },
  { name: "Flutter", icon: "/icons/flutter.svg", category: "Mobile & Games", description: "Framework Dart untuk membangun aplikasi mobile multi-platform dari satu codebase." },
  { name: "Unity", icon: "/icons/unity.svg", category: "Mobile & Games", description: "Game engine untuk membangun game 2D/3D dan simulasi interaktif." },
  { name: "Git", icon: "/icons/git.svg", category: "Tools", description: "Version control standar industri untuk melacak perubahan dan kolaborasi kode." },
  { name: "GitHub", icon: "/icons/github.svg", category: "Tools", description: "Platform hosting repository Git, code review, dan kolaborasi open-source." },
  { name: "Postman", icon: "/icons/postman.svg", category: "Tools", description: "Tool untuk testing, debugging, dan dokumentasi REST API." },
  { name: "3ds Max", icon: "", category: "Multimedia", description: "Software 3D modeling Autodesk untuk membuat aset, karakter, dan rigging game." },
  { name: "Photoshop", icon: "", category: "Multimedia", description: "Editing grafis untuk aset visual, tekstur, dan materi desain." },
  { name: "After Effects", icon: "", category: "Multimedia", description: "Motion graphics dan post-production untuk video dan animasi." },
]

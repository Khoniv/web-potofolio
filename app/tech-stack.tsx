"use client"
import { useState } from "react"
import { motion } from "motion/react"
import SectionHeader from "@/components/SectionHeader"

interface Tech {
  name: string
  icon: string
  category: string
  description: string
  darkInvert?: boolean
}

export default function TechStack() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({})

  const toggle = (name: string) =>
    setFlipped((f) => ({ ...f, [name]: !f[name] }))

  return (
    <section id="techstack" className="w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 border-t border-border">
        <SectionHeader
          index="04"
          subtitle="Tech Stack"
          title="Tools I work with"
          description="One toolbox. Click a card to flip it over."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {technologies.map((tech, i) => {
            const isFlipped = !!flipped[tech.name]
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                className="[perspective:1200px]"
              >
                <button
                  onClick={() => toggle(tech.name)}
                  aria-pressed={isFlipped}
                  aria-label={`${tech.name}: klik untuk membalik kartu`}
                  className="relative block w-full h-40 sm:h-44 cursor-pointer [transform-style:preserve-3d] transition-transform duration-500 ease-out motion-reduce:transition-none"
                  style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  {/* Depan */}
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface border border-border p-4 text-center [backface-visibility:hidden] hover:border-accent/50 hover:shadow-[0_12px_32px_rgba(46,75,255,0.10)] transition-colors duration-300">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      {tech.icon ? (
                        <img
                          src={tech.icon}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className={`w-full h-full object-contain ${tech.darkInvert ? "dark:invert" : ""}`}
                        />
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
                  </span>
                  {/* Belakang */}
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-ink border border-ink p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-paper/60">
                      {tech.category}
                    </span>
                    <span className="text-[12px] sm:text-[13px] leading-relaxed text-paper/90">
                      {tech.description}
                    </span>
                    <span className="font-mono text-[10px] text-paper/40 mt-1">klik untuk kembali</span>
                  </span>
                </button>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-6 text-center font-mono text-xs text-faint">
          <span className="text-accent">$</span> tip: klik kartu untuk membaliknya
        </p>
      </div>
    </section>
  )
}

const technologies: Tech[] = [
  { name: "React", icon: "/icons/react.svg", category: "Frontend", description: "Library JavaScript untuk membangun UI dari komponen yang reaktif." },
  { name: "Next.js", icon: "/icons/nextjs.svg", category: "Frontend", description: "Framework React untuk web production: SSR, SSG, dan App Router.", darkInvert: true },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "Frontend", description: "JavaScript dengan type safety. Bug ketahuan lebih awal." },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", category: "Frontend", description: "Utility-first CSS. Styling cepat, konsisten, dan responsif." },
  { name: "HTML5", icon: "/icons/html.svg", category: "Frontend", description: "Markup standar untuk struktur setiap halaman web." },
  { name: "CSS3", icon: "/icons/css.svg", category: "Frontend", description: "Styling, layout, dan animasi untuk web yang responsif." },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "Backend", description: "Runtime JavaScript untuk API, server, dan tooling backend." },
  { name: "Laravel", icon: "/icons/laravel.svg", category: "Backend", description: "Framework PHP untuk backend: routing, ORM, dan autentikasi." },
  { name: "C#", icon: "/icons/csharp.svg", category: "Backend", description: "Bahasa utama .NET. Dipakai untuk desktop, backend, dan Unity." },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "Database", description: "Database relasional open-source yang populer untuk web." },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database", description: "Database relasional dengan fitur SQL yang lengkap." },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "Database", description: "Database NoSQL berbasis dokumen yang fleksibel." },
  { name: "Flutter", icon: "/icons/flutter.svg", category: "Mobile & Games", description: "Framework Dart untuk aplikasi mobile multi-platform." },
  { name: "Unity", icon: "/icons/unity.svg", category: "Mobile & Games", description: "Game engine untuk game 2D/3D dan simulasi interaktif.", darkInvert: true },
  { name: "Git", icon: "/icons/git.svg", category: "Tools", description: "Version control untuk melacak perubahan kode." },
  { name: "GitHub", icon: "/icons/github.svg", category: "Tools", description: "Hosting repository Git dan kolaborasi open-source.", darkInvert: true },
  { name: "Postman", icon: "/icons/postman.svg", category: "Tools", description: "Tool untuk testing dan dokumentasi REST API." },
  { name: "3ds Max", icon: "", category: "Multimedia", description: "Modeling 3D untuk aset dan karakter game." },
  { name: "Photoshop", icon: "", category: "Multimedia", description: "Editing grafis untuk aset visual dan tekstur." },
  { name: "After Effects", icon: "", category: "Multimedia", description: "Motion graphics dan post-production untuk video." },
]

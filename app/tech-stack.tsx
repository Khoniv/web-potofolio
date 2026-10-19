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
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(tech.name)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      toggle(tech.name)
                    }
                  }}
                  aria-pressed={isFlipped}
                  aria-label={`${tech.name}: click to flip the card`}
                  className="relative block w-full h-40 sm:h-44 cursor-pointer [transform-style:preserve-3d] [will-change:transform] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-2xl"
                  style={isFlipped ? { transform: "rotateY(180deg)" } : undefined}
                >
                  {/* Depan */}
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface/60 backdrop-blur-md border border-border p-4 text-center [backface-visibility:hidden]">
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
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-surface/60 backdrop-blur-md border border-border p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                      {tech.category}
                    </span>
                    <span className="text-[12px] sm:text-[13px] leading-relaxed text-ink">
                      {tech.description}
                    </span>
                    <span className="font-mono text-[10px] text-faint mt-1">click to flip back</span>
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-6 text-center font-mono text-xs text-faint">
          <span className="text-accent">$</span> tip: click a card to flip it
        </p>
      </div>
    </section>
  )
}

const technologies: Tech[] = [
  { name: "React", icon: "/icons/react.svg", category: "Frontend", description: "JavaScript library for building reactive, component-based UIs." },
  { name: "Next.js", icon: "/icons/nextjs.svg", category: "Frontend", description: "React framework for production web apps: SSR, SSG, and App Router.", darkInvert: true },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "Frontend", description: "JavaScript with type safety. Catches bugs earlier." },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", category: "Frontend", description: "Utility-first CSS. Fast, consistent, responsive styling." },
  { name: "HTML5", icon: "/icons/html.svg", category: "Frontend", description: "Standard markup for structuring web pages." },
  { name: "CSS3", icon: "/icons/css.svg", category: "Frontend", description: "Styling, layout, and animation for the responsive web." },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "Backend", description: "JavaScript runtime for APIs, servers, and backend tooling." },
  { name: "Laravel", icon: "/icons/laravel.svg", category: "Backend", description: "PHP framework for backends: routing, ORM, and auth." },
  { name: "C#", icon: "/icons/csharp.svg", category: "Backend", description: "The main .NET language. Used for desktop, backend, and Unity." },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "Database", description: "Popular open-source relational database for the web." },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database", description: "Relational database with full-featured SQL." },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "Database", description: "Flexible document-based NoSQL database." },
  { name: "Flutter", icon: "/icons/flutter.svg", category: "Mobile & Games", description: "Dart framework for multi-platform mobile apps." },
  { name: "Unity", icon: "/icons/unity.svg", category: "Mobile & Games", description: "Game engine for 2D/3D games and interactive sims.", darkInvert: true },
  { name: "Git", icon: "/icons/git.svg", category: "Tools", description: "Version control for tracking code changes." },
  { name: "GitHub", icon: "/icons/github.svg", category: "Tools", description: "Git hosting and open-source collaboration.", darkInvert: true },
  { name: "Postman", icon: "/icons/postman.svg", category: "Tools", description: "Tool for testing and documenting REST APIs." },
  { name: "3ds Max", icon: "", category: "Multimedia", description: "3D modeling for game assets and characters." },
  { name: "Photoshop", icon: "", category: "Multimedia", description: "Image editing for visual assets and textures." },
  { name: "After Effects", icon: "", category: "Multimedia", description: "Motion graphics and video post-production." },
]

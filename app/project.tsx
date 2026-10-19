"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import SectionHeader from "@/components/SectionHeader"
import { GlowCard } from "@/components/ui/spotlight-card"

type CategoryFilter = "ALL" | "WEB" | "GAMES_MOBILE" | "DESKTOP_3D"

export default function Project() {
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("ALL")

  useEffect(() => {
    document.body.style.overflow = isOpen !== null ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const filteredProjects = projectList.filter((project) => {
    if (activeFilter === "ALL") return true
    return project.categoryType === activeFilter
  })

  const activeProject = projectList.find((p) => p.index === isOpen)

  return (
    <section id="projects" className="w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 border-t border-border">
        <SectionHeader
          index="05"
          subtitle="Projects"
          title="Selected work"
          description="Real projects: web apps, games, mobile, desktop, and 3D animation. Click a card for details."
        />

        {/* Filter pills */}
        <div className="flex flex-nowrap gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filter projects by category">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as CategoryFilter)}
                aria-pressed={isActive}
                className={`cursor-pointer shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-ink text-paper border-ink"
                    : "bg-surface/60 backdrop-blur-md text-muted border-border hover:border-ink/40 hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`project-${project.index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.28) }}
            >
              <GlowCard
                customSize
                glowColor="mono"
                backdropBlur={false}
                className="h-full p-0! block! hover:-translate-y-1.5 transition-transform duration-300"
              >
              <button
                onClick={() => setIsOpen(project.index)}
                className="group w-full h-full text-left cursor-pointer flex flex-col"
                aria-label={`View details of ${project.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-paper rounded-t-[14px]">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono font-semibold bg-surface/70 backdrop-blur-xl text-ink px-2 py-0.5 rounded-md border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-lg font-bold text-ink tracking-tight leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed line-clamp-3 flex-grow">
                    {project.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-ink">
                    View details
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </button>
              </GlowCard>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://github.com/Khoniv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-paper text-sm font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            All repositories on GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/khonif-zakaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-border text-sm font-semibold hover:border-ink/40 transition-all hover:-translate-y-0.5"
          >
            Connect on LinkedIn
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Detail modal */}
        <AnimatePresence>
          {isOpen !== null && activeProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label={`Project details: ${activeProject.title}`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={() => setIsOpen(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                className="relative bg-surface/90 backdrop-blur-2xl border border-border rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-[0_32px_100px_rgba(0,0,0,0.35)]"
              >
                <div className="relative aspect-[16/8] w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={activeProject.imagePath}
                    alt={activeProject.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 95vw, 640px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <button
                    onClick={() => setIsOpen(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 backdrop-blur text-white hover:bg-black/60 hover:rotate-90 transition-all duration-300 cursor-pointer"
                    aria-label="Close project details"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                      {activeProject.category}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 overflow-y-auto flex-grow">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-2">Overview</p>
                  <p className="text-sm text-ink leading-relaxed mb-6">{activeProject.fullDescription}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-2">Year</p>
                      <span className="text-sm font-semibold">{activeProject.createdAt}</span>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-2">Tech</p>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tech.map((tech, i) => (
                          <span key={i} className="text-[11px] font-medium bg-paper border border-border text-muted rounded-lg px-2.5 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-3">Highlights</p>
                  <ul className="space-y-2 mb-2">
                    {activeProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink bg-paper border border-border rounded-xl p-3">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 border-t border-border flex flex-col sm:flex-row gap-2.5 bg-paper/60">
                  {activeProject.githubUrl ? (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 text-sm font-semibold bg-ink text-paper py-3 px-4 rounded-xl hover:opacity-90 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub repository
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex justify-center items-center gap-2 text-sm font-medium text-faint border border-border py-3 px-4 rounded-xl cursor-not-allowed">
                      No public repository
                    </span>
                  )}
                  {activeProject.liveDemoUrl ? (
                    <a
                      href={activeProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 text-sm font-semibold border border-border bg-surface py-3 px-4 rounded-xl hover:border-ink/40 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {activeProject.isVideoProject ? "Watch on YouTube" : "Live demo"}
                    </a>
                  ) : activeProject.demoDisabledLabel ? (
                    <span
                      aria-disabled="true"
                      className="flex-1 inline-flex justify-center items-center gap-2 text-sm font-medium text-faint border border-border py-3 px-4 rounded-xl cursor-not-allowed"
                    >
                      {activeProject.demoDisabledLabel}
                    </span>
                  ) : null}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

const filterTabs = [
  { key: "ALL", label: "All" },
  { key: "WEB", label: "Web apps" },
  { key: "GAMES_MOBILE", label: "Games & mobile" },
  { key: "DESKTOP_3D", label: "Desktop & 3D" },
]

const projectList = [
  {
    index: 0,
    imagePath: "/images/techdrop-merakit.png",
    title: "TechDrop 2.0: PC Hardware Educational Game",
    category: "Game Development, Unity & C#",
    categoryType: "GAMES_MOBILE",
    shortDescription: "Educational PC assembly game built with Unity and C#. Drag-and-drop hardware installation, level challenges, and quizzes.",
    fullDescription: "TechDrop 2.0 is a desktop game that teaches computer hardware by letting players assemble a virtual PC: CPU, RAM, GPU, PSU, and drives. Built with Unity 2021 LTS and C# following the Game Development Life Cycle (GDLC). Tested with an 85% expert rating and 90.6% user acceptance. A playable Windows build is on itch.io.",
    createdAt: "2026",
    features: [
      "Full GDLC process, from concept to beta release",
      "Drag-and-drop motherboard and chassis assembly",
      "Hardware knowledge base with quizzes",
      "85% expert rating and 90.6% user acceptance",
      "Windows build released on itch.io",
    ],
    tech: ["Unity Engine", "C#", "GDLC", "2D/3D Physics", "UI/UX"],
    githubUrl: "https://github.com/Khoniv/techdrop-nivdev",
    liveDemoUrl: "https://khonif-zakaria.itch.io/techdropdev",
    isVideoProject: false,
  },
  {
    index: 1,
    imagePath: "/images/capitstore-showcase.png",
    title: "Capit Store: Footwear E-Commerce",
    category: "Fullstack Web, Next.js",
    categoryType: "WEB",
    shortDescription: "Online store for a casual sandal brand. Next.js 15, React 19, Clerk auth, and background job queues.",
    fullDescription: "Capit Store is an e-commerce site for an Indonesian casual sandal brand. Built with the Next.js 15 App Router and Clerk for customer and seller logins. It has a product catalog, cart, order tracking, and a backoffice for managing stock.",
    createdAt: "2025",
    features: [
      "Customer and seller roles with Clerk",
      "Product catalog, categories, and cart",
      "Order tracking and delivery addresses",
      "Background jobs with Inngest",
      "Backoffice for stock management",
    ],
    tech: ["Next.js 15", "React 19", "Clerk Auth", "Tailwind CSS", "Inngest"],
    githubUrl: "https://github.com/Khoniv/capit-store",
    liveDemoUrl: "https://capit-store-seven.vercel.app/",
    isVideoProject: false,
  },
  {
    index: 2,
    imagePath: "/images/news5-showcase.png",
    title: "News-5: Digital News Portal & CMS",
    category: "Web Portal, Laravel 11",
    categoryType: "WEB",
    shortDescription: "News portal and CMS built with Laravel 11 and Livewire 3. Real-time comments and trending stories.",
    fullDescription: "News-5 is a news publishing site with a content management backend. Laravel 11 and Livewire 3 power real-time comment threads, trending stories ranked by views, and automated slugs. Journalists can draft, review, and schedule articles.",
    createdAt: "2025",
    features: [
      "Super admin and editorial staff roles",
      "Real-time comments with Livewire 3",
      "Trending stories from view counts",
      "Rich-text editor with media uploads",
      "Automatic SEO slugs",
    ],
    tech: ["Laravel 11", "PHP 8.3", "Livewire 3", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Khoniv/news-5",
    liveDemoUrl: "https://news-5-gamma.vercel.app/",
    isVideoProject: false,
  },
  {
    index: 3,
    imagePath: "/images/parkeazy-showcase.png",
    title: "ParkEazy: Parking Management System",
    category: "Desktop, C# .NET",
    demoDisabledLabel: "Desktop app — no live demo",
    categoryType: "DESKTOP_3D",
    shortDescription: "Windows desktop app for parking operations. C# and .NET Framework with SQL Server.",
    fullDescription: "ParkEazy is a desktop app for running commercial parking lots. Built with C# and .NET Framework 4.7.2, it shows 12 parking bays on a live visual grid, registers license plates, computes hourly rates, and stores transactions in SQL Server.",
    createdAt: "2024",
    features: [
      "Live visual grid of 12 parking bays",
      "Car and motorcycle rate logic",
      "Check-in, reservation, and ticket timestamps",
      "Transaction storage in SQL Server",
      "ClickOnce installer packaging",
    ],
    tech: ["C#", ".NET Framework", "Guna.UI2", "SQL Server", "Windows Forms"],
    githubUrl: "https://github.com/Khoniv/park-eazy",

    isVideoProject: false,
  },
  {
    index: 4,
    imagePath: "/images/jbag-showcase.png",
    title: "JBAG: Game Account Marketplace",
    category: "Mobile App, Flutter",
    demoDisabledLabel: "Mobile app — no live demo",
    categoryType: "GAMES_MOBILE",
    shortDescription: "Mobile marketplace for trading game accounts. Flutter and Dart, with Indonesian e-wallet payments.",
    fullDescription: "JBAG (Jual Beli Akun Game) is a mobile marketplace for trading verified game accounts safely. Built with Flutter using Clean Architecture: catalog search, seller verification, checkout flow, and payments via GoPay, DANA, OVO, and bank virtual accounts.",
    createdAt: "2024",
    features: [
      "Flutter and Dart cross-platform UI",
      "Verified catalog with rank filters",
      "GoPay, DANA, OVO, and bank VA payments",
      "Cart and secure checkout flow",
      "Clean Architecture with unit tests",
    ],
    tech: ["Flutter", "Dart", "Clean Architecture", "REST API", "Mobile UX"],
    githubUrl: "https://github.com/Khoniv/jbag-jual-beli-akun-game.git",

    isVideoProject: false,
  },
  {
    index: 5,
    imagePath: "/images/tupat-real.jpg",
    title: "Petualangan Si Tupat: 3D Animated Short",
    category: "3D Animation, Studio Production",
    categoryType: "DESKTOP_3D",
    shortDescription: "3D animated short film. I worked as producer, rigging artist, and lighting/rendering artist.",
    fullDescription: "Petualangan Si Tupat is a 3D animated short film. I was the producer, rigging artist, and lighting/rendering artist: character rigging in 3ds Max, motion from Mixamo, lighting and rendering, then compositing in After Effects and Premiere Pro. Streaming on YouTube.",
    createdAt: "2025",
    features: [
      "Producer, rigging, and rendering lead",
      "Character rigging and weight painting in 3ds Max",
      "Lighting and high-quality rendering",
      "Compositing and color grading in After Effects",
      "Streaming on YouTube",
    ],
    tech: ["Autodesk 3ds Max", "Mixamo", "After Effects", "Premiere Pro", "3D Animation"],
    githubUrl: null,
    liveDemoUrl: "https://youtu.be/6OVzISjvvxU",
    isVideoProject: true,
  },
]

"use client"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import GlareHover from "@/components/GlareHover"

export default function TechStack() {
  return (
    <section id="techstack" className="w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-28 lg:py-32 cursor-default relative border-t border-[#00f0ff]/20 overflow-hidden font-mono">
      
      {/* Background Cyber Accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff007f]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <FadeDown>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-14 md:mb-16 w-full text-left">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#00f0ff] uppercase mb-2">
            <span className="text-[#ff007f]">&gt;</span> TECH_MODULES // ARSENAL
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Engineering Matrix
          </h2>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-5 sm:gap-6">
        {techCategories.map((category, idx) => (
          <FadeUp key={idx} delay={idx * 0.1}>
            <GlareHover className="group relative rounded-xl bg-[#090e1c]/90 border border-[#00f0ff]/20 hover:border-[#00f0ff] p-4 sm:p-6 md:p-8 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.05)] hover:shadow-[0_0_30px_rgba(0,240,255,0.22)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start">
                
                {/* Sector Telemetry Sidebar Box (Like Milestones Epoch) */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-2.5 sm:gap-3">
                    
                    {/* Telemetry Badge Box */}
                    <div className="bg-[#050811] border border-[#00f0ff]/35 rounded-lg p-2.5 sm:p-3.5 shadow-[0_0_15px_rgba(0,240,255,0.08)] group-hover:border-[#00f0ff] transition-colors">
                      <div className="text-[10px] text-[#7f99b8] uppercase tracking-widest flex items-center justify-between mb-1">
                        <span>MODULE_SECTOR</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse"></span>
                      </div>
                      <span className="text-sm sm:text-base font-black text-[#00f0ff] tracking-wider block">
                        SECTOR_{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Sector Title & Meta */}
                    <div className="flex flex-col">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-bold text-[#ff007f] tracking-wider uppercase mt-1">
                        STATUS: {category.status} // LOAD: 100%
                      </span>
                      <p className="text-xs text-[#a1b8d4] font-sans font-normal leading-relaxed mt-2">
                        {category.description}
                      </p>
                    </div>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
                      <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/25">
                        {category.technologies.length} COMPILED_LIBS
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/25">
                        ACTIVE_STACK
                      </span>
                    </div>
                  </div>

                  <div className="hidden lg:block mt-4 text-[10px] text-[#7f99b8]/60 font-mono">
                    CHECKSUM: VERIFIED_2026
                  </div>
                </div>

                {/* Tech Chips Grid */}
                <div className="lg:col-span-8 grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 w-full">
                  {category.technologies.map((tech, techIdx) => (
                    <div 
                      key={techIdx}
                      className="group/tech flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 bg-[#050811] hover:bg-[#00f0ff]/10 border border-[#00f0ff]/20 hover:border-[#00f0ff] rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(0,240,255,0.03)] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] relative overflow-hidden"
                    >
                      {/* Top scanline accent on hover */}
                      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity" />

                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center pointer-events-none group-hover/tech:scale-110 transition-transform">
                        {tech.svg ? (
                          tech.svg.startsWith("<") ? (
                            <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: tech.svg }} />
                          ) : (
                            <img src={tech.svg} alt={tech.name} className="w-full h-full tech-icon-img object-contain" />
                          )
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-bold text-xs text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30 rounded">
                            {tech.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] sm:text-xs font-bold text-white group-hover/tech:text-[#00f0ff] truncate tracking-tight transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-[8px] sm:text-[9px] text-[#7f99b8] font-mono">
                          // ENABLED
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </GlareHover>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

const techCategories = [
  {
    title: "Frontend & Web Architecture",
    status: "PRODUCTION_READY",
    description: "Reactive component ecosystems, Next.js App Router, SSR/SSG caching, state hydration, and modern responsive design.",
    technologies: [
      { name: "React.js", svg: "/icons/react.svg" },
      { name: "Next.js", svg: "/icons/nextjs.svg" },
      { name: "TypeScript", svg: "/icons/typescript.svg" },
      { name: "HTML5", svg: "/icons/html.svg" },
      { name: "CSS3", svg: "/icons/css.svg" },
      { name: "Tailwind CSS", svg: "/icons/tailwindcss.svg" },
    ],
  },
  {
    title: "Backend Core & Neural Data",
    status: "HIGH_AVAILABILITY",
    description: "RESTful server pipelines, high-integrity SQL & NoSQL data architectures, authentication systems, and API gateways.",
    technologies: [
      { name: "Node.js", svg: "/icons/nodejs.svg" },
      { name: "Laravel", svg: "/icons/laravel.svg" },
      { name: "C# / .NET", svg: "/icons/csharp.svg" },
      { name: "MySQL", svg: "/icons/mysql.svg" },
      { name: "MongoDB", svg: "/icons/mongodb.svg" },
      { name: "PostgreSQL", svg: "/icons/postgresql.svg" },
    ],
  },
  {
    title: "Game Engines & Mobile Hardware",
    status: "MULTI_PLATFORM",
    description: "Interactive 3D game engines, Game Development Life Cycle (GDLC) execution, physics simulation, and mobile cross-platform apps.",
    technologies: [
      { name: "Flutter", svg: "/icons/flutter.svg" },
      { name: "Unity Engine", svg: "/icons/unity.svg" },
      { name: "C# (Game Dev)", svg: "/icons/csharp.svg" },
    ],
  },
  {
    title: "Terminal Systems & Multimedia",
    status: "VERSION_CONTROLLED",
    description: "Git repositories, API endpoints testing with Postman, 3D character modeling & rigging pipelines, and post-production composite.",
    technologies: [
      { name: "Git", svg: "/icons/git.svg" },
      { name: "GitHub", svg: "/icons/github.svg" },
      { name: "Autodesk 3ds Max", svg: "" },
      { name: "Adobe Photoshop", svg: "" },
      { name: "After Effects", svg: "" },
      { name: "Postman", svg: "/icons/postman.svg" },
    ],
  },
]

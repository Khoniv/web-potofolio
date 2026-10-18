"use client"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"

import GlareHover from "@/components/GlareHover"

interface ExperienceItem {
  id: number
  company: string
  role: string
  date: string
  status: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Universitas Amikom Purwokerto",
    role: "Informatics Graduate (B.Sc.) - Cumlaude (GPA 3.78/4.00)",
    date: "2022 - 2026",
    status: "GRADUATED",
    description: "Completed the Bachelor of Informatics degree program specializing in Software Engineering & Game Development. Undergraduate Thesis: Implementation of the Game Development Life Cycle (GDLC) Methodology in Computer Hardware Educational Game Assembly Simulation using Unity Engine.",
    skills: ["Unity Engine", "C#", "GDLC Methodology", "Software Engineering", "AI & NLP"],
  },
  {
    id: 2,
    company: "INMED (Information Technology Research And Multimedia)",
    role: "Programming Division Engineer",
    date: "2023 - 2024",
    status: "COMPLETED",
    description: "Advanced engineering capabilities through hands-on development of web, desktop, and mobile systems. Actively collaborated in architectural design, code reviews, automated integration testing, and team technical sessions.",
    skills: ["Web Development", "Desktop Systems", "Mobile Engineering", "Agile Collaboration"],
  },
  {
    id: 3,
    company: "Logical Operations & Amikom",
    role: "Certified AI Associate & Professional Certifications",
    date: "2025",
    status: "CERTIFIED",
    description: "Earned industry-recognized credentials: Certificate in Artificial Intelligence Associate (CAIA) from Logical Operations, Desktop Office Training (DOT) for Applied Microsoft Office, and the Official English Certification Program from Universitas Amikom Purwokerto.",
    skills: ["Artificial Intelligence (CAIA)", "Applied Office Systems (DOT)", "English Certification"],
  },
  {
    id: 4,
    company: "SMK Ma'arif NU 1 Paguyangan",
    role: "Computer & Network Engineering (TKJ)",
    date: "2019 - 2022",
    status: "ALUMNI",
    description: "Built strong IT foundations studying enterprise computer networking, computer hardware assembly & diagnostic troubleshooting, Linux operating systems, structured cabling, and routing protocols.",
    skills: ["Computer Networking", "Hardware Assembly", "Network Troubleshooting", "Linux SysAdmin"],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-28 lg:py-32 cursor-default relative border-t border-[#00f0ff]/20 font-mono" ref={containerRef}>
      
      {/* Header */}
      <FadeDown>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-14 md:mb-16 w-full text-left">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#00f0ff] uppercase mb-2">
            <span className="text-[#ff007f]">&gt;</span> LOGS // CAREER_CHRONOLOGY
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            System Milestones
          </h2>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative flex flex-col gap-4 sm:gap-6">
        {experiences.map((exp, index) => {
          return (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-80px" }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
            >
              <GlareHover className="group relative rounded-xl bg-[#090e1c]/90 border border-[#00f0ff]/20 hover:border-[#00f0ff] p-4 sm:p-6 md:p-8 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.05)] hover:shadow-[0_0_30px_rgba(0,240,255,0.22)]">
                <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 md:gap-8">
                  
                  {/* Left Column: Clean Cyber Time Badge */}
                  <div className="flex-shrink-0 md:w-48 lg:w-56 flex flex-col gap-2 sm:gap-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_6px_#00ff66] animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold text-[#00f0ff] tracking-wider">
                        {exp.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#7f99b8] uppercase tracking-wider bg-[#050811] px-2 py-0.5 rounded border border-[#00f0ff]/20">
                        ENTRY #0{exp.id}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-[#00ff66] bg-[#00ff66]/10 px-2 py-0.5 rounded border border-[#00ff66]/25">
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Experience Details */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors mb-1">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-[11px] sm:text-xs font-bold text-[#ff007f] tracking-wider uppercase mb-3 sm:mb-4">
                      @ {exp.company}
                    </h4>

                    <p className="text-xs md:text-sm text-[#a1b8d4] font-sans leading-relaxed mb-4 sm:mb-6 font-normal">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] sm:text-[11px] font-mono bg-[#050811] text-[#00f0ff] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-[#00f0ff]/30 shadow-[0_0_8px_rgba(0,240,255,0.08)] group-hover:border-[#00f0ff] transition-colors"
                        >
                          +{skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </GlareHover>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

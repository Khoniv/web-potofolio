"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import GlareHover from "@/components/GlareHover"

type CategoryFilter = "ALL" | "WEB" | "GAMES_MOBILE" | "DESKTOP_3D"

export default function Project() {
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("ALL")

  useEffect(() => {
    if (isOpen !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const filteredProjects = projectList.filter((project) => {
    if (activeFilter === "ALL") return true
    if (activeFilter === "WEB") return project.categoryType === "WEB"
    if (activeFilter === "GAMES_MOBILE") return project.categoryType === "GAMES_MOBILE"
    if (activeFilter === "DESKTOP_3D") return project.categoryType === "DESKTOP_3D"
    return true
  })

  const activeProject = projectList.find((p) => p.index === isOpen)

  return (
    <>
      <section id="projects" className="w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-28 lg:py-32 cursor-default relative border-t border-[#00f0ff]/20 font-mono">
        
        {/* Background Cyber Glow */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#ff007f]/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Header */}
        <FadeDown>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12 md:mb-14 w-full text-left">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#00f0ff] uppercase mb-2">
              <span className="text-[#ff007f]">&gt;</span> DEPLOYED_SYSTEMS // PRODUCTION_SHOWCASE
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Selected Works
            </h2>
            <p className="text-xs sm:text-sm text-[#7f99b8] font-sans font-normal mt-2 max-w-2xl leading-relaxed">
              Authentic software architectures, game engines, mobile apps, and multimedia productions engineered with industry-standard stacks and documented repositories.
            </p>
          </div>
        </FadeDown>

        {/* Interactive Category Filter Tabs */}
        <FadeDown delay={0.1}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-6 sm:mb-8 md:mb-12">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 p-1.5 bg-[#090e1c] border border-[#00f0ff]/25 rounded-xl w-full sm:w-fit">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.key
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key as CategoryFilter)}
                    className={`cursor-pointer px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-[#00f0ff] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                        : "text-[#7f99b8] hover:text-white hover:bg-[#00f0ff]/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </FadeDown>

        {/* Responsive Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 px-4 sm:px-6 md:px-12">
          {filteredProjects.map((project, index) => (
            <FadeUp key={`project-${project.index}`} delay={index * 0.08}>
              <div 
                onClick={() => setIsOpen(project.index)}
                className="cursor-pointer h-full"
              >
                <GlareHover className="group flex flex-col h-full bg-[#090e1c]/90 border border-[#00f0ff]/25 hover:border-[#00f0ff] rounded-xl overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(0,240,255,0.06)] hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:-translate-y-1.5 backdrop-blur-sm">
                  
                  {/* Project Image View */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-[#050811] border-b border-[#00f0ff]/20">
                    <Image 
                      src={project.imagePath} 
                      alt={project.title} 
                      fill 
                      className="object-cover object-center transition-all duration-700 group-hover:scale-105" 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Subtle cyber overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-transparent to-transparent opacity-80" />

                    {/* Tech Badges on Thumbnail */}
                    <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end z-10">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[9px] font-mono font-bold bg-[#050811]/90 text-[#00f0ff] px-2 py-0.5 rounded border border-[#00f0ff]/30 backdrop-blur-md uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] font-mono font-bold bg-[#050811]/90 text-[#7f99b8] px-1.5 py-0.5 rounded border border-[#00f0ff]/20 backdrop-blur-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow relative">
                    
                    {/* Project ID Tag */}
                    <div className="absolute top-0 right-5 -translate-y-1/2 bg-[#050811] border border-[#00f0ff]/40 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                      PRJ_#{String(project.index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex justify-between items-start mb-1.5 sm:mb-2 mt-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#00f0ff] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="text-[10px] sm:text-[11px] font-bold text-[#ff007f] tracking-wider uppercase mb-2.5 sm:mb-3">
                      {project.category}
                    </div>

                    <p className="text-xs text-[#a1b8d4] font-sans font-normal leading-relaxed mb-5 sm:mb-6 flex-grow line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-3.5 sm:pt-4 border-t border-[#00f0ff]/15">
                      <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#00f0ff] group-hover:text-[#38f4ff] flex items-center gap-1.5 sm:gap-2">
                        <span>INSPECT_DATA</span>
                        <span className="text-[#ff007f] font-bold group-hover:translate-x-1 transition-transform">&gt;&gt;</span>
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {project.githubUrl ? (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 sm:p-2 border border-[#00f0ff]/30 rounded-lg text-[#7f99b8] hover:text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300"
                            title="GitHub Repository"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                          </a>
                        ) : (
                          <span 
                            className="p-1.5 sm:p-2 border border-white/10 rounded-lg text-[#7f99b8]/30 cursor-not-allowed inline-flex items-center"
                            title="No public repository"
                          >
                            <svg className="w-4 h-4 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                          </span>
                        )}
                        {project.liveDemoUrl && (
                          <a 
                            href={project.liveDemoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 sm:p-2 border border-[#00f0ff]/30 rounded-lg text-[#7f99b8] hover:text-[#00ff66] hover:border-[#00ff66] hover:bg-[#00ff66]/10 transition-all duration-300"
                            title={project.isVideoProject ? "Watch on YouTube" : "Direct Link / Demo"}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </GlareHover>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Global Terminal Link CTA */}
        <FadeUp>
          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full px-4 sm:px-6">
            <a 
              href="https://github.com/Khoniv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 bg-[#090e1c] border border-[#00f0ff]/40 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black rounded-lg font-bold tracking-widest text-[11px] sm:text-xs uppercase shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all duration-300 text-center"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>EXPLORE_GITHUB_ALL_REPOS</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/khonif-zakaria" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 bg-[#090e1c] border border-[#00f0ff]/30 text-[#7f99b8] hover:text-white hover:border-[#00f0ff] rounded-lg font-bold tracking-widest text-[11px] sm:text-xs uppercase transition-all duration-300 text-center"
            >
              <span>CONNECT_ON_LINKEDIN</span>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </FadeUp>

        {/* Modal: Cyberpunk Terminal Inspection Window */}
        <AnimatePresence>
          {isOpen !== null && activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6">
              
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.2 }} 
                className="absolute inset-0 bg-[#030509]/92 backdrop-blur-xl" 
                onClick={() => setIsOpen(null)} 
              />

              {/* Modal Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95, y: 15 }} 
                transition={{ type: "spring", damping: 25, stiffness: 300 }} 
                className="bg-[#090e1c] border border-[#00f0ff]/50 rounded-2xl w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_60px_rgba(0,240,255,0.3)] relative z-10"
              >
                {/* Modal Cyber Header */}
                <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4 border-b border-[#00f0ff]/20 bg-[#050811]/90">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66] animate-pulse flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight truncate">
                        {activeProject.title}
                      </h3>
                      <span className="text-[10px] text-[#ff007f] font-mono block truncate">
                        {activeProject.category}
                      </span>
                    </div>
                  </div>
                  <button 
                    className="text-[#7f99b8] hover:text-[#00f0ff] p-1.5 rounded-lg border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-colors flex-shrink-0" 
                    onClick={() => setIsOpen(null)}
                    title="Close Window"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6 md:p-7 overflow-y-auto flex-grow custom-scrollbar">
                  
                  {/* Modal Banner Preview */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#00f0ff]/30 mb-5 sm:mb-6 bg-[#050811]">
                    <Image 
                      src={activeProject.imagePath} 
                      alt={activeProject.title} 
                      fill 
                      className="object-cover object-center" 
                      sizes="(max-width: 768px) 95vw, 650px"
                    />
                  </div>

                  {/* Summary & About */}
                  <div className="mb-5 sm:mb-6">
                    <span className="text-[10px] font-bold tracking-widest text-[#7f99b8] uppercase block mb-1.5 sm:mb-2">
                      // ARCHITECTURAL_OVERVIEW
                    </span>
                    <p className="text-xs sm:text-sm text-[#e2f1ff] font-sans leading-relaxed">
                      {activeProject.fullDescription}
                    </p>
                  </div>

                  {/* Deployment & Tech Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-[#00f0ff]/15">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-[#7f99b8] uppercase block mb-1.5 sm:mb-2">
                        // RELEASE_YEAR
                      </span>
                      <span className="text-xs font-bold bg-[#050811] text-[#00f0ff] px-2.5 sm:px-3 py-1 rounded border border-[#00f0ff]/30 inline-block">
                        PRODUCTION_{activeProject.createdAt}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-[#7f99b8] uppercase block mb-1.5 sm:mb-2">
                        // CORE_LIBRARIES
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tech.map((tech, i) => (
                          <span key={i} className="text-[10px] font-bold bg-[#050811] text-[#00f0ff] px-2 py-0.5 rounded border border-[#00f0ff]/20 uppercase">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Core Features */}
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#7f99b8] uppercase block mb-2 sm:mb-3">
                      // KEY_ENGINEERING_HIGHLIGHTS
                    </span>
                    <ul className="space-y-2">
                      {activeProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start bg-[#050811] p-2.5 sm:p-3 rounded-lg border border-[#00f0ff]/15 text-xs text-white">
                          <span className="text-[#00ff66] mr-2.5 font-bold mt-0.5 flex-shrink-0">&gt;&gt;</span>
                          <span className="font-sans font-medium leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer with Direct Links */}
                <div className="p-3.5 sm:p-4 border-t border-[#00f0ff]/20 flex flex-col sm:flex-row gap-2.5 sm:gap-3 bg-[#050811]">
                  {activeProject.githubUrl ? (
                    <a 
                      href={activeProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex justify-center items-center gap-2 text-center font-bold text-xs tracking-widest uppercase bg-[#00f0ff] hover:bg-[#38f4ff] text-black py-2.5 sm:py-3 px-3 rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>OPEN_GITHUB_REPO</span>
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex-1 flex justify-center items-center gap-2 text-center font-bold text-xs tracking-widest uppercase bg-[#090e1c] text-[#7f99b8]/40 border border-white/10 py-2.5 sm:py-3 px-3 rounded-lg cursor-not-allowed select-none"
                      title="Open source repository is unavailable for this multimedia production"
                    >
                      <svg className="w-4 h-4 opacity-40 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>OPEN_SOURCE_REPO [DISABLED]</span>
                    </button>
                  )}
                  {activeProject.liveDemoUrl && (
                    <a 
                      href={activeProject.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex justify-center items-center gap-2 text-center font-bold text-xs tracking-widest uppercase border border-[#00f0ff]/40 text-[#00f0ff] hover:bg-[#00f0ff]/10 py-2.5 sm:py-3 px-3 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{activeProject.isVideoProject ? "WATCH_ON_YOUTUBE" : "VISIT_LIVE_DEMO"}</span>
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

const filterTabs = [
  { key: "ALL", label: "ALL [6]" },
  { key: "WEB", label: "WEB APPS [2]" },
  { key: "GAMES_MOBILE", label: "GAMES & MOBILE [2]" },
  { key: "DESKTOP_3D", label: "DESKTOP & 3D [2]" },
]

const projectList = [
  {
    index: 0,
    imagePath: "/images/techdrop-merakit.png",
    title: "TechDrop 2.0 - PC Hardware Educational Game",
    category: "Game Development // Unity & C#",
    categoryType: "GAMES_MOBILE",
    shortDescription: "Interactive 2D/3D PC hardware assembly simulation game built with Unity Engine and C# using Game Development Life Cycle (GDLC). Features drag-and-drop hardware installation, level-based challenges, and diagnostic quizzes.",
    fullDescription: "TechDrop 2.0 is a flagship educational desktop game designed to teach computer hardware architecture through tactile interaction. Built with Unity Engine 2021 LTS and C#, the project was developed under the structured Game Development Life Cycle (GDLC) methodology. Players engage in simulated computer assembly (inserting CPU, RAM, GPU, PSU, and drives into motherboards), learn hardware specifications, and test their comprehension through diagnostic mini-games. Thoroughly evaluated with an 85% Expert Rating and 90.6% User Acceptance Score.",
    createdAt: "2026",
    features: [
      "Rigorous GDLC Lifecycle (Concept, Pre-Production, Production, Testing, Beta Release)",
      "Interactive Drag-and-Drop Motherboard & Chassis Assembly Simulation",
      "Comprehensive Computer Hardware Knowledge Base & Diagnostic Quizzes",
      "Empirically Validated: 85% Expert Acceptance & 90.6% User Usability Rating",
      "Playable Distribution Build Released on itch.io for Windows Systems"
    ],
    tech: ["Unity Engine", "C#", "GDLC Methodology", "2D/3D Game Physics", "UI/UX Architecture"],
    githubUrl: "https://github.com/Khoniv/techdrop-nivdev",
    liveDemoUrl: "https://khonif-zakaria.itch.io/techdropdev",
    isVideoProject: false,
  },
  {
    index: 1,
    imagePath: "/images/capitstore-showcase.svg",
    title: "Capit Store - Footwear E-Commerce Platform",
    category: "Fullstack Web // Next.js & MongoDB",
    categoryType: "WEB",
    shortDescription: "Modern footwear e-commerce application developed with Next.js 15, React 19, MongoDB Atlas, Clerk Authentication, and Inngest queues for Ndaweg Studio's casual sandal brand.",
    fullDescription: "Capit Store (by Ndaweg Studio) is a full-featured contemporary e-commerce platform dedicated to casual footwear crafted by Indonesian creators. Built on Next.js 15 App Router and React 19, it integrates Clerk for secure multi-role authentication (customer & administrative seller), MongoDB Atlas for dynamic product catalogs, Inngest for asynchronous background inventory queues, and Cloudinary for optimized media delivery. Includes real-time cart hydration, order placement tracking, and backoffice inventory management.",
    createdAt: "2025",
    features: [
      "Clerk Authentication with Customer & Seller Role-Based Access (RBAC)",
      "Dynamic Product Filtering, Category Browsing & Instant Cart Hydration",
      "Automated Inventory Deductions & Multi-Address Delivery Management",
      "Asynchronous Background Job Synchronization via Inngest Queues",
      "Dedicated Administrative Backoffice for Stock Monitoring & Catalog Control"
    ],
    tech: ["Next.js 15", "React 19", "MongoDB Atlas", "Clerk Auth", "Tailwind CSS", "Inngest"],
    githubUrl: "https://github.com/Khoniv/capit-store",
    liveDemoUrl: "https://github.com/Khoniv/capit-store",
    isVideoProject: false,
  },
  {
    index: 2,
    imagePath: "/images/news5-showcase.svg",
    title: "News-5 - Editorial Digital News Portal & CMS",
    category: "Web Portal // Laravel 11 & Livewire 3",
    categoryType: "WEB",
    shortDescription: "Editorial news publishing portal built with Laravel 11 and Livewire 3. Features zero-reload real-time reader discussions, trending article analytics, and role-based backoffice CMS.",
    fullDescription: "News-5 is a modern digital journalism portal and Content Management System (CMS) designed for high-throughput editorial publications. Powered by Laravel 11 and Laravel Livewire 3, the front-end provides an immersive magazine-style editorial experience with trending stories ranked by viewer analytics, automated slug generation, and real-time comment threads that update instantly without page refreshes. The backoffice allows administrators and journalists to draft, review, categorize, and schedule articles seamlessly.",
    createdAt: "2025",
    features: [
      "Multi-Tier Role-Based Access Control (Super Admin vs. Editorial Staff)",
      "Zero-Reload Interactive Reader Discussions & Replies via Livewire 3",
      "Automated Trending Algorithm based on Real-Time Article View Counters",
      "Rich Text Article Composition with Media Uploads & Categorization",
      "Search Engine Optimization (SEO) with Automated Slugs & Meta Tags"
    ],
    tech: ["Laravel 11", "PHP 8.3", "Livewire 3", "MySQL", "Tailwind CSS", "Pest PHP"],
    githubUrl: "https://github.com/Khoniv/news-5",
    liveDemoUrl: "https://github.com/Khoniv/news-5",
    isVideoProject: false,
  },
  {
    index: 3,
    imagePath: "/images/parkeazy-showcase.svg",
    title: "ParkEazy - Desktop Parking Management System",
    category: "Desktop Engineering // C# .NET & MSSQL",
    categoryType: "DESKTOP_3D",
    shortDescription: "Windows desktop parking operations software engineered with C#, .NET Framework 4.7.2, and Guna.UI2. Features visual bay allocation (P1-P12), automated check-in/out, and SQL Server persistence.",
    fullDescription: "ParkEazy is a high-reliability desktop management suite designed to modernize commercial parking facility operations. Developed in C# and .NET Framework 4.7.2 with Guna.UI2 modern desktop components, the system gives parking attendants an interactive visual grid of 12 real-time parking bays (P1 through P12). Attendants can register license plates, categorize vehicles between cars and motorcycles, compute dynamic hourly rates, and record all transaction histories into Microsoft SQL Server.",
    createdAt: "2024",
    features: [
      "Real-Time Interactive Visual Bay Grid Tracking for Slots P1 through P12",
      "Multi-Vehicle Classification (Automobiles & Motorcycles) with Rate Logic",
      "Instant Vehicle Check-In, Automated Bay Reservation & Ticket Timestamping",
      "Structured Relational Database Architecture on Microsoft SQL Server",
      "ClickOnce Deployment Packaging with Guna.UI2 Fluid Desktop Controls"
    ],
    tech: ["C#", ".NET Framework 4.7.2", "Guna.UI2", "Microsoft SQL Server", "Windows Forms"],
    githubUrl: "https://github.com/Khoniv/park-eazy",
    liveDemoUrl: "https://github.com/Khoniv/park-eazy",
    isVideoProject: false,
  },
  {
    index: 4,
    imagePath: "/images/jbag-showcase.svg",
    title: "JBAG - Mobile Game Account Marketplace",
    category: "Mobile Application // Flutter & Dart",
    categoryType: "GAMES_MOBILE",
    shortDescription: "Cross-platform mobile marketplace application built with Flutter and Dart for secure game account transactions with multi-game catalog and Indonesian e-wallet integration (DANA, GoPay, OVO).",
    fullDescription: "JBAG (Jual Beli Akun Game) is a mobile e-commerce marketplace engineered in Flutter and Dart to provide gamers with a safe, escrow-protected environment for trading verified game accounts (Mobile Legends, Genshin Impact, Free Fire, Valorant, PUBG Mobile). Architected following Clean Architecture principles, the app delivers lightning-fast catalog search, seller listing verification, multi-tiered checkout flows, and seamless settlement integrations with prominent Indonesian e-wallets including GoPay, DANA, and OVO.",
    createdAt: "2024",
    features: [
      "Cross-Platform Mobile Interface Built with Flutter 3.47+ & Dart",
      "Verified Gaming Account Catalog with Rarity, Rank & Skin Attribute Filters",
      "Multi-Channel Indonesian Payment Integration (GoPay, DANA, OVO, Bank VA)",
      "Shopping Cart State Hydration & Secure Escrow-Style Checkout Flow",
      "Clean Architecture Separation of Concerns with Comprehensive Unit Tests"
    ],
    tech: ["Flutter", "Dart", "Clean Architecture", "REST API", "State Management", "Mobile UX"],
    githubUrl: "https://github.com/Khoniv/jbag-jual-beli-akun-game.git",
    liveDemoUrl: "https://github.com/Khoniv/jbag-jual-beli-akun-game.git",
    isVideoProject: false,
  },
  {
    index: 5,
    imagePath: "/images/tupat-real.jpg",
    title: "Petualangan Si Tupat - 3D Animated Short",
    category: "3D Animation // Ndaweg Studio",
    categoryType: "DESKTOP_3D",
    shortDescription: "Production of a 3D animated short film by Ndaweg Studio. Khonif served as Producer, 3D Rigging Artist, and Lighting/Rendering Artist using Autodesk 3ds Max, Mixamo, and Adobe After Effects.",
    fullDescription: "Petualangan Si Tupat is a 3D animated short film produced by Ndaweg Studio celebrating cultural and educational storytelling. On this production, Khonif took on key creative and technical roles as Producer, Rigging Artist, and Lighting/Rendering Artist. The pipeline encompassed 3D character biped rigging and skinning in Autodesk 3ds Max, motion integration with Mixamo, volumetric lighting setups, multi-pass rendering, and post-production compositing in Adobe After Effects and Premiere Pro. Streamed publicly on YouTube.",
    createdAt: "2025",
    features: [
      "Project Leadership: Served as Producer, Rigging Artist & Rendering Lead",
      "3D Character Rigging, Weight Painting & Skeletal Setup in Autodesk 3ds Max",
      "Dynamic Lighting, Atmosphere Shading & High-Fidelity Rendering Pipeline",
      "Audio-Visual Compositing, Color Grading & Post-Production in After Effects",
      "Broadcasted and Available for Public Streaming on Official YouTube Channel"
    ],
    tech: ["Autodesk 3ds Max", "Mixamo", "Adobe After Effects", "Adobe Premiere Pro", "3D Animation"],
    githubUrl: null,
    liveDemoUrl: "https://youtu.be/6OVzISjvvxU",
    isVideoProject: true,
  },
]

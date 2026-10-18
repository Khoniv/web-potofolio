"use client"
import FadeDown from "@/components/animations/FadeDown"
import Fade from "@/components/animations/Fade"
import FadeLeft from "@/components/animations/FadeLeft"
import Image from "next/image"

export default function About() {
  return (
    <>
      <section id="about" className="w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-28 lg:py-32 cursor-default relative overflow-hidden border-t border-[#00f0ff]/20">
        
        {/* Cyberpunk Section Header */}
        <FadeDown>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-14 md:mb-16 w-full text-left font-mono">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#00f0ff] uppercase mb-2">
              <span className="text-[#ff007f]">&gt;</span> SYSTEM_KERNEL // PROFILE
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight flex flex-wrap items-baseline gap-2 sm:gap-3">
              About The Operator
              <span className="text-xs text-[#00ff66] border border-[#00ff66]/40 px-2 py-0.5 rounded font-mono font-normal">
                LVL.999
              </span>
            </h2>
          </div>
        </FadeDown>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 px-4 sm:px-6 md:px-12 items-center">
          
          {/* Cyberpunk Photo Card - Responsive for both mobile and desktop */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] relative">
              <Fade>
                {/* HUD Corners */}
                <span className="absolute -top-2 -left-2 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-l-2 border-[#00f0ff] z-20" />
                <span className="absolute -top-2 -right-2 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-r-2 border-[#ff007f] z-20" />
                <span className="absolute -bottom-2 -left-2 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-l-2 border-[#00ff66] z-20" />
                <span className="absolute -bottom-2 -right-2 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-r-2 border-[#00f0ff] z-20" />

                <div className="relative z-10 p-1.5 sm:p-2 bg-[#090e1c]/90 border border-[#00f0ff]/30 rounded-2xl shadow-[0_0_35px_rgba(0,240,255,0.18)] overflow-hidden aspect-[4/5] w-full group transition-all duration-500 hover:border-[#00f0ff] backdrop-blur-md">
                  <Image 
                    src="/images/khonif-informal.png" 
                    alt="Khonif Zakaria" 
                    fill 
                    priority
                    className="object-cover object-top transition-all duration-700 scale-100 group-hover:scale-102" 
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                  {/* Seamless blending overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#090e1c] to-transparent pointer-events-none" />

                  {/* Terminal overlay tag inside photo */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-[#050811]/90 backdrop-blur-md border border-[#00f0ff]/30 p-2 sm:p-3 rounded-lg font-mono text-[11px] sm:text-xs flex justify-between items-center text-[#7f99b8] z-10 shadow-lg">
                    <span className="text-[#00f0ff] font-bold">DEV_ID: #KHONIF-2026</span>
                    <span className="text-[#00ff66] font-bold">ONLINE</span>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Bio Terminal Logs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 font-mono">
              <div className="p-4 sm:p-5 md:p-6 rounded-xl bg-[#090e1c]/80 border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-colors shadow-lg">
                <Fade>
                  <div className="flex items-center gap-2 text-xs text-[#00f0ff] mb-2 sm:mb-3 font-bold uppercase">
                    <span className="text-[#ff007f]">&gt;</span> 01 // WHO_AM_I
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Operator Profile</h3>
                  <p className="text-xs md:text-sm text-[#a1b8d4] leading-relaxed font-sans font-normal">
                    I am Khonif Zakaria (23), an Informatics graduate from Universitas Amikom Purwokerto graduating Cumlaude (GPA 3.78 / 4.00). Experienced in engineering modern web architectures, scalable backend services, responsive mobile applications, C# desktop systems, and interactive 3D educational game engines with Unity.
                  </p>
                </Fade>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 rounded-xl bg-[#090e1c]/80 border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-colors shadow-lg">
                <Fade>
                  <div className="flex items-center gap-2 text-xs text-[#00f0ff] mb-2 sm:mb-3 font-bold uppercase">
                    <span className="text-[#ff007f]">&gt;</span> 02 // METHODOLOGY
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Core Engineering</h3>
                  <p className="text-xs md:text-sm text-[#a1b8d4] leading-relaxed font-sans font-normal">
                    Focused on analytical problem solving, clean code architecture, and structured execution using verified methodologies such as the Game Development Life Cycle (GDLC). Fast learner with strong proficiency in cross-functional agile collaboration.
                  </p>
                </Fade>
              </div>
            </div>

            {/* Operator Telemetry Specs Matrix */}
            <div className="mt-8 sm:mt-10 md:mt-12 font-mono">
              <Fade>
                <div className="flex items-center justify-between border-b border-[#00f0ff]/20 pb-2.5 sm:pb-3 mb-4 sm:mb-6">
                  <span className="text-xs font-bold text-[#00f0ff] tracking-widest uppercase">
                    // SYSTEM_METRICS & TELEMETRY
                  </span>
                  <span className="text-[10px] text-[#7f99b8]">DATABASE: LOCAL_INDEX</span>
                </div>
              </Fade>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <FadeLeft delay={0.1}>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-[#090e1c]/90 border border-[#00f0ff]/20 flex flex-col hover:border-[#00f0ff] transition-colors">
                    <span className="text-[10px] uppercase tracking-widest text-[#7f99b8] mb-1">OPERATOR_NAME</span>
                    <span className="text-xs sm:text-sm font-bold text-white">Khonif Zakaria</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.2}>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-[#090e1c]/90 border border-[#00f0ff]/20 flex flex-col hover:border-[#00f0ff] transition-colors">
                    <span className="text-[10px] uppercase tracking-widest text-[#7f99b8] mb-1">BASE_SECTOR</span>
                    <span className="text-xs sm:text-sm font-bold text-white">Banyumas, Central Java, ID</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.3}>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-[#090e1c]/90 border border-[#00f0ff]/20 flex flex-col hover:border-[#00f0ff] transition-colors">
                    <span className="text-[10px] uppercase tracking-widest text-[#7f99b8] mb-1">COMMS_LINK</span>
                    <span className="text-xs sm:text-sm font-bold text-white">+62 815 8522 1246</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.4}>
                  <div className="p-3 sm:p-3.5 rounded-lg bg-[#090e1c]/90 border border-[#00f0ff]/20 flex flex-col hover:border-[#00f0ff] transition-colors">
                    <span className="text-[10px] uppercase tracking-widest text-[#7f99b8] mb-1">ACADEMIC_RATING</span>
                    <span className="text-xs sm:text-sm font-bold text-[#00ff66]">3.78 / 4.00 (Cumlaude)</span>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.5}>
                  <div className="sm:col-span-2 p-3 sm:p-3.5 rounded-lg bg-[#090e1c]/90 border border-[#00f0ff]/20 flex flex-col hover:border-[#00f0ff] transition-colors">
                    <span className="text-[10px] uppercase tracking-widest text-[#7f99b8] mb-1">PRIMARY_ELECTRONIC_MAIL</span>
                    <a href="mailto:oniefzk11@gmail.com" className="text-xs sm:text-sm font-bold text-[#00f0ff] hover:underline break-all">
                      oniefzk11@gmail.com
                    </a>
                  </div>
                </FadeLeft>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

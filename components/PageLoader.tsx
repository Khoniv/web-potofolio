"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [bootLog, setBootLog] = useState("INITIALIZING_CORE_SYSTEM...")
  const [progress, setProgress] = useState(12)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const logs = [
      "INITIALIZING_CORE_SYSTEM...",
      "CONNECTING_NEURAL_INTERFACE...",
      "LOADING_TECH_MODULES [REACT, NEXTJS, UNITY, C#]...",
      "FETCHING_SECURE_REPOSITORIES...",
      "SYSTEM_OPTIMIZED // READY_TO_DEPLOY."
    ]

    let logIndex = 0
    const interval = setInterval(() => {
      logIndex++
      if (logIndex < logs.length) {
        setBootLog(logs[logIndex])
        setProgress(Math.min(99, 20 * (logIndex + 1)))
      }
    }, 320)

    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.overflow = "unset"
      }, 350)
    }, 1800)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(15px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050811] flex flex-col items-center justify-center overflow-hidden font-mono text-[#00f0ff] p-4"
        >
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          
          {/* Radial ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Terminal Box */}
          <div className="relative z-10 w-full max-w-md border border-[#00f0ff]/30 bg-[#090e1c]/90 p-6 md:p-8 rounded-lg shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-md">
            
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#00f0ff]/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff007f] shadow-[0_0_8px_#ff007f]" />
                <span className="w-3 h-3 rounded-full bg-[#ffaa00] shadow-[0_0_8px_#ffaa00]" />
                <span className="w-3 h-3 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7f99b8]">PORT_2026 // NEURAL_LINK</span>
            </div>

            {/* Title / Identity */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <h1 className="text-2xl md:text-3xl font-black tracking-wider text-white">
                  NivDev<span className="text-[#00f0ff] animate-pulse">.exe</span>
                </h1>
                <span className="text-xs text-[#00ff66] font-semibold bg-[#00ff66]/10 px-2 py-0.5 rounded border border-[#00ff66]/30">
                  SYS_ONLINE
                </span>
              </div>
              <p className="text-xs text-[#7f99b8] mt-1 tracking-wide">
                CYBERNETIC_PORTFOLIO_V2.0
              </p>
            </div>

            {/* Dynamic Console Output */}
            <div className="bg-[#050811] border border-[#00f0ff]/20 p-3 rounded font-mono text-xs text-[#00f0ff] min-h-[48px] flex items-center gap-2">
              <span className="text-[#ff007f] font-bold">&gt;</span>
              <span className="truncate">{bootLog}</span>
              <span className="inline-block w-2 h-4 bg-[#00f0ff] animate-cursor" />
            </div>

            {/* Cyber Progress Indicator */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono text-[#7f99b8]">
                <span>LOADING_DATA</span>
                <span className="text-[#00f0ff] font-bold">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-[#050811] border border-[#00f0ff]/30 rounded-sm overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-linear-to-r from-[#00f0ff] via-[#38f4ff] to-[#00ff66] shadow-[0_0_12px_#00f0ff]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Corner Tech Badges */}
            <div className="mt-6 flex justify-between items-center text-[10px] text-[#7f99b8] font-mono">
              <span>SEC_LEVEL: 0</span>
              <span className="text-[#ff007f]">BUILD: PROD_CYBER_2026</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

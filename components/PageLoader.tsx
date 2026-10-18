"use client"
import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(8)

  const finishLoading = () => {
    setProgress(100)
    setIsLoading(false)
    document.body.style.overflow = "unset"
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsLoading(false)
      return
    }

    document.body.style.overflow = "hidden"
    const interval = setInterval(() => {
      setProgress((p) => Math.min(96, p + Math.random() * 22))
    }, 260)

    const timer = setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.overflow = "unset"
      }, 300)
    }, 1400)

    const skipOnClick = () => finishLoading()
    window.addEventListener("click", skipOnClick)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
      window.removeEventListener("click", skipOnClick)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-paper flex flex-col items-center justify-center p-6"
          aria-hidden="true"
        >
          <p className="font-display text-2xl font-bold tracking-tight text-ink">
            niv<span className="text-accent">.dev</span>
          </p>
          <p className="font-mono text-xs text-muted mt-2 mb-6">loading portfolio…</p>
          <div className="w-48 h-1 rounded-full bg-border overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.25 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

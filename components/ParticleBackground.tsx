"use client"
import { useEffect, useState } from "react"
import ParticleDrift from "./ui/particle-drift"

// Full-page particle background. The mode is driven explicitly by the
// site's own theme mechanism (the .dark class on <html>), observed live
// so toggling the theme swaps the particle palette too.
// Skipped entirely for users who prefer reduced motion.
export default function ParticleBackground() {
  const [mode, setMode] = useState<"dark" | "light" | null>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const root = document.documentElement
    const update = () =>
      setMode(root.classList.contains("dark") ? "dark" : "light")
    update()
    const observer = new MutationObserver(update)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  if (reduced || mode === null) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -1 }}
    >
      <ParticleDrift mode={mode} className="h-full w-full" />
    </div>
  )
}

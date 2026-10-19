"use client"
import { useEffect, useRef, useState } from "react"
import ParticleDrift from "./ui/particle-drift"

// Full-page particle background. The mode is driven explicitly by the
// site's own theme mechanism (the .dark class on <html>), observed live
// so toggling the theme swaps the particle palette too.
// Skipped entirely for users who prefer reduced motion.
export default function ParticleBackground() {
  const [mode, setMode] = useState<"dark" | "light" | null>(null)
  const [reduced, setReduced] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

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

  // Relay the cursor position into the iframe so particles react to hover.
  // The iframe must stay pointer-events:none (it may never block clicks),
  // so the parent page forwards coordinates, rAF-throttled.
  useEffect(() => {
    if (reduced) return
    let raf = 0
    let x = -1000
    let y = -1000
    const send = () => {
      raf = 0
      const frame = wrapRef.current?.querySelector("iframe")?.contentWindow
      frame?.postMessage({ type: "threeui-mouse", x, y }, "*")
    }
    const queue = (nx: number, ny: number) => {
      x = nx
      y = ny
      if (!raf) raf = requestAnimationFrame(send)
    }
    const onMove = (e: PointerEvent) => queue(e.clientX, e.clientY)
    const onLeave = () => queue(-1000, -1000)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", onLeave)
    return () => {
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduced])

  if (reduced || mode === null) return null

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -1 }}
    >
      <ParticleDrift mode={mode} className="h-full w-full" />
    </div>
  )
}

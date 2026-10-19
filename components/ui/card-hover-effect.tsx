"use client"
import { AnimatePresence, motion } from "motion/react"
import { useState, type ReactNode } from "react"

/**
 * Aceternity-style card hover effect.
 *
 * Wrap each card in <HoverCard>. A single animated background layer glides
 * between cards as the cursor moves (shared layoutId), fading in behind
 * the hovered card. Cards sharing the same layoutId animate the highlight
 * between each other.
 */
export function HoverCard({
  children,
  className = "",
  hoverClassName = "bg-ink/[0.05] dark:bg-white/[0.08]",
  layoutId = "hoverBackground",
}: {
  children: ReactNode
  className?: string
  hoverClassName?: string
  layoutId?: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            aria-hidden="true"
            className={`pointer-events-none absolute -inset-2 rounded-[20px] motion-reduce:hidden ${hoverClassName}`}
            layoutId={layoutId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.18 } }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  )
}

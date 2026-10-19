"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "motion/react"

export default function FadeOnly({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  )
}

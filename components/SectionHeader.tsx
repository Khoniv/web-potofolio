"use client"
import FadeDown from "@/components/animations/FadeDown"

export default function SectionHeader({
  index,
  title,
  subtitle,
  description,
}: {
  index: string
  title: string
  subtitle: string
  description?: string
}) {
  return (
    <FadeDown>
      <div className="mb-10 sm:mb-14">
        <p className="font-mono text-xs text-accent font-medium tracking-[0.2em] uppercase mb-3">
          <span className="text-faint">~/</span>{index} / {subtitle}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">{description}</p>
        )}
      </div>
    </FadeDown>
  )
}

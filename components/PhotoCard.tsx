import Image from "next/image"
import { GlowCard } from "./ui/spotlight-card"

export default function PhotoCard({ priority = false }: { priority?: boolean }) {
  return (
    <div className="group relative">
      {/* Kartu foto utama */}
      <GlowCard
        customSize
        glowColor="mono"
        className="aspect-[4/5] p-0! group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_rgba(22,22,26,0.22)] transition-all duration-500"
      >
        {/* Foto */}
        <span className="absolute inset-0 overflow-hidden rounded-[calc(var(--radius)*1px)]">
          <Image
            src="/images/khonif-informal.png"
            alt="Foto Khonif Zakaria"
            width={560}
            height={700}
            priority={priority}
            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.04] transition-all duration-700 ease-out"
          />
        </span>
        {/* Badge GPA */}
        <div className="absolute top-4 left-4 z-[2] bg-surface/70 backdrop-blur-xl border border-border text-ink rounded-xl px-3.5 py-2.5 shadow-lg transition-transform duration-500 group-hover:-translate-y-0.5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-faint">GPA</p>
          <p className="font-display font-bold text-sm leading-tight">3.78 / 4.00</p>
        </div>
        {/* Caption bawah */}
        <div className="absolute bottom-0 inset-x-0 z-[2] p-4 pt-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-between">
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Khonif Zakaria</p>
            <p className="text-white/70 text-xs mt-0.5">Banyumas, Central Java</p>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/70">S.KOM</span>
        </div>
      </GlowCard>
      {/* Kartu degree melayang */}
      <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-surface/70 backdrop-blur-xl border border-border text-ink rounded-xl px-4 py-3 shadow-[0_12px_36px_rgba(22,22,26,0.28)] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-1">
        <p className="font-mono text-[10px] uppercase tracking-widest text-faint">Degree</p>
        <p className="font-display font-bold text-sm leading-tight mt-0.5">S.Kom. Informatics</p>
      </div>
    </div>
  )
}

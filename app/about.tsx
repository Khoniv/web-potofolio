"use client"
import Fade from "@/components/animations/Fade"
import FadeLeft from "@/components/animations/FadeLeft"
import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 border-t border-border">
        <SectionHeader index="01" subtitle="About" title="A bit about me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Photo */}
          <div className="lg:col-span-5">
            <Fade>
              <div className="rounded-3xl overflow-hidden border border-border bg-surface shadow-[0_20px_60px_rgba(22,22,26,0.08)] max-w-[380px] mx-auto lg:mx-0">
                <Image
                  src="/images/hero.jpg"
                  alt="Khonif Zakaria"
                  width={828}
                  height={1024}
                  className="object-cover object-top aspect-[4/5] w-full h-auto"
                  sizes="(max-width: 1024px) 90vw, 380px"
                />
              </div>
            </Fade>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Fade>
                <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border hover:border-ink/30 transition-colors">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-2">Profile</p>
                  <h3 className="font-display text-lg font-bold text-ink mb-2">Khonif Zakaria, S.Kom.</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Informatics graduate (S1) from Universitas Amikom Purwokerto, cumlaude with
                    GPA 3.78/4.00. I build modern web apps, backend services, mobile apps,
                    desktop systems, and interactive 3D games with Unity.
                  </p>
                </div>
              </Fade>
              <Fade>
                <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border hover:border-ink/30 transition-colors">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-2">How I work</p>
                  <h3 className="font-display text-lg font-bold text-ink mb-2">Clean &amp; structured</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Analytical problem solving, clean code architecture, and structured delivery —
                    including the Game Development Life Cycle (GDLC). Fast learner, comfortable
                    collaborating in agile teams.
                  </p>
                </div>
              </Fade>
            </div>

            {/* Info grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoItems.map((item, i) => (
                <FadeLeft key={i} delay={i * 0.08}>
                  <div className="p-4 rounded-xl bg-surface border border-border flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-ink hover:text-accent transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-ink">{item.value}</span>
                    )}
                  </div>
                </FadeLeft>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const infoItems = [
  { label: "Name", value: "Khonif Zakaria, S.Kom." },
  { label: "Location", value: "Banyumas, Central Java, ID" },
  { label: "Phone / WhatsApp", value: "+62 815 8522 1246", href: "https://wa.me/6281585221246" },
  { label: "Degree", value: "S.Kom. — Informatics (S1)" },
  { label: "GPA", value: "3.78 / 4.00 — Cumlaude" },
  { label: "Email", value: "oniefzk11@gmail.com", href: "mailto:oniefzk11@gmail.com" },
]

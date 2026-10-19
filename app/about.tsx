"use client"
import Fade from "@/components/animations/Fade"
import FadeLeft from "@/components/animations/FadeLeft"
import SectionHeader from "@/components/SectionHeader"
import PhotoCard from "@/components/PhotoCard"
import { GlowCard } from "@/components/ui/spotlight-card"

export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 border-t border-border">
        <SectionHeader index="01" subtitle="About" title="A bit about me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Photo */}
          <div className="lg:col-span-5">
            <Fade>
              <div className="max-w-[360px] mx-auto lg:mx-0 pb-6">
                <PhotoCard />
              </div>
            </Fade>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Fade className="h-full">
                <GlowCard
                  customSize
                  glowColor="mono"
                  className="h-full p-5! sm:p-6! hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-2">Profile</p>
                    <h3 className="font-display text-lg font-bold text-ink mb-2">Khonif Zakaria, S.Kom.</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      I graduated in Informatics (S1) from Universitas Amikom Purwokerto with a 3.78 GPA.
                      I work on web apps, backend services, mobile apps, desktop systems,
                      and 3D games built with Unity.
                    </p>
                  </div>
                </GlowCard>
              </Fade>
              <Fade className="h-full">
                <GlowCard
                  customSize
                  glowColor="mono"
                  className="h-full p-5! sm:p-6! hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint mb-2">How I work</p>
                    <h3 className="font-display text-lg font-bold text-ink mb-2">Analytical &amp; adaptable</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      I tackle problems with analytical and critical thinking, breaking complex challenges
                      into solvable parts. AI-literate and adaptable, I learn continuously and thrive in
                      teams — communicating clearly, managing time well, and obsessing over the details.
                    </p>
                  </div>
                </GlowCard>
              </Fade>
            </div>

            {/* Info grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoItems.map((item, i) => (
                <FadeLeft key={i} delay={i * 0.08}>
                  <GlowCard
                    customSize
                    glowColor="mono"
                    backdropBlur={false}
                    className="p-4! flex! flex-col gap-1! hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-ink hover:text-accent transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-ink">{item.value}</span>
                    )}
                  </GlowCard>
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
  { label: "Degree", value: "S.Kom., Informatics (S1)" },
  { label: "GPA", value: "3.78 / 4.00, Cumlaude" },
  { label: "Email", value: "oniefzk11@gmail.com", href: "mailto:oniefzk11@gmail.com" },
]

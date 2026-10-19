import SectionHeader from "@/components/SectionHeader"
import Fade from "@/components/animations/Fade"

export default function Contact() {
  return (
    <section id="contacts" className="w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 border-t border-border">
        <SectionHeader
          index="06"
          subtitle="Contact"
          title="Let's work together"
          description="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Map card */}
          <Fade>
            <div className="rounded-2xl overflow-hidden border border-border bg-surface h-[280px] sm:h-[340px] lg:h-full lg:min-h-[380px] relative">
              <div className="absolute top-4 left-4 z-10 bg-surface/95 backdrop-blur px-3.5 py-2 rounded-xl border border-border shadow-sm pointer-events-none">
                <p className="text-[13px] font-semibold text-ink flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Banyumas, Central Java
                </p>
                <p className="font-mono text-[10px] text-faint mt-0.5">-7.5303° S, 109.2941° E</p>
              </div>
              <iframe
                title="Peta lokasi Khonif Zakaria, Banyumas, Jawa Tengah"
                src="https://maps.google.com/maps?q=Banyumas,Central+Java,Indonesia&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale-[35%] contrast-[1.05] dark:grayscale-0 dark:invert-[0.92] dark:hue-rotate-180 dark:contrast-[0.9]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Fade>

          {/* Channel list */}
          <div className="flex flex-col gap-3">
            {channels.map((channel, i) => (
              <Fade key={i}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${channel.label}: ${channel.detail}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl bg-surface/60 backdrop-blur-md border border-border p-4 sm:p-5 hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(22,22,26,0.10)] hover:-translate-y-0.5 transition-all duration-300 glow-border"
                >
                  <span className="flex items-center gap-4 min-w-0">
                    <span className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors ${channel.iconClass}`}>
                      {channel.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink">{channel.label}</span>
                      <span className="block text-[13px] text-muted truncate">{channel.detail}</span>
                    </span>
                  </span>
                  <svg className="w-4 h-4 flex-shrink-0 text-faint group-hover:text-ink group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const channels = [
  {
    label: "GitHub",
    detail: "github.com/Khoniv",
    href: "https://github.com/Khoniv",
    iconClass: "bg-paper border-border text-ink",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    detail: "linkedin.com/in/khonif-zakaria",
    href: "https://www.linkedin.com/in/khonif-zakaria",
    iconClass: "bg-[#0a66c2]/10 border-[#0a66c2]/20 text-[#0a66c2]",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Email",
    detail: "oniefzk11@gmail.com",
    href: "mailto:oniefzk11@gmail.com",
    iconClass: "bg-accent-soft border-accent/20 text-accent",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    detail: "+62 815 8522 1246",
    href: "https://wa.me/6281585221246",
    iconClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

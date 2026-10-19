"use client"
import { motion } from "motion/react"
import SectionHeader from "@/components/SectionHeader"
import { HoverCard } from "@/components/ui/card-hover-effect"

export default function Certifications() {
  return (
    <section id="certifications" className="w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 border-t border-border">
        <SectionHeader
          index="03"
          subtitle="Certifications"
          title="Credentials"
          description="Click a card to open the original certificate."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {certifications.map((cert, i) => (
            <HoverCard key={i} layoutId="certHover" className="h-full">
            <motion.a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl bg-surface/60 backdrop-blur-md border border-border p-5 sm:p-6 flex items-start gap-4 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 hover-glow h-full"
              aria-label={`Open certificate: ${cert.title} (Google Drive document, new tab)`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-soft border border-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-paper transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base sm:text-lg font-bold text-ink tracking-tight leading-snug">
                    {cert.title}
                  </h3>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1 text-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-[13px] text-muted mt-1">{cert.issuer}</p>
                <p className="text-[13px] text-faint mt-1.5 leading-relaxed">{cert.description}</p>
              </div>
            </motion.a>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  )
}

const certifications = [
  {
    title: "CAIA: Certified Artificial Intelligence Associate",
    issuer: "Logical Operations",
    description: "Industry-recognized certification covering AI fundamentals and applied artificial intelligence.",
    url: "https://drive.google.com/file/d/1rN6Jc-6NU8kNa2ZmF-vyT-_c5AN-Kynp/view?usp=sharing",
  },
  {
    title: "DOT: Desktop Office Training",
    issuer: "Applied Microsoft Office program",
    description: "Certification for applied Microsoft Office skills for professional office work.",
    url: "https://drive.google.com/file/d/12JRHjgc0JcsuvxqkRZLbFlA9aBycF-Ff/view?usp=sharing",
  },
  {
    title: "English Certification",
    issuer: "Universitas Amikom Purwokerto",
    description: "Official English language certification program.",
    url: "https://drive.google.com/file/d/1fSwT63eMJs8_6xU7T1trPE9uFVucRdOQ/view?usp=sharing",
  },
  {
    title: "UKM Inmed Certificate",
    issuer: "Information Technology Research and Multimedia",
    description: "Certificate from the UKM Inmed student organization for contributions in the programming division.",
    url: "https://drive.google.com/file/d/1fD8z4jJ70qIYTK18dhoge8zp8A4fs-zI/view?usp=sharing",
  },
]

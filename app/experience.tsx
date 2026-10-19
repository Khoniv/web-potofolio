"use client"
import { motion } from "motion/react"
import SectionHeader from "@/components/SectionHeader"

export default function Experience() {
  return (
    <section id="experience" className="w-full scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 border-t border-border">
        <SectionHeader
          index="02"
          subtitle="Experience"
          title="Where I've worked"
          description="Education, organizations, and certifications that shaped how I build software."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-5 sm:gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative pl-9 sm:pl-12"
              >
                <span
                  className="absolute left-0 sm:left-[3px] top-6 h-[15px] w-[15px] rounded-full border-[3px] border-accent bg-paper group-hover:scale-125 transition-transform"
                  aria-hidden="true"
                />
                <article className="rounded-2xl bg-surface/60 backdrop-blur-md border border-border p-5 sm:p-7 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(22,22,26,0.10)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-ink tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="font-mono text-xs text-muted bg-paper border border-border rounded-lg px-2.5 py-1">
                        {exp.date}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-widest rounded-lg px-2.5 py-1 border ${
                          exp.status === "Certified"
                            ? "bg-accent-soft text-accent border-accent/20"
                            : "bg-paper text-muted border-border"
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-medium bg-paper border border-border text-muted rounded-lg px-2.5 py-1 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {exp.certLink && (
                    <a
                      href={exp.certLink}
                      className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-accent hover:underline"
                    >
                      View certificates
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const experiences = [
  {
    id: 1,
    company: "Universitas Amikom Purwokerto",
    role: "Bachelor of Informatics (S1)",
    date: "2022-2026",
    status: "Graduated",
    description:
      "Informatics degree (S.Kom.), focused on Software Engineering and Game Development. Graduated cumlaude with a 3.78 GPA. Thesis: applying the Game Development Life Cycle (GDLC) to a computer hardware educational game built with Unity.",
    skills: ["Unity Engine", "C#", "GDLC", "Software Engineering", "AI & NLP"],
  },
  {
    id: 2,
    company: "UKM Inmed, Information Technology Research and Multimedia",
    role: "Programming Division",
    date: "2023-2024",
    status: "Completed",
    description:
      "Built web, desktop, and mobile systems with a student IT community. Joined architecture discussions, code reviews, and integration testing.",
    skills: ["Web Development", "Desktop Systems", "Mobile Apps", "Agile Collaboration"],
    certLink: "#certifications",
  },
  {
    id: 3,
    company: "Logical Operations & Amikom",
    role: "Professional Certifications",
    date: "2025",
    status: "Certified",
    description:
      "Earned three credentials: Certified Artificial Intelligence Associate (CAIA) from Logical Operations, Desktop Office Training (DOT), and the English Certification Program from Universitas Amikom Purwokerto.",
    skills: ["Artificial Intelligence (CAIA)", "Applied Office Systems (DOT)", "English Certification"],
    certLink: "#certifications",
  },
  {
    id: 4,
    company: "SMK Ma'arif NU 1 Paguyangan",
    role: "Computer & Network Engineering (TKJ)",
    date: "2019-2022",
    status: "Graduated",
    description:
      "Learned the IT basics: computer networking, hardware assembly and troubleshooting, Linux, structured cabling, and routing.",
    skills: ["Computer Networking", "Hardware Assembly", "Troubleshooting", "Linux"],
  },
]

import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-[#00f0ff]/20 bg-[#050811] py-6 sm:py-8 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        
        <div className="text-center md:text-left flex flex-col gap-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
            <p className="text-[11px] sm:text-xs font-bold text-white tracking-widest uppercase">
              &copy; {currentYear} KHONIF ZAKARIA // ALL_RIGHTS_RESERVED
            </p>
          </div>
          <p className="text-[10px] sm:text-[11px] text-[#7f99b8]">
            BUILT_WITH: NEXT.JS 16 // TAILWIND_V4 // FRAMER_MOTION // CYBERPUNK_SYS
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-5 text-[11px] sm:text-xs">
          <a 
            href="https://github.com/Khoniv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#7f99b8] hover:text-[#00f0ff] transition-colors tracking-widest uppercase flex items-center gap-1"
          >
            <span className="text-[#ff007f]">&gt;</span> GITHUB
          </a>
          <a 
            href="https://www.linkedin.com/in/khonif-zakaria" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#7f99b8] hover:text-[#00f0ff] transition-colors tracking-widest uppercase flex items-center gap-1"
          >
            <span className="text-[#ff007f]">&gt;</span> LINKEDIN
          </a>
          <a 
            href="mailto:oniefzk11@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#7f99b8] hover:text-[#00f0ff] transition-colors tracking-widest uppercase flex items-center gap-1"
          >
            <span className="text-[#ff007f]">&gt;</span> EMAIL
          </a>
          <a 
            href="https://wa.me/6281585221246" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#7f99b8] hover:text-[#00f0ff] transition-colors tracking-widest uppercase flex items-center gap-1"
          >
            <span className="text-[#ff007f]">&gt;</span> WHATSAPP
          </a>
        </div>

      </div>
    </footer>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-night text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold tracking-tight text-lg">
            khonif<span className="text-accent">.dev</span>
          </p>
          <p className="text-[13px] text-white/50 mt-1">
            &copy; {currentYear} Khonif Zakaria, S.Kom. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] font-medium">
          <a
            href="https://github.com/Khoniv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/khonif-zakaria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:oniefzk11@gmail.com"
            className="text-white/60 hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://wa.me/6281585221246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 text-[11px] font-mono text-white/35 text-center md:text-left">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

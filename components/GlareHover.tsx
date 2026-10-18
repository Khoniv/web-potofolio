"use client"
import React, { useRef, useState } from "react"

interface GlareHoverProps {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const GlareHover: React.FC<GlareHoverProps> = ({ 
  children, 
  className = "", 
  style = {} 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [hoverKey, setHoverKey] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setHoverKey((prev) => prev + 1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group/cyber-glare transition-all duration-300 ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Cyber Laser Scanline Sweep - runs exactly 1x per hover */}
      {isHovered && (
        <div 
          key={hoverKey}
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent pointer-events-none z-30 animate-cyber-laser" 
        />
      )}

      {/* 2. Cyber Hologram Neon Glare Beam (Cyan to Magenta pulse) */}
      <div 
        className={`absolute inset-0 pointer-events-none z-20 transition-all duration-700 ease-out ${
          isHovered 
            ? "translate-x-full opacity-100" 
            : "-translate-x-full opacity-0"
        }`}
        style={{
          background: "linear-gradient(105deg, transparent 30%, rgba(0, 240, 255, 0.22) 45%, rgba(255, 0, 127, 0.2) 55%, transparent 70%)",
          filter: "drop-shadow(0 0 12px rgba(0, 240, 255, 0.4))",
        }}
      />

      {/* 3. Cyber Data Grid Glitch Overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-500 bg-[linear-gradient(to_right,rgba(0,240,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px] ${
          isHovered ? "opacity-100" : "opacity-0"
        }`} 
      />

      {/* 4. Cyber Corner Target HUD Reticles */}
      <div className={`pointer-events-none z-30 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f0ff]" />
        <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#00f0ff]" />
        <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#ff007f]" />
        <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00ff66]" />
      </div>

      {children}
    </div>
  )
}

export default GlareHover

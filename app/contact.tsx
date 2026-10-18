"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import AlertMessage from "@/components/Alert"
import FadeDown from "@/components/animations/FadeDown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

type AlertType = "success" | "error" | "info" | "warning"

interface ChatMessage {
  id: string
  sender: "user" | "bot"
  text: string
  timestamp: Date
}

export default function Contact() {
  const [alert, setAlert] = useState<{ type: AlertType; message: string; show: boolean }>({
    type: "success",
    message: "",
    show: false,
  })

  // Chatbot State
  const [isOpenChat, setIsOpenChat] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [isChatLoading, setIsChatLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const setInitialWelcomeMessage = () => {
    setChatMessages([
      {
        id: "welcome-msg",
        sender: "bot",
        text: "[NEURAL_AI_v2.0 ONLINE]\n\nGreetings, Operator! I am Khonif Zakaria's personal AI Assistant. How may I assist you today regarding Khonif's engineering tech stack, production repositories (TechDrop 2.0, News-5, Capit Store, ParkEazy, JBAG, Petualangan Si Tupat), or technical collaborations?",
        timestamp: new Date()
      }
    ])
  }

  useEffect(() => {
    const loadChatHistory = async () => {
      try {
        const res = await fetch("/api/chat/messages")
        if (res.ok) {
          const data = await res.json()
          if (data.success && Array.isArray(data.messages) && data.messages.length > 0) {
            setChatMessages(
              data.messages.map((msg: any) => ({
                id: msg.id,
                sender: msg.sender,
                text: msg.text,
                timestamp: new Date(msg.timestamp),
              }))
            )
            return
          }
        }
      } catch (err) {
        console.error("Failed to load conversation history from database:", err)
      }
      setInitialWelcomeMessage()
    }

    loadChatHistory()
  }, [])

  const handleClearChat = async () => {
    try {
      await fetch("/api/chat/messages", { method: "DELETE" })
    } catch (err) {
      console.error("Failed to flush chat history on server:", err)
    }
    setInitialWelcomeMessage()
  }

  useEffect(() => {
    if (isOpenChat) {
      scrollToBottom()
    }
  }, [chatMessages, isOpenChat])

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    const userText = chatInput.trim()
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date()
    }

    const historyMessages = chatMessages.filter(msg => msg.id !== "welcome-msg")
    const history = historyMessages.map(msg => ({
      role: msg.sender === "user" ? ("user" as const) : ("assistant" as const),
      content: msg.text
    }))

    setChatMessages(prev => [...prev, userMsg])
    setChatInput("")
    setIsChatLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history })
      })

      const data = await res.json()
      if (res.ok && data.reply) {
        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: data.reply,
          timestamp: new Date()
        }
        setChatMessages(prev => [...prev, botMsg])
      } else {
        const errorMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: `[SYSTEM_ALERT: ${data.error || "Unable to process query. Please retry in a moment."}]`,
          timestamp: new Date()
        }
        setChatMessages(prev => [...prev, errorMsg])
      }
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "[ERROR: Network disconnected or neural gateway unreachable]",
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, errorMsg])
    } finally {
      setIsChatLoading(false)
    }
  }

  return (
    <section id="contacts" className="w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-28 lg:py-32 cursor-default relative overflow-hidden border-t border-[#00f0ff]/20 font-mono">
      
      {/* Header */}
      <FadeDown>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-14 md:mb-16 w-full text-left">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#00f0ff] uppercase mb-2">
            <span className="text-[#ff007f]">&gt;</span> COMM_LINK // CHANNELS
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Establish Uplink
          </h2>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <FadeDown delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            
            {/* Map Terminal Box */}
            <div className="bg-[#090e1c] border border-[#00f0ff]/30 rounded-2xl overflow-hidden h-[260px] sm:h-[320px] md:h-[360px] lg:h-auto min-h-[260px] sm:min-h-[320px] shadow-[0_0_25px_rgba(0,240,255,0.1)] relative group">
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 bg-[#050811]/90 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg border border-[#00f0ff]/30 shadow-lg pointer-events-none text-[11px] sm:text-xs">
                <p className="font-bold text-[#00f0ff] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
                  RADAR: Banyumas, Central Java
                </p>
                <p className="text-[9px] sm:text-[10px] text-[#7f99b8] mt-0.5">COORDINATES: -7.5303° S, 109.2941° E</p>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Banyumas,Central+Java,Indonesia&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 invert-[0.9] hue-rotate-180 brightness-90 contrast-125 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Direct Cyber Uplink Channels */}
            <div className="flex flex-col gap-2.5 sm:gap-3.5">
              
              {/* GitHub */}
              <a 
                href="https://github.com/Khoniv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-[#090e1c] border border-[#00f0ff]/25 rounded-xl p-3.5 sm:p-4 md:p-5 flex items-center justify-between hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors truncate">// GITHUB_REPOSITORIES</h3>
                    <p className="text-[11px] sm:text-xs text-[#7f99b8] font-sans font-normal mt-0.5 truncate">github.com/Khoniv</p>
                  </div>
                </div>
                <span className="text-[#00f0ff] text-[10px] sm:text-xs font-bold tracking-wider group-hover:translate-x-1 transition-transform flex-shrink-0">EXPLORE &gt;&gt;</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/khonif-zakaria" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-[#090e1c] border border-[#00f0ff]/25 rounded-xl p-3.5 sm:p-4 md:p-5 flex items-center justify-between hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors truncate">// LINKEDIN_NETWORK</h3>
                    <p className="text-[11px] sm:text-xs text-[#7f99b8] font-sans font-normal mt-0.5 truncate">linkedin.com/in/khonif-zakaria</p>
                  </div>
                </div>
                <span className="text-[#00f0ff] text-[10px] sm:text-xs font-bold tracking-wider group-hover:translate-x-1 transition-transform flex-shrink-0">CONNECT &gt;&gt;</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:oniefzk11@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-[#090e1c] border border-[#00f0ff]/25 rounded-xl p-3.5 sm:p-4 md:p-5 flex items-center justify-between hover:border-[#ff007f] hover:bg-[#ff007f]/10 hover:shadow-[0_0_20px_rgba(255,0,127,0.2)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-[#ff007f]/10 border border-[#ff007f]/30 flex items-center justify-center text-[#ff007f] group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff007f] transition-colors truncate">// ELECTRONIC_DISPATCH</h3>
                    <p className="text-[11px] sm:text-xs text-[#7f99b8] font-sans font-normal mt-0.5 truncate">oniefzk11@gmail.com</p>
                  </div>
                </div>
                <span className="text-[#ff007f] text-[10px] sm:text-xs font-bold tracking-wider group-hover:translate-x-1 transition-transform flex-shrink-0">TRANSMIT &gt;&gt;</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/6281585221246" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-[#090e1c] border border-[#00f0ff]/25 rounded-xl p-3.5 sm:p-4 md:p-5 flex items-center justify-between hover:border-[#00ff66] hover:bg-[#00ff66]/10 hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-center justify-center text-[#00ff66] group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors truncate">// SECURE_CELL_WA</h3>
                    <p className="text-[11px] sm:text-xs text-[#7f99b8] font-sans font-normal mt-0.5 truncate">+62 815 8522 1246</p>
                  </div>
                </div>
                <span className="text-[#00ff66] text-[10px] sm:text-xs font-bold tracking-wider group-hover:translate-x-1 transition-transform flex-shrink-0">PING &gt;&gt;</span>
              </a>

            </div>
          </div>
        </FadeDown>
      </div>

      {/* Floating Cyber AI Terminal Trigger Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-40">
        <button 
          onClick={() => setIsOpenChat(true)} 
          className="group bg-[#090e1c] text-[#00f0ff] p-2.5 sm:p-3.5 md:p-4 rounded-xl border border-[#00f0ff]/50 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 sm:gap-2.5 cursor-pointer"
        >
          <div className="relative">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
          </div>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest hidden sm:inline text-white group-hover:text-[#00f0ff]">
            AI_ASSISTANT
          </span>
        </button>
      </div>

      {/* Cyber AI Terminal Fullscreen Window Overlay */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-0 transition-all duration-300 ${isOpenChat ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute inset-0 bg-[#030509]/90 backdrop-blur-xl" onClick={() => setIsOpenChat(false)}></div>

        <div className={`bg-[#090e1c] border border-[#00f0ff]/40 w-full h-[100dvh] shadow-[0_0_60px_rgba(0,240,255,0.25)] z-10 flex flex-col transition-all duration-300 transform ${isOpenChat ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
          
          {/* Terminal Title Bar */}
          <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-[#00f0ff]/20 bg-[#050811] relative z-20">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff007f] shadow-[0_0_8px_#ff007f]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffaa00] shadow-[0_0_8px_#ffaa00]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]" />
              </div>
              <div className="ml-1 sm:ml-2 min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-widest truncate">
                  KHONIF_AI_CONSOLE // v2.0
                </h3>
                <span className="text-[9px] sm:text-[10px] text-[#00ff66] font-mono flex items-center gap-1 truncate">
                  CORE: ONLINE // MODEL: DEEPSEEK_V3
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={handleClearChat} 
                className="text-[#7f99b8] hover:text-[#ff007f] p-2 rounded border border-[#00f0ff]/20 hover:border-[#ff007f] transition-colors"
                title="Flush Memory Cache"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
              <button 
                onClick={() => setIsOpenChat(false)} 
                className="text-[#7f99b8] hover:text-[#00f0ff] p-2 rounded border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-colors"
                title="Disconnect"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Terminal Console Output Stream */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth custom-scrollbar bg-[#050811]/60 flex flex-col items-center">
            <div className="w-full max-w-4xl flex flex-col gap-4 pb-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-xl px-4 py-3 border ${msg.sender === "user" ? "bg-[#00f0ff]/10 border-[#00f0ff]/50 text-[#00f0ff]" : "bg-[#090e1c] border-[#00f0ff]/25 text-[#a1b8d4]"}`}>
                    
                    <div className="text-[10px] font-mono mb-1.5 flex items-center gap-1.5 text-[#7f99b8]">
                      <span className={msg.sender === "user" ? "text-[#00f0ff]" : "text-[#ff007f]"}>
                        {msg.sender === "user" ? "OPERATOR &gt;" : "NEURAL_ASSISTANT &gt;"}
                      </span>
                      <span>
                        [{msg.timestamp.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}]
                      </span>
                    </div>

                    {msg.sender === "user" ? (
                      <p className="text-xs md:text-sm font-sans font-medium whitespace-pre-wrap text-white">{msg.text}</p>
                    ) : (
                      <div className="text-xs md:text-sm font-sans font-normal leading-relaxed text-[#a1b8d4]">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-bold text-[#00f0ff]" {...props} />,
                            a: ({node, ...props}) => <a className="text-[#00f0ff] underline hover:text-[#38f4ff]" target="_blank" rel="noopener noreferrer" {...props} />,
                            pre: ({node, ...props}: any) => (
                              <pre className="bg-[#050811] text-[#00f0ff] p-3 rounded-lg overflow-x-auto text-xs my-2 font-mono border border-[#00f0ff]/30" {...props} />
                            ),
                            code: ({node, className, children, ...props}: any) => (
                              <code className="bg-[#050811] text-[#00ff66] px-1.5 py-0.5 rounded text-xs font-mono" {...props}>
                                {children}
                              </code>
                            ),
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}

                  </div>
                </div>
              ))}

              {isChatLoading && (
                <div className="flex w-full justify-start">
                  <div className="bg-[#090e1c] border border-[#00f0ff]/30 rounded-xl px-4 py-3 flex gap-2 items-center text-xs text-[#00f0ff]">
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                    <span>SYNTHESIZING_RESPONSE...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Terminal Input Prompt */}
          <div className="p-4 border-t border-[#00f0ff]/20 bg-[#050811] flex justify-center">
            <form onSubmit={handleSendChat} className="flex gap-2 w-full max-w-4xl">
              <div className="flex-1 flex items-center bg-[#090e1c] border border-[#00f0ff]/30 rounded-lg px-3 focus-within:border-[#00f0ff]">
                <span className="text-[#00f0ff] font-bold text-xs mr-2">&gt;_</span>
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Enter command or query..." 
                  className="w-full py-2.5 text-xs text-white placeholder-[#7f99b8] bg-transparent focus:outline-none"
                  disabled={isChatLoading}
                />
              </div>
              <button 
                type="submit" 
                disabled={!chatInput.trim() || isChatLoading}
                className="bg-[#00f0ff] hover:bg-[#38f4ff] text-black px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                EXECUTE
              </button>
            </form>
          </div>

        </div>
      </div>

    </section>
  )
}

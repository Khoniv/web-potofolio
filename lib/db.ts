import path from "path"
import fs from "fs"

const DB_DIR = path.join(process.cwd(), "data")
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true })
}

const DB_FILE = path.join(DB_DIR, "chat_store.json")

export interface ChatMessageRecord {
  id: string
  session_id: string
  sender: "user" | "bot"
  text: string
  created_at: number
}

function readAllMessages(): ChatMessageRecord[] {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return []
    }
    const data = fs.readFileSync(DB_FILE, "utf-8")
    return JSON.parse(data || "[]")
  } catch (err) {
    console.error("Error reading chat_store.json:", err)
    return []
  }
}

function writeAllMessages(messages: ChatMessageRecord[]) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(messages, null, 2), "utf-8")
  } catch (err) {
    console.error("Error writing chat_store.json:", err)
  }
}

export function saveMessage(params: {
  id: string
  sessionId: string
  sender: "user" | "bot"
  text: string
  createdAt: number
}) {
  const messages = readAllMessages()
  messages.push({
    id: params.id,
    session_id: params.sessionId,
    sender: params.sender,
    text: params.text,
    created_at: params.createdAt,
  })
  writeAllMessages(messages)
}

export function getSessionMessages(sessionId: string): ChatMessageRecord[] {
  const messages = readAllMessages()
  return messages
    .filter((m) => m.session_id === sessionId)
    .sort((a, b) => a.created_at - b.created_at)
}

export function getRecentHistory(
  sessionId: string,
  limit = 10
): { role: "user" | "assistant"; content: string }[] {
  const sessionMessages = getSessionMessages(sessionId)
  const recent = sessionMessages.slice(-limit)
  return recent.map((r) => ({
    role: r.sender === "user" ? ("user" as const) : ("assistant" as const),
    content: r.text,
  }))
}

export function clearSessionMessages(sessionId: string) {
  const messages = readAllMessages()
  const filtered = messages.filter((m) => m.session_id !== sessionId)
  writeAllMessages(filtered)
}

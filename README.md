# Khonif Zakaria — Portfolio (NivDev.exe)

Portfolio pribadi **Khonif Zakaria** dengan tema cyberpunk "NivDev.exe".
Menampilkan proyek, pengalaman, tech stack, asisten chat AI, dan formulir kontak.

## ✨ Fitur

- **Tema Cyberpunk NivDev.exe**: UI gelap bernuansa neon dengan animasi halus (Motion)
- **AI Chat Assistant**: asisten chat streaming (`/api/chat`) — butuh `ROUTER_APIKEY` & `ROUTER_BASE_URL`
- **Formulir Kontak**: kirim pesan via email dengan nodemailer (`/api/send-email`)
- **Project Showcase**: kartu proyek dengan tech stack dan tautan
- **Download CV**: tombol unduh CV langsung dari hero section
- **Responsif**: mobile, tablet, dan desktop

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Bahasa**: TypeScript
- **UI**: React 19, Tailwind CSS v4, Motion
- **AI Chat**: OpenAI SDK via endpoint yang kompatibel OpenRouter; riwayat chat tersimpan lokal (`data/chat_store.json`)
- **Email**: nodemailer

## 🚀 Menjalankan Lokal

```bash
git clone https://github.com/Khoniv/web-potofolio.git
cd web-potofolio
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Environment variables

Buat file `.env` di root proyek:

```
ROUTER_APIKEY=...     # API key untuk AI chat
ROUTER_BASE_URL=...   # base URL endpoint yang kompatibel OpenRouter
EMAIL_USER=...        # akun email pengirim (nodemailer)
EMAIL_PASS=...        # app password email
NEXT_PUBLIC_BASE_URL=https://domain-kamu.com   # dipakai robots.ts & sitemap.ts
```

Tanpa env di atas, AI chat dan contact form tidak aktif — sisa situs tetap jalan normal.

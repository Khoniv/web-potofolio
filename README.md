# Khonif Zakaria — Portfolio

Portfolio pribadi **Khonif Zakaria, S.Kom.** dengan tema programmer minimalis.
Menampilkan profil, pengalaman, sertifikasi, tech stack, dan proyek pilihan.

## Fitur

- **Tema terang & gelap**: toggle di navigasi, tersimpan di `localStorage`, mengikuti preferensi OS
- **Tech stack flip card**: klik kartu untuk membalik dan melihat deskripsi singkat
- **Sertifikasi**: kartu sertifikat dengan tautan langsung ke dokumen Google Drive
- **Project showcase**: filter kategori + modal detail dengan banner gambar
- **Kartu foto**: hitam-putih, berwarna saat hover, badge GPA & kartu degree
- **SEO**: metadata, sitemap, robots, JSON-LD Person, OG image 1200×630
- **Responsif**: mobile, tablet, dan desktop

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Bahasa**: TypeScript
- **UI**: React 19, Tailwind CSS v4, Motion

## Menjalankan Lokal

```bash
git clone https://github.com/Khoniv/web-potofolio.git
cd web-potofolio
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Environment variables

Satu-satunya env yang dipakai (opsional, untuk URL kanonis di sitemap/robots):

```
NEXT_PUBLIC_BASE_URL=https://domain-kamu.com
```

Lihat `.env.example` untuk contoh.

## Struktur

```
app/
  hero.tsx            # Hero: foto, bio, tombol aksi
  about.tsx           # Profil + info grid
  experience.tsx      # Timeline pengalaman
  certifications.tsx  # Kartu sertifikat (link Drive)
  tech-stack.tsx      # Flip card tech stack
  project.tsx         # Showcase proyek + modal detail
  contact.tsx         # Info kontak + peta
components/
  PhotoCard.tsx       # Kartu foto reusable (hero & about)
  ThemeToggle.tsx     # Toggle light/dark
  SectionHeader.tsx   # Header section gaya ~/01 / ABOUT
  Header.tsx / Footer.tsx / PageLoader.tsx
public/
  images/             # Foto, OG cover, ikon tech
  Khonif_Zakaria_CV.pdf
```

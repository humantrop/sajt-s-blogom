# Blog sa Next.js

Ovaj projekat je moderan blog izgrađen sa **Next.js**, **TypeScript**, **Tailwind CSS** i **Markdown** podrškom.

## Funkcionalnosti

✨ **Dinamični blog sa Markdown** - Jednostavno kreiraj nove blog postove kao Markdown fajlove
📱 **Responzivan dizajn** - Optimizirana za mobilne uređaje i desktop
⚡ **Brz performansa** - Next.js optimizacija i static generation
🎨 **Moderan izgled** - Tailwind CSS sa lepim stilovima
🔍 **SEO optimizovano** - Automatska meta tagovi za blog postove

## Struktura projekta

```
sajt-s-blogom/
├── public/
│   └── blog/              # Markdown fajlovi za blog postove
│       ├── welcome.md
│       ├── nextjs-guide.md
│       └── markdown-tips.md
├── src/
│   ├── app/
│   │   ├── page.tsx       # Početna stranica
│   │   ├── page.module.css
│   │   ├── blog/
│   │   │   ├── page.tsx   # Lista blog postova
│   │   │   ├── page.module.css
│   │   │   ├── [slug].tsx # Pojedini blog post
│   │   │   └── [slug].module.css
│   │   └── layout.tsx
│   └── lib/
│       └── blog.ts        # Utility funkcije za blog
├── package.json
└── README.md
```

## Instalacija i pokretanje

### Preduslovi
- Node.js 18+ instaliran

### Koraci

1. **Instalacija zavisnosti**
```bash
npm install
```

2. **Pokretanje dev servera**
```bash
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u pregledniku i vidiš tvoj blog!

## Razvoj

### Dodavanje novog blog posta

1. Kreiraj novi `.md` fajl u `public/blog/` direktorijumu
2. Koristi sledeću strukturu sa YAML front-mattером:

```markdown
---
title: Naslov tvog blog posta
date: 2024-03-23
author: Ime autora
excerpt: Kratko rezime posta
---

# Tvoj sadržaj ovde

Markdown tekst sa **bold**, *italic*, itd...
```

3. Spremi fajl - blog post će biti dostupan odmah!

### Dostupne komande

```bash
# Dev server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint koda
npm run lint
```

## Tehnologije

- **Next.js 16** - React framework za produkciju
- **TypeScript** - Type safety za JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Gray Matter** - YAML front-matter parser
- **Remark** - Markdown processor
- **Remark GFM** - GitHub Flavored Markdown podrška
- **Remark HTML** - Konverzija Markdown-a u HTML

## Deployment

### Vercel (preporučeno)

1. Gurnuti kod na GitHub/GitLab/Bitbucket
2. Povežite repozitorijum sa [Vercel](https://vercel.com)
3. Vercel će automatski deployovati kod

### Drugi hosting

```bash
npm run build
npm start
```

---

**Srećno sa blogom! 🚀**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

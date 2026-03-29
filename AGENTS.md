# O projektu

Edukativni blog o vestackoj inteligenciji na srpskom jeziku. Minimalisticki dizajn sa cistom tipografijom i puno belog prostora.

@AGENTS.md

## Komande

- `npm run dev` — pokretanje dev servera na localhost:3000
- `npm run build` — produkcioni build (takodje validira staticku generaciju)
- `npm run lint` — ESLint sa Next.js core-web-vitals + TypeScript pravilima
- `npm start` — serviranje produkcionog builda

## Arhitektura

Next.js 16 App Router blog sajt na srpskom jeziku. Sav UI tekst koristi srpski jezik i `sr-RS` lokalizaciju za formatiranje datuma.

**Pipeline sadrzaja:** Markdown fajlovi u `public/blog/` → parsirani sa gray-matter (frontmatter) + remark/remark-gfm/remark-html → staticki generisani u toku builda preko `generateStaticParams()`.

**Kljucni modul:** `src/lib/blog.ts` — sav pristup blog podacima (citanje/parsiranje/sortiranje postova). Postovi su sortirani od najnovijeg ka najstarijem po datumu. `BlogPost` interfejs se nalazi ovde. Funkcije: `getAllBlogPosts()`, `getBlogPostBySlug()`, `getAllBlogPostSlugs()`, `getAllTags()`, `calculateReadingTime()`.

**Rutiranje:**
- `/` → `src/app/page.tsx` (pocetna — hero, najnoviji clanci, teme)
- `/blog` → `src/app/blog/page.tsx` (server) + `src/app/blog/BlogListClient.tsx` (client — pretraga i tagovi)
- `/blog/[slug]` → `src/app/blog/[slug].tsx` (pojedinacni post, slug = ime fajla bez .md)
- `/o-meni` → `src/app/o-meni/page.tsx` (stranica o blogu)

**Komponente:**
- `src/components/Header/Header.tsx` — navigacija (Pocetna, O meni, Blog)
- `src/components/Footer/Footer.tsx` — footer sa opisom, linkovima i drustvenim mrezama

**Stilizovanje:** CSS Moduli (`.module.css` fajlovi uz komponente) + Tailwind CSS v4 (preko PostCSS-a, bez tailwind.config — koristi v4 podrazumevane vrednosti). Fontovi: Geist i Geist Mono preko `next/font`. CSS promenljive definisane u `globals.css` (`--background`, `--foreground`, `--text-muted`, `--border`, `--surface`, itd.).

**Funkcionalnosti bloga:**
- Pretraga clanaka po naslovu/opisu (client-side)
- Filtriranje po tagovima
- Automatski izracunato vreme citanja
- Podrska za draft postove (draft: true u frontmatter-u)

## Dodavanje blog posta

Napraviti `public/blog/<slug>.md` sa frontmatter-om:
```yaml
---
title: Naslov posta
date: GGGG-MM-DD
author: Ime
excerpt: Kratak opis
tags: ["tag1", "tag2"]
---
```

## Alias putanja

`@/*` mapira na `./src/*` (konfigurisano u tsconfig.json).

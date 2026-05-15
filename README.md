# pooya.nl — Pixel Art Resume Landing Page

A modern, minimal, black & white pixel art resume/portfolio site for Pooya Khoshbakht.

Built with **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, and **React Type Animation**.

## Features

- 🎮 Pixel art aesthetic — Press Start 2P font, pixelated avatar, corner decorations
- ✨ Animated twinkling star field canvas
- ⌨️ Typewriter cycling through roles (Framer Motion + react-type-animation)
- 📜 Scroll-triggered reveal animations
- 📺 CRT scanlines + screen flicker overlay
- 📱 Fully responsive
- ⚡ Statically generated — zero server-side cost on Vercel

## Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16 | Framework |
| Tailwind CSS | 4 | Styling |
| Framer Motion | 12 | Animations |
| react-type-animation | 3 | Typewriter effect |
| Press Start 2P | Google Fonts | Pixel heading font |
| VT323 | Google Fonts | Retro body font |
| Space Mono | Google Fonts | Monospace body font |

## Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1 — Vercel Dashboard (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → Vercel auto-detects Next.js
4. Click **Deploy** — done ✅

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

No `vercel.json` is needed — Next.js is auto-detected.

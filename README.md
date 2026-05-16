# 🥑 Bureau Ovale — APDABA

> **Association pour la Promotion et le Développement de l'Avocatier Bio en Afrique**
> Founded 20 March 2026 · Saint-Witz (Roissy), France · Pilot farm: Mbilé, Dschang, West Cameroon

**Bureau Ovale** is an organic avocado cooperative connecting ethical investors with smallholder farmers. Our model centres the farmer — ensuring fair revenue sharing, transparent projections, and dual-channel sales (local markets + European export).

| What we do | How |
|---|---|
| 🌿 Organic avocado cultivation | 600 grafted trees · 1.5 ha · zero pesticides |
| 📊 Investor transparency | Open yield projections, honest ROI modelling |
| 🤝 Community impact | Fair-trade revenue split with local farmers |
| 🌍 Market access | Dual-channel — local Cameroon & France/EU export |
| 🏛️ Ethical governance | Loi 1901 non-profit · RGPD · DSA compliant |

---

## Repository Structure

This repo hosts **two complementary products** that together form the Bureau Ovale digital presence.

```
BureauOvale/
│
├── 📄 index.html              # Static marketing website (full single-page site)
├── 📝 content.md              # All website copy — FR / EN / Yemba (YMBA)
├── 🗺️  mindmap.md             # Site architecture, section map & design system
│
├── assets/                    # Static website assets
│   ├── style.css              # Main stylesheet (Brown/Gold/Green palette, Ndop patterns)
│   ├── js/
│   │   ├── main.js            # All interactivity — nav, ticker, carousel, FAQ, forms, GDPR
│   │   └── chatbot.js         # TYNA chatbot · 40 FAQ items · FR/EN/YMBA
│   └── images/                # Project photography & partner logos
│       ├── MainfieldMbilé.jpg
│       ├── 2ndfieldMbilé.jpg
│       ├── AvocadoplantMbilé.jpg
│       ├── Défrichagechamp.jpg
│       ├── ProfessorDjoumessiatwork.jpg
│       ├── Semanceschamp.jpg
│       ├── ADCJingles4.gif    # Partner — ANTOiNETTE DATA CENTER
│       ├── CometLogo1.png     # Partner — COMET
│       └── ADMPLogo1.png      # Partner — African Digital Marketplace
│
├── src/                       # React / TypeScript ROI Calculator app
│   ├── App.tsx                # Root component — layout & state
│   ├── main.tsx               # Vite entry point
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── InputPanel.tsx     # Investment parameter controls
│   │   ├── ResultsPanel.tsx   # KPI summary cards
│   │   ├── Timeline.tsx       # Year-by-year projection table & bar chart
│   │   └── HowItWorks.tsx     # Methodology explainer
│   └── lib/
│       └── calculations.ts    # Core yield & revenue projection engine
│
├── style.css                  # Root-level stylesheet (Vite / Tailwind entry)
├── package.json               # Node dependencies & scripts
├── vite.config.ts             # Vite build configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── eslint.config.js           # ESLint rules
├── tsconfig.json              # TypeScript root config
├── tsconfig.app.json          # TypeScript app config
├── tsconfig.node.json         # TypeScript Node config
├── netlify.toml               # Netlify deployment config
└── .gitignore
```

---

## Products

### 1 · Static Marketing Website (`index.html`)

A fully self-contained, trilingual (FR / EN / YMBA) single-page website covering:

| Section | Description |
|---|---|
| 📰 News Ticker | Live avocado market data — CNN-style gold strip |
| 🧭 Navigation | Sticky, scroll-aware · Language switcher FR/EN/YMBA |
| 🌟 Hero | Ndop-pattern overlay · Stats strip · CTAs |
| 🔍 Vision | Association background · 4 Pillars · Founder cards |
| 🚜 Project | MBiLÉ OVALE'26 · 4-phase timeline · La Ruche callout |
| 🖼️ Gallery | 6-slide autoplay carousel with touch/swipe |
| 💰 Invest | Embedded ROI calculator + legal disclaimer |
| ❓ FAQ | 40 accordion items across 5 filter tabs |
| 🤝 Partners | ANTOiNETTE DATA CENTER · COMET · ADMP |
| 📬 Join | Newsletter + WhatsApp CTA |
| 📞 Contact | France HQ · Mbilé Farm · contact form + GDPR checkbox |
| 🔒 Floaters | GDPR cookie consent · WhatsApp bubble · TYNA chatbot |

**No build step required** — open `index.html` directly in a browser or serve from any static host.

### 2 · ROI Calculator App (`src/`)

An interactive React/TypeScript tool letting investors model 10-year avocado returns. Configure plant count, currency, market mix, and cost assumptions — get a year-by-year yield, revenue, and break-even projection.

**Tech stack:** React 18 · TypeScript · Tailwind CSS · Vite · Lucide icons

---

## Development

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Getting started

```bash
# Install dependencies
npm install

# Start the React dev server (ROI Calculator)
npm run dev

# Type-check
npm run typecheck

# Lint
npm run lint

# Production build
npm run build
```

The static website (`index.html`) requires no build step and can be opened directly or deployed as-is.

---

## Deployment

| Target | Method |
|---|---|
| **Netlify** | `netlify.toml` is pre-configured — connect the repo and deploy |
| **GitHub Pages** | Settings → Pages → Source: `main` / root |
| **Vercel** | `vercel --prod` from the repo root |

Custom domain DNS (A record → `76.76.21.21` · CNAME `www` → `cname.vercel-dns.com`).

---

## Documentation

| File | Purpose |
|---|---|
| `content.md` | All website copy in FR, EN, and Yemba — paste-ready for any CMS |
| `mindmap.md` | Full site architecture, design system tokens, image inventory, SEO checklist |

---

## Contributing

We welcome contributions from developers, agronomists, and investors. Open an issue or pull request to:
- Improve the ROI projection model
- Expand the FAQ database
- Translate content into additional languages
- Propose new cooperative tools

---

*Bureau Ovale — Growing together, one avocado at a time. 🥑*

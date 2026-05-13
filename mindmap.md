# 🥑 BUREAU OVALE — Project Mindmap & Architecture
## MBiLÉ OVALE'26 · Website Structure

```
bureau-ovale-site/
├── index.html              ← Main single-page website (all sections)
├── assets/
│   ├── css/
│   │   └── style.css       ← Complete stylesheet (Brown/Gold/Green palette, Ndop patterns)
│   ├── js/
│   │   ├── chatbot.js      ← TYNA chatbot + 40 FAQ database (FR/EN/YMBA)
│   │   └── main.js         ← All interactivity (nav, ticker, carousel, ROI, FAQ, forms, GDPR)
│   └── images/             ← ⚠️ Add your actual photos here (see list below)
├── mindmap.md              ← This file
└── content.md              ← All texts, copy, descriptions
```

---

## 🗺️ SECTIONS MAP (index.html)

```
0. NEWS TICKER (CNN-style, gold background, brown text)
   └── Live Data: TOP 5 Exporters | Importers | Cosmetic Cos | African Producers
   
1. NAV (sticky, scroll-aware)
   ├── Logo (top-left): 🥑 Bureau Ovale + APDABA · Mbilé'26
   ├── Links: Vision | Le Projet | Investir | FAQ | Contact
   └── Language switcher: 🇫🇷 FR | 🇬🇧 EN | 🌿 YMBA

2. HERO
   ├── Ndop pattern overlay
   ├── Background: MainfieldMbilé.jpg (or gradient placeholder)
   ├── Headline: ASSOCIATION BUREAU OVALE
   ├── CTAs: [Investir dans un arbre] [Découvrir le projet]
   └── Stats strip: 600 trees | 1.5ha | 100% Bio | 54M FCFA

3. VISION (#vision)
   ├── What is Bureau Ovale (FR/EN/YMBA)
   ├── 4 Pillars: Science | Impact Social | Gouvernance | Bio
   ├── Google Maps buttons (Saint-Witz + Mbilé)
   └── 6 Founder cards

4. PROJECT (#project) — dark brown bg
   ├── Facts strip: 1.5ha | 600 trees | 54M FCFA | 2026
   ├── 4-phase Timeline (Years 1-2 | 3-4 | 5-7 | 8-10)
   └── La Ruche callout

5. GALLERY (#gallery)
   └── 6-slide autoplay carousel with touch/swipe support

6. INVEST (#invest)
   ├── OVALE Calculator (embedded)
   │   ├── LEFT: Currency | Plants | Bundle price | Local/Export slider | Advanced
   │   ├── RIGHT: Summary strip | KPIs | Year-by-year table | Bar chart
   │   └── BOTTOM: 4 Stage cards (Growth | First Fruit | Moderate | Full Maturity)
   └── Legal disclaimer

7. FAQ (#faq)
   ├── 5 filter tabs: All | Association | Investment | Science | Dschang
   └── 40 accordion items (FR/EN/YMBA)

8. JOIN (#join)
   └── Newsletter signup form + WhatsApp CTA

9. CONTACT (#contact)
   ├── 3 info cards: France HQ | Mbilé Farm | Email
   └── Contact form with GDPR checkbox

10. FOOTER
    ├── Brand | Navigation | Legal | Contact columns
    └── Legal disclaimer (RGPD + DSA + Loi 1901 + Investment warning)

FLOATERS:
├── 🍪 GDPR Cookie consent widget (bottom-left)
├── 💬 WhatsApp bubble (bottom-right) with email form
└── 🥑 TYNA Chatbot (bottom-right) with 40 FAQ + lang switcher
```

---

## 🎨 DESIGN SYSTEM

| Token | Value |
|---|---|
| Brown 900 | #2c1810 |
| Brown 800 | #3d2314 |
| Gold 500 | #d4af37 |
| Gold 400 | #e8c97a |
| Green 700 | #2d6a4f |
| Green 500 | #52b788 |
| Font Display | Playfair Display |
| Font Body | Nunito Sans |
| Font Mono | DM Mono |

**Ndop pattern**: SVG repeating diagonal grid overlay at 6% gold opacity, inspired by Bamiléké royal textile traditions.

---

## 🖼️ REQUIRED IMAGES

Place these in `assets/images/`:

| Filename | Usage |
|---|---|
| `MainfieldMbile.jpg` | Hero background + Carousel slide 1 |
| `2ndfieldMbile.jpg` | Carousel slide 2 |
| `AvocadoplantMbile.jpg` | Carousel slide 3 |
| `Defrichagechamp.jpg` | Carousel slide 4 |
| `ProfessorDjoumessiatwork.jpg` | Carousel slide 5 |
| `Semanceschamp.jpg` | Carousel slide 6 |
| `og-image.jpg` | Social share thumbnail (1200×630px) |
| `logo.svg` | Browser tab + structured data |

---

## 🌐 HOSTING GUIDE

### Option A: GitHub Pages (Free, recommended)
```bash
git init
git add .
git commit -m "feat: Bureau Ovale website v1"
git remote add origin https://github.com/SuperMatrixi/BureauOvale.git
git push -u origin main
# In GitHub Settings → Pages → Source: main branch / root
# URL: https://supermatrixi.github.io/BureauOvale/
```

### Option B: Netlify (Free, drag & drop)
1. Go to https://netlify.com
2. Drag the `bureau-ovale-site/` folder to the deploy area
3. Get instant URL: https://bureauovale.netlify.app
4. Add custom domain: bureauovale.com

### Option C: Vercel (Free)
```bash
npm install -g vercel
cd bureau-ovale-site
vercel --prod
```

### Custom Domain Setup
Add to your DNS (Namecheap, OVH, etc.):
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

---

## 📊 SEO / AEO / GEO CHECKLIST

- [x] Title tag + meta description (FR)
- [x] Open Graph tags
- [x] Twitter Card
- [x] geo.region + geo.position meta tags (5.4467°N, 10.0492°E)
- [x] Schema.org Organization JSON-LD
- [x] Schema.org Farm JSON-LD (Mbilé)
- [x] Canonical URL
- [x] Keywords: Dschang, Menoua, avocat bio, organic avocado, Bamiléké, APDABA
- [ ] Google Search Console → submit sitemap
- [ ] Google Business Profile → Mbilé farm pin
- [ ] robots.txt + sitemap.xml (add manually)

---

## 🔗 COORDINATES

| Location | GPS | Google Maps |
|---|---|---|
| Siège — Saint-Witz, France | 49.0833°N, 2.5°E | https://maps.app.goo.gl/Ts6VZ91yTstbhEXG8 |
| Ferme — Mbilé, Dschang | 5.4467°N, 10.0492°E | https://maps.app.goo.gl/m53vwSyxPwoF9pq6A |

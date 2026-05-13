# 🥑 Bureau Ovale

**Bureau Ovale** is an avocado cooperative dedicated to sustainable, organic farming and transparent impact investing. We connect investors with smallholder avocado farmers, providing tools and resources that make agri-investment accessible and accountable.

## About the Association

Bureau Ovale was founded to support local farming communities through community-led, export-oriented avocado production. Our model places farmers at the centre, ensuring fair revenue sharing between local markets and international export channels.

| What we do | How |
|---|---|
| Organic avocado cultivation | Sustainable, pesticide-free growing practices |
| Investor transparency | Open projections and honest yield modelling |
| Community impact | Fair-trade revenue split with local farmers |
| Market access | Dual-channel sales — local & export |

## Projects

### 🌿 ROI Calculator

An interactive web tool that lets investors model avocado tree returns across a 10-year horizon. Configure your investment (plant count, currency, market mix, costs) and get a year-by-year projection of yield, revenue, and break-even point.

---

## Repository Structure

```
BureauOvale/
├── README.md               # ← You are here — Bureau Ovale overview
├── index.html              # Main single-page website
├── content.md              # All website copy (FR / EN / Yemba)
├── mindmap.md              # Architecture & section map
├── assets/
│   ├── css/
│   │   └── style.css       # Bamiléké-inspired stylesheet
│   ├── js/
│   │   ├── chatbot.js      # TYNA chatbot (40 FAQ, trilingual)
│   │   └── main.js         # Nav, ticker, carousel, ROI, FAQ, GDPR
│   └── images/             # Farm & field photography
│       ├── MainfieldMbilé.jpg
│       ├── 2ndfieldMbilé.jpg
│       ├── AvocadoplantMbilé.jpg
│       ├── Défrichagechamp.jpg
│       ├── ProfessorDjoumessiatwork.jpg
│       └── Semanceschamp.jpg
├── src/                    # React ROI Calculator (Vite / TypeScript)
│   ├── components/         # UI components
│   ├── lib/                # Core projection logic
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # App stylesheet
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## Getting Involved

We welcome contributions from developers, agronomists, and investors alike. Open an issue or pull request to suggest improvements to the calculator, expand the projection model, or propose new tools for the cooperative.

---

*Bureau Ovale — Growing together, one avocado at a time.*

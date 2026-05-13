# Bureau Ovale — Avocado Investment ROI Calculator

A clean, interactive web app that helps investors model avocado tree returns over a 10-year horizon. Built for the [Bureau Ovale](https://github.com/SuperMatrixi/BureauOvale) avocado cooperative.

## Features

- **10-year projection** — year-by-year yield, revenue, and cumulative net return
- **Multi-currency support** — GBP, USD, EUR with sensible market defaults
- **Configurable parameters** — plant count, bundle price, local/export split, farming costs, crop loss rate
- **Growth phase timeline** — visual breakdown from seedling to full maturity
- **Break-even detection** — highlights the year your investment turns profitable

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [React 18](https://react.dev) + [TypeScript](https://typescriptlang.org) |
| Build tool | [Vite 5](https://vitejs.dev) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) |
| Icons | [Lucide React](https://lucide.dev) |

## Project structure

```
bureau-ovale/
├── public/              # Static assets served at /
├── src/
│   ├── components/      # UI components
│   │   ├── HowItWorks.tsx
│   │   ├── InputPanel.tsx
│   │   ├── ResultsPanel.tsx
│   │   └── Timeline.tsx
│   ├── lib/
│   │   └── calculations.ts   # Core projection logic
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Type-check
npm run typecheck

# Production build
npm run build
```

## Projection model

Plants are sold in bundles of 10. The yield model assumes:

| Year | Phase | Fruits / plant |
|------|-------|---------------|
| 1–2 | Growth | 0 |
| 3–4 | First Fruit | 30–50 |
| 5–6 | Moderate Yield | 100–150 |
| 7–10 | Full Maturity | 200–300 |

Average avocado weight is modelled at **0.2 kg**. Revenue is split between local and export markets at the prices you configure. Production costs and crop-loss rate are applied on top.

---

*Projections use conservative estimates. Actual results depend on climate, soil, market conditions, and farming practices.*

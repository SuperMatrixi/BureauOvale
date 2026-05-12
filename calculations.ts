export type Currency = 'GBP' | 'USD' | 'EUR';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  GBP: '\u00a3',
  USD: '$',
  EUR: '\u20ac',
};

export interface CalculatorInputs {
  plantBundles: number;
  currency: Currency;
  pricePerBundle: number;
  localPricePerKg: number;
  exportPricePerKg: number;
  localSalesPercent: number;
  productionCostPercent: number;
  lossPercent: number;
}

export interface YearProjection {
  year: number;
  phase: 'Growth' | 'First Fruit' | 'Moderate Yield' | 'Full Maturity';
  fruitsPerPlant: number;
  yieldKg: number;
  grossRevenue: number;
  productionCost: number;
  lossAmount: number;
  netRevenue: number;
  cumulativeRevenue: number;
  cumulativeNet: number;
  roi: number;
}

export interface ProjectionResult {
  totalPlants: number;
  totalInvestment: number;
  projections: YearProjection[];
  breakEvenYear: number | null;
  tenYearROI: number;
  tenYearNet: number;
}

const AVG_FRUIT_WEIGHT_KG = 0.2;

const YIELD_MODEL: Record<string, { phase: YearProjection['phase']; fruits: number }> = {
  '1': { phase: 'Growth', fruits: 0 },
  '2': { phase: 'Growth', fruits: 0 },
  '3': { phase: 'First Fruit', fruits: 30 },
  '4': { phase: 'First Fruit', fruits: 50 },
  '5': { phase: 'Moderate Yield', fruits: 100 },
  '6': { phase: 'Moderate Yield', fruits: 150 },
  '7': { phase: 'Full Maturity', fruits: 200 },
  '8': { phase: 'Full Maturity', fruits: 250 },
  '9': { phase: 'Full Maturity', fruits: 280 },
  '10': { phase: 'Full Maturity', fruits: 300 },
};

export function calculateProjections(inputs: CalculatorInputs): ProjectionResult {
  const totalPlants = inputs.plantBundles * 10;
  const totalInvestment = inputs.plantBundles * inputs.pricePerBundle;
  const localRatio = inputs.localSalesPercent / 100;
  const exportRatio = 1 - localRatio;
  const productionRate = inputs.productionCostPercent / 100;
  const lossRate = inputs.lossPercent / 100;

  let cumulativeRevenue = 0;
  let cumulativeNet = -totalInvestment;
  let breakEvenYear: number | null = null;
  const projections: YearProjection[] = [];

  for (let y = 1; y <= 10; y++) {
    const model = YIELD_MODEL[String(y)];
    const fruitsPerPlant = model.fruits;
    const totalFruits = fruitsPerPlant * totalPlants;
    const harvestableAfterLoss = totalFruits * (1 - lossRate);
    const yieldKg = harvestableAfterLoss * AVG_FRUIT_WEIGHT_KG;

    const localRevenue = yieldKg * localRatio * inputs.localPricePerKg;
    const exportRevenue = yieldKg * exportRatio * inputs.exportPricePerKg;
    const grossRevenue = localRevenue + exportRevenue;
    const productionCost = grossRevenue * productionRate;
    const lossAmount = totalFruits * lossRate * AVG_FRUIT_WEIGHT_KG *
      (localRatio * inputs.localPricePerKg + exportRatio * inputs.exportPricePerKg);
    const netRevenue = grossRevenue - productionCost;

    cumulativeRevenue += grossRevenue;
    cumulativeNet += netRevenue;

    if (breakEvenYear === null && cumulativeNet >= 0) {
      breakEvenYear = y;
    }

    projections.push({
      year: y,
      phase: model.phase,
      fruitsPerPlant,
      yieldKg,
      grossRevenue,
      productionCost,
      lossAmount,
      netRevenue,
      cumulativeRevenue,
      cumulativeNet,
      roi: totalInvestment > 0 ? (cumulativeNet / totalInvestment) * 100 : 0,
    });
  }

  const lastProjection = projections[projections.length - 1];

  return {
    totalPlants,
    totalInvestment,
    projections,
    breakEvenYear,
    tenYearROI: lastProjection.roi,
    tenYearNet: lastProjection.cumulativeNet,
  };
}

export const DEFAULT_PRICES: Record<Currency, { local: number; export: number }> = {
  GBP: { local: 4.5, export: 6.0 },
  USD: { local: 5.0, export: 7.0 },
  EUR: { local: 4.8, export: 6.5 },
};

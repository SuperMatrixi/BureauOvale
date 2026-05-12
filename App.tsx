import { useState } from 'react';
import { TreeDeciduous } from 'lucide-react';
import type { CalculatorInputs } from './lib/calculations';
import { calculateProjections, DEFAULT_PRICES, CURRENCY_SYMBOLS } from './lib/calculations';
import InputPanel from './components/InputPanel';
import ResultsPanel from './components/ResultsPanel';
import Timeline from './components/Timeline';
import HowItWorks from './components/HowItWorks';

const defaultInputs: CalculatorInputs = {
  plantBundles: 1,
  currency: 'GBP',
  pricePerBundle: 100,
  localPricePerKg: DEFAULT_PRICES.GBP.local,
  exportPricePerKg: DEFAULT_PRICES.GBP.export,
  localSalesPercent: 60,
  productionCostPercent: 30,
  lossPercent: 20,
};

export default function App() {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);
  const result = calculateProjections(inputs);
  const sym = CURRENCY_SYMBOLS[inputs.currency];

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-stone-200/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center">
              <TreeDeciduous size={16} className="text-white" />
            </div>
            <span className="font-semibold text-stone-800 text-sm tracking-tight">
              Avocado ROI Calculator
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-14 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-stone-800 mb-2 sm:mb-3 tracking-tight leading-tight">
          Invest in Avocado Trees,{' '}
          <span className="text-emerald-700">See What You Earn</span>
        </h1>
        <p className="text-stone-400 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
          Buy organic avocado plants, wait for them to grow, and sell the fruit. This calculator
          shows you how much money you could make over 10 years.
        </p>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
        {/* Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/40">
            <h2 className="text-base font-semibold text-stone-800 mb-1">Set Up Your Investment</h2>
            <p className="text-xs text-stone-400 mb-5">
              Adjust the numbers below. Smart defaults are already filled in.
            </p>
            <InputPanel inputs={inputs} onChange={setInputs} />
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/40">
            <ResultsPanel result={result} currencySymbol={sym} />
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/40">
          <Timeline projections={result.projections} currencySymbol={sym} />
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/40">
          <HowItWorks />
        </div>

        {/* Footer note */}
        <p className="text-center text-[10px] sm:text-[11px] text-stone-300 pt-4 pb-2">
          Projections use conservative estimates. Actual results depend on climate, soil, market conditions, and farming practices.
        </p>
      </div>
    </div>
  );
}

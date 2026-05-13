import { useState } from 'react';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import type { Currency, CalculatorInputs } from '../lib/calculations';
import { CURRENCY_SYMBOLS, DEFAULT_PRICES } from '../lib/calculations';

interface InputPanelProps {
  inputs: CalculatorInputs;
  onChange: (inputs: CalculatorInputs) => void;
}

export default function InputPanel({ inputs, onChange }: InputPanelProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const sym = CURRENCY_SYMBOLS[inputs.currency];

  function set<K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) {
    const updated = { ...inputs, [key]: value };
    if (key === 'currency') {
      const c = value as Currency;
      updated.localPricePerKg = DEFAULT_PRICES[c].local;
      updated.exportPricePerKg = DEFAULT_PRICES[c].export;
      updated.pricePerBundle = 100;
    }
    onChange(updated);
  }

  function adjustBundles(delta: number) {
    set('plantBundles', Math.max(1, inputs.plantBundles + delta));
  }

  const totalCost = inputs.plantBundles * inputs.pricePerBundle;

  return (
    <div className="space-y-6">
      {/* Currency */}
      <div>
        <p className="text-sm font-medium text-stone-700 mb-2">What currency do you use?</p>
        <div className="grid grid-cols-3 gap-2">
          {(['GBP', 'USD', 'EUR'] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => set('currency', c)}
              className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 ${
                inputs.currency === c
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
              }`}
            >
              {CURRENCY_SYMBOLS[c]} {c}
            </button>
          ))}
        </div>
      </div>

      {/* Plant count */}
      <div>
        <p className="text-sm font-medium text-stone-700 mb-1">How many plants do you want to buy?</p>
        <p className="text-[11px] text-stone-400 mb-3">Plants are sold in bundles of 10</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => adjustBundles(-1)}
            className="w-12 h-12 rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-95 flex items-center justify-center transition-all"
          >
            <Minus size={16} className="text-stone-500" />
          </button>
          <div className="flex-1 text-center py-3 bg-stone-50 rounded-xl">
            <span className="text-3xl font-semibold text-stone-800 tabular-nums">
              {inputs.plantBundles * 10}
            </span>
            <span className="text-xs text-stone-300 ml-1.5">plants</span>
          </div>
          <button
            onClick={() => adjustBundles(1)}
            className="w-12 h-12 rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-95 flex items-center justify-center transition-all"
          >
            <Plus size={16} className="text-stone-500" />
          </button>
        </div>
      </div>

      {/* Price per bundle */}
      <div>
        <p className="text-sm font-medium text-stone-700 mb-1">How much does each bundle of 10 cost?</p>
        <p className="text-[11px] text-stone-400 mb-3">The price per bundle of 10 plants</p>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-medium text-sm">{sym}</span>
          <input
            type="number"
            inputMode="decimal"
            min={10}
            value={inputs.pricePerBundle}
            onChange={(e) => set('pricePerBundle', Math.max(10, Number(e.target.value)))}
            className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-stone-50 text-stone-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors"
          />
        </div>
        <p className="text-xs text-emerald-700 font-medium mt-2.5 bg-emerald-50 rounded-lg px-3 py-2">
          Total investment: {sym}{totalCost.toLocaleString()}
          <span className="text-emerald-600/60 font-normal"> for {inputs.plantBundles * 10} plants</span>
        </p>
      </div>

      {/* Sales split */}
      <div>
        <p className="text-sm font-medium text-stone-700 mb-1">Where will avocados be sold?</p>
        <p className="text-[11px] text-stone-400 mb-3">
          Local markets are cheaper but more reliable. Export pays more but has higher risk.
        </p>
        <div className="flex items-center justify-between mb-2">
          <div className="text-center flex-1">
            <span className="text-lg font-semibold text-stone-700 tabular-nums">{inputs.localSalesPercent}%</span>
            <p className="text-[10px] text-stone-400">Local</p>
          </div>
          <div className="text-center flex-1">
            <span className="text-lg font-semibold text-stone-700 tabular-nums">{100 - inputs.localSalesPercent}%</span>
            <p className="text-[10px] text-stone-400">Export</p>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={inputs.localSalesPercent}
          onChange={(e) => set('localSalesPercent', Number(e.target.value))}
          className="w-full h-2 bg-stone-200 rounded-full appearance-none cursor-pointer accent-emerald-700"
        />
      </div>

      {/* Advanced toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-stone-50 text-stone-500 text-xs font-medium hover:bg-stone-100 active:scale-[0.98] transition-all"
      >
        <span>Advanced settings (prices, costs, loss rate)</span>
        {showAdvanced ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {showAdvanced && (
        <div className="space-y-5 pt-1">
          <div>
            <p className="text-sm font-medium text-stone-700 mb-1">Avocado selling prices</p>
            <p className="text-[11px] text-stone-400 mb-3">
              What buyers pay per kilogram. Defaults are conservative market averages.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-stone-400 mb-1.5">Local price / kg</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300 text-sm">{sym}</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0.1}
                    step={0.1}
                    value={inputs.localPricePerKg}
                    onChange={(e) => set('localPricePerKg', Math.max(0.1, Number(e.target.value)))}
                    className="w-full pl-9 pr-3 py-3.5 rounded-xl bg-stone-50 text-stone-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-stone-400 mb-1.5">Export price / kg</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300 text-sm">{sym}</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0.1}
                    step={0.1}
                    value={inputs.exportPricePerKg}
                    onChange={(e) => set('exportPricePerKg', Math.max(0.1, Number(e.target.value)))}
                    className="w-full pl-9 pr-3 py-3.5 rounded-xl bg-stone-50 text-stone-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-stone-700 mb-1">Costs and expected losses</p>
            <p className="text-[11px] text-stone-400 mb-3">
              Production costs cover farming, water, and labour. Loss accounts for weather, pests, and spoilage.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-stone-400 mb-1.5">Farming costs</label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={100}
                    value={inputs.productionCostPercent}
                    onChange={(e) => set('productionCostPercent', Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="w-full pr-8 pl-4 py-3.5 rounded-xl bg-stone-50 text-stone-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-300 text-sm">%</span>
                </div>
                <p className="text-[10px] text-stone-300 mt-1">% of revenue</p>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-stone-400 mb-1.5">Crop loss</label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    max={100}
                    value={inputs.lossPercent}
                    onChange={(e) => set('lossPercent', Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="w-full pr-8 pl-4 py-3.5 rounded-xl bg-stone-50 text-stone-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-colors"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-300 text-sm">%</span>
                </div>
                <p className="text-[10px] text-stone-300 mt-1">Expected to lose</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

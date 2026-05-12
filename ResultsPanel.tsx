import { TrendingUp, Calendar, Sprout, ArrowRight } from 'lucide-react';
import type { ProjectionResult } from '../lib/calculations';

interface ResultsPanelProps {
  result: ProjectionResult;
  currencySymbol: string;
}

function fmt(n: number, sym: string): string {
  const abs = Math.abs(n);
  if (abs >= 10000) {
    return `${n < 0 ? '-' : ''}${sym}${(abs / 1000).toFixed(1)}k`;
  }
  return `${n < 0 ? '-' : ''}${sym}${abs.toLocaleString('en', { maximumFractionDigits: 0 })}`;
}

export default function ResultsPanel({ result, currencySymbol: sym }: ResultsPanelProps) {
  const year5 = result.projections[4];
  const lastYear = result.projections[result.projections.length - 1];
  const profitable = result.tenYearNet >= 0;

  return (
    <div>
      <h3 className="text-base font-semibold text-stone-800 mb-1">Your Projected Returns</h3>
      <p className="text-xs text-stone-400 mb-5">Based on conservative yield estimates and your settings</p>

      {/* Headline */}
      <div className={`rounded-2xl p-5 mb-4 ${profitable ? 'bg-emerald-50' : 'bg-rose-50'}`}>
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
          <div className="text-center min-w-0">
            <p className="text-[10px] sm:text-[11px] text-stone-400 mb-0.5">You invest</p>
            <p className="text-lg sm:text-xl font-bold text-stone-700 tabular-nums">{fmt(result.totalInvestment, sym)}</p>
          </div>
          <ArrowRight size={16} className="text-stone-300 shrink-0 hidden sm:block" />
          <div className="text-center min-w-0">
            <p className="text-[10px] sm:text-[11px] text-stone-400 mb-0.5">In 10 years you get back</p>
            <p className={`text-lg sm:text-xl font-bold tabular-nums ${profitable ? 'text-emerald-700' : 'text-rose-600'}`}>
              {fmt(result.tenYearNet + result.totalInvestment, sym)}
            </p>
          </div>
          <div className="w-px h-8 bg-stone-200 hidden sm:block" />
          <div className="text-center min-w-0">
            <p className="text-[10px] sm:text-[11px] text-stone-400 mb-0.5">Profit</p>
            <p className={`text-lg sm:text-xl font-bold tabular-nums ${profitable ? 'text-emerald-700' : 'text-rose-600'}`}>
              {fmt(result.tenYearNet, sym)}
            </p>
          </div>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
        <div className="rounded-xl bg-amber-50 p-3 sm:p-3.5 text-center">
          <Calendar size={14} className="text-amber-500/70 mx-auto mb-1" />
          <p className="text-sm sm:text-base font-bold text-amber-800 tabular-nums">
            {result.breakEvenYear ? `Year ${result.breakEvenYear}` : 'N/A'}
          </p>
          <p className="text-[9px] sm:text-[10px] text-amber-600/60 mt-0.5">Break-even</p>
        </div>
        <div className="rounded-xl bg-sky-50 p-3 sm:p-3.5 text-center">
          <Sprout size={14} className="text-sky-500/70 mx-auto mb-1" />
          <p className="text-sm sm:text-base font-bold text-sky-800 tabular-nums">{fmt(year5.cumulativeNet, sym)}</p>
          <p className="text-[9px] sm:text-[10px] text-sky-600/60 mt-0.5">After 5 years</p>
        </div>
        <div className={`rounded-xl p-3 sm:p-3.5 text-center ${profitable ? 'bg-emerald-50' : 'bg-rose-50'}`}>
          <TrendingUp size={14} className={`mx-auto mb-1 ${profitable ? 'text-emerald-500/70' : 'text-rose-400/70'}`} />
          <p className={`text-sm sm:text-base font-bold tabular-nums ${profitable ? 'text-emerald-800' : 'text-rose-800'}`}>
            {result.tenYearROI.toFixed(0)}%
          </p>
          <p className={`text-[9px] sm:text-[10px] mt-0.5 ${profitable ? 'text-emerald-600/60' : 'text-rose-600/60'}`}>
            10-year ROI
          </p>
        </div>
      </div>

      {/* Yearly earnings */}
      <h4 className="text-sm font-semibold text-stone-700 mb-3">Earnings Each Year</h4>

      {/* Mobile rows */}
      <div className="sm:hidden space-y-1">
        {result.projections.map((p, i) => {
          const maxNet = Math.max(...result.projections.map((x) => x.netRevenue));
          const pct = maxNet > 0 ? (p.netRevenue / maxNet) * 100 : 0;
          return (
            <div key={p.year} className={`rounded-xl px-3 py-2.5 ${i % 2 === 0 ? 'bg-stone-50' : ''}`}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-500 tabular-nums w-10">Year {p.year}</span>
                  <span className="text-[10px] text-stone-300">
                    {p.yieldKg > 0 ? `${p.yieldKg.toFixed(0)} kg harvested` : 'Trees growing'}
                  </span>
                </div>
                <span className={`text-xs font-semibold tabular-nums ${p.netRevenue > 0 ? 'text-emerald-700' : 'text-stone-300'}`}>
                  {p.netRevenue > 0 ? `+${fmt(p.netRevenue, sym)}` : '--'}
                </span>
              </div>
              <div className="h-1.5 bg-stone-200/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500/70 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(0, pct)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block rounded-xl overflow-hidden bg-stone-50">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-stone-400">
              <th className="text-left py-3 px-3 font-medium">Year</th>
              <th className="text-right py-3 px-3 font-medium">Harvest</th>
              <th className="text-right py-3 px-3 font-medium">Revenue</th>
              <th className="text-right py-3 px-3 font-medium">Net Earnings</th>
              <th className="text-right py-3 px-3 font-medium">Running Total</th>
            </tr>
          </thead>
          <tbody>
            {result.projections.map((p, i) => (
              <tr key={p.year} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                <td className="py-2.5 px-3 font-medium text-stone-600">Year {p.year}</td>
                <td className="py-2.5 px-3 text-right text-stone-400 tabular-nums">
                  {p.yieldKg > 0 ? `${p.yieldKg.toFixed(0)} kg` : '--'}
                </td>
                <td className="py-2.5 px-3 text-right text-stone-400 tabular-nums">
                  {p.grossRevenue > 0 ? fmt(p.grossRevenue, sym) : '--'}
                </td>
                <td className={`py-2.5 px-3 text-right font-medium tabular-nums ${p.netRevenue > 0 ? 'text-emerald-700' : 'text-stone-300'}`}>
                  {p.netRevenue > 0 ? fmt(p.netRevenue, sym) : '--'}
                </td>
                <td className={`py-2.5 px-3 text-right font-medium tabular-nums ${p.cumulativeNet >= 0 ? 'text-emerald-700' : 'text-rose-500'}`}>
                  {fmt(p.cumulativeNet, sym)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

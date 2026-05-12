import { Sprout, Flower2, TreePine, TreeDeciduous } from 'lucide-react';
import type { YearProjection } from '../lib/calculations';

interface TimelineProps {
  projections: YearProjection[];
  currencySymbol: string;
}

interface PhaseGroup {
  phase: string;
  years: string;
  description: string;
  icon: typeof Sprout;
  bg: string;
  iconColor: string;
  badge: string;
  totalNet: number;
  peakYield: number;
}

function fmt(n: number, sym: string): string {
  const abs = Math.abs(n);
  if (abs >= 10000) return `${n < 0 ? '-' : ''}${sym}${(abs / 1000).toFixed(1)}k`;
  return `${n < 0 ? '-' : ''}${sym}${abs.toLocaleString('en', { maximumFractionDigits: 0 })}`;
}

const PHASE_META: Record<string, {
  icon: typeof Sprout;
  bg: string;
  iconColor: string;
  badge: string;
  description: string;
}> = {
  Growth: {
    icon: Sprout,
    bg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    badge: 'bg-amber-100 text-amber-700',
    description: 'Trees are establishing roots and canopy. No fruit yet -- this is the patience period.',
  },
  'First Fruit': {
    icon: Flower2,
    bg: 'bg-lime-50',
    iconColor: 'text-lime-600',
    badge: 'bg-lime-100 text-lime-700',
    description: 'First avocados appear. Yields start small and grow each season.',
  },
  'Moderate Yield': {
    icon: TreePine,
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
    description: 'Trees are producing reliably. Revenue increases significantly.',
  },
  'Full Maturity': {
    icon: TreeDeciduous,
    bg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    badge: 'bg-teal-100 text-teal-700',
    description: 'Peak production. Each tree produces 200-300 avocados per year.',
  },
};

function groupByPhase(projections: YearProjection[]): PhaseGroup[] {
  const groups: PhaseGroup[] = [];
  let current: PhaseGroup | null = null;

  for (const p of projections) {
    if (!current || current.phase !== p.phase) {
      const meta = PHASE_META[p.phase];
      current = {
        phase: p.phase,
        years: `Year ${p.year}`,
        description: meta.description,
        icon: meta.icon,
        bg: meta.bg,
        iconColor: meta.iconColor,
        badge: meta.badge,
        totalNet: p.netRevenue,
        peakYield: p.fruitsPerPlant,
      };
      groups.push(current);
    } else {
      const startYear = current.years.replace('Year ', '').replace(/Years /, '').split('-')[0];
      current.years = `Years ${startYear}-${p.year}`;
      current.totalNet += p.netRevenue;
      current.peakYield = Math.max(current.peakYield, p.fruitsPerPlant);
    }
  }

  return groups;
}

export default function Timeline({ projections, currencySymbol: sym }: TimelineProps) {
  const phases = groupByPhase(projections);

  return (
    <div>
      <h3 className="text-base font-semibold text-stone-800 mb-1">What Happens Over 10 Years?</h3>
      <p className="text-xs text-stone-400 mb-5">Your trees go through 4 stages from planting to full production</p>

      <div className="space-y-2.5">
        {phases.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.phase} className={`rounded-2xl p-4 ${group.bg}`}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={18} className={group.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-stone-700">{group.phase}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${group.badge}`}>
                      {group.years}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-500/80 mt-1 leading-relaxed">{group.description}</p>
                  <div className="flex items-center gap-3 mt-2.5">
                    {group.peakYield > 0 && (
                      <span className="text-[10px] sm:text-[11px] text-stone-400">
                        Up to {group.peakYield} fruits/plant
                      </span>
                    )}
                    <span className={`text-[11px] sm:text-xs font-semibold tabular-nums ${group.totalNet > 0 ? 'text-emerald-700' : 'text-stone-400'}`}>
                      {group.totalNet > 0 ? `+${fmt(group.totalNet, sym)} earned` : 'No revenue yet'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

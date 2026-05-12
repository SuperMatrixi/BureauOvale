import { ShoppingCart, Droplets, Package, Banknote } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: 'Buy Plants',
    desc: 'Purchase organic avocado plants in bundles of 10.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Droplets,
    title: 'Grow & Maintain',
    desc: 'Trees take 2 years to establish, then start fruiting in year 3.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: Package,
    title: 'Harvest',
    desc: 'Pick avocados once mature. Expect some crop loss from weather and pests.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Banknote,
    title: 'Sell & Earn',
    desc: 'Sell locally or export globally. Revenue grows as trees reach full maturity.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
];

export default function HowItWorks() {
  return (
    <div>
      <h3 className="text-base font-semibold text-stone-800 mb-1">How Does It Work?</h3>
      <p className="text-xs text-stone-400 mb-5">From buying plants to earning money in 4 simple steps</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className={`${step.bg} rounded-2xl p-4 text-center`}>
              <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center mx-auto mb-2.5">
                <Icon size={18} className={step.color} />
              </div>
              <p className="text-sm font-semibold text-stone-700 mb-1">{step.title}</p>
              <p className="text-[11px] text-stone-500/80 leading-relaxed">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from 'react';
import { Palette, Smartphone, Zap, UserCheck } from 'lucide-react';
import { TRUST_POINTS } from '../data/content';

export const Trust: React.FC = () => {
  const icons = [
    <Palette className="w-5 h-5 text-blue-400" />,
    <Smartphone className="w-5 h-5 text-indigo-400" />,
    <Zap className="w-5 h-5 text-sky-400" />,
    <UserCheck className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="vertrauen" className="py-12 border-y border-white/[0.06] bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={point.title}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-all hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-zinc-800/70 border border-zinc-700/50 shrink-0">
                {icons[index]}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { WHY_US_ITEMS } from '../data/content';
import {
  Sparkles,
  UserCheck,
  Cpu,
  Smartphone,
  MessageCircle,
  Receipt,
  TrendingUp
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-amber-400" />;
      case 'Receipt':
        return <Receipt className="w-5 h-5 text-rose-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="warum-wir" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
            Deine Vorteile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Warum SchallerDesign?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Direkter Draht, moderne Umsetzung und echtes Handwerk im Webdesign.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_ITEMS.map((item, idx) => {
            // Give first item slightly more emphasis or special styling
            const isFeatured = idx === 0;
            return (
              <div
                key={item.title}
                className={`p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/70 hover:border-zinc-700/90 transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 border-blue-500/20' : ''
                }`}
              >
                <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60 w-fit mb-5">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

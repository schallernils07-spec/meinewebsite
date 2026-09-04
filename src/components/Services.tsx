import React from 'react';
import { Layout, Smartphone, Search, MessageSquare, Gauge, RefreshCw } from 'lucide-react';
import { SERVICES } from '../data/content';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-sky-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-emerald-400" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-amber-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-violet-400" />;
      default:
        return <Layout className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="leistungen" className="py-24 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
            Leistungen & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Alles, was deine Website braucht.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Gezielt aufeinander abgestimmt für einen überzeugenden ersten Eindruck und messbare Resultate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/70 hover:border-blue-500/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg shadow-black/30"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  {service.highlight && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-800/70 text-zinc-300 border border-zinc-700/50">
                      {service.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Sub points list */}
              <div className="pt-4 border-t border-zinc-800/60 space-y-2">
                {service.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

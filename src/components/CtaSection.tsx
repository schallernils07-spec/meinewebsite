import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onContactClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-zinc-900 via-[#10141d] to-zinc-900 border border-zinc-800/80 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Subtle decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unverbindlich & transparent</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Bereit für einen professionellen Online-Auftritt?
            </h2>

            <p className="text-lg text-zinc-300">
              Starte jetzt mit deiner neuen Website.
            </p>

            <div className="pt-2">
              <button
                id="cta-section-anfragen"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
              >
                <span>Website anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

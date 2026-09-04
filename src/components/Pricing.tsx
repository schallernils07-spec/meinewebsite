import React from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_FEATURES } from '../data/content';

interface PricingProps {
  onContactClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onContactClick }) => {
  return (
    <section id="preise" className="py-24 relative overflow-hidden bg-zinc-950/60 border-t border-white/[0.06]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
            Transparente Konditionen
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Professionelle Website zum fairen Preis.
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Investiere in einen digitalen Auftritt, der sich für dein Unternehmen auszahlt.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 to-[#0d1015] border border-blue-500/30 p-8 sm:p-12 shadow-2xl shadow-black/80">
            {/* Corner Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-wide shadow-md shadow-blue-600/40">
                <Sparkles className="w-3.5 h-3.5" />
                Alles inklusive für deinen Start
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800">
              <div>
                <span className="text-sm font-medium text-zinc-400">Komplettpaket</span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Website-Paket SchallerDesign
                </h3>
                <p className="text-sm text-zinc-400 mt-2 max-w-md">
                  Der genaue Preis hängt vom Umfang und den gewünschten Funktionen ab.
                </p>
              </div>

              <div className="text-left md:text-right shrink-0">
                <span className="text-xs uppercase tracking-wider text-zinc-400 block font-medium">
                  Einstiegspreis
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-zinc-400 text-lg font-medium">ab</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                    499 €
                  </span>
                </div>
                <span className="text-xs text-zinc-400 block mt-1">
                  Festpreis vor Projektstart garantiert
                </span>
              </div>
            </div>

            {/* Checklist */}
            <div className="py-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-5">
                Im Paket enthalten:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PRICING_FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-zinc-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA & Guarantee Notice */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800/80 text-blue-400 border border-zinc-700/60 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                  <strong className="text-white block font-medium">Keine versteckten Kosten.</strong>
                  Du erhältst vor Beginn ein transparentes Angebot.
                </p>
              </div>

              <button
                id="pricing-cta-anfragen"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <span>Jetzt Website anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

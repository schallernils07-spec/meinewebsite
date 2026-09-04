import React, { useState } from 'react';
import { ArrowRight, Sparkles, Monitor, Smartphone, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onServicesClick }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle radial gradient illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Webdesign für lokale Betriebe & Selbstständige</span>
          </div>

          {/* Large Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Deine Website.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300">
              Dein professioneller Auftritt.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Moderne Websites für Unternehmen, Selbstständige und alle, die online professionell auftreten wollen.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-cta-anfragen"
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
            >
              <span>Website anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-cta-leistungen"
              onClick={onServicesClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-zinc-800/90 hover:bg-zinc-700/90 text-zinc-200 hover:text-white font-semibold text-base transition-all border border-zinc-700/60 hover:border-zinc-600 cursor-pointer"
            >
              Leistungen ansehen
            </button>
          </div>

          {/* Micro trust indicators below hero buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Transparenter Festpreis ab 499 €</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>Extrem schnelle Ladezeiten</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>100% DSGVO-konform</span>
            </div>
          </div>
        </div>

        {/* Browser Mockup Window Visual */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-b from-zinc-800/60 to-zinc-900/60 p-2 sm:p-3 border border-zinc-700/60 shadow-2xl shadow-black/80">
            {/* Window Chrome / Browser Topbar */}
            <div className="flex items-center justify-between px-3 py-2.5 bg-zinc-900/90 rounded-xl border border-zinc-800 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Bar */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-md bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-400 max-w-md w-full mx-4 justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-zinc-300">https://schallerdesign.de</span>
                <span className="text-zinc-600">/preview/ihr-neuer-auftritt</span>
              </div>

              {/* Viewport switch controls */}
              <div className="flex items-center gap-1 bg-zinc-950/60 p-1 rounded-lg border border-zinc-800">
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                    activeTab === 'desktop'
                      ? 'bg-zinc-800 text-white font-medium'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  title="Desktop-Ansicht"
                  aria-label="Desktop-Ansicht"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                    activeTab === 'mobile'
                      ? 'bg-zinc-800 text-white font-medium'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  title="Mobile-Ansicht"
                  aria-label="Mobile-Ansicht"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Mobil</span>
                </button>
              </div>
            </div>

            {/* Simulated Live Website Canvas */}
            <div className="bg-[#090b0e] rounded-xl border border-zinc-800/70 p-4 sm:p-8 min-h-[340px] sm:min-h-[420px] relative overflow-hidden transition-all duration-300">
              {/* Background ambient lighting in preview */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              {activeTab === 'desktop' ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                  {/* Mock Navbar */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">
                        M
                      </div>
                      <span className="text-sm font-semibold text-white tracking-tight">
                        Meisterbetrieb & Partner
                      </span>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-xs text-zinc-400">
                      <span className="text-blue-400 font-medium">Start</span>
                      <span>Leistungen</span>
                      <span>Projekte</span>
                      <span>Über uns</span>
                    </div>
                    <div className="px-3 py-1 rounded bg-blue-600 text-white text-xs font-medium">
                      Erstgespräch vereinbaren
                    </div>
                  </div>

                  {/* Mock Hero in preview */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                    <div className="md:col-span-7 space-y-4">
                      <div className="inline-block px-2.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 text-[11px] font-medium border border-zinc-700/50">
                        Präzision & Zuverlässigkeit
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        Individuelle Lösungen für anspruchsvolle Kunden
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2">
                        Wir verbinden handwerkliche Erfahrung mit modernster digitaler Präsenz. Ihr Partner für nachhaltigen Erfolg in der Region.
                      </p>
                      <div className="flex items-center gap-3 pt-1">
                        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold">
                          Kostenloses Angebot
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700/60">
                          Referenzen (48)
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-zinc-900/90 rounded-xl p-4 border border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span>Live Performance</span>
                        <span className="text-emerald-400 font-mono font-medium">100 / 100</span>
                      </div>
                      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-full" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="bg-zinc-950/70 p-2.5 rounded-lg border border-zinc-800/80">
                          <div className="text-xs text-zinc-400">Ladezeit</div>
                          <div className="text-sm font-bold text-emerald-400 font-mono">0.38 s</div>
                        </div>
                        <div className="bg-zinc-950/70 p-2.5 rounded-lg border border-zinc-800/80">
                          <div className="text-xs text-zinc-400">Mobil optimiert</div>
                          <div className="text-sm font-bold text-blue-400 font-mono">100% Fluid</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3 mini feature blocks in mock */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
                      <div className="text-xs font-semibold text-zinc-200">Kundenstimmen</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">4.9/5 von 85+ Kunden</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
                      <div className="text-xs font-semibold text-zinc-200">Terminbuchung</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">24/7 online verfügbar</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
                      <div className="text-xs font-semibold text-zinc-200">Direktkontakt</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">Rückruf unter 24h</div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Mobile simulated preview */
                <div className="max-w-xs mx-auto bg-zinc-950 rounded-2xl border-2 border-zinc-700/80 p-4 shadow-xl space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                    <span className="text-xs font-bold text-white">Meisterbetrieb</span>
                    <div className="w-5 h-4 flex flex-col justify-between">
                      <span className="w-full h-0.5 bg-zinc-400" />
                      <span className="w-full h-0.5 bg-zinc-400" />
                      <span className="w-full h-0.5 bg-zinc-400" />
                    </div>
                  </div>
                  <div className="space-y-2 text-center py-2">
                    <span className="text-[10px] text-blue-400 font-medium">Smart & Responsive</span>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      Perfekt auf jedem Smartphone bedienbar.
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      Kein lästiges Zoomen, große Touch-Ziele, blitzschneller Seitenaufbau.
                    </p>
                    <button className="w-full py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold">
                      Jetzt anfragen
                    </button>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 flex items-center justify-between">
                    <span>Ladezeit im 5G / LTE:</span>
                    <span className="text-emerald-400 font-mono font-bold">0.4 Sek.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

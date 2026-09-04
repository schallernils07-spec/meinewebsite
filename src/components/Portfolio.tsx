import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioItem } from '../types';
import { ExternalLink, Check, Eye, X, Monitor, Sparkles } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-zinc-950/40 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
            Musterarbeiten & Inspiration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Projekte, die überzeugen.
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Maßgeschneiderte Design-Konzepte für unterschiedliche Branchen. Diese Musterprojekte zeigen, wie dein neuer Auftritt wirken könnte.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Musterbeispiele – bereit zur individuellen Anpassung für dein Business</span>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-xl shadow-black/40"
            >
              {/* Mockup Frame Header */}
              <div className="p-4 bg-zinc-950/80 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-[11px] font-mono text-zinc-400 truncate max-w-[140px]">
                    demo.{project.id}.schaller
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {project.badge}
                </span>
              </div>

              {/* Visual Mockup Preview Canvas */}
              <div className="p-5 bg-[#0a0c10] border-b border-zinc-800/60 min-h-[220px] flex flex-col justify-between relative overflow-hidden group-hover:bg-[#0d1015] transition-colors">
                {/* Simulated Webpage Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-xs font-bold text-white tracking-tight">
                    {project.mockup.heroTitle}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                    {project.mockup.navItems.slice(0, 3).map((item, i) => (
                      <span key={i} className="hover:text-zinc-300">{item}</span>
                    ))}
                  </div>
                </div>

                {/* Simulated Webpage Hero Content */}
                <div className="py-5 space-y-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider block"
                    style={{ color: project.mockup.accentColor }}
                  >
                    {project.mockup.tagline}
                  </span>
                  <p className="text-base font-bold text-white leading-snug">
                    {project.mockup.heroSubtitle}
                  </p>
                  <div className="pt-2 flex items-center gap-2">
                    <span
                      className="px-3 py-1 rounded text-[11px] font-semibold text-white shadow-sm"
                      style={{ backgroundColor: project.mockup.accentColor }}
                    >
                      Jetzt reservieren / anfragen
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {project.mockup.stat.value} {project.mockup.stat.label}
                    </span>
                  </div>
                </div>

                {/* Simulated micro feature blocks */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {project.mockup.features.map((feat, fIdx) => (
                    <div key={fIdx} className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                      <div className="text-[11px] font-medium text-zinc-300 truncate">{feat.title}</div>
                      <div className="text-[10px] text-zinc-400 truncate">{feat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Card Footer / Info */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs font-medium text-blue-400 mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed">
                    {project.overview}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {project.techHighlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold tracking-wide border border-zinc-700/60 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Detail-Vorschau ansehen</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on customization */}
        <div className="mt-12 text-center text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
          Hinweis: Alle Musterprojekte werden individuell an dein Corporate Design, dein Logo und deine echten Unternehmensdaten angepasst.
        </div>
      </div>

      {/* Project Preview Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#0e1117] rounded-2xl border border-zinc-700 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold mb-2">
              <span>{selectedProject.category}</span>
              <span>•</span>
              <span>{selectedProject.badge}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-zinc-300 mb-6">
              {selectedProject.overview}
            </p>

            {/* Simulated Live View Inside Modal */}
            <div className="rounded-xl bg-black/80 border border-zinc-800 p-6 mb-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs">
                <span className="font-bold text-white">{selectedProject.mockup.heroTitle}</span>
                <span className="font-mono text-zinc-400">{selectedProject.mockup.tagline}</span>
              </div>
              <div className="py-6 text-center max-w-lg mx-auto space-y-3">
                <h4 className="text-xl font-bold text-white">
                  {selectedProject.mockup.heroSubtitle}
                </h4>
                <p className="text-xs text-zinc-400">
                  Perfekt für den ersten Eindruck: Klare Botschaft, intuitive Navigation und sofortige Kontaktaufnahme.
                </p>
                <div className="pt-2">
                  <span
                    className="inline-block px-4 py-2 rounded-lg text-xs font-semibold text-white"
                    style={{ backgroundColor: selectedProject.mockup.accentColor }}
                  >
                    Muster-Aktion ausführen
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-800/80">
                {selectedProject.mockup.features.map((feat, i) => (
                  <div key={i} className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                    <div className="text-xs font-semibold text-zinc-200">{feat.title}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{feat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <span className="text-xs text-zinc-400">
                Möchtest du einen ähnlichen Auftritt für dein Unternehmen?
              </span>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  const contact = document.querySelector('#kontakt');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Website dafür anfragen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

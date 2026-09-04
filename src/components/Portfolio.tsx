import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Sparkles, X, ArrowRight, Laptop } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  onContactClick?: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onContactClick }) => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Musterarbeiten & Inspiration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Portfolio & Beispielprojekte
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Maßgeschneiderte Design-Konzepte für unterschiedliche Branchen. Diese Musterprojekte zeigen, wie dein neuer digitaler Auftritt wirken kann.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40 backdrop-blur-sm"
            >
              <div className="space-y-5">
                {/* Visual Preview Header Bar */}
                <div className="h-44 rounded-xl bg-gradient-to-br from-zinc-800/90 to-zinc-950 border border-zinc-700/60 p-5 relative overflow-hidden flex flex-col justify-between group-hover:border-zinc-600 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-medium text-zinc-400">
                      {project.mockup.stat.value}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {project.mockup.heroTitle}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-1 mt-1">
                      {project.mockup.heroSubtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/80 text-[11px] text-zinc-400">
                    <Laptop className="w-3.5 h-3.5 text-blue-400" />
                    <span>Responsive Webdesign</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-400">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                    {project.overview}
                  </p>
                </div>

                {/* Tech & Feature Highlights */}
                <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                    Highlights:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techHighlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Details ansehen</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {onContactClick && (
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Ähnliche Website anfragen
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-400">
            Du benötigst ein individuelles Konzept für deine Branche?{' '}
            {onContactClick ? (
              <button
                onClick={onContactClick}
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4 font-semibold cursor-pointer ml-1"
              >
                Lass uns unverbindlich sprechen
              </button>
            ) : (
              <a
                href="#kontakt"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4 font-semibold ml-1"
              >
                Lass uns unverbindlich sprechen
              </a>
            )}
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-[#0f1218] border border-zinc-700/80 p-6 sm:p-8 shadow-2xl text-left space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4">
              <p className="text-zinc-300 text-sm leading-relaxed">
                {selectedProject.overview}
              </p>

              {/* Mockup Preview Box */}
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-xs font-bold text-white">
                    {selectedProject.mockup.heroTitle}
                  </span>
                  <span className="text-xs text-blue-400 font-medium">
                    {selectedProject.mockup.stat.label}: {selectedProject.mockup.stat.value}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.mockup.features.map((feat, i) => (
                    <div key={i} className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 pl-5">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  Umgesetzte Funktionen:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.techHighlights.map((th, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{th}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Schließen
              </button>
              {onContactClick && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onContactClick();
                  }}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  <span>Website anfragen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

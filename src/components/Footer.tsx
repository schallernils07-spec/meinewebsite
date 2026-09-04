import React from 'react';
import { LegalModalType } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-white/[0.08] bg-[#07090c] pt-16 pb-12 text-sm text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showTagline />
            <p className="text-zinc-300 max-w-sm text-sm leading-relaxed">
              Modernes Webdesign für einen professionellen digitalen Auftritt. Maßgeschneidert für kleine Unternehmen, Selbstständige und lokale Betriebe.
            </p>
            <div className="pt-2 text-xs text-zinc-400">
              Standort: Deutschland • Bundesweiter Service
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('#hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#leistungen')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Leistungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#preise')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Preise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#kontakt')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-impressum-link"
                  onClick={() => onOpenLegal('impressum')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  id="footer-datenschutz-link"
                  onClick={() => onOpenLegal('datenschutz')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Datenschutz
                </button>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Kontakt
            </h4>
            <div className="space-y-2 text-sm text-zinc-300">
              <div>
                <span className="block text-xs text-zinc-400">E-Mail</span>
                <span className="font-mono text-zinc-200">[E-MAIL-PLATZHALTER]</span>
              </div>
              <div>
                <span className="block text-xs text-zinc-400">Telefon</span>
                <span className="font-mono text-zinc-200">[TELEFON-PLATZHALTER]</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => scrollTo('#kontakt')}
                  className="inline-block text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4 cursor-pointer"
                >
                  Projekt jetzt starten →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 SchallerDesign. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-zinc-300 transition-colors"
            >
              Impressum (§ 5 DDG)
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-zinc-300 transition-colors"
            >
              Datenschutzerklärung (DSGVO)
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

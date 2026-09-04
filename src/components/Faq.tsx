import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-950/40 border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
            Häufige Fragen
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Fragen & Antworten
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Alles Wissenswerte rund um deine neue Website bei SchallerDesign.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900/90 border-blue-500/30 shadow-lg shadow-black/40'
                    : 'bg-zinc-900/40 border-zinc-800/70 hover:border-zinc-700/80'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center shrink-0 text-zinc-300 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400 border-blue-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/60 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small prompt below FAQs */}
        <div className="mt-10 text-center text-sm text-zinc-400">
          Deine Frage ist nicht dabei?{' '}
          <a
            href="#kontakt"
            className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4"
          >
            Schreib uns einfach direkt über das Kontaktformular.
          </a>
        </div>
      </div>
    </section>
  );
};

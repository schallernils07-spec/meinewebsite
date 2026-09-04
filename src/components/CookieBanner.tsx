import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('schaller_privacy_accepted');
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('schaller_privacy_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Datenschutz- und Cookie-Hinweis"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 p-4 rounded-2xl bg-[#0f1218]/95 border border-zinc-700/80 shadow-2xl shadow-black/80 backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-2 flex-grow">
          <h4 className="text-xs font-bold text-white tracking-wide">
            Datenschutzfreundlich & ohne Tracking
          </h4>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Wir respektieren deine Privatsphäre. Diese Website verwendet ausschließlich technisch notwendige Funktionen und keine Tracking- oder Werbe-Cookies.{' '}
            <button
              onClick={onOpenPrivacy}
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 font-medium"
            >
              Mehr erfahren
            </button>
          </p>
          <div className="pt-1 flex items-center justify-end">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Verstanden
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

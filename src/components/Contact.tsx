import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Send, CheckCircle2, AlertCircle, Sparkles, Mail, Phone, Clock } from 'lucide-react';

interface ContactProps {
  onOpenPrivacy: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    vorname: '',
    nachname: '',
    email: '',
    unternehmen: '',
    telefon: '',
    leistung: 'Neue Website erstellen',
    budget: 'ab 499 € (Basis)',
    nachricht: '',
    dsgvoAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.vorname.trim()) {
      newErrors.vorname = 'Bitte gib deinen Vornamen ein.';
    }
    if (!formData.nachname.trim()) {
      newErrors.nachname = 'Bitte gib deinen Nachnamen ein.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gib deine E-Mail-Adresse ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse an.';
    }
    if (!formData.nachricht.trim()) {
      newErrors.nachricht = 'Bitte beschreibe kurz dein Projekt oder dein Anliegen.';
    }
    if (!formData.dsgvoAccepted) {
      newErrors.dsgvoAccepted = 'Bitte akzeptiere die Datenschutzerklärung.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate clean studio dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      vorname: '',
      nachname: '',
      email: '',
      unternehmen: '',
      telefon: '',
      leistung: 'Neue Website erstellen',
      budget: 'ab 499 € (Basis)',
      nachricht: '',
      dsgvoAccepted: false,
    });
    setErrors({});
  };

  return (
    <section id="kontakt" className="py-24 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
            Unverbindliche Projektanfrage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Lass uns deine Website starten.
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Du hast eine Idee für deine Website? Beschreibe kurz dein Projekt und wir melden uns bei dir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Side Info Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direkter Kontakt
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Wir antworten in der Regel innerhalb von 24 Stunden mit ersten Ideen und einer transparenten Einschätzung.
              </p>

              <div className="space-y-4 pt-2 border-t border-zinc-800/60 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">E-Mail für Anfragen</div>
                    <div className="text-zinc-200 font-medium font-mono text-xs sm:text-sm">
                      [E-MAIL-PLATZHALTER]
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Telefonischer Rückruf</div>
                    <div className="text-zinc-200 font-medium font-mono text-xs sm:text-sm">
                      [TELEFON-PLATZHALTER]
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Reaktionszeit</div>
                    <div className="text-zinc-200 font-medium">
                      Unter 24 Stunden an Werktagen
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                <strong className="block text-white font-medium mb-1">
                  100% unverbindlich
                </strong>
                Ein Angebot verpflichtet dich zu nichts. Vorab besprechen wir alles in Ruhe.
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-8">
            <div className="p-7 sm:p-10 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-2xl shadow-black/60 relative">
              {submitted ? (
                <div className="py-10 text-center space-y-5 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Vielen Dank für deine Anfrage!
                  </h3>
                  <p className="text-zinc-300 max-w-md mx-auto text-sm leading-relaxed">
                    Wir haben deine Projektdaten erhalten ({formData.vorname} {formData.nachname}, {formData.email}).
                    SchallerDesign wird sich zeitnah mit einer ersten Rückmeldung bei dir melden.
                  </p>

                  <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 max-w-md mx-auto text-left text-xs space-y-1.5 text-zinc-400">
                    <div><span className="text-zinc-200 font-medium">Gewählte Leistung:</span> {formData.leistung}</div>
                    <div><span className="text-zinc-200 font-medium">Budgetrahmen:</span> {formData.budget}</div>
                    {formData.unternehmen && <div><span className="text-zinc-200 font-medium">Unternehmen:</span> {formData.unternehmen}</div>}
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                  >
                    <span>Weitere Nachricht senden</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Row: Vorname & Nachname */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="vorname" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        id="vorname"
                        value={formData.vorname}
                        onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                        placeholder="Max"
                        className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/90 border text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.vorname ? 'border-rose-500 focus:ring-rose-500' : 'border-zinc-800 hover:border-zinc-700'
                        }`}
                      />
                      {errors.vorname && (
                        <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.vorname}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="nachname" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        id="nachname"
                        value={formData.nachname}
                        onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                        placeholder="Mustermann"
                        className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/90 border text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.nachname ? 'border-rose-500 focus:ring-rose-500' : 'border-zinc-800 hover:border-zinc-700'
                        }`}
                      />
                      {errors.nachname && (
                        <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.nachname}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row: E-Mail & Telefon */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="max@beispiel.de"
                        className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/90 border text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                          errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-zinc-800 hover:border-zinc-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="telefon" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Telefonnummer <span className="text-zinc-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        placeholder="+49 170 1234567"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/90 border border-zinc-800 hover:border-zinc-700 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row: Unternehmen */}
                  <div>
                    <label htmlFor="unternehmen" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Unternehmen <span className="text-zinc-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="unternehmen"
                      value={formData.unternehmen}
                      onChange={(e) => setFormData({ ...formData, unternehmen: e.target.value })}
                      placeholder="z. B. Schreinerei Mustermann oder Praxis Dr. Schmidt"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/90 border border-zinc-800 hover:border-zinc-700 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Row: Gewünschte Leistung & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="leistung" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Gewünschte Leistung
                      </label>
                      <select
                        id="leistung"
                        value={formData.leistung}
                        onChange={(e) => setFormData({ ...formData, leistung: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Neue Website erstellen">Neue Website erstellen</option>
                        <option value="Bestehende Website überarbeiten (Relaunch)">Bestehende Website überarbeiten (Relaunch)</option>
                        <option value="Landingpage / One-Pager">Landingpage / One-Pager</option>
                        <option value="Pflege & Änderungen">Pflege & laufende Änderungen</option>
                        <option value="Sonstiges">Sonstiges / Noch unklar</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                        Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="ab 499 € (Basis)">ab 499 € (Basis)</option>
                        <option value="750 € – 1.500 €">750 € – 1.500 €</option>
                        <option value="1.500 € – 3.000 €">1.500 € – 3.000 €</option>
                        <option value="über 3.000 €">über 3.000 €</option>
                        <option value="Erst Angebot abwarten">Erst unverbindliches Angebot abwarten</option>
                      </select>
                    </div>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label htmlFor="nachricht" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      rows={4}
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                      placeholder="Erzähle uns kurz von deiner Idee, deiner Branche oder deinen bisherigen Erfahrungen..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/90 border text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y ${
                        errors.nachricht ? 'border-rose-500 focus:ring-rose-500' : 'border-zinc-800 hover:border-zinc-700'
                      }`}
                    />
                    {errors.nachricht && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.nachricht}
                      </p>
                    )}
                  </div>

                  {/* Checkbox: DSGVO */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id="dsgvo-checkbox"
                        checked={formData.dsgvoAccepted}
                        onChange={(e) => setFormData({ ...formData, dsgvoAccepted: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-zinc-700 bg-zinc-950 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-xs text-zinc-300 leading-relaxed">
                        Ich habe die{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenPrivacy();
                          }}
                          className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        >
                          Datenschutzerklärung
                        </button>{' '}
                        gelesen und akzeptiere sie. *
                      </span>
                    </label>
                    {errors.dsgvoAccepted && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.dsgvoAccepted}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      id="submit-contact-btn"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Wird gesendet...</span>
                      ) : (
                        <>
                          <span>Anfrage senden</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-zinc-400 mt-3">
                      * Pflichtfelder. Deine Angaben werden streng vertraulich behandelt.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { LegalModalType } from '../types';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-[#0f1218] rounded-2xl border border-zinc-700/80 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60 shrink-0">
          <div className="flex items-center gap-2.5">
            {type === 'impressum' ? (
              <FileText className="w-5 h-5 text-blue-400" />
            ) : (
              <Shield className="w-5 h-5 text-emerald-400" />
            )}
            <h3 className="text-xl font-bold text-white tracking-tight">
              {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-zinc-300 space-y-6 leading-relaxed">
          {type === 'impressum' ? (
            <>
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                  Rechtliche Anbieterkennzeichnung
                </span>
                <h4 className="text-lg font-bold text-white mb-2">Angaben gemäß § 5 DDG</h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1 font-mono text-xs sm:text-sm text-zinc-200">
                  <p className="font-bold text-white">SchallerDesign</p>
                  <p>[Vorname Nachname]</p>
                  <p>[Straße Hausnummer]</p>
                  <p>[PLZ Ort]</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">Kontakt</h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1 font-mono text-xs sm:text-sm text-zinc-200">
                  <p>Telefon: [TELEFONNUMMER]</p>
                  <p>E-Mail: [E-MAIL-ADRESSE]</p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">Vertreten durch</h4>
                <p className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800/80 font-mono text-xs text-zinc-200">
                  [Vorname Nachname]
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">Umsatzsteuer-Identifikationsnummer</h4>
                <p className="text-zinc-400 text-xs">
                  [Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [UST-IDNR] ODER: Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerstatus).]
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1 font-mono text-xs text-zinc-200">
                  <p>[Vorname Nachname]</p>
                  <p>[Straße Hausnummer]</p>
                  <p>[PLZ Ort]</p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h4>
                <p className="text-xs text-zinc-400">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                  Datenschutzinformation
                </span>
                <h4 className="text-lg font-bold text-white mb-2">1. Verantwortlicher</h4>
                <p className="mb-2 text-zinc-300">
                  Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1 font-mono text-xs sm:text-sm text-zinc-200">
                  <p className="font-bold text-white">SchallerDesign</p>
                  <p>[NAME]</p>
                  <p>[ANSCHRIFT]</p>
                  <p>E-Mail: [E-MAIL-ADRESSE]</p>
                  <p>Telefon: [TELEFONNUMMER]</p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">2. Kontaktaufnahme & Kontaktformular</h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Wenn du per Kontaktformular oder per E-Mail Kontakt mit uns aufnimmst, werden deine angegebenen Daten (Vorname, Nachname, E-Mail-Adresse, Telefonnummer, Firmenname sowie der Text deiner Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet und gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">3. Verarbeitung personenbezogener Daten & Rechtsgrundlagen</h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Die Verarbeitung der im Kontaktformular eingegebenen Daten erfolgt auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Durchführung vorvertraglicher Maßnahmen bzw. Erfüllung eines Vertrages (Art. 6 Abs. 1 lit. b DSGVO).
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">4. Speicherdauer</h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Die von dir im Kontaktformular eingegebenen Daten verbleiben bei uns, bis du uns zur Löschung aufforderst, deine Einwilligung zur Speicherung widerrufst oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung deiner Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">5. Rechte der betroffenen Personen</h4>
                <p className="text-xs sm:text-sm text-zinc-300 mb-3">
                  Du hast als betroffene Person jederzeit folgende Rechte nach der DSGVO:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-zinc-400">
                  <li><strong className="text-zinc-200">Auskunftsrecht (Art. 15 DSGVO):</strong> Auskunft über deine bei uns gespeicherten personenbezogenen Daten.</li>
                  <li><strong className="text-zinc-200">Berichtigung (Art. 16 DSGVO):</strong> Berichtigung unrichtiger oder Vervollständigung deiner bei uns gespeicherten Daten.</li>
                  <li><strong className="text-zinc-200">Löschung (Art. 17 DSGVO):</strong> Löschung deiner bei uns gespeicherten Daten („Recht auf Vergessenwerden“).</li>
                  <li><strong className="text-zinc-200">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung deiner personenbezogenen Daten.</li>
                  <li><strong className="text-zinc-200">Widerspruchsrecht (Art. 21 DSGVO):</strong> Recht auf Widerspruch gegen die Verarbeitung deiner Daten.</li>
                  <li><strong className="text-zinc-200">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Bereitstellung deiner Daten in einem strukturierten, gängigen und maschinenlesbaren Format.</li>
                  <li><strong className="text-zinc-200">Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong> Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">6. Datenschutzfreundlicher Betrieb & Keine Tracking-Dienste</h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Diese Website verzichtet bewusst auf zustimmungspflichtige Analyse- und Werbe-Trackingdienste (wie Google Analytics, Facebook-Pixel) sowie werbliche Drittanbieter-Cookies. Es werden keine Nutzerprofile erstellt.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-zinc-900/80 border-t border-zinc-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};

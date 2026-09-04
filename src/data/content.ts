import { ServiceItem, StepItem, WhyUsItem, FaqItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'webdesign',
    title: 'Webdesign',
    description: 'Individuelle und moderne Websites passend zum Unternehmen und zur Zielgruppe.',
    iconName: 'Layout',
    highlight: 'Maßgeschneidert',
    points: ['Keine austauschbaren Baukästen', 'Auf deine Zielgruppe abgestimmt', 'Modernes UI/UX-Design']
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    description: 'Die Website funktioniert auf Smartphone, Tablet und Desktop.',
    iconName: 'Smartphone',
    highlight: 'Alle Endgeräte',
    points: ['Mobile-First Konzeption', 'Touch-optimierte Elemente', 'Flüssige Übergänge auf Bildschirmen']
  },
  {
    id: 'seo',
    title: 'SEO-Grundlagen',
    description: 'Saubere technische Struktur und grundlegende Optimierung für Suchmaschinen.',
    iconName: 'Search',
    highlight: 'Besser gefunden werden',
    points: ['Semantische HTML5-Architektur', 'Schnelle Indexierbarkeit', 'Open-Graph & Meta-Tags']
  },
  {
    id: 'contact',
    title: 'Kontakt & Anfragen',
    description: 'Integration von Kontaktformularen und klaren Call-to-Actions.',
    iconName: 'MessageSquare',
    highlight: 'Mehr Kundenanfragen',
    points: ['DSGVO-konforme Formulare', 'Direkte E-Mail-Zustellung', 'Konversionsstarke Buttons']
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'Schnelle Ladezeiten und optimierte Website-Struktur.',
    iconName: 'Gauge',
    highlight: 'Unter 1 Sekunde',
    points: ['Optimierte Bildformate (WebP/AVIF)', 'Moderner, schlanker Code', 'Google PageSpeed optimiert']
  },
  {
    id: 'maintenance',
    title: 'Pflege & Änderungen',
    description: 'Möglichkeit, Inhalte später anzupassen und weiterzuentwickeln.',
    iconName: 'RefreshCw',
    highlight: 'Zukunftssicher',
    points: ['Unkomplizierte Text- & Bildanpassungen', 'Wartung & technische Sicherheit', 'Skalierbar bei Unternehmenswachstum']
  }
];

export const PRICING_FEATURES: string[] = [
  'Individuelles Webdesign',
  'Responsive Design für Smartphone, Tablet & Desktop',
  'Interaktives Kontaktformular mit Validierung',
  'Dezente, hochwertige Animationen',
  'SEO-Grundlagen & strukturierte Metadaten',
  'Optimierung für schnelle Ladezeiten',
  'Unterstützung bei Domain & Veröffentlichung der Website'
];

export const WORKFLOW_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Anfrage',
    description: 'Du erzählst uns kurz, was du brauchst.',
    details: 'Über das Anfrageformular oder per E-Mail teilst du deine Vorstellungen, Branche und Wünsche mit.'
  },
  {
    step: '02',
    title: 'Konzept',
    description: 'Wir besprechen deine Vorstellungen und erstellen ein passendes Konzept.',
    details: 'Struktur, Farbwelt und Inhalte werden abgestimmt. Du erhältst ein transparentes, verbindliches Festpreis-Angebot.'
  },
  {
    step: '03',
    title: 'Umsetzung',
    description: 'Die Website wird professionell gestaltet und umgesetzt.',
    details: 'Präziser Code, responsive Optimierung für alle Bildschirme und Zwischenabstimmungen mit dir.'
  },
  {
    step: '04',
    title: 'Veröffentlichung',
    description: 'Nach deiner Freigabe geht die Website online.',
    details: 'Domain-Einbindung, SSL-Zertifikat und finaler Technik-Check – deine neue Website ist sofort einsatzbereit.'
  }
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    title: 'Individuelles Design statt Standard-Templates',
    description: 'Keine lieblosen Massenvorlagen. Jede Website wird von Grund auf passend zu deiner Markenidentität gestaltet.',
    iconName: 'Sparkles'
  },
  {
    title: 'Persönliche Betreuung',
    description: 'Direkter Austausch mit deinem Webdesigner. Keine wechselnden Projektmanager oder zeitraubende bürokratische Hürden.',
    iconName: 'UserCheck'
  },
  {
    title: 'Moderne Technologien',
    description: 'Wir entwickeln mit aktuellem, sauberem Code für maximale Zukunftssicherheit, Sicherheit und Langlebigkeit.',
    iconName: 'Cpu'
  },
  {
    title: 'Mobile-first',
    description: 'Über 70% deiner Besucher nutzen das Smartphone. Deine Website begeistert auf kleinen wie großen Bildschirmen gleichermaßen.',
    iconName: 'Smartphone'
  },
  {
    title: 'Klare Kommunikation',
    description: 'Verständliche Absprachen auf Augenhöhe, transparente Zwischenstände und keine unverständlichen Fachbegriffe.',
    iconName: 'MessageCircle'
  },
  {
    title: 'Faire und transparente Preise',
    description: 'Feste Angebote ohne böse Überraschungen oder unklare Nachberechnungen. Du weißt vorab genau, woran du bist.',
    iconName: 'Receipt'
  },
  {
    title: 'Fokus auf Ergebnisse',
    description: 'Gutes Design ist mehr als Optik: Wir optimieren deine Website gezielt darauf, aus Besuchern echte Anfragen zu machen.',
    iconName: 'TrendingUp'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Was kostet eine Website?',
    answer: 'Eine professionelle Website gibt es bei SchallerDesign ab 499 €. Der endgültige Preis richtet sich nach Umfang und gewünschten Funktionen.'
  },
  {
    id: 'faq-2',
    question: 'Wie lange dauert die Erstellung?',
    answer: 'Je nach Umfang kann eine Website innerhalb weniger Tage bis weniger Wochen umgesetzt werden.'
  },
  {
    id: 'faq-3',
    question: 'Kann ich meine Website später ändern lassen?',
    answer: 'Ja. Änderungen und Erweiterungen können jederzeit angefragt werden.'
  },
  {
    id: 'faq-4',
    question: 'Ist die Website für Smartphones optimiert?',
    answer: 'Ja. Jede Website wird responsive umgesetzt und für Smartphone, Tablet und Desktop optimiert.'
  },
  {
    id: 'faq-5',
    question: 'Kann SchallerDesign meine bestehende Website überarbeiten?',
    answer: 'Ja. Bestehende Websites können modernisiert, verbessert oder komplett neu aufgebaut werden.'
  },
  {
    id: 'faq-6',
    question: 'Was brauche ich, um eine Website erstellen zu lassen?',
    answer: 'Am besten sind Informationen über dein Unternehmen, deine Leistungen, gewünschte Inhalte und gegebenenfalls Bilder und dein Logo. Beim Rest unterstützt dich SchallerDesign.'
  },
  {
    id: 'faq-7',
    question: 'Wie läuft die Bezahlung ab?',
    answer: 'Die Zahlungsbedingungen werden individuell im Angebot vereinbart.'
  }
];

export const TRUST_POINTS = [
  {
    title: 'Modernes Design',
    desc: 'Individuell gestaltete Websites, die professionell aussehen.'
  },
  {
    title: 'Responsive',
    desc: 'Perfekte Darstellung auf Smartphone, Tablet und Desktop.'
  },
  {
    title: 'Schnell & modern',
    desc: 'Optimierte Websites mit kurzen Ladezeiten.'
  },
  {
    title: 'Persönlicher Kontakt',
    desc: 'Direkter Ansprechpartner statt komplizierter Agentur-Strukturen.'
  }
];

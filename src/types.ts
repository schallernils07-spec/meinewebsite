export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Layout' | 'Smartphone' | 'Search' | 'MessageSquare' | 'Gauge' | 'RefreshCw';
  highlight?: string;
  points: string[];
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  badge: string;
  overview: string;
  techHighlights: string[];
  mockup: {
    heroTitle: string;
    heroSubtitle: string;
    tagline: string;
    navItems: string[];
    accentColor: string;
    features: { title: string; desc: string }[];
    stat: { value: string; label: string };
  };
}

export interface WhyUsItem {
  title: string;
  description: string;
  iconName: 'Sparkles' | 'UserCheck' | 'Cpu' | 'Smartphone' | 'MessageCircle' | 'Receipt' | 'TrendingUp';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  vorname: string;
  nachname: string;
  email: string;
  unternehmen?: string;
  telefon?: string;
  leistung: string;
  budget: string;
  nachricht: string;
  dsgvoAccepted: boolean;
}

export type LegalModalType = 'impressum' | 'datenschutz' | null;

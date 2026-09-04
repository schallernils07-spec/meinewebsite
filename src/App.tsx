import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Workflow } from './components/Workflow';
import { Portfolio } from './components/Portfolio';
import { WhyUs } from './components/WhyUs';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { LegalModalType } from './types';

export default function App() {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  const scrollToContact = () => {
    const contactElem = document.querySelector('#kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.querySelector('#leistungen');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090b0e] text-[#f1f5f9] relative selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar onNavigateToContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onContactClick={scrollToContact}
          onServicesClick={scrollToServices}
        />
        <Trust />
        <Services />
        <Pricing onContactClick={scrollToContact} />
        <Workflow />
        <Portfolio onContactClick={scrollToContact} />
        <WhyUs />
        <Faq />
        <Contact onOpenPrivacy={() => setLegalModal('datenschutz')} />
        <CtaSection onContactClick={scrollToContact} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModal(type)} />

      {/* Legal Dialog for Impressum & Datenschutz */}
      <LegalModal
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />

      {/* Privacy Notice Banner */}
      <CookieBanner onOpenPrivacy={() => setLegalModal('datenschutz')} />
    </div>
  );
}

import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ServicesExplorer from '@/components/home/ServicesExplorer';
import MarqueeBanner from '@/components/home/MarqueeBanner';
import ServicesAccordion from '@/components/home/ServicesAccordion';
import JourneySection from '@/components/home/JourneySection';
import StatsSection from '@/components/home/StatsSection';
import PropertySection from '@/components/home/PropertySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CleaningSection from '@/components/home/CleaningSection';
import SuppliersMarquee from '@/components/home/SuppliersMarquee';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/home/Footer';
import { homePage } from '@/constants/content';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />

      <HeroSection
        eyebrow="UK's Leading Energy Consultancy"
        titlePart1="Your business pays too much for energy."
        titlePart2="Let's change that."
        subtitleStart="Energyex doesn't just find you a cheaper deal —"
        subtitleBold="we manage your entire energy journey."
        subtitleEnd="Procurement, new connections, contracts, renewals and supplier issues — handled completely."
        primaryCtaLabel="Get Your Free Quote →"
        primaryCtaHref="/quote"
        secondaryCtaLabel="How it works ↓"
        secondaryCtaHref="#journey"
        stats={[
          { num: 10000, suffix: '+', label: 'Clients served', useComma: true },
          { num: 25, suffix: '%', label: 'Average saving', useComma: false },
          { num: 13, suffix: 'yrs', label: 'Experience', useComma: false },
        ]}
        backgroundImage="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <ServicesExplorer />

      <MarqueeBanner />

      <ServicesAccordion />

      <JourneySection />

      <StatsSection />

      <PropertySection />

      <TestimonialsSection />

      <CleaningSection />

      <SuppliersMarquee />

      <CTASection contact={homePage.contact} />

      <Footer footer={homePage.footer} />
    </main>
  );
}

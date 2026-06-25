import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroCleaningServices from '@/components/cleaning-services/HeroCleaningServices';
import CleaningQuickNavBar from '@/components/cleaning-services/CleaningQuickNavBar';
import ApproachSection from '@/components/cleaning-services/ApproachSection';
import CleaningProcessSection from '@/components/cleaning-services/CleaningProcessSection';
import CategoriesSection from '@/components/cleaning-services/CategoriesSection';
import CleaningWhySection from '@/components/cleaning-services/CleaningWhySection';
import { homePage } from '@/constants/content';

export const metadata: Metadata = {
  title: 'Cleaning Services for Businesses & Property Managers | Energyex',
  description:
    'Energyex coordinates fully insured cleaning partners across nine specialist services — from office and commercial cleaning to property management, carpet cleaning, landscaping, and multi-site portfolio support. One point of contact for every requirement.',
  openGraph: {
    title: 'Cleaning Services for Businesses & Property Managers | Energyex',
    description:
      'Nine specialist cleaning services coordinated through one point of contact — for businesses, property managers, landlords, and multi-site portfolios.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Services | Energyex',
    description:
      'Fully insured cleaning partners across nine specialist services. One point of contact, every property.',
  },
};

const cleaningFAQs = [
  {
    q: `What types of cleaning can you arrange?`,
    a: `We coordinate nine specialist cleaning services: window cleaning, deep cleaning, residential cleaning, move-in and move-out cleaning, carpet cleaning, commercial cleaning, property management cleaning, landscaping and grounds maintenance, and multi-site cleaning support. Each service is matched to the property type and specific requirements involved.`,
  },
  {
    q: `Are the cleaning partners fully insured?`,
    a: `Yes. All cleaning providers in our network are fully insured. We only work with experienced, vetted partners who can demonstrate professional standards and reliability — so you are not taking on the risk of arranging services through unknown contractors.`,
  },
  {
    q: `Can you arrange cleaning across multiple sites or properties?`,
    a: `Yes. Multi-site coordination is one of our core strengths. We act as a single point of contact for organisations managing several properties — handling contractor communication, site scheduling, and portfolio oversight in one place, rather than leaving you to manage multiple contractors across different locations.`,
  },
  {
    q: `How is the cleaning scheduled and managed?`,
    a: `We work with you to agree the right frequency — daily, weekly, fortnightly, monthly, or one-off — and confirm the scope and specific areas to be covered before any service begins. From there, Energyex manages the ongoing coordination and remains your point of contact for any changes, queries, or issues throughout the service.`,
  },
  {
    q: `What happens if the service does not meet expectations?`,
    a: `We remain actively involved beyond the initial set-up. If there are any performance issues, scheduling problems, or service concerns, you contact us — not the contractor directly — and we manage the resolution process. Our role is to ensure the service continues to meet your requirements throughout the contract.`,
  },
];

export default function CleaningServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroCleaningServices />
      <CleaningQuickNavBar />
      <ApproachSection />
      <CleaningProcessSection />
      <CategoriesSection />
      <CleaningWhySection />

      {/* Closing panel */}
      <section className="pt-2 px-6 lg:px-14 pb-10 bg-off">
        <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-navy to-navy-2 rounded-rl py-12 px-6 lg:px-14 relative overflow-hidden">
          <div className="absolute w-[280px] h-[280px] rounded-full bg-brand-orange/[0.2] blur-[50px] -top-[120px] -right-[80px] pointer-events-none" />
          <div className="relative z-[1]">
            <h2 className="font-serif-num text-[30px] font-semibold text-white mb-[14px] max-w-[680px]">
              Whether it&apos;s one office or a multi-site portfolio,
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.85] font-light max-w-[780px]">
              our team can help simplify the management of your cleaning services — from window cleaning
              through to grounds maintenance, all through a single point of contact.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Cleaning Services FAQs"
        title="Common questions about our cleaning coordination service."
        items={cleaningFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

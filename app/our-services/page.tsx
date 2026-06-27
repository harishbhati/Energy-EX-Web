import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import HeroEnergyServices from '@/components/energy-services/HeroEnergyServices';
import QuickNavBar from '@/components/energy-services/QuickNavBar';
import ServicesList from '@/components/energy-services/ServicesList';
import BeyondProcurement from '@/components/energy-services/BeyondProcurement';
import WhoWeHelp from '@/components/energy-services/WhoWeHelp';
import FAQSection from '@/components/common/FAQSection';
import { homePage } from '@/constants/content';

const energyFAQs = [
  {
    q: 'Will switching supplier cause any disruption to my business?',
    a: "No. Your electricity and gas continue flowing through the exact same wires and pipes — only the billing relationship changes. There's no engineer visit and no downtime.",
  },
  {
    q: 'What\'s the difference between half-hourly and non-half-hourly?',
    a: 'Half-hourly (HH) meters record usage every 30 minutes and are typically used by larger or high-consumption sites; non-HH meters are billed on estimated or periodic readings, common for smaller premises. We match the contract type to your meter and usage pattern.',
  },
  {
    q: 'Can I get solar without paying anything upfront?',
    a: "Yes — through a Power Purchase Agreement (PPA), a funder installs and owns the panels at no cost to you, and you simply buy the electricity generated at a rate below your current tariff.",
  },
  {
    q: 'What happens when my contract is close to renewal?',
    a: "We track every contract end date and go back to market ahead of time, so you're never rolled onto an expensive out-of-contract rate.",
  },
  {
    q: 'Do you handle brand new electricity or gas connections?',
    a: 'Yes — our in-house team prepares and submits the application, liaises with the gas and electricity boards from start to finish, and arranges meter installation for new units, extensions or landlord upgrades.',
  },
];

export const metadata = {
  title: 'Energy Services | Energyex — Electricity, Gas & Solar for UK Businesses',
  description:
    'Independent electricity, gas, solar and new connections procurement for UK businesses. Compare 20+ suppliers, get 24-hour quotes, and switch with zero hassle.',
  openGraph: {
    title: 'Energy Services | Energyex — UK Business Energy Broker',
    description:
      'Electricity, gas, solar and new connections. Independent broker — not tied to any supplier. 20+ suppliers compared, free quotes within 24 hours.',
    type: 'website',
    url: '/our-services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy Services | Energyex',
    description: 'Electricity, gas, solar and new connections for UK businesses. Independent, free, 24-hour quotes.',
  },
  alternates: { canonical: '/our-services' },
};

export default function EnergyServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroEnergyServices />
      <QuickNavBar />
      <ServicesList />
      <BeyondProcurement />
      <WhoWeHelp />
      <FAQSection
        eyebrow="Energy FAQs"
        title="Common questions about switching."
        items={energyFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

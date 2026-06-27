import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroElectricityProcurement from '@/components/electricity-procurement/HeroElectricityProcurement';
import ElectricityQuickNavBar from '@/components/electricity-procurement/ElectricityQuickNavBar';
import ElectricityServicesList from '@/components/electricity-procurement/ElectricityServicesList';
import CapacitySection from '@/components/electricity-procurement/CapacitySection';
import WhyChooseSection from '@/components/electricity-procurement/WhyChooseSection';
import { homePage } from '@/constants/content';

const electricityFAQs = [
  {
    q: 'How long does it take to switch electricity supplier?',
    a: 'Once you accept a quote, the switch typically completes within 28 days for non-half-hourly sites. Half-hourly sites can take slightly longer depending on metering requirements. We manage the full process and keep you updated at every stage.',
  },
  {
    q: 'Can you help if we have electricity across multiple sites?',
    a: 'Yes — multi-site procurement is a core part of what we do. We can manage your entire portfolio under one agreement, aligning contract end dates where possible to simplify future renewals.',
  },
  {
    q: "What's the difference between fixed and flexible contracts?",
    a: "A fixed contract locks in a unit rate for the contract term, giving you cost certainty. A flexible contract lets you buy electricity in tranches as market prices move, which can produce savings if timed well — but carries more complexity. We'll recommend the right approach for your business.",
  },
  {
    q: 'Are your brokerage services free for businesses?',
    a: "Our brokerage is commission-based — we're paid by the supplier you choose, not by you. We explain our fee structure upfront and are fully transparent about how we earn, so you can be confident our recommendations are in your interest.",
  },
];

export const metadata = {
  title: 'Electricity Procurement | Energyex — Independent Business Energy Broker',
  description:
    'Compare 20+ electricity suppliers for your business. Fixed, flexible, corporate, SME and half-hourly contracts — managed by an independent UK energy broker.',
  openGraph: {
    title: 'Electricity Procurement | Energyex — UK Business Energy Broker',
    description:
      'Fixed, flexible, corporate, SME and half-hourly electricity contracts. Independent advice — not tied to any supplier. 20+ suppliers compared.',
    type: 'website',
    url: '/electricity-procurement',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electricity Procurement | Energyex',
    description: 'Compare 20+ electricity suppliers for your business. Independent UK energy broker — free quotes within 24 hours.',
  },
  alternates: { canonical: '/electricity-procurement' },
};

export default function ElectricityProcurementPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroElectricityProcurement />
      <ElectricityQuickNavBar />
      <ElectricityServicesList />
      <CapacitySection />
      <WhyChooseSection />
      <FAQSection
        eyebrow="Electricity FAQs"
        title="Common questions about electricity procurement."
        items={electricityFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

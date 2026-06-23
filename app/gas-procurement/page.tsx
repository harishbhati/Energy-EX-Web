import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroGasProcurement from '@/components/gas-procurement/HeroGasProcurement';
import GasQuickNavBar from '@/components/gas-procurement/GasQuickNavBar';
import GasServicesList from '@/components/gas-procurement/GasServicesList';
import GasCostAnalysisSection from '@/components/gas-procurement/GasCostAnalysisSection';
import InvoiceValidationSection from '@/components/gas-procurement/InvoiceValidationSection';
import IndustriesSection from '@/components/gas-procurement/IndustriesSection';
import GasWhyChooseSection from '@/components/gas-procurement/GasWhyChooseSection';
import { homePage } from '@/constants/content';

export const metadata: Metadata = {
  title: 'Gas Procurement for Businesses | Energyex — Independent UK Energy Broker',
  description:
    'Independent gas procurement for UK businesses. Fixed-price, flexible, pass-through and multi-site contracts. Compare the whole market and reduce your gas costs with Energyex.',
  openGraph: {
    title: 'Gas Procurement | Energyex',
    description:
      'Fixed-price, flexible, pass-through and multi-site gas contracts for UK businesses. Whole-market access — not tied to any single supplier.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas Procurement | Energyex',
    description: 'Independent gas procurement for UK businesses. Compare the whole market.',
  },
};

const gasFAQs = [
  {
    q: 'How long does a business gas contract typically last?',
    a: 'Most fixed-price business gas contracts run for one to three years. Flexible contracts can be structured differently depending on your consumption and risk profile. We will recommend the most appropriate term based on how your business uses gas.',
  },
  {
    q: 'What is a pass-through gas contract?',
    a: 'A pass-through contract separates the commodity cost (the unit rate) from the non-commodity charges, passing those through at actual cost. This can offer greater billing transparency but does expose you to movements in transportation and industry charges. We assess whether this structure suits your business before recommending it.',
  },
  {
    q: 'Can you manage gas across all of our sites?',
    a: 'Yes. Multi-site gas management is a core service. We consolidate contracts where possible, align renewal dates across your portfolio, and provide a single point of contact for all supplier queries and renewals.',
  },
  {
    q: 'What happens if there is a billing error?',
    a: 'We provide invoice validation as part of our ongoing account management service. If we identify a discrepancy, we liaise directly with your supplier to seek clarification and resolution — at no additional cost to you.',
  },
];

export default function GasProcurementPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroGasProcurement />
      <GasQuickNavBar />
      <GasServicesList />
      <GasCostAnalysisSection />
      <InvoiceValidationSection />
      <IndustriesSection />
      <GasWhyChooseSection />

      {/* Closing panel */}
      <section className="pt-2 px-6 lg:px-14 pb-10 bg-white">
        <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-navy to-navy-2 rounded-rl py-12 px-6 lg:px-14 relative overflow-hidden">
          <div className="absolute w-[280px] h-[280px] rounded-full bg-brand-orange/[0.12] -top-[120px] -right-[80px]" />
          <div className="relative z-[1]">
            <h2 className="font-serif-num text-[30px] font-semibold text-white mb-[14px] max-w-[680px]">
              Whether you operate a single site or a complex multi-site portfolio,
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.85] font-light max-w-[780px]">
              our team provides the expertise, transparency, and support needed to manage gas procurement with confidence — from the first tender to every renewal after it.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Gas FAQs"
        title="Common questions about gas procurement."
        items={gasFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

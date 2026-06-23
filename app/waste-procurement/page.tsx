import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroWasteProcurement from '@/components/waste-procurement/HeroWasteProcurement';
import WasteQuickNavBar from '@/components/waste-procurement/WasteQuickNavBar';
import CommonIssuesSection from '@/components/waste-procurement/CommonIssuesSection';
import WasteProcessSection from '@/components/waste-procurement/WasteProcessSection';
import WasteServicesSection from '@/components/waste-procurement/WasteServicesSection';
import ComplianceSection from '@/components/waste-procurement/ComplianceSection';
import MultiSiteSection from '@/components/waste-procurement/MultiSiteSection';
import WasteWhyChooseSection from '@/components/waste-procurement/WasteWhyChooseSection';
import { homePage } from '@/constants/content';

export const metadata: Metadata = {
  title: 'Waste Procurement & Management for UK Businesses | Energyex',
  description:
    'Independent waste procurement for UK businesses. We review your current contracts, compare licensed waste contractors, manage compliance, and provide ongoing multi-site support — from general commercial waste to hazardous disposal.',
  openGraph: {
    title: 'Waste Procurement & Management for UK Businesses | Energyex',
    description:
      'Contract reviews, market tendering, and ongoing waste management for UK businesses. Independent advice — not tied to any waste contractor.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waste Procurement | Energyex',
    description:
      'Independent waste procurement and management for UK businesses. We match the contract to how your site actually operates.',
  },
};

const wasteFAQs = [
  {
    q: `Can you review my existing waste contract rather than just arranging a new one?`,
    a: `Yes. A contract review is often the first step. We assess your current arrangements — container sizes, collection frequencies, weight allowances, pricing structures, escalation clauses, and notice periods — and identify whether the existing service is still appropriate or whether there are material savings or service improvements available.`,
  },
  {
    q: `What waste streams can you procure for?`,
    a: `We support procurement across general commercial waste, recycling streams (paper, cardboard, plastics, glass, metals), food waste, confidential waste destruction, hazardous and clinical waste, electrical waste, and waste-to-energy and recovery services. If your site generates a specialist stream, we can advise on appropriate licensed contractors.`,
  },
  {
    q: `What is Duty of Care and how does it apply to my business?`,
    a: `Under the Environmental Protection Act 1990, all businesses have a legal Duty of Care when disposing of waste. This means using licensed waste carriers, maintaining accurate Waste Transfer Notes, and ensuring waste is disposed of correctly. We work with licensed contractors and support businesses in meeting their ongoing obligations — including documentation for hazardous and specialist streams.`,
  },
  {
    q: `Do you manage waste contracts for multi-site portfolios?`,
    a: `Yes. We provide centralised waste management for property management companies, commercial landlords, hospitality groups, retail chains, care home operators, and industrial businesses. This includes consolidated procurement, portfolio-level reporting, site additions and removals, and a single point of contact for the full portfolio.`,
  },
  {
    q: `What happens if a waste contractor doesn't perform?`,
    a: `We remain involved beyond placement. Supplier performance issues, missed collections, invoicing queries, and service changes are all managed through us — you don't have to navigate contractor disputes alone.`,
  },
];

export default function WasteProcurementPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroWasteProcurement />
      <WasteQuickNavBar />
      <CommonIssuesSection />
      <WasteProcessSection />
      <WasteServicesSection />
      <ComplianceSection />
      <MultiSiteSection />
      <WasteWhyChooseSection />

      {/* Closing panel */}
      <section className="pt-2 px-6 lg:px-14 pb-10 bg-off">
        <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-navy to-navy-2 rounded-rl py-12 px-6 lg:px-14 relative overflow-hidden">
          <div className="absolute w-[280px] h-[280px] rounded-full bg-brand-orange/[0.22] blur-[40px] -top-[120px] -right-[80px] pointer-events-none" />
          <div className="relative z-[1]">
            <h2 className="font-serif-num text-[30px] font-semibold text-white mb-[14px] max-w-[680px]">
              Whether you&apos;re renewing a contract, managing multiple sites, or simply unsure if your
              service still fits,
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.85] font-light max-w-[780px]">
              our team provides the independent expertise needed to manage your waste arrangements properly
              — from first review through every renewal after it.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Waste Procurement FAQs"
        title="Common questions about business waste procurement."
        items={wasteFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

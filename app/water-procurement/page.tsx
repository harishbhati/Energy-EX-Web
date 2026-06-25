import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroWaterProcurement from '@/components/water-procurement/HeroWaterProcurement';
import WaterQuickNavBar from '@/components/water-procurement/WaterQuickNavBar';
import UnderstandingChargesSection from '@/components/water-procurement/UnderstandingChargesSection';
import WaterProcessSection from '@/components/water-procurement/WaterProcessSection';
import BillValidationSection from '@/components/water-procurement/BillValidationSection';
import SpecialistSupportSection from '@/components/water-procurement/SpecialistSupportSection';
import WaterWhyChooseSection from '@/components/water-procurement/WaterWhyChooseSection';
import { homePage } from '@/constants/content';

export const metadata: Metadata = {
  title: 'Water Procurement for UK Businesses | Energyex — Independent Water Broker',
  description:
    'Independent water procurement and account management for UK businesses. We compare licensed retailers, review your bills, recover overcharges, and manage multi-site water portfolios — from first switch through every renewal.',
  openGraph: {
    title: 'Water Procurement for UK Businesses | Energyex',
    description:
      'Switch water retailer, validate billing, and manage complex water accounts with Energyex. Independent advice — not tied to any retailer.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Procurement | Energyex',
    description:
      'Independent water procurement and bill validation for UK businesses. We manage the account long after switching.',
  },
};

const waterFAQs = [
  {
    q: 'Can my business switch water retailer?',
    a: `Yes. The business water market in England was deregulated in April 2017, allowing non-household customers to choose their licensed water retailer. The physical infrastructure — pipes, supply, and wastewater — remains unchanged. Only the retailer managing your account changes, in a process broadly similar to switching an energy supplier.`,
  },
  {
    q: 'How long does switching take?',
    a: `The standard switching process typically takes around 28 days from accepted quotation. We manage the process from application to confirmation, with minimal administration required on your side.`,
  },
  {
    q: 'Will my water supply be interrupted during a switch?',
    a: `No. A retailer switch does not affect your physical supply at any point. The water network and infrastructure are operated by the regional wholesaler regardless of which retailer holds your account.`,
  },
  {
    q: `What is surface water drainage and can it be reduced?`,
    a: `Surface water drainage charges cover the removal of rainwater runoff from your site. They are typically calculated based on site area and drainage characteristics. Where a site has significant hard-standing or drainage infrastructure that does not actually drain to the public sewer, these charges can sometimes be reassessed and reduced. We assess this as part of our account review.`,
  },
  {
    q: 'Do you manage water accounts for property portfolios?',
    a: `Yes. We provide centralised account management for commercial landlords, property portfolios, hospitality groups, care home operators, and multi-site industrial businesses. This includes billing oversight, renewal tracking, vacancy management, and a single point of contact for the full portfolio.`,
  },
];

export default function WaterProcurementPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroWaterProcurement />
      <WaterQuickNavBar />
      <UnderstandingChargesSection />
      <WaterProcessSection />
      <BillValidationSection />
      <SpecialistSupportSection />
      <WaterWhyChooseSection />

      {/* Closing panel */}
      <section className="pt-2 px-6 lg:px-14 pb-10 bg-off">
        <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-navy to-navy-2 rounded-rl py-12 px-6 lg:px-14 relative overflow-hidden">
          <div className="absolute w-[280px] h-[280px] rounded-full bg-brand-orange/[0.18] blur-[40px] -top-[120px] -right-[80px] pointer-events-none" />
          <div className="relative z-[1]">
            <h2 className="font-serif-num text-[30px] font-semibold text-white mb-[14px] max-w-[680px]">
              Whether you&apos;re approaching renewal, reviewing your retailer, or investigating a billing
              concern,
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.85] font-light max-w-[780px]">
              our team provides the independent expertise needed to manage your water account properly —
              from first review through every renewal after it.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Water Procurement FAQs"
        title="Common questions about business water procurement."
        items={waterFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

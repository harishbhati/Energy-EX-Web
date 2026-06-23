import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroBeyondProcurement from '@/components/beyond-procurement/HeroBeyondProcurement';
import BeyondQuickNavBar from '@/components/beyond-procurement/BeyondQuickNavBar';
import BeyondServicesList from '@/components/beyond-procurement/BeyondServicesList';
import WhyItMattersSection from '@/components/beyond-procurement/WhyItMattersSection';
import HowItWorksSection from '@/components/beyond-procurement/HowItWorksSection';
import WhoWeHelpSection from '@/components/beyond-procurement/WhoWeHelpSection';
import { homePage } from '@/constants/content';

export const metadata: Metadata = {
  title: 'Beyond Procurement — Post-Contract Utility Management | Energyex',
  description:
    'Invoice validation, kVA analysis, MOP contracts, SECR compliance, and consumption monitoring for UK businesses. We protect the savings negotiated at contract stage — and recover costs you did not know you were owed.',
  openGraph: {
    title: 'Beyond Procurement — Post-Contract Utility Management | Energyex',
    description:
      'kVA analysis, invoice validation, MOP contracts, SECR compliance, and energy monitoring. Energyex stays on after your contract is signed to make the savings stick.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Procurement | Energyex',
    description:
      'Post-contract utility management for UK businesses — invoice validation, compliance, kVA analysis and more.',
  },
};

const beyondFAQs = [
  {
    q: 'Is the invoice validation service completely independent of my supplier?',
    a: 'Yes. We act on your behalf, not the supplier\'s. Our team checks every invoice against your contracted rates and meter data, and we raise disputes directly with your supplier when discrepancies are found. There is no conflict of interest.',
  },
  {
    q: 'What is DCP 161 and could it affect my bills?',
    a: 'DCP 161 (Distribution Connection and Use of System Agreement 161) changed the way capacity-related distribution charges are calculated. If your kVA allowance is not correctly aligned with your actual demand, you may be subject to excess capacity charges. Our kVA analysis identifies whether your current allowance is appropriate and flags any historic breaches.',
  },
  {
    q: 'How far back can you validate invoices?',
    a: 'Our retrospective audit covers up to six years of historic bills. This is the maximum period within which suppliers are required to honour corrections. Where errors are identified, we pursue the recovery on your behalf.',
  },
  {
    q: 'When does my site need to move to a Half-Hourly meter?',
    a: 'Sites with a maximum demand of 100 kW or above are required to have a Half-Hourly (HH) meter and a separate MOP and DC/DA contract. P272 regulations also brought many smaller sites into HH settlement. We assess whether your site is correctly metered and manage the transition if it is not.',
  },
  {
    q: 'Is the initial bill review really free?',
    a: 'Yes. We review your most recent bills at no charge to identify whether there are any errors, capacity mismatches, or compliance issues worth pursuing. If there is nothing to recover, you will know that — and there is no fee.',
  },
];

export default function BeyondProcurementPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroBeyondProcurement />
      <BeyondQuickNavBar />
      <BeyondServicesList />
      <WhyItMattersSection />
      <HowItWorksSection />
      <WhoWeHelpSection />

      {/* Closing panel */}
      <section className="pt-2 px-6 lg:px-14 pb-10 bg-off">
        <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-navy to-navy-2 rounded-rl py-12 px-6 lg:px-14 relative overflow-hidden">
          <div className="absolute w-[340px] h-[340px] rounded-full bg-brand-orange/[0.12] blur-[60px] -top-[140px] -right-[100px] pointer-events-none" />
          <div className="relative z-[1]">
            <h2 className="font-serif-num text-[30px] font-semibold text-white mb-[14px] max-w-[640px]">
              Start with a free bill review — we&apos;ll tell you within five working days whether there&apos;s
              anything worth recovering.
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.85] font-light max-w-[740px]">
              No commitment required. If there&apos;s nothing to find, you&apos;ll have that confirmed in
              writing. If there is, we&apos;ll show you exactly what it is and how we&apos;ll recover it.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Beyond Procurement FAQs"
        title="Common questions about post-contract utility management."
        items={beyondFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

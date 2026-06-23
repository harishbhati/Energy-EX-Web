import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroPropertyManagement from '@/components/property-management/HeroPropertyManagement';
import PropertyQuickNavBar from '@/components/property-management/PropertyQuickNavBar';
import FrustrationsSection from '@/components/property-management/FrustrationsSection';
import WhoWeSupportSection from '@/components/property-management/WhoWeSupportSection';
import ChallengesSection from '@/components/property-management/ChallengesSection';
import ServicesLedger from '@/components/property-management/ServicesLedger';
import PropertyProcessSection from '@/components/property-management/PropertyProcessSection';
import PropertyWhyChooseSection from '@/components/property-management/PropertyWhyChooseSection';
import { homePage } from '@/constants/content';

export const metadata: Metadata = {
  title: 'Property & Utility Management for UK Property Managers | Energyex',
  description:
    'Energyex provides centralised utility management for property managers — covering electricity, gas, water, waste, cleaning, and renewables across single sites and multi-site portfolios. One point of contact for every utility.',
  openGraph: {
    title: 'Property & Utility Management for UK Property Managers | Energyex',
    description:
      'One coordinated service for electricity, gas, water, waste, cleaning, and renewables — designed for property managers and portfolio owners.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property & Utility Management | Energyex',
    description:
      'Centralised utility management for property portfolios. One point of contact, every utility, every site.',
  },
};

const propertyFAQs = [
  {
    q: `Can you manage utilities across a mixed portfolio of residential and commercial sites?`,
    a: `Yes. We work with mixed-use portfolios covering residential blocks, commercial units, and managed workspaces within the same estate. Each site is managed to reflect its specific utility type, metering arrangement, and lease structure — with consolidated reporting across the whole portfolio.`,
  },
  {
    q: `How does your service differ from going direct to a utility supplier?`,
    a: `Going direct to a single supplier gives you access to that supplier's rates. We go to market across multiple suppliers on your behalf, recommend the most appropriate option, and then manage the account, invoices, and supplier liaison throughout the contract term. You also get a single point of contact across every utility — not separate accounts with separate contacts for each service.`,
  },
  {
    q: `Can you take over contracts that are already in place?`,
    a: `Yes. We regularly onboard clients whose utilities are already contracted. We gather the existing arrangements, review them against the market, identify what is performing well and what is not, and work out whether any changes are practical within the current contract terms. Where contracts are still running, we plan ahead for the renewals.`,
  },
  {
    q: `What do you need from us to get started?`,
    a: `We typically need recent utility bills or account details for each site, a list of the sites in the portfolio, and a contact for any existing supplier accounts. Where billing access is available online, we can often gather information directly. We try to make the onboarding process as straightforward as possible for busy property management teams.`,
  },
  {
    q: `Do you provide reporting across the whole portfolio?`,
    a: `Yes. We provide portfolio-level reporting covering costs, consumption, contract status, and renewal dates across all sites and utility types. This gives property managers — and the landlords or owners they report to — a clear and consistent view of utility performance across the estate, without having to log into multiple supplier portals.`,
  },
];

export default function PropertyManagementPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroPropertyManagement />
      <PropertyQuickNavBar />
      <FrustrationsSection />
      <WhoWeSupportSection />
      <ChallengesSection />
      <ServicesLedger />
      <PropertyProcessSection />
      <PropertyWhyChooseSection />

      {/* Closing panel */}
      <section className="pt-2 px-6 lg:px-14 pb-10 bg-off">
        <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-navy to-navy-2 rounded-rl py-12 px-6 lg:px-14 relative overflow-hidden">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-orange/[0.25] blur-[50px] -top-[120px] -right-[80px] pointer-events-none" />
          <div className="relative z-[1]">
            <h2 className="font-serif-num text-[30px] font-semibold text-white mb-[14px] max-w-[720px]">
              Whether you manage one block or a hundred sites,
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.85] font-light max-w-[800px]">
              we provide the structured utility management your portfolio needs — handling every supplier,
              every contract, and every query through one coordinated service. Let your team focus on the
              properties.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Property Management FAQs"
        title="Common questions about utility management for property portfolios."
        items={propertyFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroSolarProcurement from '@/components/solar-procurement/HeroSolarProcurement';
import SolarQuickNavBar from '@/components/solar-procurement/SolarQuickNavBar';
import WhySolarSection from '@/components/solar-procurement/WhySolarSection';
import SolarProcessSection from '@/components/solar-procurement/SolarProcessSection';
import FundingOptionsSection from '@/components/solar-procurement/FundingOptionsSection';
import BatteryStorageSection from '@/components/solar-procurement/BatteryStorageSection';
import SolarIndustriesSection from '@/components/solar-procurement/SolarIndustriesSection';
import SolarWhyChooseSection from '@/components/solar-procurement/SolarWhyChooseSection';
import { homePage } from '@/constants/content';

export const metadata: Metadata = {
  title: 'Commercial Solar Procurement | Energyex — Independent UK Energy Broker',
  description:
    'Independent commercial solar procurement for UK businesses. Buy outright or zero-upfront PPA. We compare installers, assess funding routes, and manage delivery end to end.',
  openGraph: {
    title: 'Commercial Solar Procurement | Energyex',
    description:
      'Independent commercial solar advice — outright purchase, PPA, lease, or fully-funded. Whole-market access, not tied to any installer or funding provider.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Solar Procurement | Energyex',
    description: 'Independent commercial solar for UK businesses. Compare installers and funding routes with Energyex.',
  },
};

const solarFAQs = [
  {
    q: 'Do you install solar panels?',
    a: 'No — Energyex is an independent advisor, not an installer. We assess feasibility, obtain and compare proposals from trusted installation partners, and manage the process from start to finish. This means our recommendations are based on what best suits your site, not on any commercial relationship with an installer.',
  },
  {
    q: 'What is a Power Purchase Agreement (PPA)?',
    a: 'A PPA is a commercial arrangement where a third party funds, installs, and owns the solar system on your premises. You purchase the electricity it generates at an agreed rate, typically lower than your current grid tariff. It requires no upfront capital but means you do not own the asset.',
  },
  {
    q: 'How long does a commercial solar project typically take?',
    a: 'Timescales vary depending on site complexity, DNO queue times, and planning requirements. A straightforward project, from initial consultation to commissioning, can take three to six months. We keep you informed throughout and coordinate with partners to minimise unnecessary delays.',
  },
  {
    q: 'Can you assess multiple sites?',
    a: 'Yes. We work with businesses that want to evaluate solar across a portfolio of sites, phasing projects by suitability and commercial viability. Multi-site assessments allow us to prioritise where solar offers the strongest return and plan a realistic rollout programme.',
  },
];

export default function SolarProcurementPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroSolarProcurement />
      <SolarQuickNavBar />
      <WhySolarSection />
      <SolarProcessSection />
      <FundingOptionsSection />
      <BatteryStorageSection />
      <SolarIndustriesSection />
      <SolarWhyChooseSection />

      {/* Closing panel */}
      <section className="pt-2 px-6 lg:px-14 pb-10 bg-white">
        <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-navy to-navy-2 rounded-rl py-12 px-6 lg:px-14 relative overflow-hidden">
          <div className="absolute w-[280px] h-[280px] rounded-full bg-[#F2A93B]/[0.14] -top-[120px] -right-[80px]" />
          <div className="relative z-[1]">
            <h2 className="font-serif-num text-[30px] font-semibold text-white mb-[14px] max-w-[680px]">
              Whether you&apos;re exploring solar for the first time or reviewing a multi-site portfolio,
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.85] font-light max-w-[780px]">
              our team provides the independent expertise needed to assess feasibility, compare funding routes,
              and manage delivery with confidence — from first consultation to commissioning.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Solar FAQs"
        title="Common questions about commercial solar."
        items={solarFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

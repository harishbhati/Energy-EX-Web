import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroNewConnections from '@/components/new-connections/HeroNewConnections';
import NewConnectionsQuickNavBar from '@/components/new-connections/NewConnectionsQuickNavBar';
import WhatWeHandleSection from '@/components/new-connections/WhatWeHandleSection';
import ConnectionsProcessSection from '@/components/new-connections/ConnectionsProcessSection';
import MeterTypesSection from '@/components/new-connections/MeterTypesSection';
import SmartMeteringSection from '@/components/new-connections/SmartMeteringSection';
import ConnectionsWhyChooseSection from '@/components/new-connections/ConnectionsWhyChooseSection';
import { homePage } from '@/constants/content';

export const metadata: Metadata = {
  title: 'New Gas & Electricity Connections | Energyex — Independent UK Energy Broker',
  description:
    'New electricity and gas supply connections for UK businesses. From brand-new builds to additional landlord meters — our in-house team manages the application, board liaison, and installation.',
  openGraph: {
    title: 'New Gas & Electricity Connections | Energyex',
    description:
      'New supply connections for UK businesses. We handle applications, board liaison, and meter installation — faster approvals through established board relationships.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Gas & Electricity Connections | Energyex',
    description: 'New electricity and gas supply connections for UK businesses, handled end to end by Energyex.',
  },
};

const connectionsFAQs = [
  {
    q: 'How long does a new connection typically take?',
    a: 'Timescales vary depending on the type of connection, the relevant board, and any DNO or gas network capacity considerations. Simple connections can be completed in a matter of weeks. More complex applications — particularly where capacity reviews are required — can take longer. We keep you updated throughout and follow up directly with the board to avoid unnecessary delays.',
  },
  {
    q: 'What is the difference between a Non-Half Hourly and Half-Hourly meter?',
    a: 'Non-Half Hourly (NHH) meters are read periodically — typically quarterly — and do not automatically record consumption without an AMR device. Half-Hourly (HH) meters record consumption electronically every 30 minutes and are generally required for larger sites or where a DNO capacity agreement applies. We advise on the correct meter type for your site at the outset.',
  },
  {
    q: 'Can you arrange additional meters for an existing building?',
    a: 'Yes. If you are a commercial landlord adding meters to separate tenancies, or modifying an existing supply layout, our team manages the application and board liaison just as we would for a brand-new connection.',
  },
  {
    q: 'What is an AMR device and do I need one?',
    a: 'An Automatic Meter Reading (AMR) device communicates your consumption remotely to your supplier, enabling accurate billing without on-site reads. Without one, NHH meters may generate estimated bills. We assess whether an AMR is appropriate for your site as part of the connection process.',
  },
];

export default function NewConnectionsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroNewConnections />
      <NewConnectionsQuickNavBar />
      <WhatWeHandleSection />
      <ConnectionsProcessSection />
      <MeterTypesSection />
      <SmartMeteringSection />
      <ConnectionsWhyChooseSection />

      {/* Closing panel */}
      <section className="pt-2 px-6 lg:px-14 pb-10 bg-white">
        <div className="max-w-[1180px] mx-auto bg-gradient-to-br from-navy to-navy-2 rounded-rl py-12 px-6 lg:px-14 relative overflow-hidden">
          <div className="absolute w-[280px] h-[280px] rounded-full bg-brand-orange/[0.12] -top-[120px] -right-[80px]" />
          <div className="relative z-[1]">
            <h2 className="font-serif-num text-[30px] font-semibold text-white mb-[14px] max-w-[680px]">
              Whether it&apos;s a brand-new site or additional meters for an existing portfolio,
            </h2>
            <p className="text-[14.5px] text-white/60 leading-[1.85] font-light max-w-[780px]">
              our in-house team manages the application, the board relationship, and the installation — so
              your new supply goes live with as little friction as possible.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="New Connections FAQs"
        title="Common questions about new supply connections."
        items={connectionsFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

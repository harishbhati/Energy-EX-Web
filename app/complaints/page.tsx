import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import LegalHero from '@/components/legal/LegalHero';
import ComplaintsContent from '@/components/legal/ComplaintsContent';
import { homePage } from '@/constants/content';

export const metadata = {
  title: 'Complaints Procedure | Energyex',
  description:
    'How Energyex handles concerns, your right to escalate, and how to contact the Energy Broker ADR Ombudsman.',
  alternates: { canonical: '/complaints' },
};

export default function ComplaintsPage() {
  return (
    <main className="overflow-x-hidden bg-off">
      <Navbar navLinks={homePage.navLinks} />
      <LegalHero
        eyebrow="Legal"
        title="Complaints Procedure"
        subtitle="How we handle concerns, and your right to take them further."
      />
      <ComplaintsContent />
      <Footer footer={homePage.footer} />
    </main>
  );
}

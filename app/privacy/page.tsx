import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import LegalHero from '@/components/legal/LegalHero';
import PrivacyContent from '@/components/legal/PrivacyContent';
import { homePage } from '@/constants/content';

export const metadata = {
  title: 'Privacy Policy | Energyex',
  description:
    'How Energyex collects, uses and protects your personal information. Read our full privacy policy.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="overflow-x-hidden bg-off">
      <Navbar navLinks={homePage.navLinks} />
      <LegalHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Energyex collects, uses and protects your information."
      />
      <PrivacyContent />
      <Footer footer={homePage.footer} />
    </main>
  );
}

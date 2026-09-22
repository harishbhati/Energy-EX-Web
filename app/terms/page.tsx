import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import LegalHero from '@/components/legal/LegalHero';
import TermsContent from '@/components/legal/TermsContent';
import { homePage } from '@/constants/content';

export const metadata = {
  title: 'Terms & Conditions | Energyex',
  description: 'Terms & Conditions for use of the Energyex website and services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden bg-off">
      <Navbar navLinks={homePage.navLinks} />
      <LegalHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="The terms that govern your use of our website and services."
      />
      <TermsContent />
      <Footer footer={homePage.footer} />
    </main>
  );
}
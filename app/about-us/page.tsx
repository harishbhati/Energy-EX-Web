import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import HeroAbout from '@/components/about/HeroAbout';
import TrustBar from '@/components/about/TrustBar';
import WhoWeAre from '@/components/about/WhoWeAre';
import HowItWorks from '@/components/about/HowItWorks';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import ValuesSection from '@/components/about/ValuesSection';
import AboutCTA from '@/components/about/AboutCTA';
import { homePage } from '@/constants/content';

export const metadata = {
  title: 'About Us | Energyex — Independent UK Energy Consultancy',
  description:
    'Learn about Energyex — an independent UK energy brokerage founded in 2021, backed by 13 years of energy industry expertise. We help businesses save on electricity, gas, water, and more.',
  openGraph: {
    title: 'About Energyex — Independent UK Energy Consultancy',
    description:
      'Founded in 2021, backed by 13 years of industry expertise. Not tied to any supplier — we work entirely for your business.',
    type: 'website',
    url: '/about-us',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Energyex | Independent UK Energy Broker',
    description:
      'Independent UK energy brokerage — 13 years of expertise, 10,000+ businesses helped, 25% average saving.',
  },
  alternates: { canonical: '/about-us' },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroAbout />
      <TrustBar />
      <WhoWeAre />
      <HowItWorks />
      <WhyChooseUs />
      <ValuesSection />
      <AboutCTA />
      <Footer footer={homePage.footer} />
    </main>
  );
}

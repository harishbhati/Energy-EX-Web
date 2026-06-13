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

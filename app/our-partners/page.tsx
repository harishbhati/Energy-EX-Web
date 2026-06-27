import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/common/FAQSection';
import HeroFacilityServices from '@/components/facility-services/HeroFacilityServices';
import FacilityQuickNavBar from '@/components/facility-services/FacilityQuickNavBar';
import FacilityServicesList from '@/components/facility-services/FacilityServicesList';
import PropertyTypesCover from '@/components/facility-services/PropertyTypesCover';
import { homePage } from '@/constants/content';

const facilityFAQs = [
  {
    q: 'Can I bundle cleaning with water and waste procurement?',
    a: "Yes — most of our facility clients combine two or more services under one contact, one invoice schedule and one renewal calendar. You can also take any service on its own.",
  },
  {
    q: 'Do cleaning teams work outside normal business hours?',
    a: 'Yes, at no extra charge. Teams are available evenings, weekends and bank holidays so cleaning never disrupts your operating hours.',
  },
  {
    q: 'How does property management work across multiple sites?',
    a: 'One dedicated contact manages energy, water, waste and contract renewals across your entire portfolio, dealing directly with suppliers on your behalf when issues arise.',
  },
  {
    q: 'Are the cleaning products you use safe for staff and pets?',
    a: 'Yes — we use eco-friendly products that are safe for children, pets and the planet across all six of our cleaning services.',
  },
];

export const metadata = {
  title: 'Facility Services | Energyex — Water, Waste, Cleaning & Property Management',
  description:
    'Independent facility services for UK businesses — water procurement, waste management, commercial cleaning, and property utility management. One trusted contact for every site in your portfolio.',
  openGraph: {
    title: 'Facility Services | Energyex — UK Facility Management',
    description:
      'Water, waste, cleaning and property management for UK businesses. Bundle services under one contact, one renewal calendar.',
    type: 'website',
    url: '/our-partners',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facility Services | Energyex',
    description: 'Water, waste, cleaning and property management — all through one independent contact.',
  },
  alternates: { canonical: '/our-partners' },
};

export default function FacilityServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar navLinks={homePage.navLinks} />
      <HeroFacilityServices />
      <FacilityQuickNavBar />
      <FacilityServicesList />
      <PropertyTypesCover />
      <FAQSection
        eyebrow="Facility FAQs"
        title="Common questions about facility services."
        items={facilityFAQs}
      />
      <CTASection contact={homePage.contact} />
      <Footer footer={homePage.footer} />
    </main>
  );
}

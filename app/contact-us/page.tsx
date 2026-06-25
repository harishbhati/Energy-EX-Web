import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import HeroContact from '@/components/contact/HeroContact';
import ContactForm from '@/components/contact/ContactForm';
import ContactSidebar from '@/components/contact/ContactSidebar';
import ContactTrustBar from '@/components/contact/ContactTrustBar';
import { homePage } from '@/constants/content';

export const metadata = {
  title: 'Contact Us | Energyex — Energy Management Experts',
  description:
    'Get in touch with our energy procurement specialists. Free quotes within 24 hours for electricity, gas, water, solar and facility services.',
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden" style={{ background: 'var(--off)' }}>
      <Navbar navLinks={homePage.navLinks} />

      <HeroContact />

      {/* Main 2-col layout */}
      <div className="max-w-[1160px] mx-auto px-6 pt-10 pb-12 md:px-[40px] md:pt-[64px] md:pb-[80px]">
        <div className="grid gap-12 items-start grid-cols-1 lg:grid-cols-[1fr_420px]">
          {/* Left — heading + form */}
          <div>
            {/* Section eyebrow */}
            <div className="flex items-center gap-2 mb-[10px]">
              <span
                className="font-bold uppercase"
                style={{ fontSize: '11px', color: 'var(--orange)', letterSpacing: '1.2px' }}
              >
                Send a Message
              </span>
              <span
                className="flex-1 block"
                style={{ maxWidth: '40px', height: '1.5px', background: 'var(--orange)', opacity: 0.5 }}
              />
            </div>

            <h2
              className="font-serif-num mb-3"
              style={{
                fontSize: 'clamp(28px,3vw,38px)',
                fontWeight: 600,
                color: 'var(--ink)',
                letterSpacing: '-0.3px',
                lineHeight: 1.18,
              }}
            >
              How Can We
              <br />
              Help Your Business?
            </h2>

            <p
              className="mb-8"
              style={{
                fontSize: '15.5px',
                color: 'var(--muted)',
                lineHeight: 1.7,
                maxWidth: '520px',
              }}
            >
              Fill in the form and one of our specialists will be in touch within 24 hours —
              usually much sooner. No jargon, no pressure.
            </p>

            <ContactForm />
          </div>

          {/* Right — sidebar */}
          <aside>
            <ContactSidebar />
          </aside>
        </div>
      </div>

      <ContactTrustBar />

      <Footer footer={homePage.footer} />
    </main>
  );
}

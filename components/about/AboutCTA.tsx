import { Phone, Mail, MapPin } from 'lucide-react';
import { homePage } from '@/constants/content';

export default function AboutCTA() {
  const { phone, email, address } = homePage.contact;

  const contacts = [
    { Icon: Phone, label: 'Call us', value: phone, href: `tel:${phone.replace(/\s+/g, '')}` },
    { Icon: Mail, label: 'Email us', value: email, href: `mailto:${email}` },
    { Icon: MapPin, label: 'Visit us', value: address, href: '#' },
  ];

  return (
    <section className="relative z-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden z-10">
        {/* Left — orange */}
        <div className="relative overflow-hidden bg-brand-orange px-6 py-12 sm:px-10 sm:py-14 md:px-[52px] md:py-[60px]">
          <div
            className="absolute pointer-events-none rounded-full bg-white/[0.08]"
            style={{ top: '-80px', right: '-80px', width: '300px', height: '300px' }}
          />
          <div
            className="absolute pointer-events-none rounded-full bg-white/[0.06]"
            style={{ bottom: '-60px', left: '-60px', width: '240px', height: '240px' }}
          />

          <div className="font-bold uppercase tracking-[2px] mb-4 relative text-[11px] text-white/70">
            Start saving today
          </div>

          <h2 className="font-serif-num text-white mb-5 relative text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.12] tracking-[-1px]">
            Ready to cut your
            <br />
            energy costs?
          </h2>

          <p className="mb-8 relative text-[15px] md:text-base text-white/[0.78] leading-[1.7] max-w-[360px]">
            Join over 10,000 UK businesses saving with Energyex. Get your free, no-obligation quote
            in 24 hours.
          </p>

          <a
            href="/quote"
            className="inline-block font-bold rounded-[var(--rs)] transition-all duration-200 relative bg-white text-brand-orange py-[14px] px-[30px] text-[15px] shadow-[0_6px_24px_rgba(0,0,0,0.15)]"
          >
            Get Your Free Quote →
          </a>
        </div>

        {/* Right — navy */}
        <div className="bg-navy px-6 py-12 sm:px-10 sm:py-14 md:px-[52px] md:py-[60px]">
          <h3 className="text-white font-bold mb-8 text-[22px] md:text-[26px] tracking-[-0.5px]">
            Talk to us directly
          </h3>

          <div className="flex flex-col gap-[22px]">
            {contacts.map(({ Icon, label, value, href }) => (
              <a key={label} href={href} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:[background:var(--orange)] bg-white/[0.08] border border-white/[0.12]">
                  <Icon size={17} className="text-white/60" />
                </div>
                <div>
                  <div className="font-semibold mb-[2px] text-[11px] text-white/[0.35] tracking-[0.8px] uppercase">
                    {label}
                  </div>
                  <div className="group-hover:text-white transition-colors duration-200 text-[15px] text-white/75 font-medium">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

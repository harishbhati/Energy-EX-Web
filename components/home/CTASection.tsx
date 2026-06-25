import { Phone } from 'lucide-react';

type CTAProps = {
  contact: { phone: string };
};

export default function CTASection({ contact }: CTAProps) {
  return (
    /* On mobile: normal flow (no translate).
       On md+: translate-y-1/2 so the box overlaps into the footer. */
    <div className="relative bg-white pb-6 md:pb-0 z-10">
      <div className="relative mx-auto max-w-[1080px] rounded-[var(--rl)] overflow-hidden px-6 md:px-14 py-10 md:py-12 bg-[linear-gradient(135deg,#e8620a,#f47b25)] shadow-[0_24px_60px_rgba(232,98,10,0.3)] md:translate-y-1/2 z-10">
        {/* Blobs */}
        <div
          className="absolute pointer-events-none rounded-full bg-white/10"
          style={{ width: '260px', height: '260px', top: '-120px', right: '-40px' }}
        />
        <div
          className="absolute pointer-events-none rounded-full bg-white/10"
          style={{ width: '180px', height: '180px', bottom: '-100px', left: '15%' }}
        />

        {/* Content */}
        <div className="relative z-[1] flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
          {/* Left */}
          <div>
            <h2 className="font-serif-num text-white mb-2 text-[26px] md:text-[36px] font-semibold tracking-[-0.5px] leading-[1.1]">
              Ready to start saving?
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/90 leading-[1.5]">
              Free, no-obligation quote. Your best rates within 24 hours.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 items-start md:items-start flex-shrink-0">
            <a
              href="/quote"
              className="font-bold whitespace-nowrap rounded-[var(--rs)] px-[28px] md:px-[34px] py-4 bg-white text-brand-orange-deep text-[15px] shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            >
              Get My Free Quote →
            </a>
            <div className="flex items-center gap-2 font-medium text-sm text-white/95">
              <Phone size={15} className="flex-shrink-0" />
              Or call us:{' '}
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Phone } from 'lucide-react';

type CTAProps = {
  contact: { phone: string };
};

export default function CTASection({ contact }: CTAProps) {
  return (
    <div className="relative" style={{ background: '#fff', paddingTop: '56px', zIndex: 2 }}>
      <div
        className="relative mx-auto max-w-[1080px] rounded-[var(--rl)] overflow-hidden flex items-center justify-between gap-10 flex-wrap px-14 py-12"
        style={{
          background: 'linear-gradient(135deg, var(--orange), var(--orange-soft))',
          boxShadow: '0 24px 60px rgba(232,98,10,0.3)',
          marginBottom: '-80px',
          zIndex: 3,
        }}
      >
        {/* Blobs */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: '260px',
            height: '260px',
            top: '-120px',
            right: '-40px',
            background: 'rgba(255,255,255,0.1)',
          }}
        />
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: '180px',
            height: '180px',
            bottom: '-100px',
            left: '15%',
            background: 'rgba(255,255,255,0.1)',
          }}
        />

        {/* Left */}
        <div className="relative z-[1]">
          <h2
            className="font-serif-num text-white mb-2"
            style={{
              fontSize: '36px',
              fontWeight: 600,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
            }}
          >
            Ready to start saving?
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
            Free, no-obligation quote. Your best rates within 24 hours.
          </p>
        </div>

        {/* Right */}
        <div className="relative z-[1] flex flex-col gap-3 items-start">
          <a
            href="/quote"
            className="font-bold whitespace-nowrap rounded-[var(--rs)] px-[34px] py-4"
            style={{
              background: '#fff',
              color: 'var(--orange-deep)',
              fontSize: '15px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}
          >
            Get My Free Quote →
          </a>
          <div
            className="flex items-center gap-2 font-medium"
            style={{ fontSize: '14px', color: 'rgba(255,255,255,0.95)' }}
          >
            <Phone size={15} style={{ flexShrink: 0 }} />
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
  );
}

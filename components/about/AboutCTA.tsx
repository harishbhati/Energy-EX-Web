import { Phone, Mail, MapPin } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="relative" style={{ zIndex: 2, background: '#fff', paddingTop: '56px' }}>
      <div className="max-w-[1180px] mx-auto px-14">
        <div
          className="grid overflow-hidden rounded-[var(--rl)]"
          style={{
            gridTemplateColumns: '1fr 1fr',
            marginBottom: '-80px',
            zIndex: 3,
            position: 'relative',
            boxShadow: '0 24px 72px rgba(13,27,42,0.22)',
          }}
        >
          {/* Left — orange */}
          <div
            className="relative overflow-hidden"
            style={{ background: 'var(--orange)', padding: '60px 52px' }}
          >
            {/* Decorative blobs */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '-80px',
                right: '-80px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '-60px',
                left: '-60px',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
              }}
            />

            <div
              className="font-bold uppercase tracking-[2px] mb-4 relative"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}
            >
              Start saving today
            </div>
            <h2
              className="font-serif-num text-white mb-5 relative"
              style={{
                fontSize: '40px',
                fontWeight: 600,
                lineHeight: 1.12,
                letterSpacing: '-1px',
              }}
            >
              Get your free quote
              <br />
              in under{' '}
              <em className="italic">24 hours.</em>
            </h2>
            <p
              className="mb-8 relative"
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.7,
                maxWidth: '360px',
              }}
            >
              No cost, no commitment, no jargon. Just a clear comparison of the best rates
              available for your business — with an expert to walk you through it.
            </p>
            <a
              href="/quote"
              className="inline-block font-bold rounded-[var(--rs)] transition-all duration-200 relative"
              style={{
                background: '#fff',
                color: 'var(--orange)',
                padding: '14px 30px',
                fontSize: '15px',
                boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
              }}
            >
              Get a free quote
            </a>
          </div>

          {/* Right — navy2 */}
          <div
            style={{ background: 'var(--navy)', padding: '60px 52px' }}
          >
            <div
              className="font-bold uppercase tracking-[2px] mb-6"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}
            >
              Get in touch
            </div>

            <div className="flex flex-col gap-[22px]">
              {[
                { Icon: Phone, label: 'Call us', value: '0800 123 4567', href: 'tel:08001234567' },
                { Icon: Mail, label: 'Email us', value: 'hello@energyex.co.uk', href: 'mailto:hello@energyex.co.uk' },
                { Icon: MapPin, label: 'Visit us', value: '123 Energy Street, London, EC1A 1BB', href: '#' },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:[background:var(--orange)]"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    <Icon size={17} style={{ color: 'rgba(255,255,255,0.6)' }} />
                  </div>
                  <div>
                    <div
                      className="font-semibold mb-[2px]"
                      style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.8px', textTransform: 'uppercase' }}
                    >
                      {label}
                    </div>
                    <div
                      className="group-hover:text-white transition-colors duration-200"
                      style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

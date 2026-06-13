import { Globe } from 'lucide-react';

type FooterLink = { title: string; href: string };

type FooterProps = {
  footer: {
    tagline: string;
    contact: string;
    socialLabel: string;
    services: FooterLink[];
    facilities: FooterLink[];
    copyright: string;
    extra: string;
  };
};

export default function Footer({ footer }: FooterProps) {
  return (
    <footer
      style={{
        background: 'var(--navy)',
        paddingTop: '140px',
        paddingBottom: '32px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="max-w-[1180px] mx-auto px-14">
        {/* Top 3-col grid */}
        <div
          className="grid gap-12 pb-11"
          style={{
            gridTemplateColumns: '2fr 1fr 1fr',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Brand col */}
          <div>
            <a
              href="/"
              className="inline-block font-black tracking-[-0.6px] text-white mb-3"
              style={{ fontSize: '23px' }}
            >
              Energy<em className="not-italic" style={{ color: 'var(--orange-soft)' }}>ex</em>
            </a>
            <p
              className="mb-5 max-w-xs font-light"
              style={{
                fontSize: '13.5px',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.7,
              }}
            >
              {footer.tagline}
            </p>
            <div
              className="whitespace-pre-line"
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 2.2,
              }}
            >
              {footer.contact}
            </div>
            <div className="flex gap-[10px] mt-[18px]">
              <a
                href="https://linkedin.com"
                aria-label={footer.socialLabel}
                className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-white transition-all duration-200 hover:bg-[color:var(--orange)] hover:border-[color:var(--orange)]"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Energy services */}
          <div>
            <h4
              className="mb-4 font-bold uppercase tracking-[1.2px]"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}
            >
              Energy Services
            </h4>
            <div className="flex flex-col gap-[11px]">
              {footer.services.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-200 hover:text-white"
                  style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)' }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Facility services */}
          <div>
            <h4
              className="mb-4 font-bold uppercase tracking-[1.2px]"
              style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}
            >
              Facility Services
            </h4>
            <div className="flex flex-col gap-[11px]">
              {footer.facilities.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-200 hover:text-white"
                  style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)' }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-[26px] flex-wrap gap-[10px]">
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            {footer.copyright}
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            {footer.extra}
          </div>
        </div>
      </div>
    </footer>
  );
}

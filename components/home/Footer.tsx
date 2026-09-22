import Link from 'next/link';

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
  compact?: boolean;
};

export default function Footer({ footer, compact }: FooterProps) {
  return (
    <footer className={`bg-navy pb-8 relative z-[1] border-t border-white/10 ${compact ? 'pt-10 md:pt-14' : 'pt-10 md:pt-[140px]'}`}>
      <div className="max-w-[1180px] mx-auto px-6 md:px-14">
        {/* Top grid — stacks on mobile */}
        <div className="grid gap-8 md:gap-12 pb-10 md:pb-11 border-b border-white/[0.08] grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand col */}
          <div>
            <Link
              href="/"
              className="inline-block font-black tracking-[-0.6px] text-white mb-3 text-[23px]"
            >
              Energy<em className="not-italic text-brand-orange-soft">ex</em>
            </Link>
            <p className="mb-5 max-w-xs font-light text-[13.5px] text-white/40 leading-[1.7]">
              {footer.tagline}
            </p>
            <div className="whitespace-pre-line text-[13px] text-white/[0.35] leading-[2.2]">
              {footer.contact}
            </div>
            <div className="flex gap-[10px] mt-[18px]">
              <a
                href="https://www.linkedin.com/company/energyexuk/"
                aria-label={footer.socialLabel}
                className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-white transition-all duration-200 hover:bg-[color:var(--orange)] hover:border-[color:var(--orange)] bg-white/[0.06] border border-white/10"
              >
                {/* Inline LinkedIn SVG to avoid depending on a named export that may not exist in the installed package */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8h4.75v2.2h.07c.66-1.25 2.27-2.57 4.68-2.57 5 0 5.92 3.29 5.92 7.56V24h-5v-7.5c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.94-2.88 3.99V24h-5V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Energy services */}
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-[1.2px] text-[11px] text-white/[0.45]">
              Energy Services
            </h4>
            <div className="flex flex-col gap-[11px]">
              {footer.services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-200 hover:text-white text-[13.5px] text-white/50"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Facility services */}
          <div>
            <h4 className="mb-4 font-bold uppercase tracking-[1.2px] text-[11px] text-white/[0.45]">
              Facility Services
            </h4>
            <div className="flex flex-col gap-[11px]">
              {footer.facilities.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-200 hover:text-white text-[13.5px] text-white/50"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-[26px] gap-[10px]">
          <div className="text-xs text-white/30">{footer.copyright}</div>
          <div className="flex items-center gap-[14px] text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/60 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors duration-200">
              Terms
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/complaints" className="hover:text-white/60 transition-colors duration-200">
              Complaints Procedure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Globe } from 'lucide-react';
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
};

export default function Footer({ footer }: FooterProps) {
  return (
    /* pt-10 on mobile (no CTA overlap), pt-[160px] on md+ to clear the translated CTA box */
    <footer className="bg-navy pt-10 md:pt-[160px] pb-8 relative z-[1] border-t border-white/10">
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
                href="https://linkedin.com"
                aria-label={footer.socialLabel}
                className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-white transition-all duration-200 hover:bg-[color:var(--orange)] hover:border-[color:var(--orange)] bg-white/[0.06] border border-white/10"
              >
                <Globe size={16} />
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
        <div className="flex items-center justify-between pt-[26px] flex-wrap gap-[10px]">
          <div className="text-xs text-white/30">{footer.copyright}</div>
          <div className="text-xs text-white/30">{footer.extra}</div>
        </div>
      </div>
    </footer>
  );
}

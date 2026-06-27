type LegalHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function LegalHero({ eyebrow, title, subtitle }: LegalHeroProps) {
  return (
    <section className="relative bg-navy overflow-hidden px-6 md:px-14 py-16 md:py-[88px]">
      {/* Concentric circles */}
      <div className="pointer-events-none absolute right-[-60px] top-[-40px] md:right-[-80px] opacity-40">
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
          <circle cx="240" cy="240" r="230" stroke="#F47B25" strokeWidth="1" />
          <circle cx="240" cy="240" r="170" stroke="#F47B25" strokeWidth="1" />
          <circle cx="240" cy="240" r="110" stroke="#F47B25" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-[1] max-w-[760px] mx-auto text-center">
        <p className="text-brand-orange-soft text-[13px] font-bold uppercase tracking-[1.5px] mb-[18px]">
          {eyebrow}
        </p>
        <h1 className="font-serif-num text-white font-semibold text-[32px] md:text-[46px] leading-[1.15] mb-4">
          {title}
        </h1>
        <p className="text-white/55 text-[15px]">{subtitle}</p>
      </div>
    </section>
  );
}

import { Check } from 'lucide-react';

const creds = [
  `Experienced providers committed to professionalism and reliability`,
  `Every project delivered to a consistent, high standard`,
  `One single point of contact throughout`,
];

export default function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-[8px]">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Coordinated, not outsourced and forgotten
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-[16px]">
            Professional cleaning, simplified.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            Maintaining clean, safe, well-presented environments matters for businesses, property owners,
            landlords, and residential clients alike — but managing several contractors rarely is
            straightforward.
          </p>
        </div>

        {/* Promise strip */}
        <div className="mt-[8px] bg-gradient-to-br from-navy to-navy-2 rounded-rl px-[28px] lg:px-[48px] py-[36px] lg:py-[44px] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[36px] items-center relative overflow-hidden">
          <div className="absolute w-[260px] h-[260px] rounded-full bg-brand-orange/[0.18] blur-[60px] -top-[110px] -right-[60px] pointer-events-none" />

          {/* Left text */}
          <div className="relative z-[1]">
            <h3 className="font-serif-num text-[24px] lg:text-[27px] font-semibold text-white leading-[1.25] mb-[10px]">
              One relationship covers every cleaning requirement.
            </h3>
            <p className="text-[14px] text-white/55 leading-[1.8] font-light">
              Through our trusted network of fully insured cleaning partners, we help clients access
              professional cleaning services tailored to their requirements — with Energyex coordinating
              and managing the process from end to end.
            </p>
          </div>

          {/* Right credentials */}
          <div className="relative z-[1] flex flex-col gap-[14px]">
            {creds.map((cred) => (
              <div key={cred} className="flex items-start gap-[12px]">
                <div className="flex-shrink-0 w-[30px] h-[30px] rounded-[9px] bg-brand-orange/[0.18] flex items-center justify-center">
                  <Check size={14} className="text-brand-orange-soft" strokeWidth={2.5} />
                </div>
                <span className="text-[13.5px] font-semibold text-white/85 leading-[1.45]">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

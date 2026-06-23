const factors = [
  'Consumption profile',
  'Operational requirements',
  'Available space',
  'Financial viability',
];

export default function BatteryStorageSection() {
  return (
    <section id="battery" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 items-center bg-off rounded-rl py-[32px] px-[24px] lg:py-[44px] lg:px-[44px] border border-border-color">

          {/* Battery SVG */}
          <div className="flex items-center justify-center order-first lg:order-none">
            <svg
              className="w-full max-w-[220px]"
              viewBox="0 0 160 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="20" y="20" width="120" height="160" rx="16" stroke="#E8620A" strokeWidth="3"/>
              <rect x="58" y="6" width="44" height="18" rx="6" fill="#E8620A"/>
              <rect x="38" y="120" width="84" height="42" rx="6" fill="#F2A93B" opacity="0.85"/>
              <rect x="38" y="78" width="84" height="32" rx="6" fill="#F47B25" opacity="0.55"/>
              <path d="M75 96l-14 22h12l-6 18 22-26h-12l8-14h-10z" fill="#0D1B2A"/>
            </svg>
          </div>

          {/* Copy */}
          <div>
            <h3 className="font-serif-num text-[30px] font-semibold text-ink mb-3 leading-[1.15]">
              Should you add battery storage?
            </h3>
            <p className="text-[14.5px] text-muted leading-[1.8] font-light mb-[18px]">
              Battery storage lets businesses make greater use of the electricity their panels generate, by
              storing surplus power for use later in the day rather than exporting it. Where appropriate, we
              help assess whether it complements your proposed solar installation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
              {factors.map((factor) => (
                <div key={factor} className="flex items-center gap-[10px] text-[13px] font-semibold text-[#33414F]">
                  <span className="w-[7px] h-[7px] rounded-full bg-brand-orange flex-shrink-0" />
                  {factor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const pills = [
  {
    label: 'AMR',
    desc: 'A remote communication channel between your business and supplier for accurate billing.',
  },
  {
    label: 'SMET1',
    desc: 'Smart meters that communicate via 3G mobile network.',
  },
  {
    label: 'SMET2',
    desc: 'Smart meters that communicate via a purpose-built network.',
  },
];

export default function SmartMeteringSection() {
  return (
    <section id="smart" className="scroll-mt-[170px] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 items-center bg-off rounded-rl py-[32px] px-[24px] lg:py-[44px] lg:px-[44px] border border-border-color">

          {/* Smart meter SVG */}
          <div className="flex items-center justify-center order-first lg:order-none">
            <svg
              className="w-full max-w-[200px]"
              viewBox="0 0 160 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="24" y="30" width="112" height="140" rx="14" stroke="#E8620A" strokeWidth="3"/>
              <rect x="42" y="50" width="76" height="40" rx="6" fill="#FFF1E8"/>
              <circle cx="80" cy="70" r="4" fill="#E8620A"/>
              <path d="M55 70h14M91 70h14" stroke="#E8620A" strokeWidth="2" strokeLinecap="round"/>
              <path d="M40 110q40-18 80 0" stroke="#F47B25" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
              <path d="M48 128q32-14 64 0" stroke="#F47B25" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4"/>
              <path d="M56 146q24-10 48 0" stroke="#F47B25" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.25"/>
            </svg>
          </div>

          {/* Copy */}
          <div>
            <h3 className="font-serif-num text-[30px] font-semibold text-ink mb-3 leading-[1.15]">
              Why accurate, automated billing matters
            </h3>
            <p className="text-[14.5px] text-muted leading-[1.8] font-light mb-[18px]">
              Devices that automatically communicate your consumption to your supplier remove the guesswork
              from billing — no more estimated reads, no more disputes over what was actually used.
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {pills.map((pill) => (
                <div
                  key={pill.label}
                  className="bg-white border-[1.5px] border-border-color rounded-rs py-3 px-4 flex-1 min-w-[160px]"
                >
                  <strong className="block text-[12.5px] font-bold text-ink mb-[3px]">{pill.label}</strong>
                  <span className="text-[12px] text-muted font-light leading-[1.5]">{pill.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

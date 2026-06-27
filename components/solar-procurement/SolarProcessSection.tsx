const steps = [
  {
    num: '01',
    title: 'Initial Consultation & Feasibility Assessment',
    desc: 'We start by understanding your site, energy consumption, and business objectives — establishing whether solar is technically and commercially viable.',
    tags: ['Consumption review', 'Roof space', 'Site suitability', 'Commercial objectives'],
  },
  {
    num: '02',
    title: 'Desktop Assessment & Financial Analysis',
    desc: 'A detailed estimate of expected generation, savings, carbon benefit, export opportunity, and ROI — a clear picture before any commitment.',
    tags: ['Generation estimate', 'ROI modelling', 'Funding suitability'],
  },
  {
    num: '03',
    title: 'Site Survey & Technical Design',
    desc: 'Specialist partners complete roof inspections, structural and electrical reviews, DNO capacity checks, and propose a system design.',
    tags: ['Structural assessment', 'DNO capacity', 'System design'],
  },
  {
    num: '04',
    title: 'Procurement & Proposal Review',
    desc: 'We obtain detailed proposals from trusted partners and compare costs, specifications, warranties, and timelines on a like-for-like basis.',
    tags: ['Like-for-like comparison', 'Warranty review'],
  },
  {
    num: '05',
    title: 'Funding & Commercial Options',
    desc: 'We help you weigh outright purchase against PPA, lease, or fully-funded structures, based on what suits your cash position.',
    tags: ['See funding options below'],
  },
  {
    num: '06',
    title: 'DNO & Grid Connection Process',
    desc: 'We assist with DNO applications, export assessments, capacity reviews, and connection approvals — one of the more technical project stages.',
    tags: ['DNO applications', 'Export assessment'],
  },
  {
    num: '07',
    title: 'Installation & Project Delivery',
    desc: 'Once approvals are in place, your chosen installer carries out the work while we coordinate communication throughout.',
    tags: [],
  },
  {
    num: '08',
    title: 'Commissioning & Handover',
    desc: 'The system is tested, commissioned, and handed over with documentation, warranty information, and monitoring access.',
    tags: [],
  },
  {
    num: '09',
    title: 'Ongoing Support',
    desc: 'We remain available for supplier coordination, future expansion, portfolio rollout, and renewable energy strategy discussions.',
    tags: [],
  },
];

export default function SolarProcessSection() {
  return (
    <section id="process" className="scroll-mt-[0] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            From first call to commissioning
          </p>
          <h2 className="font-serif-num text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-4">
            A nine-stage process, managed end to end.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            We coordinate every stage with specialist partners — so you have a single point of contact from
            feasibility through to ongoing support.
          </p>
        </div>

        <div className="relative pl-[6px]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="grid grid-cols-[48px_1fr] lg:grid-cols-[64px_1fr] gap-[14px] lg:gap-6 relative pb-[34px] last:pb-0"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-[23px] lg:left-[31px] top-[54px] bottom-[-6px] w-[2px] bg-border-color pointer-events-none" />
              )}

              <div className="w-[48px] h-[48px] lg:w-[62px] lg:h-[62px] rounded-full bg-navy text-white flex items-center justify-center font-serif-num text-[18px] lg:text-[24px] font-bold flex-shrink-0 relative z-[1] border-[4px] border-white shadow-[0_0_0_1.5px_#D9E0E9]">
                {step.num}
              </div>

              <div className="bg-off rounded-r py-[22px] px-[24px] border border-border-color">
                <h4 className="text-[16px] font-bold text-ink mb-[6px]">{step.title}</h4>
                <p className="text-[13.5px] text-muted leading-[1.7] font-light mb-[10px]">{step.desc}</p>
                {step.tags.length > 0 && (
                  <div className="flex flex-wrap gap-[7px]">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11.5px] font-semibold text-[#33414F] bg-white border border-border-color px-[12px] py-[5px] rounded-[30px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

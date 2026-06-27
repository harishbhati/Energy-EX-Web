import { Factory, Briefcase, Coffee, Building2, LayoutGrid, BookOpen, LucideIcon } from 'lucide-react';

const industries: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Factory,
    title: 'Commercial & Industrial Sites',
    desc: 'Manufacturing, warehousing, and distribution sites with large roof space and daytime demand.',
  },
  {
    Icon: Briefcase,
    title: 'Offices & Professional Services',
    desc: 'On-site generation that supports corporate sustainability initiatives and long-term energy planning.',
  },
  {
    Icon: Coffee,
    title: 'Hospitality & Leisure',
    desc: 'Hotels and leisure facilities with energy-intensive operations well suited to generation and storage.',
  },
  {
    Icon: Building2,
    title: 'Property Management Companies',
    desc: 'Managed developments, apartment blocks, and mixed-use portfolios seeking long-term improvements.',
  },
  {
    Icon: LayoutGrid,
    title: 'Multi-Site Portfolios',
    desc: 'Phased rollout programmes prioritised by suitability, requirements, and commercial viability.',
  },
  {
    Icon: BookOpen,
    title: 'Public Sector & Education',
    desc: 'Schools, colleges, and public buildings looking to reduce costs while meeting sustainability commitments.',
  },
];

export default function SolarIndustriesSection() {
  return (
    <section id="sectors" className="scroll-mt-[0] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Solar for different business types
          </p>
          <h2 className="font-serif-num text-[32px] font-semibold text-ink tracking-[-0.5px] leading-[1.12]">
            Who we help
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="bg-white border-[1.5px] border-border-color rounded-r px-5 py-[22px] transition-all duration-[250ms] hover:-translate-y-[3px] hover:border-brand-orange hover:shadow-sh"
            >
              <div className="w-9 h-9 rounded-[9px] bg-orange-tint flex items-center justify-center mb-3">
                <ind.Icon size={18} className="text-brand-orange" />
              </div>
              <h4 className="text-[14.5px] font-bold text-ink mb-[6px]">{ind.title}</h4>
              <p className="text-[12.5px] text-muted leading-[1.55] font-light">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

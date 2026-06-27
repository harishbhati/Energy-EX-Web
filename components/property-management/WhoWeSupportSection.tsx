import {
  LayoutGrid,
  Home,
  Building2,
  Key,
  Coffee,
  Heart,
  Layers,
  Factory,
  GraduationCap,
  Users,
  BookOpen,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';

const pills: { label: string; Icon: LucideIcon }[] = [
  { label: 'Block & estate management', Icon: LayoutGrid },
  { label: 'Residential property management', Icon: Home },
  { label: 'Commercial property management', Icon: Building2 },
  { label: 'Letting & asset management', Icon: Key },
  { label: 'Hospitality groups & hotels', Icon: Coffee },
  { label: 'Care home operators', Icon: Heart },
  { label: 'Mixed-use developments', Icon: Layers },
  { label: 'Business parks & industrial estates', Icon: Factory },
  { label: 'Student accommodation providers', Icon: GraduationCap },
  { label: 'Housing associations', Icon: Users },
  { label: 'Healthcare & education portfolios', Icon: BookOpen },
  { label: 'Commercial landlords & investors', Icon: TrendingUp },
];

export default function WhoWeSupportSection() {
  return (
    <section id="support" className="scroll-mt-[0] bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-[40px]">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Who we support
          </p>
          <h2 className="font-serif-num text-[32px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-[12px]">
            Built for every type of property portfolio.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[620px] mx-auto">
            From individual residential blocks to large commercial portfolios, we work with property
            managers of every kind.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[10px]">
          {pills.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-[9px] border border-border-color bg-white rounded-[30px] px-[15px] py-[9px] transition-all duration-[220ms] hover:border-brand-orange hover:shadow-sh cursor-default"
            >
              <div className="w-[24px] h-[24px] rounded-full bg-orange-tint flex items-center justify-center flex-shrink-0">
                <Icon size={12} className="text-brand-orange" />
              </div>
              <span className="text-[13px] font-semibold text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

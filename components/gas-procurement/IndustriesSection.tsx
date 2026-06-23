import { Factory, Coffee, Heart, Building2, ShoppingBag, BookOpen, LucideIcon } from 'lucide-react';

const industries: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Factory,
    title: 'Manufacturing & Industrial',
    desc: 'Supporting businesses with high and variable gas consumption requirements.',
  },
  {
    Icon: Coffee,
    title: 'Hospitality',
    desc: 'Hotels, restaurants, leisure facilities, and food service operators where gas remains a significant operating cost.',
  },
  {
    Icon: Heart,
    title: 'Care Homes & Healthcare',
    desc: 'Supporting organisations that require reliability, budget certainty, and ongoing supplier support.',
  },
  {
    Icon: Building2,
    title: 'Property Management Companies',
    desc: 'Managing gas supplies across residential, mixed-use, and commercial property portfolios.',
  },
  {
    Icon: ShoppingBag,
    title: 'Retail & Multi-Site Operators',
    desc: 'Providing centralised procurement and management across multiple locations.',
  },
  {
    Icon: BookOpen,
    title: 'Education & Public Sector',
    desc: 'Supporting schools, colleges, universities, charities, and public sector organisations.',
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-off px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Who we support
          </p>
          <h2 className="font-serif-num text-[32px] font-semibold text-ink tracking-[-0.5px] leading-[1.12]">
            Industries we support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="bg-white border-2 border-border-color rounded-r px-5 py-[22px] transition-all duration-200 hover:-translate-y-[3px] hover:border-brand-orange hover:shadow-sh"
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

import {
  AppWindow,
  Sparkles,
  Home,
  Package,
  Layers,
  Building2,
  Key,
  Leaf,
  Map,
  LucideIcon,
} from 'lucide-react';

const categories: {
  num: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
  chips: string[];
}[] = [
  {
    num: '01',
    Icon: AppWindow,
    title: 'Window Cleaning',
    desc: `Exterior and interior window cleaning, frames and sills, glass partitions, and multi-storey access
    methods for offices, retail, apartment blocks, and residential properties.`,
    chips: ['Regular scheduled cleaning', 'One-off cleans', 'Multi-storey access'],
  },
  {
    num: '02',
    Icon: Sparkles,
    title: 'Deep Cleaning',
    desc: `A more thorough approach for properties needing more than routine cleaning — ideal after
    construction, refurbishment, handovers, or seasonal resets.`,
    chips: ['Kitchen & appliance cleaning', 'Washroom sanitisation', 'Hard-to-reach areas'],
  },
  {
    num: '03',
    Icon: Home,
    title: 'Residential Cleaning',
    desc: `Regular or one-off cleaning support for homeowners, landlords, and tenants — tailored schedules
    across houses, flats, apartments, and managed developments.`,
    chips: ['Weekly / fortnightly / monthly', 'Tailored schedules'],
  },
  {
    num: '04',
    Icon: Package,
    title: 'Move-In & Move-Out Cleaning',
    desc: `End-of-tenancy and pre-move-in cleaning that helps properties get handed over and occupied to a
    high standard, with full property and appliance cleaning included.`,
    chips: ['End-of-tenancy', 'Pre-move-in', 'Handover preparation'],
  },
  {
    num: '05',
    Icon: Layers,
    title: 'Carpet Cleaning',
    desc: `Treating dirt, dust, allergens, and stains to improve appearance, extend carpet life, and maintain
    a cleaner environment across offices, hotels, and residential settings.`,
    chips: ['Stain treatment', 'Odour treatment', 'High-traffic areas'],
  },
  {
    num: '06',
    Icon: Building2,
    title: 'Commercial Cleaning',
    desc: `Reliable cleaning across offices, retail, healthcare, education, and industrial sectors — daily,
    weekly, or scheduled, including reception, washroom, and meeting room cleaning.`,
    chips: ['Out-of-hours cleaning', 'Consumable replenishment', 'Periodic deep cleans'],
  },
  {
    num: '07',
    Icon: Key,
    title: 'Property Management Cleaning',
    desc: `Coordinated cleaning across communal areas, stairwells, lifts, entrances, and bin stores — built
    for property managers and landlords running residential or mixed-use portfolios.`,
    chips: ['Communal areas', 'Multi-site coordination', 'Consistent standards'],
  },
  {
    num: '08',
    Icon: Leaf,
    title: 'Landscaping & Grounds Maintenance',
    desc: `Lawn maintenance, hedge trimming, weed control, and seasonal grounds upkeep so the exterior of a
    property makes the right first impression.`,
    chips: ['Seasonal maintenance', 'Pressure washing'],
  },
  {
    num: '09',
    Icon: Map,
    title: 'Multi-Site Cleaning Support',
    desc: `A central point of coordination for organisations managing several properties — contractor
    communication, scheduling, and portfolio oversight handled in one place.`,
    chips: ['Service coordination', 'Portfolio oversight'],
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="scroll-mt-[0] bg-white px-6 lg:px-14 py-10">
      <div className="max-w-[1180px] mx-auto">
        <div className="mb-[8px]">
          <p className="text-[11px] font-bold text-brand-orange uppercase tracking-[2.5px] mb-[14px]">
            Nine specialist services, one contact
          </p>
          <h2 className="font-serif-num text-[36px] lg:text-[44px] font-semibold text-ink tracking-[-0.5px] leading-[1.12] mb-[16px]">
            Cleaning services we coordinate.
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] font-light max-w-[680px]">
            A wide range of cleaning support for businesses, property managers, landlords, and residential
            clients — matched to the property and the requirement.
          </p>
        </div>

        <div className="mt-[8px] border-t border-border-color">
          {categories.map((cat) => (
            <div
              key={cat.num}
              className="group grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-2 sm:gap-[28px] py-[30px] px-[4px] border-b border-border-color items-start transition-colors duration-[200ms] hover:bg-off"
            >
              {/* Number */}
              <div className="font-serif-num text-[38px] font-semibold text-[#BCC7D4] leading-none transition-colors duration-[200ms] group-hover:text-brand-orange">
                {cat.num}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h4 className="text-[18px] font-bold text-ink mb-[8px] flex items-center gap-[10px]">
                  <cat.Icon size={18} className="text-brand-orange flex-shrink-0" />
                  {cat.title}
                </h4>
                <p className="text-[14px] text-muted leading-[1.7] font-light mb-[12px] max-w-[760px]">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-[8px]">
                  {cat.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-[11.5px] font-semibold text-[#33414F] bg-orange-tint border border-brand-orange/[0.3] px-[13px] py-[5px] rounded-[30px]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Phone, Mail, MapPin, Map, Info,
  Zap, Flame, Droplets, Trash2, Sparkles,
  Layers, Leaf, Building2, Plug, BarChart3,
  type LucideIcon,
} from 'lucide-react';

const contactItems = [
  {
    Icon: Phone,
    label: 'Phone',
    primary: '0203 727 2588',
    href: 'tel:02037272588',
    sub: 'Mon–Fri, 9am – 5:30pm',
  },
  {
    Icon: Mail,
    label: 'Email',
    primary: 'info@energyex.uk',
    href: 'mailto:info@energyex.uk',
    sub: 'We aim to reply within 24 hours',
  },
  {
    Icon: MapPin,
    label: 'Office',
    primary: 'Suite 7 Airport House',
    href: null,
    sub: 'Purley Way, Croydon, CR0 0XZ',
  },
];

const responseItems = [
  { color: 'var(--orange-soft)', text: 'Within 2 hours', sub: '— Acknowledgement email sent' },
  { color: 'var(--orange-soft)', text: 'Within 24 hours', sub: '— A specialist contacts you' },
  { color: '#4CAF50', text: 'Same day quote', sub: 'available for most enquiries' },
];

type Chip = { Icon: LucideIcon; label: string };
const chips: Chip[] = [
  { Icon: Zap,       label: 'Electricity' },
  { Icon: Flame,     label: 'Gas' },
  { Icon: Droplets,  label: 'Water' },
  { Icon: Trash2,    label: 'Waste' },
  { Icon: Sparkles,  label: 'Commercial Cleaning' },
  { Icon: Layers,    label: 'Window Cleaning' },
  { Icon: Leaf,      label: 'Landscaping' },
  { Icon: Building2, label: 'Facilities' },
  { Icon: Plug,      label: 'New Connections' },
  { Icon: BarChart3, label: 'Energy Audits' },
];

function InfoCardHeader({ Icon, title }: { Icon: LucideIcon; title: string }) {
  return (
    <div
      className="flex items-center gap-3 py-4 px-[22px]"
      style={{ background: 'var(--navy2)' }}
    >
      <Icon size={20} className="text-brand-orange-soft flex-shrink-0" />
      <h3 className="font-semibold text-white text-sm">
        {title}
      </h3>
    </div>
  );
}

export default function ContactSidebar() {
  return (
    <div className="flex flex-col gap-5">
      {/* Direct Contact */}
      <div
        className="bg-white overflow-hidden transition-shadow duration-250 hover:[box-shadow:0_8px_40px_rgba(13,27,42,0.16)] rounded-[var(--r)] shadow-sh border border-[rgba(13,27,42,0.07)]"
      >
        <InfoCardHeader Icon={Phone} title="Direct Contact" />
        <div className="py-5 px-[22px]">
          {contactItems.map((item, i) => (
            <div
              key={item.label}
              className="flex items-start gap-[14px]"
              style={{
                padding: '14px 0',
                borderBottom: i < contactItems.length - 1 ? '1px solid var(--border)' : 'none',
                paddingTop: i === 0 ? '0' : '14px',
              }}
            >
              <div className="w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center rounded-[var(--rs)] bg-orange-tint">
                <item.Icon size={18} className="text-brand-orange" />
              </div>
              <div className="flex-1">
                <div className="font-bold uppercase mb-[3px] text-[11px] tracking-[0.8px] text-faint">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block font-semibold transition-colors duration-200 hover:[color:var(--orange)] text-[14.5px] text-ink leading-[1.4]"
                  >
                    {item.primary}
                  </a>
                ) : (
                  <div className="font-semibold text-[14.5px] text-ink leading-[1.4]">
                    {item.primary}
                  </div>
                )}
                <div className="text-xs text-muted mt-[2px]">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Find Us */}
      <div
        className="bg-white overflow-hidden transition-shadow duration-250 hover:[box-shadow:0_8px_40px_rgba(13,27,42,0.16)] rounded-[var(--r)] shadow-sh border border-[rgba(13,27,42,0.07)]"
      >
        <InfoCardHeader Icon={Map} title="Find Us" />
        <div className="py-5 px-[22px]">
          {/* Map placeholder */}
          <div
            className="flex flex-col items-center justify-center gap-2 relative overflow-hidden rounded-[var(--rs)] mb-4 h-[140px] bg-[color:var(--border)] border border-dashed border-[color:var(--border-strong)]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(176,187,204,0.25) 28px,rgba(176,187,204,0.25) 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,rgba(176,187,204,0.25) 28px,rgba(176,187,204,0.25) 29px)',
            }}
          >
            {/* Pin shape */}
            <div
              className="relative z-[1] flex items-center justify-center bg-brand-orange shadow-[0_4px_12px_rgba(232,98,10,0.4)]"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50% 50% 50% 0',
                transform: 'rotate(-45deg)',
              }}
            >
              <div className="w-[10px] h-[10px] bg-white rounded-full" />
            </div>
            <p className="font-semibold relative z-[1] text-[12.5px] text-ink">
              Energyex HQ
            </p>
            <p className="relative z-[1] text-center px-4 text-[11px] text-muted">
              Suite 7 Airport House, Purley Way, Croydon, CR0 0XZ
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Airport+House+Purley+Way+Croydon+CR0+0XZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[6px] font-semibold transition-colors duration-200 hover:underline text-[13px] text-brand-orange"
          >
            <MapPin size={13} />
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* What Happens Next */}
      <div
        className="relative overflow-hidden rounded-[var(--r)]"
        style={{
          background: 'linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%)',
          padding: '24px',
        }}
      >
        {/* Decorative blob */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            bottom: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'rgba(232,98,10,0.12)',
          }}
        />
        <h3 className="font-serif-num text-white mb-[6px] text-[20px] font-semibold">
          What Happens Next?
        </h3>
        <p className="mb-[18px] text-[13.5px] text-white/60 leading-[1.6]">
          Once you submit your enquiry, here&apos;s what to expect from our team.
        </p>
        <div className="flex flex-col gap-[10px]">
          {responseItems.map((r) => (
            <div key={r.text} className="flex items-center gap-[10px]">
              <div
                className="flex-shrink-0 rounded-full w-[8px] h-[8px]"
                style={{ background: r.color }}
              />
              <span className="text-[13px] text-white/[0.78]">
                <strong className="text-white">{r.text}</strong> {r.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* We Can Help With */}
      <div
        className="bg-white overflow-hidden transition-shadow duration-250 hover:[box-shadow:0_8px_40px_rgba(13,27,42,0.16)] rounded-[var(--r)] shadow-sh border border-[rgba(13,27,42,0.07)]"
      >
        <InfoCardHeader Icon={Info} title="We Can Help With" />
        <div className="py-5 px-[22px]">
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-[6px] rounded-[20px] cursor-default transition-all duration-200 hover:[background:var(--orange-tint)] hover:[color:var(--orange)] hover:[border-color:rgba(232,98,10,0.25)] px-3 py-[5px] bg-off border border-[color:var(--border)] text-xs font-medium text-ink-soft"
              >
                <chip.Icon size={12} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

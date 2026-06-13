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
      className="flex items-center gap-3"
      style={{ background: 'var(--navy2)', padding: '16px 22px' }}
    >
      <Icon size={20} style={{ color: 'var(--orange-soft)', flexShrink: 0 }} />
      <h3 className="font-semibold text-white" style={{ fontSize: '14px' }}>
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
        className="bg-white overflow-hidden transition-shadow duration-250 hover:[box-shadow:0_8px_40px_rgba(13,27,42,0.16)]"
        style={{
          borderRadius: 'var(--r)',
          boxShadow: 'var(--sh)',
          border: '1px solid rgba(13,27,42,0.07)',
        }}
      >
        <InfoCardHeader Icon={Phone} title="Direct Contact" />
        <div style={{ padding: '20px 22px' }}>
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
              <div
                className="w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center rounded-[var(--rs)]"
                style={{ background: 'var(--orange-tint)' }}
              >
                <item.Icon size={18} style={{ color: 'var(--orange)' }} />
              </div>
              <div className="flex-1">
                <div
                  className="font-bold uppercase mb-[3px]"
                  style={{ fontSize: '11px', letterSpacing: '0.8px', color: 'var(--faint)' }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block font-semibold transition-colors duration-200 hover:[color:var(--orange)]"
                    style={{ fontSize: '14.5px', color: 'var(--ink)', lineHeight: 1.4 }}
                  >
                    {item.primary}
                  </a>
                ) : (
                  <div className="font-semibold" style={{ fontSize: '14.5px', color: 'var(--ink)', lineHeight: 1.4 }}>
                    {item.primary}
                  </div>
                )}
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Find Us */}
      <div
        className="bg-white overflow-hidden transition-shadow duration-250 hover:[box-shadow:0_8px_40px_rgba(13,27,42,0.16)]"
        style={{
          borderRadius: 'var(--r)',
          boxShadow: 'var(--sh)',
          border: '1px solid rgba(13,27,42,0.07)',
        }}
      >
        <InfoCardHeader Icon={Map} title="Find Us" />
        <div style={{ padding: '20px 22px' }}>
          {/* Map placeholder */}
          <div
            className="flex flex-col items-center justify-center gap-2 relative overflow-hidden rounded-[var(--rs)] mb-4"
            style={{
              height: '140px',
              background: 'var(--border)',
              border: '1px dashed var(--border-strong)',
              backgroundImage:
                'repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(176,187,204,0.25) 28px,rgba(176,187,204,0.25) 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,rgba(176,187,204,0.25) 28px,rgba(176,187,204,0.25) 29px)',
            }}
          >
            {/* Pin shape */}
            <div
              className="relative z-[1] flex items-center justify-center"
              style={{
                width: '32px',
                height: '32px',
                background: 'var(--orange)',
                borderRadius: '50% 50% 50% 0',
                transform: 'rotate(-45deg)',
                boxShadow: '0 4px 12px rgba(232,98,10,0.4)',
              }}
            >
              <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%' }} />
            </div>
            <p className="font-semibold relative z-[1]" style={{ fontSize: '12.5px', color: 'var(--ink)' }}>
              Energyex HQ
            </p>
            <p className="relative z-[1] text-center px-4" style={{ fontSize: '11px', color: 'var(--muted)' }}>
              Suite 7 Airport House, Purley Way, Croydon, CR0 0XZ
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Airport+House+Purley+Way+Croydon+CR0+0XZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[6px] font-semibold transition-colors duration-200 hover:underline"
            style={{ fontSize: '13px', color: 'var(--orange)' }}
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
          className="absolute pointer-events-none"
          style={{
            bottom: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'rgba(232,98,10,0.12)',
            borderRadius: '50%',
          }}
        />
        <h3 className="font-serif-num text-white mb-[6px]" style={{ fontSize: '20px', fontWeight: 600 }}>
          What Happens Next?
        </h3>
        <p className="mb-[18px]" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
          Once you submit your enquiry, here&apos;s what to expect from our team.
        </p>
        <div className="flex flex-col gap-[10px]">
          {responseItems.map((r) => (
            <div key={r.text} className="flex items-center gap-[10px]">
              <div
                className="flex-shrink-0 rounded-full"
                style={{ width: '8px', height: '8px', background: r.color }}
              />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.78)' }}>
                <strong style={{ color: '#fff' }}>{r.text}</strong> {r.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* We Can Help With */}
      <div
        className="bg-white overflow-hidden transition-shadow duration-250 hover:[box-shadow:0_8px_40px_rgba(13,27,42,0.16)]"
        style={{
          borderRadius: 'var(--r)',
          boxShadow: 'var(--sh)',
          border: '1px solid rgba(13,27,42,0.07)',
        }}
      >
        <InfoCardHeader Icon={Info} title="We Can Help With" />
        <div style={{ padding: '20px 22px' }}>
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-[6px] rounded-[20px] cursor-default transition-all duration-200 hover:[background:var(--orange-tint)] hover:[color:var(--orange)] hover:[border-color:rgba(232,98,10,0.25)]"
                style={{
                  padding: '5px 12px',
                  background: 'var(--off)',
                  border: '1px solid var(--border)',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--ink-soft)',
                }}
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

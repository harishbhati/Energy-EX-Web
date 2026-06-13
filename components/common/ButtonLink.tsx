import Link from 'next/link';

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'ghost' | 'white';
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary:
    'bg-[color:var(--orange)] text-white shadow-[0_6px_24px_rgba(232,98,10,0.35)] hover:bg-[color:var(--orange-deep)] hover:-translate-y-0.5',
  ghost:
    'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:-translate-y-0.5',
  white:
    'bg-white text-[color:var(--orange-deep)] shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:-translate-y-0.5',
};

export default function ButtonLink({
  href,
  label,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[var(--rs)] px-6 py-3 text-sm font-semibold transition duration-200 ${variantClasses[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'ink' | 'white' | 'red';
  className?: string;
};

export default function Button({ href, children, variant = 'ink', className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full text-[15px] font-extrabold tracking-tight transition-all duration-220 hover:-translate-y-0.5';
  const heights = 'h-[54px] px-7';
  const styles =
    variant === 'ink'
      ? 'bg-ink text-white'
      : variant === 'white'
      ? 'bg-white text-ink border border-line'
      : 'bg-red text-white hover:bg-red-deep';

  return (
    <a href={href} className={`${base} ${heights} ${styles} ${className}`}>
      {children}
    </a>
  );
}

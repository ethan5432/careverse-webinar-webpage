type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'pink' | 'outline';
  className?: string;
};

export default function Button({ href, children, variant = 'pink', className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]';
  const styles =
    variant === 'pink'
      ? 'bg-blush text-ink hover:bg-blush/90'
      : 'bg-white text-ink border border-ink/15 hover:border-ink/30';

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'ink' | 'white';
  className?: string;
  type?: 'button' | 'submit';
};

export default function Button({ href, onClick, children, variant = 'ink', className = '', type = 'button' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full text-[15px] font-bold tracking-tight transition-all duration-220 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2';
  const heights = 'h-[54px] px-7';
  const styles =
    variant === 'ink'
      ? 'bg-ink text-white hover:bg-[#333]'
      : 'bg-white text-ink ring-1 ring-line hover:bg-cream';

  if (href) {
    return (
      <a href={href} className={`${base} ${heights} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${heights} ${styles} ${className}`}>
      {children}
    </button>
  );
}

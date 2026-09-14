import Button from './Button';

type NavProps = {
  onCTAClick: () => void;
};

export default function Nav({ onCTAClick }: NavProps) {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center" aria-label="Careverse home">
          <img src="/careverse_wordmark.svg" alt="Careverse" className="h-6 object-contain" />
        </a>
        <div className="flex items-center gap-5">
          <a href="#" className="hidden text-sm font-semibold text-ink transition-colors hover:text-red sm:block">
            Partner Program
          </a>
          <Button onClick={onCTAClick} variant="ink" className="h-10 px-5 text-sm">
            Apply to join
          </Button>
        </div>
      </nav>
    </header>
  );
}

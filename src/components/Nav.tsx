import Button from './Button';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/88 backdrop-blur-md">
      <nav className="mx-auto flex h-[82px] max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <img src="/careverse_wordmark.svg" alt="Careverse" className="h-7 object-contain" />
        </a>
        <div className="flex items-center gap-6">
          <a href="#" className="hidden text-sm font-extrabold text-body hover:text-ink transition-colors sm:block">
            Creator Network
          </a>
          <Button href="https://careverse-creator-application.vercel.app/" variant="ink" className="h-11 px-5 text-sm">
            Apply to join
          </Button>
        </div>
      </nav>
    </header>
  );
}

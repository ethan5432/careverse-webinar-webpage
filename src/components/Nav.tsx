import Button from './Button';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-softwhite/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/careverse_logo_(2).png" alt="Careverse" className="h-9 w-9 object-contain" />
          <span className="font-sans text-xl font-bold tracking-h2 text-ink">Careverse™</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#" className="hidden text-sm font-medium text-ink/70 hover:text-ink transition-colors sm:block">
            Creator Network
          </a>
          <Button href="https://careverse-creator-application.vercel.app/" variant="pink" className="px-5 py-2.5">
            Apply to join
          </Button>
        </div>
      </nav>
    </header>
  );
}

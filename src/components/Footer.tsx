import Button from './Button';

type FooterProps = {
  onCTAClick: () => void;
};

export default function Footer({ onCTAClick }: FooterProps) {
  return (
    <footer className="bg-night">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center rounded-full bg-white px-4 py-1.5">
            <img src="/careverse_wordmark.svg" alt="Careverse" className="h-5 object-contain" />
          </div>
          <Button onClick={onCTAClick} variant="white" className="h-11 px-5 text-sm">
            Reserve my seat
          </Button>
        </div>
        <p className="mt-8 max-w-2xl text-center text-xs leading-relaxed text-night-text sm:mx-auto">
          Careverse memberships are a benefits and savings program — not health insurance or medical care. Currently available in the United States and Canada.
        </p>
      </div>
    </footer>
  );
}

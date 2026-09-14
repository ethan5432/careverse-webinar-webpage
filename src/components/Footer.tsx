import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-night">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center rounded-lg bg-white px-2 py-1">
          <img src="/careverse_wordmark.svg" alt="Careverse" className="h-6 object-contain" />
        </div>
        <Button href="https://webinar-registration-page-six.vercel.app/" variant="white" className="h-11 px-5 text-sm">
          Reserve my seat
        </Button>
      </div>
    </footer>
  );
}

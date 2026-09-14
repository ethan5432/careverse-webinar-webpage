import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-night">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/careverse_logo_(2).png" alt="Careverse" className="h-8 w-8 object-contain" />
          <p className="text-sm text-night-text">
            Careverse™ · Care Access PBC
          </p>
        </div>
        <Button href="https://webinar-registration-page-six.vercel.app/" variant="white" className="h-11 px-5 text-sm">
          Reserve my seat
        </Button>
      </div>
    </footer>
  );
}

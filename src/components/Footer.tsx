import Button from './Button';

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-softwhite">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pinkwash to-bluewash">
            <img src="/careverse_logo_(2).png" alt="" className="h-7 w-7 object-contain" />
          </span>
          <p className="text-sm text-body">
            Careverse™ · Care Access PBC
          </p>
        </div>
        <Button href="https://webinar-registration-page-six.vercel.app/" variant="pink" className="px-5 py-2.5">
          Reserve my seat
        </Button>
      </div>
    </footer>
  );
}

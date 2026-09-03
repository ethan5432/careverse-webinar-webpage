import { Calendar, Clock } from 'lucide-react';
import Button from './Button';

export default function Close() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pinkwash blur-3xl opacity-70" />
      </div>
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-sans text-3xl font-bold tracking-h2 text-ink sm:text-4xl">Join us on September 30</h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base font-medium text-ink/80">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-blush" /> September 30
          </span>
          <span className="text-ink/20">·</span>
          <span>2:00 PM ET</span>
          <span className="text-ink/20">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-blush" /> 45 minutes
          </span>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="https://webinar-registration-page-six.vercel.app/" variant="pink">
            Reserve my seat
          </Button>
          <Button href="https://careverse-creator-application.vercel.app/" variant="outline">
            Apply to join
          </Button>
        </div>

        <p className="mt-6 text-sm font-normal leading-[1.5] text-body/70">
          Already sure? Apply to the Creator Network after you register.
        </p>
      </div>
    </section>
  );
}

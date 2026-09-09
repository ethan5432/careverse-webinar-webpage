import { Calendar, Clock } from 'lucide-react';
import Button from './Button';

export default function Close() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pinkwash blur-3xl opacity-70" />
      </div>
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base font-medium text-ink/80">
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
        </div>

        <p className="mt-6 text-sm text-body/70">
          Already sure? <a href="https://careverse-creator-application.vercel.app/" className="font-medium text-ink/70 underline underline-offset-2 hover:text-ink transition-colors">Apply after you register.</a>
        </p>
      </div>
    </section>
  );
}

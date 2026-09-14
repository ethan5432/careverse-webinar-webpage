import { Calendar, Clock, Check } from 'lucide-react';
import Button from './Button';

export default function Close() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base font-medium text-body">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-red" /> September 30
          </span>
          <span className="text-line">·</span>
          <span>2:00 PM ET</span>
          <span className="text-line">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-red" /> 45 minutes
          </span>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="https://webinar-registration-page-six.vercel.app/" variant="ink">
            Reserve my seat
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#E8FBF4]">
            <Check className="h-3 w-3 text-good" />
          </span>
          <p className="text-[13px] font-extrabold text-body">
            No follower minimum. Earn 25% commission on every purchase.
          </p>
        </div>

        <p className="mt-3 text-sm text-muted">
          Already sure? <a href="https://careverse-creator-application.vercel.app/" className="font-medium text-ink underline underline-offset-2 hover:text-red transition-colors">Apply after you register.</a>
        </p>
      </div>
    </section>
  );
}

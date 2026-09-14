import { Calendar, Clock, Timer, Check } from 'lucide-react';
import Button from './Button';

type CloseProps = {
  onCTAClick: () => void;
};

export default function Close({ onCTAClick }: CloseProps) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base font-medium text-ink">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-red" /> September 30
          </span>
          <span className="text-line">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-red" /> 2:00 PM ET
          </span>
          <span className="text-line">·</span>
          <span className="flex items-center gap-1.5">
            <Timer className="h-4 w-4 text-red" /> 45 minutes
          </span>
        </div>

        <div className="mt-8">
          <Button onClick={onCTAClick} variant="ink">
            Reserve my seat
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8FBF4]">
            <Check className="h-3 w-3 text-good" />
          </span>
          <p className="text-sm font-semibold text-ink">
            No follower minimum. No healthcare background required.
          </p>
        </div>

        <p className="mt-3 text-sm text-muted">
          Already sure? <a href="#" onClick={(e) => { e.preventDefault(); onCTAClick(); }} className="font-semibold text-ink underline underline-offset-2 hover:text-red transition-colors">Apply after you register.</a>
        </p>
      </div>
    </section>
  );
}

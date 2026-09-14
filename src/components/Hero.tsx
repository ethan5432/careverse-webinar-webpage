import { Calendar, Clock, Timer, Play, Check } from 'lucide-react';
import Button from './Button';

type HeroProps = {
  onCTAClick: () => void;
};

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-6 bg-red" />
            <span className="text-xs font-bold uppercase tracking-eyebrow text-red">Partner Webinar</span>
          </div>

          <h1 className="font-display text-h1 text-ink">
            See <span className="text-red">Careverse™</span> in action
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            A 45-minute session on Careverse and how creators, agencies, and networks partner with us.
          </p>

          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
            See how people find cost and coverage, book the visit and the follow-up, and keep every provider in one thread — so no one starts from scratch.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink">
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
            <span className="text-line">·</span>
            <span>Free</span>
          </div>

          <div className="mt-8">
            <Button onClick={onCTAClick} variant="ink">
              Reserve my seat
            </Button>
          </div>

          <div className="mt-5 flex items-center gap-2">
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

        <div className="relative">
          <div className="relative overflow-hidden rounded-card shadow-lg" style={{ background: 'linear-gradient(135deg, #D4A5A5 0%, #E8C5A0 100%)' }}>
            <div className="flex aspect-[4/3] flex-col items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="font-display text-7xl font-extrabold text-white">careverse</span>
              </div>
              <button
                type="button"
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform hover:scale-105"
                aria-label="Play webinar preview"
              >
                <Play className="h-7 w-7 translate-x-0.5 text-ink" fill="currentColor" />
              </button>
              <p className="relative mt-4 text-sm font-medium text-white drop-shadow">
                Webinar preview — Making care accessible to all
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-black/30 px-4 pb-3 pt-8">
              <span className="shrink-0 text-xs font-medium tabular-nums text-white">1:03</span>
              <div className="relative h-1.5 flex-1 rounded-full bg-white/25">
                <div className="absolute h-full rounded-full bg-red" style={{ width: '100%' }} />
              </div>
              <span className="shrink-0 text-xs font-medium tabular-nums text-white">1:03</span>
            </div>
          </div>

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg ring-1 ring-line">
            <p className="font-display text-sm font-bold text-ink">David Corso</p>
            <span className="h-3.5 w-px bg-line" />
            <p className="text-xs font-normal text-muted">Chief Partnerships Officer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

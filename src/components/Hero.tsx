import { Calendar, Clock, Timer, Play, Pause } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Button from './Button';

const VIDEO_SRC =
  'https://s3.amazonaws.com/webflow-prod-assets/69baf65a084ee56d6814427d/69bd5fb247c58bdd6cc2be50_Wefunder.mp4';

function fmt(t: number) {
  if (!Number.isFinite(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

type HeroProps = {
  onCTAClick: () => void;
};

export default function Hero({ onCTAClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);
  const draggingRef = useRef(false);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const seekToFraction = useCallback((fraction: number) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    v.currentTime = Math.min(Math.max(fraction, 0), 1) * v.duration;
    setCurrent(v.currentTime);
  }, []);

  const fractionFromEvent = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    return Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      draggingRef.current = true;
      setDragging(true);
      (e.target as Element).setPointerCapture?.(e.pointerId);
      seekToFraction(fractionFromEvent(e.clientX));
    },
    [fractionFromEvent, seekToFraction],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      seekToFraction(fractionFromEvent(e.clientX));
    },
    [fractionFromEvent, seekToFraction],
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  }, []);

  const pct = duration ? (current / duration) * 100 : 0;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      if (!draggingRef.current) setCurrent(v.currentTime);
    };
    const onMeta = () => setDuration(v.duration || 0);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('durationchange', onMeta);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('loadedmetadata', onMeta);
      v.removeEventListener('durationchange', onMeta);
    };
  }, []);

  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-eyebrow text-body">Partner webinar</p>

          <h1 className="font-display text-h1 text-ink">
            Inside the Careverse Partner Program
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
            Join us for a walkthrough of Careverse, Lidia, and the partner program — including what you'll be offering your audience and how partners earn from qualifying membership conversions.
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
              Register
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted">
            Already sure? <a href="#" onClick={(e) => { e.preventDefault(); onCTAClick(); }} className="font-semibold text-ink underline underline-offset-2 hover:text-red transition-colors">Apply after you register.</a>
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-card bg-black shadow-lg ring-1 ring-line">
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              className="block w-full object-contain"
              playsInline
              preload="metadata"
              onClick={toggle}
              onEnded={() => setPlaying(false)}
            />
            {!playing && !dragging && (
              <button
                type="button"
                onClick={toggle}
                className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#D4A5A5]/30 to-[#E8C5A0]/30 transition-opacity"
                aria-label="Play webinar preview"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-line transition-transform hover:scale-105">
                  <Play className="h-7 w-7 translate-x-0.5 text-ink" fill="currentColor" />
                </span>
                <span className="text-sm font-medium text-white drop-shadow">Webinar preview — Making care accessible to all</span>
              </button>
            )}
            {playing && (
              <button
                type="button"
                onClick={toggle}
                className="absolute bottom-16 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-line transition-transform hover:scale-105"
                aria-label="Pause video"
              >
                <Pause className="h-5 w-5 text-ink" fill="currentColor" />
              </button>
            )}

            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
              <span className="shrink-0 text-xs font-medium tabular-nums text-white/90">
                {fmt(current)}
              </span>
              <div
                ref={trackRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="group relative h-5 flex-1 cursor-pointer touch-none"
              >
                <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-white/25">
                  <div
                    className="absolute h-full rounded-full bg-red"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div
                  className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow ring-1 ring-black/10 transition-transform group-hover:scale-110"
                  style={{ left: `${pct}%` }}
                />
              </div>
              <span className="shrink-0 text-xs font-medium tabular-nums text-white/90">
                {fmt(duration)}
              </span>
            </div>
          </div>

          <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-md ring-1 ring-line">
            <p className="font-display text-sm font-bold text-ink">David Corso</p>
            <span className="h-3.5 w-px bg-line" />
            <p className="text-xs font-normal text-muted">Chief Partnerships Officer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

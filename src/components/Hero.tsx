import { useCallback, useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Play, Pause } from 'lucide-react';
import Button from './Button';

const VIDEO_SRC =
  'https://s3.amazonaws.com/webflow-prod-assets/69baf65a084ee56d6814427d/69bd5fb247c58bdd6cc2be50_Wefunder.mp4';

function fmt(t: number) {
  if (!Number.isFinite(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
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
  const bufPct = duration ? (buffered / duration) * 100 : 0;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      if (!draggingRef.current) setCurrent(v.currentTime);
      if (v.buffered.length) {
        try {
          setBuffered(v.buffered.end(v.buffered.length - 1));
        } catch {
          /* noop */
        }
      }
    };
    const onMeta = () => setDuration(v.duration || 0);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('progress', onTime);
    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('durationchange', onMeta);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('progress', onTime);
      v.removeEventListener('loadedmetadata', onMeta);
      v.removeEventListener('durationchange', onMeta);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-pinkwash blur-3xl opacity-70" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-bluewash blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 text-center lg:pt-20">
        <h1 className="font-sans text-5xl font-black tracking-tight leading-[1.05] text-blush sm:text-6xl lg:text-7xl">
          Creator webinar
        </h1>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <h2 className="font-sans text-4xl font-bold tracking-h1 leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            See Careverse™ in action
          </h2>
          <p className="mt-6 max-w-md text-lg font-normal leading-[1.5] text-body">
            A 45-minute session on Careverse and how creators partner with us.
          </p>
          <p className="mt-3 max-w-md text-lg font-normal leading-[1.5] text-body">
            See cost and coverage, book the visit and the follow-up, and keep providers in one thread so people never start from scratch.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-ink/80">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-blush" /> September 30
            </span>
            <span className="text-ink/20">·</span>
            <span>2:00 PM ET</span>
            <span className="text-ink/20">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blush" /> 45 minutes
            </span>
            <span className="text-ink/20">·</span>
            <span>Free</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="https://webinar-registration-page-six.vercel.app/" variant="pink">
              Reserve my seat
            </Button>
          </div>

          <p className="mt-5 text-sm text-body/70">
            No follower minimum. Earn 25% commission on every purchase.
          </p>

          <p className="mt-3 text-sm text-body/60">
            Already sure? <a href="https://careverse-creator-application.vercel.app/" className="font-medium text-ink/70 underline underline-offset-2 hover:text-ink transition-colors">Apply after you register.</a>
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-black ring-1 ring-ink/5">
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
                className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-pinkwash/30 via-transparent to-bluewash/30 transition-opacity hover:from-pinkwash/40"
                aria-label="Play video"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-lg ring-1 ring-ink/5 transition-transform hover:scale-105">
                  <Play className="h-7 w-7 translate-x-0.5 text-ink" fill="currentColor" />
                </span>
                <span className="text-sm font-medium text-white drop-shadow">Webinar preview</span>
              </button>
            )}
            {playing && (
              <button
                type="button"
                onClick={toggle}
                className="absolute bottom-16 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-lg ring-1 ring-ink/5 transition-transform hover:scale-105"
                aria-label="Pause video"
              >
                <Pause className="h-5 w-5 text-ink" fill="currentColor" />
              </button>
            )}

            {/* Seek bar */}
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
                    className="absolute h-full rounded-full bg-white/40"
                    style={{ width: `${bufPct}%` }}
                  />
                  <div
                    className="absolute h-full rounded-full bg-blush"
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
          <div className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-ink/5">
            <p className="font-sans text-lg font-bold tracking-h2 text-ink">David Corso</p>
            <span className="h-4 w-px bg-ink/10" />
            <p className="text-xs font-normal text-body">Chief Partnerships Officer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

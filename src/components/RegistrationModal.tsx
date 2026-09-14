import { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';

type RegistrationModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function RegistrationModal({ open, onClose }: RegistrationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    closeBtnRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Reserve your seat"
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-card bg-white p-8 shadow-2xl"
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-cream hover:text-ink"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8FBF4]">
              <Check className="h-7 w-7 text-good" />
            </span>
            <p className="mt-5 font-display text-xl font-bold text-ink">You're in</p>
            <p className="mt-1 text-sm text-muted">Check your email for the link.</p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-bold text-ink">Reserve your seat</h2>
            <p className="mt-1 text-sm text-muted">September 30 · 2:00 PM ET · 45 minutes</p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label htmlFor="reg-name" className="mb-1.5 block text-sm font-semibold text-ink">
                  Full name
                </label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="reg-email" className="mb-1.5 block text-sm font-semibold text-ink">
                  Email
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="reg-role" className="mb-1.5 block text-sm font-semibold text-ink">
                  I'm a… <span className="text-red">*</span>
                </label>
                <select
                  id="reg-role"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink focus:border-ink focus:outline-none"
                >
                  <option value="" disabled>Select one</option>
                  <option value="creator">Creator</option>
                  <option value="agency">Agency or business</option>
                  <option value="network">Network</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex h-[54px] w-full items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white transition-all duration-220 hover:-translate-y-0.5 hover:bg-[#333]"
              >
                Reserve my seat
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

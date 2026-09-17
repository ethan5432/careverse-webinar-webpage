import { Eye, Send, Headphones } from 'lucide-react';

const steps = [
  { icon: Eye, text: 'Watch a live demo from a global healthcare leader' },
  { icon: Send, text: 'See how creators, agencies, and businesses partner with Careverse™' },
  { icon: Headphones, text: 'Apply to join the program' },
];

export default function HourWorks() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 flex flex-col items-center gap-4">
          <h2 className="text-center font-display text-h2 text-ink">How the session works</h2>
          <span className="h-[3px] w-10 bg-line" />
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-line">
                <Icon className="h-7 w-7 text-ink" />
              </div>
              <p className="mt-5 max-w-[15rem] text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

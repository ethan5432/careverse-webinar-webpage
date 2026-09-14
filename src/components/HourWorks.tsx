import { Headphones, Eye, Send } from 'lucide-react';

const steps = [
  { icon: Eye, title: 'Watch a live demo from a global healthcare leader' },
  { icon: Send, title: 'See how creators partner with Careverse™' },
  { icon: Headphones, title: 'Apply to join our network' },
];

export default function HourWorks() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-12 text-center font-sans text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          How the session works
        </p>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* dashed connectors */}
          <div className="absolute left-1/6 right-1/6 top-12 hidden border-t-2 border-dashed border-line md:block" />

          {steps.map(({ icon: Icon, title }, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-line">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-ink">
                  <Icon className="h-7 w-7" />
                </div>
              </div>
              <p className="mt-5 max-w-[14rem] text-[15px] font-normal leading-[1.55] text-muted">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

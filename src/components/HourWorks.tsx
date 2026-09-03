import { Headphones, Eye, Send } from 'lucide-react';
import Button from './Button';

const steps = [
  { icon: Headphones, title: 'Listen to a global healthcare leader' },
  { icon: Eye, title: 'See Careverse in action and how you can partner' },
  { icon: Send, title: 'Apply to join our network' },
];

export default function HourWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bluewash/20 to-softwhite py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-12 text-center font-sans text-2xl font-650 tracking-h2 text-ink sm:text-3xl">
          How the hour works
        </p>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* dashed connectors */}
          <div className="absolute left-1/6 right-1/6 top-12 hidden border-t-2 border-dashed border-blush/50 md:block" />

          {steps.map(({ icon: Icon, title }, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-ink/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pinkwash text-ink">
                  <Icon className="h-7 w-7" />
                </div>
              </div>
              <p className="mt-5 max-w-[14rem] text-base font-normal leading-[1.5] text-body">{title}</p>
              {i === 2 && (
                <div className="mt-5">
                  <Button href="#" variant="pink" className="px-6 py-2.5">
                    Apply to join
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

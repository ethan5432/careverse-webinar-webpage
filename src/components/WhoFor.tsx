import { Heart, DollarSign, Users } from 'lucide-react';

const items = [
  { icon: Heart, text: 'Already talk about care, wellness, family, beauty, or fitness.' },
  { icon: DollarSign, text: 'Want a simple way to earn when you help people.' },
  { icon: Users, text: 'Get questions and don’t have a next step to send people to.' },
];

export default function WhoFor() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-10 text-center font-sans text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          This is for creators who
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {items.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="rounded-card bg-white p-7 ring-1 ring-line transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-ink">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-[15px] font-normal leading-[1.55] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

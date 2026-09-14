import { Heart, DollarSign, Users } from 'lucide-react';

const items = [
  {
    icon: Heart,
    title: 'Creators',
    body: 'You already talk about care, wellness, family, beauty, or fitness — and you want a simple way to earn when you help your audience.',
  },
  {
    icon: DollarSign,
    title: 'Agencies & businesses',
    body: 'You already serve an audience or a client base, and you want to add care benefits — and margin — to what you offer, under your own brand.',
  },
  {
    icon: Users,
    title: 'Networks',
    body: 'You manage creators, agencies, affiliates, or sellers, and you want to earn across everyone you bring in.',
  },
];

export default function WhoFor() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center font-display text-h2 text-ink">This is for</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-card bg-white p-8 shadow-sm ring-1 ring-line transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cream">
                <Icon className="h-5 w-5 text-ink" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

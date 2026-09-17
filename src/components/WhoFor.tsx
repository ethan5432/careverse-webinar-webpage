const items = [
  {
    title: 'Creators',
    body: 'You already talk about care, wellness, family, beauty, or fitness — and you want a simple way to earn when you help your audience.',
  },
  {
    title: 'Agencies & businesses',
    body: 'You already serve an audience or a client base, and you want to add care benefits — and margin — to what you offer, under your own brand.',
  },
];

export default function WhoFor() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col items-center gap-4">
          <h2 className="text-center font-display text-h2 text-ink">This is for</h2>
          <span className="h-[3px] w-10 bg-line" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-card bg-white p-8 shadow-sm ring-1 ring-line transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

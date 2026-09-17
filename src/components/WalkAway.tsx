const items = [
  {
    num: '01',
    label: 'Inside Careverse',
    title: 'What Careverse actually does',
    text: 'See the product and Lidia in action.',
  },
  {
    num: '02',
    label: 'The partner opportunity',
    title: 'How partners can earn',
    text: 'See how the partner program works and how qualifying memberships create earning opportunities.',
  },
  {
    num: '03',
    label: 'How it comes together',
    title: 'How you can get involved',
    text: 'See where creators, agencies, and businesses fit and what happens when you\u2019re ready to join.',
  },
];

export default function WalkAway() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col items-center gap-4">
          <h2 className="text-center font-display text-h2 text-ink">What we&rsquo;ll show you</h2>
          <span className="h-[3px] w-10 bg-red" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ num, label, title, text }) => (
            <div
              key={num}
              className="rounded-card bg-white p-8 shadow-sm ring-1 ring-line transition-shadow hover:shadow-md"
            >
              <p className="mb-4 font-display text-3xl font-bold text-red">{num}</p>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-eyebrow text-muted">{label}</p>
              <h3 className="mb-2 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

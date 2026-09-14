const items = [
  { num: '01', title: 'What Careverse™ actually does', text: 'A live look at the product.' },
  { num: '02', title: 'How it helps people', text: 'Making care easier to find, understand, and trust.' },
  { num: '03', title: 'How you fit', text: "How the program works for creators, agencies, and networks — and how to apply when you're ready." },
];

export default function WalkAway() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center font-display text-h2 text-ink">What you'll walk away with</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ num, title, text }) => (
            <div
              key={num}
              className="rounded-card bg-white p-8 shadow-sm ring-1 ring-line transition-shadow hover:shadow-md"
            >
              <p className="mb-4 font-display text-3xl font-bold text-ink">{num}</p>
              <h3 className="mb-2 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

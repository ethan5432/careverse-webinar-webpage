const items = [
  { num: '01', title: 'What Careverse™ actually does', text: 'A live look at the product.' },
  { num: '02', title: 'How it helps people', text: 'Making care easier to find, understand, and trust.' },
  { num: '03', title: 'How creators fit', text: 'How the program works and how to apply when you’re ready.' },
];

export default function WalkAway() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-softwhite to-pinkwash/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center font-sans text-2xl font-650 tracking-h2 text-ink sm:text-3xl">
          What you'll walk away with
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {items.map(({ num, title, text }) => (
            <div
              key={num}
              className="rounded-2xl bg-white p-7 ring-1 ring-ink/5 transition-shadow hover:shadow-md"
            >
              <p className="mb-3 font-sans text-3xl font-bold text-blush">{num}</p>
              <h3 className="mb-2 font-sans text-lg font-bold tracking-h2 text-ink">{title}</h3>
              <p className="text-sm font-normal leading-[1.5] text-body">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Speaker() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center font-display text-h2 text-ink">Your speaker</h2>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 rounded-card bg-white p-10 shadow-sm ring-1 ring-line sm:flex-row sm:p-12">
          <div className="h-36 w-36 shrink-0 overflow-hidden rounded-full bg-cream ring-1 ring-line">
            <img
              src="/image.png"
              alt="David Corso, Chief Partnerships Officer at Careverse"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-ink">David Corso</h3>
            <p className="mb-3 text-sm font-semibold text-muted">Chief Partnerships Officer, Careverse</p>
            <p className="text-base leading-relaxed text-muted">
              35+ years scaling healthcare in complex, regulated markets. Led partnerships and commercial strategy at BCBSA, UnitedHealthcare, and Elevance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

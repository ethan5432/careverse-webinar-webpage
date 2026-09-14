export default function Speaker() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-10 text-center font-sans text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Your speaker
        </p>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-card bg-white p-10 ring-1 ring-line sm:flex-row sm:p-14">
          <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
            <img
              src="/image.png"
              alt="David Corso"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-sans text-3xl font-bold tracking-tight text-ink">David Corso</h3>
            <p className="mb-3 text-[13px] font-bold tracking-eyebrow text-muted">Chief Partnerships Officer, Careverse</p>
            <p className="text-base font-normal leading-[1.55] text-body">
              35+ years scaling healthcare in complex, regulated markets. Led partnerships and
              commercial strategy at BCBSA, UnitedHealthcare, and Elevance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

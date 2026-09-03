export default function Speaker() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-10 text-center font-sans text-2xl font-650 tracking-h2 text-ink sm:text-3xl">
        Your speaker
      </p>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-3xl bg-white p-10 ring-1 ring-ink/5 sm:flex-row sm:p-14">
        <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full bg-pinkwash ring-1 ring-ink/5">
          <img
            src="/image.png"
            alt="David Corso"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-sans text-3xl font-bold tracking-h2 text-ink">David Corso</h3>
          <p className="mb-3 text-[13px] font-semibold tracking-eyebrow text-blush">Chief Partnerships Officer, Careverse</p>
          <p className="text-base font-normal leading-[1.5] text-body">
            35+ years scaling healthcare in complex, regulated markets. Led partnerships and
            commercial strategy at BCBSA, UnitedHealthcare, and Elevance.
          </p>
        </div>
      </div>
    </section>
  );
}

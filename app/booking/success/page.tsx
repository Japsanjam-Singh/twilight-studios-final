import Link from "next/link"

export default function BookingSuccessPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-12 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center justify-center">
        <section className="w-full overflow-hidden rounded-[2rem] border border-[#3a2a20] bg-[radial-gradient(circle_at_top_left,#2f2418,transparent_35%),linear-gradient(135deg,#16100c,#080808,#050505)] p-6 text-center shadow-2xl md:p-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/15 text-4xl text-emerald-300 shadow-lg shadow-emerald-500/10">
            ✓
          </div>

          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#d8a96f]">
            Payment Successful
          </p>

          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
            Booking Confirmed
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-300">
            Thank you for booking Twilight Studios. Your payment was successful,
            and your selected studio time has been reserved.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left md:grid-cols-3">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5">
              <p className="text-sm text-emerald-300">Status</p>
              <p className="mt-1 font-semibold text-white">Confirmed</p>
            </div>

            <div className="rounded-3xl border border-[#d8a96f]/30 bg-[#d8a96f]/10 p-5">
              <p className="text-sm text-[#f0c98f]">Studio</p>
              <p className="mt-1 font-semibold text-white">Twilight Studios</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-neutral-400">Next Step</p>
              <p className="mt-1 font-semibold text-white">Check your email</p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-white/10 bg-[#0b0b0b]/80 p-5 text-left">
            <p className="font-semibold text-[#f0c98f]">What happens next?</p>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              You should receive a confirmation email shortly. Please keep it
              for your records and arrive on time for your reserved studio slot.
            </p>
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-2xl bg-[#d8a96f] px-7 py-4 font-semibold text-black transition hover:bg-[#f0c98f]"
          >
            Back to Home
          </Link>
        </section>
      </div>
    </main>
  )
}
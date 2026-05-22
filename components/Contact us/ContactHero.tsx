export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-24 sm:py-28">
      {/* subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-[#0b0b0b] to-[#141414]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#f5a623]">
              Contact
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let’s Create
              <span className="block text-[#f5a623]">
                Something Exceptional
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Whether you're planning a photoshoot, booking an event,
              or renting our studio space, Twilight Studios is here to
              deliver a smooth and professional experience from start to finish.
            </p>

            <p className="mt-4 text-sm text-gray-400">
              Reach out and we’ll get back to you as soon as possible.
            </p>

            {/* subtle divider */}
            <div className="mt-10 h-[1px] w-24 bg-gradient-to-r from-[#f5a623] to-transparent" />
          </div>

          {/* RIGHT VISUAL BLOCK */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-[#111111] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f5a623]">
                Studio Location
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                Calgary, Alberta
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                52 Costa Mesa Place NE
              </p>

              <div className="mt-6 text-sm text-gray-400">
                By appointment only
              </div>
            </div>

            {/* glow effect */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#f5a623]/5 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
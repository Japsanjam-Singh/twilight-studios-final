import Link from "next/link"

export default function BookingCTA() {
  return (
    <section className="bg-[#0b0b0b] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111111] via-[#101010] to-[#181818] px-8 py-14 text-center shadow-[0_0_40px_rgba(0,0,0,0.35)] sm:px-12 lg:px-16">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#f5a623]">
            Book Your Session
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Create Something Exceptional?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            Whether you are planning a portrait session, event coverage, brand
            shoot, or studio rental, Twilight Studios is ready to bring your
            vision to life with professionalism and creativity.
          </p>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            By appointment only. Book in advance to secure your preferred date
            and time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#f5a623] px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-[#ffb648]"
            >
              Book Now
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-[#f5a623] hover:text-[#f5a623]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
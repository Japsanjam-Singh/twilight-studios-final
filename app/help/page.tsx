import Link from "next/link"
import { HelpCircle, Calendar, CreditCard, MessageCircle, Mail } from "lucide-react"

const faqs = [
  {
    question: "How do I book a session?",
    answer:
      "You can book through the Book Now button, choose your service, select a preferred date and time, and submit your details.",
  },
  {
    question: "Are bookings confirmed instantly?",
    answer:
      "Bookings are reviewed based on availability. Twilight Studios will confirm your selected slot after submission.",
  },
  {
    question: "Can I request a custom package?",
    answer:
      "Yes. Custom packages are available for events, brand shoots, studio rental, videography, and extended sessions.",
  },
  {
    question: "Can extra charges apply?",
    answer:
      "Yes. Extra charges may apply for extended hours, special setups, additional editing, travel, or custom requirements.",
  },
]

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-[#090909] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
            Help
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            How Can We Help?
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Have questions about booking, availability, packages, or custom
            requests? Find quick answers or send us your query.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <Calendar className="text-[#f5a623]" size={30} />
            <h2 className="mt-5 text-xl font-semibold">Booking Support</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              Need help choosing the right date, time, or service package?
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <CreditCard className="text-[#f5a623]" size={30} />
            <h2 className="mt-5 text-xl font-semibold">Payments</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              Questions about pricing, deposits, payments, or extra charges.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <MessageCircle className="text-[#f5a623]" size={30} />
            <h2 className="mt-5 text-xl font-semibold">Custom Quotes</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              Request a custom package for events, shoots, or studio rental.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Common Questions
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-[1.5rem] border border-white/10 bg-black p-6"
              >
                <div className="flex gap-4">
                  <HelpCircle className="mt-1 shrink-0 text-[#f5a623]" size={22} />
                  <div>
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <p className="mt-3 leading-7 text-neutral-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
              Quote Form
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Send Us Your Question
            </h2>

            <p className="mt-5 leading-8 text-neutral-300">
              Use this form for help, custom package requests, booking questions,
              or special requirements.
            </p>

            <div className="mt-8 flex items-center gap-3 text-neutral-300">
              <Mail className="text-[#f5a623]" size={22} />
              <span>twilightstudios100@gmail.com</span>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-[#f5a623]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-[#f5a623]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-[#f5a623]"
            />

            <textarea
              placeholder="How can we help?"
              rows={5}
              className="w-full resize-none rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-[#f5a623]"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#f5a623] px-6 py-4 font-semibold text-black transition hover:bg-[#ffb648]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#f5a623]/30 bg-[#f5a623]/10 p-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Book Instead?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Choose your preferred service and request your date and time slot.
          </p>

          <Link
            href="/booking"
            className="mt-7 inline-flex rounded-full bg-[#f5a623] px-8 py-3.5 font-semibold text-black transition hover:bg-[#ffb648]"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  )
}
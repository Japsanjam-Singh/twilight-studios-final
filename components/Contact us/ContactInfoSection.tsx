import { Mail, MapPin, Phone, Clock } from "lucide-react"

const contactCards = [
  {
  title: "Studio Location",
  value: "52 Costa Mesa Place NE",
  description: "Calgary, Alberta",
  icon: MapPin,
  href: "https://www.google.com/maps/search/?api=1&query=52+Costa+Mesa+Place+NE+Calgary",
},
  {
    title: "Phone",
    value: "587-429-2733",
    description: "Call us for bookings and inquiries",
    icon: Phone,
    href: "tel:5874292733",
  },
  {
    title: "Email",
    value: "twilightstudios100@gmail.com",
    description: "Send us your booking details anytime",
    icon: Mail,
    href: "mailto:twilightstudios100@gmail.com",
  },
]

export default function ContactInfoSection() {
  return (
    <section className="bg-[#111111] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#f5a623]">
              Contact Details
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Reach Out with Confidence
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Whether you are ready to book a session, ask about studio rental,
              or discuss your creative vision, Twilight Studios is available to
              help you plan the right experience.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {contactCards.map((card) => {
                const Icon = card.icon
                const content = (
                  <div className="group h-full rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 transition duration-300 hover:border-[#f5a623]/40 hover:bg-[#141414]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5a623]/10 text-[#f5a623] transition duration-300 group-hover:bg-[#f5a623] group-hover:text-black">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <p className="mt-5 text-sm uppercase tracking-[0.2em] text-gray-400">
                      {card.title}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white break-words">
                      {card.value}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {card.description}
                    </p>
                  </div>
                )

                return card.href ? (
                  <a target="_blank" rel="noopener noreferrer" key={card.title} href={card.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={card.title}>{content}</div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5a623]/10 text-[#f5a623]">
                <Clock size={22} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#f5a623]">
                  Studio Hours
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  By Appointment Only
                </h3>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-gray-300">
              Book in advance to secure your preferred date and time for
              photoshoots, events, or studio rental sessions.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-gray-400">Monday – Friday</span>
                <span className="font-medium text-white">10:00 AM – 4:00 PM</span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-gray-400">Saturday – Sunday</span>
                <span className="font-medium text-white">10:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#f5a623]/20 bg-[#f5a623]/5 p-5">
              <p className="text-sm leading-7 text-gray-300">
                For faster bookings, reach out by phone, email, or direct message
                on social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
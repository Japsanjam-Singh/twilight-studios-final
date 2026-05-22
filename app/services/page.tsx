import Link from "next/link"
import { Camera, Video, Heart, Building2, Sparkles, Calendar } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Portrait Photography",
    text: "Professional portraits, headshots, family shoots, maternity, newborn, and model sessions.",
  },
  {
    icon: Heart,
    title: "Weddings & Events",
    text: "Coverage for weddings, birthdays, baby showers, family events, and special celebrations.",
  },
  {
    icon: Video,
    title: "Videography",
    text: "Cinematic video coverage, brand content, reels, event highlights, and creative storytelling.",
  },
  {
    icon: Building2,
    title: "Studio Rental",
    text: "Rent the Twilight Studios space for photoshoots, content creation, and creative sessions.",
  },
]

const packages = [
  {
    name: "Studio Session",
    price: "Custom Quote",
    desc: "Best for portraits, family shoots, maternity, newborn, brand content, and model sessions.",
    items: ["Professional studio setup", "Creative direction", "Edited final photos", "Flexible time slots"],
  },
  {
    name: "Event Coverage",
    price: "Custom Quote",
    desc: "Best for weddings, birthdays, baby showers, corporate events, and special occasions.",
    items: ["Photo or video coverage", "Highlight moments", "Professional editing", "Extra hours available"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-[#090909] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
            Services
          </p>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Photography, Videography & Studio Experiences
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Explore Twilight Studios services for personal milestones, creative projects,
            professional branding, events, and studio rental bookings.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#f5a623]/60 hover:bg-white/[0.07]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5a623]/15 text-[#f5a623]">
                  <Icon size={25} />
                </div>
                <h2 className="mt-6 text-xl font-semibold">{service.title}</h2>
                <p className="mt-4 leading-7 text-neutral-400">{service.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[#0d0d0d] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
              Packages
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Simple Package Options
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Packages can be customized based on session type, time, location,
              editing needs, and any additional creative requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {packages.map((pack) => (
              <div
                key={pack.name}
                className="rounded-[2rem] border border-white/10 bg-black p-8 shadow-2xl shadow-black/30"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold">{pack.name}</h3>
                    <p className="mt-3 leading-7 text-neutral-400">{pack.desc}</p>
                  </div>
                  
                </div>

                <ul className="mt-8 space-y-4 text-neutral-300">
                  {pack.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Sparkles className="mt-1 text-[#f5a623]" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#f5a623]/30 bg-[#f5a623]/10 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
                Booking & Availability
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Choose Your Date and Time Slot
              </h2>
              <p className="mt-5 leading-8 text-neutral-300">
                Twilight Studios works by appointment only. Select your preferred
                date and time, and the team will confirm availability. Some custom
                requests, extended hours, or add-ons may have extra charges.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6">
              <div className="flex items-center gap-3 text-[#f5a623]">
                <Calendar size={24} />
                <h3 className="text-xl font-semibold">Available By Appointment</h3>
              </div>
              <p className="mt-4 text-neutral-300">
                Monday–Friday: 10 AM – 4 PM
              </p>
              <p className="mt-2 text-neutral-300">
                Saturday–Sunday: 10 AM – 10 PM
              </p>

              <Link
                href="/booking"
                className="mt-7 inline-flex w-full justify-center rounded-full bg-[#f5a623] px-6 py-3 font-semibold text-black transition hover:bg-[#ffb648]"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
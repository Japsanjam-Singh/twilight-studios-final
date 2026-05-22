import Link from "next/link"
import {
  Camera,
  Heart,
  Video,
  Briefcase,
  Plane,
  Building2,
} from "lucide-react"

const services = [
  {
    title: "Portrait Photography",
    description:
      "Professional portrait sessions crafted with creative direction, clean composition, and timeless visual quality.",
    icon: Camera,
  },
  {
    title: "Weddings & Events",
    description:
      "Beautiful coverage for weddings, birthdays, baby showers, and special events with natural storytelling.",
    icon: Heart,
  },
  {
    title: "Videography",
    description:
      "Cinematic video coverage designed to capture movement, emotion, and the full essence of each moment.",
    icon: Video,
  },
  {
    title: "Brand Content",
    description:
      "High-quality visual content for businesses, creators, and personal brands looking to stand out online.",
    icon: Briefcase,
  },
  {
    title: "Drone Shoots",
    description:
      "Elevated visual storytelling with drone photography and video for dynamic, modern, and striking results.",
    icon: Plane,
  },
  {
    title: "Studio Rental",
    description:
      "A professional studio space available for bookings, designed for smooth, flexible, and comfortable sessions.",
    icon: Building2,
  },
]

export default function ServicesPreview() {
  return (
    <section className="bg-[#0b0b0b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#f5a623]">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Crafted for Every Story Worth Capturing
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            From portraits and events to studio sessions and drone visuals,
            Twilight Studios offers creative photography and videography
            services tailored to modern personal and brand needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-[#111111] p-7 transition duration-300 hover:border-[#f5a623]/40 hover:bg-[#151515]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5a623]/10 text-[#f5a623] transition duration-300 group-hover:bg-[#f5a623] group-hover:text-black">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="rounded-full border border-[#f5a623] px-6 py-3 text-sm font-semibold text-[#f5a623] transition duration-300 hover:bg-[#f5a623] hover:text-black"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}
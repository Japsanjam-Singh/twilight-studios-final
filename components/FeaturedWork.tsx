import Image from "next/image"
import Link from "next/link"

const featuredItems = [
  {
    title: "Portrait Sessions",
    image: "/images/featured/portrait.jpg",
  },
  {
    title: "Wedding Stories",
    image: "/images/featured/wedding.jpg",
  },
  {
    title: "Studio Shoots",
    image: "/images/featured/studio.jpg",
  },
  {
    title: "Brand Content",
    image: "/images/featured/brand.jpg",
  },
  {
    title: "Events & Celebrations",
    image: "/images/featured/events.jpg",
  },
  {
    title: "Drone Visuals",
    image: "/images/featured/drone.jpg",
  },
]

export default function FeaturedWork() {
  return (
    <section className="bg-[#111111] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#f5a623]">
            Featured Work
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Stories Framed with Precision
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            A glimpse into our creative work across portraits, events,
            weddings, studio sessions, and cinematic visual storytelling.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30"
            >
              <div className="relative h-[320px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#f5a623]">
                  
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="rounded-full border border-[#f5a623] px-6 py-3 text-sm font-semibold text-[#f5a623] transition duration-300 hover:bg-[#f5a623] hover:text-black"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
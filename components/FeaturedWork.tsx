import Image from "next/image"
import Link from "next/link"

const featuredItems = [
  {
    title: "Portrait Sessions",
    category: "Studio Portraits",
    image: "/images/portrait.jpeg",
    position: "object-center",
  },
  {
    title: "Wedding Stories",
    category: "Weddings",
    image: "/images/weddings.png",
    position: "object-center",
  },
  {
    title: "Studio Shoots",
    category: "Creative Space",
    image: "/images/studio.PNG",
    position: "object-center",
  },
  {
    title: "Brand Content",
    category: "Business & Social",
    image: "/images/brand.jpeg",
    position: "object-[center_20%]",
  },
  {
    title: "Events & Celebrations",
    category: "Events",
    image: "/images/wed2.jpeg",
    position: "object-center",
  },
  
]

export default function FeaturedWork() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-28">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#f5a623]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
              Featured Work
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Real Moments. Clean Frames. Lasting Impressions.
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-neutral-300">
            Explore a glimpse of Twilight Studios through portraits, weddings,
            events, studio shoots, brand visuals, and creative storytelling.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <GalleryCard item={featuredItems[0]} className="lg:col-span-7" large />

          <GalleryCard item={featuredItems[1]} className="lg:col-span-5" large />

          <GalleryCard item={featuredItems[2]} className="lg:col-span-4" />

          <GalleryCard item={featuredItems[3]} className="lg:col-span-4" />

          <GalleryCard item={featuredItems[4]} className="lg:col-span-4" />

        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="rounded-full border border-white/15 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:border-[#f5a623] hover:text-[#f5a623]"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

function GalleryCard({
  item,
  className = "",
  large = false,
  wide = false,
}: {
  item: {
    title: string
    category: string
    image: string
    position: string
  }
  className?: string
  large?: boolean
  wide?: boolean
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.7rem] bg-neutral-900 ${className}`}
    >
      <div
        className={`relative w-full ${
          large ? "h-[520px]" : wide ? "h-[360px]" : "h-[360px]"
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`${item.position} object-cover transition duration-700 group-hover:scale-105`}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5a623]">
          {item.category}
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-white">
          {item.title}
        </h3>
      </div>
    </div>
  )
}
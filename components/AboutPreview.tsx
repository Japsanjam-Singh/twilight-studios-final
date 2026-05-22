import Link from "next/link"

export default function AboutPreview() {
  return (
    <section className="bg-[#111111] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#f5a623]">
            Our Story
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built on Experience, Driven by Creative Vision
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-gray-300 sm:text-lg">
            Twilight Studios is a Calgary-based photography and videography
            brand built on over 6 years of experience across Calgary and Uganda.
            With a strong eye for storytelling and detail, we create visuals
            that feel authentic, polished, and memorable.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
            From personal milestones to professional brand content, our goal is
            to deliver a smooth, creative, and high-quality experience for every
            client we work with.
          </p>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex rounded-full border border-[#f5a623] px-6 py-3 text-sm font-semibold text-[#f5a623] transition duration-300 hover:bg-[#f5a623] hover:text-black"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
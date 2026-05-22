import Image from "next/image"
import Link from "next/link"
import { Camera, Film, MapPin, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Camera,
    title: "Photography",
    text: "Portraits, families, maternity, newborn, events, weddings, and brand visuals.",
  },
  {
    icon: Film,
    title: "Videography",
    text: "Creative video coverage, reels, event highlights, and storytelling visuals.",
  },
  {
    icon: MapPin,
    title: "Calgary Studio",
    text: "A creative studio space available by appointment for shoots and rentals.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-[#090909] px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
              About Twilight Studios
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Built on Experience, Driven by Creative Vision
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Twilight Studios is a Calgary-based photography and videography
              brand built on over 6 years of creative experience across Calgary
              and Uganda.
            </p>

            <p className="mt-5 leading-8 text-neutral-400">
              We focus on creating visuals that feel authentic, polished, and
              memorable — whether it is a personal milestone, brand shoot, event,
              or studio session.
            </p>

            <Link
              href="/book"
              className="mt-8 inline-flex rounded-full bg-[#f5a623] px-7 py-3.5 font-semibold text-black transition hover:bg-[#ffb648]"
            >
              Book a Session
            </Link>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
            <Image
              src="/images/about.jpg"
              alt="Twilight Studios team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5a623]/15 text-[#f5a623]">
                  <Icon size={25} />
                </div>
                <h2 className="mt-6 text-xl font-semibold">{item.title}</h2>
                <p className="mt-4 leading-7 text-neutral-400">{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[#0d0d0d] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              Creating Visuals That Feel Personal and Professional
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-neutral-300">
            <p>
              Twilight Studios was created with a simple goal: to help people
              preserve meaningful moments through clean, creative, and
              high-quality visual storytelling.
            </p>

            <p>
              Every project is approached with attention to detail, strong
              composition, and a client-first experience from the first message
              to the final delivery.
            </p>

            <p>
              From portraits and weddings to studio rental and brand visuals,
              our work is built around trust, creativity, and memorable results.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
              Our Team
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              The Creative Team Behind the Lens
            </h2>

            <p className="mt-5 leading-8 text-neutral-400">
              Meet the people behind Twilight Studios. Team photos and detailed
              profiles can be added here once finalized.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] bg-neutral-900">
                <Image
                  src="/images/team-1.jpg"
                  alt="Team member"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold">Founder / Creative Lead</h3>
              <p className="mt-3 leading-7 text-neutral-400">
                Leads photography, videography direction, client planning, and
                creative execution for studio and event projects.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="flex h-72 items-center justify-center rounded-[1.5rem] bg-[#f5a623]/10">
                <Sparkles className="text-[#f5a623]" size={44} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">Additional Team</h3>
              <p className="mt-3 leading-7 text-neutral-400">
                Space for second photographer, assistant, editor, or production
                team member once the final team details are provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#f5a623]/30 bg-[#f5a623]/10 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5a623]">
            Work With Us
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Ready to Create Something Memorable?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-neutral-300">
            Book your session, ask about availability, or request a custom quote
            for your next creative project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="rounded-full bg-[#f5a623] px-8 py-3.5 font-semibold text-black transition hover:bg-[#ffb648]"
            >
              Book Now
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:border-[#f5a623] hover:text-[#f5a623]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
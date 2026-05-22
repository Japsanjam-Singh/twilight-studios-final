"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero.jpg",
    label: "Calgary Photography & Videography",
    title: "Every Shot,",
    highlight: "Perfectly Captured.",
    text: "Creative photography, videography, and studio sessions designed to capture your best moments with a polished professional finish.",
  },
  {
    image: "/images/hero-2.jpg",
    label: "Portraits • Weddings • Events",
    title: "Timeless Moments,",
    highlight: "Beautifully Captured.",
    text: "From portraits and family sessions to weddings, birthdays, and special events, we create visuals that feel natural and memorable.",
  },
  {
    image: "/images/hero-3.jpg",
    label: "Studio Rental & Creative Space",
    title: "Your Vision,",
    highlight: "Creatively Captured.",
    text: "Book a session or rent our Calgary studio space with flexible availability, clean setups, and a smooth client experience.",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-black text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt="Twilight Studios"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
      ))}

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl items-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl pt-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#f5a623] sm:text-sm">
            {slides[current].label}
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
            {slides[current].title}
            <span className="mt-1 block text-[#f5a623]">
              {slides[current].highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
            {slides[current].text}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#f5a623] px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-[#ffb648]"
            >
              Book a Session
            </Link>

            <Link
              href="/services"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#f5a623] hover:text-[#f5a623]"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 ${
                  index === current
                    ? "h-2.5 w-10 rounded-full bg-[#f5a623]"
                    : "h-2.5 w-2.5 rounded-full bg-white/40 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition hover:bg-white hover:text-black md:flex"
      >
        <ChevronLeft size={21} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition hover:bg-white hover:text-black md:flex"
      >
        <ChevronRight size={21} />
      </button>

      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
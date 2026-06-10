"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero_1.PNG",
    label: "Calgary Photography & Videography",
    title: "Every Shot,",
    highlight: "Perfectly Captured.",
    text: "Creative photography, videography, and studio sessions designed to capture your best moments with a polished professional finish.",
  },
  {
    image: "/images/hero_2.JPG",
    label: "Portraits • Weddings • Events",
    title: "Timeless Moments,",
    highlight: "Beautifully Captured.",
    text: "From portraits and family sessions to weddings, birthdays, and special events, we create visuals that feel natural and memorable.",
  },
  {
    image: "/images/hero_3.jpeg",
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
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
<section className="relative overflow-hidden bg-white/[0.02] text-white">
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover object-center opacity-25 blur-3xl"
        />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(180,180,180,0.12),transparent_35%),linear-gradient(90deg,rgba(15,15,15,0.75)_0%,rgba(15,15,15,0.45)_45%,rgba(15,15,15,0.15)_100%)]" />      </div>

    <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#f5a623] sm:text-sm">
            {slide.label}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.03] sm:text-5xl lg:text-6xl xl:text-7xl">
            {slide.title}
            <span className="block text-[#f5a623]">{slide.highlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
            {slide.text}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#f5a623] px-7 py-3.5 text-sm font-bold text-black transition hover:bg-[#ffb648]"
            >
              Book a Session
            </Link>

            <Link
              href="/services"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-[#f5a623] hover:text-[#f5a623]"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-[#f5a623] hover:text-black"
            >
              <ChevronLeft size={21} />
            </button>

            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === current
                      ? "w-10 bg-[#f5a623]"
                      : "w-2.5 bg-white/40 hover:bg-white"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-[#f5a623] hover:text-black"
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[455px]">
<div className="absolute -right-8 top-10 h-[78%] w-[70%] rounded-full bg-white/10 blur-[90px]" />
            <div className="relative h-[430px] overflow-hidden rounded-[2rem] shadow-[0_35px_90px_rgba(0,0,0,0.65)] sm:h-[500px] lg:h-[570px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={current === 0}
                sizes="(max-width: 768px) 90vw, 455px"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t  via-transparent to-transparent" />

<div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#1f1f1f]/70 px-5 py-4 backdrop-blur-md">                <p className="text-xs uppercase tracking-[0.28em] text-[#f5a623]">
                  Twilight Studios
                </p>
                <p className="mt-1 text-sm text-neutral-200">
                  Calgary Portraits • Events • Creative Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
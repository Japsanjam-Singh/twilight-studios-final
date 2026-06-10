"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Help", href: "/help" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[linear-gradient(135deg,rgba(38,38,38,0.92),rgba(18,18,18,0.88),rgba(8,8,8,0.94))] shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(245,166,35,0.08),transparent_30%)]" />

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-[#242424] shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition group-hover:border-[#f5a623]/60">
            <Image
              src="/logo.png"
              alt="Twilight Studios Logo"
              fill
              sizes="48px"
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-[0.22em] text-white sm:text-lg">
              TWILIGHT
            </span>
            <span className="mt-1 text-xs font-semibold tracking-[0.35em] text-[#f5a623] sm:text-sm">
              STUDIOS
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.055] px-2 py-2 shadow-inner backdrop-blur-xl md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition ${
                  active
                    ? "bg-[#f5a623] text-black shadow-[0_0_25px_rgba(245,166,35,0.22)]"
                    : "text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/booking"
          className="hidden rounded-full border border-[#f5a623]/70 bg-[#f5a623] px-6 py-3 text-sm font-bold text-black shadow-[0_0_30px_rgba(245,166,35,0.18)] transition hover:bg-[#ffba3c] md:inline-flex"
        >
          Book Now
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white backdrop-blur transition hover:border-[#f5a623]/50 hover:text-[#f5a623] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="relative border-t border-white/10 bg-[#181818]/95 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-5 sm:px-6">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-[#f5a623] text-black"
                      : "text-neutral-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}

            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-[#f5a623] px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-[#ffba3c]"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
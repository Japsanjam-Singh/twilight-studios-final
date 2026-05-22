"use client"

import Link from "next/link"
import Image from "next/image"
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#f5a623]/30 bg-[#111111]">
            <Image
              src="/logo.png"
              alt="Twilight Studios Logo"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-[0.2em] text-white sm:text-lg">
              TWILIGHT
            </span>
            <span className="text-xs font-medium tracking-[0.32em] text-[#f5a623] sm:text-sm">
              STUDIOS
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-300 transition duration-300 hover:text-[#f5a623]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/booking"
            className="rounded-full border border-[#f5a623] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#f5a623] transition duration-300 hover:bg-[#f5a623] hover:text-black"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md border border-white/10 bg-[#111111] p-2 text-white transition hover:border-[#f5a623]/40 hover:text-[#f5a623] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0d0d0d] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-[#f5a623]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full border border-[#f5a623] px-5 py-3 text-center text-sm font-semibold text-[#f5a623] transition hover:bg-[#f5a623] hover:text-black"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
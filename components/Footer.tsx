import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Help", href: "/help" },
  { name: "Book Now", href: "/booking" },
]

export default function Footer() {
  return (
    <>
    <section className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
<footer className="relative overflow-hidden border-t border-white/40 bg-[linear-gradient(180deg,#161616_0%,#0d0d0d_35%,#030303_100%)] text-white">     
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_90%_100%,rgba(180,180,180,0.08),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-semibold tracking-[0.22em] text-white">
                TWILIGHT
              </h3>
              <p className="mt-1 text-sm font-semibold tracking-[0.28em] text-[#f5a623]">
                STUDIOS
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
              Every Shot, Perfectly Captured. Twilight Studios delivers
              photography and videography with creativity, precision, and a
              polished storytelling approach.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-200">
              Navigation
            </h4>

            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition hover:text-[#f5a623]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-200">
              Contact
            </h4>

            <ul className="mt-5 space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-[#f5a623]" />
                <span>52 Costa Mesa Place NE, Calgary, AB</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#f5a623]" />
                <a href="tel:5874292733" className="transition hover:text-white">
                  587-429-2733
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#f5a623]" />
                <a
                  href="mailto:twilightstudios100@gmail.com"
                  className="break-all transition hover:text-white"
                >
                  twilightstudios100@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-200">
              Follow Us
            </h4>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://instagram.com/twilightstudios_"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300 transition hover:border-[#f5a623]/70 hover:bg-white/[0.07] hover:text-[#f5a623]"
              >
                Instagram
              </a>

              <a
                href="https://tiktok.com/@twilightstudios1"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300 transition hover:border-[#f5a623]/70 hover:bg-white/[0.07] hover:text-[#f5a623]"
              >
                TikTok
              </a>
            </div>

            <p className="mt-5 text-sm leading-7 text-neutral-400">
              Book in advance to secure your preferred date and time.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Twilight Studios. All rights reserved.</p>
          <p>Calgary Photography • Videography • Studio Rental</p>
        </div>
      </div>
    </footer>
    </>
  )
}
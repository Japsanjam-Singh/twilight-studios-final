"use client"

import { Suspense, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"

const PRICE_PER_SLOT = 50

function CheckoutContent() {
  const searchParams = useSearchParams()

  const date = searchParams.get("date") || ""
  const slotsParam = searchParams.get("slots") || ""

  const slots = useMemo(() => slotsParam.split("|").filter(Boolean), [slotsParam])

  const subtotal = slots.length * PRICE_PER_SLOT
  const gst = subtotal * 0.05
  const total = subtotal + gst

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handlePayment = async () => {
    setError("")

    if (!name || !email || !date || slots.length === 0) {
      setError("Please complete all required fields.")
      return
    }

    setLoading(true)

    const res = await fetch("/api/create-booking-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        date,
        slots,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || "Something went wrong.")
      setLoading(false)
      return
    }

    window.location.href = data.url
  }

  return (
    <main className="min-h-screen bg-[#050505] px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8 rounded-[2rem] border border-[#3a2a20] bg-[radial-gradient(circle_at_top_left,#3a2416,transparent_35%),linear-gradient(135deg,#16100c,#080808,#050505)] p-6 shadow-2xl md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d8a96f]">
            Twilight Studios Checkout
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Complete your studio booking.
          </h1>

          <p className="mt-4 max-w-2xl text-neutral-300">
            Add your contact details, review your selected time slots, and continue
            to secure Stripe payment.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <section className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6 shadow-xl md:p-8">
            <div className="rounded-3xl border border-[#3a2a20] bg-[#120f0c] p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d8a96f]">
                Step 01
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Contact Information
              </h2>

              <p className="mt-1 text-sm text-neutral-400">
                We’ll use this information to confirm your booking.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label className="text-sm text-neutral-400">Full Name *</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[#3a2a20] bg-[#15110e] px-4 py-4 text-white outline-none transition focus:border-[#d8a96f]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-400">Email *</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-[#3a2a20] bg-[#15110e] px-4 py-4 text-white outline-none transition focus:border-[#d8a96f]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-400">Phone Optional</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[#3a2a20] bg-[#15110e] px-4 py-4 text-white outline-none transition focus:border-[#d8a96f]"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {error && (
              <p className="mt-5 rounded-2xl border border-red-500/30 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              onClick={handlePayment}
              disabled={loading || slots.length === 0}
              className="mt-8 w-full rounded-2xl bg-[#d8a96f] px-5 py-4 font-semibold text-black transition hover:bg-[#f0c98f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? "Redirecting to Stripe..." : "Pay with Stripe"}
            </button>

            <p className="mt-4 text-center text-xs text-neutral-500">
              Secure payment powered by Stripe.
            </p>
          </section>

          <aside className="h-fit rounded-[2rem] border border-[#4a3526] bg-[#130f0c] p-6 shadow-xl md:sticky md:top-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d8a96f]">
              Booking Summary
            </p>

            <h2 className="mt-2 text-2xl font-semibold">Studio Rental</h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-neutral-400">Date</span>
                <span className="text-right font-medium">{date || "Missing"}</span>
              </div>

              <div className="border-b border-white/10 pb-4">
                <span className="text-neutral-400">Selected Slots</span>

                <div className="mt-3 space-y-2">
                  {slots.length > 0 ? (
                    slots.map((slot) => (
                      <div
                        key={slot}
                        className="rounded-2xl border border-[#d8a96f]/30 bg-[#d8a96f]/15 px-4 py-3 text-sm text-[#f0c98f]"
                      >
                        {slot}
                      </div>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-red-500/30 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                      No slots selected
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-neutral-400">Rate</span>
                <span className="font-medium">$50 / 30 min</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#080808] p-5">
              <div className="flex justify-between text-sm text-neutral-400">
                <span>Subtotal</span>
                <span>
                  {slots.length} × $50 = ${subtotal.toFixed(2)} CAD
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm text-neutral-400">
                <span>GST 5%</span>
                <span>${gst.toFixed(2)} CAD</span>
              </div>

              <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-2xl font-semibold">
                <span>Total</span>
                <span className="text-[#f0c98f]">${total.toFixed(2)} CAD</span>
              </div>

              <p className="mt-2 text-xs text-neutral-500">
                Tax will be calculated on the Stripe checkout page.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default function BookingCheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#050505] px-5 py-12 text-white">
          Loading checkout...
        </main>
      }
    >
      <CheckoutContent />
    </Suspense>
  )
}
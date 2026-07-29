"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

const ORIGINAL_PRICE_PER_HOUR = 60
const PRICE_PER_HOUR = 50
const DISCOUNT_PER_HOUR = ORIGINAL_PRICE_PER_HOUR - PRICE_PER_HOUR
const GST_RATE = 0.05

const allSlots = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
]

function getNextDates(days = 21) {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)

    return {
      value: date.toISOString().split("T")[0],
      label: date.toLocaleDateString("en-CA", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
    }
  })
}

export default function BookingPage() {
  const router = useRouter()

  const [date, setDate] = useState("")
  const [bookedSlots, setBookedSlots] = useState<string[]>([])
  const [selectedSlots, setSelectedSlots] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const availableDates = useMemo(() => getNextDates(21), [])

  const originalSubtotal = selectedSlots.length * ORIGINAL_PRICE_PER_HOUR
  const discount = selectedSlots.length * DISCOUNT_PER_HOUR
  const subtotal = selectedSlots.length * PRICE_PER_HOUR
  const gst = subtotal * GST_RATE
  const total = subtotal + gst

  useEffect(() => {
    if (!date) return

    async function fetchBookedSlots() {
      setLoading(true)
      const res = await fetch(`/api/booked-slots?date=${date}`)
      const data = await res.json()

      setBookedSlots(data.bookedSlots || [])
      setSelectedSlots([])
      setLoading(false)
    }

    fetchBookedSlots()
  }, [date])

  const toggleSlot = (slot: string) => {
    if (bookedSlots.includes(slot)) return

    setSelectedSlots((prev) =>
      prev.includes(slot)
        ? prev.filter((item) => item !== slot)
        : [...prev, slot]
    )
  }

  const handleContinue = () => {
    if (!date || selectedSlots.length === 0) return

    const params = new URLSearchParams()
    params.set("date", date)
    params.set("slots", selectedSlots.join("|"))

    router.push(`/booking/checkout?${params.toString()}`)
  }

  return (
    <main className="min-h-screen bg-[#050505] px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[2rem] border border-[#3a2a20] bg-[radial-gradient(circle_at_top_left,#3a2416,transparent_35%),linear-gradient(135deg,#16100c,#080808,#050505)] p-6 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d8a96f]">
                Twilight Studios Booking
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                Book your studio time with clarity.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300">
                Choose your date, select available one-hour time slots, and
                review your booking total before continuing to checkout.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-emerald-300">
                  Green = Available
                </span>
                <span className="rounded-full border border-[#d8a96f]/40 bg-[#d8a96f]/15 px-4 py-2 text-[#f0c98f]">
                  Gold = Selected
                </span>
                <span className="rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-red-300">
                  Red = Booked
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-[#4a3526] bg-[#130f0c]/90 p-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[#d8a96f]">Studio Rate</p>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  New Customer Offer
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-end gap-3">
                <span className="pb-1 text-2xl text-neutral-500 line-through">
                  $60
                </span>
                <span className="text-5xl font-semibold">$50</span>
                <span className="pb-2 text-neutral-400">CAD / hour</span>
              </div>

              <p className="mt-3 text-sm text-emerald-300">
                Limited-time introductory discount — save $10 per hour.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-[#221811] p-4">
                  <p className="text-neutral-400">Open</p>
                  <p className="mt-1 font-medium">10 AM – 5 PM</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#221811] p-4">
                  <p className="text-neutral-400">Tax</p>
                  <p className="mt-1 font-medium">GST 5%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_390px]">
          <section className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-6 shadow-xl md:p-8">
            <div className="rounded-3xl border border-[#3a2a20] bg-[#120f0c] p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d8a96f]">
                Step 01
              </p>

              <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Select a Date</h2>
                  <p className="mt-1 text-sm text-neutral-400">
                    Hourly slots will appear after you choose a booking date.
                  </p>
                </div>

                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-2xl border border-[#4a3526] bg-[#1a130f] px-4 py-4 text-white outline-none focus:border-[#d8a96f] md:w-72"
                >
                  <option value="">Choose date</option>
                  {availableDates.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-[#101010] p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d8a96f]">
                Step 02
              </p>

              <h2 className="mt-2 text-2xl font-semibold">Choose Time Slots</h2>
              <p className="mt-1 text-sm text-neutral-400">
                Select one or more one-hour slots. Booked slots are disabled.
              </p>

              {!date ? (
                <div className="mt-6 rounded-3xl border border-dashed border-[#4a3526] bg-[#15110e] p-10 text-center text-neutral-400">
                  Please select a date first.
                </div>
              ) : loading ? (
                <div className="mt-6 rounded-3xl border border-white/10 bg-[#151515] p-10 text-center text-neutral-400">
                  Checking availability...
                </div>
              ) : (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {allSlots.map((slot) => {
                    const isBooked = bookedSlots.includes(slot)
                    const isSelected = selectedSlots.includes(slot)

                    return (
                      <button
                        key={slot}
                        onClick={() => toggleSlot(slot)}
                        disabled={isBooked}
                        className={`rounded-3xl border p-5 text-left transition ${
                          isBooked
                            ? "cursor-not-allowed border-red-500/30 bg-red-950/30 text-red-300"
                            : isSelected
                              ? "border-[#d8a96f] bg-[#d8a96f] text-black shadow-lg shadow-[#d8a96f]/20"
                              : "border-emerald-400/20 bg-emerald-500/10 text-emerald-100 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-500/15"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-semibold">{slot}</span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              isBooked
                                ? "bg-red-400/20 text-red-200"
                                : isSelected
                                  ? "bg-black/20 text-black"
                                  : "bg-emerald-400/20 text-emerald-200"
                            }`}
                          >
                            {isBooked
                              ? "Booked"
                              : isSelected
                                ? "Selected"
                                : "Open"}
                          </span>
                        </div>

                        <p className="mt-3 text-xs opacity-75">
                          {isBooked
                            ? "This time is unavailable."
                            : isSelected
                              ? "This hour is added to your booking."
                              : "New customer rate: $50 for this hour."}
                        </p>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </section>

          <aside className="h-fit rounded-[2rem] border border-[#4a3526] bg-[#130f0c] p-6 shadow-xl md:sticky md:top-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d8a96f]">
              Booking Summary
            </p>

            <h2 className="mt-2 text-2xl font-semibold">Review Details</h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-neutral-400">Date</span>
                <span className="text-right font-medium">
                  {date || "Not selected"}
                </span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-neutral-400">Selected Hours</span>
                <span className="font-medium">{selectedSlots.length}</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#080808] p-5">
              <div className="flex justify-between text-sm text-neutral-400">
                <span>Regular price</span>
                <span>
                  {selectedSlots.length} × $60 = ${originalSubtotal.toFixed(2)}
                </span>
              </div>

              <div className="mt-3 flex justify-between text-sm text-emerald-300">
                <span>New customer discount</span>
                <span>−${discount.toFixed(2)} CAD</span>
              </div>

              <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-sm text-neutral-300">
                <span>Discounted subtotal</span>
                <span>
                  {selectedSlots.length} × $50 = ${subtotal.toFixed(2)}
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
            </div>

            <p className="mt-4 text-xs leading-5 text-neutral-500">
              Introductory rate applies to new customers for a limited time.
            </p>

            <button
              onClick={handleContinue}
              disabled={!date || selectedSlots.length === 0}
              className="mt-6 w-full rounded-2xl bg-[#d8a96f] px-5 py-4 font-semibold text-black transition hover:bg-[#f0c98f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue to Checkout
            </button>
          </aside>
        </div>
      </div>
    </main>
  )
}
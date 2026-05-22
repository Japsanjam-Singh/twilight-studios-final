import { NextResponse } from "next/server"
import Stripe from "stripe"
import { supabaseServer } from "@/lib/supabaseServer"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const PRICE_PER_SLOT_CENTS = 5000

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, phone, date, slots } = body

    if (!name || !email || !date || !Array.isArray(slots) || slots.length === 0) {
      return NextResponse.json(
        { error: "Name, email, date, and slots are required" },
        { status: 400 }
      )
    }

    const { data: existingBookings, error: fetchError } = await supabaseServer
      .from("bookings")
      .select("slots")
      .eq("booking_date", date)
      .eq("payment_status", "paid")

    if (fetchError) {
      return NextResponse.json({ error: fetchError.message }, { status: 500 })
    }

    const alreadyBookedSlots =
      existingBookings?.flatMap((booking) => booking.slots || []) || []

    const hasConflict = slots.some((slot: string) =>
      alreadyBookedSlots.includes(slot)
    )

    if (hasConflict) {
      return NextResponse.json(
        { error: "One or more selected slots are already booked" },
        { status: 409 }
      )
    }

    const amountCents = slots.length * PRICE_PER_SLOT_CENTS

    const { data: booking, error: insertError } = await supabaseServer
      .from("bookings")
      .insert({
        customer_name: name,
        customer_email: email,
        customer_phone: phone || null,
        booking_date: date,
        slots,
        total_slots: slots.length,
        amount_cents: amountCents,
        payment_status: "pending",
      })
      .select("id")
      .single()

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: slots.length,
          price_data: {
            currency: "cad",
            unit_amount: PRICE_PER_SLOT_CENTS,
            product_data: {
              name: "Twilight Studios - Studio Booking",
              description: `${date} | ${slots.join(", ")}`,
            },
          },
        },
      ],
      metadata: {
        bookingId: booking.id,
        date,
        slots: JSON.stringify(slots),
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking`,
    })

    await supabaseServer
      .from("bookings")
      .update({ stripe_session_id: session.id })
      .eq("id", booking.id)

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
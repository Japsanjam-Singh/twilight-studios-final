import { NextResponse } from "next/server"
import Stripe from "stripe"
import { supabaseServer } from "@/lib/supabaseServer"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const PRICE_PER_SLOT_CENTS = 5000
const GST_RATE = 0.05

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, date, slots } = body

    if (
      !name ||
      !email ||
      !date ||
      !Array.isArray(slots) ||
      slots.length === 0
    ) {
      return NextResponse.json(
        { error: "Name, email, date, and slots are required" },
        { status: 400 }
      )
    }

    const { data: existingBookings, error: fetchError } =
      await supabaseServer
        .from("bookings")
        .select("slots")
        .eq("booking_date", date)
        .eq("payment_status", "paid")

    if (fetchError) {
      return NextResponse.json(
        { error: fetchError.message },
        { status: 500 }
      )
    }

    const alreadyBookedSlots =
      existingBookings?.flatMap((booking) =>
        Array.isArray(booking.slots) ? booking.slots : []
      ) ?? []

    const hasConflict = slots.some((slot: string) =>
      alreadyBookedSlots.includes(slot)
    )

    if (hasConflict) {
      return NextResponse.json(
        { error: "One or more selected slots are already booked" },
        { status: 409 }
      )
    }

    // Calculate subtotal, GST, and final total
    const subtotalCents = slots.length * PRICE_PER_SLOT_CENTS
    const gstCents = Math.round(subtotalCents * GST_RATE)
    const totalCents = subtotalCents + gstCents

    const { data: booking, error: insertError } = await supabaseServer
      .from("bookings")
      .insert({
        customer_name: name,
        customer_email: email,
        customer_phone: phone || null,
        booking_date: date,
        slots,
        total_slots: slots.length,
        amount_cents: totalCents,
        payment_status: "pending",
      })
      .select("id")
      .single()

    if (insertError) {
      return NextResponse.json(
        { error: insertError.message },
        { status: 500 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      payment_method_types: ["card"],

      line_items: [
        {
          // The total already includes all selected slots and GST
          quantity: 1,

          price_data: {
            currency: "cad",
            unit_amount: totalCents,

            product_data: {
              name: "Twilight Studios - Studio Booking",
              description:
                `${date} | ${slots.join(", ")} | ` +
                `Subtotal: CA$${(subtotalCents / 100).toFixed(2)} | ` +
                `GST 5%: CA$${(gstCents / 100).toFixed(2)}`,
            },
          },
        },
      ],

      metadata: {
        bookingId: String(booking.id),
        date,
        slots: JSON.stringify(slots),
        subtotalCents: String(subtotalCents),
        gstCents: String(gstCents),
        totalCents: String(totalCents),
      },

      success_url:
        `${process.env.NEXT_PUBLIC_SITE_URL}` +
        `/booking/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking`,
    })

    const { error: updateError } = await supabaseServer
      .from("bookings")
      .update({
        stripe_session_id: session.id,
      })
      .eq("id", booking.id)

    if (updateError) {
      console.error("Could not save Stripe session ID:", updateError)
    }

    return NextResponse.json({
      url: session.url,
    })
  } catch (err: unknown) {
    console.error("Checkout creation error:", err)

    const message =
      err instanceof Error
        ? err.message
        : "Unable to create checkout session"

    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}
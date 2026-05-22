import { NextResponse } from "next/server"
import Stripe from "stripe"
import { supabaseServer } from "@/lib/supabaseServer"
import { sendBookingEmails } from "@/lib/sendBookingEmails"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const bookingId = session.metadata?.bookingId

    if (bookingId) {
      const { data: booking, error } = await supabaseServer
        .from("bookings")
        .update({
          payment_status: "paid",
          stripe_session_id: session.id,
        })
        .eq("id", bookingId)
        .select("*")
        .single()

      if (!error && booking) {
        await sendBookingEmails({
          customerName: booking.customer_name,
          customerEmail: booking.customer_email,
          customerPhone: booking.customer_phone,
          bookingDate: booking.booking_date,
          slots: booking.slots,
          amountCents: booking.amount_cents,
        })
      }
    }
  }

  return NextResponse.json({ received: true })
}
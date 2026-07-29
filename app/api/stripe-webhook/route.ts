import { NextResponse } from "next/server"
import Stripe from "stripe"
import { supabaseServer } from "@/lib/supabaseServer"
import { sendBookingEmails } from "@/lib/sendBookingEmails"

export const runtime = "nodejs"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is missing")
}

if (!webhookSecret) {
  throw new Error("STRIPE_WEBHOOK_SECRET is missing")
}

const stripe = new Stripe(stripeSecretKey!)

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret!
    )
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Invalid webhook signature"

    console.error("Stripe webhook verification failed:", message)

    return NextResponse.json(
      { error: message },
      { status: 400 }
    )
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session =
        event.data.object as Stripe.Checkout.Session

      const bookingId = session.metadata?.bookingId

      if (!bookingId) {
        console.error(
          "Stripe session is missing bookingId:",
          session.id
        )

        return NextResponse.json(
          { error: "Missing booking ID" },
          { status: 400 }
        )
      }

      // Do not confirm a booking unless Stripe reports it as paid.
      if (session.payment_status !== "paid") {
        console.log(
          `Checkout session ${session.id} is not paid yet`
        )

        return NextResponse.json({ received: true })
      }

      /*
       * Only update a pending booking.
       * If Stripe sends the same webhook again, the update returns no row,
       * preventing duplicate confirmation emails.
       */
      const { data: booking, error: updateError } =
        await supabaseServer
          .from("bookings")
          .update({
            payment_status: "paid",
            stripe_session_id: session.id,

            // Stripe's confirmed amount.
            amount_cents:
              session.amount_total ?? undefined,
          })
          .eq("id", bookingId)
          .eq("payment_status", "pending")
          .select("*")
          .maybeSingle()

      if (updateError) {
        throw new Error(updateError.message)
      }

      // No booking means it was already processed.
      if (!booking) {
        console.log(
          `Booking ${bookingId} was already processed`
        )

        return NextResponse.json({ received: true })
      }

      await sendBookingEmails({
        customerName: booking.customer_name,
        customerEmail: booking.customer_email,
        customerPhone: booking.customer_phone,
        bookingDate: booking.booking_date,
        slots: booking.slots,
        amountCents:
          session.amount_total ?? booking.amount_cents,
      })
    }

    return NextResponse.json({ received: true })
  } catch (error: unknown) {
    console.error("Stripe webhook processing failed:", error)

    /*
     * Returning 500 tells Stripe that processing failed,
     * so Stripe can retry delivery.
     */
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    )
  }
}
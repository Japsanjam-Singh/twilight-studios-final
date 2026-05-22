import { NextResponse } from "next/server"
import { supabaseServer } from "@/lib/supabaseServer"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const date = searchParams.get("date")

  if (!date) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 })
  }

  const { data, error } = await supabaseServer
    .from("bookings")
    .select("slots")
    .eq("booking_date", date)
    .eq("payment_status", "paid")

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const bookedSlots = data.flatMap((booking) => booking.slots || [])

  return NextResponse.json({ bookedSlots })
}
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    if (!date) {
      return NextResponse.json(
        { error: "Date is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from("bookings")
      .select("slots")
      .eq("booking_date", date)
      .eq("payment_status", "paid");

    if (error) {
      console.error("Booked slots Supabase error:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    const bookedSlots = [
      ...new Set(
        (data ?? []).flatMap((booking) =>
          Array.isArray(booking.slots) ? booking.slots : []
        )
      ),
    ];

    return NextResponse.json(
      { bookedSlots },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Booked slots API error:", error);

    return NextResponse.json(
      { error: "Failed to retrieve booked slots" },
      { status: 500 }
    );
  }
}
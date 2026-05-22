import nodemailer from "nodemailer";

type BookingEmailData = {
  customerName: string;
  customerEmail: string;
  customerPhone?: string | null;
  bookingDate: string;
  slots: string[];
  amountCents: number;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendBookingEmails(data: BookingEmailData) {
  const amount = (data.amountCents / 100).toFixed(2);
  const slotList = data.slots.map((slot) => `<li>${slot}</li>`).join("");

  await transporter.sendMail({
    from: `"Twilight Studios" <${process.env.SMTP_EMAIL}>`,
    to: data.customerEmail,
    subject: "Booking Confirmed | Twilight Studios",
    html: `
      <div style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
        <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
          <div style="border:1px solid #2a211b;background:#111111;border-radius:24px;padding:32px;">
            <p style="color:#c89b6d;letter-spacing:3px;text-transform:uppercase;font-size:12px;margin:0 0 12px;">
              Twilight Studios
            </p>

            <h1 style="font-size:30px;margin:0 0 16px;color:#ffffff;">
              Your booking is confirmed
            </h1>

            <p style="color:#d4d4d4;font-size:15px;line-height:1.7;">
              Hi ${data.customerName}, thank you for booking with Twilight Studios.
              Your payment has been successfully received and your selected studio time has been reserved.
            </p>

            <div style="margin-top:24px;padding:20px;border-radius:18px;background:#1a1511;border:1px solid #3a2a20;">
              <h2 style="font-size:18px;margin:0 0 14px;color:#ffffff;">Booking Details</h2>

              <p><strong>Date:</strong> ${data.bookingDate}</p>
              <p><strong>Selected Time Slot(s):</strong></p>
              <ul style="padding-left:20px;color:#d4d4d4;">${slotList}</ul>
              <p><strong>Total Paid:</strong> $${amount} CAD</p>
            </div>

            <div style="margin-top:24px;padding:20px;border-radius:18px;background:#0b0b0b;border:1px solid #2a2a2a;">
              <h2 style="font-size:18px;margin:0 0 14px;color:#ffffff;">Important Booking Policy</h2>

              <p style="color:#d4d4d4;line-height:1.7;margin:0;">
                This booking is final once payment is completed. Studio bookings are non-refundable.
                Please arrive on time for your selected slot(s). Late arrival, overtime usage,
                or extension beyond the reserved booking period may result in additional studio charges.
                If you need to discuss your booking, please contact Twilight Studios directly as early as possible.
              </p>
            </div>

            <p style="margin-top:24px;color:#d4d4d4;line-height:1.7;">
              We look forward to welcoming you to Twilight Studios.
            </p>

            <p style="margin-top:28px;color:#c89b6d;font-weight:bold;">
              Twilight Studios
            </p>
          </div>
        </div>
      </div>
    `,
  });

  await transporter.sendMail({
    from: `"Twilight Studios" <${process.env.SMTP_EMAIL}>`,
    to: process.env.OWNER_EMAIL,
    subject: "New Paid Studio Booking | Twilight Studios",
    html: `
      <div style="margin:0;padding:0;background:#050505;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
        <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
          <div style="border:1px solid #2a211b;background:#111111;border-radius:24px;padding:32px;">
            <p style="color:#c89b6d;letter-spacing:3px;text-transform:uppercase;font-size:12px;margin:0 0 12px;">
              Twilight Studios Admin
            </p>

            <h1 style="font-size:30px;margin:0 0 16px;color:#ffffff;">
              New paid booking received
            </h1>

            <p style="color:#d4d4d4;font-size:15px;line-height:1.7;">
              A customer has completed payment and reserved studio time.
            </p>

            <div style="margin-top:24px;padding:20px;border-radius:18px;background:#1a1511;border:1px solid #3a2a20;">
              <h2 style="font-size:18px;margin:0 0 14px;color:#ffffff;">Customer Details</h2>

              <p><strong>Name:</strong> ${data.customerName}</p>
              <p><strong>Email:</strong> ${data.customerEmail}</p>
              <p><strong>Phone:</strong> ${data.customerPhone || "Not provided"}</p>
            </div>

            <div style="margin-top:20px;padding:20px;border-radius:18px;background:#0b0b0b;border:1px solid #2a2a2a;">
              <h2 style="font-size:18px;margin:0 0 14px;color:#ffffff;">Booking Details</h2>

              <p><strong>Date:</strong> ${data.bookingDate}</p>
              <p><strong>Selected Time Slot(s):</strong></p>
              <ul style="padding-left:20px;color:#d4d4d4;">${slotList}</ul>
              <p><strong>Total Paid:</strong> $${amount} CAD</p>
            </div>

            <p style="margin-top:24px;color:#d4d4d4;line-height:1.7;">
              Please make sure this slot is prepared and unavailable for other customers.
            </p>
          </div>
        </div>
      </div>
    `,
  });
}

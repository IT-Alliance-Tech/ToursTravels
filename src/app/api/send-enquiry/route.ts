import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, whatsapp, destination, travelers, month, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Tours & Travels Enquiry <onboarding@resend.dev>",
      to: ["gireeshma@italliancetech.com"],
      subject: `New Travel Enquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 0; border-radius: 10px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #7c3aed, #d97706); padding: 30px 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: 1px;">✈️ New Travel Enquiry</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">IT Alliance Tours & Travels</p>
          </div>

          <!-- Body -->
          <div style="padding: 30px 40px; background: #ffffff;">
            <p style="color: #555; margin: 0 0 24px; font-size: 15px;">
              A new enquiry has been submitted through the website contact form. Here are the details:
            </p>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="background: #f3f0ff;">
                <td style="padding: 12px 16px; font-weight: bold; color: #7c3aed; width: 40%; border-radius: 4px;">👤 Full Name</td>
                <td style="padding: 12px 16px; color: #333;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: bold; color: #7c3aed;">📞 Phone Number</td>
                <td style="padding: 12px 16px; color: #333;">${phone}</td>
              </tr>
              <tr style="background: #f3f0ff;">
                <td style="padding: 12px 16px; font-weight: bold; color: #7c3aed;">💬 WhatsApp Number</td>
                <td style="padding: 12px 16px; color: #333;">${whatsapp || "Same as phone / Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: bold; color: #7c3aed;">🗺️ Preferred Destination</td>
                <td style="padding: 12px 16px; color: #333;">${destination || "Not specified"}</td>
              </tr>
              <tr style="background: #f3f0ff;">
                <td style="padding: 12px 16px; font-weight: bold; color: #7c3aed;">👥 Number of Travelers</td>
                <td style="padding: 12px 16px; color: #333;">${travelers}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: bold; color: #7c3aed;">📅 Travel Month</td>
                <td style="padding: 12px 16px; color: #333;">${month || "Flexible / Not decided"}</td>
              </tr>
              ${message ? `
              <tr style="background: #f3f0ff;">
                <td style="padding: 12px 16px; font-weight: bold; color: #7c3aed; vertical-align: top;">📝 Message</td>
                <td style="padding: 12px 16px; color: #333;">${message}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 30px; padding: 16px 20px; background: #fffbeb; border-left: 4px solid #d97706; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #92400e;">
                ⚡ Please respond to this enquiry promptly. The customer is expecting a WhatsApp call or message at <strong>${whatsapp || phone}</strong>.
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f3f4f6; padding: 20px 40px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
              This email was sent automatically from the IT Alliance Tours & Travels website contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

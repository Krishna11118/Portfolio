import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { applyCorsHeaders } from "@/utils/cors";
import { transporter } from "@/lib/email/transporter";
import { getContactEmailOptions } from "@/lib/email/templates/contactEmail";
import { getResumeEmailOptions } from "@/lib/email/templates/resumeEmail";
import { env } from "@/lib/env";

// Handle POST and OPTIONS requests
export async function POST(req: NextRequest) {
  const headers = applyCorsHeaders(req);

  if (req.method === "OPTIONS") {
    // Handle preflight requests
    return NextResponse.json({}, { status: 200, headers });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400, headers });
    }

    // Send email to self
    const mailOptionsToSelf = getContactEmailOptions({ name, email, message });
    await transporter.sendMail(mailOptionsToSelf);

    // Send email to the sender
    const mailOptionsToSender = getResumeEmailOptions({ name, email, resumeLink: env.RESUME_LINK || "" });
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { message: "Email sent successfully. You will receive a response shortly." },
      { status: 200, headers },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500, headers });
  }
}

// Explicitly handle OPTIONS for preflight
export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { status: 200, headers: applyCorsHeaders(req) });
}
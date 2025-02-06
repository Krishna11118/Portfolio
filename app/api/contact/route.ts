import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// export const dynamic = 'force-dynamic';

// Use environment variables for sensitive information
const EMAIL_USER = process.env.NEXT_PUBLIC_EMAIL_USER
const EMAIL_PASS = process.env.NEXT_PUBLIC_EMAIL_PASS

if (!EMAIL_USER || !EMAIL_PASS) {
  throw new Error("Email credentials are not set in environment variables")
}

// Initialize the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})


// Handle POST requests
export async function POST(req: NextRequest) {
  // Set CORS headers
  const allowedOrigins = ["http://localhost:3000", "https://www.krishnastonetech.live"]

  const origin = req.headers.get("origin") || ""
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin
  }

  if (req.method === "OPTIONS") {
    // Handle preflight requests
    return NextResponse.json({}, { status: 200, headers })
  }

  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400, headers })
    }

    const mailOptionsToSelf = {
      from: email,
      to: EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
      `,
    }

    // Send email to self
    await transporter.sendMail(mailOptionsToSelf)

    const googleDriveLink = "https://drive.google.com/file/d/1L9SB7Fr17NSc_XXIsq21UWqbt0t1FAzS/view?usp=drive_link"
    const mailOptionsToSender = {
      from: EMAIL_USER,
      to: email,
      subject: "Here's My Resume",
      text: `
Hello ${name},

Thank you for reaching out. You can find my resume using the link below:
Resume Link: ${googleDriveLink}

Best regards,
Krishna
      `,
      html: `
<h2>Hello ${name},</h2>
<p>Thank you for reaching out. You can find my resume using the link below:</p>
<p><strong>Resume Link:</strong> <a href="${googleDriveLink}" target="_blank">View Resume</a></p>
<p>Best regards,<br />Krishna</p>
      `,
    }

    // Send email to the sender
    await transporter.sendMail(mailOptionsToSender)

    return NextResponse.json(
      { message: "Email sent successfully. You will receive a response shortly." },
      { status: 200, headers },
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500, headers })
  }
}


import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create Nodemailer transporter with Gmail SMTP and SSL
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.MY_EMAIL,
      subject: `[Contact Form] ${subject}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `
        <p>${message}</p>
        <hr />
        <p>From: ${name} &lt;${email}&gt;</p>
      `,
    }

    // Send mail
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

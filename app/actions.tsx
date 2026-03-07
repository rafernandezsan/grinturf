"use server"

import { Resend } from "resend"

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  const name = `${firstName} ${lastName}`.trim()

  if (!firstName || !lastName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[v0] RESEND_API_KEY is not configured")
    return { success: false, error: "Email service is not configured. Please try again later." }
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: "GrinTurf Contact Form <onboarding@resend.dev>",
      to: "info@grinturf.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Failed to send email:", error)
    return { success: false, error: "Failed to send message. Please try again later." }
  }
}

"use server"

import { Resend } from "resend"
import { headers } from "next/headers"

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  const name = `${firstName} ${lastName}`.trim()

  // Gather technical details from the incoming request headers
  const headerList = await headers()

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")

  // Determine the client IP from common proxy headers
  const ipAddress =
    headerList.get("x-real-ip") ||
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "Unknown"

  const userAgent = headerList.get("user-agent") || "Unknown"
  const acceptLanguage = headerList.get("accept-language") || "Unknown"
  const referer = headerList.get("referer") || "Unknown"

  // Vercel geolocation headers (available when deployed on Vercel)
  const country = headerList.get("x-vercel-ip-country") || "Unknown"
  const region = headerList.get("x-vercel-ip-country-region") || "Unknown"
  const city = headerList.get("x-vercel-ip-city")
    ? decodeURIComponent(headerList.get("x-vercel-ip-city")!)
    : "Unknown"
  const timezone = headerList.get("x-vercel-ip-timezone") || "Unknown"

  // Client-side technical details collected by the browser
  const clientPage = (formData.get("pageUrl") as string) || "Unknown"
  const clientPlatform = (formData.get("platform") as string) || "Unknown"
  const clientLanguage = (formData.get("language") as string) || "Unknown"
  const clientTimezone = (formData.get("timezone") as string) || "Unknown"
  const clientScreen = (formData.get("screen") as string) || "Unknown"
  const clientViewport = (formData.get("viewport") as string) || "Unknown"

  if (!firstName || !lastName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[v0] RESEND_API_KEY is not configured")
    return { success: false, error: "Email service is not configured. Please try again later." }
  }

  const resend = new Resend(apiKey)

  // Format the from email with display name for Resend
  const fromEmailAddress = process.env.RESEND_FROM_EMAIL || "info@grinturf.com"
  const fromEmail = `GrinTurf <${fromEmailAddress}>`
  
  // Send to info@grinturf.com
  const toEmail = "info@grinturf.com"

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <h3>Message:</h3>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        <hr>
        <h3>Technical Details</h3>
        <p><strong>IP Address:</strong> ${escapeHtml(ipAddress)}</p>
        <p><strong>Location:</strong> ${escapeHtml(city)}, ${escapeHtml(region)}, ${escapeHtml(country)}</p>
        <p><strong>Server Timezone (IP):</strong> ${escapeHtml(timezone)}</p>
        <p><strong>User Agent:</strong> ${escapeHtml(userAgent)}</p>
        <p><strong>Browser Platform:</strong> ${escapeHtml(clientPlatform)}</p>
        <p><strong>Browser Language:</strong> ${escapeHtml(clientLanguage)} (Accept-Language: ${escapeHtml(acceptLanguage)})</p>
        <p><strong>Browser Timezone:</strong> ${escapeHtml(clientTimezone)}</p>
        <p><strong>Screen Resolution:</strong> ${escapeHtml(clientScreen)}</p>
        <p><strong>Viewport Size:</strong> ${escapeHtml(clientViewport)}</p>
        <p><strong>Submitted From Page:</strong> ${escapeHtml(clientPage)}</p>
        <p><strong>Referer:</strong> ${escapeHtml(referer)}</p>
      `,
    })

    if (error) {
      console.error("[v0] Resend API error:", error)
      return { success: false, error: `Email delivery failed: ${error.message}` }
    }

    console.log("[v0] Email sent successfully:", data)
    return { success: true }
  } catch (error) {
    console.error("[v0] Failed to send email:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return { success: false, error: `Failed to send message: ${errorMessage}` }
  }
}

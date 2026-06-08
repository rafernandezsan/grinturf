"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/app/actions"
import { Loader2 } from "lucide-react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const formData = new FormData(event.currentTarget)
    const result = await sendContactEmail(formData)

    setIsSubmitting(false)

    if (result.success) {
      // Send Google conversion event on successful lead form submission
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion_event_submit_lead_form", {
          event_timeout: 2000,
        })
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll get back to you within 24 hours.",
      })
      // Reset form
      event.currentTarget.reset()
    } else {
      setSubmitStatus({
        type: "error",
        message: result.error || "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-foreground">
            First Name
          </label>
          <Input id="firstName" name="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-foreground">
            Last Name
          </label>
          <Input id="lastName" name="lastName" placeholder="Doe" required />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone
        </label>
        <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Tell us about your project
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="I'm interested in artificial turf for my backyard..."
          rows={4}
          required
        />
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg text-sm ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  )
}

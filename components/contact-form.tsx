"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!res.ok) throw new Error("Failed to send message")

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send your message. Please try again later.",
      variant: "destructive",
    })
  } finally {
    setIsSubmitting(false)
  }
}


  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="absolute inset-0 rounded-lg overflow-hidden -z-10">
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 z-10"></div>
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="circuit-pattern"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
              patternTransform="scale(2) rotate(0)"
            >
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <path d="M5,5 L15,5 L15,15 L5,15 L5,5" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.5" />
              <line x1="10" y1="5" x2="10" y2="0" stroke="currentColor" strokeWidth="0.5" />
              <line x1="10" y1="15" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="5" y1="10" x2="0" y2="10" stroke="currentColor" strokeWidth="0.5" />
              <line x1="15" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

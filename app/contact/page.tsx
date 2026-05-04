"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact <span className="text-primary">Me</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border border-border">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">moaz.elmorsheedy@gmail.com</p>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Phone className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">(+20) 1147797402</p>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <MapPin className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">325 Compound Gardenia, Nasr City, Cairo, Egypt</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12 border border-border">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="border-border"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="border-border"
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
                placeholder="Subject"
                className="border-border"
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
                placeholder="Your Message"
                rows={6}
                className="border-border resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full md:w-auto flex items-center gap-2" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

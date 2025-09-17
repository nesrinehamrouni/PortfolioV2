"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email via API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        // Show success notification
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nesrine.hamrouni@enicar.ucar.tn",
      href: "mailto:nesrine.hamrouni@enicar.ucar.tn",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 53 556 017",
      href: "tel:+21653556017",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sousse, TN",
      href: "#",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
        <p className="text-muted-foreground leading-relaxed">
          I'm always excited to discuss new opportunities, creative projects, or just have a chat about technology and
          design. Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">Get in Touch</h3>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-4 bg-card border-border">
                <a href={info.href} className="flex items-center gap-4 group hover:text-accent transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                    <info.icon className="h-5 w-5 text-primary-foreground group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <h4 className="font-playfair text-lg font-semibold mb-2">Available for Freelance</h4>
            <p className="text-sm opacity-90">
              I'm currently accepting new projects and would love to hear about your ideas. Let's create something
              amazing together!
            </p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-6 bg-card border-border">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name" 
                  className="bg-background border-border" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="bg-background border-border"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Project inquiry" 
                className="bg-background border-border" 
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-background border-border resize-none"
                required
              />
            </div>

            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

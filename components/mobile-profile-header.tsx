"use client"

import { useState } from "react"
import { Mail, MapPin, Linkedin, Github, Instagram, Twitter, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MobileProfileHeader() {
  const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <div className="md:hidden bg-card border border-border rounded-2xl p-6 mx-4 mt-4 mb-6">
      {/* Profile Picture and Basic Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-1 flex-shrink-0">
          <img
            src="/nesrine.jpg"
            alt="Nesrine Hamrouni"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-playfair text-xl font-bold text-foreground mb-1">Nesrine Hamrouni</h1>
          <div className="bg-muted rounded-lg px-3 py-1 inline-block">
            <span className="text-sm font-medium text-muted-foreground">Creative Developer & Designer</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>

      {/* Expandable Contact Details */}
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="space-y-4 pt-4 border-t border-border">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">EMAIL</span>
                <span className="text-sm text-foreground">nesrine.hamrouni@enicar.ucar.tn</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">LOCATION</span>
                <span className="text-sm text-foreground">Sousse, TN</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-3 pt-2">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-muted"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

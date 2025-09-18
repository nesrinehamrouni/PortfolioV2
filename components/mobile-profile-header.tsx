"use client"

import { useState } from "react"
import { Mail, MapPin, Linkedin, Github, FileText, ChevronDown, ChevronUp } from "lucide-react"
import { BiLogoPinterest } from "react-icons/bi"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MobileProfileHeader() {
  const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nesrine-hamrouni-6a03ab248", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/nesrinehamrouni", label: "GitHub" },
    { icon: BiLogoPinterest, href: "https://fr.pinterest.com/lifes_palette", label: "Pinterest" },
  ]

  const handleResumeClick = () => {
    // Open CV PDF in a new tab
    window.open("/cv/Resume-NesrineHamrouni.pdf", "_blank")
  }

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
          <div className="bg-muted rounded-lg px-3 py-1 inline-block mb-2">
            <span className="text-sm font-medium text-muted-foreground">Freshly Graduated SWE & Creative Developer</span>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-accent font-medium">Full-Stack Developer</div>
            <div className="text-xs text-accent font-medium">Java Spring Boot & Next.js</div>
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
        isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            {/* Resume Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={handleResumeClick}
              aria-label="Download Resume"
            >
              <FileText className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

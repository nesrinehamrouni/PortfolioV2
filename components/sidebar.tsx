"use client"

import { useState } from "react"
import { Mail, MapPin, Linkedin, Github, Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BiLogoPinterest } from 'react-icons/bi'
import { cn } from "@/lib/utils"

interface SidebarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nesrine-hamrouni-6a03ab248", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/nesrinehamrouni", label: "GitHub" },
    { icon: BiLogoPinterest, href: "https://fr.pinterest.com/lifes_palette", label: "Pinterest" },
  ]

  const handleResumeClick = () => {
    // Open CV PDF in a new tab
    window.open('/cv/Resume-NesrineHamrouni.pdf', '_blank')
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-card/80 backdrop-blur-sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-80 z-40 transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="sidebar-card">
          <div className="flex flex-col h-full p-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-1">
              <img
                src="/nesrine.jpg"
                alt="Nesrine Hamrouni"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h1 className="font-playfair text-2xl font-bold text-sidebar-foreground mb-2">Nesrine Hamrouni</h1>
            <p className="text-sidebar-foreground/70 text-sm">Freshly Graduated SE & Creative Developer</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 text-sm text-sidebar-foreground/70">
              <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
              <span className="break-words">nesrine.hamrouni@enicar.ucar.tn</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-sidebar-foreground/70">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Sousse, TN</span>
            </div>
          </div>

          {/* Spacer to push social links to bottom */}
          <div className="flex-1" />

          {/* Social Links */}
          <div className="flex justify-center gap-3 pt-6 border-t border-sidebar-border">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-sidebar-foreground/60 hover:text-accent hover:bg-sidebar-primary/50"
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
              className="h-9 w-9 text-sidebar-foreground/60 hover:text-accent hover:bg-sidebar-primary/50"
              onClick={handleResumeClick}
              aria-label="Download Resume"
            >
              <FileText className="h-4 w-4" />
            </Button>
          </div>
          </div>
        </div>
      </aside>
    </>
  )
}

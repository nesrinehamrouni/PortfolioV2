"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { MobileProfileHeader } from "@/components/mobile-profile-header"
import { AboutSection } from "@/components/sections/about-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "resume":
        return <ResumeSection />
      case "portfolio":
        return <PortfolioSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      
      {/* Top Navigation - Hidden on mobile */}
      <div className="hidden md:block">
        <TopNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>

      {/* Main Content */}
      <main className="md:ml-80 min-h-screen">
        {/* Mobile Profile Header */}
        <MobileProfileHeader />
        
        <div className="main-content-card">
          <div className="p-6 md:p-12 max-w-6xl">{renderSection()}</div>

          {/* Footer */}
          <footer className="border-t border-border mt-16 py-8 px-6 md:px-12">
            <div className="text-center text-sm text-muted-foreground">© 2025 Nesrine Hamrouni | All Rights Reserved</div>
          </footer>
        </div>
      </main>

      {/* Mobile Navigation Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-sidebar border-t border-sidebar-border md:hidden z-30">
        <div className="flex justify-around py-2">
          {[
            { id: "about", label: "About" },
            { id: "resume", label: "Resume" },
            { id: "portfolio", label: "Portfolio" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeSection === item.id
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

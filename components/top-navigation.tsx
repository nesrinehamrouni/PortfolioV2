"use client"

import { cn } from "@/lib/utils"

interface TopNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function TopNavigation({ activeSection, onSectionChange }: TopNavigationProps) {
  const navigationItems = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm border border-border rounded-full px-2 py-1">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full",
              activeSection === item.id
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

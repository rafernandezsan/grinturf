"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg z-50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#products"
              onClick={closeMenu}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Products
            </a>
            <a
              href="#benefits"
              onClick={closeMenu}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </a>
            <Button asChild className="w-full" onClick={closeMenu}>
              <a href="#contact">Get Free Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

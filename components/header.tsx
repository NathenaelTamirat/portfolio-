"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#future-projects", label: "Future Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      // Update header style based on scroll position
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id") || ""
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="#home" className="text-xl font-bold transition-colors hover:text-primary">
            Nathenael Tamirat
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === link.href.substring(1) && "text-primary",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.querySelector(link.href)
                  if (target) {
                    window.scrollTo({
                      top: target.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4 py-4 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-md",
                    activeSection === link.href.substring(1) && "text-primary bg-muted/30",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    const target = document.querySelector(link.href)
                    if (target) {
                      window.scrollTo({
                        top: target.getBoundingClientRect().top + window.scrollY - 80,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

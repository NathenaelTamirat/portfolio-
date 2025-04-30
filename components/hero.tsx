"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      const elements = containerRef.current.querySelectorAll(".parallax-element")
      elements.forEach((el) => {
        const speed = Number.parseFloat((el as HTMLElement).dataset.speed || "1")
        const xOffset = x * 20 * speed
        const yOffset = y * 20 * speed
        ;(el as HTMLElement).style.transform = translate(${xOffset}px, ${yOffset}px)
      })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 dark:from-primary/10 dark:to-background/0" />

      <div
        ref={containerRef}
        className="section-container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-primary">Nathenael Tamirat</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
            I'm a freshman software engineering student with a passion for technology and coding. Currently working as a
            freelancer while pursuing my education.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="rounded-full">
              <a href="#future-projects">My Interests</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl parallax-element"
              data-speed="0.5"
            />
            <div
              className="relative z-10 rounded-full overflow-hidden border-4 border-background shadow-xl parallax-element"
              data-speed="0.2"
            >
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Nathenael Tamirat"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl parallax-element"
              data-speed="1.5"
            />
            <div
              className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl parallax-element"
              data-speed="1.2"
            />
          </div>
        </motion.div>
      </div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
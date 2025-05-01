"use client"

import { useEffect, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const [isClicking, setIsClicking] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsHidden(false)

      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsHidden(true)

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add cursor-none class to body
    document.body.classList.add("cursor-none")

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.body.classList.remove("cursor-none")
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div
        className={`fixed pointer-events-none z-[100] rounded-full mix-blend-difference transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer cursor */}
        <div
          className={`absolute rounded-full bg-white transition-all duration-200 ${
            isPointer ? "w-10 h-10 opacity-30" : isClicking ? "w-6 h-6 opacity-50" : "w-8 h-8 opacity-30"
          }`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Inner cursor */}
        <div
          className={`absolute rounded-full bg-white transition-all duration-200 ${
            isPointer ? "w-2 h-2" : isClicking ? "w-2 h-2" : "w-1 h-1"
          }`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  )
}

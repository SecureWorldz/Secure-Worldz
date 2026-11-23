"use client"

import React, { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number // ms
  duration?: number // ms
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number // px
  threshold?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 600,
  direction = "up",
  distance = 28,
  threshold = 0.12,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [settled, setSettled] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = domRef.current
    if (!element) return

    // If IntersectionObserver is not available, default to visible
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(element)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, once])

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)"

    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`
      case "down":
        return `translate3d(0, -${distance}px, 0)`
      case "left":
        return `translate3d(${distance}px, 0, 0)`
      case "right":
        return `translate3d(-${distance}px, 0, 0)`
      case "none":
      default:
        return "translate3d(0, 0, 0)"
    }
  }

  return (
    <div
      ref={domRef}
      data-scroll-reveal
      className={className}
      onTransitionEnd={() => setSettled(true)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
        // Hint the compositor only while the reveal is actually in flight.
        willChange: isVisible && !settled ? "opacity, transform" : "auto",
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal

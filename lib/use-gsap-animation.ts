"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimationConfig {
  trigger?: string
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  once?: boolean
}

export function useGsapAnimation(callback: (ctx: gsap.Context) => void, config?: AnimationConfig) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx)
    }, containerRef)

    return () => ctx.revert()
  }, [callback])

  return containerRef
}

export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll("[data-scroll-reveal]")
    if (!elements) return

    elements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return containerRef
}

export function useCounterAnimation(targetNumber: number, duration: number = 2) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const obj = { value: 0 }

    gsap.to(obj, {
      value: targetNumber,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        if (elementRef.current) {
          elementRef.current.textContent = Math.floor(obj.value).toString()
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [targetNumber, duration])

  return elementRef
}

export function useParallaxAnimation(speed: number = 0.5) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          onUpdate: (self) => {
            if (containerRef.current) {
              gsap.set(containerRef.current, {
                y: self.getVelocity() * -0.05,
              })
            }
          },
        },
        ease: "none",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

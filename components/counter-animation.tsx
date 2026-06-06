"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface CounterAnimationProps {
  value: number
  className?: string
  duration?: number
}

export function CounterAnimation({ value, className = "", duration = 2 }: CounterAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const obj = { val: 0 }

    gsap.to(obj, {
      val: value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.floor(obj.val).toString()
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [value, duration])

  return <div ref={ref} className={className}>0</div>
}

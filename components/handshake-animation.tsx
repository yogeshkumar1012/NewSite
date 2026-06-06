"use client"

import { useEffect, useRef } from "react"

export function HandshakeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 300

    let animationFrame = 0
    let isShaking = false
    let shakeStart = 0

    const drawHandshake = (progress: number) => {
      ctx.fillStyle = "rgba(20, 20, 40, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Shake effect
      const shakeAmount = isShaking ? Math.sin(progress * Math.PI * 4) * 5 : 0
      ctx.translate(shakeAmount, 0)

      // Left hand (light blue)
      ctx.fillStyle = "#5dade2"
      ctx.beginPath()
      ctx.arc(80 + shakeAmount * 0.3, 150, 25, 0, Math.PI * 2)
      ctx.fill()

      // Left forearm
      ctx.strokeStyle = "#5dade2"
      ctx.lineWidth = 15
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(80 + shakeAmount * 0.3, 175)
      ctx.lineTo(120, 140 - progress * 30)
      ctx.stroke()

      // Right hand (darker blue)
      ctx.fillStyle = "#2874a6"
      ctx.beginPath()
      ctx.arc(220 - shakeAmount * 0.3, 150, 25, 0, Math.PI * 2)
      ctx.fill()

      // Right forearm
      ctx.strokeStyle = "#2874a6"
      ctx.beginPath()
      ctx.moveTo(220 - shakeAmount * 0.3, 175)
      ctx.lineTo(180, 140 - progress * 30)
      ctx.stroke()

      // Connection point (glowing)
      ctx.fillStyle = `rgba(93, 173, 226, ${0.3 + progress * 0.5})`
      ctx.beginPath()
      ctx.arc(150, 140 - progress * 30, 15 + progress * 5, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "#5dade2"
      ctx.beginPath()
      ctx.arc(150, 140 - progress * 30, 8, 0, Math.PI * 2)
      ctx.fill()

      // Deal locked text
      if (progress > 0.6) {
        ctx.fillStyle = `rgba(93, 173, 226, ${(progress - 0.6) * 2.5})`
        ctx.font = "bold 18px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText("Deal Locked!", 150, 260)
      }

      // Check mark
      if (progress > 0.7) {
        ctx.strokeStyle = `rgba(46, 204, 113, ${(progress - 0.7) * 3.3})`
        ctx.lineWidth = 3
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.beginPath()
        ctx.moveTo(245, 215)
        ctx.lineTo(255, 225)
        ctx.lineTo(270, 210)
        ctx.stroke()
      }

      ctx.translate(-shakeAmount, 0)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate cycle progress (0-1)
      const totalDuration = 3000 // 3 seconds
      const cycleTime = animationFrame % totalDuration
      let progress = cycleTime / totalDuration

      // Handshake phase (0-0.6)
      if (progress < 0.6) {
        drawHandshake(progress / 0.6)
      }
      // Shake phase (0.6-0.9)
      else if (progress < 0.9) {
        isShaking = true
        drawHandshake(1 + (progress - 0.6) / 0.3)
      }
      // Hold phase (0.9-1)
      else {
        isShaking = false
        drawHandshake(1)
      }

      animationFrame++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup is handled by component unmount
    }
  }, [])

  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        className="drop-shadow-lg"
        style={{ filter: "drop-shadow(0 10px 30px rgba(93, 173, 226, 0.2))" }}
      />
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

interface StairStep {
  label: string
  description: string
}

interface StaircaseProcessAnimationProps {
  steps: StairStep[]
}

export function StaircaseProcessAnimation({ steps }: StaircaseProcessAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 800
    canvas.height = 400

    let animationFrame = 0
    const stepDuration = 500 // ms per frame of climbing
    const pauseDuration = 4000 // ms to pause at each step
    const totalFrames = steps.length * (stepDuration + pauseDuration)

    const drawStaircase = (progress: number) => {
      // Clear with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(20, 20, 40, 0.02)")
      gradient.addColorStop(1, "rgba(93, 173, 226, 0.05)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const stairWidth = 120
      const stairHeight = 60
      const startX = 50
      const startY = 320

      // Draw stairs
      ctx.strokeStyle = "rgba(93, 173, 226, 0.3)"
      ctx.lineWidth = 2
      ctx.fillStyle = "rgba(93, 173, 226, 0.05)"

      for (let i = 0; i < steps.length; i++) {
        const x = startX + i * stairWidth
        const y = startY - i * stairHeight

        // Draw stair step
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + stairWidth, y)
        ctx.lineTo(x + stairWidth, y + 10)
        ctx.lineTo(x, y + 10)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        // Draw vertical part
        ctx.beginPath()
        ctx.moveTo(x + stairWidth, y)
        ctx.lineTo(x + stairWidth, y + stairHeight)
        ctx.stroke()

        // Draw step number/label
        ctx.fillStyle = "rgba(93, 173, 226, 0.5)"
        ctx.font = "bold 14px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(`${i + 1}`, x + stairWidth / 2, y - 10)
      }

      // Draw character climbing
      const currentStepIndex = Math.floor(progress * steps.length) % steps.length
      const stepProgress = (progress * steps.length) % 1

      // Determine if climbing or pausing
      const totalStepTime = stepDuration + pauseDuration
      const stepPosition = (animationFrame % totalFrames) % totalStepTime
      const isClimbing = stepPosition < stepDuration
      const climbProgress = isClimbing ? stepPosition / stepDuration : 1

      const charX = startX + currentStepIndex * stairWidth + stairWidth / 2 + (climbProgress - 0.5) * 40
      const charY = startY - currentStepIndex * stairHeight - climbProgress * stairHeight - 30

      // Draw character (simple figure)
      ctx.fillStyle = "#5dade2"

      // Head
      ctx.beginPath()
      ctx.arc(charX, charY, 8, 0, Math.PI * 2)
      ctx.fill()

      // Body
      ctx.fillRect(charX - 4, charY + 8, 8, 15)

      // Arms
      const armSwing = Math.sin(climbProgress * Math.PI) * 8
      ctx.beginPath()
      ctx.moveTo(charX, charY + 10)
      ctx.lineTo(charX - 10 + armSwing, charY + 8)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(charX, charY + 10)
      ctx.lineTo(charX + 10 - armSwing, charY + 8)
      ctx.stroke()

      // Legs
      const legSwing = Math.sin(climbProgress * Math.PI) * 5
      ctx.lineWidth = 3
      ctx.lineCap = "round"
      ctx.strokeStyle = "#5dade2"
      ctx.beginPath()
      ctx.moveTo(charX - 2, charY + 23)
      ctx.lineTo(charX - 2 - legSwing, charY + 35)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(charX + 2, charY + 23)
      ctx.lineTo(charX + 2 + legSwing, charY + 35)
      ctx.stroke()

      // Trophy at top
      if (currentStepIndex === steps.length - 1 && climbProgress > 0.7) {
        const trophyGlow = Math.sin((animationFrame + currentStepIndex * 200) * 0.02) * 3 + 3
        ctx.fillStyle = `rgba(255, 215, 0, ${0.3 + (climbProgress - 0.7) * 1.5})`
        ctx.beginPath()
        ctx.arc(
          startX + (steps.length - 1) * stairWidth + stairWidth / 2,
          startY - (steps.length - 1) * stairHeight - 80,
          20 + trophyGlow,
          0,
          Math.PI * 2
        )
        ctx.fill()

        // Trophy shape
        ctx.fillStyle = "rgba(255, 215, 0, 0.8)"
        const trophyX = startX + (steps.length - 1) * stairWidth + stairWidth / 2
        const trophyY = startY - (steps.length - 1) * stairHeight - 80

        // Cup
        ctx.beginPath()
        ctx.ellipse(trophyX, trophyY, 10, 12, 0, 0, Math.PI * 2)
        ctx.fill()

        // Handles
        ctx.strokeStyle = "rgba(255, 215, 0, 0.8)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(trophyX - 12, trophyY, 5, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(trophyX + 12, trophyY, 5, 0, Math.PI * 2)
        ctx.stroke()

        // Stand
        ctx.fillRect(trophyX - 8, trophyY + 12, 16, 4)
      }

      // Update current step display
      setCurrentStep(currentStepIndex)
    }

    const animate = () => {
      const progress = (animationFrame % totalFrames) / totalFrames
      drawStaircase(progress)

      animationFrame++
      requestAnimationFrame(animate)
    }

    animate()
  }, [steps])

  return (
    <div className="space-y-6">
      <canvas
        ref={canvasRef}
        className="w-full border border-border rounded-lg"
        style={{
          backgroundColor: "rgba(20, 20, 40, 0.02)",
          maxHeight: "400px",
        }}
      />
      {steps[currentStep] && (
        <div className="text-center p-4 rounded-lg bg-card border border-border animate-in fade-in duration-300">
          <h3 className="font-heading font-semibold text-primary mb-2">
            Step {currentStep + 1}: {steps[currentStep].label}
          </h3>
          <p className="text-sm text-muted-foreground">{steps[currentStep].description}</p>
        </div>
      )}
    </div>
  )
}

'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  label: string
  radius: number
}

export function GlobalMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const timeRef = useRef<number>(0)

  const nodes: Node[] = [
    { x: 0.2, y: 0.3, label: 'North America', radius: 8 },
    { x: 0.35, y: 0.5, label: 'South America', radius: 6 },
    { x: 0.5, y: 0.25, label: 'Europe', radius: 9 },
    { x: 0.65, y: 0.4, label: 'Africa', radius: 7 },
    { x: 0.7, y: 0.2, label: 'Middle East', radius: 5 },
    { x: 0.8, y: 0.35, label: 'Asia', radius: 10 },
    { x: 0.85, y: 0.6, label: 'Australia', radius: 6 },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const time = timeRef.current

      // Clear canvas with semi-transparent dark background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      ctx.fillRect(0, 0, w, h)

      // Draw grid
      ctx.strokeStyle = 'rgba(100, 150, 200, 0.05)'
      ctx.lineWidth = 1
      for (let i = 0; i <= 10; i++) {
        const x = (w / 10) * i
        const y = (h / 10) * i
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Draw world map outline (simplified)
      ctx.strokeStyle = 'rgba(100, 150, 200, 0.15)'
      ctx.lineWidth = 2
      drawWorldOutline(ctx, w, h)

      // Draw connections between nodes with waves
      ctx.strokeStyle = 'rgba(100, 150, 200, 0.2)'
      ctx.lineWidth = 1.5
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i]
          const n2 = nodes[j]
          const x1 = n1.x * w
          const y1 = n1.y * h
          const x2 = n2.x * w
          const y2 = n2.y * h

          // Calculate distance
          const dx = x2 - x1
          const dy = y2 - y1
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < w * 0.6) {
            // Draw animated wave line
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()

            // Add pulsing dots on connections
            const dotProgress = (time * 0.5 + (i + j) * 50) % 100
            const dotX = x1 + (dx * dotProgress) / 100
            const dotY = y1 + (dy * dotProgress) / 100
            const dotSize = 2 * Math.sin((time * 0.03 + i * j) % Math.PI)
            ctx.fillStyle = `rgba(100, 150, 255, ${0.3 + dotSize * 0.2})`
            ctx.beginPath()
            ctx.arc(dotX, dotY, 2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Draw nodes with glow effect
      nodes.forEach((node, idx) => {
        const x = node.x * w
        const y = node.y * h

        // Glow effect
        const glowSize = node.radius + Math.sin(time * 0.02 + idx) * 4 + 6
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize)
        glowGradient.addColorStop(0, 'rgba(100, 150, 255, 0.4)')
        glowGradient.addColorStop(0.5, 'rgba(100, 150, 255, 0.1)')
        glowGradient.addColorStop(1, 'rgba(100, 150, 255, 0)')
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(x, y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Core node
        const coreGradient = ctx.createRadialGradient(x - 2, y - 2, 0, x, y, node.radius)
        coreGradient.addColorStop(0, 'rgba(150, 200, 255, 1)')
        coreGradient.addColorStop(1, 'rgba(80, 140, 255, 1)')
        ctx.fillStyle = coreGradient
        ctx.beginPath()
        ctx.arc(x, y, node.radius, 0, Math.PI * 2)
        ctx.fill()

        // Outer ring
        ctx.strokeStyle = 'rgba(100, 150, 255, 0.6)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(x, y, node.radius + 3, 0, Math.PI * 2)
        ctx.stroke()
      })

      timeRef.current += 1
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <canvas
        ref={canvasRef}
        className="w-full h-full min-h-96"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 to-transparent opacity-40" />
    </div>
  )
}

function drawWorldOutline(ctx: CanvasRenderingContext2D, w: number, h: number) {
  // Simplified world map as paths
  // North America
  ctx.beginPath()
  ctx.moveTo(w * 0.15, h * 0.2)
  ctx.lineTo(w * 0.25, h * 0.15)
  ctx.lineTo(w * 0.28, h * 0.4)
  ctx.lineTo(w * 0.2, h * 0.45)
  ctx.closePath()
  ctx.stroke()

  // South America
  ctx.beginPath()
  ctx.moveTo(w * 0.25, h * 0.45)
  ctx.lineTo(w * 0.35, h * 0.42)
  ctx.lineTo(w * 0.38, h * 0.7)
  ctx.lineTo(w * 0.32, h * 0.72)
  ctx.closePath()
  ctx.stroke()

  // Europe
  ctx.beginPath()
  ctx.moveTo(w * 0.45, h * 0.15)
  ctx.lineTo(w * 0.55, h * 0.12)
  ctx.lineTo(w * 0.58, h * 0.35)
  ctx.lineTo(w * 0.48, h * 0.38)
  ctx.closePath()
  ctx.stroke()

  // Africa
  ctx.beginPath()
  ctx.moveTo(w * 0.48, h * 0.35)
  ctx.lineTo(w * 0.62, h * 0.32)
  ctx.lineTo(w * 0.65, h * 0.7)
  ctx.lineTo(w * 0.5, h * 0.72)
  ctx.closePath()
  ctx.stroke()

  // Asia
  ctx.beginPath()
  ctx.moveTo(w * 0.6, h * 0.15)
  ctx.lineTo(w * 0.9, h * 0.25)
  ctx.lineTo(w * 0.88, h * 0.6)
  ctx.lineTo(w * 0.65, h * 0.65)
  ctx.closePath()
  ctx.stroke()

  // Australia
  ctx.beginPath()
  ctx.moveTo(w * 0.8, h * 0.55)
  ctx.lineTo(w * 0.88, h * 0.58)
  ctx.lineTo(w * 0.86, h * 0.72)
  ctx.lineTo(w * 0.78, h * 0.7)
  ctx.closePath()
  ctx.stroke()
}

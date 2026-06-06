"use client"

import { useEffect, useRef } from "react"

interface ServiceCardAnimationProps {
  type: "web" | "mobile" | "design" | "software" | "ai" | "cloud"
}

export function ServiceCardAnimation({ type }: ServiceCardAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 280
    canvas.height = 200

    let animationFrame = 0

    const drawWebAnimation = () => {
      // Grid pattern with floating dots
      ctx.strokeStyle = "rgba(93, 173, 226, 0.2)"
      ctx.lineWidth = 1
      const gridSize = 30
      for (let i = 0; i < canvas.width; i += gridSize) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i < canvas.height; i += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Animated nodes
      const nodes = [
        { x: 50, y: 50 },
        { x: 230, y: 50 },
        { x: 140, y: 100 },
        { x: 50, y: 150 },
        { x: 230, y: 150 },
      ]

      nodes.forEach((node, i) => {
        const offset = Math.sin((animationFrame + i * 500) * 0.005) * 5
        ctx.fillStyle = "#5dade2"
        ctx.beginPath()
        ctx.arc(node.x, node.y + offset, 5, 0, Math.PI * 2)
        ctx.fill()
      })

      // Connection lines
      ctx.strokeStyle = "rgba(93, 173, 226, 0.4)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(50, 50)
      ctx.lineTo(140, 100)
      ctx.lineTo(230, 50)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(140, 100)
      ctx.lineTo(50, 150)
      ctx.lineTo(230, 150)
      ctx.stroke()
    }

    const drawMobileAnimation = () => {
      // Phone frame
      ctx.strokeStyle = "rgba(93, 173, 226, 0.5)"
      ctx.lineWidth = 3
      ctx.roundRect(100, 30, 80, 140, 8)
      ctx.stroke()

      // Screen content
      ctx.fillStyle = "rgba(93, 173, 226, 0.1)"
      ctx.roundRect(105, 40, 70, 120, 6)
      ctx.fill()

      // Animated bars (loading/content)
      const barCount = 4
      for (let i = 0; i < barCount; i++) {
        const width = 40 + Math.sin((animationFrame + i * 300) * 0.01) * 15
        ctx.fillStyle = `rgba(93, 173, 226, ${0.4 + Math.sin((animationFrame + i * 300) * 0.01) * 0.3})`
        ctx.fillRect(110, 50 + i * 20, width, 8)
      }

      // Home button
      ctx.fillStyle = "rgba(93, 173, 226, 0.3)"
      ctx.beginPath()
      ctx.arc(140, 165, 5, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawDesignAnimation = () => {
      // Palette
      ctx.fillStyle = "rgba(93, 173, 226, 0.1)"
      ctx.beginPath()
      ctx.ellipse(140, 100, 50, 40, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = "rgba(93, 173, 226, 0.4)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Color swatches
      const colors = ["#5dade2", "#2874a6", "#aed6f1", "#d6eaf8"]
      const positions = [
        { x: 100, y: 80 },
        { x: 180, y: 80 },
        { x: 100, y: 120 },
        { x: 180, y: 120 },
      ]

      positions.forEach((pos, i) => {
        const scale = 1 + Math.sin((animationFrame + i * 400) * 0.01) * 0.2
        ctx.fillStyle = colors[i]
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 12 * scale, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawSoftwareAnimation = () => {
      // Database cylinder
      ctx.strokeStyle = "rgba(93, 173, 226, 0.4)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.ellipse(90, 50, 25, 12, 0, 0, Math.PI * 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(65, 50)
      ctx.lineTo(65, 100)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(115, 50)
      ctx.lineTo(115, 100)
      ctx.stroke()

      ctx.beginPath()
      ctx.ellipse(90, 100, 25, 12, 0, 0, Math.PI * 2)
      ctx.stroke()

      // Data flow arrows
      ctx.fillStyle = "#5dade2"
      for (let i = 0; i < 3; i++) {
        const y = 60 + i * 15 + Math.sin((animationFrame - i * 300) * 0.01) * 10
        ctx.beginPath()
        ctx.moveTo(130, y)
        ctx.lineTo(140, y)
        ctx.lineTo(135, y - 5)
        ctx.moveTo(140, y)
        ctx.lineTo(135, y + 5)
        ctx.stroke()
      }

      // Target
      ctx.strokeStyle = "rgba(93, 173, 226, 0.4)"
      ctx.beginPath()
      ctx.arc(200, 75, 20, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(200, 75, 12, 0, Math.PI * 2)
      ctx.stroke()

      ctx.fillStyle = "#5dade2"
      ctx.beginPath()
      ctx.arc(200, 75, 5, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawAIAnimation = () => {
      // Neural network
      const nodes = [
        { x: 70, y: 50 },
        { x: 70, y: 100 },
        { x: 70, y: 150 },
        { x: 140, y: 75 },
        { x: 140, y: 125 },
        { x: 210, y: 100 },
      ]

      // Draw connections
      ctx.strokeStyle = "rgba(93, 173, 226, 0.3)"
      ctx.lineWidth = 1
      nodes.slice(0, 3).forEach((node) => {
        nodes.slice(3, 5).forEach((targetNode) => {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(targetNode.x, targetNode.y)
          ctx.stroke()
        })
      })

      nodes.slice(3, 5).forEach((node) => {
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(nodes[5].x, nodes[5].y)
        ctx.stroke()
      })

      // Draw nodes with pulsing effect
      nodes.forEach((node, i) => {
        const pulse = Math.sin((animationFrame + i * 200) * 0.01) * 0.5 + 1
        ctx.fillStyle = `rgba(93, 173, 226, ${pulse * 0.6})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 6 * pulse, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawCloudAnimation = () => {
      // Cloud shape
      ctx.strokeStyle = "rgba(93, 173, 226, 0.4)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(80, 80)
      ctx.quadraticCurveTo(70, 70, 85, 60)
      ctx.quadraticCurveTo(100, 50, 120, 60)
      ctx.quadraticCurveTo(140, 55, 160, 70)
      ctx.quadraticCurveTo(200, 60, 200, 85)
      ctx.quadraticCurveTo(210, 100, 195, 110)
      ctx.quadraticCurveTo(180, 120, 160, 115)
      ctx.quadraticCurveTo(120, 130, 80, 110)
      ctx.quadraticCurveTo(60, 100, 80, 80)
      ctx.stroke()

      ctx.fillStyle = "rgba(93, 173, 226, 0.05)"
      ctx.fill()

      // Upload arrows
      for (let i = 0; i < 3; i++) {
        const x = 100 + i * 50
        const offset = Math.sin((animationFrame - i * 300) * 0.01) * 15
        ctx.fillStyle = "#5dade2"
        ctx.beginPath()
        ctx.moveTo(x, 140 - offset)
        ctx.lineTo(x - 5, 130 - offset)
        ctx.lineTo(x + 5, 130 - offset)
        ctx.fill()
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(20, 20, 40, 0.01)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      switch (type) {
        case "web":
          drawWebAnimation()
          break
        case "mobile":
          drawMobileAnimation()
          break
        case "design":
          drawDesignAnimation()
          break
        case "software":
          drawSoftwareAnimation()
          break
        case "ai":
          drawAIAnimation()
          break
        case "cloud":
          drawCloudAnimation()
          break
      }

      animationFrame++
      requestAnimationFrame(animate)
    }

    animate()
  }, [type])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto"
      style={{ maxWidth: "280px", maxHeight: "200px" }}
    />
  )
}

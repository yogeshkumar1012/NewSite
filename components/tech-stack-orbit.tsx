"use client"

import { motion } from "motion/react"

const NODES = [
  { label: "Frontend", items: "React · Next.js · Angular", x: 18, y: 22 },
  { label: "Backend", items: "Node.js · Laravel · Python", x: 82, y: 24 },
  { label: "Mobile", items: "Flutter · React Native", x: 16, y: 76 },
  { label: "Cloud", items: "AWS · Azure · Google Cloud", x: 84, y: 74 },
]
const CENTER = { x: 50, y: 50 }

export function TechStackOrbit() {
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 62" preserveAspectRatio="none">
        {NODES.map((n, i) => {
          const x1 = (n.x / 100) * 100
          const y1 = (n.y / 100) * 62
          const x2 = (CENTER.x / 100) * 100
          const y2 = (CENTER.y / 100) * 62
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeOpacity="0.12" strokeWidth="0.3" />
              <motion.circle
                r="0.7"
                fill="oklch(0.62 0.2 262)"
                initial={{ cx: x1, cy: y1 }}
                animate={{ cx: [x1, x2], cy: [y1, y2] }}
                transition={{ duration: 2.2, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </g>
          )
        })}
      </svg>

      {/* Center core */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative flex size-24 items-center justify-center rounded-full bg-primary text-center shadow-[0_0_40px_oklch(0.48_0.22_264_/_0.6)] sm:size-28">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" style={{ animationDuration: "3s" }} />
          <span className="relative font-heading text-sm font-bold text-primary-foreground">
            Padmas
            <br />
            Core
          </span>
        </div>
      </motion.div>

      {NODES.map((n, i) => (
        <motion.div
          key={n.label}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center backdrop-blur-sm"
          >
            <div className="font-heading text-xs font-semibold text-white sm:text-sm">{n.label}</div>
            <div className="mt-0.5 text-[9px] text-white/50 sm:text-[10px]">{n.items}</div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

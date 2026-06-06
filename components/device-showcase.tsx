"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

function DashboardScreen() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-navy text-white">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <div className="size-2 rounded-full bg-primary" />
          <span className="text-[7px] font-semibold sm:text-[9px]">Padmas Analytics</span>
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-1.5 w-4 rounded-full bg-white/15" />
          ))}
        </div>
      </div>
      <div className="flex flex-1 gap-2 p-2.5">
        {/* sidebar */}
        <div className="hidden w-1/5 flex-col gap-1.5 sm:flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="h-2 rounded bg-white/10"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
        {/* main */}
        <div className="flex flex-1 flex-col gap-2">
          <div className="grid grid-cols-3 gap-1.5">
            {["100+", "95%", "10+"].map((v, i) => (
              <motion.div
                key={i}
                className="rounded-md bg-white/5 p-1.5"
                animate={{ y: [4, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15, repeat: Infinity, repeatDelay: 3.4, repeatType: "reverse" }}
              >
                <div className="text-[8px] font-bold text-primary sm:text-[11px]">{v}</div>
                <div className="mt-0.5 h-1 w-3/4 rounded bg-white/15" />
              </motion.div>
            ))}
          </div>
          {/* chart */}
          <div className="flex flex-1 items-end gap-1 rounded-md bg-white/5 p-2">
            {[40, 65, 50, 80, 60, 95, 70, 88].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-primary"
                initial={{ height: "10%" }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 1,
                  delay: i * 0.12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-primary to-navy p-2 text-white">
      <div className="mt-3 text-[7px] font-semibold opacity-80">Good morning</div>
      <div className="text-[10px] font-bold">Your Projects</div>
      <div className="mt-2 flex flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="rounded-lg bg-white/15 p-1.5 backdrop-blur"
            animate={{ x: [12, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.2, repeat: Infinity, repeatDelay: 3, repeatType: "reverse" }}
          >
            <div className="h-1 w-2/3 rounded bg-white/40" />
            <div className="mt-1 h-1 w-1/3 rounded bg-white/25" />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-auto mb-2 rounded-full bg-white py-1 text-center text-[7px] font-bold text-primary"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        Deploy
      </motion.div>
    </div>
  )
}

export function DeviceShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="relative flex items-end justify-center">
      {/* MacBook */}
      <div className="relative w-full max-w-xl" style={{ perspective: "1600px" }}>
        {/* Screen */}
        <motion.div
          className="relative z-10 origin-bottom"
          initial={{ rotateX: -88 }}
          animate={inView ? { rotateX: 0 } : {}}
          transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="rounded-t-xl border-[6px] border-b-0 border-zinc-800 bg-zinc-800 shadow-2xl">
            <div className="aspect-[16/10] overflow-hidden rounded-t-sm">
              <DashboardScreen />
            </div>
          </div>
        </motion.div>
        {/* Base / keyboard deck */}
        <div className="relative z-20 h-3 rounded-b-xl bg-gradient-to-b from-zinc-700 to-zinc-800 shadow-xl sm:h-4">
          <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-lg bg-zinc-900/80" />
        </div>
        <div className="mx-auto h-1 w-[88%] rounded-b-md bg-zinc-900/70" />
      </div>

      {/* iPhone */}
      <motion.div
        className="absolute -right-2 bottom-0 z-30 w-20 sm:-right-6 sm:w-28 md:w-32"
        initial={{ y: 60, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="overflow-hidden rounded-[1.4rem] border-[5px] border-zinc-900 bg-zinc-900 shadow-2xl"
        >
          <div className="relative aspect-[9/19] overflow-hidden rounded-[1rem]">
            <div className="absolute left-1/2 top-1 z-10 h-2 w-8 -translate-x-1/2 rounded-full bg-zinc-900" />
            <PhoneScreen />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

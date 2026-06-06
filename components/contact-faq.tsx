"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const FAQs = [
  {
    q: "What's your typical project timeline?",
    a: "Most projects take 3-6 months depending on scope and complexity. We provide a detailed timeline during the discovery phase.",
  },
  {
    q: "Do you offer retainer or ongoing support?",
    a: "Yes! We offer post-launch support, maintenance, and retainer partnerships for continuous improvements and feature development.",
  },
  {
    q: "How do you handle project communication?",
    a: "We assign a dedicated project manager who provides weekly updates, hosts sprint reviews, and is available for urgent issues.",
  },
  {
    q: "Can you work with our existing tech stack?",
    a: "Absolutely. We assess your current infrastructure and provide recommendations that align with your long-term goals.",
  },
  {
    q: "What's your pricing model?",
    a: "We typically work with fixed-scope projects or retainer arrangements. Pricing depends on project complexity, team size, and duration.",
  },
  {
    q: "How do I get started?",
    a: "Schedule a discovery call using the contact form, and we'll discuss your project, timeline, and budget to see if we're a good fit.",
  },
]

export function ContactFaq() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {FAQs.map((item, i) => (
        <motion.div
          key={i}
          layout
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full rounded-lg border border-border bg-card p-4 text-left transition-all hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-heading font-semibold text-foreground">{item.q}</p>
              <motion.div
                animate={{ rotate: expanded === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0"
              >
                <ChevronDown className="size-5 text-muted-foreground" />
              </motion.div>
            </div>

            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      ))}
    </div>
  )
}

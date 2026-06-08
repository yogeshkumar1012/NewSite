"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-primitives"
import { motion, AnimatePresence } from "motion/react"
import { CASE_STUDIES } from "@/lib/site-data"

const FILTERS = ["All", "Web Apps", "Mobile Apps", "SaaS", "AI Solutions", "E-commerce", "Enterprise"]

export function PortfolioGrid() {
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.categories.includes(filter))

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Case Studies"
          title="Selected work that moved the needle"
          subtitle="Real outcomes from real engagements across multiple industries."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={
                "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                (filter === ind
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/70 hover:text-foreground")
              }
            >
              {ind}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/portfolio/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={c.image || "/placeholder.svg"}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {c.industry}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">Overview:</strong> {c.challenge}
                    </p>
                    <div className="mt-4 flex-1 border-t border-border/60 pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {c.tech.map((t) => (
                          <span key={t} className="rounded bg-secondary px-2 py-0.5 text-[10px] font-semibold text-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      View case study
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { SectionHeading } from "@/components/section-primitives"
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/site-data"

export function InsightsList() {
  const [category, setCategory] = useState("All")
  const filtered = category === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Insights"
          title="Ideas, engineering & strategy"
          subtitle="Thought leadership from our team on the technologies shaping tomorrow."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={
                "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                (category === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/70 hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {featured && (
              <Link
                href={`/insights/${featured.slug}`}
                className="group mt-12 grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] md:aspect-auto">
                  <Image
                    src={featured.image || "/placeholder.svg"}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {featured.category}
                  </span>
                  <h3 className="font-heading mt-3 text-2xl font-bold text-foreground">{featured.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{featured.author}</span>
                    <span>•</span>
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </Link>
            )}

            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</span>
                    <h3 className="font-heading mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{p.date}</span>
                      <span>•</span>
                      <span>{p.readTime}</span>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

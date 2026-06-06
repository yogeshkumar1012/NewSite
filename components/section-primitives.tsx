import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: "center" | "left"
  invert?: boolean
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
            invert ? "bg-white/10 text-white" : "bg-accent text-accent-foreground",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-pretty leading-relaxed",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-20 text-navy-foreground sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 size-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-0 top-40 size-80 rounded-full bg-chart-2/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {eyebrow}
          </span>
        )}
        <h1 className="font-heading mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  )
}

export function CtaBand({
  title,
  subtitle,
  buttonLabel = "Book Free Consultation",
  buttonHref = "/contact",
}: {
  title: string
  subtitle?: string
  buttonLabel?: string
  buttonHref?: string
}) {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="relative">
          <h2 className="font-heading text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/80">{subtitle}</p>}
          <Link
            href={buttonHref}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-[1.03]"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

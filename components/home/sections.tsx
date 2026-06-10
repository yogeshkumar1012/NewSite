"use client"

import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import {
  ArrowRight,
  Globe,
  Smartphone,
  Palette,
  Code2,
  Sparkles,
  Cloud,
  ShieldCheck,
  Users,
  MessageSquare,
  UserCog,
  Layers,
  Wrench,
  Search,
  PenTool,
  Rocket,
  LifeBuoy,
  Star,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  GraduationCap,
  Plane,
  Home,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-primitives"
import { TechStackOrbit } from "@/components/tech-stack-orbit"
import { SERVICES, CASE_STUDIES, PROCESS, TESTIMONIALS, BLOG_POSTS } from "@/lib/site-data"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const SERVICE_ICONS: Record<string, any> = {
  Globe,
  Smartphone,
  Palette,
  Code2,
  Sparkles,
  Cloud,
}
const PROCESS_ICONS: Record<string, any> = { Search, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy }

const STATIC_INDUSTRIES = [
  { name: "Healthcare", icon: HeartPulse, className: "col-span-2 md:col-span-2" },
  { name: "Fintech", icon: Landmark, className: "col-span-2 md:col-span-1" },
  { name: "Retail", icon: ShoppingCart, className: "col-span-2 md:col-span-1" },
  { name: "Industry 4.0", icon: Factory, className: "col-span-2 md:col-span-2" },
  { name: "EdTech", icon: GraduationCap, className: "col-span-2 md:col-span-1" },
  { name: "Logistics", icon: Plane, className: "col-span-2 md:col-span-2" },
  { name: "PropTech", icon: Home, className: "col-span-2 md:col-span-1" },
  { name: "Cybersecurity", icon: Shield, className: "col-span-2 md:col-span-2" },
  { name: "AI Solutions", icon: Sparkles, className: "col-span-2 md:col-span-2" },
  { name: "SaaS Startups", icon: Code2, className: "col-span-2 md:col-span-4" },
]

export function AboutSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
            About Padmas
          </span>
          <h2 className="font-heading mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Your digital transformation partner
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Padmas Technologies is a digital transformation partner helping businesses accelerate
            growth through custom software development, mobile applications, cloud solutions, AI
            integration, and enterprise-grade digital products.
          </p>
          <Button asChild variant="outline" className="mt-6 rounded-full">
            <Link href="/about">
              Learn More <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </Reveal>
        <Reveal delay={1}>
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
            </div>
            <div className="relative">
              <Sparkles className="size-8" />
              <h3 className="font-heading mt-6 text-2xl font-bold">Metric Driven Success</h3>
              <p className="mt-3 text-sm text-primary-foreground/80">
                We measure our work by your outcomes — faster releases, lower costs, and revenue
                that compounds.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="bg-muted/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Core Services"
          title="Engineering solutions for modern digital products"
          subtitle="From idea to launch, we cover the full product lifecycle."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.icon]
            return (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-heading mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Learn more <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            )
          })}
        </RevealGroup>
        <div className="mt-10 text-center">
          <Button asChild className="rounded-full">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function IndustriesSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Domain Expertise"
          title="Industries we serve"
          subtitle="Deep domain knowledge across regulated and fast-moving sectors."
        />

        <RevealGroup className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-3" stagger={0.05}>
          {STATIC_INDUSTRIES.map((ind) => {
            const Icon = ind.icon
            return (
              <RevealItem key={ind.name} className={ind.className}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#eff4ff] text-blue-700 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xl font-bold text-foreground tracking-tight mt-6">
                    {ind.name}
                  </span>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/industries">View All Industries</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const isMobile = window.innerWidth < 1024

      const startPoint = isMobile ? windowHeight * 0.95 : windowHeight * 0.8
      const endPoint = isMobile ? windowHeight * 0.05 : windowHeight * 0.2
      const currentPos = rect.top

      if (currentPos > startPoint) {
        setActiveIndex(-1)
      } else if (currentPos < endPoint) {
        setActiveIndex(PROCESS.length - 1)
      } else {
        const progress = (startPoint - currentPos) / (startPoint - endPoint)
        const targetIndex = Math.floor(progress * PROCESS.length)
        setActiveIndex(Math.min(targetIndex, PROCESS.length - 1))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-muted/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How We Work" title="Our development process" />
        <div ref={containerRef} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS.map((p, i) => {
            const Icon = PROCESS_ICONS[p.icon]
            const isActive = i <= activeIndex
            return (
              <div key={p.step} className="relative text-center group">
                <div
                  className={`mx-auto flex size-12 items-center justify-center rounded-full transition-all duration-500 scale-100 ${isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 ring-4 ring-primary/10"
                    : "bg-background border border-border text-muted-foreground"
                    }`}
                >
                  <Icon className="size-5" />
                </div>
                <div
                  className={`mt-3 text-xs font-bold transition-colors duration-500 ${isActive ? "text-primary" : "text-muted-foreground/60"
                    }`}
                >
                  STEP {i + 1}
                </div>
                <h3
                  className={`font-heading mt-1 text-base font-semibold transition-colors duration-500 ${isActive ? "text-foreground" : "text-muted-foreground/80"
                    }`}
                >
                  {p.step}
                </h3>
                <p
                  className={`mt-1 text-xs transition-colors duration-500 ${isActive ? "text-muted-foreground" : "text-muted-foreground/50"
                    }`}
                >
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export function WhyChooseSection() {
  const items = [
    { title: "Experienced Team", desc: "Senior engineers with deep delivery experience.", icon: Users },
    { title: "Agile Methodology", desc: "Iterative sprints with continuous feedback.", icon: Layers },
    { title: "Transparent Communication", desc: "Clear updates and honest timelines.", icon: MessageSquare },
    { title: "Dedicated Project Manager", desc: "A single point of contact throughout.", icon: UserCog },
    { title: "Scalable Architecture", desc: "Built to grow with your business.", icon: ShieldCheck },
    { title: "Post Launch Support", desc: "Maintenance and scaling after go-live.", icon: Wrench },
  ]
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Why Partner With Us" title="The Padmas advantage" />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <RevealItem key={it.title}>
              <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export function CaseStudiesSection() {
  return (
    <section className="bg-muted/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="Featured Work" title="Case studies that deliver results" />
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <RevealItem key={c.slug}>
              <Link
                href={`/portfolio/${c.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image || "/placeholder.svg"}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">{c.industry}</span>
                  <h3 className="font-heading mt-2 text-lg font-bold text-foreground">{c.title}</h3>
                  <div className="mt-4 space-y-2 text-xs border-t border-border/60 pt-4">
                    <p className="leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">Challenge:</strong> {c.challenge}
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">Solution:</strong> {c.solution}
                    </p>
                    <p className="leading-relaxed text-primary">
                      <strong className="text-foreground">Result:</strong> {c.result}
                    </p>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section className="px-6 py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Client Voices" title="What our partners say" />
        <Reveal className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-16 px-4"
            style={{
              "--swiper-theme-color": "var(--color-primary)",
              "--swiper-pagination-bullet-inactive-color": "var(--color-muted-foreground)",
              "--swiper-pagination-bullet-inactive-opacity": "0.3",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            } as React.CSSProperties}
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="h-auto py-4">
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const rating = t.rating || 5
                      return (
                        <Star
                          key={i}
                          className={`size-4 ${i < rating ? "fill-current" : "text-muted-foreground/30"
                            }`}
                        />
                      )
                    })}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <div className="font-heading text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}

export function TechStackSection() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-24 text-navy-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading invert eyebrow="Modern Tech Stack" title="Powered by best-in-class technology" />
        <div className="mt-16">
          <TechStackOrbit />
        </div>
      </div>
    </section>
  )
}

export function InsightsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="Insights" title="Latest from our team" />
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/insights">View All Posts</Link>
          </Button>
        </div>
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((p) => (
            <RevealItem key={p.slug}>
              <Link
                href={`/insights/${p.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</span>
                  <h3 className="font-heading mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
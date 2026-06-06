import Link from "next/link"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { SectionHeading } from "@/components/section-primitives"
import { TechStackOrbit } from "@/components/tech-stack-orbit"
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel"
import { HandshakeAnimation } from "@/components/handshake-animation"
import { ServiceCardAnimation } from "@/components/service-card-animation"
import { StaircaseProcessAnimation } from "@/components/staircase-process-animation"
import { SERVICES, INDUSTRIES, CASE_STUDIES, PROCESS, BLOG_POSTS } from "@/lib/site-data"

const SERVICE_ICONS: Record<string, any> = {
  Globe,
  Smartphone,
  Palette,
  Code2,
  Sparkles,
  Cloud,
}
const PROCESS_ICONS: Record<string, any> = { Search, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy }

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
            Padmas Technologies helps businesses accelerate growth through custom software
            development, mobile applications, cloud solutions, AI integration, and enterprise-grade
            digital products built to scale.
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
              <HandshakeAnimation />
              <h3 className="font-heading mt-6 text-2xl font-bold text-center">Deal Locked</h3>
              <p className="mt-3 text-sm text-primary-foreground/80 text-center">
                Long-term partnerships built on trust, transparency, and delivered results. Your success is our success.
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
          {SERVICES.map((s, idx) => {
            const Icon = SERVICE_ICONS[s.icon]
            const animationTypes = ["web", "mobile", "design", "software", "ai", "cloud"] as const
            const animationType = animationTypes[idx % 6]
            return (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="p-6 pb-0">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-heading mt-4 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  </div>
                  <div className="p-4 flex justify-center">
                    <ServiceCardAnimation type={animationType} />
                  </div>
                  <div className="px-6 pb-6">
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Learn more <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
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
  const industryItems = INDUSTRIES.map((ind, idx) => ({
    ...ind,
    size: idx % 4,
  }))

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Domain Expertise"
          title="Industries we serve"
          subtitle="Deep domain knowledge across regulated and fast-moving sectors."
        />
        <div className="mt-12 space-y-6">
          {/* Row 1: Variable widths */}
          <RevealGroup className="grid gap-6" style={{ gridTemplateColumns: "2.5fr 1.8fr 1fr 1.5fr" }} stagger={0.05}>
            {industryItems.slice(0, 4).map((ind) => (
              <RevealItem key={ind.name}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="relative font-heading text-lg font-semibold transition-colors group-hover:text-primary">{ind.name}</h3>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Row 2: Different variable widths */}
          <RevealGroup className="grid gap-6" style={{ gridTemplateColumns: "1.2fr 2.3fr 1.3fr 1.4fr" }} stagger={0.05}>
            {industryItems.slice(4, 8).map((ind) => (
              <RevealItem key={ind.name}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="relative font-heading text-lg font-semibold transition-colors group-hover:text-primary">{ind.name}</h3>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Row 3: Last items if exist */}
          {industryItems.length > 8 && (
            <RevealGroup className="grid gap-6" style={{ gridTemplateColumns: "1.5fr 1.8fr 2fr" }} stagger={0.05}>
              {industryItems.slice(8).map((ind) => (
                <RevealItem key={ind.name}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <h3 className="relative font-heading text-lg font-semibold transition-colors group-hover:text-primary">{ind.name}</h3>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/industries">View All Industries</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const processSteps = PROCESS.map((p) => ({
    label: p.step,
    description: p.desc,
  }))

  return (
    <section className="bg-muted/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How We Work" title="Our development process" subtitle="Your success is our goal, climbing every step together." />
        <div className="mt-14">
          <StaircaseProcessAnimation steps={processSteps} />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => {
            const Icon = PROCESS_ICONS[p.icon]
            return (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="flex gap-4 rounded-lg border border-border/50 bg-card/50 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="size-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-sm">{p.step}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
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
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/15 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <it.icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold transition-colors duration-300 group-hover:text-primary">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/90">{it.desc}</p>
                  </div>
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
                href={`/case-studies/${c.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
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
                  <h3 className="font-heading mt-2 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.result}</p>
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
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Client Voices" title="What our partners say" />
        <div className="mt-12">
          <TestimonialsCarousel />
        </div>
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

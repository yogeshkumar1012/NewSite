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
import { SERVICES, INDUSTRIES, CASE_STUDIES, PROCESS, TESTIMONIALS, BLOG_POSTS } from "@/lib/site-data"

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
        <RevealGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3" stagger={0.05}>
          {INDUSTRIES.map((ind) => (
            <RevealItem key={ind.name}>
              <div className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-accent">
                {ind.name}
              </div>
            </RevealItem>
          ))}
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
  return (
    <section className="bg-muted/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How We Work" title="Our development process" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS.map((p, i) => {
            const Icon = PROCESS_ICONS[p.icon]
            return (
              <Reveal key={p.step} delay={i}>
                <div className="relative text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <div className="mt-3 text-xs font-bold text-primary">STEP {i + 1}</div>
                  <h3 className="font-heading mt-1 text-base font-semibold">{p.step}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
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
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
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
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-heading text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
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

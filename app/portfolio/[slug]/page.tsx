import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { CASE_STUDIES } from "@/lib/site-data"

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) return { title: "Case Study | Padmas Technologies" }
  return { title: `${cs.title} | Padmas Technologies`, description: cs.result }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = CASE_STUDIES.find((c) => c.slug === slug)
  if (!cs) notFound()

  const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 2)

  const getFeedback = (slug: string) => {
    switch (slug) {
      case "legacy-migration-to-cloud":
        return { quote: "Padmas Technologies transformed our legacy system into a modern, cloud-native powerhouse. Their engineering discipline and strategic thinking were crucial to our success.", author: "Sarah Jenkins, CTO, Global Logistics" }
      case "telemedicine-platform":
        return { quote: "They built a HIPAA-compliant telehealth product that scaled seamlessly from day one. Excellent communication and stellar execution.", author: "David Chen, VP of Telehealth, MediCare Network" }
      case "ai-recommendation-engine":
        return { quote: "The AI recommendation engine they built directly increased our average order value by 35%. Communication was transparent from start to finish.", author: "Maya Rodriguez, VP Product, ShopVerse" }
      default:
        return { quote: "Outstanding engineering talent and a true product mindset. They are our go-to digital transformation partner.", author: "Product Owner" }
    }
  }

  const getClientOverview = (slug: string) => {
    switch (slug) {
      case "legacy-migration-to-cloud":
        return "Global Logistics Co. is a leading shipping and supply chain operator managing over 500 shipping hubs globally. They required a resilient system to sustain real-time dispatch calculations under growing shipment volumes."
      case "telemedicine-platform":
        return "MediCare Network is a healthcare provider system with 12 clinics and 500+ physicians. They needed a secure, low-latency videoconferencing platform to deliver remote clinical consultations to remote patients."
      case "ai-recommendation-engine":
        return "ShopVerse is a fast-growing consumer retail storefront serving millions of monthly active shoppers. They wanted to personalize product discovery to reduce bounce rates and increase conversion metrics."
      default:
        return "A digital partner focused on scaling operations and transforming user engagement through engineered solutions."
    }
  }

  const getProcessSteps = (slug: string) => {
    return [
      { step: "Phase 1: Discovery & Architecture Audit", desc: "We audited the existing codebase and telemetry logs to map data silos and structural dependencies." },
      { step: "Phase 2: Sprint Iteration & Dev", desc: "Collaborative sprint cycles building the core application modules under rigorous automated testing." },
      { step: "Phase 3: Deployment & Optimization", desc: "Staging, canary releases, and cost auditing to confirm optimal cloud and service performance." },
    ]
  }

  const feedback = getFeedback(slug)
  const clientOverview = getClientOverview(slug)
  const processSteps = getProcessSteps(slug)

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-36 pb-16 text-navy-foreground sm:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 size-72 rounded-full bg-primary/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" /> Back to Portfolio
          </Link>
          <span className="mt-6 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {cs.industry}
          </span>
          <h1 className="font-heading mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {cs.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">{cs.result}</p>
          <p className="mt-3 text-sm text-white/50">Client: {cs.client}</p>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6">
        <Reveal className="mx-auto -mt-10 max-w-5xl overflow-hidden rounded-2xl border border-border shadow-xl">
          <div className="relative aspect-[16/9]">
            <Image src={cs.image || "/placeholder.svg"} alt={cs.title} fill className="object-cover" priority />
          </div>
        </Reveal>
      </section>

      {/* Client Overview Section */}
      <section className="px-6 py-12 border-b border-border/60">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-xl font-bold text-foreground">Client Overview</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{clientOverview}</p>
        </div>
      </section>

      {/* Business Results Metrics */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-xl font-bold text-foreground mb-10">Business Results</h2>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <RevealItem key={m.label} className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="font-heading text-4xl font-bold text-primary">{m.value}</div>
                <div className="mt-2 text-sm text-muted-foreground font-semibold">{m.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-foreground">Problem Statement</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cs.challenge}</p>
          </Reveal>
          <Reveal delay={1} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-foreground">Solutions Delivered</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cs.solution}</p>
          </Reveal>
        </div>
        
        <Reveal className="mx-auto mt-8 max-w-5xl">
          <div className="rounded-2xl border border-border bg-secondary p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-foreground">Technologies Used</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.tech.map((t) => (
                <span key={t} className="rounded-full bg-card px-4 py-1.5 text-xs font-semibold text-foreground border border-border/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Development Process Section */}
      <section className="px-6 py-20 bg-secondary/35 border-t border-b border-border/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Development Process</h2>
          <p className="mt-2 text-sm text-muted-foreground">Our structured milestones deployed to deliver this project.</p>
          
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((p, i) => (
              <div key={p.step} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="font-heading mt-4 text-base font-bold text-foreground">{p.step}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Mockups */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Project Mockups & Screens</h2>
          <p className="mt-2 text-sm text-muted-foreground font-medium">High-fidelity UI mockups optimized for client deployment.</p>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg p-3">
              <div className="aspect-[16/10] rounded-xl bg-navy/90 p-5 flex flex-col justify-between text-white border border-white/5">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[10px] font-bold tracking-wider opacity-75">CONSOLE INTERFACE</span>
                  <div className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-red-500" />
                    <span className="size-1.5 rounded-full bg-yellow-500" />
                    <span className="size-1.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <span className="text-primary font-heading text-lg font-bold">Analytics Panel</span>
                  <span className="text-[10px] text-white/50 mt-1 max-w-[200px]">Real-time query telemetry and logging stream.</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg p-3">
              <div className="aspect-[16/10] rounded-xl bg-navy/90 p-5 flex flex-col justify-between text-white border border-white/5">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-[10px] font-bold tracking-wider opacity-75">MOBILE DASHBOARD</span>
                  <div className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-red-500" />
                    <span className="size-1.5 rounded-full bg-yellow-500" />
                    <span className="size-1.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <span className="text-chart-3 font-heading text-lg font-bold">Admin Panel</span>
                  <span className="text-[10px] text-white/50 mt-1 max-w-[200px]">Interactive KPIs, charts and scheduling widgets.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Feedback Testimonial */}
      <section className="px-6 py-20 bg-primary/5 border-t border-border/40">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Client Feedback</h2>
          <figure className="mt-8">
            <blockquote className="text-lg italic leading-relaxed text-foreground/90 font-medium">
              &ldquo;{feedback.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-border/40 pt-4">
              <div className="font-heading text-sm font-bold text-primary">{feedback.author.split(", ")[0]}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{feedback.author.split(", ").slice(1).join(", ")}</div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-secondary px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">More case studies</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/portfolio/${c.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={c.image || "/placeholder.svg"} alt={c.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{c.title}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <CtaBand title="Ready to write your success story?" />
      </Reveal>
    </main>
  )
}

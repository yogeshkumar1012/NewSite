import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, SectionHeading, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { Icon } from "@/components/icon"
import { SERVICES, PROCESS } from "@/lib/site-data"

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return { title: "Service | Padmas Technologies" }
  return {
    title: `${service.title} | Padmas Technologies`,
    description: service.summary,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <>
      <SiteNavbar />
      <main>
        <PageHero eyebrow={service.title} title={service.tagline} subtitle={service.summary}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Discuss Your Project <ArrowRight className="size-4" />
          </Link>
        </PageHero>

        {/* What we offer */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              align="left"
              eyebrow="What We Offer"
              title="Capabilities included in this service"
            />
            <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.offerings.map((o) => (
                <RevealItem key={o}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-6">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      <Icon name={service.icon} className="size-5" />
                    </span>
                    <p className="font-medium text-foreground">{o}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Challenges + Solutions */}
        <section className="bg-secondary px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground">Challenges We Solve</h3>
              <ul className="mt-6 space-y-4">
                {service.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-destructive/70" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={1} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground">Solutions We Deliver</h3>
              <ul className="mt-6 space-y-4">
                {service.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-foreground">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Process" title="How we deliver this service" />
            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS.map((p, i) => (
                <RevealItem key={p.step}>
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">{p.step}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Tech stack */}
        <section className="bg-navy px-6 py-20 text-navy-foreground">
          <div className="mx-auto max-w-6xl">
            <SectionHeading invert eyebrow="Technology" title="Tools & technologies we use" />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <CtaBand
            title={`Ready to start your ${service.title} project?`}
            subtitle="Let's turn your idea into a production-ready product."
          />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}

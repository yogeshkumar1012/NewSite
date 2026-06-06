import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
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

  return (
    <>
      <SiteNavbar />
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

        {/* Image */}
        <section className="px-6">
          <Reveal className="mx-auto -mt-10 max-w-5xl overflow-hidden rounded-2xl border border-border shadow-xl">
            <div className="relative aspect-[16/9]">
              <Image src={cs.image || "/placeholder.svg"} alt={cs.title} fill className="object-cover" priority />
            </div>
          </Reveal>
        </section>

        {/* Metrics */}
        <section className="px-6 py-16">
          <RevealGroup className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <RevealItem key={m.label} className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="font-heading text-4xl font-bold text-primary">{m.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Narrative */}
        <section className="px-6 pb-16">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Reveal className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground">The Challenge</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{cs.challenge}</p>
            </Reveal>
            <Reveal delay={1} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground">Our Solution</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{cs.solution}</p>
            </Reveal>
          </div>
          <Reveal className="mx-auto mt-8 max-w-5xl">
            <div className="rounded-2xl border border-border bg-secondary p-8">
              <h2 className="font-heading text-xl font-semibold text-foreground">Technologies Used</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.tech.map((t) => (
                  <span key={t} className="rounded-full bg-card px-4 py-1.5 text-sm font-medium text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Related */}
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
      <SiteFooter />
    </>
  )
}

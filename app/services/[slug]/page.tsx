import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { PageHero, SectionHeading, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { Icon } from "@/components/icon"
import { SERVICES, PROCESS, CASE_STUDIES } from "@/lib/site-data"

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

  const getFaqs = (slug: string) => {
    switch (slug) {
      case "web-development":
        return [
          { q: "What web frameworks do you specialize in?", a: "We specialize in React, Next.js, Node.js, and other modern TypeScript frameworks." },
          { q: "How do you handle page performance?", a: "We prioritize static rendering (SSG), image optimization, asset minification, and caching strategies to ensure lighthouse scores close to 100." }
        ]
      case "mobile-development":
        return [
          { q: "Do you build native or cross-platform apps?", a: "We build both! We use Flutter and React Native for efficient cross-platform delivery, and native Swift/Kotlin for platform-specific capabilities." },
          { q: "Will you help with App Store submissions?", a: "Yes, we handle the entire submission, certificate provisioning, and metadata review process for both iOS and Android stores." }
        ]
      case "ui-ux-design":
        return [
          { q: "What design tools do you use?", a: "We rely on Figma for UI design and component library structures, and Framer/ProtoPie for complex micro-interactions." },
          { q: "Do you deliver code ready component libraries?", a: "Yes, we structure designs with strict Figma variables and tokens that map directly to Tailwind CSS or component files." }
        ]
      default:
        return [
          { q: "How is communications managed?", a: "We assign a dedicated project manager and organize bi-weekly sprint reviews alongside a shared Slack workspace." },
          { q: "What pricing models do you support?", a: "We offer monthly agile sprints, dedicated developer squads, and fixed-price milestones." }
        ]
    }
  }

  const faqs = getFaqs(slug)
  const relatedCaseStudies = CASE_STUDIES.filter((cs) =>
    cs.tech.some((t) => (service.tech as readonly string[]).includes(t))
  )

  return (
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

        {/* Related Case Studies Section */}
        {relatedCaseStudies.length > 0 && (
          <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <SectionHeading
                eyebrow="Case Studies"
                title={`Our ${service.title} Work in Action`}
                subtitle="Real-world results delivered to our partners through engineering rigor."
              />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                {relatedCaseStudies.map((c) => (
                  <div key={c.slug} className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
                    <div className="relative aspect-[16/10] w-full">
                      <img src={c.image} alt={c.title} className="object-cover h-full w-full" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-lg font-bold text-foreground">{c.title}</h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.challenge}</p>
                      <Link href={`/portfolio/${c.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Read case study <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        <section className="bg-secondary px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              subtitle={`Common queries regarding our ${service.title} consulting process.`}
            />
            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-base font-bold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <CtaBand
            title={`Ready to start your ${service.title} project?`}
            subtitle="Let's turn your idea into a production-ready product."
            buttonLabel="Get Free Consultation"
          />
        </Reveal>
      </main>
  )
}

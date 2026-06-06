import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, SectionHeading, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { Icon } from "@/components/icon"
import { SERVICES, PROCESS } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Services | Padmas Technologies",
  description:
    "End-to-end software engineering services: web, mobile, UI/UX, custom software, AI & automation, and cloud & DevOps.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="What We Do"
          title="Engineering Services Built for Scale"
          subtitle="From first prototype to enterprise platform, we design, build, and operate digital products that move your business forward."
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Start Your Project <ArrowRight className="size-4" />
          </Link>
        </PageHero>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Core Services"
              title="Six practices, one delivery team"
              subtitle="Pick a single capability or combine them into a full product engagement."
            />
            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <RevealItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon name={s.icon} className="size-6" />
                    </span>
                    <h3 className="font-heading mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <section className="bg-secondary px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="How We Work"
              title="Our Strategic Process"
              subtitle="A transparent, agile workflow that keeps you in the loop from discovery to scale."
            />
            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS.map((p, i) => (
                <RevealItem key={p.step}>
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon name={p.icon} className="size-4 text-primary" />
                        <h3 className="font-heading font-semibold text-foreground">{p.step}</h3>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <Reveal>
          <CtaBand
            title="Not sure where to start?"
            subtitle="Book a free consultation and we'll help you scope the right engagement."
          />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}

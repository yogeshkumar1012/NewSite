import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, SectionHeading, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { TechStackOrbit } from "@/components/tech-stack-orbit"
import { TECH_STACK } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Technologies | Padmas Technologies",
  description:
    "Our modern technology stack across frontend, backend, mobile, database, cloud, and AI.",
}

export default function TechnologiesPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="Our Tech Stack"
          title="Modern Technology, Engineered to Last"
          subtitle="We choose proven, scalable technologies and stay on the cutting edge so your product is fast today and maintainable tomorrow."
        />

        <section className="bg-navy px-6 py-16 text-navy-foreground">
          <div className="mx-auto max-w-5xl">
            <SectionHeading invert eyebrow="Connected" title="Padmas Core" subtitle="A unified engineering stack where every layer talks to the next." />
            <div className="mt-10">
              <TechStackOrbit />
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Stack"
              title="Technologies by category"
              subtitle="Every category is backed by senior engineers with production experience."
            />
            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(TECH_STACK).map(([category, items]) => (
                <RevealItem key={category}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{category}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        <Reveal>
          <CtaBand
            title="Have a stack preference?"
            subtitle="We're flexible. Tell us your constraints and we'll recommend the right tools."
          />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}

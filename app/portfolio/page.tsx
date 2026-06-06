import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { CounterAnimation } from "@/components/counter-animation"
import { STATS } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Portfolio | Padmas Technologies",
  description: "Explore our case studies and the measurable outcomes we've delivered for clients.",
}

export default function PortfolioPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="Our Work"
          title="Outcomes, Not Just Output"
          subtitle="We measure success by the impact we create. Explore a selection of projects and the results they delivered."
        />

        <section className="border-b border-border bg-secondary px-6 py-12">
          <RevealGroup className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <CounterAnimation value={parseInt(s.value)} className="font-heading text-3xl font-bold text-primary sm:text-4xl" />
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <PortfolioGrid />

        <Reveal>
          <CtaBand
            title="Want to be our next success story?"
            subtitle="Let's build something measurable together."
          />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}

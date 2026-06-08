import type { Metadata } from "next"
import { PageHero, SectionHeading, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { Icon } from "@/components/icon"
import { INDUSTRIES } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Industries | Padmas Technologies",
  description:
    "Domain expertise across healthcare, fintech, e-commerce, logistics, education, and more.",
}

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Domain Expertise"
        title="Industries We Serve"
        subtitle="We bring deep domain knowledge to every engagement, pairing engineering excellence with an understanding of your industry's real challenges."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Sectors"
            title="Specialized solutions for every domain"
            subtitle="Each industry has unique constraints. We tailor architecture, compliance, and UX to fit."
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <RevealItem key={ind.name}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon name={ind.icon} className="size-6" />
                  </span>
                  <h3 className="font-heading mt-5 text-lg font-semibold text-foreground">{ind.name}</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-foreground/80">Challenge</p>
                      <p className="mt-1 leading-relaxed text-muted-foreground">{ind.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Our Solution</p>
                      <p className="mt-1 leading-relaxed text-muted-foreground">{ind.solution}</p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Reveal>
        <CtaBand
          title="Don't see your industry?"
          subtitle="We adapt fast. Tell us about your domain and we'll show you how we can help."
          buttonLabel="Talk to an Expert"
        />
      </Reveal>
    </main>
  )
}

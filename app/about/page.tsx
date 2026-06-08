import type { Metadata } from "next"
import { Lightbulb, Eye, Award, TrendingUp } from "lucide-react"
import { PageHero, SectionHeading, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { VALUES, TIMELINE, STATS } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About Us — Padmas Technologies",
  description: "Learn about Padmas Technologies — our story, mission, values, and the team behind the work.",
}

const VALUE_ICONS: Record<string, any> = { Lightbulb, Eye, Award, TrendingUp }

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Padmas"
        title="About Padmas Technologies"
        subtitle="We are a team of engineers, designers, and strategists obsessed with building software that moves businesses forward."
      />

      {/* Company story */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold">Our Story</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Padmas Technologies began in 2020 with a simple belief: great engineering should be
              accessible to every ambitious business. What started as a small team taking on bold
              projects has grown into a global digital partner.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-heading text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To help startups and enterprises accelerate growth through custom software, mobile,
              cloud, and AI — delivered with transparency and engineering rigor.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <h2 className="font-heading text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A world where every business, regardless of size, can ship world-class digital
              products that scale and delight their customers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What Drives Us" title="Our core values" />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = VALUE_ICONS[v.icon]
              return (
                <RevealItem key={v.title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-heading mt-4 text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>



      {/* Stats */}
      <section className="bg-navy px-6 py-16 text-navy-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-2 text-sm text-navy-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Our Journey" title="Company timeline" />
          <div className="relative mt-12 border-l border-border pl-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i}>
                <div className="relative pb-10 last:pb-0">
                  <div className="absolute -left-[2.4rem] flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div className="font-heading text-sm font-bold text-primary">{t.year}</div>
                  <h3 className="font-heading mt-1 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's Build Something Great Together" buttonLabel="Start a Conversation" />
    </main>
  )
}

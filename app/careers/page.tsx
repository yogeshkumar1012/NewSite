import { PageHero, SectionHeading, CtaBand } from "@/components/section-primitives"
import type { Metadata } from "next"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { POSITIONS } from "@/lib/site-data"
import { Briefcase, MapPin, Clock, Calendar, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Padmas Technologies",
  description: "Join Padmas Technologies - Explore open positions and see what it's like to build scalable digital products.",
}

const BENEFITS = [
  { title: "Remote Work", desc: "Work from anywhere in the world. We support fully remote set-ups.", icon: Briefcase },
  { title: "Flexible Hours", desc: "We focus on outcomes and deliverables, not time-clock punching.", icon: Clock },
  { title: "Learning Budget", desc: "Annual stipend for courses, books, and attending conferences.", icon: Calendar },
  { title: "Growth Opportunities", desc: "Fast-track career advancement as the agency continues to expand.", icon: CheckCircle2 },
]

const HIRING_PROCESS = [
  { step: "1. Apply", desc: "Submit your application and portfolio/GitHub profile." },
  { step: "2. Screening", desc: "A 30-minute introductory video call with our recruiter." },
  { step: "3. Technical Round", desc: "A practical live coding session or a small architecture discussion." },
  { step: "4. HR Round", desc: "Alignment check regarding values, compensation, and logistics." },
  { step: "5. Offer", desc: "Formal offer letter and virtual onboarding schedule." },
]

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Join Our Team"
        title="Join Padmas Technologies"
        subtitle="Work alongside elite engineers and designers to build cutting-edge web, mobile, and AI solutions for global clients."
      />

      {/* Benefits section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Benefits"
            title="Why you'll love working here"
            subtitle="We provide the tools, support, and flexibility you need to do your best work."
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <RevealItem key={b.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <b.icon className="size-5" />
                  </div>
                  <h3 className="font-heading mt-4 text-base font-bold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Process"
            title="Our Hiring Process"
            subtitle="We respect your time. Our process is transparent, fast-moving, and fully remote."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {HIRING_PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <div className="font-heading text-xs font-bold text-primary uppercase">Step {i + 1}</div>
                  <h3 className="font-heading mt-2 text-base font-bold text-foreground">{p.step.split(". ")[1]}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions list */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Openings"
            title="Open Positions"
            subtitle="Explore our active openings. If you don't see a match, apply anyway under general applications."
          />
          <div className="mt-12 space-y-4">
            {POSITIONS.map((pos, i) => (
              <Reveal key={pos.title} delay={i}>
                <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between transition-colors hover:border-primary/40">
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">{pos.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="size-3.5" /> {pos.dept}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" /> {pos.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" /> {pos.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="/contact?role=job"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow transition-transform hover:scale-[1.03]"
                  >
                    Apply Now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <CtaBand
          title="Don't see the right role?"
          subtitle="We are always looking for exceptional engineers, designers, and project managers."
          buttonLabel="Get in Touch"
        />
      </Reveal>
    </main>
  )
}

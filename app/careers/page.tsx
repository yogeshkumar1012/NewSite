import type { Metadata } from "next"
import { Heart, Zap, Compass, Users } from "lucide-react"
import { PageHero, SectionHeading, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Careers — Padmas Technologies",
  description: "Join the Padmas team. We're hiring talented engineers, designers, and leaders.",
}

const BENEFITS = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, fitness benefits, and mental wellness programs.",
  },
  {
    icon: Zap,
    title: "Learning & Growth",
    description: "Annual learning budget, conference attendance, and mentorship opportunities.",
  },
  {
    icon: Compass,
    title: "Flexible Work",
    description: "Work from home options, flexible hours, and 25+ days of paid time off.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Inclusive culture, regular team events, and a supportive engineering community.",
  },
]

const POSITIONS = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Lead backend and frontend development with Node.js, React, and cloud technologies.",
  },
  {
    title: "Product Designer",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Design user-centered solutions across web and mobile applications.",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain CI/CD pipelines, cloud infrastructure, and deployment systems.",
  },
  {
    title: "AI/ML Engineer",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Develop machine learning models and AI-powered features for client projects.",
  },
]

const HIRING_PROCESS = [
  {
    step: 1,
    title: "Application",
    description: "Submit your resume and tell us about your interest in joining Padmas.",
  },
  {
    step: 2,
    title: "Initial Chat",
    description: "Quick call with our hiring manager to discuss your background and expectations.",
  },
  {
    step: 3,
    title: "Technical Assessment",
    description: "Complete a practical assessment relevant to the role you're applying for.",
  },
  {
    step: 4,
    title: "Team Interview",
    description: "Meet with potential teammates and discuss projects and culture fit.",
  },
  {
    step: 5,
    title: "Offer & Onboarding",
    description: "Receive offer and start your journey with a comprehensive onboarding program.",
  },
]

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="We're Hiring"
        title="Build Your Career With Us"
        subtitle="Join a team of passionate engineers, designers, and builders working on impactful projects."
      />

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why Join Padmas"
            title="We believe in taking care of our team"
            subtitle="Great benefits, culture, and opportunities for growth."
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <RevealItem key={benefit.title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-heading mt-4 font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Current Openings" title="Join our growing team" />
          <RevealGroup className="mt-12 space-y-4">
            {POSITIONS.map((position, i) => (
              <RevealItem key={i}>
                <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground">{position.title}</h3>
                      <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                      <p className="mt-2 text-sm">{position.description}</p>
                    </div>
                    <Button asChild variant="outline" className="rounded-full" size="sm">
                      <Link href="#apply">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our Process" title="How we hire" subtitle="A transparent and fair process." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {HIRING_PROCESS.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative">
                  {i < HIRING_PROCESS.length - 1 && (
                    <div className="absolute -right-3 top-8 hidden h-px w-6 bg-border lg:block" />
                  )}
                  <div className="rounded-2xl border border-border bg-card p-6 text-center">
                    <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <h3 className="font-heading mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Ready to make an impact?"
        subtitle="Submit your application and let's chat about your next opportunity."
        buttonLabel="View All Positions"
        buttonHref="/careers"
      />
    </main>
  )
}

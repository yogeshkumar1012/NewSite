import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DeviceShowcase } from "@/components/device-showcase"
import { CompaniesCarousel } from "@/components/home/companies-carousel"
import { STATS } from "@/lib/site-data"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-20 size-96 rounded-full bg-chart-3/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
              Innovate. Build. Scale.
            </span>
            <h1 className="font-heading mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Transforming Ideas into{" "}
              <span className="text-gradient-blue">Scalable Digital Solutions</span>
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              We help startups, enterprises, and growing businesses build powerful web applications,
              mobile apps, AI solutions, and enterprise software.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pl-6">
            <DeviceShowcase />
          </div>
        </div>

        <div className="mt-16 border-t border-border py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            Trusted by teams at
          </p>
          <CompaniesCarousel />
        </div>
      </div>
    </section>
  )
}

import { PageHero } from "@/components/section-primitives"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Terms of Service | Padmas Technologies",
  description: "Read the Terms of Service for working with Padmas Technologies.",
}

export default function TermsPage() {
  const lastUpdated = "June 10, 2026"

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`Last updated: ${lastUpdated}. Please review the rules and guidelines governing our services.`}
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="prose dark:prose-invert max-w-none space-y-8 text-foreground/90">
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  By accessing our website at{" "}
                  <a href="https://padmas.tech" className="text-primary font-semibold hover:underline">
                    padmas.tech
                  </a>{" "}
                  or engaging Padmas Technologies for custom software, mobile, AI, or cloud development services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our website or hiring our agency.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  2. Professional Services & Contracts
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our services are offered on a contractual project-by-project or dedicated team retainer basis. Each engagement is governed by a distinct Master Services Agreement (MSA) and Statement of Work (SOW) detailing:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Project scope, milestones, and deliverable specifications.</li>
                  <li>Payment schedules, hourly/fixed rates, and billing structures.</li>
                  <li>Acceptance criteria, warranty phases, and maintenance provisions.</li>
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  In case of conflict between these generic Terms of Service and a signed MSA/SOW, the provisions of the MSA/SOW will take precedence.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  3. Intellectual Property Rights
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Unless explicitly specified otherwise in your SOW:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Client Ownership:</strong> Upon full clearance of all outstanding invoices, all custom source code, assets, and documentation created specifically for your project are fully assigned to the Client.
                  </li>
                  <li>
                    <strong>Agency Components:</strong> Padmas Technologies retains ownership of pre-existing tools, boilerplate templates, and proprietary components integrated into projects. You are granted an irrevocable, royalty-free license to use these components within the scope of your custom build.
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  4. User & Visitor Conduct
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  When browsing our website, submitting requests, or interacting with our developer environments, you agree not to:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Transmit malware, viruses, or run automated denial-of-service scripts.</li>
                  <li>Attempt unauthorized access to our production/staging servers or code repositories.</li>
                  <li>Impersonate any person or misrepresent your organization during consultation bookings.</li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  5. Limitation of Liability
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  In no event shall Padmas Technologies, its directors, or its staff be held liable for indirect, incidental, or consequential damages (including business disruption, loss of profit, or server downtime) arising out of the use or inability to use our website or services, even if notified of such possibilities.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  6. Amendments to Terms
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We reserve the right to modify these Terms of Service at any time. Updates will be highlighted here, and your continued usage of our site or active service contracts following such changes constitutes acceptance of the new terms.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  For further clarification regarding these terms, please contact us at{" "}
                  <a href="mailto:hello@padmas.tech" className="text-primary hover:underline font-semibold">
                    hello@padmas.tech
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

import { PageHero } from "@/components/section-primitives"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Privacy Policy | Padmas Technologies",
  description: "Learn how Padmas Technologies collects, uses, and protects your information.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 10, 2026"

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}. Read about how we safeguard your personal and enterprise data.`}
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="prose dark:prose-invert max-w-none space-y-8 text-foreground/90">
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  1. Information We Collect
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We collect information to provide better services to our clients and visitors. This includes:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Personal Identity Information:</strong> Name, email address, phone number, and company name when you submit our contact forms or apply for careers.
                  </li>
                  <li>
                    <strong>Project Data:</strong> Requirements documents, codebase structures, and business context shared during consultation sessions.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Technical logs, IP addresses, browser types, and anonymous interaction metrics gathered via site performance integrations (e.g., analytics).
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  2. How We Use Information
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Your information is utilized strictly to:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Respond to project inquiries, schedule calls, and draft software development proposals.</li>
                  <li>Deliver, customize, and optimize our services, mobile apps, and cloud infrastructures.</li>
                  <li>Process employment applications submitted through our careers portal.</li>
                  <li>Ensure security, monitor system health, and prevent fraudulent activity on our network.</li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  3. Information Sharing & Disclosure
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Padmas Technologies does not sell, rent, or trade your personal data. We only share information with third parties under the following conditions:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Service Providers:</strong> Trusted cloud hosts (e.g., AWS, Azure) and CRM providers who operate under strict non-disclosure obligations.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> If required by law, court order, or governmental authorities to protect legal rights or ensure public safety.
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  4. Security & Retention
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We enforce industry-standard physical, electronic, and managerial security practices to prevent unauthorized access, alteration, or exposure of your data. We retain your information only as long as necessary to fulfill the operational requirements of our client engagements or comply with legal responsibilities.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  5. Your Rights
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Depending on your location, you may have rights under GDPR, CCPA, or regional data protection laws, including the right to request access to, correction of, or deletion of your personal data.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  For any privacy inquiries or to exercise your rights, please reach out to us at{" "}
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

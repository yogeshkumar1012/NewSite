import type { Metadata } from "next"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero, CtaBand } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { ContactFaq } from "@/components/contact-faq"

export const metadata: Metadata = {
  title: "Contact Us — Padmas Technologies",
  description: "Get in touch with Padmas Technologies. Let's discuss your next digital project.",
}

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@padmastech.com",
    href: "mailto:hello@padmastech.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 (123) 456-7890",
    href: "tel:+911234567890",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Bangalore, India",
    href: "#",
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Build Together"
        subtitle="We'd love to hear about your project. Reach out and let's explore what's possible."
      />

      {/* Contact methods */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_METHODS.map((method) => {
              const Icon = method.icon
              return (
                <RevealItem key={method.label}>
                  <a
                    href={method.href}
                    className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-heading mt-4 font-semibold">{method.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">
                      {method.value}
                    </p>
                  </a>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold">Send us a message</h2>
              <p className="mt-4 text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">
                Find answers to common questions about working with us.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <ContactFaq />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to start your project?"
        buttonLabel="Schedule a Call"
        buttonHref="/contact"
      />
    </main>
  )
}

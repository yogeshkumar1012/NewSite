import type { Metadata } from "next"
import { PageHero, SectionHeading } from "@/components/section-primitives"
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal"
import { Mail, MapPin, Phone, Send, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Padmas Technologies",
  description: "Get in touch with Padmas Technologies. Let's discuss your project, scope, and engineering requirements.",
}

const FAQS = [
  { q: "How quickly can we start the project?", a: "Once the scope and proposal are agreed upon, we can typically onboard our engineering team and start the discovery phase within 1 to 2 weeks." },
  { q: "Do you work with startups or enterprises?", a: "We work with both. We help startups design and launch MVPs, and assist enterprises with legacy modernization, cloud migration, and workflow automation." },
  { q: "What is your pricing and engagement model?", a: "We offer flexible models, including time-and-materials for agile product development, dedicated teams for scaling, and fixed-price contracts for well-defined scopes." },
  { q: "Where is the team located?", a: "Our headquarters is in HSR Layout, Bengaluru, India, but our engineers and designers work with clients globally across different time zones." },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Discuss Your Project"
        subtitle="Have an idea or a platform to scale? Fill out the form below or drop us an email, and we'll reply within 24 hours."
      />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Contact Details & Info */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-heading text-2xl font-bold text-foreground">Contact Information</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Ready to turn your vision into a scalable digital product? Reach out directly or visit our office.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">Office Address</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        HSR Layout, Sector 6, Bengaluru, Karnataka, 560102, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">Email Address</h3>
                      <p className="mt-1 text-sm text-muted-foreground">hello@padmas.tech</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">Phone Number</h3>
                      <p className="mt-1 text-sm text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                {/* Mock styled Map */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                  <div className="relative flex aspect-[16/10] items-center justify-center bg-navy p-6 text-center text-navy-foreground">
                    {/* Radial gradient background to simulate a map */}
                    <div className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                      }}
                    />
                    <div className="relative">
                      <div className="mx-auto flex size-12 animate-bounce items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                        <MapPin className="size-6" />
                      </div>
                      <h4 className="font-heading mt-4 text-sm font-semibold">Bengaluru, India</h4>
                      <p className="mt-1 text-[11px] text-white/50">HSR Layout, Sector 6</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={1}>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10">
                  <h3 className="font-heading text-xl font-bold text-foreground">Project Planner</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Scope your project and get a quote</p>
                  
                  <form className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Arjun Kumar"
                          className="mt-2 w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="arjun@company.com"
                          className="mt-2 w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765-43210"
                          className="mt-2 w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                          Company Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          placeholder="Tech Corp"
                          className="mt-2 w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                        Project Budget (Estimated)
                      </label>
                      <select
                        id="budget"
                        className="mt-2 w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50"
                      >
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                        Project Details & Requirements
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        required
                        placeholder="Tell us about the project goals, stack preference, and timeline..."
                        className="mt-2 w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/50 resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow transition-transform hover:scale-[1.01]"
                    >
                      Send Message <Send className="size-4" />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our consulting process, scoping, and project kickoffs."
          />
          <div className="mt-12 space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading flex items-start gap-2.5 text-base font-bold text-foreground">
                    <Info className="mt-0.5 size-4 text-primary shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

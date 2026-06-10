import Link from "next/link"
import Image from "next/image"
import { SERVICES } from "@/lib/site-data"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/favicon.png"
                alt="Padmas Favicon"
                width={32}
                height={32}
                className="size-8 object-contain"
              />
              <span className="font-heading text-lg font-semibold text-white">Padmas Technologies</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              Your digital transformation partner — building scalable web, mobile, AI, and enterprise
              software that drives growth.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com/company/padmas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-navy-foreground">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
              {[
                { l: "About Us", h: "/about" },
                { l: "Portfolio", h: "/portfolio" },
                { l: "Industries", h: "/industries" },
                { l: "Careers", h: "/careers" },
                { l: "Contact", h: "/contact" },
              ].map((i) => (
                <li key={i.h}>
                  <Link href={i.h} className="transition-colors hover:text-navy-foreground">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
              {[
                { l: "Insights", h: "/insights" },
                { l: "Case Studies", h: "/portfolio" },
              ].map((i) => (
                <li key={i.h}>
                  <Link href={i.h} className="transition-colors hover:text-navy-foreground">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>HSR Layout, Bengaluru, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <span>hello@padmas.tech</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-navy-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Padmas Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-navy-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-navy-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

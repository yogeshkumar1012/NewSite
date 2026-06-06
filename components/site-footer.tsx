import Link from "next/link"
import { SERVICES } from "@/lib/site-data"
import { Globe, Send, Share2, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-heading text-sm font-bold">P</span>
              </div>
              <span className="font-heading text-lg font-semibold">Padmas Technologies</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              Your digital transformation partner — building scalable web, mobile, AI, and enterprise
              software that drives growth.
            </p>
            <div className="mt-6 flex gap-3">
              {[Share2, Globe, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
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
            <a href="#" className="hover:text-navy-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-navy-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

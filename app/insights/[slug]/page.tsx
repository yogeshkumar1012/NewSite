import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/section-primitives"
import { Reveal } from "@/components/reveal"
import { BLOG_POSTS } from "@/lib/site-data"

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: "Article | Padmas Technologies" }
  return { title: `${post.title} | Padmas Technologies`, description: post.excerpt }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <SiteNavbar />
      <main>
        <section className="relative overflow-hidden bg-navy pt-36 pb-16 text-navy-foreground sm:pt-40">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-10 size-72 rounded-full bg-primary/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-3xl px-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" /> Back to Insights
            </Link>
            <span className="mt-6 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {post.category}
            </span>
            <h1 className="font-heading mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
              <span className="font-medium text-white">{post.author}</span>
              <span>•</span>
              <span>{post.role}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="px-6">
          <Reveal className="mx-auto -mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border shadow-xl">
            <div className="relative aspect-[16/9]">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          </Reveal>
        </section>

        <article className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose-padmas space-y-6 leading-relaxed text-foreground/90">
            <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

            <h2 className="font-heading text-2xl font-bold text-foreground">Introduction</h2>
            <p>
              In today&apos;s fast-moving technology landscape, teams are under constant pressure to ship faster
              without sacrificing quality. {post.title} is no longer a niche concern — it&apos;s central to how
              modern, resilient products are built and scaled.
            </p>
            <p>
              At Padmas Technologies, we&apos;ve seen firsthand how the right architectural decisions, made early,
              compound into massive advantages over the lifetime of a product. This article distills the patterns
              we rely on in production.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground">Why It Matters</h2>
            <p>
              The cost of getting foundations wrong grows exponentially with scale. Investing in clarity,
              observability, and well-defined boundaries pays dividends as teams and traffic grow.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Faster iteration with fewer regressions</li>
              <li>Predictable performance under load</li>
              <li>Lower long-term maintenance cost</li>
              <li>Happier, more productive engineering teams</li>
            </ul>

            <blockquote className="rounded-r-xl border-l-4 border-primary bg-secondary px-6 py-4 italic text-foreground">
              &ldquo;Good architecture is less about predicting the future and more about keeping your options
              open.&rdquo;
            </blockquote>

            <h2 className="font-heading text-2xl font-bold text-foreground">Practical Takeaways</h2>
            <p>
              Start small, measure relentlessly, and refactor with confidence backed by tests and monitoring. The
              teams that win aren&apos;t the ones that avoid change — they&apos;re the ones built to absorb it.
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground">Conclusion</h2>
            <p>
              Whether you&apos;re scaling an existing platform or starting fresh, the principles above provide a
              durable foundation. If you&apos;d like to discuss how they apply to your product, our team is always
              happy to help.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground">{post.author}</p>
              <p className="text-sm text-muted-foreground">{post.role}, Padmas Technologies</p>
            </div>
          </div>
        </article>

        <section className="bg-secondary px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading text-2xl font-bold text-foreground">Related articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</span>
                    <h3 className="font-heading mt-2 font-semibold text-foreground">{p.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <CtaBand title="Have a project in mind?" subtitle="Let's turn these ideas into your next product." />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}

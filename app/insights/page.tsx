import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, CtaBand } from "@/components/section-primitives"
import { Reveal } from "@/components/reveal"
import { InsightsList } from "@/components/insights-list"

export const metadata: Metadata = {
  title: "Insights | Padmas Technologies",
  description: "Thought leadership and technical articles on software engineering, AI, cloud, and design.",
}

export default function InsightsPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <PageHero
          eyebrow="Blog & Insights"
          title="Latest Thinking from Our Team"
          subtitle="Deep dives, practical guides, and strategic perspectives on building modern software."
        />
        <InsightsList />
        <Reveal>
          <CtaBand
            title="Want these insights in your inbox?"
            subtitle="Let's talk about how these ideas apply to your product."
            buttonLabel="Get in Touch"
          />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}

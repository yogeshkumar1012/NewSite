import { HeroSection } from "@/components/home/hero-section"
import {
  AboutSection,
  ServicesSection,
  IndustriesSection,
  ProcessSection,
  WhyChooseSection,
  CaseStudiesSection,
  TestimonialsSection,
  TechStackSection,
  InsightsSection,
} from "@/components/home/sections"
import { CtaBand } from "@/components/section-primitives"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <TechStackSection />
      <InsightsSection />
      <CtaBand
        title="Ready to Build Your Next Digital Product?"
        subtitle="Join 50+ industry leaders who trust Padmas with their high-end engineering solutions."
      />
    </main>
  )
}

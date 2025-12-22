import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhySeoSection } from "@/components/why-seo-section"
import { AiReadySection } from "@/components/ai-ready-section"
import { MethodologySection } from "@/components/methodology-section"
import { CaseStudies } from "@/components/case-studies"
import { BlogSection } from "@/components/blog-section"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhySeoSection />
      <AiReadySection />
      <MethodologySection />
      <CaseStudies />
      <BlogSection />
      <ContactCta />
      <Footer />
    </main>
  )
}

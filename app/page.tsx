import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhySeoSection } from "@/components/why-seo-section"
import { AiReadySection } from "@/components/ai-ready-section"
import { MethodologySection } from "@/components/methodology-section"
import { CaseStudies } from "@/components/case-studies"
import { BlogSection } from "@/components/blog-section"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export const metadata: Metadata = {
  title: "知定智能 - SEO架构顾问 | 构建长期增长资产",
  description:
    "专注于制造业与品牌客户的SEO架构咨询。从网站建设到长期运营，构建AI就绪、GEO感知的搜索系统，实现可持续的自然流量增长。",
  alternates: {
    canonical: baseUrl,
  },
}

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "知定智能",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "专注于制造业与品牌客户的SEO架构咨询。从网站建设到长期运营，构建AI就绪、GEO感知的搜索系统，实现可持续的自然流量增长。",
    sameAs: [],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "知定智能",
    url: baseUrl,
    description: "专注于制造业与品牌客户的SEO架构咨询。从网站建设到长期运营，构建AI就绪、GEO感知的搜索系统，实现可持续的自然流量增长。",
    publisher: {
      "@type": "Organization",
      name: "知定智能",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
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
    </>
  )
}
